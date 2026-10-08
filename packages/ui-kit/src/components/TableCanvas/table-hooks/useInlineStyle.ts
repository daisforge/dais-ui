import React, { type CSSProperties, useMemo } from 'react';

import { TableCollapseContextValue } from '../contexts';
import { FULL_SCREEN } from '../feature-full-screen/constants';
import { type PaginationSize } from '../feature-pagination/types';
import { getTableHeightStyles, HEIGHT_TABLE_DEFAULT } from '../styles';
import {
  getReservedTableHeight,
  MIN_CONTENT_HEIGHT,
} from '../styles/getReservedTableHeight';
import { ObjectForExtending, TableConfig } from '../types';
import { ColumnConfigInternal } from '../types/column-config-internal.type';
import { getControlBlockHeight } from '../widgets/control-block/control-block.constants';
import { useRecalculateColumnsWidth } from './useRecalculateColumnsWidth';

const hasPercentageHeight = (height: string | number | undefined) =>
  typeof height === 'string' && height.includes('%');

const normalizePercentageHeight = (height: string | number | undefined) =>
  hasPercentageHeight(height) ? '100%' : height;

export const useInlineStyle = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  tableConfig,
  reorderedColumns,
  filtersAreVisible,
  style,
  controlBlockIsHave,
  fullScreened,
  paginationActiveInConfig,
  paginationCustomSize,
  paginationHeight,
  isSearchingBellow,
  tableCollapsingValue,
  refTableContainer,
  collapseButtonPlacement = 'inside',
  hasBottomSheet = false,
}: {
  tableConfig: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
    // SubRowType
  >;
  reorderedColumns: readonly ColumnConfigInternal<RowType, SummaryRowType>[];
  filtersAreVisible: boolean;
  style: React.CSSProperties | undefined;
  controlBlockIsHave: boolean;
  fullScreened: boolean;
  paginationActiveInConfig: boolean;
  paginationCustomSize: string | undefined;
  paginationHeight: number;
  isSearchingBellow: boolean;
  tableCollapsingValue: TableCollapseContextValue;
  refTableContainer?: React.RefObject<HTMLElement>;
  collapseButtonPlacement?: 'inside' | 'above';
  hasBottomSheet?: boolean;
}) => {
  const styleString = JSON.stringify(style ?? {});

  // Реальная высота контрл-блока под его размер (m/s = 40, xs = 32).
  // Участвует в расчёте высоты таблицы и высоты свёрнутого контейнера.
  const controlBlockHeight = getControlBlockHeight(
    tableConfig.controlBlock?.size,
  );

  const isCollapsed =
    tableCollapsingValue.enableCollapse && tableCollapsingValue.isCollapsed;

  const minContentHeight = hasBottomSheet ? 0 : MIN_CONTENT_HEIGHT;
  const expandedContainerStyle = (() => {
    if (fullScreened) {
      return {
        ...tableConfig.containerStyle,
        height: FULL_SCREEN.HEIGHT_TABLE_CONTAINER,
        maxHeight: FULL_SCREEN.HEIGHT_TABLE_CONTAINER,
        // Не возвращаем CSS min-height fullscreen между collapse и expand:
        // иначе он мгновенно растягивает контейнер до окончания transition.
        ...(tableCollapsingValue.enableCollapse && { minHeight: 0 }),
      };
    }

    if (
      tableConfig.containerStyle?.height === undefined &&
      hasPercentageHeight(tableConfig.containerStyle?.maxHeight)
    ) {
      // Учитываем те же резервы, которые getHeightOfTable вычитает
      // из внешнего контейнера при расчёте рабочей области.
      const reservedHeight = getReservedTableHeight({
        isHaveControlBlock: controlBlockIsHave,
        controlBlockHeight,
        collapseButtonPlacement,
        filtersAreVisible,
        isSearchingBellow,
        paginationActiveInConfig,
        paginationHeight,
        paginationCustomSize: paginationCustomSize as
          | PaginationSize
          | undefined,
      });
      // Сохраняем естественную высоту auto-контейнера. Она должна быть
      // определённой, чтобы вложенный процентный max-height разрешался от неё.
      return {
        ...tableConfig.containerStyle,
        height: Math.max(
          HEIGHT_TABLE_DEFAULT,
          minContentHeight + reservedHeight,
        ),
      };
    }

    if (
      !tableConfig.containerStyle?.height &&
      !tableConfig.containerStyle?.maxHeight
    ) {
      return {
        height: `${HEIGHT_TABLE_DEFAULT}px`,
        maxHeight: `${HEIGHT_TABLE_DEFAULT}px`,
        ...tableConfig.containerStyle,
      };
    }

    return tableConfig.containerStyle;
  })();

  // После collapse остаются видимые заголовки и отступы fullscreen.
  // Сохраняем expanded max-height для плавного раскрытия в обе стороны.
  const visibleControlBlockHeight = controlBlockIsHave ? controlBlockHeight : 0;
  const collapseHeaderHeight =
    collapseButtonPlacement === 'above' ? controlBlockHeight : 0;
  const fullScreenPadding = fullScreened ? FULL_SCREEN.PADDING * 2 : 0;
  const containerStyleResult = isCollapsed
    ? {
        ...expandedContainerStyle,
        height:
          visibleControlBlockHeight + collapseHeaderHeight + fullScreenPadding,
        minHeight: 0,
      }
    : expandedContainerStyle;

  const { widthOfTable } = useRecalculateColumnsWidth(
    reorderedColumns,
    refTableContainer,
  );

  const { styleMemo, tableAndSidebarContainerHeightStyle } = useMemo(() => {
    const sidebarContainerMaxHeightStyle = getTableHeightStyles(
      normalizePercentageHeight(tableConfig?.containerStyle?.height),
      normalizePercentageHeight(tableConfig?.containerStyle?.maxHeight),
      controlBlockIsHave,
      filtersAreVisible,
      fullScreened,
      paginationActiveInConfig,
      paginationHeight,
      paginationCustomSize as PaginationSize | undefined,
      isSearchingBellow,
      isCollapsed,
      collapseButtonPlacement,
      controlBlockHeight,
      minContentHeight,
    );

    const tableAndSidebarContainerHeightStyle: CSSProperties = {
      height: sidebarContainerMaxHeightStyle.height,
      maxHeight: sidebarContainerMaxHeightStyle.maxHeight,
    };

    const tableHeightStyle: CSSProperties = {
      height: '100%',
      maxHeight: '100%',
    };

    const style = JSON.parse(styleString) as React.CSSProperties;

    const styleMemo = {
      ...style,
      ...tableHeightStyle,
      ...(widthOfTable !== null && { width: widthOfTable }),
    };

    return { styleMemo, tableAndSidebarContainerHeightStyle };
  }, [
    tableConfig?.containerStyle?.height,
    tableConfig?.containerStyle?.maxHeight,
    controlBlockIsHave,
    filtersAreVisible,
    fullScreened,
    paginationActiveInConfig,
    paginationHeight,
    paginationCustomSize,
    isSearchingBellow,
    isCollapsed,
    styleString,
    widthOfTable,
    collapseButtonPlacement,
    controlBlockHeight,
    minContentHeight,
  ]);

  return {
    styleMemo,
    containerStyleResult,
    tableAndSidebarContainerHeightStyle,
  };
};
