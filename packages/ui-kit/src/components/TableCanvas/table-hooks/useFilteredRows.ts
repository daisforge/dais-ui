import { useMemo } from 'react';

import { getClearedFilters } from '../feature-filtering';
import { ColumnConfig, ObjectForExtending, TableConfig } from '../types';

export const useFilteredRows = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  columnConfig,
  tableConfig,
  rows,
  infinityScrollActiveInConfig,
  paginationActiveInConfig,
  searchingActiveInConfig,
  searchQuery,
  isManualSearching,
}: {
  rows: RowType[];
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
  tableConfig: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
    // SubRowType
  >;
  infinityScrollActiveInConfig: boolean;
  paginationActiveInConfig: boolean;
  searchingActiveInConfig: boolean;
  searchQuery?: string;
  isManualSearching: boolean;
}) => {
  const [filters, setFilters] = tableConfig.filtering?.state ?? [];
  const tableConfigFilteringBoolean = !!tableConfig.filtering;
  const manualFiltering = !!tableConfig?.filtering?.manualFiltering;
  const filtersInfo = tableConfig.filtering?.filtersInfo;
  const clearedValues = tableConfig.filtering?.clearedValue;

  const filtersAreVisible = useMemo(
    () =>
      tableConfigFilteringBoolean &&
      !!filters &&
      Object.entries(filters).some((curr) => {
        const currKey = curr[0];
        const currV = curr[1];

        const currVIsArray = Array.isArray(currV);
        const currIsEmpty = !(
          (currVIsArray && currV.length) ||
          (!currVIsArray && currV)
        );

        if (currIsEmpty) {
          return false;
        }

        const clearedValue =
          filtersInfo && currKey in filtersInfo
            ? filtersInfo[currKey]?.clearedValue
            : clearedValues?.[currKey];

        const isCurrVEqualCleared = currV === clearedValue;

        if (isCurrVEqualCleared) {
          return false;
        }

        return true;
      }),
    [clearedValues, filters, filtersInfo, tableConfigFilteringBoolean],
  );

  const filteredRows = useMemo(() => {
    // Если пагинация/бесконечный скролл активны → пропускаем фильтрацию
    if (infinityScrollActiveInConfig || paginationActiveInConfig) {
      return rows;
    }

    let result = [...rows];

    // 1. Применяем глобальный поиск, если он есть и не включен поиск на беке
    if (searchingActiveInConfig && searchQuery?.trim() && !isManualSearching) {
      const searchValue = searchQuery.trim().toLowerCase();
      result = result.filter((row) =>
        columnConfig.some((col) => {
          // Если у колонки есть поиск — берём valueInRow из searching
          if (col.searching) {
            const rowValue = col.searching
              .valueInRow(row)
              .toString()
              .toLowerCase();
            return rowValue.includes(searchValue);
          }
          // Иначе пытаемся получить значение через стандартный доступ (например, row[col.key])
          const rowValue: string = row[col.key]?.toString().toLowerCase() || '';
          return rowValue.includes(searchValue);
        }),
      );
    }

    // 2. Если фильтры отключены или ручные → возвращаем результат поиска
    if (!tableConfigFilteringBoolean || !filters || manualFiltering) {
      return result;
    }

    // 3. Фильтруем по колоночным фильтрам (если они есть)
    const columnsWithFiltering = columnConfig.filter(
      (
        c,
      ): c is typeof c & {
        filtering: NonNullable<typeof c.filtering>;
      } => !!c.filtering,
    );

    if (!columnsWithFiltering.length) {
      return result; // Возвращаем уже отфильтрованные по поиску данные
    }
    const filterCb = (row: RowType) =>
      columnsWithFiltering.every((col) => {
        if (!col.filtering.valueInRow || !col.filtering.filter) {
          return true;
        }
        const rowValue = col.filtering.valueInRow(row);
        const filterValue = filters[col.filtering.keyInFilterState] as string;

        // input type filter
        if (col.filtering.component === 'input') {
          if (col.filtering.filter === 'includes') {
            return filterValue
              ? rowValue
                  .toString()
                  .toLowerCase()
                  .includes(filterValue.toLowerCase())
              : true;
          }

          if (col.filtering.filter === 'startWith') {
            return filterValue
              ? rowValue
                  .toString()
                  .toLowerCase()
                  .startsWith(filterValue.toLowerCase())
              : true;
          }
          if (col.filtering.filter === 'equal') {
            return filterValue
              ? rowValue.toString().toLowerCase() ===
                  filterValue.toString().toLowerCase()
              : true;
          }
          return col.filtering.filter(filterValue, rowValue.toString());
        }

        // select type filter
        if (col.filtering.component === 'select') {
          if (
            !('filteringType' in col.filtering.filter) ||
            typeof col.filtering.filter.filteringType !== 'function'
          ) {
            return true;
          }

          if (col.filtering.filter.typeOfValue === 'single') {
            return col.filtering.filter.filteringType(
              filterValue,
              rowValue.toString(),
            );
          }
          return col.filtering.filter.filteringType(
            filterValue as unknown as string[],
            rowValue.toString(),
          );
        }

        if (col.filtering.component === 'custom') {
          return col.filtering.filter(filterValue, rowValue);
        }

        return true;
      });
    return result.filter(filterCb); // Фильтруем уже найденное по поиску
  }, [
    infinityScrollActiveInConfig,
    paginationActiveInConfig,
    rows,
    searchingActiveInConfig,
    searchQuery,
    isManualSearching,
    tableConfigFilteringBoolean,
    filters,
    manualFiltering,
    columnConfig,
  ]);

  const clearedFiltersValue = getClearedFilters<FilterStateType>(
    tableConfig?.filtering,
  );

  return {
    filtersAreVisible,

    filteredRows,
    filters,
    setFilters,
    clearedFiltersValue,
  };
};
