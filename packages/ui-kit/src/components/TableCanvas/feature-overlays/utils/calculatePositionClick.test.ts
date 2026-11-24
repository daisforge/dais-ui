import { describe, expect, it } from 'vitest';

import { getFilterAnchor, getFilterPlacement } from './calculatePositionClick';

describe('положение фильтра шапки', () => {
  it('переносит прямоугольник иконки в координаты окна', () => {
    expect(
      getFilterAnchor({
        cellBounds: { x: 84, y: 120 },
        target: { rect: { x: 94, y: 3, width: 24, height: 24 } },
      } as Parameters<typeof getFilterAnchor>[0]),
    ).toEqual({
      position: { x: 178, y: 123 },
      anchorSize: { width: 24, height: 24 },
    });
  });

  it('совмещает правые края только при нехватке места', () => {
    expect(getFilterPlacement(180, 120, 300)).toBe('bottom-start');
    expect(getFilterPlacement(181, 120, 300)).toBe('bottom-end');
  });
});
