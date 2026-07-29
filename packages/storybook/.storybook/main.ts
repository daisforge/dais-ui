import type { StorybookConfig } from '@storybook/react-vite';

import { dirname, join, resolve } from 'path';
import https from 'https';
import { readFileSync, utimesSync } from 'fs';
import { normalizePath } from 'vite';
import { existsSync } from 'fs';
import { transformSync } from 'esbuild';

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

function isSyntaxValid(code: string, filePath: string): boolean {
  try {
    transformSync(code, {
      loader: filePath.endsWith('.tsx') ? 'tsx' : 'ts',
      target: 'es2020',
      format: 'esm',
      // Важно: только парсинг, без генерации кода
      minifySyntax: false,
      sourcemap: false,
    });
    return true;
  } catch (e) {
    // esbuild бросает ошибку с детальным сообщением о синтаксической проблеме
    console.debug(
      `🔍 Syntax error in ${filePath}:`,
      (e as Error).message.split('\n')[0],
    );
    return false;
  }
}

// Визуальные (скриншотные) тесты — `*.visual.stories.tsx`. Исключаем их ТОЛЬКО из
// прод-билда публичного стенда: `storybook:build` запускается с NODE_ENV=production.
// В остальных случаях стори НУЖНЫ и включаются:
//   - локальный dev-сервер (`storybook`);
//   - прогон скриншот-тестов (test-runner читает этот конфиг под jest — там
//     NODE_ENV=test, НЕ production), иначе он их не находит (0 matches).
const isProductionBuild = process.env.NODE_ENV === 'production';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    isProductionBuild
      ? '../src/**/!(*.visual).stories.@(js|jsx|mjs|ts|tsx)'
      : '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-links'),
  ],
  staticDirs: ['../static'],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  core: {
    disableTelemetry: true,
    crossOriginIsolated: false,
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import('vite');

    if (configType === 'DEVELOPMENT') {
      // 🔁 Хранилище состояния: нормализованный путь → был ли в ошибке
      const failedModules = new Set<string>();

      return mergeConfig(config, {
        server: {
          proxy: {
            '/ai-rag-api': {
              target:
                'https://lab-dev.ai-finance.dddddd.ru/epm/dais-v10000/api',
              changeOrigin: true,
              secure: false, // Игнорирует самоподписанный SSL бэка (если он локальный)

              rewrite: (path) => path.replace(/^\/ai-rag-api/, ''), // Отрезает /api из пути запроса:
              // Передаем клиентские сертификаты для авторизации на бэкенде
              agent: (() => {
                try {
                  return new https.Agent({
                    key: readFileSync(
                      resolve(__dirname, '../../../certs/key.pem'),
                    ),
                    cert: readFileSync(
                      resolve(__dirname, '../../../certs/cert.pem'),
                    ),
                    rejectUnauthorized: false, // Дублирует secure: false на уровне агента
                  });
                } catch (error) {
                  return new https.Agent();
                }
              })(),
            },
          },
        },
        plugins: [
          {
            name: 'storybook-recover-csf',
            enforce: 'post', // Работаем после других плагинов
            async handleHotUpdate(ctx) {
              const { file, server, modules, read } = ctx;

              // Работаем только со стори-файлами
              if (!file.match(/\.stories\.(tsx?|jsx?|mjs)$/)) {
                return modules;
              }

              const normalizedFile = normalizePath(file);

              // 1. Читаем актуальное содержимое
              let code = '';
              try {
                code = await read();
              } catch {
                // Файл недоступен — помечаем как ошибочный и выходим
                failedModules.add(normalizedFile);
                return modules;
              }

              // 2. Проверяем синтаксис
              const isNowValid = isSyntaxValid(code, file);
              const wasFailed = failedModules.has(normalizedFile);

              // 3. Логика восстановления: БЫЛ failed → СТАЛ valid
              if (wasFailed && isNowValid) {
                // Убираем из "ошибочных"
                failedModules.delete(normalizedFile);

                // Трогаем парный MDX, чтобы Storybook перезапустил индексер
                const mdxFile = file.replace(
                  /\.stories\.(tsx?|jsx?|mjs)$/,
                  '.mdx',
                );
                if (existsSync(mdxFile)) {
                  const now = new Date();
                  utimesSync(mdxFile, now, now);
                  console.log(
                    `♻️ [recover-csf] Recovered & touched: ${mdxFile}`,
                  );
                }
              }

              // 4. Если сейчас ошибка — запоминаем состояние
              if (!isNowValid) {
                failedModules.add(normalizedFile);
                console.error(
                  `❌ [recover-csf] Failed: ${file.split('/').pop()}`,
                );
              }

              if (!existsSync(file)) {
                failedModules.delete(normalizedFile);
              }

              // ✅ Не ломаем стандартный HMR
              return modules;
            },
          },
        ],
      } as typeof config);
    }
    if (configType === 'PRODUCTION') {
      // GitHub Pages для project-страниц отдаёт сайт не с корня домена,
      // а с поддиректории /<repo>/ — без base все ассеты (JS-чанки, MSW worker)
      // резолвятся по неверным абсолютным путям и 404-ятся.
      return mergeConfig(config, {
        base: process.env.STORYBOOK_BASE_PATH || '/',
      } as typeof config);
    }
    return mergeConfig(config, {
      // Your environment configuration here
    });
  },
};

export default config;
