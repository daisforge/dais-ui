import {
  CanvasEmbedIconButton,
  CanvasEvent
} from '@ui-kit/components/TableGlide';
import {
  IconDoubleDisclosureDown,
  IconDoubleDisclosureUp,
  IconDrag,
  IconPinFill
} from '@ui-kit/icons';
import React from 'react';

import {
  checkIsFilterActive,
  renderHeaderFilterButton
} from '../feature-filtering/header-filter-button';
import { renderHeaderSortButton } from '../feature-sorting';
import {
  HEADER_TOOLTIP_COLUMN_IS_PINNED_ID,
  HEADER_TOOLTIP_COLUMN_UNPIN_ID,
  HEADER_TOOLTIP_DRAG_ID,
  HEADER_TOOLTIP_EXPAND_ALL_ROWS_ID,
  HEADER_TOOLTIP_HIDE_ALL_ROWS_ID
} from '../feature-tooltip/constants';
import { tableClassNames } from '../styles';
import {
  Canvas,
  HeaderCellInfoGlideInstance,
  isCanvasContent
} from '../TableGlideInstance';
import { ColumnConfig, ObjectForExtending } from '../types';

const HEADER_LEFT_ICONS_CONFIG = {
  big: { squareSize: 24, iconSize: 16, gapToText: 8 },
  medium: { squareSize: 24, iconSize: 16, gapToText: 2 },
  small: { squareSize: 20, iconSize: 12, gapToText: 0 }
};

export function renderFilterSortHeader<
  _FilterStateType extends ObjectForExtending,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  columnConfig,
  tableConfigSorting,
  tableConfigFiltering,

  columnIsPinned,
  columnPinningDisabled,
  reorderInHeaderIsActive,
  subRowIsActiveAndColumnWithArrow,
  renderHeaderCellProps: rest,
  onOpenFilter,
  onUnpinColumn
}: {
  columnConfig: ColumnConfig<RowType, SummaryRowType>;
  tableConfigSorting: boolean;
  tableConfigFiltering: boolean;
  columnIsPinned: boolean;
  /**
   * Закрепление этой колонки менять нельзя (disablePinning): пин рисуем как
   * индикатор (Canvas.Icon), без кнопки и без действия открепления.
   */
  columnPinningDisabled: boolean;
  reorderInHeaderIsActive: boolean;
  subRowIsActiveAndColumnWithArrow: boolean;
  renderHeaderCellProps: HeaderCellInfoGlideInstance<RowType, SummaryRowType>;
  /**
   * Callback для открытия filter popover.
   * Передаётся из useColumns, вызывается при клике на иконку фильтра.
   */
  onOpenFilter?: (
    columnConfig: ColumnConfig<RowType, SummaryRowType>,
    event: CanvasEvent<CanvasEmbedIconButton>
  ) => void;
  /** Открепить эту колонку по клику на пин-иконку в шапке. */
  onUnpinColumn: (key: string) => void;
}) {
  const { isSelected: isSelectedColumn } = rest.drawArgs;
  const { theme } = rest;
  const contextState = rest.ctxs.headerCtx;

  const columnSorted = contextState.sortState?.find(
    (el) => el.columnKey === rest.column.key
  );

  // contextState.filtersAreVisible
  const filterIconIsVisible = tableConfigFiltering && columnConfig.filtering;

  // contextState.sortIsVisible;
  const sortIconIsVisible = tableConfigSorting && columnConfig.sortingType;

  const subRowExpandAllButtonIsVisible =
    !columnConfig.subRow?.hideHeaderExpandAllArrow;

  const subRowExpandAllButtonIsHave =
    subRowIsActiveAndColumnWithArrow && subRowExpandAllButtonIsVisible;

  const sortingCondition =
    columnSorted?.columnKey === rest.column.key || contextState.sortIsVisible;

  const { isExpandedAllRows, toggleExpandAllButton } = contextState;

  const headerIconsCfg = HEADER_LEFT_ICONS_CONFIG[theme.rowSize];

  return (
    <Canvas.Container
      alignItems="center"
      justifyContent="space-between"
      padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding
      }}
      style={{ width: '100%' }}
    >
      <Canvas.Container>
        {(subRowExpandAllButtonIsHave ||
          reorderInHeaderIsActive ||
          columnIsPinned) && (
          <Canvas.Container
            id={tableClassNames.headerCellLeftIcons}
            padding={{ right: headerIconsCfg.gapToText }}
          >
            {subRowExpandAllButtonIsHave && (
              // interaction: клик по кнопке «раскрыть/скрыть все строки» НЕ должен
              // выделять столбец (getInteractionAtPoint в onHeaderClicked видит
              // ноду и пропускает column-select) — как у кнопок сортировки/фильтра.
              <Canvas.Container
                interaction={{ selection: 'keep', cellClick: 'stop' }}
              >
                <Canvas.EmbedIconButton
                  buttonSize="xs"
                  overrideSquareSize={headerIconsCfg.squareSize}
                  overrideIconSize={headerIconsCfg.iconSize}
                  onClick={toggleExpandAllButton}
                  view="secondary"
                  style={{ flexShrink: 0 }}
                  portalHoverEnabled
                  id={
                    isExpandedAllRows
                      ? HEADER_TOOLTIP_HIDE_ALL_ROWS_ID
                      : HEADER_TOOLTIP_EXPAND_ALL_ROWS_ID
                  }
                  icon={
                    isExpandedAllRows ? (
                      <IconDoubleDisclosureUp />
                    ) : (
                      <IconDoubleDisclosureDown />
                    )
                  }
                />
              </Canvas.Container>
            )}
            {reorderInHeaderIsActive && (
              // interaction: клик по drag-кнопке НЕ должен выделять столбец
              // (как у кнопок сортировки/фильтра/expand). Само перетаскивание —
              // нативный reorder Glide, отдельный жест.
              <Canvas.Container
                interaction={{ selection: 'keep', cellClick: 'stop' }}
              >
                <Canvas.EmbedIconButton
                  buttonSize="xs"
                  view="secondary"
                  overrideSquareSize={headerIconsCfg.squareSize}
                  overrideIconSize={headerIconsCfg.iconSize}
                  icon={<IconDrag />}
                  id={HEADER_TOOLTIP_DRAG_ID}
                  tooltip="Перетащить колонку"
                  portalHoverEnabled
                  style={{ flexShrink: 0 }}
                />
              </Canvas.Container>
            )}
            {columnIsPinned &&
              (columnPinningDisabled ? (
                // Открепить нельзя (disablePinning) — просто индикатор.
                <Canvas.Container
                  id={HEADER_TOOLTIP_COLUMN_IS_PINNED_ID}
                  portalHoverEnabled
                  style={{
                    width: headerIconsCfg.squareSize,
                    height: headerIconsCfg.squareSize,
                    flexShrink: 0
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Canvas.Icon
                    color="#707C847A"
                    icon={<IconPinFill />}
                    size={headerIconsCfg.iconSize}
                  />
                </Canvas.Container>
              ) : (
                // interaction: клик по пину НЕ выделяет столбец, а открепляет
                // колонку. Hover-эффект — из коробки от EmbedIconButton.
                <Canvas.Container
                  interaction={{ selection: 'keep', cellClick: 'stop' }}
                >
                  <Canvas.EmbedIconButton
                    buttonSize="xs"
                    view="secondary"
                    overrideSquareSize={headerIconsCfg.squareSize}
                    overrideIconSize={headerIconsCfg.iconSize}
                    icon={<IconPinFill />}
                    id={HEADER_TOOLTIP_COLUMN_UNPIN_ID}
                    portalHoverEnabled
                    style={{ flexShrink: 0 }}
                    onClick={() => onUnpinColumn(rest.column.key)}
                  />
                </Canvas.Container>
              ))}
          </Canvas.Container>
        )}
        {/* eslint-disable-next-line no-nested-ternary */}
        {typeof rest.column.name === 'string' ? (
          <Canvas.Text
            font={theme.headerFontStyle}
            color={
              isSelectedColumn ? theme.textHeaderSelected : theme.textHeader
            }
            // tooltipText={rest.column.name}
            id={tableClassNames.headerCellTextContent}
            // variant="BodyXS"
            // tooltipProps={{
            //   placement: 'top',
            // }}
          >
            {rest.column.name}
          </Canvas.Text>
        ) : isCanvasContent(rest.column.name) ? (
          rest.column.name
        ) : (
          <Canvas.Text font={theme.headerFontStyle} color={theme.textHeader}>
            {rest.column.name}
          </Canvas.Text>
        )}
      </Canvas.Container>
      {(filterIconIsVisible || sortIconIsVisible) && (
        <Canvas.Container id={tableClassNames.headerCellRightIcons}>
          {filterIconIsVisible &&
            renderHeaderFilterButton({
              isFilterActive: checkIsFilterActive(
                columnConfig,
                contextState.filters,
                contextState.clearedFiltersValue
              ),
              onClick: (event) => onOpenFilter?.(columnConfig, event)
            })}
          {sortIconIsVisible && (
            <Canvas.Container
              id={`${tableClassNames.headerCellFilterSorting} ${
                sortingCondition
                  ? tableClassNames.headerCellSortingIsActive
                  : ''
              } ${tableClassNames.headerCellSortingIsAvailable}`}
            >
              {renderHeaderSortButton({
                columnKey: rest.column.key,
                columnSorted,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                setSortState: contextState.setSortState!,
                accentColor: theme.accentColor
              })}
            </Canvas.Container>
          )}
        </Canvas.Container>
      )}
    </Canvas.Container>
  );
}
