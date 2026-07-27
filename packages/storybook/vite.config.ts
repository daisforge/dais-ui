import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import { viteDFUIStorybookChunks } from '../../plugins/vite-df-ui-chunks-storybook';
import { viteDFUISuppressWarnings } from '../../plugins/vite-df-ui-suppress-warnings';

//? using viteTsConfigPaths instead
// import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  plugins: [
    react(),
    viteTsConfigPaths(),
    // viteDFUIChunks(),
    viteDFUIStorybookChunks(),
    // TODO update nx + vite + storybook and see - if this warning is gone then we can remove this plugin
    viteDFUISuppressWarnings({ warnFilter: ['/*#__PURE__*/'] }),
  ],
  resolve: {
    alias: {
      '@ui-kit': path.resolve(__dirname, '../ui-kit/src'),
      '@df-storybook': path.resolve(__dirname, 'src'),
    },
  },
});
