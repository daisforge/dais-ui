import type { ObjectForExtending } from '../types';

type LazyRowSpan<R extends ObjectForExtending> = (
  row: R,
  colKey: string,
  rowInd: number,
  ctx: { rows: readonly R[] },
) => readonly [number, number] | null;

// rowSpan колонки из mergeCells.lazyRowSpan. Скелетоны TableCanvas (загрузка,
// бесконечная прокрутка) не входят в отображаемые строки — не сливаются.
export function createLazyRowSpan<R extends ObjectForExtending>(
  lazyRowSpan: LazyRowSpan<R>,
  colKey: string,
  rowsRef: { readonly current: readonly R[] },
): (cellInfo: { rowInd: number; row: R }) => readonly [number, number] | null {
  return ({ rowInd, row }) => {
    const rows = rowsRef.current;
    if (rows[rowInd] !== row) return null;
    return lazyRowSpan(row, colKey, rowInd, { rows });
  };
}
