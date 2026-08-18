import type { ObjectForExtending } from '../types';

/**
 * Строит `rowSpan`-функцию для колонки из `spanCells.spanBy`: объединяет ПОДРЯД
 * идущие строки с одинаковым значением в текущем видимом порядке.
 *
 * Run-map (индекс строки → диапазон блока) считается ЛЕНИВО при первом вызове на
 * новом наборе строк и кэшируется по идентичности массива, поэтому пересчёт —
 * O(n) только на смену данных (сортировка/фильтр отдают новый массив), а lookup —
 * O(1). Замыкание читает `rowsRef.current` в момент вызова (во время
 * getCellContent), когда флэт-строки уже актуальны, поэтому лага/мигания нет.
 *
 * Данные НЕ мутируются: значение уже повторяется в строках, merge лишь схлопывает
 * его визуально. Для одиночных строк (пробег длины 1) возвращает null — без merge.
 */
export function createSpanByRowSpan<R extends ObjectForExtending>(
  valueOf: (row: R) => unknown,
  rowsRef: { readonly current: readonly R[] },
): (cellInfo: { rowInd: number }) => readonly [number, number] | null {
  let cachedRows: readonly R[] | null = null;
  let cachedMap = new Map<number, readonly [number, number]>();

  const ensure = (rows: readonly R[]): void => {
    if (rows === cachedRows) return;
    cachedRows = rows;
    cachedMap = new Map();
    let i = 0;
    while (i < rows.length) {
      const row = rows[i];
      if (row) {
        const value = valueOf(row);
        let j = i;
        while (
          j + 1 < rows.length &&
          rows[j + 1] &&
          valueOf(rows[j + 1] as R) === value
        ) {
          j += 1;
        }
        // Пробег длины >1 = блок; одиночные строки в карту не кладём (нет merge).
        if (j > i) {
          for (let k = i; k <= j; k += 1) cachedMap.set(k, [i, j]);
        }
        i = j + 1;
      } else {
        i += 1;
      }
    }
  };

  return (cellInfo) => {
    ensure(rowsRef.current);
    return cachedMap.get(cellInfo.rowInd) ?? null;
  };
}
