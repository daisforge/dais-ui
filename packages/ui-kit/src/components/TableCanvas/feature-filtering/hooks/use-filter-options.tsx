import { useMemo } from 'react';

import { ColumnConfig, SelectOptions } from '../../types';

export const useFilterOptions = <
  HeaderContextValueType extends Record<string, unknown>,
  RowType extends Record<string, unknown>,
  SummaryRowType,
>(
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[],
  headerContextValue?: HeaderContextValueType,
) =>
  useMemo(() => {
    const result: Record<
      string,
      Array<{ label: string; value: string | number }>
    > = {};

    columnConfig.forEach((col) => {
      if (col.filtering?.component === 'select') {
        const key = col.filtering.keyInFilterState;
        let optionsArray: Array<{ label: string; value: string | number }> = [];

        if (col.filtering.selectOptions.type === 'constant') {
          optionsArray =
            col.filtering.selectOptions.options?.map((opt) => ({
              label: opt.text?.toString() ?? opt.value.toString(),
              value: opt.value,
            })) ?? [];
        } else if (headerContextValue) {
          const contextKey =
            col.filtering.selectOptions.optionsKeyInHeaderContext;

          // Безопасное приведение типов
          const contextValue =
            headerContextValue[contextKey as keyof HeaderContextValueType];
          const contextOptions = (
            Array.isArray(contextValue)
              ? (contextValue as SelectOptions[])
              : undefined
          )?.filter(
            (opt): opt is SelectOptions =>
              opt && typeof opt.value !== 'undefined',
          );

          optionsArray =
            (contextOptions ?? []).map((opt) => ({
              label: opt.text?.toString() ?? opt.value.toString(),
              value: opt.value,
            })) ?? [];
        }

        if (optionsArray.length > 0) {
          result[key] = optionsArray;
        }
      }
    });

    return result;
  }, [columnConfig, headerContextValue]);
