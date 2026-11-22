import { useMemo } from 'react';

import { ColumnConfig, TableConfig } from '../../types';
import { useFiltersInfo } from './use-filter-info';
import { useFilterOptions } from './use-filter-options';

type FilterManagementParams<
  FilterStateType extends Record<string, unknown>,
  RowType extends Record<string, unknown>,
  SummaryRowType,
  RowIdType extends string | number,
  HeaderContextValueType extends Record<string, unknown>,
> = {
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
  filters: FilterStateType | undefined;
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  headerContextValue?: HeaderContextValueType;
};

export const useFilterManagement = <
  FilterStateType extends Record<string, unknown>,
  RowType extends Record<string, unknown>,
  SummaryRowType,
  RowIdType extends string | number,
  HeaderContextValueType extends Record<string, unknown>,
>({
  columnConfig,
  filters,
  tableConfig,
  headerContextValue,
}: FilterManagementParams<
  FilterStateType,
  RowType,
  SummaryRowType,
  RowIdType,
  HeaderContextValueType
>) => {
  const options = useFilterOptions(columnConfig, headerContextValue);
  const filtersInfo = useFiltersInfo(columnConfig, filters, tableConfig);
  const filtersOrder = useMemo(() => {
    const order = tableConfig.filtering?.sidebarConfig?.order || [];
    const globalFilterKeys: string[] = [];
    const columnFilterKeys: string[] = [];

    // 1. Собираем колоночные фильтры
    columnConfig.forEach((column) => {
      if (column.filtering) {
        columnFilterKeys.push(column.filtering.keyInFilterState || column.key);
      }
    });

    // 2. Собираем глобальные фильтры из sidebarConfig. Ключ, совпадающий с
    // колоночным фильтром, — это переопределение колонки (label/customRenderFn),
    // а не отдельный глобальный фильтр: он остаётся на своём месте среди
    // колоночных (так же он классифицируется в SidebarFilter).
    if (tableConfig.filtering?.sidebarConfig?.items) {
      Object.keys(tableConfig.filtering.sidebarConfig.items).forEach((key) => {
        if (!columnFilterKeys.includes(key)) {
          globalFilterKeys.push(key);
        }
      });
    }

    // 3. Сортируем согласно order (как в сайдбаре)
    const ordered: string[] = [];
    const unorderedGlobalFilters = [...globalFilterKeys];
    const unorderedColumnFilters = [...columnFilterKeys];

    // Добавляем фильтры в порядке указанном в order
    order.forEach((key) => {
      // Ищем в глобальных фильтрах
      const globalIndex = unorderedGlobalFilters.indexOf(key);
      if (globalIndex >= 0) {
        ordered.push(key);
        unorderedGlobalFilters.splice(globalIndex, 1);
        return;
      }

      // Ищем в колоночных фильтрах
      const columnIndex = unorderedColumnFilters.indexOf(key);
      if (columnIndex >= 0) {
        ordered.push(key);
        unorderedColumnFilters.splice(columnIndex, 1);
      }
    });

    // 4. Добавляем оставшиеся глобальные фильтры
    ordered.push(...unorderedGlobalFilters);
    // 5. Добавляем оставшиеся колоночные фильтры
    ordered.push(...unorderedColumnFilters);

    return ordered;
  }, [columnConfig, tableConfig.filtering?.sidebarConfig]);

  return { options, filtersInfo, filtersOrder };
};
