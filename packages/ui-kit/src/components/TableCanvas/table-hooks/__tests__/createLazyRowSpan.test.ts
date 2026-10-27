import { describe, expect, it, vi } from 'vitest';

import { createLazyRowSpan } from '../createLazyRowSpan';

// Контракт mergeCells.lazyRowSpan: строка ячейки — первым аргументом, затем ключ
// колонки и индекс на экране; отображаемые строки — в ctx.rows.

type Row = { id: number; region: string };

const rows: Row[] = [
  { id: 0, region: 'Север' },
  { id: 1, region: 'Север' },
  { id: 2, region: 'Юг' },
];

describe('createLazyRowSpan', () => {
  it('передаёт строку, ключ колонки, индекс и отображаемые строки', () => {
    const lazyRowSpan = vi.fn(() => [0, 1] as const);
    const rowSpan = createLazyRowSpan<Row>(lazyRowSpan, 'region', {
      current: rows,
    });

    expect(rowSpan({ rowInd: 1, row: rows[1]! })).toEqual([0, 1]);
    expect(lazyRowSpan).toHaveBeenCalledWith(rows[1], 'region', 1, { rows });
  });

  it('скелетон (строка не из отображаемых) не сливается и резолвер не вызывается', () => {
    const lazyRowSpan = vi.fn(() => [0, 1] as const);
    const rowSpan = createLazyRowSpan<Row>(lazyRowSpan, 'region', {
      current: rows,
    });

    expect(rowSpan({ rowInd: 1, row: { id: -1, region: '' } })).toBeNull();
    expect(lazyRowSpan).not.toHaveBeenCalled();
  });

  it('берёт текущие строки из ref: после сортировки ctx.rows — новый порядок', () => {
    const lazyRowSpan = vi.fn(() => null);
    const rowsRef = { current: rows };
    const rowSpan = createLazyRowSpan<Row>(lazyRowSpan, 'region', rowsRef);
    const sorted = [rows[2]!, rows[0]!, rows[1]!];
    rowsRef.current = sorted;

    expect(rowSpan({ rowInd: 0, row: rows[2]! })).toBeNull();
    expect(lazyRowSpan).toHaveBeenCalledWith(rows[2], 'region', 0, {
      rows: sorted,
    });
  });
});
