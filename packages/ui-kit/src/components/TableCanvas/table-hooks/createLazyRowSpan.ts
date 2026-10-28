import { countWhile } from '@ui-kit/shared/utils/search';

import type { ObjectForExtending } from '../types';

type LazyRowSpan<R extends ObjectForExtending> = (
  row: R,
  colKey: string,
  rowInd: number,
  ctx: { rows: readonly R[] },
) => readonly [number, number] | null;

type Block = readonly [number, number];

/** Сколько блоков начинается на строке `rowInd` или раньше; `blocks` отсортированы по началу */
const countBlocksUpTo = (blocks: readonly Block[], rowInd: number) =>
  countWhile(blocks.length, (i) => (blocks[i]?.[0] ?? Infinity) <= rowInd);

// rowSpan колонки из mergeCells.lazyRowSpan. Строки не из отображаемых (скелетоны) не сливаются.
// Glide спрашивает rowSpan на каждую отрисовку видимой ячейки, поэтому ответы кешируются до смены
// массива строк. Найденный блок хранится одним диапазоном на все свои строки.
export function createLazyRowSpan<R extends ObjectForExtending>(
  lazyRowSpan: LazyRowSpan<R>,
  colKey: string,
  rowsRef: { readonly current: readonly R[] },
): (cellInfo: { rowInd: number; row: R }) => Block | null {
  let cachedRows = rowsRef.current;
  let blocks: Block[] = [];
  /** Ответы для строк вне блоков */
  let outside = new Map<number, Block | null>();

  return ({ rowInd, row }) => {
    const rows = rowsRef.current;
    if (rows[rowInd] !== row) return null;
    if (rows !== cachedRows) {
      cachedRows = rows;
      blocks = [];
      outside = new Map();
    }

    const block = blocks[countBlocksUpTo(blocks, rowInd) - 1];
    if (block && rowInd <= block[1]) return block;
    const known = outside.get(rowInd);
    if (known !== undefined) return known;

    const span = lazyRowSpan(row, colKey, rowInd, { rows });
    if (span && span[0] <= rowInd && rowInd <= span[1]) {
      blocks.splice(countBlocksUpTo(blocks, span[0]), 0, span);
    } else {
      outside.set(rowInd, span);
    }
    return span;
  };
}
