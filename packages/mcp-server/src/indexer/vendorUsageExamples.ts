/* eslint-disable no-continue */
import fs from 'node:fs';
import path from 'node:path';

import { ts } from 'ts-morph';

import { REPO_ROOT } from './tsProject.js';

/**
 * Кросс-файловый скан вендорного снэпшота (TASKS.md T3, найдено по ходу
 * ревью). У части атомов нет собственного файла в `vendor/atomic-mcp-data` —
 * `mergeAtomicData` для них никогда не резолвит `atomicBase` вовсе, значит
 * основной путь (`vendorExamples.ts`, примеры из "своего" файла по имени)
 * их не видит в принципе. Типичный случай — compound-части: у `AccordionItem`
 * нет `AccordionItem.json`, зато `Accordion.json` (примеры самого `Accordion`)
 * почти целиком построен вокруг `<AccordionItem>` — то самое реальное
 * использование, только записанное в "чужом" файле.
 *
 * Этот модуль сканирует examples[] ВСЕХ вендорных файлов разом (не только
 * "свой" по имени) и находит такие вложенные JSX-вхождения — тот же приём,
 * что collectUsageExamples.ts применяет к реальному коду монорепо (разбор
 * через сырой ts.createSourceFile + проверка по импортам, не по тексту тега),
 * только источник другой: не файлы репозитория, а строки-сниппеты внутри
 * самого вендорного JSON.
 */

interface VendorSnippet {
  title?: string;
  snippet: string;
}

const VENDOR_DIRS = [
  path.resolve(
    REPO_ROOT,
    'packages/mcp-server/vendor/atomic-mcp-data/components',
  ),
  path.resolve(REPO_ROOT, 'packages/mcp-server/vendor/atomic-mcp-data/beta'),
];

/** Вендорные сниппеты (до переписывания importPath) импортируют атом из его настоящего пакета. */
const VENDOR_PACKAGE_SPECIFIER = /^@salutejs\/sdds-finai(?:\/beta)?$/;

function collectVendorImports(sourceFile: ts.SourceFile): Map<string, string> {
  const named = new Map<string, string>();
  sourceFile.forEachChild((stmt) => {
    if (!ts.isImportDeclaration(stmt)) return;
    if (!ts.isStringLiteral(stmt.moduleSpecifier)) return;
    if (!VENDOR_PACKAGE_SPECIFIER.test(stmt.moduleSpecifier.text)) return;
    const bindings = stmt.importClause?.namedBindings;
    if (!bindings || !ts.isNamedImports(bindings)) return;
    bindings.elements.forEach((el) => {
      named.set(el.name.text, (el.propertyName ?? el.name).text);
    });
  });
  return named;
}

/** Резолвит JSX-тег к реальному имени экспорта — включая dot-notation (`<Foo.Bar>`), по аналогии с resolveComponentName в collectUsageExamples.ts. */
function resolveTagName(
  tagName: ts.JsxTagNameExpression,
  named: ReadonlyMap<string, string>,
): string | undefined {
  if (ts.isIdentifier(tagName)) return named.get(tagName.text);
  if (
    ts.isPropertyAccessExpression(tagName) &&
    ts.isIdentifier(tagName.expression) &&
    ts.isIdentifier(tagName.name)
  ) {
    const realParent = named.get(tagName.expression.text);
    return realParent ? `${realParent}${tagName.name.text}` : undefined;
  }
  return undefined;
}

/**
 * Находит все известные имена компонентов, реально встречающиеся в одном
 * сниппете (кроме `skipName` — компонента-владельца файла: его примеры и так
 * даёт основной путь mergeAtomicData/vendorExamples.ts, дублировать не нужно).
 */
function findComponentsInSnippet(
  snippet: string,
  skipName: string,
  knownNames: ReadonlySet<string>,
): Set<string> {
  const found = new Set<string>();
  const sourceFile = ts.createSourceFile(
    'vendor-snippet.tsx',
    snippet,
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TSX,
  );
  const named = collectVendorImports(sourceFile);
  if (!named.size) return found;

  const visit = (node: ts.Node): void => {
    let name: string | undefined;
    if (ts.isJsxSelfClosingElement(node)) {
      name = resolveTagName(node.tagName, named);
    } else if (ts.isJsxElement(node)) {
      name = resolveTagName(node.openingElement.tagName, named);
    }
    if (name && name !== skipName && knownNames.has(name)) found.add(name);
    ts.forEachChild(node, visit);
  };

  try {
    visit(sourceFile);
  } catch {
    // Синтаксически необычный сниппет не должен ронять всю сборку индекса.
  }
  return found;
}

/**
 * Однопроходный скан: обходит все вендорные файлы один раз, возвращает
 * Map<имя компонента, сниппеты из ЧУЖИХ файлов, где он реально встречается>.
 * Результат скармливается в finalizeVendorExamples наравне со "своими"
 * сниппетами (vendorExamples.ts) — формат намеренно совпадает с
 * WorkingComponentRecord.vendorExampleSnippets.
 */
export function buildVendorUsageIndex(
  componentNames: readonly string[],
): Map<string, VendorSnippet[]> {
  const knownNames = new Set(componentNames);
  const result = new Map<string, VendorSnippet[]>();

  VENDOR_DIRS.forEach((dir) => {
    if (!fs.existsSync(dir)) return;

    fs.readdirSync(dir)
      .filter((f) => f.endsWith('.json'))
      .forEach((file) => {
        const ownName = path.basename(file, '.json');
        let json: { examples?: { title?: string; snippet?: string }[] };
        try {
          json = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
        } catch {
          return;
        }

        (json.examples || []).forEach((ex) => {
          if (!ex.snippet) return;
          const found = findComponentsInSnippet(
            ex.snippet,
            ownName,
            knownNames,
          );
          found.forEach((name) => {
            const list = result.get(name) ?? [];
            list.push({ title: ex.title, snippet: ex.snippet as string });
            result.set(name, list);
          });
        });
      });
  });

  return result;
}
