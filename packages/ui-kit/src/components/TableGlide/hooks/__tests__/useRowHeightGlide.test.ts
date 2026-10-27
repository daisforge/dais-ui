import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { DEFAULT_ROW_HEIGHT } from '../../constants';
import type { RowHeightProp } from '../../types';
import { useRowHeightGlide } from '../useRowHeightGlide';

// Шрифты в jsdom не грузятся: подписка не нужна и требует canvas
vi.mock('../../lib/canvas/hooks/fontsLoaded', () => ({
  subscribeFontsLoaded: () => () => {},
}));

type Row = { height?: number };

const ROWS: Row[] = [{ height: 50 }, {}];

const heightOf = (rowHeight: RowHeightProp<Row>) => {
  const { result } = renderHook(() =>
    useRowHeightGlide({
      rowHeight,
      rows: ROWS,
      rowSize: 'medium',
      columns: [],
    }),
  );
  const { rowHeightGlide } = result.current;
  return (rowIndex: number) =>
    typeof rowHeightGlide === 'function'
      ? rowHeightGlide(rowIndex)
      : rowHeightGlide;
};

describe('useRowHeightGlide', () => {
  it('без rowHeight — высота по rowSize', () => {
    const glideHeightOf = heightOf(undefined);

    expect(glideHeightOf(0)).toBe(DEFAULT_ROW_HEIGHT.medium);
    expect(glideHeightOf(1)).toBe(DEFAULT_ROW_HEIGHT.medium);
  });

  it('число — одна высота для всех строк', () => {
    const glideHeightOf = heightOf(44);

    expect(glideHeightOf(0)).toBe(44);
    expect(glideHeightOf(1)).toBe(44);
  });

  it('функция — высота по строке, нечисловой ответ заменяется высотой по rowSize', () => {
    const glideHeightOf = heightOf((row) => row.height ?? Number.NaN);

    expect(glideHeightOf(0)).toBe(50);
    expect(glideHeightOf(1)).toBe(DEFAULT_ROW_HEIGHT.medium);
  });

  it("'auto' без источника измерения — высота по rowSize", () => {
    const glideHeightOf = heightOf('auto');

    expect(glideHeightOf(0)).toBe(DEFAULT_ROW_HEIGHT.medium);
  });
});
