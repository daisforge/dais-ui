import React from 'react';

import { ColumnConfig, ObjectForExtending } from '../../types';

export const getChipsArray = <
  FilterStateType extends ObjectForExtending,
  RowType extends ObjectForExtending,
  HeaderContextValueType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  columnConfig,
  filters,
  setFilters,
  clearedFiltersStateValue,
  headerContextValue
}: {
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
  filters: FilterStateType;
  setFilters: React.Dispatch<React.SetStateAction<FilterStateType>>;
  clearedFiltersStateValue: FilterStateType;
  headerContextValue: HeaderContextValueType | undefined;
}) =>
  columnConfig.reduce((acc, curr) => {
    if (!curr.filtering) {
      return acc;
    }
    const { component, keyInFilterState } = curr.filtering;

    const clearedValue = clearedFiltersStateValue?.[keyInFilterState];
    const currentValue = filters?.[keyInFilterState];

    if (component === 'input') {
      if (clearedValue === currentValue) {
        return acc;
      }

      acc.push({
        onClick: () => {
          setFilters({
            ...filters,
            [keyInFilterState]: clearedValue
          });
        },
        label: currentValue
      });

      return acc;
    }
    if (component === 'select') {
      const isSingeSelect = curr.filtering.filter.typeOfValue === 'single';

      if (isSingeSelect) {
        if (clearedValue === currentValue) {
          return acc;
        }

        acc.push({
          onClick: () => {
            setFilters({
              ...filters,
              [keyInFilterState]: clearedValue
            });
          },
          label: currentValue
        });
        return acc;
      }
      // multiple
      const currentValueX = currentValue as string[];

      const optionsType = curr.filtering.selectOptions.type;

      let optionsAll: {
        value: string | number;
        text: string | number;
      }[] = [];

      if (optionsType === 'constant') {
        optionsAll = curr.filtering.selectOptions.options ?? [];
      } else {
        const key = curr.filtering.selectOptions.optionsKeyInHeaderContext;

        optionsAll = headerContextValue?.[key] ?? [];
      }
      const selectedOptions = optionsAll.filter((o) =>
        currentValueX.some((v) => v === o.value)
      );

      selectedOptions.forEach((o) => {
        acc.push({
          label: o.text.toString(),
          onClick: () => {
            setFilters({
              ...filters,
              [keyInFilterState]: currentValueX.filter((v) => v !== o.value)
            });
          }
        });
      });
      return acc;
    }

    return acc;
  }, [] as { onClick: () => void; label: string }[]);
