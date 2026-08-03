/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/dot-notation */

import { SIZE } from '@ui-kit/components/TableCanvas';
import { useCallback, useMemo } from 'react';

import { hideRowServiceKeysHandler } from '../data/hideServiceKeysHanlder';
import { isServiceEditableColumn } from '../feature-edit';
import { isEditableCell } from '../feature-edit/typeGuards';
import { SKELETON_ROW_KEY } from '../feature-infinity-scroll';
import { getColsWithKeyText } from '../feature-key-text';
import type { KeyText, KeyTextMap } from '../feature-key-text/types';
import {
  calculateFilterPopoverPositionX,
  calculateFilterPopoverPositionY,
  TablePopoverContextValue,
} from '../feature-popover-table';
import { useReorderDragable } from '../feature-reorder-columns/useReorderDragable';
import {
  getDetailPanelColSpanFunc,
  isDetailPanelRow,
} from '../feature-row-detail/handlers';
import { ROW_I_COLUMN_KEY, RowIColumn } from '../feature-row-instruments';
import {
  createRowMarkerColumn,
  ROW_MARKER_COLUMN_KEY,
} from '../feature-row-markers';
import type { AllRowsMapEntry } from '../feature-row-markers/types';
import {
  getColsAfterRowsGrouping,
  KEY_GROUPED_COL,
} from '../feature-rows-grouping';
import {
  CHECKBOX_COLUMN_KEY,
  createCheckboxColumn,
} from '../feature-select-row';
import { getHasArrow, getTreeIdAndLvlOfRow } from '../feature-tree/handlers';
import { getAlignment } from '../renders/formatCell/getAlignment';
import { RenderCellGlide } from '../renders/renderCellGlide';
import { RenderEditCell } from '../renders/renderEditCell';
import { Canvas, CanvasEvent } from '../TableGlideInstance';
import { ColumnConfig, ObjectForExtending } from '../types';
import { ColumnConfigInternal } from '../types/column-config-internal.type';
import { TableConfig } from '../types/table-config.type';
import { calculateMinColumnWidth } from '../utils';
import { renderFilterSortHeader } from '../widgets/filter-sort-header';

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
  tablePopoverValue,
  onUnpinColumn,
  getColumnPinningDisabled,
  rowsRef,
  allRowsMapRef,
  rowSize,
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
  /**
   * Значение контекста поповера для создан. onOpenFilter callback
   */
  tablePopoverValue: TablePopoverContextValue;
  /** Открепление колонки по клику на пин-иконку в шапке. */
  onUnpinColumn: (key: string) => void;
  /** Закрепление колонки менять нельзя (disablePinning с учётом пар key/text). */
  getColumnPinningDisabled: (key: string) => boolean;
  rowsRef: React.MutableRefObject<readonly RowType[]>;
  allRowsMapRef: React.MutableRefObject<Map<
    string | number,
    AllRowsMapEntry<RowType>
  > | null>;
  rowSize: SIZE;
}) => {
  type ColumnX = ColumnConfigInternal<RowType, SummaryRowType>;
  const getColumnIsService = (
    column: ColumnConfig<RowType, SummaryRowType> | ColumnX,
  ) => 'isServiceColumn' in column && column.isServiceColumn === true;

  // -------------- onOpenFilter callback -----------------
  const onOpenFilter = useCallback(
    (
      columnConfig: ColumnConfig<RowType, SummaryRowType>,
      event: CanvasEvent,
    ) => {
      tablePopoverValue.open({
        // Формируем координату через координату ячейки + смещение таргета (иконка фильтра)
        position: {
          x: calculateFilterPopoverPositionX(event),
          y: calculateFilterPopoverPositionY(event),
        },
        contentType: 'filter',
        contentData: {
          columnConfig,
        },
        // Передаем ID колонки для отслеживания ресайза
        columnId: columnConfig.key,
      });
    },
    [tablePopoverValue],
  );

  const tableConfigFiltering = !!tableConfig.filtering;
  const tableConfigSorting = !!tableConfig.sorting;
  const tableConfigEditing = editModeEnabled;

  const tableConfigRowsGroupingBoolean = !!tableConfig.rowsGrouping;

  const tableConfigSubRows = !!tableConfig.subRows;
  // FIXME
  const tableConfigRowDetailBoolean = false; // !!tableConfig.rowDetailPanel;

  const groupedCols = (tableConfig.rowsGrouping ?? {})?.groupByState?.[0];
  // Создание колонки с нумерацией строк
  const rowMarkersIsActive = !!tableConfig?.rowMarkers;
  const columns = useMemo((): readonly ColumnX[] => {
    const colsAfterRowsGroupingCheck = getColsAfterRowsGrouping({
      rowsGroupingIsActiveInConfig: tableConfigRowsGroupingBoolean,
      groupByArr: groupedCols ?? [],
      columnConfig,
      tableConfigGroupedColumnProps:
        tableConfig.rowsGrouping?.groupedColumnProps,
      pinnedCols,
    });

    const checkboxColumn = selectingRowsIsActive
      ? (createCheckboxColumn({
          rowSize,
        }) as ColumnX)
      : null;

    const rowMarkerColumn = rowMarkersIsActive
      ? (createRowMarkerColumn({
          startIndex: tableConfig.rowMarkers?.startIndex ?? 1,
          width: tableConfig.rowMarkers?.width,
          size: tableConfig.rowMarkers?.size,
          rowsRef,
          rowSize,
          getRowMarker: tableConfig.rowMarkers?.getRowMarker,
          allRowsMapRef,
          rowKeyGetter: tableConfig.subRows?.rowKeyGetter,
        }) as ColumnX)
      : null;
    const colsAfterSelectingCheck = [
      ...(rowMarkersIsActive ? [rowMarkerColumn as ColumnX] : []),
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
        !getColumnIsService(el) &&
        !(el.key === KEY_GROUPED_COL) &&
        !(el.key === ROW_MARKER_COLUMN_KEY);

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

        const elEditing = el.editingCell;

        // если  subRow НЕ активированы, то смотрим только на конфиг родительской строки
        if (!tableConfigSubrowsActivated) {
          return isEditableCell(elEditing, row, rowEditable);
        }
        const { lvl } = getTreeIdAndLvlOfRow(row);

        // если lvl === 0, то смотрим только на конфиг родительской строки
        if (lvl === 0) {
          return isEditableCell(elEditing, row, rowEditable);
        }

        // если lvl !== 0, то смотрим только на конфиг дочерних строк
        const subRowEditing = el.subRow?.editingCell;
        return isEditableCell(subRowEditing, row, rowEditable);
      };

      let renderHeaderCell: typeof el.renderHeaderCell;
      (() => {
        if (el.key === CHECKBOX_COLUMN_KEY) {
          renderHeaderCell = el.renderHeaderCell;
          return;
        }
        if (el.key === ROW_MARKER_COLUMN_KEY) {
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
          (!tableConfigFiltering &&
            !tableConfigSorting &&
            !reorderInHeaderIsActive &&
            !columnIsPinned &&
            !subRowIsActiveAndColumnWithArrow) ||
          (!el.filtering &&
            !el.sortingType &&
            !reorderInHeaderIsActive &&
            !columnIsPinned &&
            !subRowIsActiveAndColumnWithArrow)
        ) {
          if (el.renderHeaderCell) {
            renderHeaderCell = el.renderHeaderCell;
            return;
          }
          if (typeof el.name === 'string') {
            // обработается glide-ом правильно
            return;
          }

          renderHeaderCell = ({ theme }) => (
            <Canvas.Container
              padding={{
                left: theme.cellHorizontalPadding,
                right: theme.cellHorizontalPadding,
              }}
              style={{ width: '100%' }}
              alignItems="center"
            >
              {el.name}
            </Canvas.Container>
          );
          return;
        }

        renderHeaderCell = (p) =>
          renderFilterSortHeader({
            columnConfig: el,
            tableConfigSorting,
            tableConfigFiltering,
            columnIsPinned,
            columnPinningDisabled: getColumnPinningDisabled(el.key),
            reorderInHeaderIsActive: reorderForColIsActive,
            subRowIsActiveAndColumnWithArrow,
            renderHeaderCellProps: p,
            onOpenFilter,
            onUnpinColumn,
          });
      })();

      const renderCell: typeof el.renderCell = (renderCellProps) =>
        RenderCellGlide<FilterStateType, RowIdType, RowType, SummaryRowType>({
          renderCellProps,
          column: el,
          tableConfigSubRows: tableConfig.subRows,
          // FIXME
          tableConfigRowDetailPanel: undefined, // tableConfig.rowDetailPanel,
          // currIndex,
          // indexZeroColKey,
          keyText,
          editModeEnabled: editable(renderCellProps.row),
        });

      const isErrorCell: ColumnX['isErrorCell'] = (row) => {
        if (!tableConfigEditing || isLoadingTable || getColumnIsService(el)) {
          return false;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((row as any)?.[SKELETON_ROW_KEY]) {
          return false;
        }

        const { lvl } = getTreeIdAndLvlOfRow(row);
        const clearRow = hideRowServiceKeysHandler(row);

        return !!(lvl === 0
          ? el.editingCell?.error?.value(clearRow, lvl)
          : el.subRow?.editingCell?.error?.value(clearRow, lvl));
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
            editingCellInfo={renderEditCellProps}
            column={el}
            tableConfigSubRows={tableConfig.subRows}
            tableConfigRowDetailPanel={undefined}
            currIndex={currIndex}
            indexZeroColKey={indexZeroColKey}
            keyText={keyText}
          />
        );
      })();
      // && el.resizable - теперь нет точечной настройки для колонки
      const resizable = getColumnIsService(el)
        ? false
        : tableConfig.resizableColumn;

      const colSpan = tableConfigRowDetailBoolean
        ? getDetailPanelColSpanFunc({
            indexZeroColKey,
            currIndex,
            arr,
            columnColSpan: el.colSpan,
          })
        : el.colSpan;

      // const cellClass: typeof el.cellClass = (() => {
      //   if (!el?.cellClass && (!editModeEnabled || !el.editingCell)) {
      //     return undefined;
      //   }
      //   return (row) => {
      //     let className = '';

      //     const { lvl } = getTreeIdAndLvlOfRow(row);

      //     const clearRow = hideRowServiceKeysHandler(row);
      //     const defaultCls = getCls(el?.cellClass, clearRow);
      //     if (defaultCls) {
      //       className += ` ${defaultCls}`;
      //     }
      //     if (!editModeEnabled) {
      //       return className || undefined;
      //     }

      //     if (editable(row)) {
      //       className += ` ${cls.editableCell}`;
      //     }
      //     const editedSuccessfullyClass =
      //       (lvl === 0
      //         ? // если lvl === 0, то смотрим только на конфиг родительской строки
      //           el.editingCell?.editedSuccessfully?.value(clearRow, lvl)
      //         : // если lvl !== 0, то смотрим только на конфиг дочерних строк
      //           el.subRow?.editingCell?.editedSuccessfully?.value(
      //             clearRow,
      //             lvl
      //           )) && cls.editedSuccessfullyCell;

      //     if (editedSuccessfullyClass) {
      //       className += ` ${editedSuccessfullyClass}`;
      //     }

      //     const errorClass =
      //       (lvl === 0
      //         ? // если lvl === 0, то смотрим только на конфиг родительской строки
      //           el.editingCell?.error?.value(clearRow, lvl)
      //         : // если lvl !== 0, то смотрим только на конфиг дочерних строк
      //           el.subRow?.editingCell?.error?.value(clearRow, lvl)) &&
      //       cls.editedWithErrorCell;

      //     if (errorClass) {
      //       className += ` ${errorClass}`;
      //     }

      //     return className || undefined;
      //   };
      // })();

      const userThemeOverride = el.themeOverride;
      const columnThemeOverride = userThemeOverride
        ? (cellInfo: Parameters<typeof userThemeOverride>[0]) => {
            const { lvl } = getTreeIdAndLvlOfRow(cellInfo.row);
            return userThemeOverride(cellInfo, lvl);
          }
        : undefined;

      return {
        ...el,
        contentAlign: getAlignment(el.contentFormat),
        renderHeaderCell,
        columnThemeOverride,
        minWidth:
          el.minWidth ??
          calculateMinColumnWidth({
            isHaveFiltering,
            isHaveSorting,
            columnIsPinned,
            subRowIsActiveAndColumnWithArrow,
            reorderForColIsActive,
          }),
        ...(el.maxAutoWidth !== undefined && {
          maxAutoWidth: el.maxAutoWidth,
        }),

        renderCell,
        editable,
        isErrorCell,
        renderEditCell,
        resizable,
        draggable: reorderForColIsActive,
        // TODO
        // cellClass,
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
    onOpenFilter,
    onUnpinColumn,
    getColumnPinningDisabled,
    rowSize,
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
    rowMarkersIsActive,
    selectingRowsIsActive,
    rowsGroupingIsActive: tableConfigRowsGroupingBoolean,
    showRowInstruments,
    tableConfigKeyTextBoolean,
    keyText,
    colsWithKeyTextMap,
    pinnedCols,
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
