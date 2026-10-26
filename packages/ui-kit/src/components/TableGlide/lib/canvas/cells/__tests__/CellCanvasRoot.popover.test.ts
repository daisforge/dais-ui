import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { CanvasNode } from '../../core/CanvasNode';
import {
  type CanvasPortalClickDetail,
  subscribeToCanvasPortalClick,
} from '../../utils/portalClickEvents';
import { CellCanvasRoot } from '../CellCanvasRoot';

class TestNode extends CanvasNode {
  measure(): void {}

  onPaint(): void {}
}

const node = (id: string, rect: CanvasNode['rect']) => {
  const result = new TestNode(id);
  result.rect = rect;
  return result;
};

/** Ячейка 200×40 с кнопкой (поповер по клику) и иконкой внутри кнопки. */
const createCell = () => {
  const root = node('root', { x: 0, y: 0, width: 200, height: 40 });
  const button = node('button', { x: 10, y: 5, width: 100, height: 30 });
  const icon = node('icon', { x: 20, y: 10, width: 16, height: 16 });
  button.popover = { content: 'поповер кнопки' };
  root.addChild(button);
  button.addChild(icon);

  const cellRoot = new CellCanvasRoot(root);
  // Границы ячейки во viewport с последней отрисовки.
  (cellRoot as unknown as { bounds: CanvasNode['rect'] }).bounds = {
    x: 500,
    y: 300,
    width: 200,
    height: 40,
  };
  return { cellRoot, button, icon };
};

/** Нода, которая рисует себя меньше своего layout-rect (кнопка в растянутом контейнере). */
class DrawnSmallerNode extends TestNode {
  override getAnchorRect() {
    return {
      x: this.rect.x,
      y: this.rect.y,
      width: this.rect.width,
      height: 24,
    };
  }
}

describe('CellCanvasRoot: якорь по нарисованному прямоугольнику', () => {
  it('якорь берётся из getAnchorRect, а не из layout-rect', () => {
    const target = document.createElement('div');
    const received: CanvasPortalClickDetail[] = [];
    const unsubscribe = subscribeToCanvasPortalClick(
      (detail) => received.push(detail),
      target,
    );
    const root = node('root', { x: 0, y: 0, width: 200, height: 40 });
    const button = new DrawnSmallerNode('button');
    button.rect = { x: 10, y: 0, width: 100, height: 40 };
    button.popover = { content: 'x' };
    root.addChild(button);
    const cellRoot = new CellCanvasRoot(root);
    (cellRoot as unknown as { bounds: CanvasNode['rect'] }).bounds = {
      x: 500,
      y: 300,
      width: 200,
      height: 40,
    };
    cellRoot.setPortalEventTarget(target);
    cellRoot.dispatchPointerEvent('click', 25, 35, undefined, { button: 0 });
    unsubscribe();
    expect(received[0]).toMatchObject({
      x: 510,
      y: 300,
      width: 100,
      height: 24,
    });
  });
});

describe('CellCanvasRoot: клик по ноде с поповером', () => {
  let target: HTMLDivElement;
  let received: CanvasPortalClickDetail[];
  let unsubscribe: () => void;

  beforeEach(() => {
    target = document.createElement('div');
    received = [];
    unsubscribe = subscribeToCanvasPortalClick(
      (detail) => received.push(detail),
      target,
    );
  });

  afterEach(() => {
    unsubscribe();
  });

  it('клик по содержимому кнопки отправляет поповер кнопки', () => {
    const { cellRoot } = createCell();
    cellRoot.setPortalEventTarget(target);
    const result = cellRoot.dispatchPointerEvent('click', 25, 15, undefined, {
      button: 0,
    });
    expect(result.portalClickDispatched).toBe(true);
    expect(received).toHaveLength(1);
    expect(received[0]).toMatchObject({
      originId: 'button',
      x: 510,
      y: 305,
      width: 100,
      height: 30,
      priority: 1,
    });
  });

  it('свежие границы ячейки из клика важнее границ последней отрисовки', () => {
    const { cellRoot } = createCell();
    cellRoot.setPortalEventTarget(target);
    cellRoot.dispatchPointerEvent('click', 25, 15, undefined, {
      button: 0,
      cellBounds: { x: 0, y: 100, width: 200, height: 40 },
    });
    expect(received[0]).toMatchObject({ x: 10, y: 105 });
  });

  it('средняя и правая кнопки мыши поповер не открывают', () => {
    const { cellRoot } = createCell();
    cellRoot.setPortalEventTarget(target);
    const middle = cellRoot.dispatchPointerEvent('click', 25, 15, undefined, {
      button: 1,
    });
    expect(middle.portalClickDispatched).toBeUndefined();
    expect(received).toHaveLength(0);
  });

  it('stopPropagation в onClick ребёнка не открывает поповер родителя', () => {
    const { cellRoot, icon } = createCell();
    cellRoot.setPortalEventTarget(target);
    icon.onClick = vi.fn((event) => event.stopPropagation());
    const result = cellRoot.dispatchPointerEvent('click', 25, 15);
    expect(icon.onClick).toHaveBeenCalled();
    expect(result.portalClickDispatched).toBeUndefined();
    expect(received).toHaveLength(0);
  });

  it('поповер по наведению по клику не отправляется', () => {
    const { cellRoot, button } = createCell();
    cellRoot.setPortalEventTarget(target);
    button.popover = { trigger: 'hover', content: 'по наведению' };
    cellRoot.dispatchPointerEvent('click', 25, 15);
    expect(received).toHaveLength(0);
  });

  it('клик мимо ноды с поповером ничего не отправляет', () => {
    const { cellRoot } = createCell();
    cellRoot.setPortalEventTarget(target);
    const result = cellRoot.dispatchPointerEvent('click', 180, 20);
    expect(result.portalClickDispatched).toBeUndefined();
    expect(received).toHaveLength(0);
  });
});
