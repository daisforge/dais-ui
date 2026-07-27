import type { Rectangle } from '@glideappsfinal/glide-data-grid';

/**
 * Геометрические примитивы над прямоугольником выделения (`Rectangle`).
 *
 * Единый источник для расчётов, которые раньше дублировались в нескольких
 * хуках/утилитах (предикат попадания ячейки, клампинг к data-области, поиск
 * первой data-колонки). Функции чистые — без React и без доменных типов колонок
 * (кроме признака `isServiceColumn`), поэтому переиспользуются на всех уровнях.
 */

/**
 * Попадает ли ячейка (`columnIndex`, `rowIndex`) внутрь прямоугольника.
 * Полуинтервал: `[x, x + width)` × `[y, y + height)`.
 * `undefined`-прямоугольник трактуется как «не содержит».
 */
export const rectContainsCell = (
  rect: Rectangle | undefined,
  columnIndex: number,
  rowIndex: number
): boolean => {
  if (!rect) {
    return false;
  }

  return (
    columnIndex >= rect.x &&
    columnIndex < rect.x + rect.width &&
    rowIndex >= rect.y &&
    rowIndex < rect.y + rect.height
  );
};

/**
 * Индекс первой НЕсервисной (data-) колонки. Если все колонки служебные —
 * возвращает длину массива (data-колонок нет). Предполагается, что ведущие
 * служебные колонки идут подряд слева.
 */
export const findFirstDataColumnIndex = (
  columns: readonly { isServiceColumn?: boolean }[]
): number => {
  const firstDataIndex = columns.findIndex((column) => !column.isServiceColumn);

  return firstDataIndex === -1 ? columns.length : firstDataIndex;
};

/**
 * Клампит прямоугольник к data-области, отсекая ведущие служебные колонки:
 * сдвигает левую границу до `firstDataColumnIndex` и пересчитывает ширину.
 * Возвращает `undefined`, если после отсечения ширина или высота не
 * положительны (пустой data-диапазон).
 */
export const clampRectToDataColumns = (
  rect: Rectangle | undefined,
  firstDataColumnIndex: number
): Rectangle | undefined => {
  if (!rect) {
    return undefined;
  }

  const clampedX = Math.max(rect.x, firstDataColumnIndex);
  const clampedWidth = Math.max(0, rect.x + rect.width - clampedX);

  if (clampedWidth <= 0 || rect.height <= 0) {
    return undefined;
  }

  return {
    x: clampedX,
    y: rect.y,
    width: clampedWidth,
    height: rect.height,
  };
};
