import type { RowHeightCallback } from '@glideappsfinal/glide-data-grid';
import { useLayoutEffect, useRef } from 'react';

/** Сколько строк сверять между соседними версиями */
const SAMPLE_SIZE = 64;

/**
 * Только в dev-сборке проверяет подсказку `changes`: у случайных строк вне `from..to` высота должна
 * совпасть с прежней версией. Неверная подсказка в glide даёт щели и наложения строк, а не ошибку.
 */
export function useRowHeightChangesCheck(
  heightOf: RowHeightCallback,
  rowCount: number,
) {
  const sampleRef = useRef<{ version?: number; heights: Map<number, number> }>();

  useLayoutEffect(() => {
    // Vite подставляет DEV при сборке: в рабочей сборке библиотеки проверки нет
    if (!import.meta.env.DEV || rowCount === 0) return;

    const prev = sampleRef.current;
    const { changes } = heightOf;
    if (prev && changes && changes.previousVersion === prev.version) {
      prev.heights.forEach((height, row) => {
        if (row >= changes.from && row <= changes.to) return;
        if (heightOf(row) !== height) {
          // eslint-disable-next-line no-console
          console.error(
            `TableGlide: высота строки ${row} изменилась вне подсказки changes ${changes.from}..${changes.to}`,
          );
        }
      });
    }

    const heights = new Map<number, number>();
    for (let i = 0; i < SAMPLE_SIZE; i += 1) {
      const row = Math.floor(Math.random() * rowCount);
      heights.set(row, heightOf(row));
    }
    sampleRef.current = { version: heightOf.version, heights };
  }, [heightOf, rowCount]);
}
