#!/usr/bin/env node
/**
 * Переименовывает исходный бренд в уже готовой сборке — на месте.
 *
 * Вход — каталог с артефактом, который не нужно пересобирать:
 *   - распакованный tarball библиотеки (`npm pack @daisforge/ui@X` → package/);
 *   - статика Storybook (`@daisforge/ui-storybook@X` → package/static/).
 *
 * Что делает:
 *   1. удаляет source maps (*.map) и ссылки на них (sourceMappingURL);
 *   2. во всех текстовых файлах применяет таблицу замен из brand.mjs — ту же,
 *      что и зеркало MCP-сервера (packages/mcp-server/scripts/build-alias-package.mjs);
 *   3. если в корне каталога есть package.json — убирает поля, которые
 *      указывают на исходный репозиторий и реестр;
 *   4. проверяет, что ни в содержимом, ни в путях не осталось /dais/i,
 *      и иначе завершается с кодом 1 и списком строк.
 *
 * Имена берутся из окружения:
 *   ALT_LIB_PACKAGE_NAME — новое имя библиотеки        (напр. @acme/ds)
 *   ALT_MCP_PACKAGE_NAME — новое имя MCP-сервера       (напр. @acme/ds-mcp)
 *
 * Запуск: node scripts/white-label/rename-artifact.mjs <каталог>
 *
 * Файл публикуется в npm-пакете Storybook (bin/) рядом с brand.mjs, поэтому
 * зависимости — только встроенные модули Node.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  applyReplacements,
  BRAND_RE,
  BrandError,
  createReplacements,
  findBrandLeftovers,
  formatHits,
  readEnvName,
  walkFiles,
} from './brand.mjs';

/** Расширения, которые читаются как текст и проходят замену. */
export const TEXT_EXTENSIONS = new Set([
  '.js',
  '.mjs',
  '.cjs',
  '.ts',
  '.mts',
  '.cts',
  '.json',
  '.md',
  '.mdx',
  '.css',
  '.html',
  '.txt',
  '.svg',
  '.xml',
  '.yml',
  '.yaml',
]);

/**
 * Поля package.json, которые связывают пакет с исходным репозиторием и реестром.
 * description — свободный текст с исходным брендом, заменой его не поправить.
 */
export const PACKAGE_JSON_FIELDS_TO_DROP = [
  'description',
  'publishConfig',
  'repository',
  'homepage',
  'bugs',
  'gitHead',
];

/**
 * Строки, которые совпадают с /dais/i, но остаются как есть: замена их не
 * трогает, проверка на остатки бренда не считает ошибкой. Список точный и
 * короткий: любое новое совпадение должно сначала упасть и быть разобрано
 * вручную.
 */
export const PRESERVED_TOKENS = [
  // Страница AI-чата (packages/storybook/src/stories/AiChatDAIS) внутри
  // называется так же, поэтому в ней ничего не переименовывается. Следы
  // страницы вне её чанка: путь и имя чанка в карте импортов превью, запись
  // в index.json и CSS иконки в manager-head.html.
  'AiChatDAIS',
  'dais--docs',
  '"title":"DAIS"',
  // Страница Changelog в Storybook оставлена как есть: ссылки на коммиты,
  // issues и compare в репозитории и имя корневого пакета монорепо из
  // сообщений lerna («Version bump only for package …»).
  'https://github.com/daisforge/dais-ui',
  '@dais-ui/source',
  // Сторонний код в vendor-чанках Storybook, к бренду отношения не имеет:
  //   - aria-query: relatedConcepts ссылаются на стандарт доступности DAISY;
  'DAISY',
  //   - список японских топонимов в одной из зависимостей.
  'kosakadaisenkazuno',
];

/**
 * Файлы, которые не меняются и не проверяются целиком (по имени файла):
 * собственный чанк страницы AI-чата.
 */
export const PRESERVED_FILES = [/^AiChatDAIS-[\w-]+\.js$/];

/**
 * Хеш Vite в имени чанка ('…stories-DaiSi7z1.js') случаен и может совпасть с
 * /dais/i. При проверке он вырезается; бренд в остальной части имени
 * по-прежнему находится.
 */
const HASHED_ASSET_RE = /-[\w-]{8}\.(?:m?js|css)\b/g;

const isPreservedFile = (file) =>
  PRESERVED_FILES.some((re) => re.test(path.basename(file)));

/**
 * Применяет замены, не трогая PRESERVED_TOKENS: они на время замены
 * подменяются плейсхолдерами, которых нет ни в одном правиле.
 */
function applyPreserving(text, replacements) {
  const tokens = [...PRESERVED_TOKENS].sort((a, b) => b.length - a.length);
  const masked = tokens.reduce(
    (acc, token, i) => acc.split(token).join(`\u0000${i}\u0000`),
    text,
  );
  return tokens.reduce(
    (acc, token, i) => acc.split(`\u0000${i}\u0000`).join(token),
    applyReplacements(masked, replacements),
  );
}

const SOURCE_MAP_LINK_RE =
  /^[ \t]*(?:\/\/[#@] sourceMappingURL=.*|\/\*[#@] sourceMappingURL=.*?\*\/)[ \t]*\r?\n?/gm;

export const isTextFile = (file) =>
  TEXT_EXTENSIONS.has(path.extname(file).toLowerCase());

function cleanPackageJson(dir) {
  const file = path.join(dir, 'package.json');
  if (!fs.existsSync(file)) return false;
  const pkg = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const field of PACKAGE_JSON_FIELDS_TO_DROP) delete pkg[field];
  fs.writeFileSync(file, `${JSON.stringify(pkg, null, 2)}\n`);
  return true;
}

/**
 * @param {string} dir каталог с готовой сборкой (правится на месте)
 * @param {{ lib: string, mcp: string }} names
 * @returns {{ changedFiles: number, renamedFiles: number, removedMaps: number, packageJson: boolean, leftovers: string[] }}
 */
export function renameArtifact(dir, names) {
  const root = path.resolve(dir);
  if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) {
    throw new BrandError(`Каталог не найден: ${root}`);
  }

  const replacements = createReplacements(names);
  let changedFiles = 0;
  let removedMaps = 0;

  for (const file of walkFiles(root)) {
    if (file.endsWith('.map')) {
      fs.rmSync(file);
      removedMaps += 1;
      continue;
    }
    if (!isTextFile(file) || isPreservedFile(file)) continue;

    const source = fs.readFileSync(file, 'utf8');
    const result = applyPreserving(
      source.replace(SOURCE_MAP_LINK_RE, ''),
      replacements,
    );
    if (result !== source) {
      fs.writeFileSync(file, result);
      changedFiles += 1;
    }
  }

  // Имена файлов меняются по той же таблице, что и содержимое: ссылки на них
  // в других файлах уже заменены выше, поэтому файл обязан называться так же.
  let renamedFiles = 0;
  for (const file of walkFiles(root)) {
    const base = path.basename(file);
    const renamed = applyPreserving(base, replacements);
    if (renamed !== base) {
      fs.renameSync(file, path.join(path.dirname(file), renamed));
      renamedFiles += 1;
    }
  }

  const packageJson = cleanPackageJson(root);

  const stripAllowed = (text) =>
    PRESERVED_TOKENS.reduce(
      (acc, token) => acc.split(token).join(''),
      text.replace(HASHED_ASSET_RE, ''),
    );
  const leftovers = [
    ...walkFiles(root)
      .filter((file) => !isPreservedFile(file))
      .map((file) => path.relative(root, file))
      .filter((rel) => BRAND_RE.test(stripAllowed(rel)))
      .map((rel) => `${rel}: бренд в имени файла`),
    ...findBrandLeftovers(root, {
      filter: (file) => isTextFile(file) && !isPreservedFile(file),
      ignore: PRESERVED_TOKENS,
      ignorePatterns: [HASHED_ASSET_RE],
    }),
  ];

  return { changedFiles, renamedFiles, removedMaps, packageJson, leftovers };
}

function main(argv) {
  const [dir] = argv;
  if (!dir) {
    throw new BrandError('Укажите каталог: node rename-artifact.mjs <каталог>');
  }
  const names = {
    lib: readEnvName('ALT_LIB_PACKAGE_NAME'),
    mcp: readEnvName('ALT_MCP_PACKAGE_NAME'),
  };
  const { changedFiles, renamedFiles, removedMaps, packageJson, leftovers } =
    renameArtifact(dir, names);

  if (leftovers.length > 0) {
    throw new BrandError(
      `После замены остался исходный бренд (${
        leftovers.length
      } строк):\n${formatHits(leftovers)}`,
    );
  }

  console.log(`✔ ${path.resolve(dir)}`);
  console.log(`   изменено файлов  ${changedFiles}`);
  console.log(`   переименовано    ${renamedFiles}`);
  console.log(`   удалено .map     ${removedMaps}`);
  console.log(`   package.json     ${packageJson ? 'очищен' : 'нет'}`);
  console.log(`   имена            ${names.lib}, ${names.mcp}`);
}

// realpath: через `bin` npm запускает скрипт по симлинку из node_modules/.bin.
const isCli =
  Boolean(process.argv[1]) &&
  fs.realpathSync(process.argv[1]) ===
    fs.realpathSync(fileURLToPath(import.meta.url));

if (isCli) {
  try {
    main(process.argv.slice(2));
  } catch (e) {
    if (!(e instanceof BrandError)) throw e;
    console.error(`\n✖ ${e.message}\n`);
    process.exit(1);
  }
}
