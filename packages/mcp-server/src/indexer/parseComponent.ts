/* eslint-disable no-continue */
/* eslint-disable no-bitwise */
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
import { isNoiseProp } from './htmlAttributeDenylist.js';
import { getProject } from './tsProject.js';

const MAX_PROP_TYPE_CHARS = 400;
const MAX_RAW_TYPE_CHARS = 6000;

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
function clip(text: string | undefined, max: number): string | undefined {
  if (!text) return text;
  return text.length > max ? `${text.slice(0, max)}…` : text;
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

function extractPropsFromType(type: Type, atLocationNode: Node): PropRecord[] {
  const props: PropRecord[] = [];
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

    const deprecated =
      decl !== undefined &&
      (Node.isPropertySignature(decl) || Node.isPropertyDeclaration(decl))
        ? isDeprecated(decl)
        : false;

    props.push({
      name,
      type: clip(fullTypeText, MAX_PROP_TYPE_CHARS) as string,
      required: !optional,
      description,
      ...(deprecated ? { deprecated: true as const } : {}),
    });
  }
  return props;
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
): PropRecord[] | undefined {
  if (
    !Node.isTypeAliasDeclaration(decl) &&
    !Node.isInterfaceDeclaration(decl)
  ) {
    return undefined;
  }

  let props: PropRecord[];
  try {
    props = extractPropsFromType(decl.getType(), decl);
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
function resolvePropsType(propsRef: PropsRef): ResolvedPropsType {
  if (propsRef.decl === undefined) {
    const { name, inlineParamNode } = propsRef;
    try {
      return {
        typeName: name,
        props: extractPropsFromType(inlineParamNode.getType(), inlineParamNode),
      };
    } catch {
      return { typeName: name, props: [] };
    }
  }

  const { name, decl } = propsRef;
  const typeParams = getTypeParameters(decl);

  if (typeParams.length > 0) {
    const structuralProps = tryExtractGenericProps(decl);
    return {
      typeName: name,
      rawType: clip(decl.getText(), MAX_RAW_TYPE_CHARS),
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
        rawType: clip(decl.getText(), MAX_RAW_TYPE_CHARS),
        props: [],
      };
    }

    const props = extractPropsFromType(type, decl);
    return { typeName: name, props };
  } catch {
    return {
      typeName: name,
      rawType: clip(decl.getText(), MAX_RAW_TYPE_CHARS),
      props: [],
    };
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

  if (propsRef) {
    return { name: subName, ...resolvePropsType(propsRef) };
  }

  const localDecl = resolveExportedDeclaration(barrelSourceFile, localName);
  const sigPropsRef =
    localDecl && findPropsDeclFromSignature(localDecl, localName);
  if (sigPropsRef) {
    return { name: subName, ...resolvePropsType(sigPropsRef) };
  }

  return { name: subName, props: [] };
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

  const propsRef =
    findPropsDeclaration(barrelSourceFile, name) ??
    findPropsDeclFromSignature(mainDecl, name);
  const propsResolved: ResolvedPropsType = propsRef
    ? resolvePropsType(propsRef)
    : { props: [] };

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
    declaredInUiKit,
    declarationFile: mainSourceFile.getFilePath(),
    props: propsResolved.props,
    propsTypeName: propsResolved.typeName,
    rawType: propsResolved.rawType,
    isGeneric: propsResolved.isGeneric,
    compoundParts: compoundParts.length > 0 ? compoundParts : undefined,
  };
}
