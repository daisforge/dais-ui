import React from 'react';

import { FILTER_POPOVER_WIDTH, SIZES } from '../../styles';
import type { ColumnConfig, ObjectForExtending } from '../../types';
import type { Option } from '../../types/additional.type';
import { ComboboxX } from '../combobox';
import { StyledSearchBlockFilter } from '../combobox/styled';
import { inputStopPropagation } from '../utils';
import { FilterComponentInPopoverProps } from './types';

export const FilterComponentInPopover = <
  FilterStateType extends ObjectForExtending,
  R extends ObjectForExtending,
  SR
>(
  props: FilterComponentInPopoverProps<FilterStateType, ColumnConfig<R, SR>>
) => {
  const {
    columnConfig,
    popoverIsOpen,
    setPopoverIsOpen,
    tabIndex,
    headerContextState
  } = props;

  const { filters, setFilters, rowSize } = headerContextState;

  const columnConfigFiltering = columnConfig.filtering;
  if (!columnConfigFiltering) {
    return null;
  }
  // нужно, чтобы чистилось внутреннее состояние inputValue у комбобоксаX
  if (!popoverIsOpen) {
    return null;
  }

  if (columnConfigFiltering.component === 'custom') {
    return columnConfigFiltering.customRender(
      props as FilterComponentInPopoverProps<
        ObjectForExtending,
        ColumnConfig<R, SR>
      >
    );
  }

  if (columnConfigFiltering.component === 'input') {
    // Используем keyInFilterState если он задан, иначе columnConfig.key
    const valueKeyInFilters = (
      columnConfigFiltering.keyInFilterState
        ? columnConfigFiltering.keyInFilterState
        : columnConfig.key
    ) as keyof typeof filters;

    return (
      <StyledSearchBlockFilter
        size={SIZES[rowSize].input}
        autoComplete="off"
        autoFocus
        {...{ tabIndex }}
        value={filters?.[valueKeyInFilters] as string}
        onChange={(e) => {
          setFilters?.((prev) => ({
            ...prev,
            [valueKeyInFilters]: e.target.value
          }));
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={inputStopPropagation}
        width={FILTER_POPOVER_WIDTH[rowSize]}
      />
    );
  }

  const keyInFilterState =
    columnConfigFiltering.keyInFilterState as keyof typeof filters;

  const valueX = filters?.[keyInFilterState] as string;
  const mode = columnConfigFiltering.filter.typeOfValue;

  const { value, onChange } = (() => {
    if (mode === 'single') {
      return {
        value: valueX,
        onChange: (v: string) => {
          setFilters?.((prev) => ({
            ...prev,
            [keyInFilterState]: v
          }));
          setPopoverIsOpen(false);
        }
      };
    }
    return {
      value: valueX as unknown as string[],
      onChange: (v: string[]) => {
        setFilters?.((prev) => ({
          ...prev,
          [keyInFilterState]: v
        }));
      }
    };
  })();

  const options = (() => {
    if (columnConfigFiltering.selectOptions.type === 'constant') {
      return columnConfigFiltering.selectOptions.options;
    }
    const keyInHeaderContext = columnConfigFiltering.selectOptions
      .optionsKeyInHeaderContext as unknown as keyof typeof headerContextState;

    if (keyInHeaderContext in headerContextState) {
      const options = headerContextState?.[keyInHeaderContext] ?? [];

      return options as unknown as Option[];
    }

    return [];
  })();
  const BeforeList = columnConfigFiltering?.beforeList ?? (() => undefined);

  return (
    <ComboboxX
      tabIndex={tabIndex}
      size={rowSize}
      mode={mode as 'single'}
      value={value as string}
      onChange={onChange as (v: string) => void}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      options={options as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      beforeList={<BeforeList {...(props as any)} />}
      listMaxHeight={columnConfigFiltering.listMaxHeight ?? '360px'}
      width={FILTER_POPOVER_WIDTH[rowSize]}
    />
  );
};
