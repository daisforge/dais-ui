import { describe, expect, it } from 'vitest';

import { TREE_LVL_KEY } from '../../feature-tree/constants';
import { buildBorderCallbacks } from '../buildBorderCallbacks';

// Контракт сведения настроек линий в колбэки для glide. Аргумент verticalBorder(k)
// это линия слева от колонки k, она же разделитель справа от колонки k-1.
// Колбэки создаются только когда есть что настраивать, иначе glide рисует как обычно.
// Точечные настройки (getHorizontalBorder, getCellBorder) получают саму строку
// из rowsRef; строки за пределами массива (summary) им не отдаются.

const cols: string[] = ['a', 'b', 'c'];

type TestRow = { id: number; [TREE_LVL_KEY]?: number };

const rows: TestRow[] = [{ id: 10 }, { id: 20 }, { id: 30 }];
const rowsRef = { current: rows };
const emptyRowsRef = { current: [] as TestRow[] };

describe('buildBorderCallbacks', () => {
  it('пустой конфиг — все колбэки undefined (быстрый путь)', () => {
    const cb = buildBorderCallbacks({
      borders: undefined,
      orderedColumnKeys: cols,
      rowsRef: emptyRowsRef,
    });
    expect(cb.verticalBorder).toBeUndefined();
    expect(cb.horizontalBorder).toBeUndefined();
    expect(cb.getCellBorder).toBeUndefined();
  });

  it('vertical:false выключает все вертикали', () => {
    const cb = buildBorderCallbacks({
      borders: { vertical: false },
      orderedColumnKeys: cols,
      rowsRef: emptyRowsRef,
    });
    expect(cb.verticalBorder?.(1)).toBe(false);
    expect(cb.verticalBorder?.(2)).toBe(false);
    // getCellBorder не нужен для простого скрытия
    expect(cb.getCellBorder).toBeUndefined();
  });

  it('getVerticalBorder=false скрывает разделитель справа от своей колонки', () => {
    // колонка b (index 1) прячет свой правый разделитель = линия слева от c (k=2)
    const cb = buildBorderCallbacks({
      borders: {
        getVerticalBorder: ({ columnKey }) =>
          columnKey === 'b' ? false : undefined,
      },
      orderedColumnKeys: cols,
      rowsRef: emptyRowsRef,
    });
    expect(cb.verticalBorder?.(2)).toBe(false); // слева от c = справа от b
    expect(cb.verticalBorder?.(1)).toBe(true); // справа от a — рисуем
  });

  it('getVerticalBorder перекрывает глобальный vertical:false в true', () => {
    const cb = buildBorderCallbacks({
      borders: {
        vertical: false,
        getVerticalBorder: ({ columnKey }) =>
          columnKey === 'b' ? true : undefined,
      },
      orderedColumnKeys: cols,
      rowsRef: emptyRowsRef,
    });
    // линия слева от b (k=1) = справа от a → владелец a → глобально false
    expect(cb.verticalBorder?.(1)).toBe(false);
    // линия справа от b (k=2) = владелец b → true
    expect(cb.verticalBorder?.(2)).toBe(true);
  });

  it('getVerticalBorder получает columnKey и columnIndex владельца разделителя', () => {
    const seen: Array<{ columnKey: string; columnIndex: number }> = [];
    const cb = buildBorderCallbacks({
      borders: {
        getVerticalBorder: (params) => {
          seen.push(params);
          return undefined;
        },
      },
      orderedColumnKeys: cols,
      rowsRef: emptyRowsRef,
    });
    cb.verticalBorder?.(1);
    cb.verticalBorder?.(2);
    expect(seen).toEqual([
      { columnKey: 'a', columnIndex: 0 },
      { columnKey: 'b', columnIndex: 1 },
    ]);
  });

  it('horizontal:false выключает все горизонтали', () => {
    const cb = buildBorderCallbacks({
      borders: { horizontal: false },
      orderedColumnKeys: cols,
      rowsRef,
    });
    expect(cb.horizontalBorder?.(0)).toBe(false);
    expect(cb.horizontalBorder?.(5)).toBe(false);
  });

  it('getHorizontalBorder получает строку и индекс, точечно перекрывает глобальный дефолт', () => {
    const cb = buildBorderCallbacks({
      borders: {
        getHorizontalBorder: ({ row, rowIndex }) => {
          expect(row).toBe(rows[rowIndex]);
          return row.id !== 20;
        },
      },
      orderedColumnKeys: cols,
      rowsRef,
    });
    expect(cb.horizontalBorder?.(1)).toBe(false); // id 20
    expect(cb.horizontalBorder?.(0)).toBe(true);
  });

  it('getHorizontalBorder вернул undefined — работает глобальная настройка', () => {
    const cb = buildBorderCallbacks({
      borders: {
        horizontal: false,
        getHorizontalBorder: ({ row }) => (row.id === 20 ? true : undefined),
      },
      orderedColumnKeys: cols,
      rowsRef,
    });
    expect(cb.horizontalBorder?.(1)).toBe(true); // точечно включена
    expect(cb.horizontalBorder?.(0)).toBe(false); // глобально выключены
  });

  it('строка за пределами данных (summary) не отдаётся в getHorizontalBorder', () => {
    let called = false;
    const cb = buildBorderCallbacks({
      borders: {
        getHorizontalBorder: () => {
          called = true;
          return false;
        },
      },
      orderedColumnKeys: cols,
      rowsRef,
    });
    expect(cb.horizontalBorder?.(rows.length)).toBe(true); // глобальный дефолт
    expect(called).toBe(false);
  });

  it('treeLvl берётся из кеша строки, для корня 0', () => {
    const treeRows: TestRow[] = [{ id: 1 }, { id: 2, [TREE_LVL_KEY]: 2 }];
    const seen: number[] = [];
    const cb = buildBorderCallbacks({
      borders: {
        getHorizontalBorder: ({ treeLvl }) => {
          seen.push(treeLvl);
          return undefined;
        },
      },
      orderedColumnKeys: cols,
      rowsRef: { current: treeRows },
    });
    cb.horizontalBorder?.(0);
    cb.horizontalBorder?.(1);
    expect(seen).toEqual([0, 2]);
  });

  it('getCellBorder продукта получает строку, индексы и columnKey', () => {
    const cb = buildBorderCallbacks({
      borders: {
        getCellBorder: ({ columnKey, row, rowIndex }) => {
          expect(row).toBe(rows[rowIndex]);
          return columnKey === 'a' && row.id === 10
            ? { top: false }
            : undefined;
        },
      },
      orderedColumnKeys: cols,
      rowsRef,
    });
    expect(cb.getCellBorder?.(0, 0)).toEqual({ top: false });
    expect(cb.getCellBorder?.(0, 1)).toBeUndefined();
    expect(cb.getCellBorder?.(1, 0)).toBeUndefined();
  });

  it('строка за пределами данных (summary) не отдаётся в getCellBorder', () => {
    let called = false;
    const cb = buildBorderCallbacks({
      borders: {
        getCellBorder: () => {
          called = true;
          return { top: false };
        },
      },
      orderedColumnKeys: cols,
      rowsRef,
    });
    expect(cb.getCellBorder?.(0, rows.length)).toBeUndefined();
    expect(called).toBe(false);
  });

  it('columnKey отдаётся продукту по индексу колонки', () => {
    const seen: Array<string | undefined> = [];
    const cb = buildBorderCallbacks({
      borders: {
        getCellBorder: ({ columnKey }) => {
          seen.push(columnKey);
          return undefined;
        },
      },
      orderedColumnKeys: cols,
      rowsRef,
    });
    cb.getCellBorder?.(0, 0);
    cb.getCellBorder?.(2, 0);
    expect(seen).toEqual(['a', 'c']);
  });
});
