/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { relative, extname, join, resolve } from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import pkgJSON from './package.json';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

import { glob } from 'glob';
import { viteDFUIChunks } from '../../plugins/vite-df-ui-chunks';
import { vitePluginRollupOutputChunkFileNames } from '../../plugins/vitePluginRollupOutputChunkFileNames';
import { viteDFUISuppressWarnings } from '../../plugins/vite-df-ui-suppress-warnings';
import path from 'path';

export default defineConfig(() => {
  const NODE_ENV_LOCAL = process.env?.['NODE_ENV'] ?? 'development';

  return {
    mode: NODE_ENV_LOCAL,
    root: __dirname,
    cacheDir: '../../node_modules/.vite/packages/ui-kit',

    plugins: [
      react({
        babel: {
          plugins: [
            [
              'babel-plugin-styled-components',
              { displayName: true, ssr: false },
            ],
          ],
        },
      }),
      nxViteTsPaths(),
      dts({
        entryRoot: 'src',
        tsconfigPath: join(__dirname, 'tsconfig.lib.json'),
      }),
      libInjectCss(),
      viteDFUIChunks(),
      vitePluginRollupOutputChunkFileNames(),
      // TODO update nx + vite + storybook and see - if this warning is gone then we can remove this plugin
      viteDFUISuppressWarnings({ warnFilter: ['/*#__PURE__*/'] }),
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    // Configuration for building library.
    // See: https://vitejs.dev/guide/build.html#library-mode
    build: {
      outDir: '../../dist/packages/ui-kit',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      lib: {
        // https://vitejs.dev/config/build-options.html#build-lib
        entry: (() => {
          const srcDir = resolve(__dirname, 'src');

          // Используем относительный паттерн с cwd - работает на всех ОС
          const files = glob.sync('src/**/index.ts', {
            cwd: __dirname,
            absolute: true,
          });

          if (files.length === 0) {
            console.warn('No entry files found!');
            return { index: resolve(__dirname, 'src/index.ts') };
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

      rollupOptions: {
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
      alias: {
        '@ui-kit': path.resolve(__dirname, '../ui-kit/src'),
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
