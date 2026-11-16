/* eslint-disable no-restricted-syntax, no-console -- Скрипт Node.js запускает процесс и сообщает итог в терминал. */
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

// Точка входа контейнера тестов перерисовки: запускает Playwright против
// собранного Storybook (его раздаёт webServer из конфига). Отчёт уходит в
// /artifacts, смонтированный с хоста, см. docker-compose.screenshots.yml.
const require = createRequire(import.meta.url);
const args = [
  require.resolve('playwright/cli.js'),
  'test',
  '--config',
  'packages/storybook/test/redraw/playwright.config.ts',
];
if (process.env.REDRAW_PROJECT)
  args.push('--project', process.env.REDRAW_PROJECT);
if (process.env.REDRAW_GREP) args.push('--grep', process.env.REDRAW_GREP);
if (process.env.REDRAW_FILTER) args.push(process.env.REDRAW_FILTER);

const child = spawn(process.execPath, args, {
  stdio: 'inherit',
  env: process.env,
});
// Передаём остановку контейнера дочернему процессу, чтобы завершить и Playwright.
for (const signal of ['SIGINT', 'SIGTERM'])
  process.on(signal, () => child.kill(signal));
const status = await new Promise((resolve) => {
  child.on('error', (error) => {
    console.error(error);
    resolve(1);
  });
  child.on('exit', (code) => resolve(code ?? 1));
});
process.exit(status);
