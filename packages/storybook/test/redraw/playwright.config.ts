import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type PlaywrightTestProject } from 'playwright/test';

import type { RedrawOptions } from './fixtures';

// Тесты перерисовки TableCanvas: частичный кадр glide сверяется с кадром целиком
// в том же браузере, PNG-эталонов нет. Подробности в README.md рядом.
const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../../..',
);

// Готовый Storybook (dev-сервер с STORYBOOK_SCREENSHOT_TEST=1) вместо сборки в dist/storybook.
const externalUrl = process.env.REDRAW_URL;
const port = Number(process.env.REDRAW_PORT ?? 4401);
const baseURL = externalUrl ?? `http://127.0.0.1:${port}`;

// Свой Chromium-браузер (например, SberBrowser во внутреннем контуре): тогда только
// chromium-проекты, Firefox и WebKit с таким путём не запустить.
const browserPath = process.env.REDRAW_BROWSER;

// Отчёты каждого запуска в своём каталоге; в Docker каталог задаёт контейнер.
// Конфиг читается и в процессах-работниках: каталог запоминаем в окружении,
// иначе у каждого работника был бы свой.
const artifacts =
  process.env.REDRAW_ARTIFACTS_DIR ??
  path.join(
    root,
    'artifacts/redraw',
    `${new Date().toISOString().replace(/[:.]/g, '-')}-${process.pid}`,
  );
process.env.REDRAW_ARTIFACTS_DIR = artifacts;

const chromium = (
  name: string,
  options: { dpr?: number; checkEachStep?: boolean } = {},
): PlaywrightTestProject<RedrawOptions> => ({
  name,
  use: {
    browserName: 'chromium',
    launchOptions: {
      executablePath: browserPath,
      // Настоящий масштаб устройства, а не эмуляция контекста: glide берёт
      // devicePixelRatio и толщину линий из него.
      args:
        options.dpr === undefined
          ? []
          : [`--force-device-scale-factor=${options.dpr}`],
    },
    ...(options.checkEachStep !== undefined && {
      checkEachStep: options.checkEachStep,
    }),
  },
});

const otherBrowsers: PlaywrightTestProject<RedrawOptions>[] = browserPath
  ? []
  : [
      { name: 'firefox', use: { browserName: 'firefox' } },
      { name: 'webkit', use: { browserName: 'webkit' } },
    ];

export default defineConfig<RedrawOptions>({
  testDir: './specs',
  outputDir: path.join(artifacts, 'test-results'),
  reporter: [
    ['list'],
    ['html', { outputFolder: path.join(artifacts, 'report'), open: 'never' }],
    ['json', { outputFile: path.join(artifacts, 'results.json') }],
  ],
  // Один браузер за раз: сравнение кадров чувствительно к нагрузке на машину.
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 90_000,
  expect: { timeout: 10_000 },
  use: {
    baseURL,
    viewport: { width: 1440, height: 900 },
    locale: 'ru-RU',
    timezoneId: 'UTC',
    trace: 'retain-on-failure',
    checkEachStep: true,
  },
  webServer: externalUrl
    ? undefined
    : {
        command: `node scripts/screenshots/serve.js --root dist/storybook --port ${port}`,
        url: `${baseURL}/iframe.html`,
        cwd: root,
        reuseExistingServer: true,
        timeout: 30_000,
      },
  projects: [
    chromium('chromium'),
    // Проверка один раз в конце серии: ловит следы, которые копятся несколько шагов.
    chromium('chromium-accumulate', { checkEachStep: false }),
    chromium('chromium-dpr-1.25', { dpr: 1.25 }),
    chromium('chromium-dpr-2', { dpr: 2 }),
    chromium('chromium-dpr-0.8', { dpr: 0.8 }),
    ...otherBrowsers,
  ],
});
