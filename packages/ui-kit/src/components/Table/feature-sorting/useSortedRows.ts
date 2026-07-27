import { useMemo, useState } from 'react';

import { ColumnConfig, ObjectForExtending, TableConfig } from '../types';
import { isBlank, numberComparator, stringComparator } from './sort-handlers';

export const useSortedRows = <
  RowType extends ObjectForExtending,
  SummaryRowType,
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number
>({
  rows,
  columns,
  tableConfig,
  infinityScrollActiveInConfig,
  paginationActiveInConfig
}: {
  rows: RowType[];
  columns: readonly ColumnConfig<RowType, SummaryRowType>[];
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  infinityScrollActiveInConfig: boolean;
  paginationActiveInConfig: boolean;
}) => {
  const [sortColumns, setSortColumns] = tableConfig.sorting?.state ?? [];
  const [sortIsVisible, setSortIsVisible] = useState(false); // !!sortColumns length

  const tableConfigSortingBoolean = !!tableConfig.sorting;
  const manualSorting = !!tableConfig.sorting?.manualSorting;

  const sortedRows = useMemo((): readonly RowType[] => {
    if (!tableConfigSortingBoolean) return rows;
    if (manualSorting) return rows;
    if (infinityScrollActiveInConfig || paginationActiveInConfig) return rows;

    if (!sortColumns || sortColumns.length === 0) return rows;

    const columnsWithSorting = columns.filter((col) => !!col.sortingType);

    if (columnsWithSorting.length === 0) return rows;

    return [...rows].sort((a, b) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const sort of sortColumns) {
        const currColumnConfig = columnsWithSorting.find(
          (c) => c.key === sort.columnKey
        );

        if (!currColumnConfig || !currColumnConfig.sortingType) {
          return 0;
        }
        const comparator = (() => {
          if (currColumnConfig.sortingType === 'stringSort') {
            return stringComparator<RowType>(sort.columnKey);
          }
          if (currColumnConfig.sortingType === 'numberSort') {
            return numberComparator<RowType>(sort.columnKey);
          }

          return currColumnConfig.sortingType;
        })();

        const compResult = comparator(a, b);
        if (compResult !== 0) {
          // Обработка пустых значений при DESC
          const isBuiltInComparator =
            currColumnConfig.sortingType === 'stringSort' ||
            currColumnConfig.sortingType === 'numberSort';
          const oneOfValuesBlank =
            isBlank(a[sort.columnKey as keyof RowType]) ||
            isBlank(b[sort.columnKey as keyof RowType]);

          if (isBuiltInComparator && oneOfValuesBlank) {
            return compResult; // пустые всегда внизу
          }

          return sort.direction === 'ASC' ? compResult : -compResult;
        }
      }
      return 0;
    });
  }, [
    columns,
    rows,
    sortColumns,
    manualSorting,
    infinityScrollActiveInConfig,
    paginationActiveInConfig,
    tableConfigSortingBoolean
  ]);
  return {
    sortColumns,
    setSortColumns,
    sortedRows,
    sortIsVisible,
    setSortIsVisible
  };
};

// первая реализация, возможно понадобится

// export const useSortedRows2 = <RowType extends ObjectForExtending>(
//     rows: RowType[],
//     getComparator: (sortColumnKey: string) => (a: RowType, b: RowType) => number
// ) => {
//     const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);

//     const sortedRows = useMemo((): readonly RowType[] => {
//         if (sortColumns.length === 0) return rows;

//         return [...rows].sort((a, b) => {
//             // eslint-disable-next-line no-restricted-syntax
//             for (const sort of sortColumns) {
//                 const comparator = getComparator(sort.columnKey);
//                 const compResult = comparator(a, b);
//                 if (compResult !== 0) {
//                     return sort.direction === 'ASC' ? compResult : -compResult;
//                 }
//             }
//             return 0;
//         });
//     }, [getComparator, rows, sortColumns]);
//     return { sortColumns, setSortColumns, sortedRows };
// };
