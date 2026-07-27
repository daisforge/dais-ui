import type { SIZE } from '../styles/styles.constants';

type CheckboxMetrics = {
  checkboxSize: number;
  cellWidth: number;
  cellHeight: number;
  columnWidth: number;
};

const CHECKBOX_METRICS_BY_ROW_SIZE: Record<SIZE, CheckboxMetrics> = {
  big: {
    checkboxSize: 24,
    cellWidth: 48,
    cellHeight: 48,
    columnWidth: 48
  },
  medium: {
    checkboxSize: 16,
    cellWidth: 32,
    cellHeight: 32,
    columnWidth: 32
  },
  small: {
    checkboxSize: 16,
    cellWidth: 24,
    cellHeight: 20,
    columnWidth: 24
  }
};

export const getCheckboxMetricsByRowSize = (
  rowSize: SIZE = 'medium'
): CheckboxMetrics => CHECKBOX_METRICS_BY_ROW_SIZE[rowSize];

export const getCheckboxMetricsByTheme = (theme: {
  cellVerticalPadding?: number;
}): CheckboxMetrics => {
  switch (theme.cellVerticalPadding) {
    case 12:
      return CHECKBOX_METRICS_BY_ROW_SIZE.big;
    case 4:
      return CHECKBOX_METRICS_BY_ROW_SIZE.small;
    case 7:
    default:
      return CHECKBOX_METRICS_BY_ROW_SIZE.medium;
  }
};
