import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useRowHeight } from '../useRowHeight';

type Row = { id: number };

const setup = (
  rowHeight: (row: Row, size: unknown, rowIndex: number) => number,
) =>
  renderHook(() =>
    useRowHeight<object, number, Row>({
      rowSize: 'small',
      rowDetailIsActiveInConfig: false,
      tableConfig: { rowHeight } as never,
    }),
  ).result.current.resultRowHeight as (
    row: Row,
    size: unknown,
    rowIndex: number,
  ) => number;

describe('useRowHeight', () => {
  it('передаёт функции высоты индекс строки, который спрашивает таблица', () => {
    const rowHeight = vi.fn(() => 40);
    const heightOf = setup(rowHeight);

    heightOf({ id: 7 }, undefined, 5);

    expect(rowHeight).toHaveBeenCalledWith(
      { id: 7 },
      expect.objectContaining({ rowSizeName: 'small' }),
      5,
    );
  });

  it('высота может зависеть от индекса строки', () => {
    const heightOf = setup((_row, _size, rowIndex) => (rowIndex % 2 ? 60 : 30));

    expect(heightOf({ id: 1 }, undefined, 0)).toBe(30);
    expect(heightOf({ id: 2 }, undefined, 1)).toBe(60);
  });
});
