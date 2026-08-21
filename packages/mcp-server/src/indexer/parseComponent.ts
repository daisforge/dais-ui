/* eslint-disable no-continue */
/* eslint-disable no-bitwise */
import path from 'node:path';

import type {
  ArrowFunction,
  ExportedDeclarations,
  FunctionDeclaration,
  FunctionExpression,
  JSDoc,
  ParameterDeclaration,
  SourceFile,
  Symbol as TsSymbol,
  Type,
  TypeParameterDeclaration,
} from 'ts-morph';
import { Node, SymbolFlags, SyntaxKind, ts } from 'ts-morph';

import type { CompoundPart, PropRecord } from '../types.js';
import type { ComponentEntry } from './discoverComponents.js';
import { isNoiseProp, isReactDomDescription } from './htmlAttributeDenylist.js';
import { getProject, UI_KIT_SRC } from './tsProject.js';

const MAX_PROP_TYPE_CHARS = 400;
export const MAX_RAW_TYPE_CHARS = 6000;

type RenderFunction = FunctionDeclaration | ArrowFunction | FunctionExpression;

/** Найденный по имени тип пропсов — resolvePropsType умеет откатываться на сырой текст узла. */
interface NamedPropsRef {
  name: string;
  decl: ExportedDeclarations;
  inlineParamNode?: undefined;
}
/** Инлайновый тип первого параметра render-функции — именованной декларации нет. */
interface InlinePropsRef {
  name: string;
  decl?: undefined;
  inlineParamNode: ParameterDeclaration;
}
type PropsRef = NamedPropsRef | InlinePropsRef;

interface ResolvedPropsType {
  typeName?: string;
  props: PropRecord[];
  rawType?: string;
  isGeneric?: true;
}

interface CompoundAssignment {
  subName: string;
  localName: string;
}

export interface ParsedComponent {
  error?: undefined;
  name: string;
  description: string;
  deprecated: boolean;
  deprecationReason?: string;
  pureAtomicReExport: boolean;
  /**
   * Реальное имя символа в @salutejs/sdds-finai (может отличаться от `name`,
   * если ui-kit реэкспортирует атом под другим локальным именем — например
   * `import { Popover as PopoverBeta } from '@salutejs/sdds-finai/beta'`).
   * Заполняется только при pureAtomicReExport.
   */
  atomicName?: string;
  /** Атом импортирован из @salutejs/sdds-finai/beta, а не из основного пакета. */
  atomicSubpath?: 'beta';
  declaredInUiKit: boolean;
  declarationFile: string;
  props: PropRecord[];
  propsTypeName?: string;
  rawType?: string;
  isGeneric?: true;
  compoundParts?: CompoundPart[];
}

export interface ParseFailure {
  error: string;
  name: string;
}

/** Сужающий guard для ParsedComponent | ParseFailure — тот же приём, что isOkComponent в types.ts. */
export function isParsedComponent(
  p: ParsedComponent | ParseFailure,
): p is ParsedComponent {
  return p.error === undefined;
}

/** Обрезает строку с явным маркером — не молча теряет данные. */
export function clip(
  text: string | undefined,
  max: number,
): string | undefined {
  if (!text) return text;
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

const IMPORT_PATH_PREFIX_RE = /import\("[^"]*"\)\./g;

/**
 * Тайпчекер печатает ссылки на типы из других файлов как
 * `import("/абсолютный/путь/к/модулю").TypeName` — путь конкретной машины
 * утекает в текст пропса (1029 пропсов в 99 компонентах на момент находки)
 * и впустую жрёт бюджет ответа. Оставляем только `TypeName`.
 */
export function stripImportPaths(text: string): string {
  return text.replace(IMPORT_PATH_PREFIX_RE, '');
}

/** Именованный тип, структурно найденный среди типов пропсов — вход для indexTypes.ts. */
export interface CollectedTypeDecl {
  name: string;
  decl: Node;
}

/**
 * Типы пропсов, собранные за весь прогон индексера (module-level, как
 * cachedProject в tsProject.ts или cachedDenylistMap в
 * htmlAttributeDenylist.ts) — buildIndex.ts вызывает parseComponent для
 * каждого компонента синхронно в один процесс, поэтому один общий Map
 * корректно копит находки по всему прогону. Значение — МАССИВ, а не
 * одна декларация: TableCanvas активно переиспользует общие имена типов
 * (свой `ColumnConfig`, отдельный от легаси-`Table.ColumnConfig`), и первое
 * найденное молча маскировало бы остальные при обычном dedup-by-name. Каждая
 * РАЗНАЯ по файлу декларация под одним именем сохраняется отдельно —
 * indexTypes.ts решает, как их различить в итоговых ключах индекса.
 */
const collectedTypeDecls = new Map<string, CollectedTypeDecl[]>();

export function getCollectedTypeDecls(): CollectedTypeDecl[][] {
  return [...collectedTypeDecls.values()];
}

/**
 * Записывает символ как найденный тип, если его декларация — type alias/
 * interface внутри самого ui-kit. Дедуп — по паре (имя, файл декларации):
 * разные типы с одинаковым именем в разных файлах сохраняются оба (см.
 * collectedTypeDecls), но повторные ссылки на ОДИН И ТОТ ЖЕ тип из разных
 * пропсов не плодят дубликаты. true, если что-то записано (или уже было) —
 * вызывающий код использует это, чтобы решить, надо ли ещё разворачивать
 * структуру типа (см. collectNamedTypeRefs).
 */
function recordTypeSymbol(symbol: TsSymbol): boolean {
  const decl = symbol.getDeclarations()[0];
  if (!decl) return false;
  if (
    !Node.isTypeAliasDeclaration(decl) &&
    !Node.isInterfaceDeclaration(decl)
  ) {
    return false;
  }
  if (!decl.getSourceFile().getFilePath().includes('/packages/ui-kit/src/')) {
    return false;
  }

  const name = symbol.getName();
  const filePath = decl.getSourceFile().getFilePath();
  const existing = collectedTypeDecls.get(name) ?? [];
  if (
    !existing.some((e) => e.decl.getSourceFile().getFilePath() === filePath)
  ) {
    existing.push({ name, decl });
    collectedTypeDecls.set(name, existing);
  }
  return true;
}

/**
 * Структурно (не по тексту типа — там мусор вроде React.ReactNode/Omit и
 * коллизии имён) находит именованные типы, на которые реально ссылается
 * проп, и копит их для индексации. Раскрывает обёртки массива/union/
 * intersection (`MassActionsButtonProps[] | undefined` сам по себе не имеет
 * alias-символа — он есть только у элемента массива), останавливаясь, как
 * только находит именованную декларацию — без рекурсии в её собственное
 * тело (агент при необходимости запросит её отдельным вызовом get_type).
 * Индексируем только типы, объявленные в самом ui-kit — типы React/DOM и
 * @salutejs/* уже приходят как inheritedProps/готовые примитивы.
 */
function collectNamedTypeRefs(type: Type, seen: Set<Type>): void {
  if (seen.has(type)) return;
  seen.add(type);

  // Alias-символ проверяем ПЕРВЫМ, до любого структурного разбора: у типа,
  // объявленного как `type X = A | B`, одновременно isUnion() === true И
  // getAliasSymbol() === X — если сначала развернуть union, имя X (то,
  // что реально написано в проп-типе, `X[]`/`X | undefined`) потеряется,
  // а вместо него найдутся A/B по отдельности. Раскрываем union/intersection/
  // array только когда у типа НЕТ собственного имени — иначе останавливаемся
  // на найденном алиасе (агент при необходимости заглянет глубже вторым
  // вызовом get_type, как и для обычных вложенных ссылок).
  const aliasSymbol = type.getAliasSymbol();
  if (aliasSymbol) {
    recordTypeSymbol(aliasSymbol);
    return;
  }

  if (type.isArray()) {
    const elementType = type.getArrayElementType();
    if (elementType) collectNamedTypeRefs(elementType, seen);
    return;
  }
  if (type.isUnion()) {
    type.getUnionTypes().forEach((t) => collectNamedTypeRefs(t, seen));
    return;
  }
  if (type.isIntersection()) {
    type.getIntersectionTypes().forEach((t) => collectNamedTypeRefs(t, seen));
    return;
  }

  const symbol = type.getSymbol();
  if (symbol) recordTypeSymbol(symbol);
}

function getJsDocs(node: Node): JSDoc[] {
  return Node.isJSDocable(node) ? node.getJsDocs() : [];
}

function getJsDocDescription(jsDocable: Node): string {
  const docs = getJsDocs(jsDocable);
  return docs
    .map((d) => d.getDescription().trim())
    .filter(Boolean)
    .join('\n');
}

function isDeprecated(jsDocable: Node): boolean {
  const docs = getJsDocs(jsDocable);
  return docs.some((d) =>
    d.getTags().some((t) => t.getTagName() === 'deprecated'),
  );
}

function getDeprecatedReason(jsDocable: Node): string | undefined {
  const docs = getJsDocs(jsDocable);
  for (const d of docs) {
    for (const t of d.getTags()) {
      if (t.getTagName() === 'deprecated') {
        return t.getCommentText()?.trim() || undefined;
      }
    }
  }
  return undefined;
}

/**
 * Второй, более редкий источник дефолта (TASKS.md T6) — тег `@default` в
 * JSDoc самого пропса (`/** @default 'm' *\/ size?: Size`). Применяется как
 * фолбэк в extractPropsFromType, только если деструктуризация параметра
 * (collectDestructuringDefaults) не дала значения для этого имени.
 */
function getJsDocDefault(jsDocable: Node): string | undefined {
  const docs = getJsDocs(jsDocable);
  for (const d of docs) {
    for (const t of d.getTags()) {
      if (t.getTagName() === 'default') {
        return t.getCommentText()?.trim() || undefined;
      }
    }
  }
  return undefined;
}

const MAX_DEFAULT_CHARS = 60;

/**
 * Основной источник дефолтов (TASKS.md T6) — деструктуризация первого
 * параметра render-функции: `({ size = 'm', view = 'default', ...rest })` —
 * самый распространённый в кодовой базе паттерн. Ключ — имя ПРОПСА (левая
 * часть `propertyName: localName`, если есть переименование; иначе то же имя,
 * что и локальная переменная), не локальное имя переменной — иначе
 * `{ size: sizeProp = 'm' }` не смэтчился бы с пропсом `size`. Rest-элемент
 * (`...rest`) пропускается — у него нет содержательного имени пропса.
 */
function collectDestructuringDefaults(
  fn: RenderFunction | undefined,
): Map<string, string> {
  const map = new Map<string, string>();
  const nameNode = fn?.getParameters()[0]?.getNameNode();
  if (!nameNode || !Node.isObjectBindingPattern(nameNode)) return map;

  for (const element of nameNode.getElements()) {
    if (element.getDotDotDotToken()) continue; // ...rest
    const init = element.getInitializer();
    if (!init) continue;
    const propName =
      element.getPropertyNameNode()?.getText() ?? element.getName();
    const text = clip(init.getText(), MAX_DEFAULT_CHARS);
    if (text) map.set(propName, text);
  }

  return map;
}

/**
 * Резолвит имя, экспортируемое из barrel-файла, до его конечной декларации
 * (следуя через re-export цепочки — в этом и ценность getExportedDeclarations
 * вместо ручного парсинга import/export specifiers).
 */
function resolveExportedDeclaration(
  barrelSourceFile: SourceFile,
  name: string,
): ExportedDeclarations | undefined {
  return barrelSourceFile.getExportedDeclarations().get(name)?.[0];
}

function isInPackage(sourceFile: SourceFile, pkgName: string): boolean {
  const filePath = sourceFile.getFilePath();
  return filePath.includes(`/node_modules/${pkgName}/`);
}

/**
 * Находит тип пропсов компонента среди экспортов barrel-файла: по
 * соглашению имени (`${Name}Props`, `${Name}CompProps`) либо — если не
 * нашли — среди всех экспортов, заканчивающихся на "Props".
 */
function findPropsDeclaration(
  barrelSourceFile: SourceFile,
  componentName: string,
): NamedPropsRef | undefined {
  const map = barrelSourceFile.getExportedDeclarations();
  const candidates = [`${componentName}Props`, `${componentName}CompProps`];

  for (const candidate of candidates) {
    const decl = map.get(candidate)?.[0];
    if (decl) return { name: candidate, decl };
  }

  for (const [name, decls] of map.entries()) {
    if (
      name.endsWith('Props') &&
      name.toLowerCase().includes(componentName.toLowerCase()) &&
      decls[0]
    ) {
      return { name, decl: decls[0] };
    }
  }

  return undefined;
}

function isInlineRenderFunction(
  node: Node,
): node is ArrowFunction | FunctionExpression {
  return Node.isArrowFunction(node) || Node.isFunctionExpression(node);
}

/**
 * Разворачивает forwardRef(...)/memo(...) обёртку до самой render-функции.
 */
function unwrapToRenderFunction(
  node: ExportedDeclarations,
): RenderFunction | undefined {
  if (Node.isFunctionDeclaration(node) || isInlineRenderFunction(node)) {
    return node;
  }
  if (Node.isVariableDeclaration(node)) {
    const init = node.getInitializer();
    if (!init) return undefined;
    if (isInlineRenderFunction(init)) return init;
    if (Node.isCallExpression(init)) {
      return init.getArguments().find(isInlineRenderFunction);
    }
  }
  return undefined;
}

/**
 * Фолбек, когда компонент не экспортирует именованный тип пропсов из barrel
 * (случай TableCanvas/Table — `TableProps` объявлен, но не реэкспортирован
 * под предсказуемым именем). Берём тип первого параметра самой render-функции.
 * Если это ссылка на именованный alias/interface — переиспользуем ту же
 * логику (и тот же generic-фолбек), что и для найденных по имени пропсов.
 */
function findPropsDeclFromSignature(
  mainDecl: ExportedDeclarations,
  componentName: string,
): PropsRef | undefined {
  const fn = unwrapToRenderFunction(mainDecl);
  const param = fn?.getParameters()[0];
  const typeNode = param?.getTypeNode();
  if (!param || !typeNode) return undefined;

  if (Node.isTypeReference(typeNode)) {
    const symbol = typeNode.getTypeName().getSymbol();
    const decl = symbol?.getDeclarations()[0];
    if (
      decl &&
      (Node.isTypeAliasDeclaration(decl) || Node.isInterfaceDeclaration(decl))
    ) {
      return { name: decl.getName(), decl };
    }
  }

  // Инлайновый тип литерала/пересечения без отдельного имени — не критично,
  // просто извлекаем свойства прямо из типа параметра.
  return {
    name: `${componentName}Props`,
    inlineParamNode: param,
  };
}

function getTypeParameters(
  decl: ExportedDeclarations,
): TypeParameterDeclaration[] {
  if (Node.isTypeAliasDeclaration(decl) || Node.isInterfaceDeclaration(decl)) {
    return decl.getTypeParameters();
  }
  return [];
}

/** Свойство `type` в резолве через checker может отсутствовать у mapped/computed членов. */
function safeGetPropertyType(prop: TsSymbol, node: Node): Type | undefined {
  try {
    return prop.getTypeAtLocation(node);
  } catch {
    return undefined;
  }
}

/**
 * true — свойство объявлено в том же файле, что и сам тип пропсов (значит,
 * это поле, которое компонент реально описал сам), а не унаследовано через
 * spread другого типа вроде `BoxProps & { title?: ... }` (объявлен в файле
 * Box, а не DrawerDF). Используется для сортировки — см. extractPropsFromType.
 */
function isOwnFileDeclaration(
  decl: Node | undefined,
  ownFilePath: string,
): boolean {
  return (
    decl !== undefined && decl.getSourceFile().getFilePath() === ownFilePath
  );
}

/**
 * Итоговый порядок пропсов (TASKS.md T7): `required` → с описанием → без
 * описания → `deprecated` в самый конец (переопределяет required — устаревший
 * обязательный пропс всё равно уходит в хвост). При обрезке по бюджету
 * (truncateForResponse режет большие ответы по символам без учёта структуры,
 * см. tools/truncate.ts) теряется наименее нужное подмножество, а не
 * случайное. Внутри яруса — сперва поля, объявленные в том же файле, что и
 * сам тип пропсов (собственные, не унаследованные через spread чужого типа
 * вроде `BoxProps & { title?: ... }` — тот приём, что раньше решал проблему
 * DrawerDF.Header, где CSS/layout-пропсы BoxProps съедали лимит раньше
 * `title`/`subTitle`/`rightBlock`), затем — по алфавиту, для стабильности
 * диффов индекса.
 */
function propTier(record: PropRecord): number {
  if (record.deprecated) return 3;
  if (record.required) return 0;
  return record.description ? 1 : 2;
}

function sortProps(
  entries: { record: PropRecord; ownFile: boolean }[],
): PropRecord[] {
  return entries
    .slice()
    .sort((a, b) => {
      const tierDiff = propTier(a.record) - propTier(b.record);
      if (tierDiff !== 0) return tierDiff;
      if (a.ownFile !== b.ownFile) return a.ownFile ? -1 : 1;
      return a.record.name.localeCompare(b.record.name);
    })
    .map((e) => e.record);
}

function extractPropsFromType(
  type: Type,
  atLocationNode: Node,
  defaultsMap?: Map<string, string>,
): PropRecord[] {
  const ownFilePath = atLocationNode.getSourceFile().getFilePath();
  const entries: { record: PropRecord; ownFile: boolean }[] = [];

  for (const symbol of type.getProperties()) {
    const decl: Node | undefined =
      symbol.getValueDeclaration() ?? symbol.getDeclarations()[0];
    const propType = safeGetPropertyType(symbol, decl ?? atLocationNode);
    const fullTypeText = propType ? propType.getText() : 'unknown';
    const name = symbol.getName();

    // Шум от ComponentProps<typeof X>: ~300 унаследованных DOM/ARIA-атрибутов
    // и React-статиков. Фильтруем по имени+типу, а не только по имени — иначе
    // потеряли бы реально переопределённые пропсы вроде Switch.size: "s"|"m"|"l".
    if (isNoiseProp(name, fullTypeText)) continue;

    if (propType) collectNamedTypeRefs(propType, new Set());

    // SymbolFlags.Optional — сигнал от самого тайпчекера после резолва
    // union/intersection, надёжнее чем questionToken на одной из деклараций
    // (при пересечении типов может быть несколько деклараций одного символа).
    const optional = Boolean(symbol.getFlags() & SymbolFlags.Optional);

    let description = '';
    try {
      const parts = symbol.compilerSymbol.getDocumentationComment(
        getProject().getTypeChecker().compilerObject,
      );
      description = ts.displayPartsToString(parts).trim();
    } catch {
      // no doc comment resolvable — не критично
    }

    // TASKS.md T7, п.2: пропсы вроде `role`/`tabIndex`/`color` дизайн-система
    // переопределяет по ТИПУ (проходят isNoiseProp выше), но их описание
    // может остаться нетронутым унаследованным React DOM-текстом
    // ("Indicates the current…") — токены на ветер, дословно совпадающие с
    // денылистом. Не проп-шум (тип-то осмысленный), а описание-шум.
    if (description && isReactDomDescription(name, description)) {
      description = '';
    }

    const deprecated =
      decl !== undefined &&
      (Node.isPropertySignature(decl) || Node.isPropertyDeclaration(decl))
        ? isDeprecated(decl)
        : false;
    const defaultValue =
      defaultsMap?.get(name) ??
      (decl !== undefined &&
      (Node.isPropertySignature(decl) || Node.isPropertyDeclaration(decl))
        ? getJsDocDefault(decl)
        : undefined);

    const record: PropRecord = {
      name,
      type: clip(stripImportPaths(fullTypeText), MAX_PROP_TYPE_CHARS) as string,
      required: !optional,
      description,
      ...(deprecated ? { deprecated: true as const } : {}),
      ...(defaultValue ? { default: defaultValue } : {}),
    };

    entries.push({ record, ownFile: isOwnFileDeclaration(decl, ownFilePath) });
  }

  return sortProps(entries);
}

/**
 * Порог "нечитаемой простыни" для generic-пропсов (см. resolvePropsType).
 * Число пропсов само по себе не сигнал плохого резолва — среди обычных
 * (не-generic) компонентов легитимно встречается 96-190 своих пропсов
 * (замер на текущем индексе), так что MAX_GENERIC_PROPS — не порог
 * качества, а чисто защитный потолок на случай патологического взрыва
 * членов (рекурсивный mapped-тип и т.п.), с запасом выше макс. легитимного.
 * Настоящий сигнал мусора — доля пропсов с нерезолвящимся ("unknown")
 * типом: если она большая, значит type-параметры генерика не подставились
 * и типы не резолвятся осмысленно — тогда откатываемся на сырой текст типа.
 */
const MAX_GENERIC_PROPS = 300;
const MAX_UNKNOWN_PROP_RATIO = 0.3;

/**
 * Когда своя типовая декларация не резолвлена (unresolved type parameter),
 * тайпчекер печатает доступ к её полям как есть — `SomeProps<T>["autoFocus"]`
 * — вместо конкретного типа. Обнаружено вживую на TypographyWithAutoTooltip:
 * из-за этого проваливается денылист DOM-шума в isNoiseProp (сравнение идёт
 * по точному тексту типа, а `boolean | undefined` != `X<T>["autoFocus"]`),
 * и ~280 унаследованных DOM/ARIA-атрибутов просачиваются как "настоящие"
 * пропсы. Текст-то не буквально "unknown", но так же бесполезен — считаем
 * его мусором наравне с unknown при оценке доли шума.
 */
const UNRESOLVED_GENERIC_ACCESS_RE =
  /\w+<[^<>]*>\["[^"]+"\](\s*\|\s*undefined)?$/;

function isUselessResolvedType(typeText: string): boolean {
  return typeText === 'unknown' || UNRESOLVED_GENERIC_ACCESS_RE.test(typeText);
}

/**
 * Структурный резолв пропсов дженерика через тайпчекер — работает для
 * простых пересечений вроде `TMutationRegister<T> & TPropsFromMask & TProps`
 * (один type-параметр, все члены пересечения резолвятся структурно
 * независимо от того, что T не подставлен). Возвращает undefined, если
 * результат похож на "нечитаемую простыню" — тогда resolvePropsType
 * откатывается на сырой текст типа, как раньше.
 */
function tryExtractGenericProps(
  decl: NamedPropsRef['decl'],
  defaultsMap: Map<string, string>,
): PropRecord[] | undefined {
  if (
    !Node.isTypeAliasDeclaration(decl) &&
    !Node.isInterfaceDeclaration(decl)
  ) {
    return undefined;
  }

  let props: PropRecord[];
  try {
    props = extractPropsFromType(decl.getType(), decl, defaultsMap);
  } catch {
    return undefined;
  }

  if (props.length === 0 || props.length > MAX_GENERIC_PROPS) return undefined;

  const uselessCount = props.filter((p) =>
    isUselessResolvedType(p.type),
  ).length;
  if (uselessCount / props.length > MAX_UNKNOWN_PROP_RATIO) return undefined;

  return props.filter((p) => !isUselessResolvedType(p.type));
}

/**
 * Пропсы компонента: обычный резолв через тайпчекер, но с фолбеком на сырой
 * текст типа для сложных дженериков (TableProps<...> и подобные) — тот же
 * приём, что copyTypeAsStringSync в generators/meta-info, только проще:
 * у нас уже есть AST-узел, поэтому просто берём node.getText().
 */
function resolvePropsType(
  propsRef: PropsRef,
  defaultsMap: Map<string, string>,
): ResolvedPropsType {
  if (propsRef.decl === undefined) {
    const { name, inlineParamNode } = propsRef;
    try {
      return {
        typeName: name,
        props: extractPropsFromType(
          inlineParamNode.getType(),
          inlineParamNode,
          defaultsMap,
        ),
      };
    } catch {
      return { typeName: name, props: [] };
    }
  }

  const { name, decl } = propsRef;
  const typeParams = getTypeParameters(decl);

  if (typeParams.length > 0) {
    const structuralProps = tryExtractGenericProps(decl, defaultsMap);
    return {
      typeName: name,
      rawType: clip(stripImportPaths(decl.getText()), MAX_RAW_TYPE_CHARS),
      props: structuralProps ?? [],
      isGeneric: true,
    };
  }

  try {
    const type =
      Node.isTypeAliasDeclaration(decl) || Node.isInterfaceDeclaration(decl)
        ? decl.getType()
        : undefined;

    if (!type) {
      return {
        typeName: name,
        rawType: clip(stripImportPaths(decl.getText()), MAX_RAW_TYPE_CHARS),
        props: [],
      };
    }

    const props = extractPropsFromType(type, decl, defaultsMap);
    return { typeName: name, props };
  } catch {
    return {
      typeName: name,
      rawType: clip(stripImportPaths(decl.getText()), MAX_RAW_TYPE_CHARS),
      props: [],
    };
  }
}

/**
 * Виртуальный файл-пробник для семантического фолбэка (см.
 * tryExtractViaComponentProps) — один на весь прогон индексера, содержимое
 * целиком перезаписывается на каждый вызов. Лежит внутри UI_KIT_SRC (а не,
 * скажем, в mcp-server), чтобы `import type { ComponentProps } from 'react'`
 * резолвился ровно так же, как для настоящих файлов ui-kit — react там уже
 * гарантированно резолвится через тот же tsconfig/node_modules.
 */
let probeSourceFile: SourceFile | undefined;
function getProbeSourceFile(): SourceFile {
  if (!probeSourceFile) {
    const probePath = path.join(UI_KIT_SRC, '__mcp_component_props_probe__.ts');
    probeSourceFile = getProject().createSourceFile(probePath, '', {
      overwrite: true,
    });
  }
  return probeSourceFile;
}

let probeCounter = 0;

/**
 * Финальный фолбэк, когда ни именованный Props-тип (findPropsDeclaration),
 * ни render-функция с параметром (findPropsDeclFromSignature) не найдены —
 * типичный случай для чистых реэкспортов из @salutejs/plasma-new-hope
 * (AccordionItem, ButtonBase, CellTextbox...): в .d.ts они объявлены как
 * `export declare const X: ForwardRefExoticComponent<Props & RefAttributes>`
 * БЕЗ инициализатора, поэтому unwrapToRenderFunction не может дойти до тела
 * функции — там его просто нет, .d.ts не содержит реализации. Тот же провал
 * и для styled-компонентов с инлайновым дженериком (`styled.div<{...}>`) —
 * `styled.div<T>` это TaggedTemplateExpression, не render-функция.
 *
 * Вместо разбора AST берём у тайпчекера тип самого экспорта (он есть всегда
 * — это тип объявления, а не тип инициализатора) и прогоняем его через
 * ComponentProps<T> — тот же паттерн, которым уже пользуется .probe/
 * validate.ts для проверки индекса против реальных типов. ComponentProps
 * сама умеет разворачивать ForwardRefExoticComponent/FunctionComponent/
 * class-компоненты/styled-components — не нужно вручную разбирать эти формы.
 */
function tryExtractViaComponentProps(
  mainDecl: ExportedDeclarations,
  defaultsMap: Map<string, string>,
): PropRecord[] | undefined {
  let declType: Type;
  try {
    declType = mainDecl.getType();
  } catch {
    return undefined;
  }

  // Без enclosing-node — иначе принтер печатает типы "как в исходном файле"
  // (короткие локальные имена вроде голого `CellTextboxProps`, доступные
  // только там благодаря его собственным импортам), а не как
  // `import("...").CellTextboxProps` — в файле-пробнике таких импортов нет,
  // и голое имя не резолвится (тихо ловится catch ниже как несуществующий
  // тип). Без enclosing-node тайпчекер всегда квалифицирует типы полным
  // путём — тем же приёмом, который потом снимает stripImportPaths.
  const rawTypeText = declType.getText();
  if (!rawTypeText || rawTypeText === 'any' || rawTypeText === 'unknown') {
    return undefined;
  }

  probeCounter += 1;
  const aliasName = `__MCPProbe${probeCounter}`;
  const file = getProbeSourceFile();

  try {
    file.replaceWithText(
      `import type { ComponentProps } from 'react';\ntype ${aliasName} = ComponentProps<${rawTypeText}>;\n`,
    );
    const alias = file.getTypeAliasOrThrow(aliasName);
    const props = extractPropsFromType(alias.getType(), alias, defaultsMap);
    return props.length > 0 ? props : undefined;
  } catch {
    return undefined;
  }
}

/** Ищет паттерн `Component.Sub = LocalName;` — compound-компоненты (DrawerDF.Header и т.п.). */
function findCompoundAssignments(
  mainSourceFile: SourceFile | undefined,
  componentName: string,
): CompoundAssignment[] {
  if (!mainSourceFile) return [];

  const assignments: CompoundAssignment[] = [];
  const binaryExprs = mainSourceFile.getDescendantsOfKind(
    SyntaxKind.BinaryExpression,
  );

  for (const expr of binaryExprs) {
    if (expr.getOperatorToken().getText() !== '=') continue;
    const left = expr.getLeft();
    if (!Node.isPropertyAccessExpression(left)) continue;
    if (left.getExpression().getText() !== componentName) continue;

    const subName = left.getName();
    const right = expr.getRight();
    if (Node.isIdentifier(right)) {
      assignments.push({ subName, localName: right.getText() });
    }
  }

  return assignments;
}

/**
 * Многие compound-подкомпоненты (DrawerDF.Header и т.п.) не реэкспортируют
 * свой Props-тип из barrel — он объявлен, но остаётся "внутренним" (типа
 * `DrawerDFHeaderProps` в types.ts). Ищем такие декларации напрямую в файлах
 * папки компонента, не только среди экспортов barrel-файла.
 */
function findLocalTypeDeclaration(
  compDir: string | undefined,
  typeName: string,
): NamedPropsRef | undefined {
  if (!compDir) return undefined;
  for (const sourceFile of getProject().getSourceFiles()) {
    if (!sourceFile.getFilePath().startsWith(compDir)) continue;
    const decl =
      sourceFile.getTypeAlias(typeName) ?? sourceFile.getInterface(typeName);
    if (decl) return { name: typeName, decl };
  }
  return undefined;
}

function resolveCompoundPart(
  barrelSourceFile: SourceFile,
  componentName: string,
  subName: string,
  localName: string,
  compDir: string | undefined,
): CompoundPart {
  const propsRef =
    findPropsDeclaration(barrelSourceFile, localName) ??
    findPropsDeclaration(barrelSourceFile, subName) ??
    findLocalTypeDeclaration(compDir, `${componentName}${subName}Props`) ??
    findLocalTypeDeclaration(compDir, `${localName}Props`);

  const localDecl = resolveExportedDeclaration(barrelSourceFile, localName);
  // Дефолты compound-части читаются из её СОБСТВЕННОЙ render-функции
  // (localDecl), не из render-функции родителя — `DrawerDF.Header`
  // деструктурирует свои пропсы независимо от `DrawerDF` (TASKS.md T6).
  const defaultsMap = collectDestructuringDefaults(
    localDecl && unwrapToRenderFunction(localDecl),
  );

  let resolved: ResolvedPropsType | undefined;
  if (propsRef) {
    resolved = resolvePropsType(propsRef, defaultsMap);
  } else {
    const sigPropsRef =
      localDecl && findPropsDeclFromSignature(localDecl, localName);
    if (sigPropsRef) resolved = resolvePropsType(sigPropsRef, defaultsMap);
  }

  // Тот же финальный фолбэк, что и у parseComponent для top-level компонента
  // (см. вызов ниже, ~строка 788): без него для compound-частей без своего
  // именованного Props-типа и без параметра render-функции (реэкспорт из
  // @salutejs/sdds-finai без инициализатора) остаётся только сырой текст
  // типа — до 400 символов нечитаемых вложенных Omit<...>, см. TASKS.md T13.
  if (
    (!resolved || (resolved.props.length === 0 && !resolved.isGeneric)) &&
    localDecl
  ) {
    const viaComponentProps = tryExtractViaComponentProps(
      localDecl,
      defaultsMap,
    );
    if (viaComponentProps) {
      resolved = {
        typeName: resolved?.typeName ?? `ComponentProps<typeof ${localName}>`,
        props: viaComponentProps,
      };
    }
  }

  return { name: subName, ...(resolved ?? { props: [] }) };
}

/**
 * Разбирает один компонент: где реально объявлен (локально/через реэкспорт
 * из @salutejs/sdds-finai), его пропсы, compound-части, deprecated.
 */
export function parseComponent({
  name,
  barrelPath,
  dir,
}: ComponentEntry): ParsedComponent | ParseFailure {
  const project = getProject();
  const barrelSourceFile = project.getSourceFileOrThrow(barrelPath);

  const mainDecl = resolveExportedDeclaration(barrelSourceFile, name);
  if (!mainDecl) {
    return { name, error: `export "${name}" не найден в barrel-файле` };
  }

  const mainSourceFile = mainDecl.getSourceFile();
  const pureAtomicReExport = isInPackage(
    mainSourceFile,
    '@salutejs/sdds-finai',
  );
  // Для чистого реэкспорта берём имя символа там, где он реально объявлен
  // в sdds-finai — не `name` (локальное имя в barrel-файле ui-kit), которое
  // может быть алиасом (`import { Popover as PopoverBeta } from '.../beta'`).
  const atomicName = pureAtomicReExport
    ? mainDecl.getSymbol()?.getName()
    : undefined;
  // Типы beta-пакета резолвятся из @salutejs/sdds-finai/dist/beta/... (см.
  // subpath-export "./beta" в package.json), в отличие от основного пакета
  // (@salutejs/sdds-finai/types/...) — по этому и различаем. Важно: у
  // части атомов есть тёзки в основном пакете (Popover, Tooltip) с ДРУГИМИ
  // пропсами, поэтому подмешивать данные не глядя на subpath нельзя.
  const isBetaAtom =
    pureAtomicReExport &&
    mainSourceFile.getFilePath().includes('/sdds-finai/dist/beta/');
  const atomicSubpath = isBetaAtom ? ('beta' as const) : undefined;
  const declaredInUiKit = mainSourceFile
    .getFilePath()
    .includes('/packages/ui-kit/src/');

  const jsDocable = Node.isVariableDeclaration(mainDecl)
    ? mainDecl.getVariableStatementOrThrow()
    : mainDecl;

  const description = getJsDocDescription(jsDocable);
  const deprecated = isDeprecated(jsDocable);
  const deprecationReason = deprecated
    ? getDeprecatedReason(jsDocable)
    : undefined;

  // Дефолты из деструктуризации первого параметра самой render-функции
  // компонента — `({ size = 'm', ...rest }: TextFieldProps) => ...`
  // (TASKS.md T6). unwrapToRenderFunction здесь безопасен даже для чистых
  // реэкспортов без инициализатора — вернёт undefined, defaultsMap пустая.
  const defaultsMap = collectDestructuringDefaults(
    unwrapToRenderFunction(mainDecl),
  );

  const propsRef =
    findPropsDeclaration(barrelSourceFile, name) ??
    findPropsDeclFromSignature(mainDecl, name);
  let propsResolved: ResolvedPropsType = propsRef
    ? resolvePropsType(propsRef, defaultsMap)
    : { props: [] };

  if (propsResolved.props.length === 0 && !propsResolved.isGeneric) {
    const viaComponentProps = tryExtractViaComponentProps(
      mainDecl,
      defaultsMap,
    );
    if (viaComponentProps) {
      propsResolved = {
        typeName: propsResolved.typeName ?? `ComponentProps<typeof ${name}>`,
        props: viaComponentProps,
      };
    }
  }

  const localMainFile = declaredInUiKit ? mainSourceFile : undefined;
  const compoundAssignments = findCompoundAssignments(localMainFile, name);
  const compoundParts = compoundAssignments.map(({ subName, localName }) =>
    resolveCompoundPart(barrelSourceFile, name, subName, localName, dir),
  );

  return {
    name,
    description,
    deprecated,
    deprecationReason,
    pureAtomicReExport,
    atomicName,
    atomicSubpath,
    declaredInUiKit,
    declarationFile: mainSourceFile.getFilePath(),
    props: propsResolved.props,
    propsTypeName: propsResolved.typeName,
    rawType: propsResolved.rawType,
    isGeneric: propsResolved.isGeneric,
    compoundParts: compoundParts.length > 0 ? compoundParts : undefined,
  };
}
