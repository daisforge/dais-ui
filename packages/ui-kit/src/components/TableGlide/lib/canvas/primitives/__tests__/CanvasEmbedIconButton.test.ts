import { describe, expect, it } from 'vitest';

import { CanvasEmbedIconButton } from '../CanvasEmbedIconButton';

// overrideWidth сужает кнопку в раскладке и hit-area, не меняя квадрат,
// в котором рисуется иконка (используется шевроном дерева TableCanvas).

const ctx = {} as CanvasRenderingContext2D;

const createButton = (overrideWidth?: number) => {
  const button = new CanvasEmbedIconButton('btn', '<svg></svg>', {
    view: 'secondary',
    overrideSquareSize: 24,
    overrideIconSize: 24,
    overrideWidth,
  });
  button.measure(ctx);
  button.rect.x = 0;
  button.rect.y = 0;
  return button;
};

describe('CanvasEmbedIconButton', () => {
  it('без overrideWidth остаётся квадратной', () => {
    const button = createButton();

    expect(button.rect.width).toBe(24);
    expect(button.rect.height).toBe(24);
    expect(button.hitTest(20, 12)).toContain(button);
  });

  it('с overrideWidth занимает в раскладке указанную ширину при прежней высоте', () => {
    const button = createButton(10.5);

    expect(button.rect.width).toBe(10.5);
    expect(button.rect.height).toBe(24);
  });

  it('с overrideWidth не ловит клики правее своей ширины', () => {
    const button = createButton(10.5);

    expect(button.hitTest(5, 12)).toContain(button);
    expect(button.hitTest(20, 12)).not.toContain(button);
  });
});
