import { countWhile } from '@ui-kit/shared/utils/search';

import type { ObjectForExtending } from '../types';

type LazyRowSpan<R extends ObjectForExtending> = (
  row: R,
  colKey: string,
  rowInd: number,
  ctx: { rows: readonly R[] },
) => readonly [number, number] | null;

type Block = readonly [number, number];

/** Ответы резолвера для одного массива строк. Найденный блок хранится одним диапазоном на все свои строки */
class SpanCache {
  /** Блоки по возрастанию первой строки */
  private readonly blocks: Block[] = [];

  /** Ответы для строк вне блоков */
  private readonly outside = new Map<number, Block | null>();

  /** undefined — строку ещё не спрашивали */
  get(rowInd: number): Block | null | undefined {
    const block = this.blocks[this.countBlocksUpTo(rowInd) - 1];
    return block && rowInd <= block[1] ? block : this.outside.get(rowInd);
  }

  set(rowInd: number, span: Block | null): void {
    if (span && span[0] <= rowInd && rowInd <= span[1]) {
      this.blocks.splice(this.countBlocksUpTo(span[0]), 0, span);
    } else {
      this.outside.set(rowInd, span);
    }
  }

  /** Сколько блоков начинается на строке `rowInd` или раньше */
  private countBlocksUpTo(rowInd: number): number {
    return countWhile(
      this.blocks.length,
      (i) => (this.blocks[i]?.[0] ?? Infinity) <= rowInd,
    );
  }
}

// rowSpan колонки из mergeCells.lazyRowSpan. Строки не из отображаемых (скелетоны) не сливаются.
// Glide спрашивает rowSpan на каждую отрисовку видимой ячейки, поэтому ответы кешируются
// для каждого массива отображаемых строк.
export function createLazyRowSpan<R extends ObjectForExtending>(
  lazyRowSpan: LazyRowSpan<R>,
  colKey: string,
  rowsRef: { readonly current: readonly R[] },
): (cellInfo: { rowInd: number; row: R }) => Block | null {
  const caches = new WeakMap<readonly R[], SpanCache>();
  const cacheFor = (rows: readonly R[]) => {
    const cache = caches.get(rows) ?? new SpanCache();
    caches.set(rows, cache);
    return cache;
  };

  return ({ rowInd, row }) => {
    const rows = rowsRef.current;
    if (rows[rowInd] !== row) return null;

    const cache = cacheFor(rows);
    const cached = cache.get(rowInd);
    if (cached !== undefined) return cached;

    const span = lazyRowSpan(row, colKey, rowInd, { rows });
    cache.set(rowInd, span);
    return span;
  };
}
