import React, { type CSSProperties, useMemo } from 'react';

import { TableCollapseContextValue } from '../contexts';
import { FULL_SCREEN } from '../feature-full-screen/constants';
import { type PaginationSize } from '../feature-pagination/types';
import { getTableHeightStyles, HEIGHT_TABLE_DEFAULT } from '../styles';
import { ObjectForExtending, TableConfig } from '../types';
import { ColumnConfigInternal } from '../types/column-config-internal.type';
import { getControlBlockHeight } from '../widgets/control-block/control-block.constants';
import { useRecalculateColumnsWidth } from './useRecalculateColumnsWidth';

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
}) => {
  const styleString = JSON.stringify(style ?? {});

  // Реальная высота контрл-блока под его размер (m/s = 40, xs = 32).
  // Участвует в расчёте высоты таблицы и высоты свёрнутого контейнера.
  const controlBlockHeight = getControlBlockHeight(
    tableConfig.controlBlock?.size,
  );

  const isCollapsed =
    tableCollapsingValue.enableCollapse && tableCollapsingValue.isCollapsed;

  const containerStyleResult = (() => {
    if (fullScreened) {
      return {
        ...tableConfig.containerStyle,
        height: FULL_SCREEN.HEIGHT_TABLE_CONTAINER,
        maxHeight: FULL_SCREEN.HEIGHT_TABLE_CONTAINER,
      };
    }

    // Если таблица свернута и есть controlBlock - высота равна высоте controlBlock
    if (isCollapsed && controlBlockIsHave) {
      return {
        ...tableConfig.containerStyle,
        height: `${controlBlockHeight}px`,
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

  const { widthOfTable } = useRecalculateColumnsWidth(
    reorderedColumns,
    refTableContainer,
  );

  const { styleMemo, tableAndSidebarContainerHeightStyle } = useMemo(() => {
    const sidebarContainerMaxHeightStyle = getTableHeightStyles(
      tableConfig?.containerStyle?.height,
      tableConfig?.containerStyle?.maxHeight,
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
  ]);

  return {
    styleMemo,
    containerStyleResult,
    tableAndSidebarContainerHeightStyle,
  };
};
