const fs = require('fs');
const { getJestConfig } = require('@storybook/test-runner');
const defaultConfig = getJestConfig();

const isWindows = process.platform === 'win32';

// Браузер для скриншотов, по приоритету:
//  1) путь из переменной окружения SCREENSHOT_BROWSER_PATH;
//  2) SberBrowser, если он установлен;
//  3) chromium, который ставит Playwright.
// Эталоны сравниваются только с тем же браузером, которым сняты: шрифты
// разные браузеры рисуют чуть по-разному.
const sberBrowserPath = isWindows
  ? 'C:\\Program Files\\SberBrowser\\Application\\sberbrowser.exe'
  : '/opt/Sberbrowser/sberbrowser/sberbrowser';

const executablePath =
  process.env.SCREENSHOT_BROWSER_PATH ||
  (fs.existsSync(sberBrowserPath) ? sberBrowserPath : undefined);

module.exports = {
  ...defaultConfig,
  globals: {
    UPDATE_SNAPSHOTS: process.argv.includes('-u') ? 'true' : 'false',
  },
  testTimeout: 120000,
  maxWorkers: 6,
  testPathIgnorePatterns: [
    ...(defaultConfig.testPathIgnorePatterns || []),
    '/API/',
    '\\.mdx$',
  ],
  // Без этого раннер падает при запуске: @swc/jest на Node 18+ просит
  // версию JS es2023, а установленный @swc/core 1.3.x её не знает.
  transform: {
    ...defaultConfig.transform,
    '^.+\\.[jt]sx?$': ['@swc/jest', { jsc: { target: 'es2022' } }],
  },
  testEnvironmentOptions: {
    ...defaultConfig.testEnvironmentOptions,
    'jest-playwright': {
      ...defaultConfig.testEnvironmentOptions?.['jest-playwright'],
      launchOptions: {
        executablePath,
        // headless: false,
        args: [
          '--force-device-scale-factor=1', // фиксирует DPI=100%, убирает различия между мониторами
          '--disable-gpu', // отключает GPU-рендеринг, стабильнее на слабых машинах
          '--disable-font-subpixel-positioning', // убирает субпиксельный сдвиг текста
        ],
      },
      contextOptions: {
        viewport: {
          width: 1440,
          height: 900,
        },
      },
    },
  },
};
