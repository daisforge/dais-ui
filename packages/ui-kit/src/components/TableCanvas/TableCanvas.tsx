import { mergeRefs } from '@ui-kit/utils';
import { Suspense, useCallback, useMemo, useRef, useState } from 'react';

import {
  ColumnGroupContext,
  ContextProviders,
  type HeaderContextValueTypeInstance,
  RefTableContainerContext,
  RefTableContext,
  RefTableGlobalContainerContext,
  TableResizeObserverProviderWrapper,
} from './contexts';
import { useClipboard, useFillHandle } from './feature-cell-transfer';
import { useColumnsControl } from './feature-column-control';
import { useLastLvlColumnConfig } from './feature-columns-grouping';
import { useContentStateOverlay } from './feature-content-state/useContentStateOverlay';
import { useCloseContextMenuOnRegionChange } from './feature-context-menu';
import { CellReadOnlyEditor, getEditingEnabledState } from './feature-edit';
import { FilterListBlock } from './feature-filtering';
import { useFullScreenState } from './feature-full-screen/useFullScreenState';
import { useInfinityScroll } from './feature-infinity-scroll/use-infinity-scroll';
import { useColsWithKeyTextMap, useKeyTextState } from './feature-key-text';
import {
  TablePopoverProvider,
  useClosePopoverOnRegionChange,
  useTablePopoverState,
} from './feature-popover-table';
import { TableSidebar } from './feature-right-sidebar';
import { useRowDetailPanel } from './feature-row-detail';
import { RowDetailHandlerContextProvider } from './feature-row-detail/ctx';
import { RowInstrumentsCtxProvider } from './feature-row-instruments';
import type { AllRowsMapEntry } from './feature-row-markers/types';
import { getDefuaultRowSize } from './feature-row-size';
import { useGroupedRows } from './feature-rows-grouping';
import { SelectingContextProvider } from './feature-select-row/selecting-contexts';
import { useCheckboxRowIndexes } from './feature-select-row/useCheckboxRowIndexes';
import { useSelectRow } from './feature-select-row/useSelectRow';
import { useSortedRows } from './feature-sorting';
import { useTableTabsContext } from './feature-tabs';
import {
  flattenSubRowsToMergedLeaves,
  isMergedSubRowsView,
} from './feature-tree/mergedSubRows';
import { SIZE, tableClassNames } from './styles';
import {
  resolveDataRevision,
  useColumns,
  useContextMenuValues,
  useContextsValues,
  useFilteredRows,
  useFlattenedRows,
  useInlineStyle,
  useIsLoadingTable,
  useOnRowsChange,
  usePrepareTableConfig,
  useRowHeight,
  useRowInstruments,
  useRowsWithSkeletonsOrNot,
  useSearchValues,
  useSelectionProjectionReset,
  useSidebarState,
  useTableCollapseValues,
} from './table-hooks';
import { type DataEditorRef } from './TableGlideInstance/type';
import { ActiveViewModsType, ObjectForExtending, TableProps } from './types';
import { pasteOnlyKeysWithNotUndefinedValue } from './utils';
import { ControlBlockLazy, TableOrCardsUI } from './widgets';
import { ControlBlockWithoutResize } from './widgets/control-block';
import { ControlBlockStyled } from './widgets/control-block/styled';
import { ToolsMenuState } from './widgets/control-block/types';
import { useFeatureArray } from './widgets/control-block/use-feature-array';

export interface Props {
  direction: 'ltr' | 'rtl';
}

export function TableCanvas<
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  HeaderContextValueType extends ObjectForExtending,
  RowContextValueType extends ObjectForExtending,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  tableConfig: tableConfigExternal = {},
  columnConfig: colsOrGroupColsConfig,
  rows,
  // topSummaryRows,
  bottomSummaryRows,
  headerContextValue,
  rowContextValue,
  refTable,
  refTableContainer: refTableContainerExternal, // внешний ref (может быть RefObject или callback)
}: TableProps<
  FilterStateType,
  RowIdType,
  HeaderContextValueType,
  RowContextValueType,
  RowType,
  SummaryRowType
>) {
  // ----------------------------------------------------------------
  const refTableGlobalContainer = useRef<HTMLDivElement | null>(null);
  // Внутренний ref (остаётся MutableRefObject)
  const refTableContainerInternal = useRef<HTMLDivElement | null>(null);
  // Объединяем refs (стабилизируем через useMemo)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refTableContainerCombined = useMemo(
    () => mergeRefs(refTableContainerInternal, refTableContainerExternal),
    [refTableContainerExternal],
  );

  const refTableX = useRef<DataEditorRef>(null);
  // Ref для передачи flattened rows в колонку row-markers.
  // Обходит циклическую зависимость: useColumns → useSortedRows -> ... -> useFlattenedRows.
  // renderCell в row-marker-column читает .current в момент рендера ячейки.
  const flattenedRowsRef = useRef<readonly RowType[]>([]);
  const allRowsMapRef = useRef<Map<
    string | number,
    AllRowsMapEntry<RowType>
  > | null>(null);

  // ------------------------------------------------  preparing TableConfig ------------------------------------------------
  const { tableConfig } = usePrepareTableConfig({
    tableConfigExternal,
    flattenedRowsRef,
  });
  // ------------------------------------------------  get last lvl of columnConfig ------------------------------------------------
  const columnConfigWithGroupsInfo = useLastLvlColumnConfig(
    colsOrGroupColsConfig,
  );
  const { columnConfig, columnsGroupingIsActive } = columnConfigWithGroupsInfo;

  // ------------------------------------------------  isLoadingTable ------------------------------------------------
  const { isLoadingTable, skeletonRowsCount } = useIsLoadingTable({
    tableConfig,
  });
  // ------------------------------------------------  fullScreen mode (поднят сюда для useGlideContainerPortal) --------
  const {
    state: [fullScreened, setFullScreened],
    fullScreenPortal,
  } = useFullScreenState(tableConfig.fullScreenEnabled);

  // ------------------------------------------------  infinityScroll ------------------------------------------------
  const {
    handleInfinityScrollRegionChange,
    infinityScrollHasMore,
    infinityScrollActiveInConfig,
    isHaveActiveInfinityScroll,
  } = useInfinityScroll({
    tableConfig,
    rows,
  });

  // ------------------------------------------------ pagination --------------------------------------------------------
  const { pagination } = tableConfig;
  const paginationActiveInConfig = !!pagination;
  const [paginationHeight, setPaginationHeight] = useState(0);
  // ------------------------------------------------ keyText -----------------------------------------
  const tableConfigKeyTextBoolean = !!tableConfig.keyText;
  const { keyText, setKeyText } = useKeyTextState(tableConfig.keyText);
  const colsWithKeyTextMap = useColsWithKeyTextMap({
    keyText,
    columnConfig,
    tableConfigKeyTextBoolean,
  });

  // ------------------------------------------------ rowInstruments -----------------------------------------
  const { showRowInstruments, setShowRowInstruments, getRowDropdownConfig } =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useRowInstruments((tableConfig as any)?.rowInstruments);
  // ------------------------------------------------ selecting rows -----------------------------------------
  // В merged-виде subRows входные rows — это ДЕРЕВО (узлы-предки). Selecting и
  // summary (select-all) должны работать на ОТОБРАЖАЕМЫХ листьях (как в flat/
  // grouping), поэтому заранее разворачиваем дерево в листья для фичи выделения.
  const selectingRows = useMemo(() => {
    const sr = tableConfig?.subRows;
    if (isMergedSubRowsView(sr) && sr?.getSubRows && sr?.mergedColumns) {
      return flattenSubRowsToMergedLeaves(
        rows,
        sr.getSubRows,
        sr.mergedColumns,
      );
    }
    return rows;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, tableConfig?.subRows]);

  const {
    selectingRowsIsActive,
    setSelectingRowsIsActive,
    selectedRows,
    setSelectedRows,
    selectingRowConfig,
    flattenedRowsArrAndMap,
    isSelectingRowCounterVisible,
    setIsSelectingRowCounterVisible,
    isSelectingRowLabelVisible,
    setIsSelectingRowLabelVisible,
    controlBlock: selectRowDomMetadataControlBlock,
    sidebar: selectRowDomMetadataSidebar,
  } = useSelectRow({ tableConfig, rows: selectingRows });

  // ------------------------------------------------ columns control (pinning, hiding, reorderingConfig) -----------------------------------------
  const {
    columnsControlConfig,
    columnsControlEnable,
    reorderInHeaderIsActive,
    reorderIsActive,
    pinnedCols,
    setPinnedCols,
    hiddenCols,
    setHiddenCols,
    openControlModal,
    setOpenControlModal,
    onUnpinColumn,
    getColumnPinningDisabled,
  } = useColumnsControl({
    tableConfigColumnsControl: tableConfig.columnsControl,
    tableConfigKeyTextBoolean,
    colsWithKeyTextMap,
    columnsGroupingIsActive,
  });

  // ------------------------------------------------ editing -----------------------------------------
  const innerState = useState(
    !!tableConfig.editing && !!tableConfig?.editing?.defaultEnabled,
  );

  const [editModeEnabled, setEditModeEnabled] = getEditingEnabledState(
    tableConfig.editing?.enabled,
    innerState,
  );

  // ------------------------------------------------ filter popover  -----------------------------------------
  const tablePopoverValue = useTablePopoverState();

  // Закрываем поповер фильтра при изменении региона (по оси X)
  const handlePopoverRegionChange =
    useClosePopoverOnRegionChange(tablePopoverValue);

  // ------------------------------------------------ rowSize -----------------------------------------

  /**
   * rowSize - в первую очередь влияет на padding ячеек  и  размеры инпутов, селектов и тд.
   *
   * Также в зависимости от rowSize - устанавливается размер высоты строк.
   * Но если передан tableConfig.rowHeight, tableConfig.rowHeight - будет приоритетнее
   * */
  const [rowSize, setRowSize] = useState<SIZE>(() =>
    getDefuaultRowSize(tableConfig.rowSize),
  );

  // ------------------------------------------------ columns reConfig -----------------------------------------
  const {
    columns,
    reorderedColumns,
    columnsOrder,
    getDefaultColumnsOrder,
    setColumnsOrder,
    onColumnsReorder,
    renderColKeysRef,
  } = useColumns({
    tableConfig,
    columnConfig,
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
    rowsRef: flattenedRowsRef,
    allRowsMapRef,
    rowSize,
  });

  // const { columnsWithParentGroups } = useGetAllLvlColumnsConfig(
  //   reorderedColumns,
  //   allColsFlattened,
  //   columnsGroupingIsActive
  // );

  // ------------------------------------------------ view type -----------------------------------------
  const view = tableConfig.view ?? { type: 'rows' };
  const [activeView, setActiveView] = useState<ActiveViewModsType>(() => {
    if (view.type === 'both-types') {
      return view.default ?? 'rows';
    }
    return view.type;
  });

  // ------------------------------------------------ summaryRowsIsActive -----------------------------------------
  const [summaryRowsIsActive, setSummaryRowsIsActive] = useState(
    !!tableConfig.summaryRows?.showDefault,
  );

  // ------------------------------------------------ searching ------------------------------------------------

  const searchContextVal = useSearchValues({ tableConfig });
  const {
    enabled: searchingActiveInConfig,
    searchQuery,
    internalLocalValue: searchQueryLocalValue,
    showSearchBlock,
    setShowSearchBlock,
    placeholder: placeholderSearchBlock,
    isManualSearching,
  } = searchContextVal;
  // ------------------------------------------------ contextMenu ------------------------------------------------
  const contextMenuCtxVal = useContextMenuValues({
    tableConfig,
    popover: tablePopoverValue,
  });

  // Закрываем контекстное меню при вертикальном скролле таблицы (по оси Y)
  const handleContextMenuRegionChange =
    useCloseContextMenuOnRegionChange(contextMenuCtxVal);

  // Композитный обработчик смены видимого региона: закрытие поповера (X),
  // закрытие контекстного меню (Y) и подгрузка данных при infinity scroll.
  const handleVisibleRegionChange = useCallback<
    NonNullable<typeof handlePopoverRegionChange>
  >(
    (...args) => {
      handlePopoverRegionChange(...args);
      handleContextMenuRegionChange(...args);
      if (isHaveActiveInfinityScroll) {
        handleInfinityScrollRegionChange(...args);
      }
    },
    [
      handlePopoverRegionChange,
      handleContextMenuRegionChange,
      handleInfinityScrollRegionChange,
      isHaveActiveInfinityScroll,
    ],
  );

  // ------------------------------------------------ sideBar ------------------------------------------------
  const sideBarContextVal = useSidebarState({
    tableConfig,
    refTableContainer: refTableContainerInternal,
  });

  // ------------------------------------------------ collapsing table ------------------------------------------------
  const tableCollapseContextVal = useTableCollapseValues({ tableConfig });

  // ------------------------------------------------ filtering ------------------------------------------------
  const {
    filters,
    setFilters,
    filteredRows,
    filtersAreVisible,
    clearedFiltersValue,
  } = useFilteredRows({
    rows,
    tableConfig,
    columnConfig,
    infinityScrollActiveInConfig,
    paginationActiveInConfig,
    searchingActiveInConfig,
    searchQuery,
    isManualSearching,
  });

  // ------------------------------------------------ sorting ------------------------------------------------
  const {
    sortColumns,
    setSortColumns,
    sortedRows,
    sortIsVisible,
    setSortIsVisible,
  } = useSortedRows({
    rows: filteredRows,
    columns,
    tableConfig,
    infinityScrollActiveInConfig,
    paginationActiveInConfig,
  });

  // ------------------------------------------------ groupedRows ---------------------------------------------------
  const {
    groupedRows,
    groupedCols,
    setGroupedCols,
    rowsGroupingIsActiveInConfig,
    isRowsGroupingCounterVisible,
    setIsRowsGroupingCounterVisible,
    isRowsGroupingLabelVisible,
    setIsRowsGroupingLabelVisible,
  } = useGroupedRows({
    tableConfig,
    rows: sortedRows,
  });
  // ------------------------------------------------ treeView ---------------------------------------------------

  const {
    flattenedRows,
    expandedRowsIdsStateAndSetter,
    isExpandedAllRows,
    allRowsMap,
    toggleExpandAllButton,
  } = useFlattenedRows({
    rows: groupedRows as RowType[],
    tableConfig,
    groupedCols,
  });

  // Обновляем ref — renderCell в row-marker-column прочитает актуальные данные
  flattenedRowsRef.current = flattenedRows;
  allRowsMapRef.current = allRowsMap;

  // Сброс выделения при смене проекции данных; активная ячейка при возможности
  // сохраняется по ключу строки и доскролливается.
  const { projectionResetSignal, captureActiveCell } =
    useSelectionProjectionReset({
      projectionParts: [
        sortColumns,
        filters,
        searchQuery,
        groupedCols,
        resolveDataRevision(tableConfig.cellsSelection?.dataRevision, rows),
      ],
      controlledSetter: tableConfig.cellsSelection?.state?.[1],
      rowKeyGetter:
        tableConfig.cellsSelection?.rowKeyGetter ??
        tableConfig.selecting?.rowKeyGetter ??
        tableConfig.subRows?.rowKeyGetter ??
        tableConfig.mergeCells?.rowKeyGetter,
      flattenedRowsRef,
      renderColKeysRef,
      columns: columns as unknown as Parameters<
        typeof useSelectionProjectionReset
      >[0]['columns'],
      scrollTo: (col, row) => refTableX.current?.scrollTo(col, row),
    });

  // ------------------------------------------------ changing rows ------------------------------------------------
  const { onRowsChangeLastVersion } = useOnRowsChange({
    tableConfig,
    rows,
    flattenedRowsRef,
  });

  // ------------------------------------------------ cell transfer (copy/paste/fill) ------------------------------------------------
  const { onGridSelectionChange: cellTransferOnSelectionChange } = useClipboard(
    {
      editModeEnabled: !!editModeEnabled,
      cellTransferConfig: tableConfig.cellTransfer,
      rowContextValue: rowContextValue as ObjectForExtending | undefined,
      headerContextValue: headerContextValue as ObjectForExtending | undefined,
      columns: reorderedColumns as unknown as Parameters<
        typeof useClipboard
      >[0]['columns'],
      flattenedRows,
      containerRef: refTableGlobalContainer,
      onRowsChange: onRowsChangeLastVersion as unknown as Parameters<
        typeof useClipboard
      >[0]['onRowsChange'],
      onNotification: tableConfig.notifications?.onNotification,
    },
  );

  // ------------------------------------------------ fill handle ------------------------------------------------
  const { fillHandleProps, onSelectionChangeForFill } = useFillHandle({
    editModeEnabled: !!editModeEnabled,
    cellTransferConfig: tableConfig.cellTransfer,
    columns: reorderedColumns as unknown as Parameters<
      typeof useFillHandle
    >[0]['columns'],
    flattenedRows,
    rowContextValue: rowContextValue as ObjectForExtending | undefined,
    headerContextValue: headerContextValue as ObjectForExtending | undefined,
    onRowsChange: onRowsChangeLastVersion as unknown as Parameters<
      typeof useFillHandle
    >[0]['onRowsChange'],
    onNotification: tableConfig.notifications?.onNotification,
  });

  // Объединяем onGridSelectionChange от cellTransfer, fill handle и запоминание
  // активной ячейки (восстановление после смены проекции данных).
  const combinedOnGridSelectionChange = useCallback(
    (selection: Parameters<typeof cellTransferOnSelectionChange>[0]) => {
      cellTransferOnSelectionChange(selection);
      onSelectionChangeForFill(selection);
      captureActiveCell(selection);
    },
    [
      cellTransferOnSelectionChange,
      onSelectionChangeForFill,
      captureActiveCell,
    ],
  );

  // ------------------------------------------------  data-grid props ------------------------------------------------
  const {
    containerCss,
    style,
    // FIXME
    // onFill,
    // onCopy,
    // onPaste,
    // onCellClick: onCellClickExternal,
    // onCellDoubleClick,
    // onCellContextMenu,
    // onCellKeyDown,
    // onSelectedCellChange,
    onColumnResize,
    // enableVirtualization,
    //
    // onScroll: onScrollExternal,
    // rowClass: rowClassExternal,
    // "data-testid"
    // headerRowHeight,
  } = tableConfig;
  const hasRenderableHeaders = reorderedColumns.length > 0;

  // ------------------------------------------------  onCellClick ------------------------------------------------
  // const onCellClick = useOnCellClick({ onCellClickExternal });

  // ------------------------------------------------  rowClass ------------------------------------------------
  // const { rowClass } = useRowClass({
  //   rowClassExternal,
  //   tableConfigSubRowsBoolean: !!tableConfig.subRows,
  //   tableConfigRowDetailBoolean: !!tableConfig.rowDetailPanel,
  // });

  // ------------------------------------------------ row detail ------------------------------------------------
  const {
    rowsWithExpDetails,
    rowDetailContextValue,
    rowDetailIsActiveInConfig,
  } = useRowDetailPanel({
    // FIXME
    // tableConfigRowDetail: tableConfig.rowDetailPanel,
    tableConfigRowDetail: undefined,
    rows: flattenedRows,
  });

  // ------------------------------------------------  rows with skeletons or not ------------------------------------------------
  const { rowsWithSkeletonsOrNot } = useRowsWithSkeletonsOrNot({
    isLoadingTable,
    infinityScrollActiveInConfig,
    infinityScrollHasMore,
    skeletonRowsCount,
    rows: rowsWithExpDetails,
  });
  // Проекция чекбокс-домена (ключи) в позиционные row-индексы glide — оба
  // набора собираются в одном хуке (см. useCheckboxRowIndexes).
  const { checkboxSelectedRowIndexes, checkboxVisibleRowIndexes } =
    useCheckboxRowIndexes({
      rows: rowsWithExpDetails,
      rowKeyGetter: tableConfig.selecting?.rowKeyGetter,
      selectedRows,
      selectingRowConfig,
      flattenedRowsArrAndMap,
      setSelectedRows,
      isRowsGroupingActive:
        rowsGroupingIsActiveInConfig && !!groupedCols?.length,
    });

  // Колбэк смены подсвеченной строки: связывает controlled-сеттер (state[1]) и
  // пользовательский onChange в одну функцию, чтобы не держать тернарник прямо
  // в пропсах грида. undefined, если highlightActiveRow не сконфигурирован.
  const handleHighlightActiveRowChange = useMemo(() => {
    const highlightConfig = tableConfig.highlightActiveRow;
    if (!highlightConfig) return undefined;

    return (index: number | undefined, row?: RowType) => {
      highlightConfig.state?.[1]?.(index);
      highlightConfig.onChange?.({ index, row });
    };
  }, [tableConfig.highlightActiveRow]);

  // ------------------------------------------------ table in TableTabs ------------------------------------------------
  const { isInTabs: isTableInTabs } = useTableTabsContext();

  // ------------------------------------------------ compressing visibility state ------------------------------------------------
  // Значение пока никем не читается (источник истины — внутри ControlBlock),
  // сеттер нужен ControlBlock для подъёма состояния компрессии наверх
  const [, setCompressionVisibility] = useState<ToolsMenuState>();
  const enableAdaptiveCompress =
    tableConfig.controlBlock?.enableAdaptiveCompress ?? true;

  // Ключи выделенных колонок (объединённые: одиночный/Shift/Ctrl/select-all).
  // Источник для нативного экшена «Закрепить столбцы» в контрл-блоке.
  const [selectedColumnKeys, setSelectedColumnKeys] = useState<string[]>([]);

  // Follow: после пина/анпина перевыделяем эти ключи на новых позициях.
  const [pendingSelectKeys, setPendingSelectKeys] = useState<string[] | null>(
    null,
  );

  // ------------------------------------------------ all activated features lists ------------------------------------------------
  const featuresObj = useFeatureArray({
    tableConfig,
    activeView,
    setActiveView,
    summaryRowsIsActive,
    setSummaryRowsIsActive,
    selectingRowsIsActive,
    setSelectingRowsIsActive,
    rowSize,
    setRowSize,
    clearedFiltersValue,
    columnsControlEnable,
    fullScreened,
    setFullScreened,
    showRowInstruments,
    setShowRowInstruments,
    keyText,
    setKeyText,
    rowsGroupingIsActiveInConfig,
    groupedCols,
    setGroupedCols,
    columnConfig,
    editModeEnabled,
    setEditModeEnabled,
    showSearchBlock,
    setShowSearchBlock,
    searchQueryLocalValue,
    placeholderSearchBlock,
    // ControlBlock props
    openControlModal,
    setOpenControlModal,
    setColumnsOrder,
    columnsOrder,
    pinnedCols,
    setPinnedCols,
    hiddenCols,
    setHiddenCols,
    getDefaultColumnsOrder,
    columnsControlConfig,
    colsWithKeyTextMap,
    tableConfigKeyTextBoolean,
    enableAdaptiveCompress,
    selectedColumnKeys,
    setPendingSelectKeys,
  });

  // ------------------------------------------------ controlBlock ------------------------------------------------
  const {
    controlBlock = {
      show: true,
      leftSideDropdownProps: {},
      rightSideDropdownProps: {},
    },
  } = tableConfig;

  const isHaveCustomButtons =
    !!controlBlock.leftSideInner?.length || !!controlBlock.rightSideInner;

  const isHaveControlBlock =
    (controlBlock.show ?? true) &&
    (!!featuresObj.isHaveSomeFeature || isHaveCustomButtons);

  const borderLeftTopRadiusRounded =
    !isTableInTabs && !isHaveControlBlock && !filtersAreVisible;
  const borderRightTopRadiusRounded =
    !isTableInTabs &&
    !isHaveControlBlock &&
    !filtersAreVisible &&
    !featuresObj.isHaveSomeFeatureInSidebar;
  const borderLeftBottomRadiusRounded = !paginationActiveInConfig;
  const borderRightBottomRadiusRounded =
    !paginationActiveInConfig && !featuresObj.isHaveSomeFeatureInSidebar;

  const errorStateConfig = tableConfig.errorState;
  const emptyStateConfig = tableConfig.emptyState;
  const { contentStateOverlay } = useContentStateOverlay({
    borderLeftBottomRadiusRounded,
    borderLeftTopRadiusRounded,
    borderRightBottomRadiusRounded,
    borderRightTopRadiusRounded,
    errorStateConfig,
    emptyStateConfig,
    hasRenderableHeaders,
    isLoadingTable,
    rowsLength: rowsWithExpDetails.length,
  });

  // ------------------------------------------------ inline style props ------------------------------------------------
  // вычисляется высота таблицы, обновляется ширина таблицы при изменении колонок и др.
  const {
    // styleMemo,
    containerStyleResult,
    tableAndSidebarContainerHeightStyle,
  } = useInlineStyle({
    style,
    tableConfig,
    reorderedColumns,
    filtersAreVisible,
    controlBlockIsHave: isHaveControlBlock,
    isSearchingBellow: false,
    fullScreened,
    paginationActiveInConfig,
    paginationCustomSize: pagination?.['size'],
    tableCollapsingValue: tableCollapseContextVal,
    paginationHeight,
    refTableContainer: refTableContainerInternal,
    collapseButtonPlacement: tableConfig.collapsing?.collapseButtonPlacement,
  });

  // ------------------------------------------------ rows height ------------------------------------------------

  const { resultRowHeight } = useRowHeight({
    rowDetailIsActiveInConfig,
    rowSize,
    tableConfig,
  });
  // ------------------------------------------------ no rows fallback ------------------------------------------------
  // const { noRowsFallback } = tableConfig;
  // const isCustomNoRowsFallback = typeof noRowsFallback === 'object';

  // ------------------------------------------------ contextValues --------------------------------------------------------
  const { headerContextValueTotal, rowContextValueTotal } = useContextsValues({
    filters,
    setFilters,
    sortColumns,
    setSortColumns,
    sortIsVisible,
    setSortIsVisible,
    rowSize,
    setRowSize,
    tableConfig,
    isExpandedAllRows,
    toggleExpandAllButton,
    headerContextValue,
    rowContextValue,
    setActiveView,
    activeView,
  });

  // для совместимости с типом провайдера
  const HeaderCtxVal =
    headerContextValueTotal as HeaderContextValueTypeInstance<ObjectForExtending>;

  // Merged ref для DataEditor — glideCallbackRef убран из цепочки,
  // поиск DOM-элементов теперь через useEffect + MutationObserver в useGlideElements
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableDataEditorRef = useMemo(
    () => mergeRefs(refTable, refTableX),
    [refTable],
  );

  return (
    <RefTableGlobalContainerContext.Provider value={refTableGlobalContainer}>
      <RefTableContainerContext.Provider value={refTableContainerInternal}>
        <RefTableContext.Provider value={refTableX}>
          <ContextProviders
            headerCtxV={HeaderCtxVal}
            rowCtxV={rowContextValueTotal}
            expandedRowCtxV={expandedRowsIdsStateAndSetter}
            searchCtxV={searchContextVal}
            contextMenuCtxV={contextMenuCtxVal}
            sideBarCtxV={sideBarContextVal}
            tableCollapseCtxV={tableCollapseContextVal}
          >
            <TablePopoverProvider value={tablePopoverValue}>
              <RowInstrumentsCtxProvider value={getRowDropdownConfig}>
                <ColumnGroupContext.Provider
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  value={columnConfigWithGroupsInfo as any}
                >
                  <SelectingContextProvider
                    {...{
                      selectingRowConfig,
                      rows: selectingRows,
                      flattenedRowsArrAndMap,
                      selectedRows,
                      setSelectedRows,
                      rowKeyGetter: tableConfig?.selecting?.rowKeyGetter,
                      rowsGroupingIsActive:
                        rowsGroupingIsActiveInConfig && !!groupedCols?.length,
                      isRowsGroupingCounterVisible,
                      setIsRowsGroupingCounterVisible,
                      setIsRowsGroupingLabelVisible,
                      isRowsGroupingLabelVisible,
                      isSelectingRowCounterVisible,
                      setIsSelectingRowCounterVisible,
                      isSelectingRowLabelVisible,
                      setIsSelectingRowLabelVisible,
                      controlBlock: selectRowDomMetadataControlBlock,
                      sidebar: selectRowDomMetadataSidebar,
                    }}
                  >
                    <RowDetailHandlerContextProvider
                      value={rowDetailContextValue}
                    >
                      {/* ------------------------------ Table ------------------------------ */}
                      <TableResizeObserverProviderWrapper
                        refTableContainer={refTableGlobalContainer}
                      >
                        <TableOrCardsUI
                          containerProps={{
                            controlBlock: (
                              <div className={tableClassNames.rootControlBlock}>
                                {enableAdaptiveCompress ? (
                                  <Suspense
                                    fallback={
                                      isHaveControlBlock ? (
                                        <ControlBlockStyled
                                          $isVisibleSearching={false}
                                          $activeView="rows"
                                          $borderTopRounded={
                                            !isTableInTabs || fullScreened
                                          }
                                          $placeholderSearchBlock={
                                            placeholderSearchBlock
                                          }
                                          $calculatedSearchQuery=""
                                          $collapsedTable={
                                            tableCollapseContextVal.isCollapsed
                                          }
                                        >
                                          <p>Загрузка панели управления...</p>
                                        </ControlBlockStyled>
                                      ) : null
                                    }
                                  >
                                    <ControlBlockLazy
                                      isHaveControlBlock={isHaveControlBlock}
                                      leftSideInner={
                                        controlBlock?.leftSideInner
                                      }
                                      rightSideInner={
                                        controlBlock?.rightSideInner
                                      }
                                      activeView={activeView}
                                      featuresObj={featuresObj}
                                      $borderTopRounded={
                                        !isTableInTabs || fullScreened
                                      }
                                      setCompressionVisibility={
                                        setCompressionVisibility
                                      }
                                      editModeEnabled={editModeEnabled}
                                      editModeLeftSlot={
                                        tableConfig.editing?.editModeLeftSlot
                                      }
                                      fullScreened={fullScreened}
                                      controlBlockLeftSideDropdownProps={
                                        controlBlock.leftSideDropdownProps
                                      }
                                      controlBlockRightSideDropdownProps={
                                        controlBlock.rightSideDropdownProps
                                      }
                                      collapseButtonPlacement={
                                        tableCollapseContextVal.collapseButtonPlacement
                                      }
                                      controlBlockSize={controlBlock?.size}
                                    />
                                  </Suspense>
                                ) : (
                                  <ControlBlockWithoutResize
                                    isHaveControlBlock={isHaveControlBlock}
                                    leftSideInner={controlBlock?.leftSideInner}
                                    rightSideInner={
                                      controlBlock?.rightSideInner
                                    }
                                    activeView={activeView}
                                    featuresObj={featuresObj}
                                    $borderTopRounded={
                                      !isTableInTabs || fullScreened
                                    }
                                    collapseButtonPlacement={
                                      tableCollapseContextVal.collapseButtonPlacement
                                    }
                                    controlBlockSize={controlBlock?.size}
                                  />
                                )}
                                <Suspense fallback={null}>
                                  <FilterListBlock
                                    isOpened={
                                      filtersAreVisible &&
                                      !tableCollapseContextVal.isCollapsed // при collapse таблицы не видна строка фильтров
                                    }
                                    activeView={activeView}
                                    {...{
                                      tableConfig,
                                      columnConfig,
                                      headerContextValue,
                                    }}
                                    $borderLeftTopRadiusRounded={
                                      !isTableInTabs && !isHaveControlBlock
                                    }
                                    $borderRightTopRadiusRounded={
                                      !isTableInTabs && !isHaveControlBlock
                                    }
                                  />
                                </Suspense>
                              </div>
                            ),
                            sidebarBlock:
                              (tableConfig.sidebarConfig?.enabled ?? true) &&
                              featuresObj.isHaveSomeFeatureInSidebar ? (
                                <TableSidebar
                                  $borderRightBottomRadiusRounded={
                                    !paginationActiveInConfig
                                  }
                                  $borderRightTopRadiusRounded={
                                    !isTableInTabs && !isHaveControlBlock
                                  }
                                  activeTabId={featuresObj.activeSidebarTabId}
                                  sidebarTabs={featuresObj.sidebarTabs}
                                  defaultActiveTabId={
                                    tableConfig.sidebarConfig
                                      ?.defaultActiveTabId
                                  }
                                  activeTabState={
                                    tableConfig.sidebarConfig?.activeTabState
                                  }
                                  onActiveTabChange={
                                    tableConfig.sidebarConfig?.onActiveTabChange
                                  }
                                />
                              ) : null,
                            refTableGlobalContainer,
                            refTableContainer: refTableContainerCombined,
                            $tableAndSidebarContainerHeightStyle:
                              tableAndSidebarContainerHeightStyle,
                            viewProp: { activeView, view },
                            containerId: tableConfig.containerId,
                            $borderLeftTopRadiusRounded:
                              borderLeftTopRadiusRounded,
                            $borderRightTopRadiusRounded:
                              borderRightTopRadiusRounded,
                            $borderLeftBottomRadiusRounded:
                              borderLeftBottomRadiusRounded,
                            $borderRightBottomRadiusRounded:
                              borderRightBottomRadiusRounded,
                            $columnsGroupingIsActive: columnsGroupingIsActive,
                            $containerStyle: containerStyleResult,
                            $containerCss: containerCss,
                            $fullScreened: fullScreened,
                            fullScreenPortal,
                            $css: tableConfig.css,
                            $highlightActiveType:
                              tableConfig.highlightActiveType ?? 'disabled',
                            collapseButtonPlacement:
                              tableCollapseContextVal.collapseButtonPlacement,
                            isHaveSomeFeatureInSidebar:
                              featuresObj.isHaveSomeFeatureInSidebar,
                            collapseButtonAboveRightSlot:
                              tableCollapseContextVal.collapseButtonAboveRightSlot,
                            controlBlockSize: controlBlock?.size,
                            $borderTopRounded: !isTableInTabs || fullScreened,
                          }}
                          dataGridProps={{
                            refTable: stableDataEditorRef,

                            rows: rowsWithSkeletonsOrNot,

                            // rowSize and height
                            rowSize,
                            ...(resultRowHeight && {
                              rowHeight: resultRowHeight,
                            }),
                            headerHeight: 33,

                            ...(tableConfig.editing &&
                              !isLoadingTable && {
                                onRowsChange: onRowsChangeLastVersion,
                              }),

                            // --------- clipboard (copy support) + fill handle (source cell tracking)
                            // Канал для copy/paste (selectionRef) — отдельно от
                            // controlled gridSelection.
                            onSelectionEmit: combinedOnGridSelectionChange,

                            // Сброс выделения при смене проекции данных.
                            projectionResetSignal,

                            // Ключи выделенных колонок наверх → контрл-блок
                            // (нативный экшен «Закрепить столбцы»).
                            onColumnSelectionChange: setSelectedColumnKeys,

                            // Follow: перевыделение после пина/анпина.
                            pendingColumnSelectionKeys: pendingSelectKeys,
                            onColumnSelectionApplied: () =>
                              setPendingSelectKeys(null),

                            // --------- внешний (controlled) контроль выделения
                            gridSelection:
                              tableConfig.cellsSelection?.state?.[0],
                            onGridSelectionChange:
                              tableConfig.cellsSelection?.state?.[1],
                            highlightActiveRow:
                              tableConfig.highlightActiveRow?.state?.[0],
                            // controlled только если задан state-кортеж.
                            highlightActiveRowControlled:
                              !!tableConfig.highlightActiveRow?.state,
                            onHighlightActiveRowChange:
                              handleHighlightActiveRowChange,

                            // glide требует для чтения source range
                            getCellsForSelection: true as const,
                            // --------- fill handle (drag-to-fill)
                            ...(fillHandleProps && {
                              fillHandle: fillHandleProps.fillHandle,
                              allowedFillDirections:
                                fillHandleProps.allowedFillDirections,
                              onFillPattern: fillHandleProps.onFillPattern,
                            }),

                            // --------- columns
                            columns: reorderedColumns,

                            ...(reorderInHeaderIsActive && {
                              onColumnsReorder,
                            }),

                            // --------- summaryRows
                            ...(summaryRowsIsActive &&
                              !isLoadingTable && {
                                // topSummaryRows,
                                bottomSummaryRows,
                              }),
                            ...(contentStateOverlay && {
                              contentStateOverlay,
                            }),
                            CellReadOnlyEditor,

                            // FIXME
                            // ...(noRowsFallback && {
                            //   renderers: {
                            //     noRowsFallback: isCustomNoRowsFallback ? (
                            //       noRowsFallback.custom
                            //     ) : (
                            //       <NoRowsFallback />
                            //     ),
                            //   },
                            // }),

                            // rowClass,
                            // style: styleMemo,
                            // onScroll,
                            // onCellClick,
                            // some data-grid props
                            ...pasteOnlyKeysWithNotUndefinedValue({
                              // 'data-testid': tableConfig['data-testid'],
                              // summaryRowHeight,
                              // onFill,
                              // onCopy,
                              // onPaste,
                              // onCellDoubleClick,
                              // onCellContextMenu,
                              // onCellKeyDown,
                              // onSelectedCellChange,
                              onColumnResize, // Для TableGlideInstance
                              onVisibleRegionChanged: handleVisibleRegionChange, // Для TableGlideInstance
                              // enableVirtualization,
                              onCellClicked: tableConfig.onCellClicked,
                              unstickyHeader: tableConfig.unstickyHeader,
                              minColumnWidth: tableConfig.minColumnWidth,
                              maxColumnWidth: tableConfig.maxColumnWidth,
                              maxColumnAutoWidth:
                                tableConfig.maxColumnAutoWidth,
                              resizableColumn: tableConfig.resizableColumn,
                              spanGroupHeader:
                                tableConfig.columnsGrouping?.squashEmptyCells ??
                                true,
                              spanShallowGroups:
                                tableConfig.columnsGrouping?.squashEmptyCells ??
                                true,
                              spanAlign:
                                tableConfig.columnsGrouping
                                  ?.squashedHeaderAlign,
                              editorOverlayPortal:
                                tableConfig.editorOverlayPortal,
                              checkboxSelectedRowIndexes,
                              checkboxVisibleRowIndexes,
                              enableColumnSelection:
                                tableConfig.cellsSelection
                                  ?.enableColumnSelection ?? true,
                              enableRowSelection:
                                tableConfig.cellsSelection
                                  ?.enableRowSelection ?? true,
                              enableSelectAll:
                                tableConfig.cellsSelection?.enableSelectAll ??
                                true,
                              cellsSelectionMode:
                                tableConfig.cellsSelection?.mode ??
                                'range-cell',
                              hoverEffects: tableConfig.hoverEffects,
                              enableLowDprHairline:
                                tableConfig.enableLowDprHairline,
                            }),
                          }}
                          pagination={pagination}
                          setPaginationHeight={setPaginationHeight}
                          loadingOverlayConfig={tableConfig.loadingOverlay}
                          containerStyle={tableConfig.containerStyle}
                          tooltip={tableConfig.tooltip}
                          massActionPanel={
                            tableConfig?.controlBlock?.massActionPanel
                          }
                          fullScreened={fullScreened}
                        />
                      </TableResizeObserverProviderWrapper>
                    </RowDetailHandlerContextProvider>
                  </SelectingContextProvider>
                </ColumnGroupContext.Provider>
              </RowInstrumentsCtxProvider>
            </TablePopoverProvider>
          </ContextProviders>
        </RefTableContext.Provider>
      </RefTableContainerContext.Provider>
    </RefTableGlobalContainerContext.Provider>
  );
}
