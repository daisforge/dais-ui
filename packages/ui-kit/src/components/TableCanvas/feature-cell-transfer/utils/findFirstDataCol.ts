import type { TransferColumnConfig } from '../types';

/**
 * Индекс первой не-служебной колонки.
 * Нужен чтобы отсекать service-колонки (чекбокс, row-marker) при построении
 * активного диапазона copy/paste. Если все колонки служебные, возвращает
 * `columns.length` (пустой диапазон).
 */
export function findFirstDataCol(
  columns: readonly TransferColumnConfig[]
): number {
  const idx = columns.findIndex((col) => !col.isServiceColumn);
  return idx === -1 ? columns.length : idx;
}
