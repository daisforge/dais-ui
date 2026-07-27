import { css } from 'styled-components';

import { selectionCellBeforeEl, selectionStyleForCell } from './cellStyle';
import { tableClassNames as cls } from './classNames';
import { COLORS, FIRST_ROW } from './styles.constants';

// ROW SELECTORS
const IS_SELECTED_ROW = `:has(.${cls.cell}[aria-selected='true'])` as const;
const ROW_SELECTOR =
  `.${cls.row}:not(.${cls.headerRow}):not(.${cls.summaryRow})` as const;

// TOP SUMMARY ROW SELECTORS
const SELECTED_TOP_SUM_ROW = `.${cls.topSummaryRow}${IS_SELECTED_ROW}` as const;
const FIRST_AND_SELECTED_TOP_SUM_ROW =
  `${SELECTED_TOP_SUM_ROW}:nth-child(1 of .${cls.topSummaryRow})` as const;
const TOP_SUM_ROW_BEFORE_SELECTED_TOP_SUM_ROW =
  `.${cls.topSummaryRow}:has(+ .${cls.topSummaryRow} > .${cls.cell}[aria-selected='true'])` as const;

// BOTTOM SUMMARY ROW SELECTORS
const SELECTED_BOTTOM_SUM_ROW =
  `.${cls.bottomSummaryRow}${IS_SELECTED_ROW}` as const;
const BOTTOM_SUM_ROW_AFTER_SELECTED_BOTTOM_SUM_ROW =
  `${SELECTED_BOTTOM_SUM_ROW} + .${cls.bottomSummaryRow}` as const;
const LAST_AND_SELECTED_TOP_SUM_ROW =
  `${SELECTED_BOTTOM_SUM_ROW}:nth-last-child(1 of .${cls.bottomSummaryRow})` as const;

export const selectionStyleForRow = css`
  ${ROW_SELECTOR}${IS_SELECTED_ROW} {
    &.${FIRST_ROW} {
      .${cls.cell} {
        ${() => selectionCellBeforeEl(undefined, 'top')};
      }
    }
    &:not(.${FIRST_ROW}) {
      .${cls.cell} {
        border-top: 1px solid ${COLORS.selectCellColor};
      }
    }
    & + ${ROW_SELECTOR} {
      .${cls.cell} {
        border-top: 1px solid ${COLORS.selectCellColor};
      }
    }
    &:nth-last-child(1 of ${ROW_SELECTOR}) {
      .${cls.cell} {
        border-block-end: 1px solid ${COLORS.selectCellColor};
      }
    }
    & {
      .${cls.cell} {
        &:first-of-type {
          ${() => selectionCellBeforeEl(undefined, 'left')};
        }
        &:last-of-type {
          ${() => selectionCellBeforeEl(undefined, 'right')};
        }
      }
    }
  }
  .${cls.headerRow} {
    .${cls.cell} {
      ${selectionStyleForCell}
    }
  }

  ${TOP_SUM_ROW_BEFORE_SELECTED_TOP_SUM_ROW}, ${SELECTED_TOP_SUM_ROW} {
    .${cls.cell} {
      border-block-end-color: ${COLORS.selectCellColor};
    }
  }

  ${FIRST_AND_SELECTED_TOP_SUM_ROW} {
    .${cls.cell} {
      ${() => selectionCellBeforeEl(undefined, 'top')};
    }
  }

  ${SELECTED_BOTTOM_SUM_ROW}, ${BOTTOM_SUM_ROW_AFTER_SELECTED_BOTTOM_SUM_ROW} {
    .${cls.cell} {
      border-block-start-color: ${COLORS.selectCellColor};
    }
  }
  ${LAST_AND_SELECTED_TOP_SUM_ROW} {
    .${cls.cell} {
      ${() => selectionCellBeforeEl(undefined, 'bottom')};
    }
  }

  .${cls.summaryRow}${IS_SELECTED_ROW} {
    .${cls.cell} {
      &:first-of-type {
        ${() => selectionCellBeforeEl(undefined, 'left')};
      }
      &:last-of-type {
        ${() => selectionCellBeforeEl(undefined, 'right')};
      }
    }
  }
`;
