const fs = require('fs');
const path = require('node:path');
const { getJestConfig } = require('@storybook/test-runner');
const defaultConfig = getJestConfig();
// Эталоны сравниваем только в зафиксированном Linux-образе с Chromium.
if (!fs.existsSync('/opt/screenshot-environment.json'))
  throw new Error(
    'Запускайте скриншотные тесты в Docker: npm run screenshot:test.',
  );
module.exports = {
  ...defaultConfig,
  testEnvironment: path.resolve(
    __dirname,
    'packages/storybook/test/screenshots/environment.cjs',
  ),
  testTimeout: 120000,
  maxWorkers: 1,
  // Передаём Math в среду Jest напрямую, чтобы ускорить сравнение больших Canvas-скриншотов.
  sandboxInjectedGlobals: ['Math'],
  testPathIgnorePatterns: [
    ...(defaultConfig.testPathIgnorePatterns || []),
    '/API/',
    '\\.mdx$',
  ],
  transform: {
    ...defaultConfig.transform,
    '^.+\\.[jt]sx?$': ['@swc/jest', { jsc: { target: 'es2022' } }],
  },
  testEnvironmentOptions: {
    ...defaultConfig.testEnvironmentOptions,
    'jest-playwright': {
      ...defaultConfig.testEnvironmentOptions?.['jest-playwright'],
      launchOptions: {
        headless: true,
        args: require('./scripts/screenshots/chromium-args.json'),
      },
      contextOptions: {
        viewport: { width: 1440, height: 900 },
        deviceScaleFactor: 1,
        locale: 'ru-RU',
        timezoneId: 'UTC',
        reducedMotion: 'no-preference',
        colorScheme: 'light',
      },
    },
  },
};
