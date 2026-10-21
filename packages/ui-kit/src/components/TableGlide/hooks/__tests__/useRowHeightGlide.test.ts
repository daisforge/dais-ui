import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { DEFAULT_ROW_HEIGHT } from '../../constants';
import type { RowHeightProp, RowHeightsRef } from '../../types';
import { useRowHeightGlide } from '../useRowHeightGlide';

// Шрифты в jsdom не грузятся: подписка не нужна и требует canvas
vi.mock('../../lib/canvas/hooks/fontUtils', () => ({
  subscribeFontsLoaded: () => () => {},
}));

type Row = { height?: number };

const ROWS: Row[] = [{ height: 50 }, {}];

const heightsOf = (rowHeight: RowHeightProp<Row>) => {
  const rowHeightsRef: RowHeightsRef = { current: null };
  const { result } = renderHook(() =>
    useRowHeightGlide({
      rowHeight,
      rows: ROWS,
      rowSize: 'medium',
      rowHeightsRef,
    }),
  );
  const { rowHeightGlide } = result.current;
  const glideHeightOf = (rowIndex: number) =>
    typeof rowHeightGlide === 'function'
      ? rowHeightGlide(rowIndex)
      : rowHeightGlide;
  return { glideHeightOf, refHeightOf: rowHeightsRef.current! };
};

describe('useRowHeightGlide', () => {
  it('без rowHeight — высота по rowSize', () => {
    const { glideHeightOf, refHeightOf } = heightsOf(undefined);

    expect(glideHeightOf(0)).toBe(DEFAULT_ROW_HEIGHT.medium);
    expect(refHeightOf(1)).toBe(DEFAULT_ROW_HEIGHT.medium);
  });

  it('число — одна высота для всех строк', () => {
    const { glideHeightOf, refHeightOf } = heightsOf(44);

    expect(glideHeightOf(1)).toBe(44);
    expect(refHeightOf(0)).toBe(44);
  });

  it('функция — высота по строке, нечисловой ответ заменяется высотой по rowSize', () => {
    const { glideHeightOf, refHeightOf } = heightsOf(
      (row) => row.height ?? Number.NaN,
    );

    expect(glideHeightOf(0)).toBe(50);
    expect(glideHeightOf(1)).toBe(DEFAULT_ROW_HEIGHT.medium);
    expect(refHeightOf(0)).toBe(50);
  });

  it("'auto' без источника измерения — высота по rowSize", () => {
    const { glideHeightOf } = heightsOf('auto');

    expect(glideHeightOf(0)).toBe(DEFAULT_ROW_HEIGHT.medium);
  });
});
