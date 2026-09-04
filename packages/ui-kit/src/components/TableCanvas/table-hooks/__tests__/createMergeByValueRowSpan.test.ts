import { describe, expect, it } from 'vitest';

import { createMergeByValueRowSpan } from '../createMergeByValueRowSpan';

// Контракт mergeCells.mergeByCellValues: объединяются только ПОДРЯД ИДУЩИЕ
// одинаковые значения в текущем видимом порядке; одиночные строки не сливаются.

type Row = { dept: string | number };

const rowsOf = (...depts: Array<string | number>): Row[] =>
  depts.map((dept) => ({ dept }));

const makeRowSpan = (rows: readonly Row[]) => {
  const rowsRef = { current: rows };
  return {
    rowSpan: createMergeByValueRowSpan<Row>((r) => r.dept, rowsRef),
    rowsRef,
  };
};

describe('createMergeByValueRowSpan — пробеги одинаковых значений', () => {
  it('пробег из трёх строк: все три несут один диапазон', () => {
    const { rowSpan } = makeRowSpan(rowsOf('A', 'A', 'A', 'B'));
    expect(rowSpan({ rowInd: 0 })).toEqual([0, 2]);
    expect(rowSpan({ rowInd: 1 })).toEqual([0, 2]);
    expect(rowSpan({ rowInd: 2 })).toEqual([0, 2]);
  });

  it('одиночная строка не сливается (null)', () => {
    const { rowSpan } = makeRowSpan(rowsOf('A', 'B', 'A'));
    expect(rowSpan({ rowInd: 0 })).toBeNull();
    expect(rowSpan({ rowInd: 1 })).toBeNull();
    expect(rowSpan({ rowInd: 2 })).toBeNull();
  });

  it('два разнесённых пробега одного значения — два НЕЗАВИСИМЫХ блока', () => {
    const { rowSpan } = makeRowSpan(rowsOf('A', 'A', 'B', 'A', 'A'));
    expect(rowSpan({ rowInd: 0 })).toEqual([0, 1]);
    expect(rowSpan({ rowInd: 1 })).toEqual([0, 1]);
    expect(rowSpan({ rowInd: 2 })).toBeNull();
    expect(rowSpan({ rowInd: 3 })).toEqual([3, 4]);
    expect(rowSpan({ rowInd: 4 })).toEqual([3, 4]);
  });

  it('сравнение строгое: "1" и 1 не сливаются', () => {
    const { rowSpan } = makeRowSpan(rowsOf('1', 1));
    expect(rowSpan({ rowInd: 0 })).toBeNull();
    expect(rowSpan({ rowInd: 1 })).toBeNull();
  });

  it('кастомная функция значения (не поле строки)', () => {
    const rowsRef = {
      current: [{ dept: 'IT-1' }, { dept: 'IT-2' }, { dept: 'HR-1' }] as Row[],
    };
    // Сливаем по префиксу до дефиса.
    const rowSpan = createMergeByValueRowSpan<Row>(
      (r) => String(r.dept).split('-')[0],
      rowsRef,
    );
    expect(rowSpan({ rowInd: 0 })).toEqual([0, 1]);
    expect(rowSpan({ rowInd: 2 })).toBeNull();
  });

  it('индекс вне диапазона строк — null', () => {
    const { rowSpan } = makeRowSpan(rowsOf('A', 'A'));
    expect(rowSpan({ rowInd: 5 })).toBeNull();
    expect(rowSpan({ rowInd: -1 })).toBeNull();
  });
});

describe('createMergeByValueRowSpan — кэш по идентичности', () => {
  it('мутация массива на месте (та же identity) НЕ пересобирает блоки', () => {
    const rows = rowsOf('A', 'A', 'B');
    const { rowSpan, rowsRef } = makeRowSpan(rows);
    expect(rowSpan({ rowInd: 0 })).toEqual([0, 1]);

    (rowsRef.current as Row[]).reverse(); // B, A, A — но identity та же
    expect(rowSpan({ rowInd: 0 })).toEqual([0, 1]);
  });

  it('новый массив (новая identity) пересобирает блоки', () => {
    const { rowSpan, rowsRef } = makeRowSpan(rowsOf('A', 'A', 'B'));
    expect(rowSpan({ rowInd: 0 })).toEqual([0, 1]);

    rowsRef.current = rowsOf('B', 'A', 'A');
    expect(rowSpan({ rowInd: 0 })).toBeNull();
    expect(rowSpan({ rowInd: 1 })).toEqual([1, 2]);
  });
});
