/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Box } from '@ui-kit/components/Box';
import type { MassActionsSize } from '@ui-kit/components/MassActions';
import { useActiveTheme } from '@ui-kit/utils';
import React, { ReactNode, Ref, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { CSSObject, CSSProperties } from 'styled-components';

import type { TableDropdownConfigProps } from '../components/TableDropdown/types';
import {
  DEFAULT_MAX_COLUMN_WIDTH,
  DEFAULT_MIN_COLUMN_WIDTH,
} from '../constants';
import { useContextMenu, useTableCollapse } from '../contexts';
import {
  CollapseBlockAbove,
  CollapseTableWrapper,
} from '../feature-collapse-table';
import { ContextMenu } from '../feature-context-menu';
import { TableLoadingOverlay } from '../feature-loading-overlay/TableLoadingOverlay';
import { TablePagination } from '../feature-pagination';
import type { PaginationProps } from '../feature-pagination/types';
import { PopoverInTable } from '../feature-popover-table/components/PopoverContainer';
import { CanvasTooltipOverlay } from '../feature-tooltip';
import { ContainerStyled, SIZES, tableClassNames as cls } from '../styles';
import {
  type ColumnOrColumnGroupGlideInstance,
  type DataEditorRef,
  type HighlightActiveType,
  TableGlideInstance,
  type TableGlideInstanceProps,
} from '../TableGlideInstance';
import type {
  ActiveViewModsType,
  ControlBlockSize,
  Key,
  ObjectForExtending,
  TableConfigTooltip,
  View,
  ViewMods,
} from '../types';
import { MassActionButtonProps, MassActions } from './mass-actions';

function activeViewIs<T extends 'cards' | 'rows'>(
  checkType: T,
  viewState: 'cards' | 'rows',
  view: View,
): view is ViewMods[T] {
  return checkType === viewState;
}

export const TableOrCardsUI = <
  RowType extends ObjectForExtending,
  SummRowType,
  // FIXME
  _K extends Key = Key,
>({
  containerProps: {
    viewProp: { activeView, view },
    controlBlock,
    containerId,
    sidebarBlock,
    refTableGlobalContainer,
    refTableContainer,
    $borderLeftTopRadiusRounded,
    $borderRightTopRadiusRounded,
    $borderLeftBottomRadiusRounded,
    $borderRightBottomRadiusRounded,
    $containerStyle,
    $columnsGroupingIsActive,
    $containerCss,
    $css,
    $fullScreened,
    fullScreenPortal,
    $tableAndSidebarContainerHeightStyle,
    $highlightActiveType,
    collapseButtonPlacement,
    collapseButtonAboveRightSlot,
    $borderTopRounded,
    isHaveSomeFeatureInSidebar,
    controlBlockSize,
  },

  dataGridProps: {
    className,
    rowSize,
    refTable,
    onCellContextMenu,
    CellReadOnlyEditor,
    ...restDataGridProps
  },
  pagination,
  setPaginationHeight,
  loadingOverlayConfig,
  containerStyle,
  massActionPanel,
  tooltip,
  fullScreened,
}: {
  containerProps: {
    viewProp: {
      activeView: ActiveViewModsType;
      view: View;
    };
    controlBlock: ReactNode;
    sidebarBlock: ReactNode;
    containerId: string | undefined;
    refTableGlobalContainer: React.MutableRefObject<HTMLDivElement | null>;
    refTableContainer: React.Ref<HTMLDivElement>;

    $borderLeftTopRadiusRounded: boolean | undefined;
    $borderRightTopRadiusRounded: boolean | undefined;
    $borderRightBottomRadiusRounded: boolean | undefined;
    $borderLeftBottomRadiusRounded: boolean | undefined;
    $columnsGroupingIsActive: boolean;
    $containerStyle: CSSProperties | undefined;
    $containerCss: string | CSSObject | undefined;
    $css: string | CSSObject | undefined;
    $fullScreened: boolean;
    fullScreenPortal: Element | DocumentFragment | false;
    $tableAndSidebarContainerHeightStyle: CSSProperties;
    $highlightActiveType: HighlightActiveType;
    collapseButtonPlacement?: 'inside' | 'above';
    collapseButtonAboveRightSlot?: ReactNode;
    controlBlockSize?: ControlBlockSize;
    $borderTopRounded: boolean;
    isHaveSomeFeatureInSidebar: boolean | undefined;
  };
  dataGridProps: {
    rowSize: keyof typeof SIZES;
    refTable: Ref<DataEditorRef> | undefined;
  } & Omit<TableGlideInstanceProps<RowType, SummRowType>, 'columns'> & {
      columns: readonly ColumnOrColumnGroupGlideInstance<
        RowType,
        SummRowType
      >[];
      onColumnResize?: TableGlideInstanceProps<
        RowType,
        SummRowType
      >['onColumnResize']; // Для TableGlideInstance
      onVisibleRegionChanged?: TableGlideInstanceProps<
        RowType,
        SummRowType
      >['onVisibleRegionChanged']; // Для TableGlideInstance
    };
  pagination: PaginationProps | undefined;
  setPaginationHeight: React.Dispatch<React.SetStateAction<number>>;
  loadingOverlayConfig?: {
    active?: boolean;
    spinner?: ReactNode;
    title?: string;
    subtitle?: string;
    showSubtitleDelay?: number;
  };
  containerStyle?: CSSProperties | undefined;
  massActionPanel?: {
    buttons: MassActionButtonProps[];
    collapsedDropdownProps?: TableDropdownConfigProps;
    bottom?: number;
    show?: boolean;
    size?: MassActionsSize;
  };
  tooltip?: TableConfigTooltip;
  fullScreened?: boolean;
}) => {
  const tooltipCustomEnabled = tooltip?.enabled ?? false;
  const {
    openHeaderContextMenu,
    enableHeaderContextMenu,
    enableCellContextMenu,
    openCellContextMenu,
  } = useContextMenu();
  const isCardViewActive = activeViewIs('cards', activeView, view);
  const isRowsViewActive = !isCardViewActive;
  const fullScreenedCls = $fullScreened ? cls.tableContainerFullScreened : '';
  const { isCollapsed, enableCollapse } = useTableCollapse();

  const activeTheme = useActiveTheme();

  const collapsedStyles = useMemo(
    () => ({
      maxHeight: 0,
      opacity: 0,
      overflow: 'hidden',
    }),
    [],
  );

  const isNeedRenderContextMenu =
    enableHeaderContextMenu || enableCellContextMenu;

  const JSX = (
    <ContainerStyled
      ref={refTableGlobalContainer}
      id={containerId}
      className={`${cls.tableContainer} ${fullScreenedCls} ${activeView}-view-container-all`}
      $activeView={activeView}
      $isHaveRowHeightAnimation
      $borderRightTopRadiusRounded={$borderRightTopRadiusRounded}
      $borderLeftTopRadiusRounded={$borderLeftTopRadiusRounded}
      $borderLeftBottomRadiusRounded={$borderLeftBottomRadiusRounded}
      $borderRightBottomRadiusRounded={$borderRightBottomRadiusRounded}
      $rowHeight={rowSize}
      // container css, style
      $fullScreened={$fullScreened}
      $columnsGroupingIsActive={$columnsGroupingIsActive}
      $containerCss={$containerCss}
      style={$containerStyle}
      // table css ( table style передается напрямую в DataGrid)
      $css={$css}
      $highlightActiveType={$highlightActiveType}
      $isCollapsed={isCollapsed}
      $isEnabledCollapse={enableCollapse}
      $activeTheme={activeTheme}
    >
      {loadingOverlayConfig?.active ? (
        <TableLoadingOverlay
          loadingOverlayConfig={loadingOverlayConfig}
          containerStyle={containerStyle}
          borderTopRounded={$borderTopRounded}
        />
      ) : (
        <>
          {/* Блок коллапсинга / заголовка сверху */}
          {collapseButtonPlacement === 'above' && (
            <CollapseBlockAbove
              activeView={activeView}
              $borderTopRounded={$borderTopRounded}
              rightSlot={collapseButtonAboveRightSlot}
              size={controlBlockSize}
            />
          )}
          <CollapseTableWrapper>{controlBlock}</CollapseTableWrapper>
          {isCardViewActive && (
            <Box
              className={`${cls.table} ${cls.tableCardsViewContainer}`}
              style={{
                ...(isCollapsed && collapsedStyles),
              }}
            >
              {view.typeCardsRender}
            </Box>
          )}
          {isRowsViewActive && (
            <Box
              className={cls.tableSidebarLayout}
              style={{
                ...$tableAndSidebarContainerHeightStyle,
                ...(isCollapsed && collapsedStyles),
              }}
            >
              <TableGlideInstance<RowType, SummRowType>
                className={className}
                onRowsChange={restDataGridProps.onRowsChange}
                columns={restDataGridProps.columns}
                rows={restDataGridProps.rows}
                rowSize={rowSize}
                onColumnResize={restDataGridProps.onColumnResize}
                onVisibleRegionChanged={
                  restDataGridProps.onVisibleRegionChanged
                }
                highlightActiveType={$highlightActiveType}
                enableLowDprHairline={restDataGridProps.enableLowDprHairline}
                rowHeight={restDataGridProps.rowHeight}
                bottomSummaryRows={restDataGridProps.bottomSummaryRows}
                refTable={refTable}
                portalEventTargetRef={refTableGlobalContainer}
                onColumnsReorder={restDataGridProps?.onColumnsReorder}
                unstickyHeader={restDataGridProps?.unstickyHeader}
                spanGroupHeader={restDataGridProps.spanGroupHeader}
                spanShallowGroups={restDataGridProps.spanShallowGroups}
                spanAlign={restDataGridProps.spanAlign}
                minColumnWidth={
                  restDataGridProps.minColumnWidth ?? DEFAULT_MIN_COLUMN_WIDTH
                }
                maxColumnWidth={
                  restDataGridProps.maxColumnWidth ?? DEFAULT_MAX_COLUMN_WIDTH
                }
                maxColumnAutoWidth={restDataGridProps.maxColumnAutoWidth}
                resizableColumn={restDataGridProps.resizableColumn}
                checkboxSelectedRowIndexes={
                  restDataGridProps.checkboxSelectedRowIndexes
                }
                checkboxVisibleRowIndexes={
                  restDataGridProps.checkboxVisibleRowIndexes
                }
                enableColumnSelection={restDataGridProps.enableColumnSelection}
                enableRowSelection={restDataGridProps.enableRowSelection}
                enableSelectAll={restDataGridProps.enableSelectAll}
                cellsSelectionMode={restDataGridProps.cellsSelectionMode}
                hoverEffects={restDataGridProps.hoverEffects}
                getCellsForSelection={restDataGridProps.getCellsForSelection}
                onGridSelectionChange={restDataGridProps.onGridSelectionChange}
                onSelectionEmit={restDataGridProps.onSelectionEmit}
                onColumnSelectionChange={
                  restDataGridProps.onColumnSelectionChange
                }
                pendingColumnSelectionKeys={
                  restDataGridProps.pendingColumnSelectionKeys
                }
                onColumnSelectionApplied={
                  restDataGridProps.onColumnSelectionApplied
                }
                gridSelection={restDataGridProps.gridSelection}
                highlightActiveRow={restDataGridProps.highlightActiveRow}
                highlightActiveRowControlled={
                  restDataGridProps.highlightActiveRowControlled
                }
                onHighlightActiveRowChange={
                  restDataGridProps.onHighlightActiveRowChange
                }
                fillHandle={restDataGridProps.fillHandle}
                allowedFillDirections={restDataGridProps.allowedFillDirections}
                onFillPattern={restDataGridProps.onFillPattern}
                contentStateOverlay={restDataGridProps.contentStateOverlay}
                onCellClicked={restDataGridProps.onCellClicked}
                editorOverlayPortal={restDataGridProps.editorOverlayPortal}
                fullScreened={fullScreened}
                CellReadOnlyEditor={CellReadOnlyEditor}
                containerProps={{
                  className: cls.tableSidebarTableContainer,
                  ref: refTableContainer,
                }}
                renderOverlayFeatures={({
                  containerElement,
                  renderInContainer,
                }) => (
                  <>
                    {renderInContainer(
                      <PopoverInTable containerEl={containerElement} />,
                    )}
                    {renderInContainer(
                      <CanvasTooltipOverlay
                        containerRef={refTableGlobalContainer}
                        customEnabled={tooltipCustomEnabled}
                        mouseEnterDelay={tooltip?.mouseEnterDelay}
                        mouseLeaveDelay={tooltip?.mouseLeaveDelay}
                      />,
                    )}
                    {isNeedRenderContextMenu &&
                      renderInContainer(
                        <ContextMenu containerEl={containerElement} />,
                      )}
                  </>
                )}
                {...(enableHeaderContextMenu && {
                  onHeaderContextMenu: (colIndex, event, tableInfo) => {
                    openHeaderContextMenu?.(colIndex, event, tableInfo);
                  },
                })}
                {...(enableCellContextMenu && {
                  onCellContextMenu: (cell, event, tableInfo) => {
                    openCellContextMenu?.(cell, event, tableInfo);
                  },
                })}
              />
              {sidebarBlock}
              {massActionPanel?.show !== false && (
                <MassActions
                  buttons={massActionPanel?.buttons}
                  isHaveSomeFeatureInSidebar={isHaveSomeFeatureInSidebar}
                  collapsedDropdownProps={
                    massActionPanel?.collapsedDropdownProps
                  }
                  bottom={massActionPanel?.bottom}
                  forceShow={massActionPanel?.show === true}
                  size={massActionPanel?.size}
                />
              )}
            </Box>
          )}
          {pagination && (
            <TablePagination
              {...pagination}
              setPaginationHeight={setPaginationHeight}
            />
          )}
        </>
      )}
    </ContainerStyled>
  );

  if ($fullScreened && fullScreenPortal) {
    return createPortal(JSX, fullScreenPortal);
  }
  return JSX;
};
