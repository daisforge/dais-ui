import { describe, expect, it } from 'vitest';

import { CanvasAvatar } from '../CanvasAvatar';
import { CanvasButton } from '../CanvasButton';
import { CanvasCheckbox } from '../CanvasCheckbox';
import { CanvasEmbedIconButton } from '../CanvasEmbedIconButton';
import { CanvasIcon } from '../CanvasIcon';
import { CanvasIconButton } from '../CanvasIconButton';

const ICON = 'icon-stub' as never;

/**
 * Якорь тултипа, поповера и дропдауна берётся из getAnchorRect: нарисованный
 * прямоугольник ноды, а не layout-rect. Контейнер с alignItems stretch
 * растягивает rect по высоте ячейки, нода же рисует себя своим размером.
 */
describe('getAnchorRect: нарисованный прямоугольник в растянутом rect', () => {
  const stretched = { x: 10, y: 0, width: 100, height: 48 };

  it('кнопка (новый API) высотой из SIZE_CONFIG', () => {
    const node = new CanvasButton('b', 'Текст', {
      view: 'secondary',
      size: 's',
    });
    node.rect = { ...stretched };
    expect(node.getAnchorRect()).toEqual({
      x: 10,
      y: 0,
      width: 100,
      height: 32,
    });
  });

  it('кнопка (старый API) без вертикальных отступов пилюли', () => {
    const node = new CanvasButton('b', 'Текст', { variant: 'secondary' });
    node.rect = { ...stretched };
    expect(node.getAnchorRect()).toEqual({
      x: 10,
      y: 4,
      width: 100,
      height: 24,
    });
  });

  it('кнопка-иконка (новый API) квадрат из SIZE_CONFIG', () => {
    const node = new CanvasIconButton('b', ICON, {
      view: 'secondary',
      buttonSize: 's',
    });
    node.rect = { ...stretched };
    expect(node.getAnchorRect()).toEqual({
      x: 10,
      y: 0,
      width: 32,
      height: 32,
    });
  });

  it('встроенная кнопка-иконка (старый API) без вертикальных отступов', () => {
    const node = new CanvasEmbedIconButton('b', ICON, { variant: 'secondary' });
    node.rect = { x: 10, y: 0, width: 16, height: 28 };
    expect(node.getAnchorRect()).toEqual({
      x: 10,
      y: 4,
      width: 16,
      height: 20,
    });
  });

  it('иконка квадратом size', () => {
    const node = new CanvasIcon('i', ICON, { size: 16 });
    node.rect = { ...stretched };
    expect(node.getAnchorRect()).toEqual({
      x: 10,
      y: 0,
      width: 16,
      height: 16,
    });
  });

  it('аватар кругом своего диаметра', () => {
    const node = new CanvasAvatar('a', {
      name: 'Иван Петров',
      size: 'm',
    } as never);
    node.rect = { ...stretched };
    const anchor = node.getAnchorRect();
    expect(anchor.width).toBe(anchor.height);
    expect(anchor.width).toBeLessThan(48);
  });

  it('чекбокс рисует весь rect', () => {
    const node = new CanvasCheckbox('c', {} as never);
    node.rect = { ...stretched };
    expect(node.getAnchorRect()).toEqual(stretched);
  });
});
