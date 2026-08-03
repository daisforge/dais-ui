import type { GridSelection } from '@glideappsfinal/glide-data-grid';

import type { Rectangle } from '../types';

/**
 * Прямоугольник активного выделения в data-области.
 *
 * Берёт `selection.current.range` и клампит левую границу к первой не-служебной
 * колонке, чтобы service-колонки (чекбокс, row-marker) не попадали в copy/paste.
 * Возвращает `undefined` если выделения нет или после клампа диапазон пустой.
 */
export function buildActiveDataRange(
  selection: GridSelection,
  firstDataColumnIndex: number,
): Rectangle | undefined {
  const { current } = selection;
  if (!current) return undefined;

  const clampedX = Math.max(current.range.x, firstDataColumnIndex);
  const rangeRight = current.range.x + current.range.width;
  const clampedWidth = Math.max(0, rangeRight - clampedX);

  if (clampedWidth === 0 || current.range.height === 0) return undefined;

  return {
    x: clampedX,
    y: current.range.y,
    width: clampedWidth,
    height: current.range.height,
  };
}
