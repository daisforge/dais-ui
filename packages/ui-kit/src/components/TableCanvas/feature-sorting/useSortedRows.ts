import { useEffect, useMemo, useRef, useState } from 'react';

import { ColumnConfig, ObjectForExtending, TableConfig } from '../types';
import {
  getSortPlan,
  isBlank,
  isSameSortPlan,
  numberComparator,
  stringComparator,
} from './sort-handlers';

export const useSortedRows = <
  RowType extends ObjectForExtending,
  SummaryRowType,
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
>({
  rows,
  columns,
  hiddenCols,
  tableConfig,
  infinityScrollActiveInConfig,
  paginationActiveInConfig,
}: {
  rows: RowType[];
  columns: readonly ColumnConfig<RowType, SummaryRowType>[];
  hiddenCols?: readonly string[];
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  infinityScrollActiveInConfig: boolean;
  paginationActiveInConfig: boolean;
}) => {
  const [sortColumns, setSortColumns] = tableConfig.sorting?.state ?? [];
  const [sortIsVisible, setSortIsVisible] = useState(false); // !!sortColumns length

  const tableConfigSortingBoolean = !!tableConfig.sorting;
  const manualSorting = !!tableConfig.sorting?.manualSorting;

  // Скрытый столбец нельзя отсортировать из шапки, поэтому сортировка по нему
  // снимается. Иначе строки вернутся к исходному порядку, а в состоянии
  // сортировки останется столбец, которого не видно, и при показе столбца
  // сортировка неожиданно вернётся.
  useEffect(() => {
    if (!hiddenCols?.length || !sortColumns?.length || !setSortColumns) return;
    const hiddenColsSet = new Set(hiddenCols);
    if (!sortColumns.some((sort) => hiddenColsSet.has(sort.columnKey))) return;
    setSortColumns((prev) =>
      prev.filter((sort) => !hiddenColsSet.has(sort.columnKey)),
    );
  }, [hiddenCols, sortColumns, setSortColumns]);

  // На порядок строк влияют только ключ, направление и компаратор активных
  // столбцов сортировки. Пока они те же, план сохраняет прежнюю ссылку, и
  // скрытие столбцов или вход в редактирование не пересортировывают строки.
  const nextSortPlan = useMemo(
    () => getSortPlan(sortColumns, columns),
    [sortColumns, columns],
  );
  // Запись в ref во время рендера здесь безопасна. Если прерванный рендер
  // оставит в ref план от других входных данных, следующий рендер сравнит его
  // с текущим и заменит. Строки всегда сортируются по текущим условиям, в
  // худшем случае будет одна лишняя сортировка.
  const sortPlanRef = useRef(nextSortPlan);
  if (!isSameSortPlan(sortPlanRef.current, nextSortPlan)) {
    sortPlanRef.current = nextSortPlan;
  }
  const sortPlan = sortPlanRef.current;

  const sortedRows = useMemo((): readonly RowType[] => {
    if (!tableConfigSortingBoolean) return rows;
    if (manualSorting) return rows;
    if (infinityScrollActiveInConfig || paginationActiveInConfig) return rows;

    if (!sortPlan.some((sort) => !!sort.sortingType)) return rows;

    return [...rows].sort((a, b) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const sort of sortPlan) {
        const { sortingType } = sort;

        if (!sortingType) {
          return 0;
        }
        const comparator = (() => {
          if (sortingType === 'stringSort') {
            return stringComparator<RowType>(sort.columnKey);
          }
          if (sortingType === 'numberSort') {
            return numberComparator<RowType>(sort.columnKey);
          }

          return sortingType;
        })();

        const compResult = comparator(a, b);
        if (compResult !== 0) {
          // Обработка пустых значений при DESC
          const isBuiltInComparator =
            sortingType === 'stringSort' || sortingType === 'numberSort';
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
    rows,
    sortPlan,
    manualSorting,
    infinityScrollActiveInConfig,
    paginationActiveInConfig,
    tableConfigSortingBoolean,
  ]);
  return {
    sortColumns,
    setSortColumns,
    sortedRows,
    sortIsVisible,
    setSortIsVisible,
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
