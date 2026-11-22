import { describe, expect, it } from 'vitest';

import { CanvasNode } from '../CanvasNode';
import { findPopoverTarget } from '../popoverTarget';

class TestNode extends CanvasNode {
  measure(): void {}

  onPaint(): void {}
}

describe('findPopoverTarget: ближайшая нода с поповером', () => {
  it('возвращает саму ноду, если поповер задан на ней', () => {
    const node = new TestNode('button');
    node.popover = { content: 'x' };
    expect(findPopoverTarget(node)).toBe(node);
  });

  it('поднимается к родителю с поповером', () => {
    const button = new TestNode('button');
    button.popover = { content: 'x' };
    const text = new TestNode('text');
    button.addChild(text);
    expect(findPopoverTarget(text)).toBe(button);
  });

  it('ближайший предок важнее дальнего', () => {
    const container = new TestNode('container');
    container.popover = { content: 'контейнер' };
    const button = new TestNode('button');
    button.popover = { content: 'кнопка' };
    const text = new TestNode('text');
    container.addChild(button);
    button.addChild(text);
    expect(findPopoverTarget(text)).toBe(button);
  });

  it('поповер по наведению по клику не ищется, берётся предок с кликом', () => {
    const container = new TestNode('container');
    container.popover = { content: 'по клику' };
    const icon = new TestNode('icon');
    icon.popover = { trigger: 'hover', content: 'по наведению' };
    container.addChild(icon);
    expect(findPopoverTarget(icon)).toBe(container);
  });

  it('без поповера в цепочке возвращает null', () => {
    const container = new TestNode('container');
    const text = new TestNode('text');
    container.addChild(text);
    expect(findPopoverTarget(text)).toBeNull();
    expect(findPopoverTarget(undefined)).toBeNull();
  });
});
