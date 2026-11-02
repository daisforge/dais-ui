import { describe, expect, it } from 'vitest';

import { anchorShiftOf } from '../anchorShift';

describe('anchorShiftOf', () => {
  it('строки у верхнего края выросли — сдвиг на их рост, якорь — первая неизменённая строка', () => {
    const changes = [
      { rowIndex: 100, delta: 20 },
      { rowIndex: 101, delta: 16 },
    ];

    expect(anchorShiftOf(changes, { from: 100, to: 120 })).toBe(36);
  });

  it('новая строка у края, которая не выросла, якорем не становится', () => {
    const changes = [
      { rowIndex: 100, delta: 0 },
      { rowIndex: 101, delta: 24 },
    ];

    expect(anchorShiftOf(changes, { from: 100, to: 120 })).toBe(24);
  });

  it('учитывает рост строк над экраном', () => {
    expect(
      anchorShiftOf([{ rowIndex: 40, delta: 12 }], { from: 100, to: 120 }),
    ).toBe(12);
  });

  it('строки ниже якоря на сдвиг не влияют', () => {
    expect(
      anchorShiftOf([{ rowIndex: 118, delta: 30 }], { from: 100, to: 120 }),
    ).toBe(0);
  });

  it('изменились все видимые строки — держаться не за что', () => {
    const changes = [
      { rowIndex: 0, delta: 10 },
      { rowIndex: 1, delta: 10 },
      { rowIndex: 2, delta: 10 },
    ];

    expect(anchorShiftOf(changes, { from: 0, to: 2 })).toBe(0);
  });

  it('уменьшение высоты сдвигает прокрутку назад', () => {
    expect(
      anchorShiftOf([{ rowIndex: 99, delta: -8 }], { from: 100, to: 120 }),
    ).toBe(-8);
  });
});
