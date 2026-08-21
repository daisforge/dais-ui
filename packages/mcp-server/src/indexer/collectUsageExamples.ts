/* eslint-disable no-continue */
import fs from 'node:fs';
import path from 'node:path';

import { ts } from 'ts-morph';

import type { ExampleRecord } from '../types.js';
import { REPO_ROOT } from './tsProject.js';

/**
 * Сбор реальных JSX-вхождений компонентов по монорепо (TASKS.md T3) —
 * лучший доступный источник примеров: код заведомо компилируется и отражает
 * реальные паттерны применения, в отличие от synthesizeMinimalUsage
 * (плейсхолдеры) и в дополнение к curated Storybook-стори (покрывают лишь
 * часть каталога).
 *
 * Разбор через сырой TypeScript-компилятор (ts.createSourceFile), а не
 * через общий ts-morph Project из tsProject.ts: нужен только синтаксис
 * (найти JSX-теги), не типы — добавлять сотни сторибук/vite-project файлов,
 * которые лежат вне tsconfig.lib.json ui-kit, в общий типизированный проект
 * дорого и не нужно для этой задачи.
 */

const CODE_EXTENSIONS = new Set(['.ts', '.tsx']);

const IGNORED_DIR_NAMES = new Set([
  'node_modules',
  'dist',
  'build',
  'coverage',
  '__snapshots__',
  'storybook-static',
]);

/** "Разумный размер" примера — усечение длинного JSX-блока, не поиск валидного среза. */
const MAX_USAGE_CODE_CHARS = 700;

/** Не больше 1–2 самых "богатых" (по числу разных пропсов) вхождений на компонент — см. TASKS.md T3. */
const MAX_CANDIDATES_PER_COMPONENT = 2;

interface UsageCandidate {
  code: string;
  propCount: number;
  /** Путь относительно REPO_ROOT — абсолютный путь окружения сборки в публикуемый индекс класть нельзя. */
  sourceFile: string;
}

/**
 * "apps/**, packages/** кроме ui-kit" из формулировки задачи — в этом
 * чекауте физически есть только packages/storybook и packages/vite-project
 * (webpack-finportal-platform/webpack-project-finalheader из CLAUDE.md здесь
 * не выкачаны), но список считается динамически по содержимому apps/ и
 * packages/, а не хардкодится — появятся новые пакеты-потребители, попадут
 * в поиск сами. mcp-server исключён явно: это сам MCP-сервер, а не
 * потребитель ui-kit, сканировать его src на JSX-вхождения бессмысленно.
 */
function listSearchRoots(): string[] {
  const roots: string[] = [];

  const appsDir = path.join(REPO_ROOT, 'apps');
  if (fs.existsSync(appsDir)) {
    fs.readdirSync(appsDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .forEach((d) => roots.push(path.join(appsDir, d.name)));
  }

  const packagesDir = path.join(REPO_ROOT, 'packages');
  fs.readdirSync(packagesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .filter((d) => d.name !== 'ui-kit' && d.name !== 'mcp-server')
    .forEach((d) => roots.push(path.join(packagesDir, d.name)));

  return roots;
}

function collectCodeFiles(root: string): string[] {
  const files: string[] = [];
  const stack = [root];

  while (stack.length) {
    const dir = stack.pop() as string;
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      if (entry.name.startsWith('.') || IGNORED_DIR_NAMES.has(entry.name)) {
        continue;
      }
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
      } else if (
        entry.isFile() &&
        CODE_EXTENSIONS.has(path.extname(entry.name)) &&
        !entry.name.endsWith('.d.ts')
      ) {
        files.push(full);
      }
    }
  }

  return files;
}

/** Модуль реально ведёт в ui-kit — публикуемый пакет или монорепный алиас на исходники. */
const UI_KIT_SPECIFIER = /^@daisforge\/ui(\/.*)?$/;
const UI_KIT_ALIAS_SPECIFIER = /^@ui-kit\//;

function isUiKitSpecifier(spec: string): boolean {
  return UI_KIT_SPECIFIER.test(spec) || UI_KIT_ALIAS_SPECIFIER.test(spec);
}

/**
 * Импорты из ui-kit одного файла: `named` — локальное имя в JSX → реальное
 * имя экспорта (различаются при `import { X as Y }`), `namespaces` —
 * локальные алиасы `import * as UI from '@daisforge/ui'`.
 *
 * Без этой проверки по одному только тексту тега `<Container>`/`<Card>`/
 * `<Toast>` можно было бы принять за usage ui-kit компонента ЛЮБОЙ
 * одноимённый локальный styled-component или JSX-хелпер, которых в
 * Storybook-стори хватает (`const Container = styled.div\`...\``) — это не
 * "лучший доступный пример", а шум хуже synthesized-заглушки: агент получил
 * бы код, который выглядит как реальное использование, но к пропсам
 * компонента отношения не имеет.
 */
interface FileImports {
  named: Map<string, string>;
  namespaces: Set<string>;
}

function collectUiKitImports(sourceFile: ts.SourceFile): FileImports {
  const named = new Map<string, string>();
  const namespaces = new Set<string>();

  sourceFile.forEachChild((stmt) => {
    if (!ts.isImportDeclaration(stmt)) return;
    if (!ts.isStringLiteral(stmt.moduleSpecifier)) return;
    if (!isUiKitSpecifier(stmt.moduleSpecifier.text)) return;

    const bindings = stmt.importClause?.namedBindings;
    if (!bindings) return;
    if (ts.isNamespaceImport(bindings)) {
      namespaces.add(bindings.name.text);
    } else if (ts.isNamedImports(bindings)) {
      bindings.elements.forEach((el) => {
        named.set(el.name.text, (el.propertyName ?? el.name).text);
      });
    }
  });

  return { named, namespaces };
}

/**
 * Резолвит JSX-тег к реальному имени экспорта ui-kit — только если он
 * действительно пришёл из ui-kit-импорта этого же файла (см. FileImports).
 *
 * Compound-части в реальном коде почти всегда пишут dot-notation
 * (`<DrawerDF.Content>`, `<ModalDF.Header>`), а не плоским именем — но именно
 * плоское склеенное имя (`DrawerDFContent`) лежит в индексе как отдельная
 * top-level запись для 10 известных пар (см. linkCompoundPartDuplicates в
 * buildIndex.ts, TASKS.md T12): если `DrawerDF` импортирован из ui-kit,
 * `<DrawerDF.Content>` резолвится в `DrawerDFContent`. Без этой ветки все 10
 * таких записей были бы обречены на 0 примеров — их плоское имя в
 * исходниках просто не пишут. `<Widget.Header>`, где `Widget` не входит в
 * T12-пары, даст `WidgetHeader` — не найдёт совпадения среди knownNames в
 * record() ниже и будет отброшен, без ложного срабатывания.
 */
function resolveComponentName(
  tagName: ts.JsxTagNameExpression,
  imports: FileImports,
): string | undefined {
  if (ts.isIdentifier(tagName)) {
    return imports.named.get(tagName.text);
  }
  if (
    ts.isPropertyAccessExpression(tagName) &&
    ts.isIdentifier(tagName.expression) &&
    ts.isIdentifier(tagName.name)
  ) {
    if (imports.namespaces.has(tagName.expression.text)) {
      return tagName.name.text;
    }
    const realParent = imports.named.get(tagName.expression.text);
    return realParent ? `${realParent}${tagName.name.text}` : undefined;
  }
  return undefined;
}

function clipCode(raw: string): string {
  const trimmed = raw.trim();
  return trimmed.length > MAX_USAGE_CODE_CHARS
    ? `${trimmed.slice(0, MAX_USAGE_CODE_CHARS)}\n// … (обрезано)`
    : trimmed;
}

/** Разбирает один файл, дописывая найденные JSX-вхождения известных компонентов в candidates. */
function scanFile(
  filePath: string,
  knownNames: ReadonlySet<string>,
  candidates: Map<string, UsageCandidate[]>,
): void {
  let text: string;
  try {
    text = fs.readFileSync(filePath, 'utf8');
  } catch {
    return;
  }

  const scriptKind = filePath.endsWith('.tsx')
    ? ts.ScriptKind.TSX
    : ts.ScriptKind.TS;
  const sourceFile = ts.createSourceFile(
    filePath,
    text,
    ts.ScriptTarget.Latest,
    false,
    scriptKind,
  );
  const relSourceFile = path.relative(REPO_ROOT, filePath);
  const imports = collectUiKitImports(sourceFile);
  if (!imports.named.size && !imports.namespaces.size) return; // файл вообще не импортирует ui-kit — сканировать нечего

  const record = (
    name: string,
    node: ts.Node,
    attrs: ts.JsxAttributes,
  ): void => {
    if (!knownNames.has(name)) return;
    const code = clipCode(node.getText(sourceFile));
    if (!code) return;
    const list = candidates.get(name) ?? [];
    list.push({
      code,
      propCount: attrs.properties.length,
      sourceFile: relSourceFile,
    });
    candidates.set(name, list);
  };

  const visit = (node: ts.Node): void => {
    if (ts.isJsxSelfClosingElement(node)) {
      const name = resolveComponentName(node.tagName, imports);
      if (name) record(name, node, node.attributes);
    } else if (ts.isJsxElement(node)) {
      const name = resolveComponentName(node.openingElement.tagName, imports);
      if (name) record(name, node, node.openingElement.attributes);
    }
    ts.forEachChild(node, visit);
  };

  try {
    visit(sourceFile);
  } catch {
    // Синтаксически необычный файл (например, сгенерированный) не должен ронять всю сборку индекса.
  }
}

/**
 * Из всех найденных вхождений компонента отбирает до MAX_CANDIDATES_PER_COMPONENT
 * самых информативных: по убыванию числа разных пропсов, при равенстве — короче
 * (меньше риск попасть под обрезку), и по возможности из разных файлов —
 * два вхождения из одного и того же стори дают меньше сигнала, чем два из
 * разных мест применения.
 */
function pickRichest(list: UsageCandidate[]): UsageCandidate[] {
  const seenCode = new Set<string>();
  const deduped = list.filter((c) => {
    if (seenCode.has(c.code)) return false;
    seenCode.add(c.code);
    return true;
  });
  const sorted = [...deduped].sort(
    (a, b) => b.propCount - a.propCount || a.code.length - b.code.length,
  );

  const picked: UsageCandidate[] = [];
  const usedFiles = new Set<string>();
  for (const c of sorted) {
    if (picked.length >= MAX_CANDIDATES_PER_COMPONENT) break;
    if (usedFiles.has(c.sourceFile)) continue;
    picked.push(c);
    usedFiles.add(c.sourceFile);
  }
  for (const c of sorted) {
    if (picked.length >= MAX_CANDIDATES_PER_COMPONENT) break;
    if (!picked.includes(c)) picked.push(c);
  }

  return picked;
}

/**
 * Однопроходный сбор: обходит все файлы поисковых корней один раз (не по
 * разу на компонент — при 240+ именах это было бы O(имена × файлы)),
 * возвращает готовый Map<имя компонента, до 2 ExampleRecord type: 'usage'>.
 */
export function buildUsageExamples(
  componentNames: readonly string[],
): Map<string, ExampleRecord[]> {
  const knownNames = new Set(componentNames);
  const candidates = new Map<string, UsageCandidate[]>();

  const files = listSearchRoots().flatMap((root) => collectCodeFiles(root));
  files.forEach((file) => scanFile(file, knownNames, candidates));

  const result = new Map<string, ExampleRecord[]>();
  candidates.forEach((list, name) => {
    const top = pickRichest(list);
    if (!top.length) return;
    result.set(
      name,
      top.map(
        (c, i): ExampleRecord => ({
          exportName: top.length > 1 ? `Usage${i + 1}` : 'Usage',
          displayName: `Использование в ${path.basename(c.sourceFile)}`,
          type: 'usage',
          code: c.code,
          sourceFile: c.sourceFile,
        }),
      ),
    );
  });

  return result;
}
