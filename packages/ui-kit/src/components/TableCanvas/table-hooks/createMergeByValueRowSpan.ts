import type { ObjectForExtending } from '../types';

// Объединяет соседние строки с одинаковым значением (mergeByCellValues).
// Карта блоков пересобирается, когда меняется массив строк. Одна строка сама по
// себе не объединяется.
export function createMergeByValueRowSpan<R extends ObjectForExtending>(
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
        // Блоком считаем только группу из двух и более строк.
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
