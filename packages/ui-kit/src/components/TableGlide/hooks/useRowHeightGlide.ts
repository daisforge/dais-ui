import { useMemo, useRef } from 'react';

import { DEFAULT_ROW_HEIGHT, type SIZE } from '../constants';
import type { RowHeightGlide, RowHeightProp, RowHeightsRef } from '../types';
import { type AutoRowHeightSource, useAutoRowHeight } from './useAutoRowHeight';

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
}

/**
 * Высоты строк для glide. `'auto'` — по содержимому ячеек (их измеряет `useAutoRowHeight`),
 * иначе число, функция по строке или высота по размеру строк.
 * Источник измерения (`measureSourceRef`) таблица заполняет, когда готовы колонки и чтение ячеек.
 */
export function useRowHeightGlide<R extends object>({
  rowHeight,
  rows,
  rowSize,
  rowHeightsRef,
}: Params<R>) {
  const measureSourceRef = useRef<AutoRowHeightSource | null>(null);
  const auto = useAutoRowHeight({
    enabled: rowHeight === 'auto',
    rows,
    sourceRef: measureSourceRef,
  });

  const rowHeightGlide = useMemo<NonNullable<RowHeightGlide>>(() => {
    const baseOf = baseHeightOf(rowHeight, rows, rowSize);
    if (rowHeight === 'auto') {
      const base = baseOf(0);
      return (rowIndex) => auto.heightOf(rowIndex, base);
    }
    return typeof rowHeight === 'function' ? baseOf : baseOf(0);
    // auto.heightOf и auto.version меняются с новыми измерениями: glide должен заново спросить высоты
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowHeight, rows, rowSize, auto.heightOf, auto.version]);

  if (rowHeightsRef) {
    rowHeightsRef.current =
      typeof rowHeightGlide === 'function'
        ? rowHeightGlide
        : () => rowHeightGlide;
  }

  return {
    rowHeightGlide,
    measureSourceRef,
    trackAutoRowHeightRegion: auto.trackVisibleRegion,
  };
}
