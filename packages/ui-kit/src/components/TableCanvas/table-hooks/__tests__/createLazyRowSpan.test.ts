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

  it('повторная отрисовка ячейки берёт ответ из кеша, резолвер не вызывается', () => {
    const lazyRowSpan = vi.fn(() => null);
    const rowSpan = createLazyRowSpan<Row>(lazyRowSpan, 'region', {
      current: rows,
    });

    rowSpan({ rowInd: 2, row: rows[2]! });
    rowSpan({ rowInd: 2, row: rows[2]! });

    expect(lazyRowSpan).toHaveBeenCalledTimes(1);
  });

  it('найденный блок отвечает за все свои строки', () => {
    const lazyRowSpan = vi.fn(() => [0, 1] as const);
    const rowSpan = createLazyRowSpan<Row>(lazyRowSpan, 'region', {
      current: rows,
    });

    expect(rowSpan({ rowInd: 0, row: rows[0]! })).toEqual([0, 1]);
    expect(rowSpan({ rowInd: 1, row: rows[1]! })).toEqual([0, 1]);
    expect(lazyRowSpan).toHaveBeenCalledTimes(1);
  });

  it('несколько блоков: строка находит свой, строка между блоками спрашивает резолвер', () => {
    const many = Array.from({ length: 10 }, (_, id) => ({ id, region: '' }));
    const lazyRowSpan = vi.fn((_row: Row, _colKey: string, rowInd: number) =>
      rowInd < 3 ? ([0, 2] as const) : rowInd > 6 ? ([7, 9] as const) : null,
    );
    const rowSpan = createLazyRowSpan<Row>(lazyRowSpan, 'region', {
      current: many,
    });

    rowSpan({ rowInd: 8, row: many[8]! });
    rowSpan({ rowInd: 1, row: many[1]! });
    lazyRowSpan.mockClear();

    expect(rowSpan({ rowInd: 9, row: many[9]! })).toEqual([7, 9]);
    expect(rowSpan({ rowInd: 0, row: many[0]! })).toEqual([0, 2]);
    expect(lazyRowSpan).not.toHaveBeenCalled();
    expect(rowSpan({ rowInd: 4, row: many[4]! })).toBeNull();
    expect(lazyRowSpan).toHaveBeenCalledTimes(1);
  });

  it('блок, не содержащий строку, за другие строки не отвечает', () => {
    const lazyRowSpan = vi.fn(() => [1, 2] as const);
    const rowSpan = createLazyRowSpan<Row>(lazyRowSpan, 'region', {
      current: rows,
    });

    rowSpan({ rowInd: 0, row: rows[0]! });
    rowSpan({ rowInd: 1, row: rows[1]! });

    expect(lazyRowSpan).toHaveBeenCalledTimes(2);
  });

  it('новый массив отображаемых строк сбрасывает кеш', () => {
    const lazyRowSpan = vi.fn(() => null);
    const rowsRef = { current: rows };
    const rowSpan = createLazyRowSpan<Row>(lazyRowSpan, 'region', rowsRef);

    rowSpan({ rowInd: 0, row: rows[0]! });
    rowsRef.current = [...rows];
    rowSpan({ rowInd: 0, row: rows[0]! });

    expect(lazyRowSpan).toHaveBeenCalledTimes(2);
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
