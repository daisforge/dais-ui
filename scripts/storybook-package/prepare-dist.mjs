#!/usr/bin/env node
/**
 * Готовит dist/ для внутреннего пайплайна из уже опубликованных пакетов —
 * без сборки из исходников:
 *
 *   dist/packages/ui-kit — @daisforge/ui той же версии, переименованный;
 *                          из него пайплайн публикует библиотеку;
 *   dist/storybook       — статика Storybook из этого пакета, переименованная,
 *                          с внутренними страницами из --pages.
 *
 * Версия — версия этого пакета (@daisforge/ui-storybook): библиотека и
 * Storybook выходят вместе и одной версией. Она же остаётся в
 * dist/packages/ui-kit/package.json, поднимать её не нужно.
 *
 * Имена — из ALT_LIB_PACKAGE_NAME и ALT_MCP_PACKAGE_NAME. Пересоздаются только
 * эти два каталога, остальной dist/ не трогается.
 *
 * Запуск: white-label-prepare [--pages <каталог>] [--out dist]
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { addPages } from './add-pages.mjs';
import { buildPages } from './build-pages.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));

/**
 * В npm-пакете все скрипты лежат рядом в bin/, в репозитории модули
 * переименования — в scripts/white-label/.
 */
const whiteLabel = (file) =>
  fs.existsSync(path.join(HERE, file)) ? `./${file}` : `../white-label/${file}`;
const { BrandError, formatHits, readEnvName } = await import(
  whiteLabel('brand.mjs')
);
const { renameArtifact } = await import(whiteLabel('rename-artifact.mjs'));

export const LIB_PACKAGE = '@daisforge/ui';
export const LIB_DIST = path.join('packages', 'ui-kit');
export const STORYBOOK_DIST = 'storybook';

export class PrepareDistError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PrepareDistError';
  }
}

/** Корень этого пакета: в npm-пакете скрипт лежит в bin/. */
const PACKAGE_ROOT = path.resolve(HERE, '..');

/**
 * Скачивает `@daisforge/ui@version` через npm (настроенный реестр, в том числе
 * прокси) и распаковывает в каталог. Возвращает путь к содержимому пакета.
 */
export function fetchLibPackage(version, workDir) {
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const output = execFileSync(
    npm,
    [
      'pack',
      `${LIB_PACKAGE}@${version}`,
      '--pack-destination',
      workDir,
      '--json',
    ],
    { encoding: 'utf8', shell: process.platform === 'win32' },
  );
  const [{ filename }] = JSON.parse(output);
  execFileSync('tar', ['-xzf', path.join(workDir, filename), '-C', workDir]);
  return path.join(workDir, 'package');
}

function assertNoLeftovers(what, leftovers) {
  if (leftovers.length > 0) {
    throw new PrepareDistError(
      `${what}: после замены остался исходный бренд (${
        leftovers.length
      } строк):\n${formatHits(leftovers)}`,
    );
  }
}

/**
 * @param {{
 *   version: string,
 *   storybookStatic: string,
 *   outDir: string,
 *   names: { lib: string, mcp: string },
 *   pagesDir?: string,
 *   fetchLib?: (version: string, workDir: string) => string,
 * }} options
 */
export async function prepareDist({
  version,
  storybookStatic,
  outDir,
  names,
  pagesDir,
  fetchLib = fetchLibPackage,
}) {
  if (!fs.existsSync(path.join(storybookStatic, 'index.json'))) {
    throw new PrepareDistError(
      `Не найдена статика Storybook: ${storybookStatic}`,
    );
  }
  if (pagesDir && !fs.existsSync(path.join(pagesDir, 'pages.json'))) {
    throw new PrepareDistError(
      `Не найден ${path.join(pagesDir, 'pages.json')}`,
    );
  }

  const libOut = path.join(outDir, LIB_DIST);
  const storybookOut = path.join(outDir, STORYBOOK_DIST);
  const workDir = fs.mkdtempSync(path.join(os.tmpdir(), 'white-label-'));

  try {
    // 1. Библиотека той же версии.
    const libSource = fetchLib(version, workDir);
    const libPkg = JSON.parse(
      fs.readFileSync(path.join(libSource, 'package.json'), 'utf8'),
    );
    if (libPkg.name !== LIB_PACKAGE || libPkg.version !== version) {
      throw new PrepareDistError(
        `Скачан ${libPkg.name}@${libPkg.version}, ожидался ${LIB_PACKAGE}@${version}`,
      );
    }
    fs.rmSync(libOut, { recursive: true, force: true });
    fs.mkdirSync(path.dirname(libOut), { recursive: true });
    fs.cpSync(libSource, libOut, { recursive: true });
    assertNoLeftovers('Библиотека', renameArtifact(libOut, names).leftovers);

    // 2. Storybook: переименовать, собрать и вставить внутренние страницы.
    fs.rmSync(storybookOut, { recursive: true, force: true });
    fs.cpSync(storybookStatic, storybookOut, { recursive: true });
    assertNoLeftovers(
      'Storybook',
      renameArtifact(storybookOut, names).leftovers,
    );

    let pages = [];
    if (pagesDir) {
      await buildPages({
        pagesDir,
        outDir: path.join(storybookOut, 'internal'),
        lib: names.lib,
      });
      pages = addPages(
        storybookOut,
        JSON.parse(fs.readFileSync(path.join(pagesDir, 'pages.json'), 'utf8')),
      );
    }

    return { version, libOut, storybookOut, pages };
  } finally {
    fs.rmSync(workDir, { recursive: true, force: true });
  }
}

function parseArgs(argv) {
  const args = { out: 'dist' };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--pages') args.pages = argv[(i += 1)];
    else if (arg === '--out') args.out = argv[(i += 1)];
    else throw new PrepareDistError(`Неизвестный аргумент: ${arg}`);
  }
  return args;
}

async function main(argv) {
  const args = parseArgs(argv);
  // Сначала имена: без них ничего не скачиваем.
  const names = {
    lib: readEnvName('ALT_LIB_PACKAGE_NAME'),
    mcp: readEnvName('ALT_MCP_PACKAGE_NAME'),
  };
  const { version } = JSON.parse(
    fs.readFileSync(path.join(PACKAGE_ROOT, 'package.json'), 'utf8'),
  );

  const result = await prepareDist({
    version,
    storybookStatic: path.join(PACKAGE_ROOT, 'static'),
    outDir: path.resolve(args.out),
    names,
    pagesDir: args.pages ? path.resolve(args.pages) : undefined,
  });

  const rel = (p) => path.relative(process.cwd(), p);
  console.log(`✔ dist подготовлен, версия ${result.version}:`);
  console.log(`   ${rel(result.libOut)}  ${names.lib}@${result.version}`);
  console.log(`   ${rel(result.storybookOut)}  Storybook`);
  for (const id of result.pages) console.log(`     + ${id}`);
}

// realpath: через `bin` npm запускает скрипт по симлинку из node_modules/.bin.
const isCli =
  Boolean(process.argv[1]) &&
  fs.realpathSync(process.argv[1]) ===
    fs.realpathSync(fileURLToPath(import.meta.url));

if (isCli) {
  main(process.argv.slice(2)).catch((e) => {
    const known = [
      'PrepareDistError',
      'BrandError',
      'BuildPagesError',
      'AddPagesError',
    ];
    if (!known.includes(e?.name) && !(e instanceof BrandError)) throw e;
    console.error(`\n✖ ${e.message}\n`);
    process.exit(1);
  });
}
