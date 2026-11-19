/* eslint-disable no-restricted-syntax */
import { Plugin } from 'vite';

import PackageJson from '../package.json';
import { ALL_MANUAL_UIKIT_CHUNKS } from './vite-df-ui-chunks';

const PACKAGES_FOR_VENDOR = ['react-dom']; // 'react-dom' - имеет сложности при переводе в чанки
const packages = Object.keys(PackageJson.dependencies).filter(
  (p) => !PACKAGES_FOR_VENDOR.some((el) => p === el) //
);

const filteredUIKitChunks = ALL_MANUAL_UIKIT_CHUNKS.filter(
  (m) => m.chunkName !== 'vendor'
);

const manualStorybookChunks = (id: string) => {
  // Stories загружают @storybook/test динамически. Если он попадает в vendor,
  // статический импорт vendor из iframe выполняет instrument() до setChannel.
  // Instrumenter сохраняет временный mock-канал, и Interactions не видит шаги play.
  if (
    id.includes('node_modules/@storybook/') ||
    id.includes('node_modules/storybook/')
  ) {
    return undefined;
  }

  let currentManualChunkName;

  for (const el of filteredUIKitChunks) {
    if (el.modulePaths.some((path) => id.includes(path))) {
      currentManualChunkName = el.chunkName;
      // eslint-disable-next-line no-console
      console.log('========:filteredUIKitChunk', currentManualChunkName);

      return currentManualChunkName;
    }
  }

  // chunks from package.json.dependencies
  for (const packageName of packages) {
    if (id.includes(`node_modules/${packageName}/`)) {
      currentManualChunkName = packageName;
      // eslint-disable-next-line no-console
      console.log('========:packageNameChunk', currentManualChunkName);

      return currentManualChunkName;
    }
  }

  // vendors
  if (id.includes('node_modules')) {
    currentManualChunkName = 'vendor';
    // eslint-disable-next-line no-console
    console.log('========:vendors children', id);

    return currentManualChunkName;
  }

  return undefined;
};

export function viteDFUIStorybookChunks(): Plugin {
  return {
    name: 'vite-df-ui-chunks',
    config(_config) {
      return {
        build: {
          rollupOptions: {
            output: {
              manualChunks: manualStorybookChunks,
              // Не втягиваем общие зависимости в ручные чанки. В частности,
              // preload-helper остаётся вне vendor, поэтому iframe не тянет весь vendor сразу.
              // TODO(Vite 8 / Rolldown): перенести правила в output.codeSplitting,
              // исключить пакеты Storybook из групп и задать includeDependenciesRecursively: false.
              // На превью проверить Interactions и статические импорты iframe.
              onlyExplicitManualChunks: true,
            },
          },
        },
      };
    },
  };
}
