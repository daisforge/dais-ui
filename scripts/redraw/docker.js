/* eslint-disable no-console -- Скрипт Node.js работает с процессами и сообщает итог в терминал. */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Точка входа на компьютере разработчика или CI: тесты перерисовки TableCanvas
// в том же Docker-образе, что и снимки (браузеры, шрифты, собранный Storybook).
//
//   npm run redraw:test                      все проекты и сценарии
//   npm run redraw:test -- hover             только файлы сценариев по регулярному выражению
//   npm run redraw:test -- --project chromium   один проект (браузер или масштаб)
//   npm run redraw:test -- --grep наведение  только тесты с таким названием
const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);

const args = process.argv.slice(2).filter((arg) => arg !== '--');
const option = (name) => {
  const index = args.indexOf(name);
  if (index === -1) return '';
  const value = args[index + 1];
  args.splice(index, 2);
  return value ?? '';
};
const project = option('--project');
const grep = option('--grep');
if (args.length > 1 || args[0]?.startsWith('-'))
  throw new Error('Допустим один фильтр файлов, --project и --grep.');
const [filter = ''] = args;

const execute = (command, commandArgs, options = {}) => {
  const result = spawnSync(command, commandArgs, {
    cwd: root,
    stdio: 'inherit',
    ...options,
  });
  if (result.error) throw result.error;
  return result.status ?? 1;
};

const compose = ['compose', '-f', 'docker-compose.screenshots.yml'];
if (execute('docker', ['info', '--format', '{{.OSType}}']) !== 0) {
  throw new Error(
    'Для тестов перерисовки нужен запущенный Docker с поддержкой Linux-контейнеров.',
  );
}
if (execute('docker', [...compose, 'build', 'redraw']) !== 0) process.exit(1);

// Отдельный каталог на каждый запуск: отчёт Playwright, трассы и картинки расхождений.
const artifacts = path.join(
  root,
  'artifacts/redraw',
  `${new Date().toISOString().replace(/[:.]/g, '-')}-${process.pid}`,
);
fs.mkdirSync(artifacts, { recursive: true });

const status = execute('docker', [...compose, 'run', '--rm', '-T', 'redraw'], {
  env: {
    ...process.env,
    REDRAW_FILTER: filter,
    REDRAW_PROJECT: project,
    REDRAW_GREP: grep,
    REDRAW_ARTIFACTS_HOST: artifacts,
  },
});

console.log(
  `${
    status === 0 ? 'Тесты перерисовки прошли' : 'Тесты перерисовки упали'
  }. Отчёт: ${path.join(artifacts, 'report', 'index.html')}`,
);
process.exit(status);
