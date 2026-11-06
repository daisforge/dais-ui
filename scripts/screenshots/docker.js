/* eslint-disable no-console, import/extensions -- Скрипт Node.js работает с файлами и процессами; ESM-импорты содержат расширения. */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { promoteSnapshots } from './transaction.js';

// Точка входа на компьютере разработчика или GitHub runner, вне тестового контейнера.
// Здесь запускаем Docker; после успешного update переносим эталоны в рабочую копию.
const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);

// npm передаёт режим и необязательное регулярное выражение для путей файлов stories.
const [action = 'compare', ...args] = process.argv.slice(2);
if (!['compare', 'update'].includes(action))
  throw new Error(`Unknown action: ${action}`);
const filters = args.filter((arg) => arg !== '--');
const [filter] = filters;
if (filters.length > 1 || filter?.startsWith('-'))
  throw new Error('Supply one component/file regex.');

// Команды выполняются из корня проекта, а их вывод остаётся в терминале или логе CI.
const execute = (command, commandArgs, options = {}) => {
  const result = spawnSync(command, commandArgs, {
    cwd: root,
    stdio: 'inherit',
    ...options,
  });
  if (result.error) throw result.error;
  return result.status ?? 1;
};

// Compose задаёт Linux/amd64, изоляцию сети и каталоги, доступные контейнеру.
const compose = ['compose', '-f', 'docker-compose.screenshots.yml'];
if (execute('docker', ['info', '--format', '{{.OSType}}']) !== 0) {
  throw new Error(
    'Для скриншотных тестов нужен запущенный Docker с поддержкой Linux-контейнеров.',
  );
}

// Проверяем актуальность образа с браузером, шрифтами и собранным Storybook.
// Docker повторно использует неизменившиеся слои из кеша.
if (execute('docker', [...compose, 'build']) !== 0) process.exit(1);

// Отдельный каталог сохраняет результаты этого запуска, не затирая предыдущие.
// staging хранит кандидатов в эталоны; рабочие PNG пока остаются нетронутыми.
const artifacts = path.join(
  root,
  'artifacts/screenshots',
  `${new Date().toISOString().replace(/[:.]/g, '-')}-${process.pid}`,
  'run-1',
);
const staging = path.join(artifacts, 'staging');
fs.mkdirSync(staging, { recursive: true });

// Каждый вызов выполняет одно сравнение или обновление без повторных запусков.
// --rm удаляет завершённый контейнер; результаты остаются в подключённых каталогах.
// Эти переменные Compose превращает в настройки и подключения каталогов контейнера.
const status = execute(
  'docker',
  [...compose, 'run', '--rm', '-T', 'screenshots'],
  {
    env: {
      ...process.env,
      SCREENSHOT_MODE: action,
      SCREENSHOT_FILTER: filter ?? '',
      SCREENSHOT_ARTIFACTS_HOST: artifacts,
      SCREENSHOT_STAGING_HOST: staging,
    },
  },
);

// Ошибки тестов и неполный запуск возвращаются вызывающей команде, включая CI.
if (status !== 0) {
  console.error(`Run failed; baselines unchanged. Artifacts: ${artifacts}`);
  process.exit(status);
}

// Эталоны обновляем на хосте лишь после успеха контейнера: внутри они доступны только для чтения.
if (action === 'update') {
  const changes = promoteSnapshots(
    staging,
    path.join(root, 'packages/storybook/__snapshots__'),
    { partial: Boolean(filter) },
  );
  // Список изменённых PNG помогает проверить результат обновления перед коммитом.
  fs.writeFileSync(
    path.join(artifacts, 'baseline-changes.json'),
    JSON.stringify(changes, null, 2),
  );
  console.log(
    `Baselines: +${changes.added.length} ~${changes.changed.length} -${changes.removed.length}`,
  );
}
console.log(`Completed screenshot ${action}. Artifacts: ${artifacts}`);
