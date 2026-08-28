export type SpanRange = readonly [number, number] | null;

/**
 * Левый верхний угол блока для ячейки (col, row). Объединение объявлено на этом
 * углу, поэтому колонку ищем сканом влево, строку берём по rowSpan найденной колонки.
 */
export const findBlockOrigin = (
  col: number,
  row: number,
  /** Диапазон колонок блока [начало, конец] или null. */
  getColRange: (c: number, r: number) => SpanRange,
  /** Диапазон строк блока [начало, конец] или null. */
  getRowRange: (c: number, r: number) => SpanRange,
): readonly [number, number] => {
  let originCol = col;
  for (let c = col; c >= 0; c -= 1) {
    const range = getColRange(c, row);
    if (range && range[0] <= col && range[1] >= col) {
      originCol = range[0];
      break;
    }
  }
  const rowRange = getRowRange(originCol, row);
  return [originCol, rowRange ? rowRange[0] : row];
};
