#!/usr/bin/env node
/**
 * Собирает npm-пакет @daisforge/ui-storybook из уже собранного Storybook.
 *
 * Пакет нужен, чтобы развернуть готовую статику Storybook там, где её нельзя
 * или не нужно собирать из исходников: скачать `@daisforge/ui-storybook@X`
 * той же версии, что и `@daisforge/ui@X`, и выложить `static/`.
 *
 * Состав пакета:
 *   static/  — собранный Storybook без source maps;
 *   bin/     — scripts/white-label/{brand,rename-artifact}.mjs: переименование
 *              бренда в готовой сборке, той же версии, что и статика;
 *   package.json, README.md.
 *
 * Статику нужно собирать с относительной базой, иначе её можно выложить
 * только в корень домена:
 *   NODE_ENV=production STORYBOOK_BASE_PATH=./ npm run storybook:build
 *
 * Запуск: node scripts/storybook-package/stage.mjs
 *   STORYBOOK_DIR — откуда брать статику   (по умолчанию dist/storybook)
 *   OUT_DIR       — куда собрать пакет     (по умолчанию dist/storybook-package)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);
const PACKAGE_NAME = '@daisforge/ui-storybook';
/** Файлы bin/: [исходный путь от корня репозитория, имя команды или null]. */
const BIN_FILES = [
  ['scripts/white-label/brand.mjs', null],
  ['scripts/white-label/rename-artifact.mjs', 'white-label-rename'],
  ['scripts/storybook-package/add-pages.mjs', 'storybook-add-pages'],
  ['scripts/storybook-package/build-pages.mjs', 'storybook-build-pages'],
  ['scripts/storybook-package/prepare-dist.mjs', 'white-label-prepare'],
  // Список модулей для страниц — тот же, что зашит в эту сборку Storybook.
  ['packages/storybook/src/stories/_external/shared-modules.json', null],
];

/**
 * esbuild нужен только для сборки страниц (build-pages.mjs). Необязательная
 * peerDependency: кому нужна лишь статика, его не ставит и предупреждений не
 * видит; проект со страницами ставит его сам.
 */
const ESBUILD_RANGE = '>=0.20.0 <1';

const STORYBOOK_DIR = path.resolve(
  REPO_ROOT,
  process.env.STORYBOOK_DIR || 'dist/storybook',
);
const OUT_DIR = path.resolve(
  REPO_ROOT,
  process.env.OUT_DIR || 'dist/storybook-package',
);

function fail(message) {
  console.error(`\n✖ ${message}\n`);
  process.exit(1);
}

function ensureStorybookBuilt() {
  for (const file of ['index.html', 'iframe.html', 'index.json']) {
    if (!fs.existsSync(path.join(STORYBOOK_DIR, file))) {
      fail(
        `Не найден ${path.join(
          STORYBOOK_DIR,
          file,
        )} — сначала соберите Storybook: ` +
          `NODE_ENV=production STORYBOOK_BASE_PATH=./ npm run storybook:build`,
      );
    }
  }
  // Абсолютные пути к ассетам привязывают статику к корню домена.
  const iframe = fs.readFileSync(
    path.join(STORYBOOK_DIR, 'iframe.html'),
    'utf8',
  );
  if (/\s(?:src|href)="\/assets\//.test(iframe)) {
    fail(
      'Storybook собран с абсолютной базой (/assets/…). ' +
        'Пересоберите с STORYBOOK_BASE_PATH=./',
    );
  }
}

function stageStatic() {
  fs.cpSync(STORYBOOK_DIR, path.join(OUT_DIR, 'static'), {
    recursive: true,
    filter: (src) => !src.endsWith('.map'),
  });
}

function stageBin() {
  const binDir = path.join(OUT_DIR, 'bin');
  fs.mkdirSync(binDir, { recursive: true });
  for (const [source] of BIN_FILES) {
    fs.copyFileSync(
      path.join(REPO_ROOT, source),
      path.join(binDir, path.basename(source)),
    );
  }
}

function stagePackageJson() {
  const lib = JSON.parse(
    fs.readFileSync(
      path.join(REPO_ROOT, 'packages/ui-kit/package.json'),
      'utf8',
    ),
  );
  const pkg = {
    name: PACKAGE_NAME,
    version: lib.version,
    description: `Собранный Storybook ${lib.name}@${lib.version}: статика для развёртывания без сборки`,
    license: lib.license,
    files: ['static', 'bin'],
    bin: Object.fromEntries(
      BIN_FILES.filter(([, command]) => command).map(([source, command]) => [
        command,
        `./bin/${path.basename(source)}`,
      ]),
    ),
    repository: lib.repository,
    homepage: lib.homepage,
    bugs: lib.bugs,
    peerDependencies: { esbuild: ESBUILD_RANGE },
    peerDependenciesMeta: { esbuild: { optional: true } },
    engines: { node: '>=20.0.0' },
    publishConfig: { access: 'public' },
  };
  fs.writeFileSync(
    path.join(OUT_DIR, 'package.json'),
    `${JSON.stringify(pkg, null, 2)}\n`,
  );
  return pkg;
}

function stageReadme(pkg) {
  const lib = pkg.description.match(/Storybook (\S+)@/)[1];
  fs.writeFileSync(
    path.join(OUT_DIR, 'README.md'),
    `# ${pkg.name}

Собранный Storybook библиотеки \`${lib}\` той же версии (${pkg.version}).
Статика в \`static/\` собрана с относительной базой: её можно выложить по любому
пути на любом статическом сервере, сборка не нужна.

\`\`\`bash
npm pack ${pkg.name}@${pkg.version}
tar -xzf *.tgz            # → package/static
\`\`\`

## Подготовка dist без сборки

\`white-label-prepare\` раскладывает в \`dist/\` то, что раньше давала сборка из
исходников, — уже переименованным:

- \`dist/packages/ui-kit\` — \`@daisforge/ui\` той же версии (${pkg.version}),
  готовый к публикации; версию поднимать не нужно, она уже в package.json;
- \`dist/storybook\` — статика Storybook с внутренними страницами.

Пакет ставить в проект не нужно: \`npx\` скачивает нужную версию вместе со
скриптом, а библиотека берётся той же версии.

\`\`\`bash
ALT_LIB_PACKAGE_NAME=<имя> ALT_MCP_PACKAGE_NAME=<имя-mcp> \\
  npx -y -p ${pkg.name}@latest -p esbuild@0.20 white-label-prepare --pages pages
\`\`\`

Вместо \`latest\` можно указать конкретную версию. esbuild нужен только для
сборки внутренних страниц.

Остальной \`dist/\` не трогается. \`--out\` меняет корень (по умолчанию \`dist\`),
\`--pages\` можно не указывать, если внутренних страниц нет.

## Внутренние страницы

Страницы, которых нет в исходниках, добавляются в готовую статику без сборки
Storybook и встают в общее дерево сайдбара как обычные docs-страницы. Проект со
страницами ставит этот пакет, библиотеку (ради типов) и esbuild той же версии:

\`\`\`bash
npm i -D ${pkg.name}@${pkg.version} <библиотека>@${pkg.version} esbuild
\`\`\`

Страница — \`pages/<file>.tsx\` с default export React-компонента; импорты
\`react\`, \`styled-components\` и библиотеки (вместе с подпутями) — как в любом
проекте. Расположение в дереве — \`pages/pages.json\`:

\`\`\`json
[{ "file": "page1", "title": "Название", "before": "changelog--docs" }]
\`\`\`

Поля: \`file\` — имя страницы (\`[a-z0-9-]\`); \`title\` — путь в дереве
(\`Раздел/Страница\`); \`name\` — подпись внутри узла существующего компонента
(по умолчанию \`Docs\`); \`before\`/\`after\` — id записи index.json, рядом с
которой встать (без них — в конец). Так страницу можно поставить в любое место
дерева: на верхний уровень, в раздел или внутрь компонента.

\`\`\`bash
cp -R node_modules/${pkg.name}/static ./static
npx storybook-build-pages --pages pages --out static/internal
npx storybook-add-pages static pages/pages.json
\`\`\`

\`storybook-build-pages\` не кладёт в бандл React, styled-components и
библиотеку: страница получает их из уже загруженного Storybook через
\`globalThis.__SB_SHARED__\` (список — \`bin/shared-modules.json\`) и работает с
тем же экземпляром React и той же темой. Имя библиотеки берётся из \`--lib\`,
\`ALT_LIB_PACKAGE_NAME\` или из зависимостей проекта (по \`mcp-data\`).
\`--watch\` пересобирает страницы при изменениях.

## Переименование

\`bin/rename-artifact.mjs\` (bin \`white-label-rename\`) заменяет имена пакетов в готовой
сборке на месте — в статике Storybook или в распакованном tarball библиотеки:

\`\`\`bash
ALT_LIB_PACKAGE_NAME=@acme/ds ALT_MCP_PACKAGE_NAME=@acme/ds-mcp \\
  node package/bin/rename-artifact.mjs package/static
\`\`\`
`,
  );
}

function main() {
  ensureStorybookBuilt();
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  stageStatic();
  stageBin();
  const pkg = stagePackageJson();
  stageReadme(pkg);

  console.log(`\n✔ Пакет собран: ${OUT_DIR}`);
  console.log(`   name     ${pkg.name}@${pkg.version}`);
  console.log(`   bin      ${Object.keys(pkg.bin).join(', ')}\n`);
}

main();
