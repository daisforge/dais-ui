import { useFiltersList } from '@ui-kit/components/ListOfFilters';
import { FiltersActionsListOfFilters } from '@ui-kit/layouts/FiltersActions';
import React from 'react';

import {
  COLORS,
  DURATION,
  HEIGHT_FILTERLIST_BLOCK,
  TABLE_BORDER_RADIUS
} from '../../styles';
import {
  ActiveViewModsType,
  ColumnConfig,
  ObjectForExtending,
  TableConfig
} from '../../types';
import { useFilterManagement } from '../hooks/use-filter-management';

const BORDER_WIDTH = 1;
const PADDING_INLINE = 8;
const BORDER = `${BORDER_WIDTH}px solid ${COLORS.border}`;

const EMPTY_OBJ = {};
export const FilterListBlock = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  HeaderContextValueType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  isOpened,
  activeView,
  columnConfig,
  tableConfig,
  headerContextValue,
  $borderLeftTopRadiusRounded,
  $borderRightTopRadiusRounded
}: {
  isOpened: boolean;
  activeView: ActiveViewModsType;
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  headerContextValue: HeaderContextValueType | undefined;
  $borderLeftTopRadiusRounded: boolean;
  $borderRightTopRadiusRounded: boolean;
}) => {
  const [filters, setFilters] = tableConfig.filtering?.state ?? [
    undefined,
    undefined
  ];

  const { options, filtersInfo, filtersOrder } = useFilterManagement({
    columnConfig,
    filters,
    tableConfig,
    headerContextValue
  });

  const { filterList, clearAll } = useFiltersList({
    filters: filters ?? EMPTY_OBJ, // empty object if filters is undefined
    options,
    updateFilters: (key, newValue) => {
      if (setFilters) {
        setFilters((prev) => ({ ...(prev ?? EMPTY_OBJ), [key]: newValue }));
      }
    },
    filtersInfo,
    order: filtersOrder
  });

  if (!tableConfig.filtering) {
    return null;
  }

  const isFiltersListVisible = isOpened;

  return (
    <FiltersActionsListOfFilters
      clearAll={clearAll}
      opened={isFiltersListVisible}
      items={filterList}
      ellipsisLabel
      sizeOnOpen={HEIGHT_FILTERLIST_BLOCK}
      paddingTop={0}
      paddingInline={PADDING_INLINE}
      maxHeight={HEIGHT_FILTERLIST_BLOCK}
      extraCss={{
        marginTop: 0,
        borderInline: BORDER,
        borderTop: BORDER,
        borderTopLeftRadius: $borderLeftTopRadiusRounded
          ? TABLE_BORDER_RADIUS
          : undefined,
        borderTopRightRadius: $borderRightTopRadiusRounded
          ? TABLE_BORDER_RADIUS
          : undefined,
        backgroundColor: COLORS.white,
        transition: `all ${DURATION}s ease`,
        ...(activeView === 'cards' && {
          backgroundColor: 'transparent',
          borderColor: 'transparent'
        })
      }}
      chipStyle={tableConfig.filtering.chipStyle}
      renderGroupLabel={tableConfig.filtering.renderGroupLabel}
      renderChipLabel={tableConfig.filtering.renderChipLabel}
    />
  );
};
