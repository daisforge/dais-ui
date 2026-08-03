import { describe, expect, it } from 'vitest';

import type { TransferColumnConfig } from '../types';
import { collectMatrixFromTargets } from './collectMatrixFromTargets';
import { collectTextMatrix } from './collectTextMatrix';

const c = (
  key: string,
  extra: Record<string, unknown> = {},
): TransferColumnConfig =>
  // eslint-disable-next-line prettier/prettier
  ({ key, ...extra } as unknown as TransferColumnConfig);

describe('collectTextMatrix — прямоугольный диапазон (copy)', () => {
  const columns = [c('svc', { isServiceColumn: true }), c('a'), c('b')];
  const rows = [
    { a: 'a0', b: 'b0' },
    { a: 'a1', b: 'b1' },
  ];

  it('собирает матрицу текстов по диапазону data-колонок', () => {
    const { grid } = collectTextMatrix(
      { x: 1, y: 0, width: 2, height: 2 },
      columns,
      rows,
    );
    expect(grid).toEqual([
      ['a0', 'b0'],
      ['a1', 'b1'],
    ]);
  });

  it('числовые значения приводятся к строке', () => {
    const cols = [c('svc', { isServiceColumn: true }), c('n')];
    const { grid } = collectTextMatrix(
      { x: 1, y: 0, width: 1, height: 1 },
      cols,
      [{ n: 42 }],
    );
    expect(grid).toEqual([['42']]);
  });

  it('withCells: параллельно отдаёт rawValue и formattedValue', () => {
    const { grid, cells } = collectTextMatrix(
      { x: 1, y: 0, width: 1, height: 1 },
      columns,
      rows,
      { withCells: true },
    );
    expect(grid).toEqual([['a0']]);
    expect(cells[0]?.[0]).toMatchObject({
      colIndex: 1,
      rowIndex: 0,
      rawValue: 'a0',
      formattedValue: 'a0',
    });
  });
});

describe('collectTextMatrix — copyData для кастомных ячеек', () => {
  it('copyData-функция важнее сырого значения (кейс Badge/Text)', () => {
    const columns = [
      c('svc', { isServiceColumn: true }),
      c('priority', {
        copyData: (r: { priority: string }) => `P-${r.priority}`,
      }),
    ];
    const { grid } = collectTextMatrix(
      { x: 1, y: 0, width: 1, height: 2 },
      columns,
      [{ priority: 'High' }, { priority: 'Low' }],
    );
    expect(grid).toEqual([['P-High'], ['P-Low']]);
  });
});

describe('collectMatrixFromTargets — несмежные индексы (Ctrl-выбор)', () => {
  const columns = [c('svc', { isServiceColumn: true }), c('a'), c('b'), c('d')];
  const rows = [
    { a: 'a0', b: 'b0', d: 'd0' },
    { a: 'a1', b: 'b1', d: 'd1' },
    { a: 'a2', b: 'b2', d: 'd2' },
  ];

  it('берёт только указанные строки и колонки', () => {
    // строки 0 и 2, колонки 1 (a) и 3 (d)
    const { grid } = collectMatrixFromTargets([0, 2], [1, 3], columns, rows);
    expect(grid).toEqual([
      ['a0', 'd0'],
      ['a2', 'd2'],
    ]);
  });

  it('несуществующие индексы строк пропускаются', () => {
    const { grid } = collectMatrixFromTargets([0, 99], [1], columns, rows);
    expect(grid).toEqual([['a0']]);
  });
});
