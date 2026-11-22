import { useMemo } from 'react';

import type { StickyColumnsConfig } from './types';

type StickyColumn = { key: string; isServiceColumn?: boolean };

const toPredicate = <ColumnType extends StickyColumn>(
  config: StickyColumnsConfig<ColumnType>,
): ((column: ColumnType) => boolean) => {
  if (typeof config === 'function') {
    return config;
  }
  const keys = new Set(config);
  return (column) => keys.has(column.key);
};

/** Индексы липких колонок в порядке glide. Служебные колонки (нумерация, чекбоксы) не учитываются. */
export const useStickyColumnIndexes = <ColumnType extends StickyColumn>(
  columns: readonly ColumnType[],
  stickyColumns: StickyColumnsConfig<ColumnType> | undefined,
): number[] | undefined =>
  useMemo(() => {
    if (!stickyColumns) {
      return undefined;
    }
    const isSticky = toPredicate(stickyColumns);
    return columns.flatMap((column, index) =>
      !column.isServiceColumn && isSticky(column) ? [index] : [],
    );
  }, [columns, stickyColumns]);
