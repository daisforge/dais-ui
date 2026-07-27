/* eslint-disable no-console */
import React from 'react';

import { SIZES } from '../../styles';
import type { ColumnConfig, ObjectForExtending } from '../../types';
import type { Option } from '../../types/additional.type';
import { ComboboxX } from '../combobox';
import { StyledSearchBlockFilter } from '../combobox/styled';
import { inputStopPropagation } from '../utils';
import { FilterComponentInPopoverProps } from './types';

// отнимаем везде 8px, так как это padding
const FILTER_POPOVER_WIDTH = {
  small: '192px',
  medium: '232px',
  big: '232px'
};

/**
 * Компонент фильтра внутри поповера.
 * Обернут в React.memo для предотвращения ререндеров
 */
const FilterComponentInPopoverInner = <
  FilterStateType extends ObjectForExtending,
  R extends ObjectForExtending,
  SR
>(
  props: FilterComponentInPopoverProps<FilterStateType, ColumnConfig<R, SR>>
) => {
  const { columnConfig, popoverIsOpen, setPopoverIsOpen, headerContextState } =
    props;

  const { filters, setFilters, rowSize } = headerContextState;
  console.debug('[FilterComponentInPopover] Render', {
    popoverIsOpen,
    columnConfig,
    filters
  });

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters?.((prev: FilterStateType) => ({
        ...prev,
        [valueKeyInFilters]: e.target.value
      }));
    };

    return (
      <StyledSearchBlockFilter
        size={SIZES[rowSize].input}
        autoComplete="off"
        // {...{ tabIndex }} // Комментирую, чтобы в TableCanvas после открытия поповера с фильтрами фокус переключился на инпут
        value={filters?.[valueKeyInFilters] as string}
        onChange={handleInputChange}
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

  const handleSingleChange = (v: string) => {
    console.debug('[handleSingleChange] CALLED', { v, keyInFilterState });
    setFilters?.((prev: FilterStateType) => ({
      ...prev,
      [keyInFilterState]: v
    }));
    setPopoverIsOpen(false);
  };

  const handleMultiChange = (v: string[]) => {
    console.debug('[handleMultiChange] CALLED', { v, keyInFilterState });
    setFilters?.((prev: FilterStateType) => ({
      ...prev,
      [keyInFilterState]: v
    }));
  };

  const { value, onChange } = (() => {
    if (mode === 'single') {
      return {
        value: valueX,
        onChange: handleSingleChange
      };
    }
    return {
      value: valueX as unknown as string[],
      onChange: handleMultiChange
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
      // tabIndex={tabIndex} // Комментирую, чтобы в TableCanvas после открытия поповера с фильтрами фокус переключился на инпут
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

/**
 * Мемоизированная версию компонента.
 */
export const FilterComponentInPopover = React.memo(
  FilterComponentInPopoverInner
) as typeof FilterComponentInPopoverInner;
