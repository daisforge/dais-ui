export type SpanRange = readonly [number, number] | null;

/**
 * Origin (левая верхняя ячейка) блока объединения для (col, row). colSpan
 * объявляется на origin-колонке, поэтому покрытые колонки ищем сканированием
 * влево до колонки, чей диапазон накрывает col; вертикаль берём по rowSpan
 * найденной origin-колонки. Единая геометрия для рендера и cell-transfer.
 */
export const findBlockOrigin = (
  col: number,
  row: number,
  /** Абсолютный диапазон колонок [start, end] блока колонки c, или null. */
  getColRange: (c: number, r: number) => SpanRange,
  /** Абсолютный диапазон строк [start, end] блока на колонке c, или null. */
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
