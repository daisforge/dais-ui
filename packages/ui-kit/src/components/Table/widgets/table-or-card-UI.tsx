/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Box } from '@ui-kit/components/Box';
import type {
  MassActionsButtonProps,
  MassActionsSize
} from '@ui-kit/components/MassActions/types';
import { useActiveTheme } from '@ui-kit/utils';
import React, { ReactNode, Ref, useMemo } from 'react';
import DataGrid, {
  CellClickArgs,
  CellMouseEvent,
  DataGridHandle,
  DataGridProps
} from 'react-data-grid';
import { createPortal } from 'react-dom';
import { CSSObject, CSSProperties } from 'styled-components';

import { TableDropdownConfigProps } from '../components/TableDropdown/types';
import { useContextMenu, useTableCollapse } from '../contexts';
import {
  CollapseBlockAbove,
  CollapseTableWrapper
} from '../feature-collapse-table';
import { ContextMenu } from '../feature-context-menu';
import { TableLoadingOverlay } from '../feature-loading-overlay/TableLoadingOverlay';
import { TablePagination } from '../feature-pagination';
import { PaginationProps } from '../feature-pagination/types';
import { ContainerStyled, SIZES, tableClassNames as cls } from '../styles';
import type {
  ActiveViewModsType,
  HighlightActiveType,
  Key,
  View,
  ViewMods
} from '../types';
import { MassActionsInTable } from './mass-actions';

function activeViewIs<T extends 'cards' | 'rows'>(
  checkType: T,
  viewState: 'cards' | 'rows',
  view: View
): view is ViewMods[T] {
  return checkType === viewState;
}

export const TableOrCardsUI = <RowType, SummRowType, K extends Key = Key>({
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
    isHaveSomeFeatureInSidebar
  },

  dataGridProps: {
    className,
    rowSize,
    refTable,
    onCellContextMenu,
    ...restDataGridProps
  },
  pagination,
  setPaginationHeight,
  loadingOverlayConfig,
  containerStyle,
  massActionPanel
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
    $borderTopRounded: boolean;
    isHaveSomeFeatureInSidebar: boolean | undefined;
  };
  dataGridProps: {
    rowSize: keyof typeof SIZES;
    refTable: Ref<DataGridHandle> | undefined;
  } & DataGridProps<RowType, SummRowType, K>;
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
    buttons: MassActionsButtonProps[];
    collapsedDropdownProps?: TableDropdownConfigProps;
    bottom?: number;
    show?: boolean;
    size?: MassActionsSize;
  };
}) => {
  const {
    openHeaderContextMenu,
    enableHeaderContextMenu,
    enableCellContextMenu,
    openCellContextMenu
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
      overflow: 'hidden'
    }),
    []
  );

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
      {...(enableHeaderContextMenu && {
        onContextMenu: (event) => {
          openHeaderContextMenu(event);
        }
      })}
      $isCollapsed={isCollapsed}
      $isEnabledCollapse={enableCollapse}
      $activeTheme={activeTheme}
    >
      {loadingOverlayConfig?.active ? (
        <TableLoadingOverlay
          loadingOverlayConfig={loadingOverlayConfig}
          containerStyle={containerStyle}
        />
      ) : (
        <>
          {/* Блок коллапсинга сверху */}
          {collapseButtonPlacement === 'above' && (
            <CollapseBlockAbove
              activeView={activeView}
              $borderTopRounded={$borderTopRounded}
              rightSlot={collapseButtonAboveRightSlot}
            />
          )}
          <CollapseTableWrapper>{controlBlock}</CollapseTableWrapper>
          {isCardViewActive && (
            <Box
              className={`${cls.table} ${cls.tableCardsViewContainer}`}
              style={{
                ...restDataGridProps.style,
                ...(isCollapsed && collapsedStyles)
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
                ...(isCollapsed && collapsedStyles)
              }}
            >
              <div
                className={cls.tableSidebarTableContainer}
                ref={refTableContainer}
              >
                <DataGrid
                  ref={refTable}
                  className={`${cls.table}-light ${
                    cls.tableRowsViewContainer
                  } ${className ?? ''}`}
                  rowHeight={SIZES[rowSize].rowHeight as number}
                  summaryRowHeight={SIZES[rowSize].rowHeight}
                  {...restDataGridProps}
                  style={{
                    ...restDataGridProps.style
                  }}
                  {...(enableCellContextMenu && {
                    onCellContextMenu: (
                      args: CellClickArgs<RowType, SummRowType>,
                      event: CellMouseEvent
                    ) => {
                      openCellContextMenu(args, event);
                    }
                  })}
                />
              </div>
              {sidebarBlock}
              {massActionPanel?.show !== false && (
                <MassActionsInTable
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
          <ContextMenu />
        </>
      )}
    </ContainerStyled>
  );

  if ($fullScreened && fullScreenPortal) {
    return createPortal(JSX, fullScreenPortal);
  }

  return JSX;
};
