import { describe, expect, it } from 'vitest';

import { isPointInRect, unionRect } from '../utils/geometry';

const rect = { x: 100, y: 50, width: 40, height: 20 };

describe('isPointInRect: курсор над якорем или поповером', () => {
  it('точка внутри и на границе', () => {
    expect(isPointInRect(120, 60, rect)).toBe(true);
    expect(isPointInRect(100, 50, rect)).toBe(true);
    expect(isPointInRect(140, 70, rect)).toBe(true);
  });

  it('точка снаружи', () => {
    expect(isPointInRect(99, 60, rect)).toBe(false);
    expect(isPointInRect(120, 71, rect)).toBe(false);
  });

  it('запас расширяет прямоугольник со всех сторон', () => {
    expect(isPointInRect(96, 60, rect, 4)).toBe(true);
    expect(isPointInRect(120, 74, rect, 4)).toBe(true);
    expect(isPointInRect(95, 60, rect, 4)).toBe(false);
  });
});

describe('unionRect: зона «якорь и поповер»', () => {
  it('охватывает якорь, поповер и зазор между ними', () => {
    const anchor = { x: 344, y: 162, width: 16, height: 16 };
    const popover = { x: 235, y: 61, width: 236, height: 90 };
    const zone = unionRect([anchor, popover]);
    expect(zone).toEqual({ x: 235, y: 61, width: 236, height: 117 });
    // Точка в зазоре по диагонали от иконки к кнопке поповера
    expect(isPointInRect(320, 156, zone!)).toBe(true);
  });

  it('без прямоугольников зоны нет', () => {
    expect(unionRect([])).toBeNull();
  });
});
