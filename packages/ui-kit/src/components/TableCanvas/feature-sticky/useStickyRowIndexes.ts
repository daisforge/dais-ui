import { useMemo, useRef } from 'react';

import type { StickyRowsConfig } from './types';

type IsStickyRow<RowType> = (row: RowType, rowIndex: number) => boolean;

type LastCheck<RowType> = {
  isStickyRow: IsStickyRow<RowType>;
  rows: readonly RowType[];
  sticky: Uint8Array;
};

/**
 * Индексы липких строк для glide.
 *
 * Предикат запоминает прошлый результат: если на месте строки лежит тот же объект, повторно она
 * не проверяется. Поэтому при подгрузке чанками проверяются только новые строки.
 */
export const useStickyRowIndexes = <RowType>(
  rows: readonly RowType[],
  stickyRows: StickyRowsConfig<RowType> | undefined,
): readonly number[] | undefined => {
  const lastCheckRef = useRef<LastCheck<RowType>>();

  return useMemo(() => {
    if (typeof stickyRows !== 'function') {
      lastCheckRef.current = undefined;
      return stickyRows;
    }

    const lastCheck =
      lastCheckRef.current?.isStickyRow === stickyRows
        ? lastCheckRef.current
        : undefined;

    const sticky = new Uint8Array(rows.length);
    const indexes: number[] = [];

    rows.forEach((row, index) => {
      const isSticky =
        lastCheck && lastCheck.rows[index] === row
          ? lastCheck.sticky[index] === 1
          : stickyRows(row, index);

      if (isSticky) {
        sticky[index] = 1;
        indexes.push(index);
      }
    });

    lastCheckRef.current = { isStickyRow: stickyRows, rows, sticky };

    return indexes;
  }, [rows, stickyRows]);
};
