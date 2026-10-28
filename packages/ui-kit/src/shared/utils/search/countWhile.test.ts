import { describe, expect, it, vi } from 'vitest';

import { countWhile } from './countWhile';

describe('countWhile', () => {
  it('считает индексы, на которых условие истинно', () => {
    const values = [1, 3, 5, 7, 9];

    expect(countWhile(values.length, (i) => values[i]! <= 5)).toBe(3);
  });

  it('все индексы подходят — длина, ни один — 0, пустой диапазон — 0', () => {
    expect(countWhile(4, () => true)).toBe(4);
    expect(countWhile(4, () => false)).toBe(0);
    expect(countWhile(0, () => true)).toBe(0);
  });

  it('проверяет логарифм от длины индексов, а не все', () => {
    const predicate = vi.fn((i: number) => i < 600_000);

    expect(countWhile(1_000_000, predicate)).toBe(600_000);
    expect(predicate.mock.calls.length).toBeLessThanOrEqual(21);
  });
});
