import type { CellInfo, ObjectForExtending, RowSpan } from '../types';

// Вертикальное объединение: диапазон строк блока [начало, конец] или null.
// Все ячейки блока должны вернуть один и тот же диапазон.
export const getRowSpan = <R extends ObjectForExtending, SR = unknown>(
  rowSpan: RowSpan<R, SR> | null | undefined,
  cellInfo: CellInfo<R, SR>
): readonly [number, number] | null => {
  if (rowSpan === undefined || rowSpan === null) return null;

  return rowSpan(cellInfo);
};
