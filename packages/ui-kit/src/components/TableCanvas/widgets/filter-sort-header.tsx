import {
  CanvasEmbedIconButton,
  CanvasEvent,
} from '@ui-kit/components/TableGlide';
import { IconDrag, IconPinFill } from '@ui-kit/icons';
import React from 'react';

import {
  checkIsFilterActive,
  renderHeaderFilterButton,
} from '../feature-filtering/header-filter-button';
import { renderHeaderSortButton } from '../feature-sorting';
import {
  HEADER_TOOLTIP_COLUMN_IS_PINNED_ID,
  HEADER_TOOLTIP_COLUMN_UNPIN_ID,
  HEADER_TOOLTIP_DRAG_ID,
  HEADER_TOOLTIP_EXPAND_ALL_ROWS_ID,
  HEADER_TOOLTIP_HIDE_ALL_ROWS_ID,
} from '../feature-tooltip/constants';
import {
  getExpandAllIconWidth,
  IconTreeCollapseAll,
  IconTreeExpandAll,
} from '../feature-tree/tree-disclosure-icons';
import { HEADER_LEFT_ICONS_CONFIG } from '../renders/rowIconConfig';
import { tableClassNames } from '../styles';
import {
  Canvas,
  HeaderCellInfoGlideInstance,
  isCanvasContent,
} from '../TableGlideInstance';
import { ColumnConfig, ObjectForExtending } from '../types';
import {
  HEADER_ICONS_GAP,
  HEADER_TEXT_TO_ICONS_GAP,
} from '../utils/calculateMinColumnWidth';
import { getHeaderButtonsState } from './header-buttons-state';

export function renderFilterSortHeader<
  _FilterStateType extends ObjectForExtending,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
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
  onUnpinColumn,
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
    event: CanvasEvent<CanvasEmbedIconButton>,
  ) => void;
  /** Открепить эту колонку по клику на пин-иконку в шапке. */
  onUnpinColumn: (key: string) => void;
}) {
  const { hoverAmount } = rest.drawArgs;
  const { columnIsSelected } = rest;
  const { theme } = rest;
  const contextState = rest.ctxs.headerCtx;

  const columnSorted = contextState.sortState?.find(
    (el) => el.columnKey === rest.column.key,
  );

  // Фильтрация доступна для этой колонки (кнопка в принципе может быть).
  const filterIconIsVisible = tableConfigFiltering && columnConfig.filtering;

  // Сортировка доступна для этой колонки.
  const sortIconIsVisible = tableConfigSorting && columnConfig.sortingType;

  const isFilterActive =
    !!filterIconIsVisible &&
    checkIsFilterActive(
      columnConfig,
      contextState.filters,
      contextState.clearedFiltersValue,
    );

  const subRowExpandAllButtonIsVisible =
    !columnConfig.subRow?.hideHeaderExpandAllArrow;

  const subRowExpandAllButtonIsHave =
    subRowIsActiveAndColumnWithArrow && subRowExpandAllButtonIsVisible;

  const sortingCondition =
    columnSorted?.columnKey === rest.column.key || contextState.sortIsVisible;

  const buttons = getHeaderButtonsState({
    filterAvailable: !!filterIconIsVisible,
    sortAvailable: !!sortIconIsVisible,
    filterActive: isFilterActive,
    sortActive: !!sortingCondition,
    hoverAmount,
  });

  const { isExpandedAllRows, toggleExpandAllButton } = contextState;

  const headerIconsCfg = HEADER_LEFT_ICONS_CONFIG[theme.rowSize];

  return (
    // Шапка в одну линию: иконки слева, название, кнопки справа. Название
    // стоит на месте, а при нехватке ширины сжимается только оно.
    //
    // Подробнее: у левых иконок и у блока кнопок flexShrink 0, у названия
    // flexGrow 1 и flexShrink 1. Поэтому название занимает всё свободное
    // место и прижимает кнопки к правому краю, а при нехватке места ужимается
    // до первой буквы с многоточием (minWidthByContent).
    <Canvas.Container
      alignItems="center"
      position="relative"
      padding={{
        left: theme.cellHorizontalPadding,
        right: theme.cellHorizontalPadding,
      }}
      style={{ width: '100%' }}
    >
      {(subRowExpandAllButtonIsHave ||
        reorderInHeaderIsActive ||
        columnIsPinned) && (
        <Canvas.Container
          id={tableClassNames.headerCellLeftIcons}
          padding={{ right: headerIconsCfg.gapToText }}
          style={{ flexShrink: 0 }}
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
                // Как у шеврона строки: глиф прижат к левому краю квадрата
                // (с тем же минимальным отступом, что у свёрнутого шеврона),
                // а кнопка в раскладке занимает столько же, сколько шеврон
                // строки — двойной шеврон стоит на одной линии с ними
                overrideSquareSize={headerIconsCfg.squareSize}
                overrideIconSize={headerIconsCfg.squareSize}
                overrideWidth={getExpandAllIconWidth(theme.rowSize)}
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
                    <IconTreeCollapseAll size={theme.rowSize} />
                  ) : (
                    <IconTreeExpandAll size={theme.rowSize} />
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
                  flexShrink: 0,
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
      {/* Название занимает всё свободное место и прижимает кнопки к правому
          краю; при нехватке места сжимается только оно. */}
      {typeof rest.column.name === 'string' ? (
        <Canvas.Text
          font={theme.headerFontStyle}
          color={columnIsSelected ? theme.textHeaderSelected : theme.textHeader}
          id={tableClassNames.headerCellTextContent}
          overflow="hidden"
          textOverflow="ellipsis"
          autoTooltip={{ placement: 'top' }}
          minWidthByContent
          style={{ flexGrow: 1, flexShrink: 1 }}
        >
          {rest.column.name}
        </Canvas.Text>
      ) : (
        <Canvas.Container
          alignItems="center"
          style={{ flexGrow: 1, flexShrink: 1 }}
        >
          {isCanvasContent(rest.column.name) ? (
            rest.column.name
          ) : (
            <Canvas.Text font={theme.headerFontStyle} color={theme.textHeader}>
              {rest.column.name}
            </Canvas.Text>
          )}
        </Canvas.Container>
      )}
      {(buttons.showFilterButton || buttons.showSortButton) &&
        buttons.isSliding && (
          // Распорка на время анимации: занимает в потоке столько места,
          // сколько кнопок уже въехало, чтобы название освобождало место плавно.
          <Canvas.Container
            style={{ width: buttons.visibleWidth, flexShrink: 0 }}
          />
        )}
      {(buttons.showFilterButton || buttons.showSortButton) && (
        <Canvas.Container
          id={tableClassNames.headerCellRightIcons}
          gap={HEADER_ICONS_GAP}
          padding={{ left: HEADER_TEXT_TO_ICONS_GAP }}
          style={{ flexShrink: 0 }}
          alignItems="center"
          {...(buttons.isSliding && {
            // На время анимации блок кнопок выезжает из-за правого края
            // ячейки. Подробнее: позиционируется абсолютно и сдвинут за край на
            // ещё не въехавшую часть, за краем его обрезает Glide.
            position: 'absolute' as const,
            right: buttons.visibleWidth - buttons.blockWidth,
            top: 0,
            bottom: 0,
          })}
        >
          {buttons.showFilterButton &&
            renderHeaderFilterButton({
              isFilterActive,
              onClick: (event) => onOpenFilter?.(columnConfig, event),
            })}
          {buttons.showSortButton && (
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
                accentColor: theme.accentColor,
              })}
            </Canvas.Container>
          )}
        </Canvas.Container>
      )}
    </Canvas.Container>
  );
}
