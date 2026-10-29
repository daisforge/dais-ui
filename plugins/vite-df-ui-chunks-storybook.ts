import { Plugin } from 'vite';

import PackageJson from '../package.json' with { type: 'json' };
import { ALL_MANUAL_UIKIT_CHUNKS } from './vite-df-ui-chunks.ts';

const PACKAGES_FOR_VENDOR = ['react-dom']; // 'react-dom' - имеет сложности при переводе в чанки
const packages = Object.keys(PackageJson.dependencies).filter(
  (p) => !PACKAGES_FOR_VENDOR.some((el) => p === el), //
);

const filteredUIKitChunks = ALL_MANUAL_UIKIT_CHUNKS.filter(
  (m) => m.chunkName !== 'vendor',
);

const manualStorybookChunks = (id: string) => {
  const uiKitChunk = filteredUIKitChunks.find((el) =>
    el.modulePaths.some((path) => id.includes(path)),
  );
  if (uiKitChunk) {
    return uiKitChunk.chunkName;
  }

  // chunks from package.json.dependencies
  const packageName = packages.find((name) =>
    id.includes(`node_modules/${name}/`),
  );
  if (packageName) {
    return packageName;
  }

  // vendors
  if (id.includes('node_modules')) {
    return 'vendor';
  }

  return undefined;
};

export function viteDFUIStorybookChunks(): Plugin {
  return {
    name: 'vite-df-ui-chunks',
    config(_config) {
      return {
        build: {
          rolldownOptions: {
            output: {
              manualChunks: manualStorybookChunks,
            },
          },
        },
      };
    },
  };
}
