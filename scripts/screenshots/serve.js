/* eslint-disable no-console -- Скрипт Node.js раздаёт собранный стенд и сообщает адрес в терминал. */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Статический сервер собранного Storybook: им пользуются прогон снимков
// (run.js внутри контейнера) и тесты перерисовки (webServer в Playwright).
// Внешний доступ к сети стендам не нужен, поэтому адрес только локальный.

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

/**
 * Поднимает сервер и отдаёт его после привязки к порту.
 * @param {{ root: string, port: number, host?: string }} options
 */
export async function serveStatic({ root, port, host = '127.0.0.1' }) {
  const staticRoot = path.resolve(root);
  const serverUrl = `http://${host}:${port}`;
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
    server.listen(port, host, resolve);
  });
  return { server, url: serverUrl };
}

// Запуск из командной строки: node scripts/screenshots/serve.js --root dist/storybook --port 4401
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const args = process.argv.slice(2);
  const option = (name, fallback) => {
    const index = args.indexOf(name);
    return index === -1 ? fallback : args[index + 1];
  };
  const root = option('--root', 'dist/storybook');
  if (!fs.existsSync(path.join(root, 'iframe.html'))) {
    console.error(
      `В ${path.resolve(
        root,
      )} нет собранного Storybook. Сначала: npm run storybook:build:screenshots`,
    );
    process.exit(1);
  }
  const { url } = await serveStatic({
    root,
    port: Number(option('--port', 4401)),
  });
  console.log(`Storybook: ${url}`);
}
