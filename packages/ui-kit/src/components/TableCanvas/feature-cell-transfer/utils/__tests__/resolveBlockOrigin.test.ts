import { describe, expect, it } from 'vitest';

import type { ObjectForExtending } from '../../../types';
import type { TransferColumnConfig } from '../../types';
import { resolveBlock, resolveBlockOrigin } from '../resolveBlockOrigin';
import { snapDestToRowBlocks } from '../snapDestToRowBlocks';

// Геометрия объединённых блоков в слое cell-transfer: резолв любой ячейки к
// origin, границы блока и вертикальный снап fill-протяжки к целым блокам.

type Row = ObjectForExtending;

const rows: Row[] = Array.from({ length: 6 }, (_, i) => ({ i }));

/** Колонка с опциональными span-функциями в терминах TransferColumnConfig. */
const col = (
  key: string,
  spans: {
    colSpan?: number | ((info: { rowInd: number }) => number);
    rowSpan?: (info: { rowInd: number }) => readonly [number, number] | null;
  } = {},
): TransferColumnConfig =>
  ({ key, ...spans } as unknown as TransferColumnConfig);

/** rowSpan-функция «блок строк [start, end] на этой колонке». */
const rowsBlock =
  (start: number, end: number) =>
  ({ rowInd }: { rowInd: number }): readonly [number, number] | null =>
    rowInd >= start && rowInd <= end ? [start, end] : null;

describe('resolveBlockOrigin — резолв ячейки к origin блока', () => {
  it('одиночная ячейка резолвится сама в себя', () => {
    const columns = [col('a'), col('b')];
    expect(resolveBlockOrigin(1, 2, columns, rows)).toEqual([1, 2]);
  });

  it('rowspan: покрытая строка резолвится к верхней строке блока', () => {
    const columns = [col('a', { rowSpan: rowsBlock(1, 3) })];
    expect(resolveBlockOrigin(0, 2, columns, rows)).toEqual([0, 1]);
    expect(resolveBlockOrigin(0, 1, columns, rows)).toEqual([0, 1]);
  });

  it('colspan: покрытая колонка резолвится к origin-колонке слева', () => {
    // Блок колонок [0..1] на строке 0 (colSpan объявлен на origin-колонке).
    const columns = [
      col('a', { colSpan: ({ rowInd }) => (rowInd === 0 ? 1 : 0) }),
      col('b'),
    ];
    expect(resolveBlockOrigin(1, 0, columns, rows)).toEqual([0, 0]);
    // На другой строке колонка 1 одиночная.
    expect(resolveBlockOrigin(1, 1, columns, rows)).toEqual([1, 1]);
  });

  it('прямоугольник: покрытая ячейка резолвится к левому верхнему углу', () => {
    const columns = [
      col('a', {
        colSpan: ({ rowInd }) => (rowInd >= 1 && rowInd <= 2 ? 1 : 0),
        rowSpan: rowsBlock(1, 2),
      }),
      col('b'),
    ];
    expect(resolveBlockOrigin(1, 2, columns, rows)).toEqual([0, 1]);
  });
});

describe('resolveBlock — границы блока', () => {
  it('одиночная ячейка — null', () => {
    expect(resolveBlock(0, 0, [col('a')], rows)).toBeNull();
  });

  it('rowspan-блок отдаёт диапазон строк при colExtra 0', () => {
    const columns = [col('a', { rowSpan: rowsBlock(1, 3) })];
    expect(resolveBlock(0, 2, columns, rows)).toEqual({
      startCol: 0,
      endCol: 0,
      startRow: 1,
      endRow: 3,
    });
  });

  it('прямоугольник от покрытой ячейки отдаёт полные границы', () => {
    const columns = [
      col('a', {
        colSpan: ({ rowInd }) => (rowInd >= 1 && rowInd <= 2 ? 1 : 0),
        rowSpan: rowsBlock(1, 2),
      }),
      col('b'),
    ];
    expect(resolveBlock(1, 2, columns, rows)).toEqual({
      startCol: 0,
      endCol: 1,
      startRow: 1,
      endRow: 2,
    });
  });
});

describe('snapDestToRowBlocks — вертикальный снап протяжки к целым блокам', () => {
  it('без блоков rect не меняется', () => {
    const dest = { x: 0, y: 1, width: 2, height: 2 };
    expect(snapDestToRowBlocks(dest, [col('a'), col('b')], rows)).toEqual(dest);
  });

  it('нижняя граница внутри блока растягивается до низа блока', () => {
    const columns = [col('a', { rowSpan: rowsBlock(2, 4) })];
    const snapped = snapDestToRowBlocks(
      { x: 0, y: 0, width: 1, height: 3 }, // строки 0..2, блок 2..4 задет краем
      columns,
      rows,
    );
    expect(snapped).toEqual({ x: 0, y: 0, width: 1, height: 5 });
  });

  it('верхняя граница внутри блока растягивается до верха блока', () => {
    const columns = [col('a', { rowSpan: rowsBlock(0, 2) })];
    const snapped = snapDestToRowBlocks(
      { x: 0, y: 2, width: 1, height: 2 },
      columns,
      rows,
    );
    expect(snapped).toEqual({ x: 0, y: 0, width: 1, height: 4 });
  });

  it('цепочка: растяжение до блока задевает следующий блок другой колонки', () => {
    // Колонка a: блок 2..3; колонка b: блок 3..5. Rect строк 2 у обеих колонок.
    const columns = [
      col('a', { rowSpan: rowsBlock(2, 3) }),
      col('b', { rowSpan: rowsBlock(3, 5) }),
    ];
    const snapped = snapDestToRowBlocks(
      { x: 0, y: 2, width: 2, height: 1 },
      columns,
      rows,
    );
    // a тянет низ до 3 → у b строка 3 в блоке 3..5 → низ до 5.
    expect(snapped).toEqual({ x: 0, y: 2, width: 2, height: 4 });
  });

  it('колонки вне rect не влияют', () => {
    const columns = [
      col('a', { rowSpan: rowsBlock(0, 5) }), // не в rect
      col('b'),
    ];
    const snapped = snapDestToRowBlocks(
      { x: 1, y: 1, width: 1, height: 2 },
      columns,
      rows,
    );
    expect(snapped).toEqual({ x: 1, y: 1, width: 1, height: 2 });
  });

  it('пустой rect возвращается как есть', () => {
    const dest = { x: 0, y: 0, width: 0, height: 0 };
    expect(snapDestToRowBlocks(dest, [col('a')], rows)).toEqual(dest);
  });
});
