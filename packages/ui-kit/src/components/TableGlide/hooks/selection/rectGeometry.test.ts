import { describe, expect, it } from 'vitest';

import {
  clampRectToDataColumns,
  findFirstDataColumnIndex,
  rectContainsCell,
} from './rectGeometry';

describe('rectContainsCell', () => {
  const rect = { x: 2, y: 3, width: 2, height: 2 }; // колонки 2..3, строки 3..4

  it('true для ячейки внутри (включая левую/верхнюю границу)', () => {
    expect(rectContainsCell(rect, 2, 3)).toBe(true);
    expect(rectContainsCell(rect, 3, 4)).toBe(true);
  });

  it('false за правой/нижней границей (полуинтервал)', () => {
    expect(rectContainsCell(rect, 4, 3)).toBe(false); // x = x+width
    expect(rectContainsCell(rect, 2, 5)).toBe(false); // y = y+height
  });

  it('false для ячейки левее/выше', () => {
    expect(rectContainsCell(rect, 1, 3)).toBe(false);
    expect(rectContainsCell(rect, 2, 2)).toBe(false);
  });

  it('false для undefined-прямоугольника', () => {
    expect(rectContainsCell(undefined, 2, 3)).toBe(false);
  });
});

describe('findFirstDataColumnIndex', () => {
  it('индекс первой НЕсервисной колонки', () => {
    expect(
      findFirstDataColumnIndex([
        { isServiceColumn: true },
        { isServiceColumn: true },
        { isServiceColumn: false },
      ])
    ).toBe(2);
  });

  it('0, если сервисных колонок нет', () => {
    expect(findFirstDataColumnIndex([{}, {}])).toBe(0);
  });

  it('длина массива, если ВСЕ колонки служебные (data-колонок нет)', () => {
    expect(
      findFirstDataColumnIndex([
        { isServiceColumn: true },
        { isServiceColumn: true },
      ])
    ).toBe(2);
  });

  it('0 для пустого массива', () => {
    expect(findFirstDataColumnIndex([])).toBe(0);
  });
});

describe('clampRectToDataColumns', () => {
  it('обрезает ведущие сервисные колонки слева', () => {
    // выделение с колонки 0, ширина 3, firstDataCol=1 → остаётся x=1, width=2
    expect(
      clampRectToDataColumns({ x: 0, y: 5, width: 3, height: 2 }, 1)
    ).toEqual({ x: 1, y: 5, width: 2, height: 2 });
  });

  it('не трогает прямоугольник целиком в data-области', () => {
    expect(
      clampRectToDataColumns({ x: 2, y: 0, width: 2, height: 1 }, 1)
    ).toEqual({ x: 2, y: 0, width: 2, height: 1 });
  });

  it('undefined, если после отсечения ширина <= 0 (целиком в service)', () => {
    expect(
      clampRectToDataColumns({ x: 0, y: 0, width: 1, height: 1 }, 1)
    ).toBeUndefined();
  });

  it('undefined, если высота <= 0', () => {
    expect(
      clampRectToDataColumns({ x: 2, y: 0, width: 2, height: 0 }, 1)
    ).toBeUndefined();
  });

  it('undefined для undefined-прямоугольника', () => {
    expect(clampRectToDataColumns(undefined, 1)).toBeUndefined();
  });
});
