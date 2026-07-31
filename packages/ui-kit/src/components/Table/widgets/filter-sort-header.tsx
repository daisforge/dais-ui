import { Box } from '@ui-kit/components/Box';
import {
  BodyXS,
  // BodyXS,
  TypographyWithAutoTooltip,
} from '@ui-kit/components/Typography';
import { IconDrag, IconPinFill } from '@ui-kit/icons';
import { textSecondary, textTertiary } from '@ui-kit/tokens';
import React from 'react';
import { RenderHeaderCellProps } from 'react-data-grid';

import { TableTooltip } from '../components/TableTooltip';
import { HeaderContextValueTypeInstance, useHeaderContext } from '../contexts';
import { HeaderFilterButton } from '../feature-filtering';
import { FiltersVariables } from '../feature-filtering/filtering.type';
import { HeaderSortButton } from '../feature-sorting';
import { ExpandAllButton } from '../feature-tree';
import { tableClassNames } from '../styles';
import { ColumnConfig, ObjectForExtending } from '../types';

export function FilterSortHeader<
  FilterStateType extends ObjectForExtending,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  columnConfig,
  tableConfigSorting,
  tableConfigFiltering,
  tabIndex,
  columnIsPinned,
  reorderInHeaderIsActive,
  subRowIsActiveAndColumnWithArrow,
  ...rest
}: RenderHeaderCellProps<RowType, SummaryRowType> & {
  columnConfig: ColumnConfig<RowType, SummaryRowType>;
  tableConfigSorting: boolean;
  tableConfigFiltering: boolean;
  columnIsPinned: boolean;
  reorderInHeaderIsActive: boolean;
  subRowIsActiveAndColumnWithArrow: boolean;
}) {
  const contextState = useHeaderContext<
    HeaderContextValueTypeInstance<FilterStateType> &
      // FiltersVariables - добавляется в месте, где создается контекст
      FiltersVariables
  >();

  const columnSorted = contextState.sortState?.find(
    (el) => el.columnKey === rest.column.key,
  );

  // contextState.filtersAreVisible
  const filterIconIsVisible = tableConfigFiltering && columnConfig.filtering;

  // contextState.sortIsVisible;
  const sortIconIsVisible = tableConfigSorting && columnConfig.sortingType;

  const subRowExpandAllButtonIsVisible =
    !columnConfig.subRow?.hideHeaderExpandAllArrow;

  const subRowExpandAllButtonIsHave =
    subRowIsActiveAndColumnWithArrow && subRowExpandAllButtonIsVisible;

  const sortingCondition =
    columnSorted?.columnKey === rest.column.key || contextState.sortIsVisible;

  return (
    <Box className={tableClassNames.headerCellContainer}>
      {(subRowExpandAllButtonIsHave ||
        reorderInHeaderIsActive ||
        columnIsPinned) && (
        <Box className={tableClassNames.headerCellLeftIcons}>
          {subRowExpandAllButtonIsHave && <ExpandAllButton />}
          {reorderInHeaderIsActive && (
            <Box $css="display: inline;">
              <TableTooltip
                animated
                placement="top"
                target={<IconDrag color={textTertiary} size="xs" />}
                text="Перетащить колонку"
              />
            </Box>
          )}
          {columnIsPinned && (
            <Box $css="display: inline;">
              <TableTooltip
                animated
                placement="top"
                target={<IconPinFill color={textSecondary} size="xs" />}
                text="Колонка закреплена"
              />
            </Box>
          )}
        </Box>
      )}
      {typeof rest.column.name === 'string' ? (
        <TypographyWithAutoTooltip
          tooltipText={rest.column.name}
          className={tableClassNames.headerCellTextContent}
          variant="BodyXS"
          tooltipProps={{
            placement: 'top',
          }}
        >
          {rest.column.name}
        </TypographyWithAutoTooltip>
      ) : (
        <BodyXS className={tableClassNames.headerCellTextContent}>
          {rest.column.name}
        </BodyXS>
      )}

      {(filterIconIsVisible || sortIconIsVisible) && (
        <Box className={tableClassNames.headerCellRightIcons}>
          {filterIconIsVisible && (
            <Box>
              <HeaderFilterButton {...{ columnConfig, tabIndex }} />
            </Box>
          )}
          {sortIconIsVisible && (
            <Box
              className={`${tableClassNames.headerCellFilterSorting} ${
                sortingCondition
                  ? tableClassNames.headerCellSortingIsActive
                  : ''
              } ${tableClassNames.headerCellSortingIsAvailable}`}
            >
              <HeaderSortButton
                columnKey={rest.column.key}
                columnSorted={columnSorted}
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                setSortState={contextState.setSortState!}
              />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}
