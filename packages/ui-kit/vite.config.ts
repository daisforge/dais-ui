/// <reference types='vitest' />
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { relative, extname, join, resolve } from 'path';
import pkgJSON from './package.json' with { type: 'json' };
import { libInjectCss } from 'vite-plugin-lib-inject-css';

import { glob } from 'glob';
import { viteDFUIChunks } from '../../plugins/vite-df-ui-chunks.ts';
import { viteDFUIExternalStarReexports } from '../../plugins/vite-df-ui-external-star-reexports.ts';
import { vitePluginRollupOutputChunkFileNames } from '../../plugins/vitePluginRollupOutputChunkFileNames.ts';
import path from 'path';

export default defineConfig(() => {
  const NODE_ENV_LOCAL = process.env?.['NODE_ENV'] ?? 'development';

  return {
    mode: NODE_ENV_LOCAL,
    root: import.meta.dirname,
    cacheDir: '../../node_modules/.vite/packages/ui-kit',

    plugins: [
      viteDFUIExternalStarReexports({
        [resolve(import.meta.dirname, 'src/icons/index.ts')]:
          '@salutejs/plasma-icons',
      }),
      react(),
      // @vitejs/plugin-react 6 больше не принимает опцию babel — babel-плагины подключаются отдельно
      babel({
        plugins: [
          ['babel-plugin-styled-components', { displayName: true, ssr: false }],
        ],
      }),
      dts({
        entryRoot: 'src',
        tsconfigPath: join(import.meta.dirname, 'tsconfig.lib.json'),
      }),
      libInjectCss(),
      viteDFUIChunks(),
      vitePluginRollupOutputChunkFileNames(),
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    // Configuration for building library.
    // See: https://vitejs.dev/guide/build.html#library-mode
    build: {
      // Дефолтный target Vite 5 (в Vite 8 дефолт новее — baseline-widely-available).
      // Фиксируем, чтобы уровень синтаксиса в dist не менялся для потребителей
      target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
      outDir: '../../dist/packages/ui-kit',
      emptyOutDir: true,
      reportCompressedSize: true,
      lib: {
        // https://vitejs.dev/config/build-options.html#build-lib
        entry: (() => {
          const srcDir = resolve(import.meta.dirname, 'src');

          // Используем относительный паттерн с cwd - работает на всех ОС
          const files = glob.sync('src/**/index.ts', {
            cwd: import.meta.dirname,
            absolute: true,
          });

          if (files.length === 0) {
            console.warn('No entry files found!');
            return { index: resolve(import.meta.dirname, 'src/index.ts') };
          }

          return Object.fromEntries(
            files.map((file) => {
              const normalizedFile = normalizePath(file);
              return [
                // 1. The name of the entry point
                // src/components/Button/index.ts becomes components/Button/index
                normalizePath(
                  relative(
                    srcDir,
                    normalizedFile.slice(
                      0,
                      normalizedFile.length - extname(normalizedFile).length,
                    ),
                  ),
                ),
                // 2. The absolute path to the entry file
                // src/components/Button/index.ts becomes YOUR_PATH/digital_finance_ui/packages/ui-kit/src/components/Button/index.ts
                normalizedFile,
              ];
            }),
          );
        })(),
        name: '@daisforge/ui',
        fileName: (format, entryName) =>
          `${entryName}.${format === 'es' ? 'mjs' : 'cjs'}`,
        // Change this to the formats you want to support.
        // Don't forget to update your package.json as well.
        formats: ['es', 'cjs'],
      },

      rolldownOptions: {
        output: {
          /** chunkFileNames: настроен в плагине --> {@link vitePluginRollupOutputChunkFileNames } */
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
        // External packages that should not be bundled into library.
        external: (() => {
          const pkgJSONDeps = [
            ...Object.keys(pkgJSON.peerDependencies),
            ...Object.keys(pkgJSON.dependencies),
          ];
          const cssInSomeLibs = [
            'react-data-grid/lib/styles.css',
            'react-grid-layout/css/styles.css',
            '@glideappsfinal/glide-data-grid/dist/index.css',
          ];
          const somePkgsWithDeps = [
            'react/jsx-runtime',
            /react-dom/, // данный пакет есть в pkgJSONDeps, но не удаляется на 100%. Поэтому regexp-ом
            '@salutejs/sdds-finai/tokens',
            '@salutejs/sdds-finai/mixins',
            'swr/mutation',
            /@salutejs\/plasma-core/,
            /@salutejs\/sdds-finai/,
            /@salutejs\/sdds-themes/,
            /@salutejs\/plasma-new-hope/,
          ];

          return [...pkgJSONDeps, ...somePkgsWithDeps, ...cssInSomeLibs];
        })(),
      },
    },
    resolve: {
      // Замена устаревшего nxViteTsPaths — Vite 8 сам читает paths из tsconfig
      tsconfigPaths: true,
      alias: {
        '@ui-kit': path.resolve(import.meta.dirname, '../ui-kit/src'),
      },
    },

    test: {
      globals: true,
      cache: {
        dir: '../../node_modules/.vitest',
      },
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

      reporters: ['default'],
      coverage: {
        reportsDirectory: '../../coverage/packages/ui-kit',
        provider: 'v8',
      },
    },
  };
});

// Нормализация путей для Windows (backslash -> forward slash)
function normalizePath(p: string) {
  return p.replace(/\\/g, '/');
}
