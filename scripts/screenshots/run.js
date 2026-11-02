/* eslint-disable no-restricted-syntax, no-console -- Скрипт Node.js последовательно работает с файлами и процессами; ESM-импорты содержат расширения. */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import { createRequire } from 'node:module';
import path from 'node:path';

// Точка входа готового Docker-контейнера: раздаёт Storybook, запускает проверки
// и собирает отчёт. Перенос эталонов в проект выполняет docker.js на хосте.
const require = createRequire(import.meta.url);
const mode = process.env.SCREENSHOT_MODE;
if (!['compare', 'update'].includes(mode))
  throw new Error('Invalid SCREENSHOT_MODE');

// Пути внутри контейнера заданы Dockerfile и docker-compose.screenshots.yml.
// /artifacts и /staging смонтированы с хоста; каталог эталонов доступен только для чтения.
const artifacts = process.env.SCREENSHOT_ARTIFACTS_DIR;
const environment = JSON.parse(
  fs.readFileSync('/opt/screenshot-environment.json', 'utf8'),
);
const baselines = '/app/packages/storybook/__snapshots__';
const manifest = path.join(baselines, 'environment.json');
const acceptedStatuses = ['skipped', mode === 'update' ? 'updated' : 'passed'];

// Сохраняем параметры текущего окружения даже при отказе до запуска браузера.
fs.mkdirSync(artifacts, { recursive: true });
fs.writeFileSync(
  path.join(artifacts, 'environment.json'),
  JSON.stringify(environment, null, 2),
);
// Сравнение и частичное обновление допустимы только в окружении исходных эталонов.
// При его смене полный update создаёт согласованный набор PNG и новый environment.json.
if (
  mode === 'compare' ||
  (mode === 'update' && process.env.SCREENSHOT_FILTER)
) {
  if (
    !fs.existsSync(manifest) ||
    JSON.stringify(JSON.parse(fs.readFileSync(manifest, 'utf8'))) !==
      JSON.stringify(environment)
  ) {
    fs.writeFileSync(
      path.join(artifacts, 'preflight.json'),
      JSON.stringify(
        {
          error: 'Baseline environment is missing or incompatible',
          expected: fs.existsSync(manifest)
            ? JSON.parse(fs.readFileSync(manifest, 'utf8'))
            : null,
          actual: environment,
        },
        null,
        2,
      ),
    );
    throw new Error(
      'Baseline environment is missing or incompatible. Run a FULL screenshot:update in the pinned Docker image.',
    );
  }
}
// Раздаём собранный стенд внутри контейнера; внешний доступ к сети тестам не нужен.
// 127.0.0.1 — адрес самого контейнера, 4400 — выбранный нами порт сервера.
// Порт не публикуется на хост: соседние контейнеры и локальный Storybook ему не мешают.
// Сервер и test-runner используют общий адрес, поэтому порт меняется в одном месте.
const serverHost = '127.0.0.1';
const serverPort = 4400;
const serverUrl = `http://${serverHost}:${serverPort}`;
const staticRoot = path.resolve('dist/storybook');

// MIME-типы позволяют браузеру правильно загрузить JS, CSS, изображения и шрифты.
const mime = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.webp': 'image/webp',
};
const server = http.createServer((req, res) => {
  let name;
  try {
    // Базовый адрес нужен только для разбора относительного URL, сетевого запроса здесь нет.
    name = decodeURIComponent(new URL(req.url, serverUrl).pathname);
  } catch {
    res.writeHead(400).end();
    return;
  }
  const file = path.resolve(
    staticRoot,
    `.${name === '/' ? '/index.html' : name}`,
  );
  // Отдаём только существующие файлы сборки; выход из её каталога запрещён.
  if (
    !file.startsWith(`${staticRoot}${path.sep}`) ||
    !fs.existsSync(file) ||
    !fs.statSync(file).isFile()
  ) {
    res.writeHead(404).end();
    return;
  }
  res.setHeader(
    'Content-Type',
    mime[path.extname(file)] ?? 'application/octet-stream',
  );
  fs.createReadStream(file).pipe(res);
});
await new Promise((resolve) => {
  server.listen(serverPort, serverHost, resolve);
});
// Один worker использует фиксированные настройки Chromium; фильтр выбирает файлы stories.
// jest.json нужен для сверки количества тестов, junit.xml — для просмотра результатов в CI.
const args = [
  require.resolve('@storybook/test-runner/dist/test-storybook.js'),
  '--url',
  serverUrl,
  '--config-dir',
  'packages/storybook/.storybook',
  '--ci',
  '--maxWorkers=1',
  '--json',
  '--junit',
  '--',
  '--outputFile',
  path.join(artifacts, 'jest.json'),
];
if (process.env.SCREENSHOT_FILTER)
  args.push('--testPathPattern', process.env.SCREENSHOT_FILTER);
const child = spawn(process.execPath, args, {
  stdio: 'inherit',
  env: {
    ...process.env,
    CI: 'true',
    JEST_JUNIT_OUTPUT_DIR: artifacts,
    JEST_JUNIT_OUTPUT_NAME: 'junit.xml',
  },
});
// Передаём остановку контейнера дочернему процессу, чтобы завершить и test-runner.
for (const signal of ['SIGINT', 'SIGTERM'])
  process.on(signal, () => child.kill(signal));
const status = await new Promise((resolve) => {
  child.on('error', (error) => {
    console.error(error);
    resolve(1);
  });
  child.on('exit', (code) => resolve(code ?? 1));
});
server.close();
// Объединяем результаты Jest и захвата PNG в машинный и HTML-отчёты.
// Записи stories создают test-runner.ts и environment.cjs, включая skip и ранние ошибки.
const records = fs.existsSync(path.join(artifacts, 'stories'))
  ? fs
      .readdirSync(path.join(artifacts, 'stories'))
      .filter((n) => n.endsWith('.json'))
      .map((n) =>
        JSON.parse(fs.readFileSync(path.join(artifacts, 'stories', n), 'utf8')),
      )
  : [];
const jest = fs.existsSync(path.join(artifacts, 'jest.json'))
  ? JSON.parse(fs.readFileSync(path.join(artifacts, 'jest.json'), 'utf8'))
  : {};
const summary = {
  mode,
  tests: jest.numTotalTests ?? 0,
  passed: jest.numPassedTests ?? 0,
  failed: jest.numFailedTests ?? 0,
  screenshots: records.filter((r) => r.status !== 'skipped').length,
  skipped: records.filter((r) => r.status === 'skipped'),
  records,
};
fs.writeFileSync(
  path.join(artifacts, 'summary.json'),
  JSON.stringify(summary, null, 2),
);
// Тексты ошибок и названия stories выводим как текст, а не как HTML-разметку.
const escaped = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[
        c
      ]),
  );
// Автономный HTML-отчёт можно скачать из CI и открыть вместе с PNG без сервера.
// Эти стили оформляют только отчёт: они не попадают в Storybook и не меняют снимки.
fs.writeFileSync(
  path.join(artifacts, 'index.html'),
  `<!doctype html>
<meta charset="utf-8">
<title>Screenshot report</title>
<style>
  body { font: 16px system-ui; margin: 32px; }
  img { max-width: 100%; }
  article { border-top: 1px solid #ccc; padding: 16px 0; }
  pre { white-space: pre-wrap; }
</style>
<h1>Screenshot report</h1>
<p>${escaped(
    JSON.stringify({
      ...summary,
      records: undefined,
      skipped: summary.skipped.length,
    }),
  )}</p>
${records
  .map((r) => {
    const preview = ['composite.png', 'failure-page.png'].find((name) =>
      fs.existsSync(path.join(artifacts, r.id, name)),
    );
    const actual = [
      'actual.png',
      'failure-page.png',
      'unstable-2.png',
      'unstable-0.png',
    ].find((name) => fs.existsSync(path.join(artifacts, r.id, name)));
    const url = (name) => `${encodeURIComponent(r.id)}/${name}`;
    return `<article>
<h2>${escaped(r.id)} — ${escaped(r.status)}</h2>
<pre>${escaped(r.error ?? r.skipReason ?? '')}</pre>
${
  preview
    ? `<a href="${url(preview)}"><img loading="lazy" src="${url(preview)}"></a>`
    : ''
}
${actual ? `<a href="${url(actual)}">${actual}</a>` : ''}
</article>`;
  })
  .join('')}`,
);
// Нулевой код Jest недостаточен: каждая выполненная story должна попасть в отчёт.
// Пустой или неполный запуск не разрешает заменять эталоны.
if (
  status === 0 &&
  summary.tests > 0 &&
  records.length === summary.tests &&
  summary.screenshots > 0 &&
  records.every((r) => acceptedStatuses.includes(r.status))
) {
  if (mode === 'update')
    fs.writeFileSync(
      '/staging/environment.json',
      JSON.stringify(environment, null, 2),
    );
  process.exit(0);
}
console.error(
  'Runner failed or screenshot inventory was incomplete/empty; baselines are unchanged.',
);
process.exit(status || 1);
