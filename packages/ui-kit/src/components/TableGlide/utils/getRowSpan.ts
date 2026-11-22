import type { CellInfo, ObjectForExtending, RowSpan } from '../types';

// Объединение строк: диапазон строк блока [начало, конец] или null.
// Все ячейки блока должны вернуть один и тот же диапазон.
export const getRowSpan = <R extends ObjectForExtending, SR = unknown>(
  rowSpan: RowSpan<R, SR> | null | undefined,
  cellInfo: CellInfo<R, SR>
): readonly [number, number] | null => {
  if (rowSpan === undefined || rowSpan === null) return null;

  return rowSpan(cellInfo);
};

/** Ячейка — часть блока, объединённого на несколько строк */
export const spansSeveralRows = (
  spanRows: readonly [number, number] | null | undefined
): boolean => !!spanRows && spanRows[1] > spanRows[0];
