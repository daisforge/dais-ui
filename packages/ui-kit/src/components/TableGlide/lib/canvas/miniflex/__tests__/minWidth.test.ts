import { describe, expect, it } from 'vitest';

import { FlexBox } from '../minimal-flexbox';

// Контейнер уже содержимого: ребёнок с flexShrink сжимается, а minWidth
// задаёт ему нижнюю границу. Переполнение остаётся за контейнером.
const CONTAINER_WIDTH = 80;
const SHRINKABLE_BASIS = 80;
const FIXED_BASIS = 60;

function layoutRow(minWidth: number | undefined, direction: 'row' | 'column') {
  const box = new FlexBox(CONTAINER_WIDTH, CONTAINER_WIDTH, { direction });
  const shrinkable = box.addChild({
    flexBasis: SHRINKABLE_BASIS,
    flexShrink: 1,
    minWidth,
  });
  const fixed = box.addChild({ flexBasis: FIXED_BASIS, flexShrink: 0 });
  box.build();
  return { shrinkable, fixed };
}

describe('miniflex: minWidth', () => {
  it('без minWidth ребёнок сжимается на всю нехватку места', () => {
    const { shrinkable, fixed } = layoutRow(undefined, 'row');

    expect(shrinkable.size.width).toBe(
      CONTAINER_WIDTH - FIXED_BASIS, // 20
    );
    expect(fixed.size.width).toBe(FIXED_BASIS);
  });

  it('с minWidth ребёнок не сжимается ниже минимума, сумма превышает контейнер', () => {
    const { shrinkable, fixed } = layoutRow(30, 'row');

    expect(shrinkable.size.width).toBe(30);
    expect(fixed.size.width).toBe(FIXED_BASIS);
    expect(shrinkable.size.width + fixed.size.width).toBeGreaterThan(
      CONTAINER_WIDTH,
    );
  });

  it('minWidth не мешает, когда места хватает', () => {
    const box = new FlexBox(200, 20, { direction: 'row' });
    const child = box.addChild({ flexBasis: 50, flexShrink: 1, minWidth: 30 });
    box.build();

    expect(child.size.width).toBe(50);
  });

  it('в column-направлении minWidth не влияет на главную ось', () => {
    const { shrinkable } = layoutRow(30, 'column');

    expect(shrinkable.size.height).toBe(CONTAINER_WIDTH - FIXED_BASIS);
  });
});
