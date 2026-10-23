import { describe, expect, it } from 'vitest';

import { ColumnHeights } from '../ColumnHeights';

const row = { id: 1 };
const other = { id: 2 };

describe('ColumnHeights', () => {
  it('высоты нет, пока ячейку не мерили при этой ширине', () => {
    const heights = new ColumnHeights();

    expect(heights.needsHeight(row, 'a', 100, false)).toBe(true);
    heights.set(row, 'a', 100, false, 40);
    expect(heights.needsHeight(row, 'a', 100, false)).toBe(false);
    expect(heights.needsHeight(row, 'a', 120, false)).toBe(true);
  });

  it('новая ширина колонки отбрасывает высоты её ячеек и сообщает о ресайзе', () => {
    const heights = new ColumnHeights();
    heights.set(row, 'a', 100, false, 40);

    expect(heights.set(other, 'a', 120, false, 30)).toBe(true);
    expect(heights.maxHeight(row, ['a'])).toBe(0);
    expect(heights.maxHeight(other, ['a'])).toBe(30);
  });

  it('первая ширина колонки — не ресайз, даже если раньше пришёл блок', () => {
    const heights = new ColumnHeights();
    heights.set(row, 'a', 250, true, 60);

    expect(heights.set(other, 'a', 100, false, 30)).toBe(false);
    expect(heights.maxHeight(row, ['a'])).toBe(60);
  });

  it('наибольшая высота строки — только по переданным колонкам', () => {
    const heights = new ColumnHeights();
    heights.set(row, 'a', 100, false, 40);
    heights.set(row, 'b', 100, false, 90);

    expect(heights.maxHeight(row, ['a', 'b'])).toBe(90);
    expect(heights.maxHeight(row, ['a'])).toBe(40);
  });

  it('retain отбрасывает высоты убранных колонок', () => {
    const heights = new ColumnHeights();
    heights.set(row, 'a', 100, false, 40);
    heights.set(row, 'b', 100, false, 90);

    heights.retain(['a']);

    expect(heights.maxHeight(row, ['a', 'b'])).toBe(40);
    expect(heights.needsHeight(row, 'b', 100, false)).toBe(true);
  });
});
