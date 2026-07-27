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
            },
          },
        },
      };
    },
  };
}
