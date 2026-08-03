import { Node, SyntaxKind, SymbolFlags, ts } from 'ts-morph';

import { getProject } from './tsProject.js';
import { isNoiseProp } from './htmlAttributeDenylist.js';

const MAX_PROP_TYPE_CHARS = 400;
const MAX_RAW_TYPE_CHARS = 6000;

/** Обрезает строку с явным маркером — не молча теряет данные. */
function clip(text, max) {
  if (!text) return text;
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

function getJsDocDescription(jsDocable) {
  const docs = jsDocable.getJsDocs?.() ?? [];
  return docs
    .map((d) => d.getDescription().trim())
    .filter(Boolean)
    .join('\n');
}

function isDeprecated(jsDocable) {
  const docs = jsDocable.getJsDocs?.() ?? [];
  return docs.some((d) => d.getTags().some((t) => t.getTagName() === 'deprecated'));
}

function getDeprecatedReason(jsDocable) {
  const docs = jsDocable.getJsDocs?.() ?? [];
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
function resolveExportedDeclaration(barrelSourceFile, name) {
  const map = barrelSourceFile.getExportedDeclarations();
  const decls = map.get(name);
  return decls && decls.length > 0 ? decls[0] : undefined;
}

function isInPackage(sourceFile, pkgName) {
  const filePath = sourceFile.getFilePath();
  return filePath.includes(`/node_modules/${pkgName}/`);
}

/**
 * Находит тип пропсов компонента среди экспортов barrel-файла: по
 * соглашению имени (`${Name}Props`, `${Name}CompProps`) либо — если не
 * нашли — среди всех экспортов, заканчивающихся на "Props".
 */
function findPropsDeclaration(barrelSourceFile, componentName) {
  const map = barrelSourceFile.getExportedDeclarations();
  const candidates = [`${componentName}Props`, `${componentName}CompProps`];

  for (const candidate of candidates) {
    const decls = map.get(candidate);
    if (decls && decls.length > 0) {
      return { name: candidate, decl: decls[0] };
    }
  }

  for (const [name, decls] of map.entries()) {
    if (name.endsWith('Props') && name.toLowerCase().includes(componentName.toLowerCase())) {
      return { name, decl: decls[0] };
    }
  }

  return undefined;
}

/**
 * Разворачивает forwardRef(...)/memo(...) обёртку до самой render-функции.
 */
function unwrapToRenderFunction(node) {
  if (Node.isFunctionDeclaration(node) || Node.isArrowFunction(node) || Node.isFunctionExpression(node)) {
    return node;
  }
  if (Node.isVariableDeclaration(node)) {
    const init = node.getInitializer();
    if (!init) return undefined;
    if (Node.isArrowFunction(init) || Node.isFunctionExpression(init)) return init;
    if (Node.isCallExpression(init)) {
      const args = init.getArguments();
      const fnArg = args.find(
        (a) => Node.isArrowFunction(a) || Node.isFunctionExpression(a),
      );
      return fnArg;
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
function findPropsDeclFromSignature(mainDecl, componentName) {
  const fn = unwrapToRenderFunction(mainDecl);
  const param = fn?.getParameters()?.[0];
  const typeNode = param?.getTypeNode();
  if (!typeNode) return undefined;

  if (Node.isTypeReference(typeNode)) {
    const symbol = typeNode.getTypeName().getSymbol();
    const decl = symbol?.getDeclarations()?.[0];
    if (decl && (Node.isTypeAliasDeclaration(decl) || Node.isInterfaceDeclaration(decl))) {
      return { name: decl.getName(), decl };
    }
  }

  // Инлайновый тип литерала/пересечения без отдельного имени — не критично,
  // просто извлекаем свойства прямо из типа параметра.
  return {
    name: `${componentName}Props`,
    decl: undefined,
    inlineParamNode: param,
  };
}

function getTypeParameters(decl) {
  if (Node.isTypeAliasDeclaration(decl) || Node.isInterfaceDeclaration(decl)) {
    return decl.getTypeParameters();
  }
  return [];
}

/** Свойство `type` в резолве через checker может отсутствовать у mapped/computed членов. */
function safeGetPropertyType(prop, node) {
  try {
    return prop.getTypeAtLocation(node);
  } catch {
    return undefined;
  }
}

function extractPropsFromType(type, atLocationNode) {
  const props = [];
  for (const symbol of type.getProperties()) {
    const decl = symbol.getValueDeclaration() ?? symbol.getDeclarations()[0];
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
      decl && (Node.isPropertySignature(decl) || Node.isPropertyDeclaration(decl))
        ? isDeprecated(decl)
        : false;

    props.push({
      name,
      type: clip(fullTypeText, MAX_PROP_TYPE_CHARS),
      required: !optional,
      description,
      ...(deprecated ? { deprecated: true } : {}),
    });
  }
  return props;
}

/**
 * Пропсы компонента: обычный резолв через тайпчекер, но с фолбеком на сырой
 * текст типа для сложных дженериков (TableProps<...> и подобные) — тот же
 * приём, что copyTypeAsStringSync в generators/meta-info, только проще:
 * у нас уже есть AST-узел, поэтому просто берём node.getText().
 */
function resolvePropsType(propsDecl) {
  const { name, decl, inlineParamNode } = propsDecl;

  if (!decl && inlineParamNode) {
    try {
      const props = extractPropsFromType(inlineParamNode.getType(), inlineParamNode);
      return { typeName: name, props };
    } catch {
      return { typeName: name, props: [] };
    }
  }

  const typeParams = getTypeParameters(decl);

  if (typeParams.length > 0) {
    return {
      typeName: name,
      rawType: clip(decl.getText(), MAX_RAW_TYPE_CHARS),
      props: [],
      isGeneric: true,
    };
  }

  try {
    const type = Node.isTypeAliasDeclaration(decl)
      ? decl.getType()
      : Node.isInterfaceDeclaration(decl)
        ? decl.getType()
        : undefined;

    if (!type) {
      return { typeName: name, rawType: clip(decl.getText(), MAX_RAW_TYPE_CHARS), props: [] };
    }

    const props = extractPropsFromType(type, decl);
    return { typeName: name, props };
  } catch {
    return { typeName: name, rawType: clip(decl.getText(), MAX_RAW_TYPE_CHARS), props: [] };
  }
}

/** Ищет паттерн `Component.Sub = LocalName;` — compound-компоненты (DrawerDF.Header и т.п.). */
function findCompoundAssignments(mainSourceFile, componentName) {
  if (!mainSourceFile) return [];

  const assignments = [];
  const binaryExprs = mainSourceFile.getDescendantsOfKind(SyntaxKind.BinaryExpression);

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
function findLocalTypeDeclaration(compDir, typeName) {
  if (!compDir) return undefined;
  for (const sourceFile of getProject().getSourceFiles()) {
    if (!sourceFile.getFilePath().startsWith(compDir)) continue;
    const decl = sourceFile.getTypeAlias(typeName) ?? sourceFile.getInterface(typeName);
    if (decl) return { name: typeName, decl };
  }
  return undefined;
}

function resolveCompoundPart(barrelSourceFile, componentName, subName, localName, compDir) {
  const propsDecl =
    findPropsDeclaration(barrelSourceFile, localName) ??
    findPropsDeclaration(barrelSourceFile, subName) ??
    findLocalTypeDeclaration(compDir, `${componentName}${subName}Props`) ??
    findLocalTypeDeclaration(compDir, `${localName}Props`);

  if (propsDecl) {
    return { name: subName, ...resolvePropsType(propsDecl) };
  }

  const localDecl = resolveExportedDeclaration(barrelSourceFile, localName);
  const sigPropsDecl = localDecl && findPropsDeclFromSignature(localDecl, localName);
  if (sigPropsDecl) {
    return { name: subName, ...resolvePropsType(sigPropsDecl) };
  }

  return { name: subName, props: [] };
}

/**
 * Разбирает один компонент: где реально объявлен (локально/через реэкспорт
 * из @salutejs/sdds-finai), его пропсы, compound-части, deprecated.
 */
export function parseComponent({ name, barrelPath, dir }) {
  const project = getProject();
  const barrelSourceFile = project.getSourceFileOrThrow(barrelPath);

  const mainDecl = resolveExportedDeclaration(barrelSourceFile, name);
  if (!mainDecl) {
    return { name, error: `export "${name}" не найден в barrel-файле` };
  }

  const mainSourceFile = mainDecl.getSourceFile();
  const pureAtomicReExport = isInPackage(mainSourceFile, '@salutejs/sdds-finai');
  const declaredInUiKit = mainSourceFile.getFilePath().includes('/packages/ui-kit/src/');

  const jsDocable = Node.isVariableDeclaration(mainDecl)
    ? mainDecl.getVariableStatementOrThrow()
    : mainDecl;

  const description = getJsDocDescription(jsDocable);
  const deprecated = isDeprecated(jsDocable);
  const deprecationReason = deprecated ? getDeprecatedReason(jsDocable) : undefined;

  const propsDecl =
    findPropsDeclaration(barrelSourceFile, name) ??
    findPropsDeclFromSignature(mainDecl, name);
  const propsResolved = propsDecl
    ? resolvePropsType(propsDecl)
    : { typeName: undefined, props: [] };

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
