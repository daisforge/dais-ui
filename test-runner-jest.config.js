const { getJestConfig } = require('@storybook/test-runner');
const defaultConfig = getJestConfig();

const isWindows = process.platform === 'win32';

const executablePath = isWindows
  ? 'C:\\Program Files\\SberBrowser\\Application\\sberbrowser.exe'
  : '/opt/Sberbrowser/sberbrowser/sberbrowser';

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
