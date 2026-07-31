import { SIZE } from '@ui-kit/components/TableCanvas/styles/styles.constants';
import {
  bodyXS,
  inverseSurfaceSolidCard,
  inverseSurfaceSolidDefault,
  onDarkOverlayBlur,
  textSecondary,
  textTertiary,
} from '@ui-kit/tokens';
import styled, { css, CSSObject } from 'styled-components';

import { CLASS_PINNED_RIGHT_COL } from '../feature-column-control/constantsUI';
import { FULL_SCREEN } from '../feature-full-screen/constants';
import { getPaginationHeight } from '../feature-pagination/handlers';
import { PaginationSize } from '../feature-pagination/types';
import {
  ROW_I_COL_ACTIVE,
  ROW_I_COL_CLASS,
  ROW_I_HEADER_COL_CLASS,
} from '../feature-row-instruments/constants';
import {
  CHECKBOX_COL_CLASS_CUSTOM,
  CHECKBOX_HEADER_COL_CLASS_CUSTOM,
} from '../feature-select-row';
import { CLASS } from '../renders/constants';
import { ActiveTheme, HighlightActiveType } from '../TableGlideInstance/type';
import { ActiveViewModsType } from '../types';
import {
  editableCellStyle,
  editedSuccessfullyCellStyle,
  editedWithErrorCellStyle,
  selectionStyleForCell,
} from './cellStyle';
import { tableClassNames as cls, tableClassNames } from './classNames';
import { headerCellDividerStyles } from './headerCellDivider';
import {
  headerCellRightIconsBaseStyle,
  headerCellRightIconsHoverStyle,
} from './headerCellIconsStyle';
import { selectionStyleForRow } from './rowStyle';
import {
  COLORS,
  customColorGlobalVars,
  DETAIL_PANEL_ROW_CLASS,
  DURATION,
  FIRST_ROW,
  LVL_1_ROW_CLASS,
  SIZES,
  TABLE_BORDER_RADIUS,
} from './styles.constants';
import {
  cellZIndexStyles,
  headerCellZIndex,
  sumRowCellZIndexStyles,
} from './zIndexStyle';

const FROZEN_BOX_SHADOW = (position: 'right' | 'left' = 'right') =>
  `${position === 'left' ? '-' : ''}48px 24px 48px -8px rgba(0, 0, 0, 0.04)`;

const cellFontStyles = (rowHeight: SIZE) => css(SIZES[rowHeight].font());

const transitions = ({ maxHeight }: { maxHeight?: number } = {}) => css`
  transition: grid-template-rows ${DURATION}s ease,
    max-height ${maxHeight ?? DURATION}s linear,
    border-radius ${DURATION + 0.2}s ease, border-color ${DURATION + 0.2}s ease;
`;

export const tableBorderRadius = (
  borderTopLeftRadiusRounded: boolean | undefined,
  borderTopRightRadiusRounded: boolean | undefined,
  borderBottomLeftRadiusRounded: boolean | undefined,
  borderBottomRightRadiusRounded: boolean | undefined,
) => {
  const topLeftRadius = borderTopLeftRadiusRounded ? TABLE_BORDER_RADIUS : 0;
  const topRightRadius = borderTopRightRadiusRounded ? TABLE_BORDER_RADIUS : 0;
  const bottomLeftRadius = borderBottomLeftRadiusRounded
    ? TABLE_BORDER_RADIUS
    : 0;
  const bottomRightRadius = borderBottomRightRadiusRounded
    ? TABLE_BORDER_RADIUS
    : 0;

  return css`
    border-radius: ${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px
      ${bottomLeftRadius}px;
  `;
};

// TODO что за бред - разобраться: headerCellFontStyles=css(bodyXS) - не работает
const headerCellFontStyles = () => css(bodyXS);

const rowHeightAnimationStyles = css`
  > .rdg-header-row,
  > .rdg-row {
    transition: line-height 0.5s ease, font-size 0.5s ease,
      line-height 0.5s ease, padding 0.5s ease;
  }

  > .rdg-header-row {
    .rdg-cell * {
    }
  }
`;

const TooltipInTableStyles = css`
  // Tooltips
  && .popover-root > * {
    --plasma-tooltip-background-color: ${() => inverseSurfaceSolidCard};
    --plasma-popover-arrow-background: ${() => inverseSurfaceSolidCard};
    --plasma-tooltip-color: ${() => inverseSurfaceSolidDefault};
  }
`;

const globalColorAndStyles = (theme: ActiveTheme) => css`
  /* custom tokens */
  ${() => css`
    ${customColorGlobalVars(theme)}
  `}

  /* data-grid tokens */
  --rdg-color: ${COLORS.textColor};
  --rdg-border-color: ${COLORS.border};
  --rdg-summary-border-color: ${COLORS.border};
  --rdg-background-color: ${COLORS.white};

  --rdg-selection-color: transparent; // задаем через :before element, так как нужен border-radius, поэтому здесь зануляем

  --rdg-header-background-color: ${COLORS.headerColor};
  --rdg-header-draggable-background-color: ${COLORS.headerColor};

  --rdg-row-hover-background-color: ${COLORS.rowHoverColor};
  --rdg-row-selected-background-color: ${COLORS.white};
  --rdg-row-selected-hover-background-color: ${COLORS.headerColor};

  --rdg-checkbox-color: hsl(207deg 100% 29%);
  --rdg-checkbox-focus-color: hsl(207deg 100% 69%);
  --rdg-checkbox-disabled-border-color: #ccc;
  --rdg-checkbox-disabled-background-color: #ddd;

  --rdg-cell-frozen-box-shadow: ${FROZEN_BOX_SHADOW()};
`;

export const scrollbarStyles = css`
  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
    background-color: ${COLORS.white};

    &-track {
      margin: 0px;
      &:hover {
        margin: 0px;
      }
      &:vertical {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-top-right-radius: inherit;
        border-bottom-right-radius: inherit;
        border-left: 1px solid ${COLORS.border};
      }
      &:horizontal {
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;

        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
        border-top: 1px solid ${COLORS.border};
      }
    }

    &-thumb {
      background-color: ${() => textTertiary};
      background-clip: content-box;
      cursor: pointer;
      &:hover {
        background-color: ${() => textSecondary};
      }

      &:vertical {
        border-left: 4px solid transparent;
        border-right: 3px solid transparent;

        border-top-left-radius: 7px; // 10
        border-bottom-left-radius: 7px; // 10

        border-top-right-radius: 6.25px; //9.25
        border-bottom-right-radius: 6.25px; //9.25
      }
      &:horizontal {
        border-top: 4px solid transparent;
        border-bottom: 3px solid transparent;

        border-top-left-radius: 7px; // 10
        border-top-right-radius: 7px; // 10

        border-bottom-left-radius: 6.25px; //9.25
        border-bottom-right-radius: 6.25px; //9.25
      }
    }

    &-corner {
      border-left: 1px solid ${COLORS.border};
      background-color: ${COLORS.white};
    }
  }
`;

const checkboxColumnStyles = css`
  &
    .${CHECKBOX_COL_CLASS_CUSTOM},
    &
    .rdg-header-row
    .${CHECKBOX_COL_CLASS_CUSTOM},
    .rdg-row
    .${CHECKBOX_COL_CLASS_CUSTOM},
    &
    .rdg-summary-row
    .${CHECKBOX_COL_CLASS_CUSTOM} {
    display: flex;
    justify-content: center;
    align-items: center;

    border-inline-end: 1px solid ${COLORS.border};
  }

  /* Убираем границу справа у чекбокса, если активна колонка row instruments */
  &
    .${CHECKBOX_COL_CLASS_CUSTOM}.${ROW_I_COL_ACTIVE},
    &
    .rdg-header-row
    .${CHECKBOX_COL_CLASS_CUSTOM}.${ROW_I_COL_ACTIVE},
    .rdg-row
    .${CHECKBOX_COL_CLASS_CUSTOM}.${ROW_I_COL_ACTIVE},
    &
    .rdg-summary-row
    .${CHECKBOX_COL_CLASS_CUSTOM}.${ROW_I_COL_ACTIVE} {
    border-inline-end: 0px;
  }

  & .rdg-header-row .${CHECKBOX_HEADER_COL_CLASS_CUSTOM} {
    &::after {
      display: none;
    }
  }
`;

export const rowIColumnStyles = css`
  & .${ROW_I_HEADER_COL_CLASS} {
    border-inline-end: 0px solid ${COLORS.border} !important;
  }
  &
    .${ROW_I_COL_CLASS},
    &
    .rdg-header-row
    .${ROW_I_COL_CLASS},
    .rdg-row
    .${ROW_I_COL_CLASS},
    &
    .rdg-summary-row
    .${ROW_I_COL_CLASS} {
    display: flex;
    justify-content: center;
    align-items: center;

    border-inline-end: 1px solid ${COLORS.border};
  }

  // отключаем divider  у колонки перед rowInstruments column
  & .rdg-header-row .rdg-cell:has(+ .${ROW_I_HEADER_COL_CLASS}) {
    &::after {
      display: none;
    }
  }
`;
const pinnedRightCellStyles = {
  allRows: css`
    &.${CLASS_PINNED_RIGHT_COL} {
      position: sticky;
      right: 0;

      &:nth-child(1 of &) {
        box-shadow: ${FROZEN_BOX_SHADOW('left')};
      }
    }
  `,

  header: css`
    &.${CLASS_PINNED_RIGHT_COL} {
      background-color: ${COLORS.headerColor};

      z-index: calc(var(--current-z-index) + 100);
    }
  `,
};

export const fullScreenStyles = css`
  position: fixed;
  z-index: 9000; // как у модальных окон sdds
  top: 0;
  left: 0;
  margin: ${FULL_SCREEN.MARGIN};
  width: ${FULL_SCREEN.WIDTH_TABLE_CONTAINER};
  max-width: ${FULL_SCREEN.WIDTH_TABLE_CONTAINER};
  min-width: ${FULL_SCREEN.WIDTH_TABLE_CONTAINER};
  height: ${FULL_SCREEN.HEIGHT_TABLE_CONTAINER};
  max-height: ${FULL_SCREEN.HEIGHT_TABLE_CONTAINER};
  min-height: ${FULL_SCREEN.HEIGHT_TABLE_CONTAINER};
  padding: 8px;
  background-color: ${COLORS.white};
  border-radius: 16px;

  box-shadow: 0px 0px 0px ${FULL_SCREEN.BOX_SHADOW} ${() => onDarkOverlayBlur};

  // ::before - используется как overlay
  &::before {
    content: '';
    position: absolute;
    z-index: -1;

    top: -${FULL_SCREEN.MARGIN};
    left: -${FULL_SCREEN.MARGIN};
    width: 100dvw;
    height: 100dvh;
  }

  & > .rdg {
    ${() => transitions({ maxHeight: 0 })};
  }
`;

export const ContainerStyled = styled.div<{
  $activeView: ActiveViewModsType;
  $isHaveRowHeightAnimation: boolean | undefined;
  $columnsGroupingIsActive: boolean;
  $borderLeftTopRadiusRounded: boolean | undefined;
  $borderRightTopRadiusRounded: boolean | undefined;
  $borderLeftBottomRadiusRounded: boolean | undefined;
  $borderRightBottomRadiusRounded: boolean | undefined;
  $fullScreened: boolean;
  $rowHeight: SIZE;
  $containerCss?: string | CSSObject;
  $css?: string | CSSObject;
  $isCollapsed?: boolean;
  $isEnabledCollapse?: boolean;
  $highlightActiveType: HighlightActiveType;
  $activeTheme: ActiveTheme;
}>`
  // Collapsing таблицы
  // Для collapse таблицы плавное изменений высот
  ${({ $isEnabledCollapse }) =>
    $isEnabledCollapse &&
    css`
      transition: height 0.5s ease, max-height 0.5s ease;
    `}
  // Для свернутой таблицы активируем overflow: hidden (чтобы блоки пагинации и др. не было видно)
  ${({ $isCollapsed }) => css`
    overflow: ${$isCollapsed ? 'hidden' : 'unset'};
  `}

  // RightSidebar
  & .${cls.tableSidebarLayout} {
    position: relative;

    // Collapsing (если есть RightSidebar)
    // Для collapse таблицы плавное изменений высот
    ${({ $isEnabledCollapse }) =>
      $isEnabledCollapse &&
      css`
        transition: height 0.5s ease, max-height 0.5s ease, opacity 0.5s ease;
      `}
    display: flex;

    & .${cls.tableSidebarTableContainer} {
      position: 'relative'
      ${() => transitions()}
      flex-grow: 1;
      min-width: 0;
    }
  }

  & {
    box-sizing: border-box;
    position: relative;
  }

  ${({
    $activeView,
    $isHaveRowHeightAnimation,
    $columnsGroupingIsActive,
    $borderLeftTopRadiusRounded,
    $borderRightTopRadiusRounded,
    $borderLeftBottomRadiusRounded,
    $borderRightBottomRadiusRounded,
    $rowHeight,
    $highlightActiveType,
    $activeTheme,
    $css,
  }) => {
    if ($activeView === 'cards') {
      return css`
        ${scrollbarStyles}
        & .${cls.tableCardsViewContainer} {
          transition: opacity 2s ease, max-height 0.3s ease;
          border: 1px solid transparent;
        }
      `;
    }

    return css`
      // Tooltips
      ${TooltipInTableStyles}
      // Будет необходимо возможно для тултипов в controlBlock
      /* & {
        z-index: 1;
        overflow: visible;
      } */
      ${globalColorAndStyles($activeTheme)}
      
      & .${tableClassNames.table} {
        border: 1px solid var(--rdg-border-color);
      }
      & .${tableClassNames.tableAndTableScroller} {
        ${scrollbarStyles}

        ${tableBorderRadius(
          $borderLeftTopRadiusRounded,
          $borderRightTopRadiusRounded,
          $borderLeftBottomRadiusRounded,
          $borderRightBottomRadiusRounded,
        )}
      }

      & .rdg {
        border: 1px solid var(--rdg-border-color);
        ${globalColorAndStyles($activeTheme)}
        ${() => transitions()}
    
            ${$isHaveRowHeightAnimation && rowHeightAnimationStyles}
    
            // --------------------------- styles ---------------------------
            ${tableBorderRadius(
          $borderLeftTopRadiusRounded,
          $borderRightTopRadiusRounded,
          $borderLeftBottomRadiusRounded,
          $borderRightBottomRadiusRounded,
        )}
    
        & .rdg-cell {
          align-content: center;

          ${cellZIndexStyles}

          &:not(.${CHECKBOX_COL_CLASS_CUSTOM}) {
            border-inline-end: 0px;
          }

          ${cellFontStyles($rowHeight)}

          padding-block: ${SIZES[$rowHeight].cell['padding-block']};
          padding-inline: ${SIZES[$rowHeight].cell['padding-inline']};

          border-block-end: 0px;

          // В режиме редактирования padding для элементов редактирования
          &.rdg-editor-container.rdg-editable-cell {
            & .input-wrapper {
              padding-block: ${SIZES[$rowHeight].cell['padding-block']};
              padding-inline: ${SIZES[$rowHeight].cell['padding-inline']};
            }
          }

          & .${CLASS.editableCellWithExpandButton} {
            padding-right: ${SIZES[$rowHeight].cell['padding-inline']};
          }

          & .${CLASS.cellWithExpandButton} .${CLASS.selectArrowContainer} {
            padding-right: ${SIZES[$rowHeight].cell['padding-inline']};
          }

          &.rdg-editable-cell {
            // Стили иконки селекта скопированные из компонента селект атомарной либы
            & .${CLASS.selectArrow} {
              margin-left: 12px;
              margin-right: -2px;
              margin-block: -1px;
            }
          }

          &.expanded-row-cell {
          }
          ${pinnedRightCellStyles.allRows}

          ${editableCellStyle}
          ${editedSuccessfullyCellStyle}
          ${editedWithErrorCellStyle}
          ${$highlightActiveType === 'cell' && selectionStyleForCell}
        }

        & .rdg-editor-container {
          padding-block: ${SIZES[$rowHeight].editorCell['padding-block']};
          padding-inline: ${SIZES[$rowHeight].editorCell['padding-inline']};
        }

        // fullheight for rowDetailPanel
        & .rdg-row.${DETAIL_PANEL_ROW_CLASS} .rdg-cell > * {
          height: 100%;
        }

        & .rdg-header-row {
          z-index: 5;
          & .rdg-cell {
            contain: strict; // Важно! Анимация показа иконок (фильтр/сортировка) может влиять на родителя, в частности, когда pined колонка сжата в минимум. Свойство используется для предотвращения этого. внутренний flex контейнер НИКАК не может повлиять на ширину своего родителя.
            display: flex;
            width: 100%;
            min-width: 0;
            overflow: hidden;

            .${tableClassNames.headerCellLeftIcons} {
              flex-shrink: 0;
              margin-right: 6px;
              display: inline-flex;
              gap: 4px;
              color: ${() => textTertiary};
            }

            .${tableClassNames.headerCellContainer} {
              display: flex;
              max-height: 16px;
              position: relative;
              width: 100%;
              min-width: 0;
            }

            .${tableClassNames.headerCellTextContent} {
              display: flex;
              align-items: center;
              flex-shrink: 1;
              min-width: 0; // разрешаем сжатие
              margin-right: 6px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              transition: flex 0.2s ease; // анимация сжатия
            }

            ${headerCellRightIconsBaseStyle}

            ${headerCellRightIconsHoverStyle}

            color: ${COLORS.headerTextColor};
            border-block-end: 1px solid ${COLORS.border};

            align-content: start;
            ${() => headerCellFontStyles()}
            ${headerCellZIndex}
                        ${pinnedRightCellStyles.header}
    
                        overflow: hidden;

            padding-block: 8px !important;
            padding-inline: 16px;

            border-inline-end: 0px;

            &.rdg-cell-draggable {
              cursor: -webkit-grab;
              cursor: -moz-grab;
              cursor: -o-grab;
              cursor: -ms-grab;
              cursor: grab;

              &:active {
                cursor: -webkit-grabbing;
                cursor: -moz-grabbing;
                cursor: -o-grabbing;
                cursor: -ms-grabbing;
                cursor: grabbing;
              }
            }
          }
          ${() => headerCellDividerStyles($columnsGroupingIsActive)}

          // для строк шапки не последнего уровня и которые занимают более 1 строки - align-content: center;
                    &:not(:last-of-type):not(:only-of-type) {
            & .rdg-cell:not(.rdg-cell[aria-rowspan='1']) {
              align-content: center;
            }
          }
        }

        // ------------------------------- ↓ border for rows -------------------------------
        /* у последней строки (не summaryRow) добавляем border-bottom с помощью box-shadow 
        - чтобы был отступ снизу и никак не влиял на родителя - на расчет наличия scroll в таблице)
        - чтобы при обычных сценариях он не был виден. Был виден только,
        когда от посл строки до итоговой строки (или конца таблицы) еще много пустого свободного места)
        */

        & :nth-last-child(1 of .rdg-row:not(.rdg-bottom-summary-row)) {
          .rdg-cell {
            box-shadow: 0 1px 0px 0px ${COLORS.border};
          }
        }

        // у всех строк 1 уровня вложенности кроме первой ставим border-top
        & .rdg-row.${LVL_1_ROW_CLASS}:not(.${FIRST_ROW}) {
          & .rdg-cell {
            border-block-start: 1px solid ${COLORS.border};
          }
        }

        ${$highlightActiveType === 'row' && selectionStyleForRow}

        // ↓ detail panel row borders
        & .rdg-row {
          // border-top - для всех detail-panel-row
          &.${DETAIL_PANEL_ROW_CLASS}
            .rdg-cell:not(.${CHECKBOX_COL_CLASS_CUSTOM}) {
            border-block-start: 1px solid ${COLORS.border};
          }

          // border-top - для всех строк, которые после detail-panel-row
          &.${DETAIL_PANEL_ROW_CLASS} + .rdg-row {
            .rdg-cell:not(.${CHECKBOX_COL_CLASS_CUSTOM}) {
              border-block-start: 1px solid ${COLORS.border};
            }
          }
        }

        // ------------------------------- ↑ border for rows -------------------------------
        // delete hover for detailPanelRow
        & .rdg-row.${DETAIL_PANEL_ROW_CLASS}:hover {
          background-color: inherit;
        }

        & .rdg-summary-row {
          background-color: ${COLORS.headerColor};
          & .rdg-cell {
            ${sumRowCellZIndexStyles}
          }

          &.rdg-top-summary-row {
            & .rdg-cell {
              border-block-start: 0px;
              border-block-end: 1px solid var(--rdg-summary-border-color);
            }
          }
          &.rdg-bottom-summary-row {
            & .rdg-cell {
              border-block-start: 1px solid var(--rdg-summary-border-color);
              border-block-end: 0px;
            }
          }
        }
        ${checkboxColumnStyles}
        ${rowIColumnStyles}

                // style for pre-header
            & .rdg-header-row:has(+ .rdg-header-row) {
          & .rdg-cell {
            text-align: center;
          }
        }
        ${$css}
      }
    `;
  }}
  & {
    ${({ $containerCss }) => $containerCss}
    ${({ $fullScreened }) => $fullScreened && fullScreenStyles}
  }
`;
// По дизайну 40px (fallback для m/s, xs использует SPACING_MAP.xs.containerHeight = 32)
export const HEIGHT_CONTROL_BLOCK = 40;
export const HEIGHT_FILTERLIST_BLOCK = 33;
export const HEIGHT_TABLE_DEFAULT = 350;
export const MIN_CONTENT_HEIGHT = 316;

const getHeightOfTable = (
  tableContainerHeight: string | number | undefined,
  isHaveControlBlock: boolean | undefined,
  filtersAreVisible: boolean,
  paginationActiveInConfig: boolean,
  paginationHeight: number,
  paginationCustomSize: PaginationSize | undefined,
  isSearchingBellow: boolean,
  isCollapsed: boolean,
  collapseButtonPlacement: 'inside' | 'above' = 'inside',
  // Реальная высота контрл-блока. Для m/s это 40, для xs 32. Раньше тут
  // всегда брали HEIGHT_CONTROL_BLOCK (40), из-за чего в xs таблица
  // недосчитывала 8px на каждый блок и часть оставалась не свёрнутой.
  controlBlockHeight: number = HEIGHT_CONTROL_BLOCK,
) => {
  // Если таблица свернута - высота 0 (кроме controlBlock)
  if (isCollapsed) {
    return '0px';
  }

  const initialHeight = tableContainerHeight ?? HEIGHT_TABLE_DEFAULT;

  // Гарантируем минимальную высоту контентной части
  const height =
    typeof initialHeight === 'number' && initialHeight < MIN_CONTENT_HEIGHT
      ? MIN_CONTENT_HEIGHT
      : initialHeight;

  if (typeof height === 'number' || typeof height === 'string') {
    const heightConverted = typeof height === 'number' ? `${height}px` : height;

    const heightOfControlBlock = isHaveControlBlock ? controlBlockHeight : 0;

    // Если кнопка коллапсинга сверху - добавляем еще один блок той же высоты
    const heightOfCollapseBlockAbove =
      collapseButtonPlacement === 'above' ? controlBlockHeight : 0;

    const filterListHeight = filtersAreVisible ? HEIGHT_FILTERLIST_BLOCK : 0;

    // Если paginationHeight === 0 - значит эффект вычисляющий высоту блока пагинации не отработал еще, используем в качестве fallback старую логику (getPaginationHeight)
    // Если это не делать, то так как у нас стоит анимация на изменения высоты таблицы, блок пагинации изменится с 0 до условных 56px - сработает анимация и будет плавное визуальное уменьшение основной высоты таблицы. В этих случаях отработает fallback.
    const heightOfPagination =
      paginationHeight === 0
        ? getPaginationHeight(paginationActiveInConfig, paginationCustomSize)
        : paginationHeight;

    // ControlBlock heights
    // If searching is active and move bellow - that's means control block multiply own height
    const calculatedControlBlockHeight = isSearchingBellow
      ? heightOfControlBlock * 2
      : heightOfControlBlock;

    const totalHeightToSubtract =
      calculatedControlBlockHeight +
      heightOfCollapseBlockAbove +
      filterListHeight +
      heightOfPagination;

    return `max(${MIN_CONTENT_HEIGHT}px, calc(${heightConverted} - ${totalHeightToSubtract}px))`;
  }
  return undefined;
};

export const getTableHeightStyles = (
  tableContainerHeight: string | number | undefined,
  tableContainerMaxHeight: string | number | undefined,
  isHaveControlBlock: boolean | undefined,
  filtersAreVisible: boolean,
  fullScreened: boolean,
  paginationActiveInConfig: boolean,
  paginationHeight: number,
  paginationCustomSize: PaginationSize | undefined,
  isSearchingBellow: boolean,
  isCollapsed: boolean,
  collapseButtonPlacement: 'inside' | 'above' = 'inside',
  // Реальная высота контрл-блока (m/s = 40, xs = 32), прокидывается в
  // расчёт высоты таблицы
  controlBlockHeight: number = HEIGHT_CONTROL_BLOCK,
) => {
  if (fullScreened) {
    const height = getHeightOfTable(
      FULL_SCREEN.HEIGHT_TABLE,
      isHaveControlBlock,
      filtersAreVisible,
      paginationActiveInConfig,
      paginationHeight,
      paginationCustomSize,
      isSearchingBellow,
      isCollapsed,
      collapseButtonPlacement,
      controlBlockHeight,
    );
    return {
      height,
      maxHeight: height,
    };
  }
  const getH = (h: typeof tableContainerHeight) =>
    getHeightOfTable(
      h,
      isHaveControlBlock,
      filtersAreVisible,
      paginationActiveInConfig,
      paginationHeight,
      paginationCustomSize,
      isSearchingBellow,
      isCollapsed,
      collapseButtonPlacement,
      controlBlockHeight,
    );

  const height = getH(tableContainerHeight);

  const maxHeight =
    tableContainerMaxHeight === undefined
      ? height
      : getH(tableContainerMaxHeight);

  return {
    height,
    maxHeight,
  };
};
