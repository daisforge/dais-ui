import { describe, expect, it } from 'vitest';

import { rangesOverlap, setHasAnyInRange } from '../blockRanges';

describe('rangesOverlap', () => {
  it('пересечение, касание краем и раздельные отрезки', () => {
    expect(rangesOverlap(0, 5, 3, 8)).toBe(true);
    expect(rangesOverlap(0, 3, 3, 8)).toBe(true);
    expect(rangesOverlap(0, 2, 3, 8)).toBe(false);
    expect(rangesOverlap(9, 9, 3, 8)).toBe(false);
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
