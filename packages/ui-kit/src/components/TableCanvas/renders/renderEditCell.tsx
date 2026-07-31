import { useRowContext } from '../contexts';
import {
  CellEditorComboboxInternal,
  CellEditorNumberFormatInternal,
  CellEditorTextAreaInternal,
} from '../feature-edit';
import type { KeyText } from '../feature-key-text/types';
import { ExpandDetailButtonComponent } from '../feature-row-detail';
import { useRowDetailHandlerContext } from '../feature-row-detail/ctx';
import { rowIsHaveDetailPanel } from '../feature-row-detail/handlers';
import { RowDetailConfig } from '../feature-row-detail/types';
import { ChevronTreeBtn } from '../feature-tree';
import { SUBROWS_KEY } from '../feature-tree/constants';
import { getHasArrow, getTreeIdAndLvlOfRow } from '../feature-tree/handlers';
import {
  ColumnConfig,
  EditingCellInfo,
  ObjectForExtending,
  TableConfig,
} from '../types';
import { CLASS } from './constants';
import { StyledCellContainer, SubRowContainer } from './styled';

export const RenderEditCell = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  editingCellInfo,
  column,
  tableConfigSubRows,
  tableConfigRowDetailPanel,
  keyText,
}: {
  editingCellInfo: EditingCellInfo<RowType, SummaryRowType>;
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
  const { row } = editingCellInfo;

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

  const defaultLvl0RenderElement = (
    disableLeftOffsetStr?: 'disableLeftOffset',
  ) => {
    const disableLeftOffset = !!disableLeftOffsetStr;
    if (!column.editingCell) {
      return undefined;
    }
    if (column.editingCell.component === 'inputString') {
      return (
        <CellEditorTextAreaInternal
          {...editingCellInfo}
          disableLeftOffset={disableLeftOffset}
        />
      );
    }
    if (column.editingCell.component === 'inputNumber') {
      return (
        <CellEditorNumberFormatInternal
          {...editingCellInfo}
          formatOptions={column?.contentFormat}
          disableLeftOffset={disableLeftOffset}
        />
      );
    }
    if (column.editingCell.component === 'select') {
      return (
        <CellEditorComboboxInternal
          {...editingCellInfo}
          disableLeftOffset={disableLeftOffset}
        />
      );
    }

    return column.editingCell.component(editingCellInfo, 0, disableLeftOffset);
  };

  const tableConfigSubrowsActivated = !!tableConfigSubRows;
  const tableConfigRowDetailActivated = !!tableConfigRowDetailPanel;

  // ------------------------------- DEFAULT (NO SUBROWS & NO ROWDETAIL) -------------------------------
  if (!tableConfigSubrowsActivated && !tableConfigRowDetailActivated) {
    return defaultLvl0RenderElement();
  }

  const cellIsHaveDetailExpandButton = () =>
    rowIsHaveDetailPanel(row) && column.key === expandButtonColumnKey;
  // ------------------------------- DEFAULT (NO SUBROWS & HAVE ROWDETAIL)----------------------------------------------------
  if (!tableConfigSubrowsActivated && tableConfigRowDetailActivated) {
    if (!cellIsHaveDetailExpandButton()) {
      return defaultLvl0RenderElement();
    }

    return (
      <StyledCellContainer className={CLASS.editableCellWithExpandButton}>
        {defaultLvl0RenderElement()}

        <ExpandDetailButtonComponent
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
      return defaultLvl0RenderElement();
    }
    const subRows = tableConfigSubRows?.getSubRows?.(row);

    const hasChildren = tableConfigSubrowsActivated && !!subRows?.length;
    const hasChildrenAndArrow = columnHasArrow && hasChildren;

    const hasExpandDetailButton =
      tableConfigRowDetailActivated && cellIsHaveDetailExpandButton();

    if (!columnHasArrow && !hasExpandDetailButton) {
      return defaultLvl0RenderElement();
    }

    if (!columnHasArrow && hasExpandDetailButton) {
      return (
        <StyledCellContainer className={CLASS.editableCellWithExpandButton}>
          {defaultLvl0RenderElement()}

          <ExpandDetailButtonComponent
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
          $rowSize: rowSize,
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
        {defaultLvl0RenderElement('disableLeftOffset')}
        {hasExpandDetailButton && (
          <ExpandDetailButtonComponent
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

  const defaultLvlNot0RenderElement = (
    disableLeftOffsetStr?: 'disableLeftOffset',
  ) => {
    const disableLeftOffset = !!disableLeftOffsetStr;

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
      editingCellInfo;

    const columnFinal: typeof column = {
      ...parentColumn,
      // для subRow переопределяем ключ
      ...(!parentKeyAsSubKey && {
        key: getSubRowColumnKey(),
      }),
      // для subRow переопределяем editingCell
      editingCell: column.subRow.editingCell,
    };

    const renderSubRowEditCellProps = {
      ...restRenderEditCellProps,

      column: columnFinal as typeof parentColumn,
    };

    if (column.subRow.editingCell.component === 'inputString') {
      return (
        <CellEditorTextAreaInternal
          {...renderSubRowEditCellProps}
          disableLeftOffset={disableLeftOffset}
        />
      );
    }
    if (column.subRow.editingCell.component === 'inputNumber') {
      return (
        <CellEditorNumberFormatInternal
          {...renderSubRowEditCellProps}
          formatOptions={column?.contentFormat}
          disableLeftOffset={disableLeftOffset}
        />
      );
    }
    if (column.subRow.editingCell.component === 'select') {
      return (
        <CellEditorComboboxInternal
          {...renderSubRowEditCellProps}
          disableLeftOffset={disableLeftOffset}
        />
      );
    }
    return column.subRow.editingCell.component(
      renderSubRowEditCellProps,
      lvl,
      disableLeftOffset,
    );
  };

  const subRows = tableConfigSubRows?.getSubRows?.(row);

  const hasChildren = tableConfigSubrowsActivated && !!subRows?.length;

  const hasChildrenAndArrow = columnHasArrow && hasChildren;

  if (!columnHasArrow && !columnHasExpandButton) {
    return defaultLvlNot0RenderElement();
  }

  if (!columnHasArrow && columnHasExpandButton) {
    return (
      <StyledCellContainer className={CLASS.editableCellWithExpandButton}>
        {defaultLvlNot0RenderElement()}

        <ExpandDetailButtonComponent
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
        $rowSize: rowSize,
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
      {defaultLvlNot0RenderElement('disableLeftOffset')}
      {columnHasExpandButton && (
        <ExpandDetailButtonComponent
          className={CLASS.expandDetailButton}
          row={row}
          handleExpandRowDetail={handleExpandRowDetail}
        />
      )}
    </SubRowContainer>
  );
};
