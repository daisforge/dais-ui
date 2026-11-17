/* eslint-disable no-console -- Скрипт Node.js запускает сборку и тесты и сообщает ход в терминал. */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Тесты перерисовки без Docker: собирает тестовый стенд Storybook, если его ещё
// нет, и запускает Playwright. Остальные аргументы уходят Playwright как есть.
//
//   npm run redraw:test:local                     стенд собирается только при его отсутствии
//   npm run redraw:test:local -- --build          пересобрать стенд (после правок кода)
//   npm run redraw:test:local -- --project chromium hover
//   REDRAW_URL=http://localhost:4400 npm run redraw:test:local   готовый Storybook, без сборки
const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);
const require = createRequire(import.meta.url);

const args = process.argv.slice(2).filter((arg) => arg !== '--');
const forceBuild = args.includes('--build');
const playwrightArgs = args.filter((arg) => arg !== '--build');

const run = (command, commandArgs) => {
  const result = spawnSync(command, commandArgs, {
    cwd: root,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  if (result.error) throw result.error;
  return result.status ?? 1;
};

const stand = path.join(root, 'dist/storybook/iframe.html');
if (!process.env.REDRAW_URL && (forceBuild || !fs.existsSync(stand))) {
  console.log(
    forceBuild
      ? 'Пересобираем тестовый стенд Storybook.'
      : 'Тестового стенда Storybook нет, собираем (несколько минут).',
  );
  const built = run('npm', ['run', 'storybook:build:screenshots']);
  if (built !== 0) process.exit(built);
}

process.exit(
  run(process.execPath, [
    path.join(path.dirname(require.resolve('playwright')), 'cli.js'),
    'test',
    '--config',
    'packages/storybook/test/redraw/playwright.config.ts',
    ...playwrightArgs,
  ]),
);
