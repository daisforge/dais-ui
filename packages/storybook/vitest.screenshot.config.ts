// Скриншотные тесты историй: @storybook/addon-vitest + Vitest browser mode (Playwright).
// Файл назван не vitest.config.ts намеренно: иначе @nx/vitest выведет для storybook
// target test, и `npm run test` начнёт запускать браузерные скриншотные тесты.
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';

import { screenshotCommands } from './.storybook/screenshot/commands.ts';
import viteConfig from './vite.config.ts';

const isWindows = process.platform === 'win32';

// Эталоны сняты в SberBrowser. SCREENSHOT_BROWSER_PATH — для машин, где он стоит
// в другом месте (скриншоты из другого браузера с эталонами не совпадут).
const executablePath =
  process.env.SCREENSHOT_BROWSER_PATH ??
  (isWindows
    ? 'C:\\Program Files\\SberBrowser\\Application\\sberbrowser.exe'
    : '/opt/Sberbrowser/sberbrowser/sberbrowser');

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        configDir: path.join(import.meta.dirname, '.storybook'),
        storybookUrl: 'http://localhost:4400',
      }),
    ],
    test: {
      name: 'storybook-screenshots',
      // API-истории (таблицы пропсов) не скриншотятся
      exclude: ['**/node_modules/**', '**/API/**'],
      setupFiles: ['./.storybook/vitest.setup.ts'],
      testTimeout: 120_000,
      maxWorkers: 6,
      browser: {
        enabled: true,
        headless: true,
        provider: playwright({
          launchOptions: {
            executablePath,
            args: [
              '--force-device-scale-factor=1', // фиксирует DPI=100%, убирает различия между мониторами
              '--disable-gpu', // отключает GPU-рендеринг, стабильнее на слабых машинах
              '--disable-font-subpixel-positioning', // убирает субпиксельный сдвиг текста
            ],
          },
          // Права на буфер обмена нужны интеракционным тестам copy/paste
          // (наш Ctrl+C/Ctrl+V читает/пишет navigator.clipboard)
          contextOptions: {
            permissions: ['clipboard-read', 'clipboard-write'],
            // Страница-оркестратор не меньше вьюпорта, иначе Vitest вписывает в неё
            // iframe с тестом с масштабом < 1 и скриншоты уменьшаются
            viewport: { width: 1440, height: 900 },
          },
        }),
        instances: [
          { browser: 'chromium', viewport: { width: 1440, height: 900 } },
        ],
        commands: screenshotCommands,
      },
    },
  }),
);
