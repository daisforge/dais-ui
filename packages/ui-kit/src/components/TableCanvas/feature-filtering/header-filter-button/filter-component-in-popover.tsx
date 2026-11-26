import { createDebugLogger } from '@ui-kit/shared/utils/debug';
import React from 'react';
import styled from 'styled-components';

import { FILTER_POPOVER_PADDING } from '../../feature-overlays/constants';
import { SIZE } from '../../styles';
import { getTableDropdownConfig } from '../../styles/dropdown-sizes';
import type { ColumnConfig, ObjectForExtending } from '../../types';
import type { Option } from '../../types/additional.type';
import { ComboboxX } from '../combobox';
import { StyledSearchBlockFilter } from '../combobox/styled';
import { RenderSlot } from '../render-slot';
import { useFocusSearchInput } from '../use-focus-search-input';
import { inputStopPropagation } from '../utils';
import { FilterComponentInPopoverProps } from './types';

const PFX = '[FilterComponentInPopover]';
// Диагностика: общий флаг фильтра window.__TABLE_CANVAS_FILTER_DEBUG__ = true.
const filterDebug = createDebugLogger('TABLE_CANVAS_FILTER');

const FilterListContainer = styled.div<{
  $size: SIZE;
}>(({ $size }) => {
  const { minWidth, maxWidth } = getTableDropdownConfig($size);
  const padding = 2 * FILTER_POPOVER_PADDING;
  return {
    width: 'max-content',
    minWidth: minWidth - padding,
    maxWidth: maxWidth - padding,
    // Размер списка задают подписи пунктов. Поле занимает доступную ширину.
    [`${StyledSearchBlockFilter}`]: { contain: 'inline-size' },
  };
});

const StyledFreeTextFilter = styled(StyledSearchBlockFilter)<{
  $width: number;
}>(({ $width }) => ({ width: $width }));

/**
 * Инпут текстового фильтра. Вынесен в отдельный компонент, чтобы использовать
 * useFocusSearchInput (хук нельзя вызывать после ранних return в основном компоненте).
 */
const FreeTextFilterInput = ({
  size,
  width,
  value,
  onChange,
}: {
  size: 'xs' | 's';
  width: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const searchInputRef = useFocusSearchInput();
  return (
    <StyledFreeTextFilter
      ref={searchInputRef}
      size={size}
      autoComplete="off"
      value={value}
      onChange={onChange}
      onClick={(e) => {
        e.stopPropagation();
      }}
      onKeyDown={inputStopPropagation}
      $width={width}
    />
  );
};

/**
 * Компонент фильтра внутри поповера.
 * Обернут в React.memo для предотвращения ререндеров
 */
const FilterComponentInPopoverInner = <
  FilterStateType extends ObjectForExtending,
  R extends ObjectForExtending,
  SR,
>(
  props: FilterComponentInPopoverProps<FilterStateType, ColumnConfig<R, SR>>,
) => {
  const { columnConfig, popoverIsOpen, setPopoverIsOpen, headerContextState } =
    props;

  const { filters, setFilters, rowSize } = headerContextState;
  filterDebug(PFX, 'Render', { popoverIsOpen, columnConfig, filters });

  const columnConfigFiltering = columnConfig.filtering;
  if (!columnConfigFiltering) {
    return null;
  }
  // нужно, чтобы чистилось внутреннее состояние inputValue у комбобоксаX
  if (!popoverIsOpen) {
    return null;
  }

  if (columnConfigFiltering.component === 'custom') {
    return (
      <RenderSlot
        render={() =>
          columnConfigFiltering.customRender(
            props as FilterComponentInPopoverProps<
              ObjectForExtending,
              ColumnConfig<R, SR>
            >,
          )
        }
      />
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
        [valueKeyInFilters]: e.target.value,
      }));
    };

    const { searchSize, textFilterPopoverWidth } =
      getTableDropdownConfig(rowSize);
    return (
      <FreeTextFilterInput
        size={searchSize}
        width={textFilterPopoverWidth - 2 * FILTER_POPOVER_PADDING}
        value={filters?.[valueKeyInFilters] as string}
        onChange={handleInputChange}
      />
    );
  }

  const keyInFilterState =
    columnConfigFiltering.keyInFilterState as keyof typeof filters;

  const valueX = filters?.[keyInFilterState] as string;
  const mode = columnConfigFiltering.filter.typeOfValue;

  const handleSingleChange = (v: string) => {
    filterDebug(PFX, 'handleSingleChange', { v, keyInFilterState });
    setFilters?.((prev: FilterStateType) => ({
      ...prev,
      [keyInFilterState]: v,
    }));
    setPopoverIsOpen(false);
  };

  const handleMultiChange = (v: string[]) => {
    filterDebug(PFX, 'handleMultiChange', { v, keyInFilterState });
    setFilters?.((prev: FilterStateType) => ({
      ...prev,
      [keyInFilterState]: v,
    }));
  };

  const { value, onChange } = (() => {
    if (mode === 'single') {
      return {
        value: valueX,
        onChange: handleSingleChange,
      };
    }
    return {
      value: valueX as unknown as string[],
      onChange: handleMultiChange,
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
  const AfterList = columnConfigFiltering?.afterList ?? (() => undefined);

  return (
    <FilterListContainer $size={rowSize}>
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        afterList={<AfterList {...(props as any)} />}
        listMaxHeight={columnConfigFiltering.listMaxHeight ?? '360px'}
      />
    </FilterListContainer>
  );
};

/**
 * Мемоизированная версию компонента.
 */
export const FilterComponentInPopover = React.memo(
  FilterComponentInPopoverInner,
) as typeof FilterComponentInPopoverInner;
