/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/dot-notation */
import React, { useMemo } from 'react';

import { hideRowServiceKeysHandler } from '../data/hideServiceKeysHanlder';
import { isServiceEditableColumn } from '../feature-edit';
import { isEditableCell } from '../feature-edit/typeGuards';
import { SKELETON_ROW_KEY } from '../feature-infinity-scroll';
import { getColsWithKeyText } from '../feature-key-text';
import type { KeyText, KeyTextMap } from '../feature-key-text/types';
import { useReorderDragable } from '../feature-reorder-columns/useReorderDragable';
import {
  getDetailPanelColSpanFunc,
  isDetailPanelRow,
} from '../feature-row-detail/handlers';
import {
  isRowInstrumentsColumn,
  ROW_I_COL_ACTIVE,
  ROW_I_COLUMN_KEY,
  RowIColumn,
} from '../feature-row-instruments';
import {
  getColsAfterRowsGrouping,
  KEY_GROUPED_COL,
} from '../feature-rows-grouping';
import { ChecboxColumn, CHECKBOX_COLUMN_KEY } from '../feature-select-row';
import { SelectingCheckBoxCellContextProvider } from '../feature-select-row/selecting-contexts';
import { getHasArrow, getTreeIdAndLvlOfRow } from '../feature-tree/handlers';
import { RenderCell } from '../renders/renderCell';
import { RenderEditCell } from '../renders/renderEditCell';
import { tableClassNames as cls } from '../styles/classNames';
import { ColumnConfig, ObjectForExtending } from '../types';
import { ColumnConfigInternal } from '../types/column-config-internal.type';
import { TableConfig } from '../types/table-config.type';
import { calculateMinColumnWidth } from '../utils';
import { getCls } from '../utils/classNames';
import { FilterSortHeader } from '../widgets';

export const useColumns = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  columnConfig,
  tableConfig,
  selectingRowsIsActive,
  isLoadingTable,
  pinnedCols,
  hiddenCols,
  reorderIsActive,
  reorderInHeaderIsActive,
  showRowInstruments,
  keyText,
  tableConfigKeyTextBoolean,
  colsWithKeyTextMap,
  editModeEnabled,
}: {
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
  tableConfig: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
    // SubRowType
  >;
  selectingRowsIsActive: boolean;
  isLoadingTable: boolean;
  pinnedCols: string[];
  hiddenCols: string[];
  reorderIsActive: boolean;
  reorderInHeaderIsActive: boolean;
  showRowInstruments: boolean;
  keyText: KeyText;
  tableConfigKeyTextBoolean: boolean;
  colsWithKeyTextMap: KeyTextMap;
  editModeEnabled: boolean;
}) => {
  type ColumnX = ColumnConfigInternal<RowType, SummaryRowType>;

  const tableConfigFiltering = !!tableConfig.filtering;
  const tableConfigSorting = !!tableConfig.sorting;
  const tableConfigEditing = editModeEnabled;

  const tableConfigRowsGroupingBoolean = !!tableConfig.rowsGrouping;

  const tableConfigSubRows = !!tableConfig.subRows;
  const tableConfigRowDetailBoolean = !!tableConfig.rowDetailPanel;

  const groupedCols = (tableConfig.rowsGrouping ?? {})?.groupByState?.[0];

  const columns = useMemo((): readonly ColumnX[] => {
    const colsAfterRowsGroupingCheck = getColsAfterRowsGrouping({
      rowsGroupingIsActiveInConfig: tableConfigRowsGroupingBoolean,
      groupByArr: groupedCols ?? [],
      columnConfig,
      tableConfigGroupedColumnProps:
        tableConfig.rowsGrouping?.groupedColumnProps,
      pinnedCols,
    });

    // Динамическое создание чекбокс колонки с дополнительным классом при активном rowInstruments
    const checkboxColumn = selectingRowsIsActive
      ? showRowInstruments
        ? ({
            ...ChecboxColumn,
            cellClass: `${ChecboxColumn?.cellClass ?? ''} ${ROW_I_COL_ACTIVE}`,
            headerCellClass: `${
              ChecboxColumn?.headerCellClass ?? ''
            } ${ROW_I_COL_ACTIVE}`,
            summaryCellClass: `${
              ChecboxColumn?.summaryCellClass ?? ''
            } ${ROW_I_COL_ACTIVE}`,
          } as ColumnX)
        : (ChecboxColumn as ColumnX)
      : null;

    const colsAfterSelectingCheck = [
      ...(selectingRowsIsActive ? [checkboxColumn as ColumnX] : []),
      ...(showRowInstruments ? [RowIColumn as ColumnX] : []),
      ...colsAfterRowsGroupingCheck,
    ];

    const colsAfterKeyTextCheck = tableConfigKeyTextBoolean
      ? getColsWithKeyText(colsAfterSelectingCheck, keyText)
      : colsAfterSelectingCheck;

    const hiddenColsSet = new Set(hiddenCols);

    const colsAfterHideCheck = hiddenColsSet.size
      ? colsAfterKeyTextCheck.filter((c) => !hiddenColsSet.has(c.key))
      : colsAfterKeyTextCheck;

    const pinnedColsSet = new Set(pinnedCols);

    return colsAfterHideCheck.map((el, currIndex, arr) => {
      const columnIsPinned = pinnedColsSet.has(el.key);

      const indexZeroColKey = arr[0]?.key;

      const reorderForColIsActive =
        reorderInHeaderIsActive &&
        !isRowInstrumentsColumn(el.key) &&
        !(el.key === KEY_GROUPED_COL);

      const subRowIsActiveAndColumnWithArrow =
        tableConfigSubRows &&
        getHasArrow(el.subRow?.isColumnWithArrow, keyText);

      const isHaveFiltering = !!el.filtering;
      const isHaveSorting = !!el.sortingType;

      const editable: ColumnX['editable'] = (row) => {
        if (isServiceEditableColumn(el)) {
          return true;
        }

        if (!tableConfigEditing || isLoadingTable) {
          return false;
        }

        if (tableConfigRowDetailBoolean && isDetailPanelRow(row)) {
          // TODO  режим редактирования detailPanel  - выключен и убран из типов, если будет потребность, нужно доработать
          // return isEditableDetailPanel(row);
          return false;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((row as any)?.[SKELETON_ROW_KEY]) {
          return false;
        }

        const tableConfigSubrowsActivated = tableConfigSubRows;

        const rowEditable = tableConfig?.editing?.rowEditable;
        // если  subRow НЕ активированы, то смотрим только на конфиг родительской строки
        if (!tableConfigSubrowsActivated) {
          return isEditableCell(el.editingCell, row, rowEditable);
        }
        const { lvl } = getTreeIdAndLvlOfRow(row);

        // если lvl === 0, то смотрим только на конфиг родительской строки
        if (lvl === 0) {
          return isEditableCell(el.editingCell, row, rowEditable);
        }

        // если lvl !== 0, то смотрим только на конфиг дочерних строк
        return isEditableCell(el.subRow?.editingCell, row, rowEditable);
      };

      let renderHeaderCell: typeof el.renderHeaderCell;
      (() => {
        if (el.key === CHECKBOX_COLUMN_KEY) {
          renderHeaderCell = el.renderHeaderCell;
          return;
        }
        if (el.key === ROW_I_COLUMN_KEY) {
          renderHeaderCell = el.renderHeaderCell;
          return;
        }

        if (el.renderHeaderCell) {
          renderHeaderCell = el.renderHeaderCell;
          return;
        }

        if (
          !tableConfigFiltering &&
          !tableConfigSorting &&
          !reorderInHeaderIsActive &&
          !columnIsPinned &&
          !subRowIsActiveAndColumnWithArrow
        ) {
          renderHeaderCell = el.renderHeaderCell;
          return;
        }

        if (
          !el.filtering &&
          !el.sortingType &&
          !reorderInHeaderIsActive &&
          !columnIsPinned &&
          !subRowIsActiveAndColumnWithArrow
        ) {
          renderHeaderCell = el.renderHeaderCell;
          return;
        }

        renderHeaderCell = (p) => (
          <FilterSortHeader
            columnConfig={el}
            tableConfigSorting={tableConfigSorting}
            tableConfigFiltering={tableConfigFiltering}
            columnIsPinned={columnIsPinned}
            reorderInHeaderIsActive={reorderForColIsActive}
            subRowIsActiveAndColumnWithArrow={subRowIsActiveAndColumnWithArrow}
            {...p}
          />
        );
      })();
      const renderCell: typeof el.renderCell = (renderCellProps) => {
        const Cell = (
          <RenderCell<FilterStateType, RowIdType, RowType, SummaryRowType>
            renderCellProps={renderCellProps}
            column={el}
            tableConfigSubRows={tableConfig.subRows}
            tableConfigRowDetailPanel={tableConfig.rowDetailPanel}
            currIndex={currIndex}
            indexZeroColKey={indexZeroColKey}
            keyText={keyText}
            editModeEnabled={editable(renderCellProps.row)}
          />
        );

        if (el.key === CHECKBOX_COLUMN_KEY) {
          return (
            <SelectingCheckBoxCellContextProvider {...renderCellProps}>
              {Cell}
            </SelectingCheckBoxCellContextProvider>
          );
        }
        return Cell;
      };

      const renderEditCell: ColumnX['renderEditCell'] = (() => {
        if (isServiceEditableColumn(el)) {
          return el.renderEditCell;
        }

        if (!tableConfigEditing || isLoadingTable) {
          return undefined;
        }

        // eslint-disable-next-line react/no-unstable-nested-components
        return (renderEditCellProps) => (
          <RenderEditCell
            renderEditCellProps={renderEditCellProps}
            column={el}
            tableConfigSubRows={tableConfig.subRows}
            tableConfigRowDetailPanel={tableConfig.rowDetailPanel}
            currIndex={currIndex}
            indexZeroColKey={indexZeroColKey}
            keyText={keyText}
          />
        );
      })();

      const resizable = tableConfig.resizableColumn && el.resizable;

      const colSpan = tableConfigRowDetailBoolean
        ? getDetailPanelColSpanFunc({
            indexZeroColKey,
            currIndex,
            arr,
            columnColSpan: el.colSpan,
          })
        : el.colSpan;

      const cellClass: typeof el.cellClass = (() => {
        if (!el?.cellClass && (!editModeEnabled || !el.editingCell)) {
          return undefined;
        }
        return (row) => {
          let className = '';

          const { lvl } = getTreeIdAndLvlOfRow(row);

          const clearRow = hideRowServiceKeysHandler(row);
          const defaultCls = getCls(el?.cellClass, clearRow);
          if (defaultCls) {
            className += ` ${defaultCls}`;
          }
          if (!editModeEnabled) {
            return className || undefined;
          }

          if (editable(row)) {
            className += ` ${cls.editableCell}`;
          }
          const editedSuccessfullyClass =
            (lvl === 0
              ? // если lvl === 0, то смотрим только на конфиг родительской строки
                el.editingCell?.editedSuccessfully?.value(clearRow, lvl)
              : // если lvl !== 0, то смотрим только на конфиг дочерних строк
                el.subRow?.editingCell?.editedSuccessfully?.value(
                  clearRow,
                  lvl,
                )) && cls.editedSuccessfullyCell;

          if (editedSuccessfullyClass) {
            className += ` ${editedSuccessfullyClass}`;
          }

          const errorClass =
            (lvl === 0
              ? // если lvl === 0, то смотрим только на конфиг родительской строки
                el.editingCell?.error?.value(clearRow, lvl)
              : // если lvl !== 0, то смотрим только на конфиг дочерних строк
                el.subRow?.editingCell?.error?.value(clearRow, lvl)) &&
            cls.editedWithErrorCell;

          if (errorClass) {
            className += ` ${errorClass}`;
          }

          return className || undefined;
        };
      })();

      return {
        ...el,

        renderHeaderCell,
        minWidth:
          el.minWidth ??
          calculateMinColumnWidth({
            isHaveFiltering,
            isHaveSorting,
            columnIsPinned,
            subRowIsActiveAndColumnWithArrow,
            reorderForColIsActive,
          }),

        renderCell,
        editable,

        renderEditCell,
        resizable,
        draggable: reorderForColIsActive,
        cellClass,
        ...(columnIsPinned && { frozen: true }),
        ...(colSpan && { colSpan }),
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnConfig,
    tableConfig.resizableColumn,

    selectingRowsIsActive,
    isLoadingTable,
    /* tableConfig.subRows, - убрал, чтобы убрать перерендеры.
         Заменил на boolean - tableConfigSubRows.
         в целом любая версия данного пропса (при разных рендерах) должна оставаться равной любой другой версии.
         */
    tableConfigSubRows,
    tableConfigEditing,
    tableConfigFiltering,
    tableConfigSorting,
    tableConfigRowDetailBoolean,
    tableConfigRowsGroupingBoolean,
    reorderInHeaderIsActive,
    groupedCols,
    pinnedCols,
    hiddenCols,
    showRowInstruments,
    keyText,
    tableConfigKeyTextBoolean,
  ]);

  const {
    reorderedColumns,
    onColumnsReorder,
    setColumnsOrder,
    columnsOrder,
    getDefaultColumnsOrder,
  } = useReorderDragable({
    columns,
    reorderIsActive,
    tableConfigColumnsControl: tableConfig.columnsControl,
    columnConfig,
    selectingRowsIsActive,
    rowsGroupingIsActive: tableConfigRowsGroupingBoolean,
    showRowInstruments,
    tableConfigKeyTextBoolean,
    keyText,
    colsWithKeyTextMap,
  });

  return {
    columns,
    reorderedColumns,
    columnsOrder,
    getDefaultColumnsOrder,
    setColumnsOrder,
    onColumnsReorder,
  };
};
