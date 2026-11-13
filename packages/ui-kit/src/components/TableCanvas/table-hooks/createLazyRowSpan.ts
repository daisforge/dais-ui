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

/**
 * Проверяет ответ lazyRowSpan и поправляет его, если он нарушает правила блока.
 *
 * Блок это хотя бы две строки внутри таблицы, и строка, про которую спросили,
 * должна в него входить.
 * - Блок из одной строки, как и у mergeByCellValues, блоком не считается:
 *   иначе одиночная ячейка шла бы по пути объединённой (выравнивание блока,
 *   уголок редактора).
 * - Ответ без своей строки считается ошибкой резолвера и отбрасывается: по нему
 *   ячейка переадресовывалась бы на чужую строку, а при цикле ответов отрисовка
 *   уходила бы в бесконечную рекурсию.
 * - Границы за краем таблицы обрезаются.
 */
const normalizeSpan = (
  span: Block | null,
  rowInd: number,
  rowsCount: number,
): Block | null => {
  if (!span) return null;
  const from = Math.max(span[0], 0);
  const to = Math.min(span[1], rowsCount - 1);
  if (to <= from || rowInd < from || rowInd > to) return null;
  return from === span[0] && to === span[1] ? span : [from, to];
};

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

    const span = normalizeSpan(
      lazyRowSpan(row, colKey, rowInd, { rows }),
      rowInd,
      rows.length,
    );
    cache.set(rowInd, span);
    return span;
  };
}
