import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { ColumnGlideLast } from '../types';
import { useErrorCellRanges } from './useErrorCellRanges';

type Row = { id: number; bad: boolean; far: boolean };

const col = (
  id: string,
  extra: Partial<ColumnGlideLast<Row, unknown>> = {}
): ColumnGlideLast<Row, unknown> =>
  ({ id, title: id, ...extra } as ColumnGlideLast<Row, unknown>);

/**
 * Служебная колонка, колонка `a` с проверкой ошибки, колонка `b` без неё и
 * ещё 70 пустых колонок, чтобы колонка `far` (индекс 73) не попала в окно
 * первого экрана (60 колонок).
 */
const columns: ColumnGlideLast<Row, unknown>[] = [
  col('service', { isServiceColumn: true, isErrorCell: () => true }),
  col('a', { isErrorCell: (r) => r.bad }),
  col('b'),
  ...Array.from({ length: 70 }, (_, i) => col(`c${i}`)),
  col('far', { isErrorCell: (r) => r.far }),
];

const rows: Row[] = [
  { id: 0, bad: false, far: false },
  { id: 1, bad: true, far: false },
  { id: 2, bad: true, far: true },
  { id: 3, bad: false, far: true },
];

const render = (
  params: Partial<Parameters<typeof useErrorCellRanges<Row, unknown>>[0]>
) =>
  renderHook(() => useErrorCellRanges<Row, unknown>({ columns, rows, ...params }))
    .result.current;

describe('useErrorCellRanges: поячеечные рамки', () => {
  it('строит регион на каждую ячейку с ошибкой в окне и пропускает служебные колонки', () => {
    const { errorCellRanges, errorRowIndexes, rowErrorsByIndex } = render({});

    expect(errorCellRanges).toEqual([
      { x: 1, y: 1, width: 1, height: 1 },
      { x: 1, y: 2, width: 1, height: 1 },
    ]);
    expect(errorRowIndexes).toEqual([]);
    expect(rowErrorsByIndex.size).toBe(0);
  });

  it('ничего не считает без колонок с проверкой и без isErrorRow', () => {
    const { errorCellRanges } = render({ columns: [col('service'), col('b')] });

    expect(errorCellRanges).toEqual([]);
  });
});

describe('useErrorCellRanges: ошибка всей строки', () => {
  it('отдаёт индекс строки и не строит поячеечные регионы в ней', () => {
    const { errorCellRanges, errorRowIndexes } = render({
      isErrorRow: (r) => r.id === 2,
    });

    expect(errorRowIndexes).toEqual([2]);
    expect(errorCellRanges).toEqual([{ x: 1, y: 1, width: 1, height: 1 }]);
  });

  it('работает и без колонок с проверкой ошибки', () => {
    const { errorRowIndexes } = render({
      columns: [col('service'), col('b')],
      isErrorRow: (r) => r.id === 3,
    });

    expect(errorRowIndexes).toEqual([3]);
  });
});

describe('useErrorCellRanges: сводка по строкам', () => {
  it('считает ошибки по всем колонкам, а регионы строит только в окне', () => {
    const { errorCellRanges, rowErrorsByIndex } = render({
      collectRowErrors: true,
    });

    expect(rowErrorsByIndex.get(0)).toBeUndefined();
    expect(rowErrorsByIndex.get(1)).toEqual({
      errorCellsCount: 1,
      errorColumnKeys: ['a'],
      isErrorRow: false,
    });
    expect(rowErrorsByIndex.get(2)).toEqual({
      errorCellsCount: 2,
      errorColumnKeys: ['a', 'far'],
      isErrorRow: false,
    });
    expect(rowErrorsByIndex.get(3)).toEqual({
      errorCellsCount: 1,
      errorColumnKeys: ['far'],
      isErrorRow: false,
    });
    // Колонка far за пределами окна первого экрана: в сводке есть, рамки нет.
    expect(errorCellRanges).toEqual([
      { x: 1, y: 1, width: 1, height: 1 },
      { x: 1, y: 2, width: 1, height: 1 },
    ]);
  });

  it('у строки с ошибкой всей строки сводка есть даже без ошибок в ячейках', () => {
    const { rowErrorsByIndex } = render({
      collectRowErrors: true,
      isErrorRow: (r) => r.id === 0,
    });

    expect(rowErrorsByIndex.get(0)).toEqual({
      errorCellsCount: 0,
      errorColumnKeys: [],
      isErrorRow: true,
    });
    expect(rowErrorsByIndex.get(2)?.isErrorRow).toBe(false);
  });
});
