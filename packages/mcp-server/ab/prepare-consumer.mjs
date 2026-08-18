#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Стенд «потребитель» для A/B-замера (T10).
 *
 * Замерять MCP против грепа по `packages/ui-kit/src` бессмысленно: у
 * потребителя библиотеки исходников нет. Есть установленный пакет — собранный
 * `dist` и `.d.ts`, где у чистых реэкспортов написано ровно
 * `export { Button } from '@salutejs/sdds-finai'`, то есть описаний пропсов нет
 * вообще. Стенд воспроизводит именно эту обстановку.
 *
 * За основу взят `packages/vite-project` — настоящее потребительское
 * приложение этого монорепо, которое ставит библиотеку из тарбола
 * (`file:ui-kit-tgz.tgz`), а не workspace-симлинком. Из него берётся скелет
 * (vite + tsconfig + GlobalStyle), но НЕ `src/pages` — там 20 готовых страниц
 * (`Button.tsx`, `Select.tsx`, `Table.tsx`…), пересекающихся с задачами
 * замера: рука без MCP списала бы ответ оттуда, и сравнение рук перестало бы
 * что-либо значить.
 *
 * Песочница создаётся ВНЕ репозитория, чтобы агент не мог ни подняться в
 * `packages/ui-kit/src`, ни подхватить `CLAUDE.md` библиотеки.
 *
 *   node ab/prepare-consumer.mjs [--path <dir>] [--skip-build] [--skip-index]
 *                               [--ui-source npm@<version>|npm|local]
 *
 * Про `--ui-source`. По умолчанию `npm@1.12.2` — настоящий опубликованный
 * пакет, ровно то, что ставит себе потребитель. Версия выбрана вплотную к
 * локальным исходникам (`1.12.1`), потому что индекс собирается по ним:
 * возьми мы `latest` (`1.13.0`), часть расхождений версий агент оплатил бы
 * чужими ошибками — настоящий проп из индекса выглядел бы выдуманным. Тот
 * остаточный дрейф, что всё же есть, измеряется отдельно (`ab/drift.mjs`) и
 * вычитается при подсчёте метрик.
 *
 * Что надо помнить про этот режим: в опубликованном пакете нет `mcp-data`
 * (индекс ещё ни разу не выпускался), а `@daisforge/ui-mcp` не опубликован
 * вовсе (404) — поэтому сервер ставится из локального пака, а индекс он
 * резолвит запасной веткой `bundled`. Это тоже настоящий потребительский
 * путь, специально предусмотренный в `resolveIndex`.
 *
 * `--ui-source local` пакует библиотеку из локальной сборки: `.d.ts` и индекс
 * гарантированно одной версии, дрейфа нет вовсе, но обстановка чуть
 * «лабораторная» — и требует полной пересборки `nx build ui-kit`.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { parseArgs, PKG_DIR, REPO_ROOT } from './lib/paths.mjs';

const argv = parseArgs(process.argv.slice(2));
export const SANDBOX = path.resolve(
  argv.path || path.join(os.homedir(), '.claude-ab-consumer'),
);

const VITE_PROJECT = path.join(REPO_ROOT, 'packages/vite-project');
const UI_DIST = path.join(REPO_ROOT, 'dist/packages/ui-kit');
const ROOT_NM = path.join(REPO_ROOT, 'node_modules');

const run = (cmd, args, cwd, env) =>
  execFileSync(cmd, args, {
    cwd,
    stdio: 'inherit',
    env: { ...process.env, ...env },
    maxBuffer: 64 * 1024 * 1024,
  });

const capture = (cmd, args, cwd) =>
  execFileSync(cmd, args, {
    cwd,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  }).trim();

/**
 * npm pack + распаковка `package/` в целевую директорию.
 * `spec` — либо путь к локальной папке пакета, либо спецификатор для реестра
 * (`@daisforge/ui@1.13.0`): `npm pack` умеет и то и другое одинаково.
 */
function packInto(spec, targetDir) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ab-pack-'));
  const isLocalDir = fs.existsSync(spec) && fs.statSync(spec).isDirectory();
  const tgz = capture(
    'npm',
    isLocalDir
      ? ['pack', '--ignore-scripts', '--silent', '--pack-destination', tmp]
      : [
          'pack',
          spec,
          '--ignore-scripts',
          '--silent',
          '--pack-destination',
          tmp,
        ],
    isLocalDir ? spec : tmp,
  )
    .split(/\r?\n/)
    .pop();
  run('tar', ['-xzf', path.join(tmp, tgz), '-C', tmp], tmp);
  fs.rmSync(targetDir, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(targetDir), { recursive: true });
  fs.renameSync(path.join(tmp, 'package'), targetDir);
  fs.rmSync(tmp, { recursive: true, force: true });
  return JSON.parse(
    fs.readFileSync(path.join(targetDir, 'package.json'), 'utf8'),
  ).version;
}

function copyFrom(rel, dest = rel) {
  const from = path.join(VITE_PROJECT, rel);
  if (!fs.existsSync(from)) throw new Error(`Нет файла-шаблона: ${from}`);
  const to = path.join(SANDBOX, dest);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

function linkDeps() {
  const nm = path.join(SANDBOX, 'node_modules');
  fs.mkdirSync(nm, { recursive: true });
  for (const entry of fs.readdirSync(ROOT_NM)) {
    if (entry === '@daisforge') continue; // ставим настоящими пакетами, не симлинком на исходники
    const target = path.join(nm, entry);
    if (fs.existsSync(target)) continue;
    fs.symlinkSync(path.join(ROOT_NM, entry), target, 'dir');
  }
}

/**
 * Каркас приложения сам подхватывает всё, что лежит в `src/pages`, через
 * `import.meta.glob` — поэтому ответ агента попадает в работающее приложение
 * без единой правки App: положил файл в src/pages — он появился в навигации.
 * Иначе «приложение запускается» оставалось бы обещанием: страницы были бы
 * написаны, но никуда не подключены и ни разу не отрисованы.
 */
const APP_TSX = `import { lazy, Suspense, useState } from 'react';
import type { ComponentType } from 'react';

import { GlobalStyle } from '@daisforge/ui';

import './shared/theme.css';

const modules = import.meta.glob('./pages/*.tsx');

/** Из модуля берём первый экспортированный компонент — имя у каждой задачи своё. */
const firstComponent = (mod: Record<string, unknown>): { default: ComponentType } => {
  const value =
    (mod.default as ComponentType | undefined) ??
    (Object.values(mod).find((v) => typeof v === 'function') as ComponentType | undefined);
  if (!value) throw new Error('в модуле страницы нет ни одного компонента');
  return { default: value };
};

const pages = Object.entries(modules)
  .map(([filePath, load]) => ({
    name: filePath.replace('./pages/', '').replace('.tsx', ''),
    Component: lazy(() => (load() as Promise<Record<string, unknown>>).then(firstComponent)),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

function App() {
  const [active, setActive] = useState<string | null>(pages[0]?.name ?? null);
  const current = pages.find((p) => p.name === active);

  return (
    <div className="layout">
      <GlobalStyle theme="light" />
      <nav className="nav">
        {pages.map((p) => (
          <button key={p.name} type="button" onClick={() => setActive(p.name)}>
            {p.name}
          </button>
        ))}
      </nav>
      <div className="main">
        {current ? (
          <Suspense fallback={<div>загрузка…</div>}>
            <current.Component />
          </Suspense>
        ) : (
          <div>Страниц нет: положите ответ агента в src/pages</div>
        )}
      </div>
    </div>
  );
}

export default App;
`;

const TSCONFIG = {
  compilerOptions: {
    target: 'ES2022',
    lib: ['ES2022', 'DOM', 'DOM.Iterable'],
    module: 'ESNext',
    moduleResolution: 'bundler',
    moduleDetection: 'force',
    allowImportingTsExtensions: true, // main.tsx проекта импортирует './App.tsx' с расширением
    jsx: 'react-jsx',
    types: ['vite/client'],
    strict: true,
    noFallthroughCasesInSwitch: true,
    skipLibCheck: true,
    noEmit: true,
    useDefineForClassFields: true,
  },
  include: ['src'],
};

const PKG_JSON = {
  name: 'ab-consumer',
  private: true,
  version: '0.0.0',
  type: 'module',
  scripts: {
    dev: 'vite',
    build: 'tsc -b && vite build',
    typecheck: 'tsc -p tsconfig.json',
  },
  dependencies: {
    '@daisforge/ui': '*',
    react: '18.3.1',
    'react-dom': '18.3.1',
    'react-hook-form': '^7.54.2',
    'styled-components': '5.3.1',
    swr: '^2.3.3',
    zod: '^3.24.2',
  },
  devDependencies: {
    '@types/react': '18.3.1',
    '@types/react-dom': '18.3.0',
    typescript: '~5.4.5',
    vite: '^5.0.0',
  },
};

const README = `# Стенд «потребитель» (A/B-замер MCP, T10)

Создаётся автоматически: \`node ab/prepare-consumer.mjs\` из packages/mcp-server.
Правки здесь не переживут пересоздание — правьте сам скрипт.

Обстановка ровно как у потребителя библиотеки: только установленный пакет
@daisforge/ui (собранный dist + .d.ts), никаких исходников ui-kit.
`;

function main() {
  const uiSource = String(argv['ui-source'] || 'npm@1.12.2');
  const fromNpm = uiSource.startsWith('npm');
  const npmSpec = uiSource.includes('@')
    ? `@daisforge/ui@${uiSource.split('@').pop()}`
    : '@daisforge/ui@latest';

  if (fromNpm) {
    console.log(
      `▸ Библиотека — из реестра (${npmSpec}), как у настоящего потребителя.\n` +
        '  В опубликованном пакете нет mcp-data — индекс сервер возьмёт веткой bundled.',
    );
  }
  if (!fromNpm && !argv['skip-build']) {
    console.log('▸ Сборка @daisforge/ui (nx build ui-kit)…');
    run('npx', ['nx', 'build', 'ui-kit'], REPO_ROOT, {
      NODE_OPTIONS: '--max_old_space_size=4096',
      NODE_ENV: 'production',
    });
  }
  if (!argv['skip-index']) {
    // nx-сборка перезаписывает dist/packages/ui-kit целиком, а mcp-data туда
    // кладёт индексер — без этого шага у потребителя не будет индекса и
    // resolveIndex уйдёт в запасную ветку bundled вместо installed.
    console.log('▸ Сборка сервера и индекса…');
    run(path.join(ROOT_NM, '.bin/tsc'), ['-p', 'tsconfig.lib.json'], PKG_DIR);
    run('node', ['./dist/indexer/buildIndex.js'], PKG_DIR);
  }

  const mcpData = path.join(UI_DIST, 'mcp-data/component-index.json');
  if (!fromNpm && !fs.existsSync(mcpData)) {
    throw new Error(`Индекс не попал в сборку пакета: ${mcpData}`);
  }

  console.log(`▸ Песочница: ${SANDBOX}`);
  fs.rmSync(SANDBOX, { recursive: true, force: true });
  fs.mkdirSync(SANDBOX, { recursive: true });

  // Клоны по слотам параллельности (`<песочница>-w0`, `-w1`, …) создаёт раннер
  // и переиспользует, пока они есть. Пересобрали песочницу — старые клоны
  // обязаны уйти вместе с ней, иначе прогон молча пойдёт по прошлой версии
  // пакета и прошлому серверу.
  const parent = path.dirname(SANDBOX);
  const prefix = `${path.basename(SANDBOX)}-w`;
  for (const entry of fs.readdirSync(parent)) {
    if (!entry.startsWith(prefix)) continue;
    fs.rmSync(path.join(parent, entry), { recursive: true, force: true });
    console.log(`   удалён устаревший клон: ${entry}`);
  }

  for (const f of [
    'index.html',
    'vite.config.ts',
    'src/main.tsx',
    'src/shared/theme.css',
  ]) {
    copyFrom(f);
  }
  // Свой tsconfig вместо копии проектного: тот рассчитан на TypeScript ~5.9
  // (`erasableSyntaxOnly`, `noUncheckedSideEffectImports`), а в монорепо 5.4 —
  // той же версии, которой собрана сама библиотека. Плюс сняты
  // `noUnusedLocals`/`noUnusedParameters`: неиспользованный импорт — вопрос
  // стиля, а мерить надо знание API, а не аккуратность уборки.
  fs.writeFileSync(
    path.join(SANDBOX, 'tsconfig.json'),
    `${JSON.stringify(TSCONFIG, null, 2)}\n`,
    'utf8',
  );
  fs.writeFileSync(path.join(SANDBOX, 'src/App.tsx'), APP_TSX, 'utf8');
  fs.mkdirSync(path.join(SANDBOX, 'src/pages'), { recursive: true });
  fs.writeFileSync(
    path.join(SANDBOX, 'package.json'),
    `${JSON.stringify(PKG_JSON, null, 2)}\n`,
    'utf8',
  );
  fs.writeFileSync(path.join(SANDBOX, 'README.md'), README, 'utf8');

  console.log('▸ Зависимости (симлинки на корневые node_modules)…');
  linkDeps();

  console.log('▸ Установка пакетов…');
  const uiVersion = packInto(
    fromNpm ? npmSpec : UI_DIST,
    path.join(SANDBOX, 'node_modules/@daisforge/ui'),
  );
  // Сервер всегда из локального пака: в реестре его нет вовсе (404).
  const mcpVersion = packInto(
    PKG_DIR,
    path.join(SANDBOX, 'node_modules/@daisforge/ui-mcp'),
  );
  console.log(
    `   @daisforge/ui@${uiVersion} (${
      fromNpm ? 'из реестра' : 'локальная сборка'
    }), @daisforge/ui-mcp@${mcpVersion} (локальная сборка)`,
  );

  console.log('\n▸ Smoke: разрешается ли @daisforge/ui по .d.ts…');
  const probe = path.join(SANDBOX, 'src/pages/__probe.tsx');
  fs.writeFileSync(
    probe,
    'import { Button } from \'@daisforge/ui\';\n\nexport const Probe = () => <Button size="s">ок</Button>;\n',
    'utf8',
  );
  run(path.join(ROOT_NM, '.bin/tsc'), ['-p', 'tsconfig.json'], SANDBOX);
  fs.rmSync(probe);
  console.log('   tsc по tsconfig.json песочницы — без ошибок');

  console.log('▸ Smoke: какой веткой сервер резолвит индекс…');
  const resolved = capture(
    'node',
    [
      '--input-type=module',
      '-e',
      "const {resolveIndex}=await import('@daisforge/ui-mcp/dist/resolveIndex.js');" +
        'const r=resolveIndex();' +
        'console.log(JSON.stringify({source:r.source,libVersion:r.index.libVersion,installed:r.installedLibVersion,components:Object.keys(r.index.components).length,notice:r.dataVersionNotice||null}));',
    ],
    SANDBOX,
  );
  const info = JSON.parse(resolved.split(/\r?\n/).pop());
  console.log(`   ${JSON.stringify(info)}`);
  // 'workspace' означало бы, что сервер нашёл рядом с собой исходники монорепо,
  // то есть песочница протекла и это не обстановка потребителя.
  if (info.source === 'workspace') {
    throw new Error(
      "resolveIndex ушёл веткой 'workspace' — песочница видит монорепо, обстановка не потребительская.",
    );
  }

  console.log(
    `\nГотово (${info.source}). Дальше:\n` +
      '  node ab/drift.mjs                                  # измерить расхождение индекса и пакета\n' +
      '  node ab/run.mjs --arms pkg,pkg-mcp,pkg-both        # прогон',
  );
}

main();
