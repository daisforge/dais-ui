import type { ObjectForExtending } from '../types';

interface SpanRegion {
  rowIds: Array<string | number>;
  colKeys: string[];
}

interface OriginEntry {
  colExtra: number;
  rowStart: number;
  rowEnd: number;
}

const isContiguous = (sorted: readonly number[]): boolean =>
  sorted.every((v, i) => i === 0 || v === (sorted[i - 1] as number) + 1);

/**
 * Controlled-объединения (`spanCells.spans`): структурные merge по стабильным
 * идентификаторам (id строк + ключи колонок). Резолвим их в ТЕКУЩИЙ ВИДИМЫЙ
 * порядок колонок и синтезируем colSpan/rowSpan на origin-колонке каждого региона.
 *
 * Порядок колонок читаем на RENDER-time из `renderColKeysRef` (финальный порядок
 * после reorder/pin/hide), а НЕ на build-time. Иначе `colExtra` (число-смещение
 * блока) считается по старым индексам, а `getSpan` применяет его на новых —
 * блок «уезжает» и covered-ячейки резолвятся в чужую колонку (превью/клик берут
 * не то значение). origin — ЛЕВЕЙШАЯ колонка региона в render-порядке; если после
 * перестановки колонки региона перестали быть СМЕЖНЫМИ, регион не рисуем (блок
 * распадается — как ограничения sort в Excel).
 *
 * Резолвер вешается на ВСЕ колонки региона (см. `regionCols`), т.к. origin
 * определяется на render-time: каждая колонка сама решает, она ли сейчас origin
 * (тогда возвращает span) или covered (тогда 0/null и резолвится к origin).
 *
 * Кэш по идентичности (rows, renderColKeys): пересчёт O(регионов) раз на рендер,
 * lookup O(1) на ячейку.
 */
export function createControlledSpans<R extends ObjectForExtending>(
  spans: readonly SpanRegion[],
  renderColKeysRef: { readonly current: readonly string[] },
  rowsRef: { readonly current: readonly R[] },
  rowKeyGetter: (row: R) => string | number,
) {
  // Union всех colKeys регионов — какие колонки вообще участвуют в объединениях.
  // Не зависит от порядка, поэтому считаем сразу.
  const regionCols = new Set<string>();
  spans.forEach((region) => region.colKeys.forEach((k) => regionCols.add(k)));

  let cachedRows: readonly R[] | null = null;
  let cachedKeys: readonly string[] | null = null;
  // Ключ карты — origin-колонка региона в ТЕКУЩЕМ render-порядке.
  let byOrigin = new Map<string, Map<number, OriginEntry>>();

  const ensure = (
    rows: readonly R[],
    renderColKeys: readonly string[],
  ): void => {
    if (rows === cachedRows && renderColKeys === cachedKeys) return;
    cachedRows = rows;
    cachedKeys = renderColKeys;
    byOrigin = new Map();

    const colIndexOf = new Map<string, number>();
    renderColKeys.forEach((key, index) => colIndexOf.set(key, index));

    const rowIndexOf = new Map<string | number, number>();
    rows.forEach((row, index) => rowIndexOf.set(rowKeyGetter(row), index));

    spans.forEach((region) => {
      const colInds = region.colKeys
        .map((k) => colIndexOf.get(k))
        .filter((x): x is number => x !== undefined)
        .sort((a, b) => a - b);
      const rowInds = region.rowIds
        .map((id) => rowIndexOf.get(id))
        .filter((x): x is number => x !== undefined)
        .sort((a, b) => a - b);
      // Регион невалиден (нет колонок/строк) или разорван реордером/сортировкой/
      // скрытием — не рисуем (блок распадается на отдельные ячейки).
      if (
        colInds.length === 0 ||
        rowInds.length === 0 ||
        !isContiguous(colInds) ||
        !isContiguous(rowInds)
      ) {
        return;
      }
      const originCol = colInds[0] as number;
      const colExtra = (colInds[colInds.length - 1] as number) - originCol;
      const rowStart = rowInds[0] as number;
      const rowEnd = rowInds[rowInds.length - 1] as number;
      const originKey = renderColKeys[originCol];
      if (originKey === undefined) return;

      let map = byOrigin.get(originKey);
      if (!map) {
        map = new Map();
        byOrigin.set(originKey, map);
      }
      for (let ri = rowStart; ri <= rowEnd; ri += 1) {
        map.set(ri, { colExtra, rowStart, rowEnd });
      }
    });
  };

  return {
    /** Колонки, участвующие в объединениях (на них вешаем резолвер). */
    regionCols,
    colSpan:
      (colKey: string) =>
      (cellInfo: { rowInd: number }): number => {
        ensure(rowsRef.current, renderColKeysRef.current);
        return byOrigin.get(colKey)?.get(cellInfo.rowInd)?.colExtra ?? 0;
      },
    rowSpan:
      (colKey: string) =>
      (cellInfo: { rowInd: number }): readonly [number, number] | null => {
        ensure(rowsRef.current, renderColKeysRef.current);
        const entry = byOrigin.get(colKey)?.get(cellInfo.rowInd);
        return entry ? [entry.rowStart, entry.rowEnd] : null;
      },
  };
}
