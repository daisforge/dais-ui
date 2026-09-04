import type {
  MergedCellsAlign,
  MergedCellsRegion,
  ObjectForExtending,
} from '../types';

interface OriginEntry {
  colExtra: number;
  rowStart: number;
  rowEnd: number;
  align?: MergedCellsAlign;
}

const isContiguous = (sorted: readonly number[]): boolean =>
  sorted.every((v, i) => i === 0 || v === (sorted[i - 1] as number) + 1);

/**
 * Объединения, заданные снаружи (mergeCells.mergedCellsRegions). Регион задан
 * стабильными ключами строк и колонок. Прямо во время отрисовки эти ключи
 * переводятся в индексы: колонки берём из текущего порядка (renderColKeysRef, он
 * учитывает перестановку, закрепление и скрытие), строки — из rowsRef. Результат
 * кэшируется по ссылке на массивы. Если ключи перестали идти подряд (регион
 * разорвался), он не рисуется. Один и тот же resolver вешается на все колонки
 * региона: каждая при отрисовке сама решает, она верхняя-левая ячейка блока или
 * покрыта им.
 */
export function createMergedRegionsResolver<R extends ObjectForExtending>(
  regions: readonly MergedCellsRegion[],
  renderColKeysRef: { readonly current: readonly string[] },
  rowsRef: { readonly current: readonly R[] },
  rowKeyGetter: (row: R) => string | number,
) {
  // Все колонки, которые участвуют хоть в одном объединении. От порядка не
  // зависит, поэтому считаем сразу.
  const regionCols = new Set<string>();
  regions.forEach((region) => region.colKeys.forEach((k) => regionCols.add(k)));

  let cachedRows: readonly R[] | null = null;
  let cachedKeys: readonly string[] | null = null;
  // Ключ карты — верхняя-левая колонка региона в текущем порядке колонок.
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

    regions.forEach((region) => {
      // Убираем повторы ключей: случайный дубликат в rowKeys/colKeys дал бы
      // повтор индекса, и проверка «идут ли ячейки подряд» ложно провалилась бы
      // (регион тихо перестал бы рисоваться).
      const colInds = [...new Set(region.colKeys)]
        .map((k) => colIndexOf.get(k))
        .filter((x): x is number => x !== undefined)
        .sort((a, b) => a - b);
      const rowInds = [...new Set(region.rowKeys)]
        .map((id) => rowIndexOf.get(id))
        .filter((x): x is number => x !== undefined)
        .sort((a, b) => a - b);
      // Регион пустой (нет колонок или строк) либо разорван перестановкой,
      // сортировкой или скрытием — не рисуем, блок распадётся на отдельные ячейки.
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
        map.set(ri, {
          colExtra,
          rowStart,
          rowEnd,
          align: region.mergedCellsAlign,
        });
      }
    });
  };

  return {
    /** Колонки, которые участвуют в объединениях (на них и вешаем resolver). */
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
    /** Выравнивание того региона, что накрывает ячейку (undefined, если ячейка вне регионов). */
    align:
      (colKey: string) =>
      (cellInfo: { rowInd: number }): MergedCellsAlign | undefined => {
        ensure(rowsRef.current, renderColKeysRef.current);
        return byOrigin.get(colKey)?.get(cellInfo.rowInd)?.align;
      },
  };
}
