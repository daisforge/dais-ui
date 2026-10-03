import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { viteDFUIStorybookChunks } from '../../plugins/vite-df-ui-chunks-storybook.ts';

export default defineConfig({
  plugins: [
    react(),
    // viteDFUIChunks(),
    viteDFUIStorybookChunks(),
  ],
  resolve: {
    // Вместо плагина vite-tsconfig-paths — Vite 8 сам читает paths из tsconfig
    tsconfigPaths: true,
    alias: {
      '@ui-kit': path.resolve(import.meta.dirname, '../ui-kit/src'),
      '@df-storybook': path.resolve(import.meta.dirname, 'src'),
    },
  },
});
