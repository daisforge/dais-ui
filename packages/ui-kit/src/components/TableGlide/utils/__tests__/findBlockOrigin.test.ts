import { describe, expect, it } from 'vitest';

import { findBlockOrigin } from '../findBlockOrigin';
import { getSpan } from '../getSpan';

// Единая геометрия origin для рендера и cell-transfer + guard одиночной ячейки
// в getSpan (colSpan <= 0 не должен превращать ячейку в «слитую» ширины 1).

describe('findBlockOrigin — поиск левого верхнего угла блока', () => {
  it('без спанов ячейка сама себе origin', () => {
    expect(
      findBlockOrigin(
        2,
        3,
        () => null,
        () => null,
      ),
    ).toEqual([2, 3]);
  });

  it('покрытая колонка находит origin сканированием влево', () => {
    // Блок колонок [1..3]: только колонка 1 отдаёт диапазон.
    const getColRange = (c: number) => (c === 1 ? ([1, 3] as const) : null);
    expect(findBlockOrigin(3, 0, getColRange, () => null)).toEqual([1, 0]);
  });

  it('вертикаль берётся по rowSpan найденной origin-колонки', () => {
    const getColRange = (c: number) => (c === 1 ? ([1, 2] as const) : null);
    // rowSpan объявлен на origin-колонке 1, на колонке 2 его нет.
    const getRowRange = (c: number) => (c === 1 ? ([4, 6] as const) : null);
    expect(findBlockOrigin(2, 5, getColRange, getRowRange)).toEqual([1, 4]);
  });

  it('диапазон чужого блока слева, не накрывающий col, игнорируется', () => {
    // Колонка 0 — блок [0..1], колонка 3 запрошена: блок её не накрывает.
    const getColRange = (c: number) => (c === 0 ? ([0, 1] as const) : null);
    expect(findBlockOrigin(3, 0, getColRange, () => null)).toEqual([3, 0]);
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
