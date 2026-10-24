import type {
  CanvasNodeTooltipConfig,
  RowErrorsSummary,
} from '@ui-kit/components/TableGlide';
import { IconAttentionTriangleFill } from '@ui-kit/icons';
import React from 'react';

import type { SIZE } from '../styles/styles.constants';
import {
  Canvas,
  CellInfoGlideInstance,
  createEmptyCellGlide,
} from '../TableGlideInstance';
import { ObjectForExtending } from '../types';
import { ColumnConfigInternal } from '../types/column-config-internal.type';
import {
  ROW_ERRORS_COLUMN_KEY,
  ROW_ERRORS_TOOLTIP_DEFAULT_PLACEMENT,
} from './constants';
import { getRowErrorsMetricsByRowSize } from './row-errors-metrics';

export type GetRowErrorsTooltip = (
  row: ObjectForExtending,
  rowErrors: RowErrorsSummary,
) => CanvasNodeTooltipConfig | null;

/** Строку или конфиг без placement дополняем размещением по умолчанию. */
const withDefaultPlacement = (
  tooltip: ReturnType<GetRowErrorsTooltip>,
): CanvasNodeTooltipConfig | null => {
  if (!tooltip) return tooltip;
  if (typeof tooltip === 'string') {
    return { text: tooltip, placement: ROW_ERRORS_TOOLTIP_DEFAULT_PLACEMENT };
  }
  return tooltip.placement
    ? tooltip
    : { ...tooltip, placement: ROW_ERRORS_TOOLTIP_DEFAULT_PLACEMENT };
};

/**
 * Служебный столбец с индикатором ошибок строки.
 *
 * Ячейка пустая, пока у строки нет сводки ошибок (`cellInfo.rowErrors`, её
 * собирает TableGlide по окну видимости). Если сводка есть, рисуется красный
 * треугольник с тултипом. Тултип считается при отрисовке только для строк с
 * ошибками, поэтому функция `getTooltip` должна быть лёгкой.
 */
export const createRowErrorsColumn = ({
  rowSize,
  getTooltip,
}: {
  rowSize: SIZE;
  getTooltip: GetRowErrorsTooltip;
}): ColumnConfigInternal<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  unknown
> => {
  const { columnWidth } = getRowErrorsMetricsByRowSize(rowSize);

  const renderCell = (props: CellInfoGlideInstance<ObjectForExtending>) => {
    const { row, rowErrors, theme } = props;

    if (!rowErrors) {
      return createEmptyCellGlide();
    }

    const { iconSize } = getRowErrorsMetricsByRowSize(theme.rowSize);
    const tooltip = withDefaultPlacement(getTooltip(row, rowErrors));

    return (
      <Canvas.Container
        justifyContent="center"
        alignItems="center"
        style={{ width: '100%' }}
      >
        <Canvas.Icon
          icon={<IconAttentionTriangleFill />}
          size={iconSize}
          color={theme.tokens.textNegative}
          {...(tooltip && { tooltip })}
        />
      </Canvas.Container>
    );
  };

  return {
    key: ROW_ERRORS_COLUMN_KEY,
    name: '',
    isServiceColumn: true,
    width: columnWidth,
    // Ширина фиксирована: minWidth и maxWidth равны width, TableGlide не
    // запоминает ресайз такой колонки (см. onColumnResizeInternal).
    minWidth: columnWidth,
    maxWidth: columnWidth,
    frozen: true,
    renderCell,
  };
};
