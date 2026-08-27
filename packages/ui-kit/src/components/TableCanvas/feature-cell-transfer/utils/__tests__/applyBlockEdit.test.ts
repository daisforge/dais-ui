import { describe, expect, it } from 'vitest';

import type { ObjectForExtending } from '../../../types';
import type { TransferColumnConfig } from '../../types';
import { applyBlockEdit } from '../applyBlockEdit';

// Контракт правки блока: одно значение уходит во ВСЕ ячейки блока (паритет с
// paste/fill), покрытые строки обновляются копиями, одиночная ячейка — мимо.

type Row = ObjectForExtending;

const col = (
  key: string,
  rowSpan?: (info: { rowInd: number }) => readonly [number, number] | null,
): TransferColumnConfig =>
  ({ key, ...(rowSpan && { rowSpan }) } as unknown as TransferColumnConfig);

const rowsBlock =
  (start: number, end: number) =>
  ({ rowInd }: { rowInd: number }): readonly [number, number] | null =>
    rowInd >= start && rowInd <= end ? [start, end] : null;

const makeRows = (): Row[] => [
  { a: 'x0', b: 'y0' },
  { a: 'x1', b: 'y1' },
  { a: 'x2', b: 'y2' },
  { a: 'x3', b: 'y3' },
];

describe('applyBlockEdit — запись правки во весь блок', () => {
  // Блок строк 1..2 на колонке a.
  const columns = [col('a', rowsBlock(1, 2)), col('b')];

  it('правка origin-ячейки блока пишет значение во все строки блока', () => {
    const rows = makeRows();
    const targetRows = [...rows];
    const edited = { ...rows[1], a: 'NEW' } as Row;

    const indexes = applyBlockEdit({
      colInd: 0,
      rowInd: 1,
      columns,
      rows,
      editedRow: edited,
      editedValue: 'NEW',
      targetRows,
    });

    expect(indexes).toEqual([1, 2]);
    expect(targetRows[1]?.a).toBe('NEW');
    expect(targetRows[2]?.a).toBe('NEW');
    // Соседняя колонка и строки вне блока не тронуты.
    expect(targetRows[1]?.b).toBe('y1');
    expect(targetRows[0]).toBe(rows[0]);
    expect(targetRows[3]).toBe(rows[3]);
  });

  it('правка через покрытую ячейку блока даёт тот же результат', () => {
    const rows = makeRows();
    const targetRows = [...rows];
    const edited = { ...rows[2], a: 'NEW' } as Row;

    const indexes = applyBlockEdit({
      colInd: 0,
      rowInd: 2,
      columns,
      rows,
      editedRow: edited,
      editedValue: 'NEW',
      targetRows,
    });

    expect(indexes).toEqual([1, 2]);
    expect(targetRows[1]?.a).toBe('NEW');
    expect(targetRows[2]?.a).toBe('NEW');
  });

  it('одиночная ячейка (не блок) — null, аккумулятор не тронут', () => {
    const rows = makeRows();
    const targetRows = [...rows];

    const indexes = applyBlockEdit({
      colInd: 1,
      rowInd: 0,
      columns,
      rows,
      editedRow: { ...rows[0], b: 'NEW' } as Row,
      editedValue: 'NEW',
      targetRows,
    });

    expect(indexes).toBeNull();
    expect(targetRows).toEqual(rows);
  });

  it('строки блока обновляются копиями (исходные объекты не мутируются)', () => {
    const rows = makeRows();
    const targetRows = [...rows];

    applyBlockEdit({
      colInd: 0,
      rowInd: 1,
      columns,
      rows,
      editedRow: { ...rows[1], a: 'NEW' } as Row,
      editedValue: 'NEW',
      targetRows,
    });

    expect(rows[2]?.a).toBe('x2');
    expect(targetRows[2]).not.toBe(rows[2]);
  });

  it('правки одного батча компонуются: база берётся из аккумулятора', () => {
    // Два блока на разных колонках, одна и та же строка 1.
    const twoCols = [col('a', rowsBlock(1, 2)), col('b', rowsBlock(0, 1))];
    const rows = makeRows();
    const targetRows = [...rows];

    applyBlockEdit({
      colInd: 0,
      rowInd: 1,
      columns: twoCols,
      rows,
      editedRow: { ...rows[1], a: 'A-NEW' } as Row,
      editedValue: 'A-NEW',
      targetRows,
    });
    applyBlockEdit({
      colInd: 1,
      rowInd: 0,
      columns: twoCols,
      rows,
      editedRow: { ...targetRows[0], b: 'B-NEW' } as Row,
      editedValue: 'B-NEW',
      targetRows,
    });

    // Строка 1 несёт обе правки: a из первого блока, b из второго.
    expect(targetRows[1]?.a).toBe('A-NEW');
    expect(targetRows[1]?.b).toBe('B-NEW');
  });

  it('colspan-блок пишет значение и в ЧУЖИЕ колонки блока (текущий контракт)', () => {
    // Прямоугольник: колонки a..b, строка 0. Значение колонки a перетирает b.
    // Осознанный временный контракт «блок = одно значение»; уйдёт, когда edit
    // mode начнёт разъединять блок (см. обсуждение фичи).
    const rectCols = [
      {
        ...col('a', rowsBlock(0, 0)),
        colSpan: () => 1,
      } as unknown as TransferColumnConfig,
      col('b'),
    ];
    const rows = makeRows();
    const targetRows = [...rows];

    applyBlockEdit({
      colInd: 0,
      rowInd: 0,
      columns: rectCols,
      rows,
      editedRow: { ...rows[0], a: 'NEW' } as Row,
      editedValue: 'NEW',
      targetRows,
    });

    expect(targetRows[0]?.a).toBe('NEW');
    expect(targetRows[0]?.b).toBe('NEW');
  });
});
