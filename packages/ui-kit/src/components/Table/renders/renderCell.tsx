import { RectSkeleton } from '@ui-kit/components/Skeleton';
import { mergeClasses } from '@ui-kit/utils';
import React, { ReactNode } from 'react';
import { RenderCellProps } from 'react-data-grid';

import {
  SKELETON_CELLS_KEY,
  SKELETON_ROW_KEY,
  SkeletonCells
} from '../feature-infinity-scroll';
import type { KeyText } from '../feature-key-text/types';
import { ExpandDetailButton } from '../feature-row-detail';
import { useRowDetailHandlerContext } from '../feature-row-detail/ctx';
import {
  getDetailPanelRender,
  getDetailPanelRowData,
  isDetailPanelRow,
  isEmptyDetailPanelCell,
  rowIsHaveDetailPanel
} from '../feature-row-detail/handlers';
import { RowDetailConfig } from '../feature-row-detail/types';
import { ROW_I_COLUMN_KEY } from '../feature-row-instruments';
import { CHECKBOX_COLUMN_KEY } from '../feature-select-row';
import { ChevronTreeBtn } from '../feature-tree';
import { SUBROWS_KEY } from '../feature-tree/constants';
import { getHasArrow, getTreeIdAndLvlOfRow } from '../feature-tree/handlers';
import {
  ColumnConfig,
  ContentFormat,
  ObjectForExtending,
  TableConfig
} from '../types';
import { CLASS } from './constants';
import { FormattedContent } from './formatCell';
import { StyledCellContainer, SubRowContainer } from './styled';
import { withSelectIcon } from './withSelectIcon';

export const RenderCell = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  renderCellProps,
  column,
  tableConfigSubRows,
  currIndex,
  indexZeroColKey,
  tableConfigRowDetailPanel,
  keyText,
  editModeEnabled
}: {
  renderCellProps: RenderCellProps<RowType, SummaryRowType>;
  column: ColumnConfig<RowType, SummaryRowType>;
  tableConfigSubRows: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
  >[typeof SUBROWS_KEY];

  tableConfigRowDetailPanel: RowDetailConfig<RowType> | undefined;
  currIndex: number;
  indexZeroColKey: string | undefined;
  keyText: KeyText;
  editModeEnabled: boolean;
}) => {
  const {
    row,
    tabIndex,
    onRowChange,
    column: { idx },
    rowIdx
  } = renderCellProps;

  const { handleExpandRowDetail, expandButtonColumnKey } =
    useRowDetailHandlerContext();

  const isSelectColumn = column?.editingCell?.component === 'select';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((row as any)?.[SKELETON_ROW_KEY]) {
    return <RectSkeleton roundness={8} width="100%" height="100%" lighter />;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const skeletonCells = (row as any)?.[SKELETON_CELLS_KEY] as
    | SkeletonCells
    | undefined;

  if (skeletonCells && skeletonCells.has(column.key)) {
    return <RectSkeleton roundness={8} width="100%" height="100%" lighter />;
  }

  if (isDetailPanelRow(row)) {
    const { isEmptyCell } = isEmptyDetailPanelCell(
      renderCellProps.row,
      currIndex,
      indexZeroColKey
    );

    if (isEmptyCell) {
      return null;
    }
    const rowData = getDetailPanelRowData(row);
    const RenderFunc = getDetailPanelRender(row);

    return (
      <RenderFunc
        {...{
          row: rowData,
          tabIndex,
          onRowChange,
          rowIdx,
          colIdx: idx
        }}
      />
    );
  }

  const defaultLvl0RenderElement = column.renderCell
    ? column.renderCell(renderCellProps)
    : FormattedContent(row?.[column.key], column.contentFormat);

  const tableConfigSubrowsActivated = !!tableConfigSubRows;
  const tableConfigRowDetailActivated = !!tableConfigRowDetailPanel;

  // ------------------------------- DEFAULT (NO SUBROWS & NO ROWDETAIL) -------------------------------
  if (!tableConfigSubrowsActivated && !tableConfigRowDetailActivated) {
    return withSelectIcon(
      defaultLvl0RenderElement,
      isSelectColumn,
      editModeEnabled
    );
  }
  const cellIsHaveDetailExpandButton = () =>
    rowIsHaveDetailPanel(row) && column.key === expandButtonColumnKey;
  // ------------------------------- DEFAULT (NO SUBROWS & HAVE ROWDETAIL) ----------------------------------------------------
  if (!tableConfigSubrowsActivated && tableConfigRowDetailActivated) {
    if (!cellIsHaveDetailExpandButton()) {
      return withSelectIcon(
        defaultLvl0RenderElement,
        isSelectColumn,
        editModeEnabled
      );
    }

    return (
      <StyledCellContainer className={CLASS.cellWithExpandButton}>
        {withSelectIcon(
          defaultLvl0RenderElement,
          isSelectColumn,
          editModeEnabled
        )}

        <ExpandDetailButton
          className={CLASS.expandDetailButton}
          row={row}
          handleExpandRowDetail={handleExpandRowDetail}
        />
      </StyledCellContainer>
    );
  }
  // ----------------------------------------------------------------------------------------------------------------------------

  const { lvl } = getTreeIdAndLvlOfRow(row);
  const isSelectColumnForRow =
    lvl === 0
      ? isSelectColumn
      : column?.subRow?.editingCell?.component === 'select';
  const columnHasArrow = getHasArrow(column.subRow?.isColumnWithArrow, keyText);
  const columnHasExpandButton = cellIsHaveDetailExpandButton();

  // ------------------------------- LVL 0 RENDER ---------------------------------------
  if (lvl === 0) {
    if (!columnHasArrow && !columnHasExpandButton) {
      return withSelectIcon(
        defaultLvl0RenderElement,
        isSelectColumn,
        editModeEnabled
      );
    }

    const subRows = tableConfigSubRows?.getSubRows?.(row);

    const hasChildren = tableConfigSubrowsActivated && !!subRows?.length;

    const hasChildrenAndArrow = columnHasArrow && hasChildren;

    const hasExpandDetailButton =
      tableConfigRowDetailActivated && cellIsHaveDetailExpandButton();

    if (!columnHasArrow && !hasExpandDetailButton) {
      return withSelectIcon(
        defaultLvl0RenderElement,
        isSelectColumn,
        editModeEnabled
      );
    }

    if (!columnHasArrow && hasExpandDetailButton) {
      return (
        <StyledCellContainer className={CLASS.cellWithExpandButton}>
          {withSelectIcon(
            defaultLvl0RenderElement,
            isSelectColumn,
            editModeEnabled
          )}

          <ExpandDetailButton
            className={CLASS.expandDetailButton}
            row={row}
            handleExpandRowDetail={handleExpandRowDetail}
          />
        </StyledCellContainer>
      );
    }

    return (
      <SubRowContainer
        $lvl={lvl}
        $hasChildren={hasChildrenAndArrow}
        $editingMode={false}
        className={CLASS.cellWithExpandButton}
      >
        {hasChildrenAndArrow && (
          <ChevronTreeBtn
            className={CLASS.expandTreeButton}
            tabIndex={tabIndex}
            row={row}
            tableConfigSubRows={tableConfigSubRows}
          />
        )}
        {withSelectIcon(
          defaultLvl0RenderElement,
          isSelectColumn,
          editModeEnabled
        )}
        {hasExpandDetailButton && (
          <ExpandDetailButton
            className={CLASS.expandDetailButton}
            row={row}
            handleExpandRowDetail={handleExpandRowDetail}
          />
        )}
      </SubRowContainer>
    );
  }
  // ------------------------------------------------------------------------------------

  // ------------------------------- SUBROWS RENDER -------------------------------------

  const defaultLvlNot0RenderElement: ReactNode = (() => {
    if (column.key === CHECKBOX_COLUMN_KEY && column.renderCell) {
      return column.renderCell(renderCellProps);
    }
    if (column.key === ROW_I_COLUMN_KEY && column.renderCell) {
      return column.renderCell(renderCellProps);
    }

    if (column.subRow?.renderSubRowCell) {
      return column.subRow.renderSubRowCell(
        renderCellProps as RenderCellProps<ObjectForExtending, unknown>,
        lvl
      );
    }

    const getContentFormat = (): ContentFormat | undefined =>
      column.subRow?.contentFormat ?? column.contentFormat;

    if (column.subRow?.parentKeyAsDefault) {
      return FormattedContent(row?.[column.key], getContentFormat());
    }

    if (column.subRow?.keyOfColumnInSubRow) {
      const subKey =
        typeof column.subRow.keyOfColumnInSubRow === 'function'
          ? column.subRow.keyOfColumnInSubRow(lvl)
          : column.subRow.keyOfColumnInSubRow;

      return FormattedContent(row?.[subKey], getContentFormat());
    }
    return null;
    // return row?.[column.key];
  })();

  const subRows = tableConfigSubRows?.getSubRows?.(row);

  const hasChildren = tableConfigSubrowsActivated && !!subRows?.length;

  const hasChildrenAndArrow = columnHasArrow && hasChildren;

  if (!columnHasArrow && !columnHasExpandButton) {
    return withSelectIcon(
      defaultLvlNot0RenderElement,
      isSelectColumnForRow,
      editModeEnabled
    );
  }

  if (!columnHasArrow && columnHasExpandButton) {
    return (
      <StyledCellContainer className={CLASS.cellWithExpandButton}>
        {withSelectIcon(
          defaultLvlNot0RenderElement,
          isSelectColumnForRow,
          editModeEnabled
        )}

        <ExpandDetailButton
          className={CLASS.expandDetailButton}
          row={row}
          handleExpandRowDetail={handleExpandRowDetail}
        />
      </StyledCellContainer>
    );
  }

  return (
    <SubRowContainer
      $lvl={lvl}
      $hasChildren={hasChildrenAndArrow}
      $editingMode={false}
      className={CLASS.cellWithExpandButton}
    >
      {hasChildrenAndArrow && (
        <ChevronTreeBtn
          className={CLASS.expandTreeButton}
          tabIndex={tabIndex}
          row={row}
          tableConfigSubRows={tableConfigSubRows}
        />
      )}
      {withSelectIcon(
        <span
          className={mergeClasses(CLASS.cellContent, CLASS.subRowCell)}
          title={
            typeof defaultLvlNot0RenderElement === 'string' ||
            typeof defaultLvlNot0RenderElement === 'number'
              ? defaultLvlNot0RenderElement.toString()
              : undefined
          }
        >
          {defaultLvlNot0RenderElement}
        </span>,
        isSelectColumnForRow,
        editModeEnabled
      )}

      {columnHasExpandButton && (
        <ExpandDetailButton
          className={CLASS.expandDetailButton}
          row={row}
          handleExpandRowDetail={handleExpandRowDetail}
        />
      )}
    </SubRowContainer>
  );
};
