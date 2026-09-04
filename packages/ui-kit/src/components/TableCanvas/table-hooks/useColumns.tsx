/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/dot-notation */

import { SIZE } from '@ui-kit/components/TableCanvas';
import { useCallback, useMemo, useRef } from 'react';

import type { CellInfo } from '../../TableGlide';
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
  createGroupPathValue,
  createTopGroupOrdinalGetter,
} from '../feature-rows-grouping/mergedView';
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
import type { MergedCellsAlign } from '../types/merged-cells.type';
import { TableConfig } from '../types/table-config.type';
import { calculateMinColumnWidth } from '../utils';
import { renderFilterSortHeader } from '../widgets/filter-sort-header';
import { createMergeByValueRowSpan } from './createMergeByValueRowSpan';
import { createMergedRegionsResolver } from './createMergedRegionsResolver';
import { resolveMergedView } from './resolveMergedView';

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
  // Вид со слиянием (группировка или subRows): блоки по уровням рисует
  // внутреннее объединение по ключу пути, а колонки остаются на своих местах.
  const mergedView = resolveMergedView(tableConfig);
  const rowsGroupingMergedView = mergedView?.kind === 'grouping';
  const mergedKeys = mergedView?.keys;
  const anyMergedView = mergedView !== null;
  // Создание колонки с нумерацией строк
  const rowMarkersIsActive = !!tableConfig?.rowMarkers;

  // Итоговый порядок ключей колонок (после перестановки, закрепления и скрытия).
  // Нужен, чтобы во время отрисовки перевести объединения, заданные снаружи, в
  // индексы. Обновляется ниже, после reorderedColumns.
  const renderColKeysRef = useRef<readonly string[]>([]);
  const columns = useMemo((): readonly ColumnX[] => {
    const colsAfterRowsGroupingCheck = getColsAfterRowsGrouping({
      rowsGroupingIsActiveInConfig: tableConfigRowsGroupingBoolean,
      groupByArr: groupedCols ?? [],
      columnConfig,
      tableConfigGroupedColumnProps:
        tableConfig.rowsGrouping?.groupedColumnProps,
      pinnedCols,
      mergedView: rowsGroupingMergedView,
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
          // Группировка со слиянием: по умолчанию нумеруем строки номером
          // группы верхнего уровня. Свой getRowMarker имеет приоритет.
          getRowMarker:
            tableConfig.rowMarkers?.getRowMarker ??
            (anyMergedView && mergedKeys
              ? createTopGroupOrdinalGetter(mergedKeys[0] as string, rowsRef)
              : undefined),
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

    // mergeCells.mergeByCellValues: для каждой колонки — функция, дающая значение
    // ячейки. По нему автоматически объединяются соседние строки с одинаковым
    // значением (см. createMergeByValueRowSpan).
    const mergeByValue = new Map<string, (row: RowType) => unknown>();
    (tableConfig.mergeCells?.mergeByCellValues ?? []).forEach((item) => {
      if (typeof item === 'string') {
        mergeByValue.set(item, (row) => (row as ObjectForExtending)[item]);
      } else {
        mergeByValue.set(item.colKey, item.value);
      }
    });

    // Группировка со слиянием: каждый уровень объединяется по ключу пути (блок
    // роли обрывается на границе отдела), а служебные колонки (нумерация,
    // чекбокс) объединяются по верхнему уровню. Эти записи важнее пользовательских.
    if (anyMergedView && mergedKeys) {
      mergedKeys.forEach((colKey, depth) => {
        mergeByValue.set(
          colKey,
          createGroupPathValue<RowType>(mergedKeys, depth),
        );
      });
      const topValue = createGroupPathValue<RowType>(mergedKeys, 0);
      mergeByValue.set(ROW_MARKER_COLUMN_KEY, topValue);
      mergeByValue.set(CHECKBOX_COLUMN_KEY, topValue);
    }

    // mergeCells.mergedCellsRegions: список блоков, заданных снаружи (ключи строк
    // и колонок). Resolver сам считает colSpan/rowSpan, беря итоговый порядок
    // колонок из renderColKeysRef (устойчив к перестановке, закреплению, скрытию).
    const mergedRegions = tableConfig.mergeCells?.mergedCellsRegions;
    const mergeRowKeyGetter = tableConfig.mergeCells?.rowKeyGetter;
    const regionsResolver =
      mergedRegions && mergedRegions.length > 0 && mergeRowKeyGetter
        ? createMergedRegionsResolver(
            mergedRegions,
            renderColKeysRef,
            rowsRef,
            mergeRowKeyGetter,
          )
        : null;

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

      // Группировка со слиянием: по группирующим колонкам сортировать нельзя
      // (как в дереве, где их убирают из сортируемых). Включается пропом. В шапке
      // такую колонку показываем без sortingType, чтобы не рисовалась стрелка.
      const stripGroupColumnSort =
        rowsGroupingMergedView &&
        !!tableConfig.rowsGrouping?.disableGroupColumnsSort &&
        !!groupedCols?.includes(el.key);
      const elHeader = stripGroupColumnSort
        ? { ...el, sortingType: undefined }
        : el;

      const isHaveFiltering = !!el.filtering;
      const isHaveSorting = !stripGroupColumnSort && !!el.sortingType;

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
            !elHeader.sortingType &&
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
            columnConfig: elHeader,
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

      // Объединение ячеек тела задаётся только через tableConfig.mergeCells.
      // Приоритет: сначала mergedCellsRegions, потом mergeByCellValues. Задавать
      // colSpan/rowSpan прямо на колонке внешний API больше не даёт (см.
      // DefaultOmittedKeys). Resolver вешаем на все колонки региона: какая из них
      // верхняя-левая ячейка блока, он определяет во время отрисовки.
      const isRegionCol = regionsResolver?.regionCols.has(el.key) ?? false;
      const mergeByValueOf = mergeByValue.get(el.key);

      let colSpan;
      let rowSpan;
      if (isRegionCol && regionsResolver) {
        colSpan = regionsResolver.colSpan(el.key);
        rowSpan = regionsResolver.rowSpan(el.key);
      } else {
        // colSpan задаёт только служебная detail-panel (снаружи columnColSpan
        // нет); rowSpan берётся только из mergeByCellValues.
        colSpan = tableConfigRowDetailBoolean
          ? getDetailPanelColSpanFunc<RowType, SummaryRowType>({
              indexZeroColKey,
              currIndex,
              arr,
              columnColSpan: undefined,
            })
          : undefined;
        rowSpan = mergeByValueOf
          ? createMergeByValueRowSpan(mergeByValueOf, rowsRef)
          : undefined;
      }

      // Выравнивание контента в блоках. Приоритет: сначала регион, потом колонка,
      // потом значение по умолчанию.
      const mergedViewAlign =
        anyMergedView &&
        (mergedKeys?.includes(el.key) || getColumnIsService(el))
          ? mergedView?.kind === 'grouping'
            ? tableConfig.rowsGrouping?.mergedCellsAlign
            : undefined
          : undefined;
      const columnAlign =
        el.mergedCellsAlign ??
        mergedViewAlign ??
        tableConfig.mergeCells?.mergedCellsAlign;
      // Выравнивание колонки может быть функцией по данным строки — вычисляем из
      // неё конкретное значение для ячейки (для верхней-левой ячейки блока).
      const resolveColumnAlign = (
        cellInfo: CellInfo<RowType, SummaryRowType>,
      ): MergedCellsAlign | undefined =>
        typeof columnAlign === 'function'
          ? columnAlign(cellInfo.row)
          : columnAlign;

      let spanAlign: ColumnX['spanAlign'];
      if (isRegionCol && regionsResolver) {
        const regionAlignOf = regionsResolver.align(el.key);
        spanAlign = columnAlign
          ? (cellInfo: CellInfo<RowType, SummaryRowType>) =>
              regionAlignOf(cellInfo) ?? resolveColumnAlign(cellInfo)
          : regionAlignOf;
      } else if (rowSpan !== undefined) {
        spanAlign =
          typeof columnAlign === 'function' ? resolveColumnAlign : columnAlign;
      }

      const userThemeOverride = el.themeOverride;
      const columnThemeOverride = userThemeOverride
        ? (cellInfo: Parameters<typeof userThemeOverride>[0]) => {
            const { lvl } = getTreeIdAndLvlOfRow(cellInfo.row);
            return userThemeOverride(cellInfo, lvl);
          }
        : undefined;

      return {
        ...el,
        // useSortedRows смотрит на sortingType — убираем его у группирующих
        // колонок, чтобы вид со слиянием по ним не сортировался (как в дереве).
        ...(stripGroupColumnSort && { sortingType: undefined }),
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
        ...(rowSpan && { rowSpan }),
        ...(spanAlign && { spanAlign }),
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnConfig,
    tableConfig.resizableColumn,
    // mergeCells: в зависимости берём отдельно ссылки на массивы. rowKeyGetter
    // сюда намеренно не входит — это стабильная функция (см. JSDoc в table-config).
    tableConfig.mergeCells?.mergeByCellValues,
    tableConfig.mergeCells?.mergedCellsRegions,

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
    rowsGroupingMergedView,
    mergedKeys,
    anyMergedView,
    tableConfig.rowsGrouping?.disableGroupColumnsSort,
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

  // Итоговый видимый порядок ключей колонок — по нему во время отрисовки
  // переводятся объединения, заданные снаружи (createMergedRegionsResolver
  // сравнивает ref по ссылке). Оборачиваем в useMemo: ссылка на массив меняется
  // только при реальной смене порядка колонок, иначе кэш resolver пересобирался
  // бы на каждый перерендер (наведение, выделение). Закреплённые колонки glide
  // сдвигает в начало (columnsGlide в TableGlideInstance) — повторяем этот
  // порядок здесь, иначе при закреплении ширина блока считается по старым
  // индексам и объединение вылезает за массив колонок.
  const renderColKeys = useMemo(() => {
    const frozen: string[] = [];
    const rest: string[] = [];
    reorderedColumns.forEach((c) => {
      (c.frozen ? frozen : rest).push(c.key);
    });
    return [...frozen, ...rest];
  }, [reorderedColumns]);
  renderColKeysRef.current = renderColKeys;

  return {
    columns,
    reorderedColumns,
    columnsOrder,
    getDefaultColumnsOrder,
    setColumnsOrder,
    onColumnsReorder,
  };
};
