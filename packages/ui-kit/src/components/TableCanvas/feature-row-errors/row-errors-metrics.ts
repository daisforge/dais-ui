import type { SIZE } from '../styles/styles.constants';

type RowErrorsMetrics = {
  /** Ширина столбца (px). Совпадает с шириной столбца чекбоксов. */
  columnWidth: number;
  /** Размер иконки индикатора (px). Совпадает с иконками в строке (ROW_ICON_BUTTON_CONFIG). */
  iconSize: number;
};

const ROW_ERRORS_METRICS_BY_ROW_SIZE: Record<SIZE, RowErrorsMetrics> = {
  big: { columnWidth: 48, iconSize: 24 },
  medium: { columnWidth: 32, iconSize: 16 },
  small: { columnWidth: 24, iconSize: 12 },
};

export const getRowErrorsMetricsByRowSize = (
  rowSize: SIZE = 'medium',
): RowErrorsMetrics => ROW_ERRORS_METRICS_BY_ROW_SIZE[rowSize];
