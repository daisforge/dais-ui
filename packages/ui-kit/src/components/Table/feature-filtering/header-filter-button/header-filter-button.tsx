import { shadowDownSoftS } from '@ui-kit/tokens';
import React, { useState } from 'react';

import { TableTooltip } from '../../components/TableTooltip';
import {
  HeaderContextValueTypeInstance,
  useHeaderContext
} from '../../contexts';
import { COLORS, tableClassNames } from '../../styles';
import { ColumnConfig, ObjectForExtending } from '../../types';
import { FiltersVariables } from '../filtering.type';
import { PopoverX } from '../popover';
import { FilterComponentInPopover } from './filter-component-in-popover';
import { FilterIcon } from './filter-icon';

export const HeaderFilterButton = <
  FilterStateType extends ObjectForExtending,
  R extends ObjectForExtending,
  SR
>({
  columnConfig,
  tabIndex
}: {
  columnConfig: ColumnConfig<R, SR>;
  tabIndex: number;
}) => {
  const headerContextState = useHeaderContext<
    HeaderContextValueTypeInstance<FilterStateType> &
      // FiltersVariables - добавляется в месте, где создается контекст
      FiltersVariables
  >();
  const { filters, clearedFiltersValue } = headerContextState;

  const filtersIsEqualClearedFilters = (() => {
    const keyInFiltersState = columnConfig.filtering?.keyInFilterState;

    if (!keyInFiltersState) {
      return false;
    }

    const currentV = filters?.[keyInFiltersState];
    const clearedV = clearedFiltersValue?.[keyInFiltersState];

    if (columnConfig.filtering?.component === 'custom') {
      const customFiltering = columnConfig.filtering;

      if (customFiltering.compareWithClearedValue) {
        return customFiltering.compareWithClearedValue(clearedV, currentV);
      }
      return JSON.stringify(currentV) === JSON.stringify(clearedV);
    }

    const columnFilter =
      columnConfig.filtering?.component === 'input' ||
      columnConfig.filtering?.component === 'select'
        ? columnConfig.filtering.filter
        : undefined;

    const isMultipleFilter =
      typeof columnFilter === 'object' &&
      columnFilter.typeOfValue === 'multiple';

    if (isMultipleFilter) {
      if (!Array.isArray(clearedV)) {
        return false;
      }
      return (
        currentV.length === clearedV.length &&
        currentV.sort().join() === clearedV.sort().join()
      );
    }

    return currentV === clearedV;
  })();

  const [isOpen, setIsOpen] = useState(false);

  const filteringCondition = !filtersIsEqualClearedFilters;

  return (
    <div
      className={` ${
        filteringCondition ? tableClassNames.headerCellFilterIsActive : ''
      } ${tableClassNames.headerCellFilterIsAvailable}`}
    >
      <TableTooltip
        text="Отфильтровать по данной колонке"
        placement="top"
        animated
        target={
          <PopoverX
            placement="bottom-start"
            hasTail={false}
            opened={isOpen}
            setIsOpen={setIsOpen}
            target={<FilterIcon redSquare={!filtersIsEqualClearedFilters} />}
            popoverInnerCss={`
            padding: 4px;
            background-color: ${COLORS.white};
            border-radius: 8px;
            box-shadow: ${shadowDownSoftS};
            `}
            zIndex="9001"
          >
            <FilterComponentInPopover
              columnConfig={columnConfig}
              popoverIsOpen={isOpen}
              setPopoverIsOpen={setIsOpen}
              tabIndex={tabIndex}
              headerContextState={headerContextState}
              filterSource="header"
            />
          </PopoverX>
        }
      />
    </div>
  );
};
