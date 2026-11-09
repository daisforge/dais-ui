/* eslint-disable no-restricted-syntax, no-console, import/extensions -- Скрипт Node.js собирает и проверяет тестовый стенд Storybook. */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Подготовка тестового Storybook: Dockerfile вызывает этот скрипт при сборке образа.
// Корень вычисляем от файла, чтобы результат не зависел от текущего каталога запуска.
const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);

try {
  const output = path.join(root, 'dist/storybook');
  // Флаг включает локальные ресурсы и visual-stories в production-сборке Storybook.
  // Эти переменные передаются только дочерним командам сборки.
  const env = {
    ...process.env,
    CI: 'true',
    NODE_ENV: 'production',
    NODE_OPTIONS: process.env.NODE_OPTIONS || '--max_old_space_size=4096',
    STORYBOOK_SCREENSHOT_TEST: '1',
    STORYBOOK_DISABLE_TELEMETRY: '1',
  };
  // Последовательно выполняем генерацию и сборку; любой ненулевой код прерывает процесс.
  const run = (command, args, label) => {
    const result = spawnSync(command, args, {
      cwd: root,
      env,
      stdio: 'inherit',
    });
    if (result.error) throw result.error;
    if (result.status !== 0)
      throw new Error(
        `${label} failed (${result.signal || `exit ${result.status}`}).`,
      );
  };

  // Старая сборка не должна скрывать ошибку или отсутствие результата нового запуска.
  fs.rmSync(output, { recursive: true, force: true });
  // Генераторы создают описания типов и примеров, которые импортирует Storybook.
  run(
    process.platform === 'win32' ? 'npm.cmd' : 'npm',
    ['run', 'prestorybook'],
    'Storybook documentation generation',
  );

  // Для тестового стенда запускаем Storybook напрямую, без графа проектов и кеша задач Nx.
  const require = createRequire(path.join(root, 'package.json'));
  const packageFile = require.resolve('storybook/package.json');
  const cliPackage = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
  const cli = path.resolve(path.dirname(packageFile), cliPackage.bin.storybook);
  run(
    process.execPath,
    [
      cli,
      'build',
      '--config-dir',
      'packages/storybook/.storybook',
      '--output-dir',
      'dist/storybook',
    ],
    'Storybook screenshot build',
  );

  // Успешного кода CLI недостаточно: проверяем страницы стенда и индекс stories.
  for (const name of ['index.html', 'iframe.html', 'index.json']) {
    const file = path.join(output, name);
    if (
      !fs.existsSync(file) ||
      !fs.statSync(file).isFile() ||
      !fs.statSync(file).size
    )
      throw new Error(`Storybook build did not produce a nonempty ${name}.`);
  }
  // Пустой индекс не должен превращать отсутствие тестов в успешный запуск.
  const index = JSON.parse(
    fs.readFileSync(path.join(output, 'index.json'), 'utf8'),
  );
  if (
    !index.entries ||
    !Object.values(index.entries).some((entry) => entry?.type === 'story')
  )
    throw new Error('Storybook build produced no testable stories.');
} catch (error) {
  // Docker прекращает сборку образа, если этот скрипт завершится с ошибкой.
  console.error(error);
  process.exitCode = 1;
}
