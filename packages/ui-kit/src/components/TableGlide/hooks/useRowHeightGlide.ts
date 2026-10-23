import { useMemo } from 'react';

import { DEFAULT_ROW_HEIGHT, type SIZE } from '../constants';
import type { RowHeightGlide, RowHeightProp, RowHeightsRef } from '../types';
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
  rowHeightsRef?: RowHeightsRef;
  columns: readonly { id: string }[];
  fontFamily?: string;
}

/**
 * Высоты строк для glide. `'auto'` — по содержимому ячеек (`useAutoRowHeight`; ячейкам
 * нужен `autoHeightReporter`), иначе число, функция по строке или высота по размеру строк.
 */
export function useRowHeightGlide<R extends object>({
  rowHeight,
  rows,
  rowSize,
  rowHeightsRef,
  columns,
  fontFamily,
}: Params<R>) {
  const isAuto = rowHeight === 'auto';
  const auto = useAutoRowHeight({ enabled: isAuto, rows, columns, fontFamily });

  const rowHeightGlide = useMemo<NonNullable<RowHeightGlide>>(() => {
    const baseOf = baseHeightOf(rowHeight, rows, rowSize);
    if (isAuto) {
      const base = baseOf(0);
      return (rowIndex) => auto.heightOf(rowIndex, base);
    }
    return typeof rowHeight === 'function' ? baseOf : baseOf(0);
    // auto.heightOf и auto.version меняются с новыми измерениями: glide должен заново спросить высоты
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowHeight, isAuto, rows, rowSize, auto.heightOf, auto.version]);

  if (rowHeightsRef) {
    rowHeightsRef.current =
      typeof rowHeightGlide === 'function'
        ? rowHeightGlide
        : () => rowHeightGlide;
  }

  return {
    rowHeightGlide,
    trackAutoRowHeightRegion: auto.trackVisibleRegion,
    autoHeightReporter: isAuto ? auto.reporterFor : undefined,
  };
}
