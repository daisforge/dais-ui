import type { CellInfo, ObjectForExtending, RowSpan } from '../types';

// Вертикальное объединение ячеек тела. В отличие от colSpan (число «доп. колонок»),
// rowSpan возвращает ЯВНЫЙ диапазон строк блока [startRow, endRow]. Потребитель обязан
// вернуть один и тот же диапазон для ВСЕХ ячеек блока — тогда покрытые ячейки несут
// одинаковый spanRows, чего требуют рисование/хит-тест/копирование в форке glide.
export const getRowSpan = <R extends ObjectForExtending, SR = unknown>(
  rowSpan: RowSpan<R, SR> | null | undefined,
  cellInfo: CellInfo<R, SR>
): readonly [number, number] | null => {
  if (rowSpan === undefined || rowSpan === null) return null;

  return rowSpan(cellInfo);
};
