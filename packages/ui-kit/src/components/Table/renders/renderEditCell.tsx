import React from 'react';
import { RenderEditCellProps } from 'react-data-grid';

import { useRowContext } from '../contexts';
import { TextEditorNumber, TextEditorString } from '../feature-edit';
import { SelectEditor } from '../feature-edit/selectEditor';
import type { KeyText } from '../feature-key-text/types';
import { ExpandDetailButton } from '../feature-row-detail';
import { useRowDetailHandlerContext } from '../feature-row-detail/ctx';
import { rowIsHaveDetailPanel } from '../feature-row-detail/handlers';
import { RowDetailConfig } from '../feature-row-detail/types';
import { ChevronTreeBtn } from '../feature-tree';
import { SUBROWS_KEY } from '../feature-tree/constants';
import { getHasArrow, getTreeIdAndLvlOfRow } from '../feature-tree/handlers';
import { ColumnConfig, ObjectForExtending, TableConfig } from '../types';
import { CLASS } from './constants';
import { StyledCellContainer, SubRowContainer } from './styled';

export const RenderEditCell = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  renderEditCellProps,
  column,
  tableConfigSubRows,
  tableConfigRowDetailPanel,
  keyText
}: {
  renderEditCellProps: RenderEditCellProps<RowType, SummaryRowType>;
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
}) => {
  const { row } = renderEditCellProps;

  const { handleExpandRowDetail, expandButtonColumnKey } =
    useRowDetailHandlerContext();

  const { rowSize } = useRowContext();
  // TODO  режим редактирования detailPanel  - выключен и убран из типов, если будет потребность, нужно доработать
  // if (isDetailPanelRow(row)) {
  //     const { isEmptyCell } = isEmptyDetailPanelCell(
  //         row,
  //         currIndex,
  //         indexZeroColKey
  //     );

  //     if (isEmptyCell) {
  //         return null;
  //     }
  //     const rowData = getDetailPanelRowData(row);
  //     const RenderFunc = getDetailPanelEdtingRender(row);

  //     if (!RenderFunc) {
  //         return null;
  //     }

  //     return <RenderFunc {...{ row: rowData, onRowChange, onClose }} />;
  // }

  const defaultLvl0RenderElement = (() => {
    if (!column.editingCell) {
      return undefined;
    }
    if (column.editingCell.component === 'inputString') {
      return <TextEditorString {...renderEditCellProps} />;
    }
    if (column.editingCell.component === 'inputNumber') {
      return (
        <TextEditorNumber
          {...renderEditCellProps}
          formatOptions={column?.contentFormat}
        />
      );
    }
    if (column.editingCell.component === 'select') {
      return <SelectEditor columnConfig={column} {...renderEditCellProps} />;
    }
    return column.editingCell.component(
      renderEditCellProps as RenderEditCellProps<RowType, unknown>,
      0
    );
  })();

  const tableConfigSubrowsActivated = !!tableConfigSubRows;
  const tableConfigRowDetailActivated = !!tableConfigRowDetailPanel;

  // ------------------------------- DEFAULT (NO SUBROWS & NO ROWDETAIL) -------------------------------
  if (!tableConfigSubrowsActivated && !tableConfigRowDetailActivated) {
    return defaultLvl0RenderElement;
  }

  const cellIsHaveDetailExpandButton = () =>
    rowIsHaveDetailPanel(row) && column.key === expandButtonColumnKey;
  // ------------------------------- DEFAULT (NO SUBROWS & HAVE ROWDETAIL)----------------------------------------------------
  if (!tableConfigSubrowsActivated && tableConfigRowDetailActivated) {
    if (!cellIsHaveDetailExpandButton()) {
      return defaultLvl0RenderElement;
    }

    return (
      <StyledCellContainer className={CLASS.editableCellWithExpandButton}>
        {defaultLvl0RenderElement}

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

  const columnHasArrow = getHasArrow(column.subRow?.isColumnWithArrow, keyText);
  const columnHasExpandButton = cellIsHaveDetailExpandButton();

  // ------------------------------- LVL 0 RENDER ---------------------------------------
  if (lvl === 0) {
    if (!columnHasArrow && !columnHasExpandButton) {
      return defaultLvl0RenderElement;
    }
    const subRows = tableConfigSubRows?.getSubRows?.(row);

    const hasChildren = tableConfigSubrowsActivated && !!subRows?.length;
    const hasChildrenAndArrow = columnHasArrow && hasChildren;

    const hasExpandDetailButton =
      tableConfigRowDetailActivated && cellIsHaveDetailExpandButton();

    if (!columnHasArrow && !hasExpandDetailButton) {
      return defaultLvl0RenderElement;
    }

    if (!columnHasArrow && hasExpandDetailButton) {
      return (
        <StyledCellContainer className={CLASS.editableCellWithExpandButton}>
          {defaultLvl0RenderElement}

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
        className={CLASS.editableCellWithExpandButton}
        $lvl={lvl}
        $hasChildren={hasChildrenAndArrow}
        $editingMode={{
          $columnHasArrow: columnHasArrow,
          $rowSize: rowSize
        }}
      >
        {hasChildrenAndArrow && (
          <ChevronTreeBtn
            tabIndex={undefined}
            className={CLASS.expandTreeButton}
            row={row}
            tableConfigSubRows={tableConfigSubRows}
          />
        )}
        {defaultLvl0RenderElement}
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

  const defaultLvlNot0RenderElement = (() => {
    if (!column.subRow) {
      return undefined;
    }
    if (!column.subRow.editingCell) {
      return undefined;
    }
    const parentKeyAsSubKey = column.subRow.parentKeyAsDefault;

    const getSubRowColumnKey = (): string => {
      if (column?.subRow?.keyOfColumnInSubRow) {
        return typeof column.subRow.keyOfColumnInSubRow === 'function'
          ? column.subRow.keyOfColumnInSubRow(lvl).toString()
          : column.subRow.keyOfColumnInSubRow.toString();
      }
      if (column?.subRow?.parentKeyAsDefault) {
        return column.key;
      }
      return '';
    };

    const { column: parentColumn, ...restRenderEditCellProps } =
      renderEditCellProps;

    const columnFinal: typeof column = {
      ...parentColumn,
      // для subRow переопределяем ключ
      ...(!parentKeyAsSubKey && {
        key: getSubRowColumnKey()
      }),
      // для subRow переопределяем editingCell
      editingCell: column.subRow.editingCell
    };

    const renderSubRowEditCellProps = {
      ...restRenderEditCellProps,

      column: columnFinal as typeof parentColumn
    };

    if (column.subRow.editingCell.component === 'inputString') {
      return <TextEditorString {...renderSubRowEditCellProps} />;
    }
    if (column.subRow.editingCell.component === 'inputNumber') {
      return (
        <TextEditorNumber
          {...renderSubRowEditCellProps}
          formatOptions={column?.contentFormat}
        />
      );
    }
    if (column.subRow.editingCell.component === 'select') {
      return (
        <SelectEditor columnConfig={column} {...renderSubRowEditCellProps} />
      );
    }
    return column.subRow.editingCell.component(
      renderSubRowEditCellProps as RenderEditCellProps<
        ObjectForExtending,
        unknown
      >,
      lvl
    );
  })();

  const subRows = tableConfigSubRows?.getSubRows?.(row);

  const hasChildren = tableConfigSubrowsActivated && !!subRows?.length;

  const hasChildrenAndArrow = columnHasArrow && hasChildren;

  if (!columnHasArrow && !columnHasExpandButton) {
    return defaultLvlNot0RenderElement;
  }

  if (!columnHasArrow && columnHasExpandButton) {
    return (
      <StyledCellContainer className={CLASS.editableCellWithExpandButton}>
        {defaultLvlNot0RenderElement}

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
      className={CLASS.editableCellWithExpandButton}
      $lvl={lvl}
      $hasChildren={hasChildrenAndArrow}
      $editingMode={{
        $columnHasArrow: columnHasArrow,
        $rowSize: rowSize
      }}
    >
      {hasChildrenAndArrow && (
        <ChevronTreeBtn
          className={CLASS.expandTreeButton}
          tabIndex={undefined}
          row={row}
          tableConfigSubRows={tableConfigSubRows}
        />
      )}
      {defaultLvlNot0RenderElement}
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
