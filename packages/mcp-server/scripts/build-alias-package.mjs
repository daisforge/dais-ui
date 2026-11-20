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
 *
 * Таблица замен и финальная проверка на остатки бренда — общие с
 * scripts/white-label/rename-artifact.mjs (см. scripts/white-label/brand.mjs),
 * чтобы зеркало MCP и переименованная библиотека называли друг друга одинаково.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Намеренный относительный импорт из корня монорепо: таблицу замен делят этот
// скрипт и scripts/white-label/rename-artifact.mjs, чтобы зеркало MCP и
// переименованная библиотека называли друг друга одинаково. Скрипт
// запускается только из монорепо; импорт по имени корневого пакета
// (@dais-ui/source/…) в Node не работает — у него нет поля "exports".
/* eslint-disable import/no-relative-packages */
import {
  applyReplacements as applyBrandReplacements,
  BrandError,
  createReplacements,
  findBrandLeftovers,
  formatHits,
  readEnvName as readBrandEnvName,
  toFlatName,
  walkFiles,
} from '../../../scripts/white-label/brand.mjs';
/* eslint-enable import/no-relative-packages */

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
/**
 * Staging обязан лежать ВНЕ рабочего дерева git — иначе `npm publish` пометит
 * зеркало полем gitHead с SHA текущего HEAD. Это не гипотеза: у опубликованного
 * @daisforge/ui-mcp в реестре лежит gitHead коммита релиза, и любой желающий
 * видит его через `npm view <пакет> gitHead`. Одинаковый SHA у двух пакетов
 * связал бы зеркало с основным пакетом намертво.
 *
 * Механика — @npmcli/package-json/lib/normalize.js: npm идёт вверх от каталога
 * пакета в поисках .git и, найдя его, читает оттуда HEAD. Нет предка с .git —
 * поля gitHead в манифесте не будет.
 *
 * В CI путь задаётся через ALIAS_OUT_DIR (${{ runner.temp }}/…), локально по
 * умолчанию берётся системный временный каталог.
 */
const STAGING_DIR = path.resolve(
  process.env.ALIAS_OUT_DIR?.trim() ||
    path.join(os.tmpdir(), 'mcp-alias-package'),
);

function fail(message) {
  console.error(`\n✖ ${message}\n`);
  process.exit(1);
}

function readEnvName(varName) {
  try {
    return readBrandEnvName(varName);
  } catch (e) {
    if (e instanceof BrandError) fail(e.message);
    throw e;
  }
}

function countOccurrences(haystack, needle) {
  if (!needle) return 0;
  return haystack.split(needle).length - 1;
}

const ALT_MCP_PACKAGE_NAME = readEnvName('ALT_MCP_PACKAGE_NAME');
const ALT_LIB_PACKAGE_NAME = readEnvName('ALT_LIB_PACKAGE_NAME');
const ALT_MCP_BIN = toFlatName(ALT_MCP_PACKAGE_NAME);
const ALT_URI_SCHEME = toFlatName(ALT_LIB_PACKAGE_NAME);

/** Таблица замен и её порядок описаны в scripts/white-label/brand.mjs. */
const REPLACEMENTS = createReplacements({
  lib: ALT_LIB_PACKAGE_NAME,
  mcp: ALT_MCP_PACKAGE_NAME,
});

function applyReplacements(text) {
  return applyBrandReplacements(text, REPLACEMENTS);
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
 * Тот же обход вверх, что делает npm при сборке манифеста. Проверяем сами и
 * падаем — молча получить gitHead в опубликованном зеркале нельзя.
 */
function assertOutsideGitWorktree() {
  let dir = STAGING_DIR;
  for (;;) {
    if (fs.existsSync(path.join(dir, '.git'))) {
      fail(
        `Staging ${STAGING_DIR} лежит внутри git-репозитория (${dir}). ` +
          `npm пометит зеркало полем gitHead с SHA текущего HEAD — тем же, ` +
          `что у основного пакета, и это свяжет их в реестре. ` +
          `Задайте ALIAS_OUT_DIR вне рабочего дерева.`,
      );
    }
    const parent = path.dirname(dir);
    if (parent === dir) return;
    dir = parent;
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
  const hits = findBrandLeftovers(STAGING_DIR);
  if (hits.length > 0) {
    fail(
      `В зеркальном пакете остался исходный бренд (${
        hits.length
      } строк):\n${formatHits(hits)}`,
    );
  }
}

function main() {
  ensureSourcesExist();
  assertOutsideGitWorktree();

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
