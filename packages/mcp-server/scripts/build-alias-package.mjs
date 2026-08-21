#!/usr/bin/env node
/**
 * Собирает зеркальный (white-label) npm-пакет MCP-сервера из уже собранного
 * dist/ и закоммиченного data/component-index.json — под другим именем пакета
 * и с другим именем связанной библиотеки.
 *
 * Зачем так, а не вторым репозиторием или шаблонизацией строк в src:
 * имена зашиты внутрь длинных описаний тулов (src/server.ts) и текстов
 * уведомлений (src/resolveIndex.ts) — это ~30 мест, и превращать их в
 * подстановки ради вторичной задачи значит рисковать основным пакетом.
 * Здесь исходники не трогаются вообще: замена идёт по артефактам сборки в
 * отдельном staging-каталоге, который лежит в .gitignore и никогда не
 * коммитится.
 *
 * Имена берутся из окружения (в CI — из GitHub Secrets, рядом с NPM_TOKEN):
 *   ALT_MCP_PACKAGE_NAME — имя зеркального npm-пакета      (напр. @acme/ds-mcp)
 *   ALT_LIB_PACKAGE_NAME — имя связанной библиотеки        (напр. @acme/ds)
 *
 * Запуск: npm run mcp:alias:stage --prefix packages/mcp-server
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const DIST_DIR = path.join(PKG_ROOT, 'dist');
const INDEX_REL_PATH = path.join('data', 'component-index.json');
const README_TEMPLATE = path.join(
  PKG_ROOT,
  'scripts',
  'alias-readme.template.md',
);
const STAGING_DIR = path.join(PKG_ROOT, '.alias-package');

/** Имя пакета npm: со scope или без. */
const NPM_NAME_RE = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

function fail(message) {
  console.error(`\n✖ ${message}\n`);
  process.exit(1);
}

function readEnvName(varName) {
  const value = (process.env[varName] ?? '').trim();
  if (!value) {
    fail(
      `Не задана переменная окружения ${varName}. Она приходит из GitHub Secrets ` +
        `(там же, где NPM_TOKEN); локально передайте её явно перед командой.`,
    );
  }
  if (!NPM_NAME_RE.test(value)) {
    fail(`${varName}="${value}" не похоже на имя npm-пакета.`);
  }
  // Иначе финальный guard (греп на /dais/i) упадёт на самом же новом имени,
  // и причина будет выглядеть как поломка замены, хотя дело в имени.
  if (/dais/i.test(value)) {
    fail(
      `${varName}="${value}" содержит "dais" — зеркальное имя не должно ` +
        `наследовать исходный бренд.`,
    );
  }
  return value;
}

/** '@acme/ds-mcp' → 'acme-ds-mcp'. Годится и как имя bin, и как схема URI. */
function toFlatName(packageName) {
  return packageName.replace(/^@/, '').replace(/\//g, '-');
}

function countOccurrences(haystack, needle) {
  if (!needle) return 0;
  return haystack.split(needle).length - 1;
}

function walkFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else out.push(full);
  }
  return out;
}

const ALT_MCP_PACKAGE_NAME = readEnvName('ALT_MCP_PACKAGE_NAME');
const ALT_LIB_PACKAGE_NAME = readEnvName('ALT_LIB_PACKAGE_NAME');
const ALT_MCP_BIN = toFlatName(ALT_MCP_PACKAGE_NAME);
const ALT_URI_SCHEME = toFlatName(ALT_LIB_PACKAGE_NAME);

/** Форма имени пакета внутри регулярки в коде: '@daisforge\/ui'. */
const escapeForRegexLiteral = (name) => name.replace(/\//g, '\\/');

/**
 * Порядок обязателен: длинные токены первыми. Если сначала заменить
 * '@daisforge/ui', то '@daisforge/ui-mcp' превратится в '<ALT_LIB>-mcp' —
 * то есть имя MCP-пакета склеится из имени библиотеки.
 * Правило на '@daisforge/ui' покрывает и подпути ('/icons', '/tokens',
 * '/components/…'): все они начинаются с '@daisforge/ui'.
 *
 * Список закрытый и проверяется гардом в конце: если в артефактах появится
 * новая форма бренда, которой здесь нет, сборка зеркала упадёт с указанием
 * файла и строки — тогда сюда добавляется правило.
 */
const REPLACEMENTS = [
  ['@daisforge/ui-mcp', ALT_MCP_PACKAGE_NAME],
  [
    escapeForRegexLiteral('@daisforge/ui-mcp'),
    escapeForRegexLiteral(ALT_MCP_PACKAGE_NAME),
  ],
  ['daisforge-ui-mcp', ALT_MCP_BIN],
  ['daisforge-ui://', `${ALT_URI_SCHEME}://`],
  ['@daisforge/ui', ALT_LIB_PACKAGE_NAME],
  [
    escapeForRegexLiteral('@daisforge/ui'),
    escapeForRegexLiteral(ALT_LIB_PACKAGE_NAME),
  ],
  ['daisforge-ui', ALT_URI_SCHEME],
  // Упоминание монорепозитория в комментарии resolveIndex.ts.
  ['dais/ui', ALT_URI_SCHEME],
  // Стори-папка packages/storybook/src/stories/AiChatDAIS — не публичный API
  // библиотеки, а имя файла, попадающее в sourceFile/displayName примеров типа
  // 'usage'. Эти пути и так не резолвятся за пределами монорепо, но бренд в них
  // виден, поэтому имя нейтрализуется.
  ['AiChatDAIS', 'AiChatAssistant'],
];

function applyReplacements(text) {
  return REPLACEMENTS.reduce(
    (acc, [from, to]) => acc.split(from).join(to),
    text,
  );
}

function ensureSourcesExist() {
  if (!fs.existsSync(path.join(DIST_DIR, 'server.js'))) {
    fail(
      `Не найден ${path.join(
        DIST_DIR,
        'server.js',
      )} — сначала соберите пакет: ` +
        `npm run build --prefix packages/mcp-server`,
    );
  }
  if (!fs.existsSync(path.join(PKG_ROOT, INDEX_REL_PATH))) {
    fail(
      `Не найден ${INDEX_REL_PATH} — сначала соберите индекс: npm run mcp:build-index`,
    );
  }
  if (!fs.existsSync(README_TEMPLATE)) {
    fail(`Не найден шаблон README: ${README_TEMPLATE}`);
  }
}

/**
 * Каталоги dist, которые в зеркало не едут. indexer собирает индекс, validate
 * его проверяет — оба нужны только внутри монорепо и оба тянут ts-morph, а он
 * devDependency: из опубликованного тарбола они не запустятся ни при каком
 * раскладе. В основном пакете это исторически мёртвый груз, в зеркале — ещё и
 * лишняя поверхность для утечки бренда (внутри лежат регулярки и служебные
 * сообщения про монорепо).
 */
const DIST_EXCLUDED_DIRS = ['indexer', 'validate'];

function stageDist() {
  const target = path.join(STAGING_DIR, 'dist');
  fs.cpSync(DIST_DIR, target, { recursive: true });

  for (const dir of DIST_EXCLUDED_DIRS) {
    fs.rmSync(path.join(target, dir), { recursive: true, force: true });
  }

  for (const file of walkFiles(target)) {
    // Карты ссылаются на ../src/*, которого нет в тарболе (см. files в
    // package.json) — в основном пакете это мёртвый груз, а в зеркале ещё и
    // лишнее раскрытие структуры исходника.
    if (file.endsWith('.map')) {
      fs.rmSync(file);
      continue;
    }
    if (!file.endsWith('.js')) continue;

    const source = fs.readFileSync(file, 'utf8');
    const withoutMapLink = source.replace(
      /^\/\/# sourceMappingURL=.*$\n?/gm,
      '',
    );
    fs.writeFileSync(file, applyReplacements(withoutMapLink));
  }
}

/**
 * Индекс — единственный файл, где замена массовая (сейчас ~1600 вхождений) и
 * где ошибка тише всего: битый JSON или потерянные вхождения проявятся только
 * у потребителя. Поэтому здесь считаем вхождения точно, а не «на глаз».
 */
function stageIndex() {
  const originalText = fs.readFileSync(
    path.join(PKG_ROOT, INDEX_REL_PATH),
    'utf8',
  );
  const resultText = applyReplacements(originalText);

  const originalUi = countOccurrences(originalText, '@daisforge/ui');
  const originalUiMcp = countOccurrences(originalText, '@daisforge/ui-mcp');
  // Если ALT_MCP сам содержит ALT_LIB (частый случай: @acme/ds и @acme/ds-mcp),
  // каждое замещённое '@daisforge/ui-mcp' тоже даст вхождения ALT_LIB.
  const altLibPerAltMcp = countOccurrences(
    ALT_MCP_PACKAGE_NAME,
    ALT_LIB_PACKAGE_NAME,
  );
  const expected = originalUi - originalUiMcp + originalUiMcp * altLibPerAltMcp;
  const actual = countOccurrences(resultText, ALT_LIB_PACKAGE_NAME);

  if (actual !== expected) {
    fail(
      `Замена в индексе дала ${actual} вхождений "${ALT_LIB_PACKAGE_NAME}", ` +
        `ожидалось ${expected}. Замена неполная или задела лишнее.`,
    );
  }

  let originalIndex;
  let resultIndex;
  try {
    originalIndex = JSON.parse(originalText);
    resultIndex = JSON.parse(resultText);
  } catch (e) {
    fail(`Индекс после замены не парсится как JSON: ${e.message}`);
  }
  if (resultIndex.libVersion !== originalIndex.libVersion) {
    fail(
      `libVersion изменился при замене: ${originalIndex.libVersion} → ${resultIndex.libVersion}.`,
    );
  }

  const target = path.join(STAGING_DIR, INDEX_REL_PATH);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, resultText);

  return { replaced: actual, libVersion: resultIndex.libVersion };
}

/**
 * package.json собирается из оригинального выборочно, а не копированием с
 * правкой: scripts (mcp:ab:*, mcp:inspect) вне монорепо неработоспособны и
 * раскрывают внутреннюю кухню, devDependencies потребителю не нужны, а
 * комментарий "//" описывает наши договорённости по нодам.
 */
function stagePackageJson() {
  const original = JSON.parse(
    fs.readFileSync(path.join(PKG_ROOT, 'package.json'), 'utf8'),
  );

  const pkg = {
    name: ALT_MCP_PACKAGE_NAME,
    version: original.version,
    description: `MCP server for ${ALT_LIB_PACKAGE_NAME} — component discovery, props and examples for coding agents`,
    type: original.type,
    bin: { [ALT_MCP_BIN]: './dist/server.js' },
    main: original.main,
    files: original.files,
    license: original.license,
    publishConfig: original.publishConfig,
    dependencies: original.dependencies,
    engines: original.engines,
  };

  fs.writeFileSync(
    path.join(STAGING_DIR, 'package.json'),
    `${JSON.stringify(pkg, null, 2)}\n`,
  );

  return pkg.version;
}

/**
 * README публикуется npm всегда, независимо от поля files, поэтому «просто не
 * копировать» не выйдет — нужен свой. Основной README пакета — внутренний
 * dev-документ (nx-команды, A/B-стенд, ссылки на TASKS.MD), в зеркале ему не
 * место, отсюда отдельный короткий шаблон.
 */
function stageReadme() {
  const template = fs.readFileSync(README_TEMPLATE, 'utf8');
  const rendered = template
    .split('{{MCP_PACKAGE}}')
    .join(ALT_MCP_PACKAGE_NAME)
    .split('{{LIB_PACKAGE}}')
    .join(ALT_LIB_PACKAGE_NAME)
    .split('{{MCP_BIN}}')
    .join(ALT_MCP_BIN)
    .split('{{URI_SCHEME}}')
    .join(ALT_URI_SCHEME);

  if (rendered.includes('{{')) {
    fail('В шаблоне README остались незаполненные плейсхолдеры {{…}}.');
  }
  fs.writeFileSync(path.join(STAGING_DIR, 'README.md'), rendered);
}

/**
 * Последний рубеж: ни один файл в тарболе не должен содержать исходный бренд
 * ни в каком виде — включая формы, которых нет в таблице замен (комментарии,
 * ссылки, случайно добавленные позже строки).
 */
function assertNoOriginalBrand() {
  const hits = [];
  for (const file of walkFiles(STAGING_DIR)) {
    const text = fs.readFileSync(file, 'utf8');
    if (!/dais/i.test(text)) continue;
    text.split('\n').forEach((line, i) => {
      if (/dais/i.test(line)) {
        hits.push(
          `${path.relative(STAGING_DIR, file)}:${i + 1}: ${line
            .trim()
            .slice(0, 160)}`,
        );
      }
    });
  }
  if (hits.length > 0) {
    fail(
      `В зеркальном пакете остался исходный бренд (${hits.length} строк):\n` +
        `${hits.slice(0, 20).join('\n')}` +
        `${hits.length > 20 ? `\n… и ещё ${hits.length - 20}` : ''}`,
    );
  }
}

function main() {
  ensureSourcesExist();

  fs.rmSync(STAGING_DIR, { recursive: true, force: true });
  fs.mkdirSync(STAGING_DIR, { recursive: true });

  stageDist();
  const { replaced, libVersion } = stageIndex();
  const version = stagePackageJson();
  stageReadme();
  assertNoOriginalBrand();

  console.log(`\n✔ Зеркальный пакет собран: ${STAGING_DIR}`);
  console.log(`   name        ${ALT_MCP_PACKAGE_NAME}@${version}`);
  console.log(`   bin         ${ALT_MCP_BIN}`);
  console.log(
    `   библиотека  ${ALT_LIB_PACKAGE_NAME} (индекс ${libVersion}, ${replaced} вхождений)`,
  );
  console.log(`   ресурсы     ${ALT_URI_SCHEME}://catalog/…\n`);
}

main();
