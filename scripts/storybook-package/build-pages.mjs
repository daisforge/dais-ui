#!/usr/bin/env node
/**
 * Собирает внутренние страницы под готовую сборку Storybook этой же версии:
 * <pages>/<file>.tsx → <out>/<file>.js.
 *
 * React, styled-components и библиотеку в бандл страницы НЕ кладём: их импорты
 * подменяются на модули, которые Storybook отдаёт через
 * globalThis.__SB_SHARED__ (список — shared-modules.json, общий с
 * ExternalPage.tsx). Поэтому страница работает с тем же экземпляром React и
 * тем же контекстом темы, что и весь Storybook, и весит несколько килобайт.
 * Остальные импорты (свои хелперы, сторонние пакеты) бандлятся как обычно.
 *
 * Список страниц — тот же pages.json, что читает add-pages.mjs.
 *
 * Имя библиотеки, как его импортируют страницы, берётся по порядку из:
 *   --lib <имя>, ALT_LIB_PACKAGE_NAME, зависимости package.json текущего
 *   проекта, в которой есть mcp-data/component-index.json (это и есть
 *   библиотека, установленная ради типов).
 *
 * Нужен esbuild: в пакете Storybook он — необязательная peerDependency, его
 * ставит проект, который собирает страницы.
 *
 * Запуск: node build-pages.mjs --pages <каталог> --out <static>/internal [--watch] [--lib <имя>]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export class BuildPagesError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BuildPagesError';
  }
}

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FILE_RE = /^[a-z0-9-]+$/;
const PAGE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];

/**
 * shared-modules.json лежит рядом в npm-пакете (bin/) и в исходниках
 * Storybook, когда скрипт запускается из репозитория.
 */
const SHARED_MODULES_CANDIDATES = [
  path.join(HERE, 'shared-modules.json'),
  path.join(
    HERE,
    '../../packages/storybook/src/stories/_external/shared-modules.json',
  ),
];

export function readSharedModules() {
  const file = SHARED_MODULES_CANDIDATES.find((f) => fs.existsSync(f));
  if (!file) {
    throw new BuildPagesError(
      `Не найден shared-modules.json (искал: ${SHARED_MODULES_CANDIDATES.join(
        ', ',
      )})`,
    );
  }
  const { external, libSubpaths } = JSON.parse(fs.readFileSync(file, 'utf8'));
  return { external, libSubpaths };
}

/**
 * Ключ __SB_SHARED__ для импорта страницы или undefined, если импорт
 * бандлится как обычно.
 */
export function sharedKey(id, { lib, external, libSubpaths }) {
  if (external.includes(id)) return id;
  if (id === lib) return 'lib';
  if (id.startsWith(`${lib}/`)) {
    const sub = id.slice(lib.length + 1).split('/')[0];
    // '<lib>/components/TableCanvas' и прочие глубокие пути есть в корневом
    // экспорте библиотеки.
    return libSubpaths.includes(sub) ? `lib/${sub}` : 'lib';
  }
  return undefined;
}

export function createSharedPlugin(options) {
  return {
    name: 'storybook-shared-modules',
    setup(build) {
      build.onResolve({ filter: /.*/ }, ({ path: id }) => {
        const key = sharedKey(id, options);
        return key ? { path: key, namespace: 'storybook-shared' } : undefined;
      });
      build.onLoad(
        { filter: /.*/, namespace: 'storybook-shared' },
        ({ path: key }) => ({
          contents: `
const shared = globalThis.__SB_SHARED__;
if (!shared || !(${JSON.stringify(key)} in shared)) {
  throw new Error('Storybook не предоставил модуль ${key}: страница собрана под другую версию Storybook');
}
const mod = shared[${JSON.stringify(key)}];
// esbuild подключает этот CommonJS-модуль одним из двух способов:
//  - обычный режим: default = module.exports.default, если есть __esModule;
//  - node-режим (страница в пакете с "type": "module"): default = сам
//    module.exports, флаг __esModule игнорируется.
// Экспорт должен давать правильный default в обоих. Если default — функция
// (styled из styled-components), отдаём вызываемую обёртку над ней, на которой
// есть и её свойства (styled.h1), и именованные экспорты модуля (css).
let exported;
if (typeof mod.default === 'function') {
  const fn = mod.default;
  exported = Object.assign(
    function sharedDefault() { return fn.apply(this, arguments); },
    fn,
    mod,
    { __esModule: true },
  );
} else {
  exported = Object.assign({ __esModule: true }, mod);
}
module.exports = exported;
`,
          loader: 'js',
        }),
      );
    },
  };
}

/** Имя библиотеки: зависимость текущего проекта с mcp-data внутри. */
export function detectLib(cwd) {
  const pkgFile = path.join(cwd, 'package.json');
  if (!fs.existsSync(pkgFile)) return undefined;
  const pkg = JSON.parse(fs.readFileSync(pkgFile, 'utf8'));
  const names = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies });
  const found = names.filter((name) =>
    fs.existsSync(
      path.join(cwd, 'node_modules', name, 'mcp-data', 'component-index.json'),
    ),
  );
  if (found.length > 1) {
    throw new BuildPagesError(
      `Библиотека определяется неоднозначно (${found.join(
        ', ',
      )}): укажите --lib`,
    );
  }
  return found[0];
}

function readPages(pagesDir) {
  const file = path.join(pagesDir, 'pages.json');
  if (!fs.existsSync(file)) {
    throw new BuildPagesError(`Не найден ${file}`);
  }
  const config = JSON.parse(fs.readFileSync(file, 'utf8'));
  const pages = Array.isArray(config) ? config : config?.pages;
  if (!Array.isArray(pages) || pages.length === 0) {
    throw new BuildPagesError(`${file}: список страниц пуст`);
  }
  return pages.map(({ file: name }) => {
    if (typeof name !== 'string' || !FILE_RE.test(name)) {
      throw new BuildPagesError(
        `${file}: имя страницы должно состоять из [a-z0-9-], получено: ${JSON.stringify(
          name,
        )}`,
      );
    }
    const entry = PAGE_EXTENSIONS.map((ext) =>
      path.join(pagesDir, `${name}${ext}`),
    ).find((candidate) => fs.existsSync(candidate));
    if (!entry) {
      throw new BuildPagesError(
        `Не найден исходник страницы «${name}»: ${name}{${PAGE_EXTENSIONS.join(
          ',',
        )}} в ${pagesDir}`,
      );
    }
    return [name, entry];
  });
}

async function loadEsbuild() {
  try {
    // esbuild — необязательная peerDependency пакета: его ставит проект со
    // страницами, а не этот пакет.
    // eslint-disable-next-line import/no-extraneous-dependencies
    return await import('esbuild');
  } catch {
    throw new BuildPagesError(
      'Для сборки страниц нужен esbuild: npm i -D esbuild ' +
        '(или npx -p esbuild@0.20 … при запуске через npx)',
    );
  }
}

/**
 * @param {{ pagesDir: string, outDir: string, lib: string, watch?: boolean }} options
 * @returns {Promise<{ files: string[], stop?: () => Promise<void> }>}
 */
export async function buildPages({ pagesDir, outDir, lib, watch = false }) {
  if (!lib) {
    throw new BuildPagesError(
      'Не удалось определить имя библиотеки: укажите --lib или ALT_LIB_PACKAGE_NAME ' +
        'либо установите библиотеку в проект (npm i -D <библиотека>)',
    );
  }
  const pages = readPages(pagesDir);
  const esbuild = await loadEsbuild();
  fs.mkdirSync(outDir, { recursive: true });

  const options = {
    entryPoints: Object.fromEntries(pages),
    outdir: outDir,
    bundle: true,
    format: 'esm',
    jsx: 'automatic',
    target: 'es2020',
    minify: !watch,
    sourcemap: watch ? 'inline' : false,
    plugins: [createSharedPlugin({ lib, ...readSharedModules() })],
    logLevel: 'silent',
  };

  const files = pages.map(([name]) => path.join(outDir, `${name}.js`));
  if (watch) {
    const ctx = await esbuild.context({ ...options, logLevel: 'info' });
    await ctx.watch();
    return { files, stop: () => ctx.dispose() };
  }
  try {
    await esbuild.build(options);
  } catch (e) {
    throw new BuildPagesError(
      `Сборка страниц упала:\n${
        (e.errors ?? [])
          .map(
            (err) =>
              `  ${err.location?.file ?? ''}:${err.location?.line ?? ''} ${
                err.text
              }`,
          )
          .join('\n') || e.message
      }`,
    );
  }
  return { files };
}

function parseArgs(argv) {
  const args = { watch: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--watch') args.watch = true;
    else if (arg === '--pages') args.pages = argv[(i += 1)];
    else if (arg === '--out') args.out = argv[(i += 1)];
    else if (arg === '--lib') args.lib = argv[(i += 1)];
    else throw new BuildPagesError(`Неизвестный аргумент: ${arg}`);
  }
  if (!args.pages || !args.out) {
    throw new BuildPagesError(
      'Использование: node build-pages.mjs --pages <каталог> --out <static>/internal [--watch] [--lib <имя>]',
    );
  }
  return args;
}

async function main(argv) {
  const args = parseArgs(argv);
  const lib =
    args.lib ||
    process.env.ALT_LIB_PACKAGE_NAME?.trim() ||
    detectLib(process.cwd());
  const { files } = await buildPages({
    pagesDir: path.resolve(args.pages),
    outDir: path.resolve(args.out),
    lib,
    watch: args.watch,
  });
  console.log(`✔ Страницы собраны (библиотека ${lib}):`);
  for (const file of files) {
    const size = fs.existsSync(file) ? fs.statSync(file).size : 0;
    console.log(
      `   ${path.relative(process.cwd(), file)}  ${(size / 1024).toFixed(
        1,
      )} КБ`,
    );
  }
  if (args.watch) console.log('   слежу за изменениями…');
}

// realpath: через `bin` npm запускает скрипт по симлинку из node_modules/.bin.
const isCli =
  Boolean(process.argv[1]) &&
  fs.realpathSync(process.argv[1]) ===
    fs.realpathSync(fileURLToPath(import.meta.url));

if (isCli) {
  main(process.argv.slice(2)).catch((e) => {
    if (!(e instanceof BuildPagesError) && !(e instanceof SyntaxError)) throw e;
    console.error(`\n✖ ${e.message}\n`);
    process.exit(1);
  });
}
