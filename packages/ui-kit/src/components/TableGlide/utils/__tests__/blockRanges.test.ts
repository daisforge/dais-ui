import { describe, expect, it, vi } from 'vitest';

import {
  isBlockCut,
  isBlockRowHovered,
  rangesOverlap,
  createSetRangeHitCache,
  setHasAnyInRange,
} from '../blockRanges';

describe('rangesOverlap', () => {
  it('пересечение, касание краем и раздельные отрезки', () => {
    expect(rangesOverlap(0, 5, 3, 8)).toBe(true);
    expect(rangesOverlap(0, 3, 3, 8)).toBe(true);
    expect(rangesOverlap(0, 2, 3, 8)).toBe(false);
    expect(rangesOverlap(9, 9, 3, 8)).toBe(false);
  });
});

describe('isBlockCut', () => {
  it('строки одной высоты: блок выше видимой части обрезан', () => {
    expect(isBlockCut(32, [0, 3], 100)).toBe(true);
    expect(isBlockCut(32, [0, 3], 128)).toBe(false);
  });

  it('линия сетки в один пиксель не считается обрезкой', () => {
    expect(isBlockCut(32, [0, 3], 127)).toBe(false);
    expect(isBlockCut(32, [0, 3], 126)).toBe(true);
  });

  it('разная высота строк: складывает высоты блока', () => {
    const rowHeight = (rowInd: number) => (rowInd === 1 ? 100 : 20);

    expect(isBlockCut(rowHeight, [0, 2], 100)).toBe(true);
    expect(isBlockCut(rowHeight, [0, 2], 140)).toBe(false);
  });

  it('высота строк неизвестна: считает блок обрезанным', () => {
    expect(isBlockCut(undefined, [0, 1], 1000)).toBe(true);
  });

  it('длинный блок: складывает только то, что поместилось на экран', () => {
    const rowHeight = vi.fn(() => 50);

    expect(isBlockCut(rowHeight, [0, 100_000], 100)).toBe(true);
    expect(rowHeight).toHaveBeenCalledTimes(3);
  });
});

describe('isBlockRowHovered', () => {
  it('нет курсора: не подсвечено, даже если строки под курсором остались', () => {
    expect(isBlockRowHovered(undefined, { from: 0, to: 5 }, [0, 5])).toBe(false);
  });

  it('курсор на блоке: флаг у всех ячеек, которые пересекают его строки', () => {
    const hoverRows = { from: 2, to: 7 };

    expect(isBlockRowHovered(3, hoverRows, [7, 7])).toBe(true);
    expect(isBlockRowHovered(3, hoverRows, [5, 9])).toBe(true);
    expect(isBlockRowHovered(3, hoverRows, [8, 8])).toBe(false);
  });

  it('строки под курсором не рассчитаны: берётся строка под мышью', () => {
    expect(isBlockRowHovered(3, undefined, [2, 4])).toBe(true);
    expect(isBlockRowHovered(3, undefined, [4, 6])).toBe(false);
  });
});

describe('setHasAnyInRange', () => {
  it('находит индекс и при коротком наборе, и при коротком отрезке', () => {
    expect(setHasAnyInRange(new Set([5]), 0, 100)).toBe(true);
    expect(setHasAnyInRange(new Set([1, 2, 3, 4, 50]), 49, 51)).toBe(true);
  });

  it('не находит индекс вне отрезка и в пустом наборе', () => {
    expect(setHasAnyInRange(new Set([5]), 6, 100)).toBe(false);
    expect(setHasAnyInRange(new Set([1, 2, 3, 4, 50]), 5, 7)).toBe(false);
    expect(setHasAnyInRange(undefined, 0, 10)).toBe(false);
  });
});

describe('createSetRangeHitCache', () => {
  it('отвечает как setHasAnyInRange и не перебирает набор повторно', () => {
    class CountingSet extends Set<number> {
      reads = 0;

      override has(value: number) {
        this.reads += 1;
        return super.has(value);
      }

      override [Symbol.iterator]() {
        this.reads += 1;
        return super[Symbol.iterator]();
      }
    }
    const set = new CountingSet([5, 40]);
    const hasAny = createSetRangeHitCache(set);

    expect(hasAny(0, 10)).toBe(true);
    expect(hasAny(6, 30)).toBe(false);
    const readsAfterFirst = set.reads;
    expect(hasAny(0, 10)).toBe(true);
    expect(hasAny(6, 30)).toBe(false);
    expect(set.reads).toBe(readsAfterFirst);
  });

  it('пустой набор', () => {
    expect(createSetRangeHitCache(undefined)(0, 10)).toBe(false);
  });
});
