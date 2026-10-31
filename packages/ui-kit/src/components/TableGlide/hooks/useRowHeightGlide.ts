import { useMemo } from 'react';

import { DEFAULT_ROW_HEIGHT, type SIZE } from '../constants';
import type { RowHeightGlide, RowHeightProp } from '../types';
import { useAutoRowHeight } from './useAutoRowHeight';

const baseHeightOf =
  <R extends object>(
    rowHeight: RowHeightProp<R>,
    rows: readonly R[],
    rowSize: SIZE,
  ) =>
  (rowIndex: number): number => {
    const defaultHeight = DEFAULT_ROW_HEIGHT[rowSize];
    if (typeof rowHeight === 'number') return rowHeight;
    const row = rows[rowIndex];
    if (typeof rowHeight !== 'function' || !row) return defaultHeight;
    const height = rowHeight(
      row,
      { rowSizeName: rowSize, rowSizeValue: defaultHeight },
      rowIndex,
    );
    return Number.isFinite(height) ? height : defaultHeight;
  };

interface Params<R extends object> {
  rowHeight: RowHeightProp<R>;
  rows: readonly R[];
  rowSize: SIZE;
  columns: readonly { id: string; renderCell?: unknown }[];
  /** Тема таблицы: её смена перемеряет ячейки в `'auto'` */
  theme?: object;
  /** Потолок высоты строки в `'auto'` */
  maxAutoRowHeight?: number;
}

/**
 * Высоты строк для glide. `'auto'` — по содержимому ячеек (`useAutoRowHeight`; ячейкам
 * нужен `autoHeightReporter`), иначе число, функция по строке или высота по размеру строк.
 */
export function useRowHeightGlide<R extends object>({
  rowHeight,
  rows,
  rowSize,
  columns,
  theme,
  maxAutoRowHeight,
}: Params<R>) {
  const isAuto = rowHeight === 'auto';
  const auto = useAutoRowHeight({
    enabled: isAuto,
    rows,
    columns,
    theme,
    maxHeight: maxAutoRowHeight,
    baseHeight: DEFAULT_ROW_HEIGHT[rowSize],
  });

  // auto.heightOf меняется с новыми измерениями: glide должен заново спросить высоты
  const rowHeightGlide = useMemo<NonNullable<RowHeightGlide>>(() => {
    if (isAuto) return auto.heightOf;
    const baseOf = baseHeightOf(rowHeight, rows, rowSize);
    return typeof rowHeight === 'function' ? baseOf : baseOf(0);
  }, [rowHeight, isAuto, rows, rowSize, auto.heightOf]);

  return {
    rowHeightGlide,
    trackAutoRowHeightRegion: auto.trackVisibleRegion,
    autoHeightReporter: isAuto ? auto.reporterFor : undefined,
    takeAnchorShift: auto.takeAnchorShift,
  };
}
