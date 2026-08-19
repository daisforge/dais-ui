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
 * идентификаторам (id строк + ключи колонок). Резолвим их в текущие видимые
 * индексы и синтезируем colSpan/rowSpan на ORIGIN-колонке каждого региона (левой
 * видимой); покрытые ячейки дальше резолвятся к origin существующим пайплайном.
 *
 * Origin-КОЛОНКИ известны сразу (из ключей + порядка колонок), поэтому `originCols`
 * вычисляем в конструкторе. Строки резолвим ЛЕНИВО (rowsRef читаем в момент
 * вызова), с кэшем по идентичности массива: O(n) на смену данных, lookup O(1).
 * Если после сортировки/скрытия колонки/строки региона перестали быть СМЕЖНЫМИ —
 * регион не рисуем (как ограничения sort в Excel).
 */
export function createControlledSpans<R extends ObjectForExtending>(
  spans: readonly SpanRegion[],
  colKeysInOrder: readonly string[],
  rowsRef: { readonly current: readonly R[] },
  rowKeyGetter: (row: R) => string | number,
) {
  const colIndexOf = new Map<string, number>();
  colKeysInOrder.forEach((key, index) => colIndexOf.set(key, index));

  // Origin-колонки (левая видимая колонка каждого региона) — не зависят от строк.
  const originCols = new Set<string>();
  spans.forEach((region) => {
    const colInds = region.colKeys
      .map((k) => colIndexOf.get(k))
      .filter((x): x is number => x !== undefined);
    if (colInds.length === 0) return;
    const originKey = colKeysInOrder[Math.min(...colInds)];
    if (originKey !== undefined) originCols.add(originKey);
  });

  let cachedRows: readonly R[] | null = null;
  let byCol = new Map<string, Map<number, OriginEntry>>();

  const ensure = (rows: readonly R[]): void => {
    if (rows === cachedRows) return;
    cachedRows = rows;
    byCol = new Map();

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
      // Регион невалиден (нет колонок/строк) или разорван сортировкой/скрытием.
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
      const originKey = colKeysInOrder[originCol];
      if (originKey === undefined) return;

      let map = byCol.get(originKey);
      if (!map) {
        map = new Map();
        byCol.set(originKey, map);
      }
      for (let ri = rowStart; ri <= rowEnd; ri += 1) {
        map.set(ri, { colExtra, rowStart, rowEnd });
      }
    });
  };

  return {
    /** Является ли колонка origin хотя бы одного региона (для решения override). */
    originCols,
    colSpan:
      (colKey: string) =>
      (cellInfo: { rowInd: number }): number => {
        ensure(rowsRef.current);
        return byCol.get(colKey)?.get(cellInfo.rowInd)?.colExtra ?? 0;
      },
    rowSpan:
      (colKey: string) =>
      (cellInfo: { rowInd: number }): readonly [number, number] | null => {
        ensure(rowsRef.current);
        const entry = byCol.get(colKey)?.get(cellInfo.rowInd);
        return entry ? [entry.rowStart, entry.rowEnd] : null;
      },
  };
}
