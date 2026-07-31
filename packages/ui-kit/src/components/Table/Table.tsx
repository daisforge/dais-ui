import 'react-data-grid/lib/styles.css';

import { mergeRefs } from '@ui-kit/utils';
import React, { Suspense, useMemo, useRef, useState } from 'react';
import { DataGridHandle } from 'react-data-grid';

import {
  ContextProviders,
  type HeaderContextValueTypeInstance,
  RefTableContainerContext,
  RefTableContext,
  RefTableGlobalContainerContext,
  TableResizeObserverProviderWrapper,
} from './contexts';
import { useColumnsControl } from './feature-column-control';
import {
  useGetAllLvlColumnsConfig,
  useLastLvlColumnConfig,
} from './feature-columns-grouping';
import { getEditingEnabledState } from './feature-edit';
import { FilterListBlock } from './feature-filtering';
import { useFullScreenState } from './feature-full-screen/useFullScreenState';
import { useInfinityScroll } from './feature-infinity-scroll/use-infinity-scroll';
import { useColsWithKeyTextMap, useKeyTextState } from './feature-key-text';
import { TableSidebar } from './feature-right-sidebar';
import { useRowDetailPanel } from './feature-row-detail';
import { RowDetailHandlerContextProvider } from './feature-row-detail/ctx';
import { RowInstrumentsCtxProvider } from './feature-row-instruments';
import { getDefuaultRowSize } from './feature-row-size';
import { useGroupedRows } from './feature-rows-grouping';
import { SelectingContextProvider } from './feature-select-row/selecting-contexts';
import { useSelectRow } from './feature-select-row/useSelectRow';
import { useSortedRows } from './feature-sorting';
import { useTableTabsContext } from './feature-tabs';
import { SIZE, tableClassNames } from './styles';
import {
  useCloseContextMenuOnScroll,
  useColumns,
  useContextMenuValues,
  useContextsValues,
  useFilteredRows,
  useFlattenedRows,
  useInlineStyle,
  useIsLoadingTable,
  useOnCellClick,
  useOnRowsChange,
  useOnScroll,
  usePrepareTableConfig,
  useRowClass,
  useRowHeight,
  useRowInstruments,
  useRowsWithSkeletonsOrNot,
  useSearchValues,
  useSidebarState,
  useTableCollapseValues,
} from './table-hooks';
import { ActiveViewModsType, ObjectForExtending, TableProps } from './types';
import { pasteOnlyKeysWithNotUndefinedValue } from './utils';
import { ControlBlockLazy, NoRowsFallback, TableOrCardsUI } from './widgets';
import { ControlBlockWithoutResize } from './widgets/control-block';
import { ControlBlockStyled } from './widgets/control-block/styled';
import { ToolsMenuState } from './widgets/control-block/types';
import { useFeatureArray } from './widgets/control-block/use-feature-array';

export interface Props {
  direction: 'ltr' | 'rtl';
}

export function Table<
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
  topSummaryRows,
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
  const refTableX = useRef<DataGridHandle>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableRefTable = useMemo(
    () => (refTable ? mergeRefs(refTable, refTableX) : refTableX),
    [refTable],
  );

  // ------------------------------------------------  preparing TableConfig ------------------------------------------------
  const { tableConfig } = usePrepareTableConfig({ tableConfigExternal });
  // ------------------------------------------------  get last lvl of columnConfig ------------------------------------------------
  const { columnConfig, allColsFlattened, columnsGroupingIsActive } =
    useLastLvlColumnConfig(colsOrGroupColsConfig);

  // ------------------------------------------------  isLoadingTable ------------------------------------------------
  const { isLoadingTable, skeletonRowsCount } = useIsLoadingTable({
    tableConfig,
  });

  // ------------------------------------------------  infinityScroll ------------------------------------------------
  const {
    infinityScrollHandler,
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
    useRowInstruments(tableConfig.rowInstruments);
  // ------------------------------------------------ selecting rows -----------------------------------------
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
  } = useSelectRow({ tableConfig, rows });

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
  // ------------------------------------------------ columns reConfig -----------------------------------------
  const {
    columns,
    reorderedColumns,
    columnsOrder,
    getDefaultColumnsOrder,
    setColumnsOrder,
    onColumnsReorder,
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
  });

  const { columnsWithParentGroups } = useGetAllLvlColumnsConfig(
    reorderedColumns,
    allColsFlattened,
    columnsGroupingIsActive,
  );

  // ------------------------------------------------ view type -----------------------------------------
  const view = tableConfig.view ?? { type: 'rows' };
  const [activeView, setActiveView] = useState<ActiveViewModsType>(() => {
    if (view.type === 'both-types') {
      return view.default ?? 'rows';
    }
    return view.type;
  });

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
    refTableX,
  });

  // Закрываем контекстное меню при вертикальном скролле таблицы (по оси Y)
  const handleContextMenuScroll =
    useCloseContextMenuOnScroll(contextMenuCtxVal);

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
    toggleExpandAllButton,
  } = useFlattenedRows({
    rows: groupedRows as RowType[],
    tableConfig,
    groupedCols,
  });

  // ------------------------------------------------ changing rows ------------------------------------------------
  const { onRowsChangeLastVersion } = useOnRowsChange({ tableConfig, rows });

  // ------------------------------------------------  data-grid props ------------------------------------------------
  const {
    containerCss,
    style,
    summaryRowHeight,
    onFill,
    onCopy,
    onPaste,
    onCellClick: onCellClickExternal,
    onCellDoubleClick,
    onCellContextMenu,
    onCellKeyDown,
    onSelectedCellChange,
    onColumnResize,
    enableVirtualization,
    //
    onScroll: onScrollExternal,
    rowClass: rowClassExternal,
    // "data-testid"
    headerRowHeight,
  } = tableConfig;

  // ------------------------------------------------  onCellClick ------------------------------------------------
  const onCellClick = useOnCellClick({ onCellClickExternal });

  // ------------------------------------------------  onScroll ------------------------------------------------

  // ------------------------------------------------  onScroll ------------------------------------------------
  const { onScroll } = useOnScroll({
    onScrollExternal,
    infinityScrollHandler,
    isHaveActiveInfinityScroll,
    onScrollInternal: handleContextMenuScroll,
  });

  // ------------------------------------------------  rowClass ------------------------------------------------
  const { rowClass } = useRowClass({
    rowClassExternal,
    tableConfigSubRowsBoolean: !!tableConfig.subRows,
    tableConfigRowDetailBoolean: !!tableConfig.rowDetailPanel,
  });

  // ------------------------------------------------ row detail ------------------------------------------------
  const {
    rowsWithExpDetails,
    rowDetailContextValue,
    rowDetailIsActiveInConfig,
  } = useRowDetailPanel({
    tableConfigRowDetail: tableConfig.rowDetailPanel,
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

  // ------------------------------------------------ table in TableTabs ------------------------------------------------
  const { isInTabs: isTableInTabs } = useTableTabsContext();

  // ------------------------------------------------  fullScreen mode ------------------------------------------------
  const {
    state: [fullScreened, setFullScreened],
    fullScreenPortal,
  } = useFullScreenState(tableConfig.fullScreenEnabled);

  // ------------------------------------------------ compressing visibility state ------------------------------------------------
  const [compressionVisibility, setCompressionVisibility] =
    useState<ToolsMenuState>();
  const enableAdaptiveCompress =
    tableConfig.controlBlock?.enableAdaptiveCompress ?? true;

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
    // CompressionVisibilityState
    compressionVisibility,
    enableAdaptiveCompress,
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

  // ------------------------------------------------ inline style props ------------------------------------------------
  // вычисляется высота таблицы, обновляется ширина таблицы при изменении колонок и др.
  const {
    styleMemo,
    containerStyleResult,
    tableAndSidebarContainerHeightStyle,
  } = useInlineStyle({
    style,
    tableConfig,
    reorderedColumns,
    filtersAreVisible,
    controlBlockIsHave: isHaveControlBlock,
    isSearchingBellow:
      compressionVisibility?.middle.searchingFeature.searchPosition === 'below',
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
  const { noRowsFallback } = tableConfig;
  const isCustomNoRowsFallback = typeof noRowsFallback === 'object';

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

  return (
    <RefTableGlobalContainerContext.Provider value={refTableGlobalContainer}>
      <RefTableContainerContext.Provider value={refTableContainerInternal}>
        <RefTableContext.Provider value={refTableX}>
          <ContextProviders<RowType, SummaryRowType>
            headerCtxV={HeaderCtxVal}
            rowCtxV={rowContextValueTotal}
            expandedRowCtxV={expandedRowsIdsStateAndSetter}
            searchCtxV={searchContextVal}
            contextMenuCtxV={contextMenuCtxVal}
            sideBarCtxV={sideBarContextVal}
            tableCollapseCtxV={tableCollapseContextVal}
          >
            <RowInstrumentsCtxProvider value={getRowDropdownConfig}>
              <SelectingContextProvider
                {...{
                  selectingRowConfig,
                  rows,
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
                <RowDetailHandlerContextProvider value={rowDetailContextValue}>
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
                                  leftSideInner={controlBlock?.leftSideInner}
                                  rightSideInner={controlBlock?.rightSideInner}
                                  activeView={activeView}
                                  featuresObj={featuresObj}
                                  $borderTopRounded={
                                    !isTableInTabs || fullScreened
                                  }
                                  setCompressionVisibility={
                                    setCompressionVisibility
                                  }
                                  editModeEnabled={editModeEnabled}
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
                                />
                              </Suspense>
                            ) : (
                              <ControlBlockWithoutResize
                                isHaveControlBlock={isHaveControlBlock}
                                leftSideInner={controlBlock?.leftSideInner}
                                rightSideInner={controlBlock?.rightSideInner}
                                activeView={activeView}
                                featuresObj={featuresObj}
                                $borderTopRounded={
                                  !isTableInTabs || fullScreened
                                }
                                collapseButtonPlacement={
                                  tableCollapseContextVal.collapseButtonPlacement
                                }
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
                                tableConfig.sidebarConfig?.defaultActiveTabId
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
                          !isTableInTabs &&
                          !isHaveControlBlock &&
                          !filtersAreVisible,
                        $borderRightTopRadiusRounded:
                          !isTableInTabs &&
                          !isHaveControlBlock &&
                          !filtersAreVisible &&
                          !featuresObj.isHaveSomeFeatureInSidebar,
                        $borderLeftBottomRadiusRounded:
                          !paginationActiveInConfig,
                        $borderRightBottomRadiusRounded:
                          !paginationActiveInConfig &&
                          !featuresObj.isHaveSomeFeatureInSidebar,
                        $columnsGroupingIsActive: columnsGroupingIsActive,
                        $containerStyle: containerStyleResult,
                        $containerCss: containerCss,
                        $fullScreened: fullScreened,
                        fullScreenPortal,
                        $css: tableConfig.css,
                        $highlightActiveType:
                          tableConfig.highlightActiveType ?? 'cell',
                        collapseButtonPlacement:
                          tableCollapseContextVal.collapseButtonPlacement,
                        isHaveSomeFeatureInSidebar:
                          featuresObj.isHaveSomeFeatureInSidebar,
                        collapseButtonAboveRightSlot:
                          tableCollapseContextVal.collapseButtonAboveRightSlot,
                        $borderTopRounded: !isTableInTabs || fullScreened,
                      }}
                      dataGridProps={{
                        refTable: stableRefTable,

                        rows: rowsWithSkeletonsOrNot,

                        // rowSize and height
                        rowSize,
                        ...(resultRowHeight && {
                          rowHeight: resultRowHeight,
                        }),

                        headerRowHeight: headerRowHeight ?? 33,

                        ...(tableConfig.editing &&
                          !isLoadingTable && {
                            onRowsChange: onRowsChangeLastVersion,
                          }),

                        // --------- columns
                        columns: columnsWithParentGroups,

                        ...(reorderInHeaderIsActive && {
                          onColumnsReorder,
                        }),

                        // --------- summaryRows
                        ...(summaryRowsIsActive &&
                          !isLoadingTable && {
                            topSummaryRows,
                            bottomSummaryRows,
                          }),
                        ...(noRowsFallback && {
                          renderers: {
                            noRowsFallback: isCustomNoRowsFallback ? (
                              noRowsFallback.custom
                            ) : (
                              <NoRowsFallback />
                            ),
                          },
                        }),

                        rowClass,
                        style: styleMemo,
                        onScroll,
                        onCellClick,
                        // some data-grid props
                        ...pasteOnlyKeysWithNotUndefinedValue({
                          'data-testid': tableConfig['data-testid'],
                          summaryRowHeight,
                          onFill,
                          onCopy,
                          onPaste,
                          onCellDoubleClick,
                          onCellContextMenu,
                          onCellKeyDown,
                          onSelectedCellChange,
                          onColumnResize,
                          enableVirtualization,
                        }),
                      }}
                      pagination={pagination}
                      setPaginationHeight={setPaginationHeight}
                      loadingOverlayConfig={tableConfig.loadingOverlay}
                      containerStyle={tableConfig.containerStyle}
                      massActionPanel={
                        tableConfig?.controlBlock?.massActionPanel
                      }
                    />
                  </TableResizeObserverProviderWrapper>
                </RowDetailHandlerContextProvider>
              </SelectingContextProvider>
            </RowInstrumentsCtxProvider>
          </ContextProviders>
        </RefTableContext.Provider>
      </RefTableContainerContext.Provider>
    </RefTableGlobalContainerContext.Provider>
  );
}
