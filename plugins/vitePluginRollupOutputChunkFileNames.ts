/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
import { Plugin } from 'vite';

const PLUGIN_NAME = 'vite-rollup-output-chunk-file-names';

const CHUNK_FILE_NAMES_PATTERN = <T extends string>(extension: T) =>
  `chunks/[name]-[hash].${extension}` as const;

/**
 * Плагин для изменения названия файлов-chunk-ов при сборке библиотеки
 *
 * Проблема: При "type": "module" в package.json все .js файлы трактуются как ES модули
 * Это приводит к ошибке когда .cjs файлы пытаются делать require() для .js chunks
 *
 * Решение: Переименовываем chunks в соответствии с форматом:
 * - .mjs для ES модулей
 * - .cjs для CommonJS модулей
 */
export function vitePluginRollupOutputChunkFileNames(): Plugin {
  return {
    name: PLUGIN_NAME,
    // outputOptions срабатывает ДО генерации файлов (поэтому outputOptions вместо generateBundle)
    outputOptions(options) {
      const format = options.format;
      if (typeof options.chunkFileNames !== 'string' || !format) {
        return options;
      }
      // Определяем правильное расширение для chunks
      const chunkExt = format === 'es' ? 'mjs' : 'cjs';

      // ИТОГОВЫЙ chunkFileNames
      const finalChunkFileNames = CHUNK_FILE_NAMES_PATTERN(chunkExt);

      console.log(
        `Изменение chunkFileNames: ${options.chunkFileNames} → ${finalChunkFileNames}\n`
      );
      return {
        ...options,
        chunkFileNames: finalChunkFileNames,
      };
    },
  };
}
