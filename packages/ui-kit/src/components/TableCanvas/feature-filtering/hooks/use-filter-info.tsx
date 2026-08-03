import { useMemo } from 'react';

import { ColumnConfig, TableConfig } from '../../types';

export const useFiltersInfo = <
  FilterStateType extends Record<string, unknown>,
  RowType extends Record<string, unknown>,
  SummaryRowType,
  RowIdType extends string | number,
>(
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[],
  filters: FilterStateType | undefined,
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>,
) =>
  useMemo(() => {
    const allFilterKeys = new Set<string>();

    columnConfig.forEach((col) => {
      if (col.filtering) {
        allFilterKeys.add(col.filtering.keyInFilterState);
      }
    });

    Object.keys(filters ?? {}).forEach((key) => allFilterKeys.add(key));

    return Array.from(allFilterKeys).reduce((acc, key) => {
      acc[key] = {
        label: tableConfig?.filtering?.filtersInfo?.[key]?.label ?? key,
        clearedValue:
          tableConfig?.filtering?.filtersInfo?.[key]?.clearedValue ??
          tableConfig.filtering?.clearedValue?.[key] ??
          undefined,
      };
      return acc;
    }, {} as Record<string, { label: string; clearedValue: unknown }>);
  }, [
    columnConfig,
    filters,
    tableConfig.filtering?.clearedValue,
    tableConfig.filtering?.filtersInfo,
  ]);
