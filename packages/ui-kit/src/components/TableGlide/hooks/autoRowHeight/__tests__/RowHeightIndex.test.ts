import { describe, expect, it } from 'vitest';

import { RowHeightIndex } from '../RowHeightIndex';

type Row = { id: number };

const rows: Row[] = [{ id: 0 }, { id: 1 }];

describe('RowHeightIndex', () => {
  it('строку не искали — null, индекса нет — undefined', () => {
    const index = new RowHeightIndex<Row>();

    expect(index.get(rows, 0)).toBeNull();
    expect(index.get(rows, 5)).toBeUndefined();
  });

  it('хранит высоту, пока строка стоит по этому индексу', () => {
    const index = new RowHeightIndex<Row>();
    index.get(rows, 0);

    index.set(0, rows[0]!, 40);
    index.set(1, rows[0]!, 70);

    expect(index.get(rows, 0)).toBe(40);
    expect(index.get(rows, 1)).toBeNull();
  });

  it('forget убирает высоты устаревших строк диапазона, за его границами не трогает', () => {
    const index = new RowHeightIndex<Row>();
    index.get(rows, 0);
    index.set(0, rows[0]!, 40);
    index.set(1, rows[1]!, 70);

    index.forget(-5, 0, () => true);
    index.forget(1, 10, () => false);

    expect(index.get(rows, 0)).toBeNull();
    expect(index.get(rows, 1)).toBe(70);
  });

  it('each обходит только строки текущего массива в границах', () => {
    const index = new RowHeightIndex<Row>();
    index.get(rows, 0);
    const visited: number[] = [];

    index.each(-5, 1, (row, rowIndex) => {
      expect(row).toBe(rows[rowIndex]);
      visited.push(rowIndex);
    });
    index.each(rows.length - 1, rows.length + 5, (_, rowIndex) =>
      visited.push(rowIndex),
    );

    expect(visited).toEqual([0, 1, rows.length - 1]);
  });

  it('новый массив строк начинает индекс заново', () => {
    const index = new RowHeightIndex<Row>();
    index.get(rows, 0);
    index.set(0, rows[0]!, 40);

    expect(index.get([...rows], 0)).toBeNull();
  });
});
