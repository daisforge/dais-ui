import { describe, expect, it } from 'vitest';

import { findBlockOrigin, type SpanRange } from '../findBlockOrigin';
import { getSpan } from '../getSpan';

// Единая геометрия origin для рендера и cell-transfer + guard одиночной ячейки
// в getSpan (colSpan <= 0 не должен превращать ячейку в «слитую» ширины 1).

const blockOriginByAllColumns = (
  col: number,
  row: number,
  getColRange: (c: number, r: number) => SpanRange,
  getRowRange: (c: number, r: number) => SpanRange,
): readonly [number, number] => {
  let originCol = col;
  for (let c = col; c >= 0; c -= 1) {
    const range = getColRange(c, row);
    if (range && range[0] <= col && range[1] >= col) {
      originCol = range[0];
      break;
    }
  }
  const rowRange = getRowRange(originCol, row);
  return [originCol, rowRange ? rowRange[0] : row];
};

describe('findBlockOrigin — поиск левого верхнего угла блока', () => {
  it('без спанов ячейка сама себе origin', () => {
    expect(
      findBlockOrigin(
        2,
        3,
        [],
        () => null,
        () => null,
      ),
    ).toEqual([2, 3]);
  });

  it('покрытая колонка находит origin сканированием влево', () => {
    // Блок колонок [1..3]: только колонка 1 отдаёт диапазон.
    const getColRange = (c: number) => (c === 1 ? ([1, 3] as const) : null);
    expect(findBlockOrigin(3, 0, [1], getColRange, () => null)).toEqual([1, 0]);
  });

  it('вертикаль берётся по rowSpan найденной origin-колонки', () => {
    const getColRange = (c: number) => (c === 1 ? ([1, 2] as const) : null);
    // rowSpan объявлен на origin-колонке 1, на колонке 2 его нет.
    const getRowRange = (c: number) => (c === 1 ? ([4, 6] as const) : null);
    expect(findBlockOrigin(2, 5, [1], getColRange, getRowRange)).toEqual([
      1, 4,
    ]);
  });

  it('вертикаль без colSpan берётся по rowSpan самой колонки', () => {
    const getRowRange = (c: number) => (c === 2 ? ([4, 6] as const) : null);
    expect(findBlockOrigin(2, 5, [], () => null, getRowRange)).toEqual([2, 4]);
  });

  it('диапазон чужого блока слева, не накрывающий col, игнорируется', () => {
    // Колонка 0 — блок [0..1], колонка 3 запрошена: блок её не накрывает.
    const getColRange = (c: number) => (c === 0 ? ([0, 1] as const) : null);
    expect(findBlockOrigin(3, 0, [0], getColRange, () => null)).toEqual([3, 0]);
  });

  it('спрашивает colSpan только у колонок с colSpan не правее ячейки', () => {
    const asked: number[] = [];
    const getColRange = (c: number) => {
      asked.push(c);
      return null;
    };
    findBlockOrigin(900, 0, [3, 500, 950], getColRange, () => null);
    expect(asked).toEqual([500, 3]);
  });

  it('совпадает с обходом всех колонок на случайных объединениях', () => {
    let seed = 7;
    const random = () => {
      seed = (seed * 1_103_515_245 + 12_345) % 2_147_483_648;
      return seed / 2_147_483_648;
    };
    for (let layout = 0; layout < 40; layout += 1) {
      const cols = 1 + Math.floor(random() * 30);
      const rows = 1 + Math.floor(random() * 10);
      const spanColumns: number[] = [];
      const rowSpanColumns = new Set<number>();
      for (let c = 0; c < cols; c += 1) {
        if (random() < 0.3) spanColumns.push(c);
        if (random() < 0.3) rowSpanColumns.add(c);
      }
      const colRanges = new Map<string, SpanRange>();
      const rowRanges = new Map<string, SpanRange>();
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          if (spanColumns.includes(c) && random() < 0.7) {
            colRanges.set(`${c}:${r}`, [c, c + Math.floor(random() * 5)]);
          }
          if (rowSpanColumns.has(c) && random() < 0.7) {
            const start = Math.max(0, r - Math.floor(random() * 3));
            rowRanges.set(`${c}:${r}`, [start, r + Math.floor(random() * 3)]);
          }
        }
      }
      const getColRange = (c: number, r: number) =>
        colRanges.get(`${c}:${r}`) ?? null;
      const getRowRange = (c: number, r: number) =>
        rowRanges.get(`${c}:${r}`) ?? null;
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          expect(
            findBlockOrigin(c, r, spanColumns, getColRange, getRowRange),
          ).toEqual(blockOriginByAllColumns(c, r, getColRange, getRowRange));
        }
      }
    }
  });
});

describe('getSpan — guard одиночной ячейки', () => {
  const cellInfo = { colInd: 2 } as Parameters<typeof getSpan>[1];

  it('colSpan <= 0 → null (не span=[c,c], иначе ломается чисто-вертикальный merge)', () => {
    expect(getSpan(0, cellInfo)).toBeNull();
    expect(getSpan(() => 0, cellInfo)).toBeNull();
    expect(getSpan(-1, cellInfo)).toBeNull();
  });

  it('положительный colSpan разворачивается в абсолютный диапазон колонок', () => {
    expect(getSpan(2, cellInfo)).toEqual([2, 4]);
    expect(getSpan(() => 1, cellInfo)).toEqual([2, 3]);
  });

  it('undefined/null → null', () => {
    expect(getSpan(undefined, cellInfo)).toBeNull();
    expect(getSpan(null, cellInfo)).toBeNull();
  });
});
