const fs = require('fs');
const { getJestConfig } = require('@storybook/test-runner');
const defaultConfig = getJestConfig();

const isWindows = process.platform === 'win32';

// Браузер скриншотов, по приоритету:
//  1) SCREENSHOT_BROWSER_PATH — явное переопределение;
//  2) SberBrowser, если установлен (внутренний контур);
//  3) штатный chromium Playwright (внешний контур — работает из коробки).
// Эталоны валидны только в паре со «своим» браузером: снятые chromium
// не сойдутся с прогоном на SberBrowser и наоборот (рендеринг шрифтов).
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
  // @swc/jest без явного target выбирает его по версии Node (Node 22 → es2023),
  // а установленный @swc/core 1.3.x es2023 ещё не знает — фиксируем es2022.
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
