import type { GroupHeaderClickedEventArgs } from '@glideappsfinal/glide-data-grid';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { CellCanvasRoot } from '../../lib/canvas/cells/CellCanvasRoot';
import { normalizeCanvasInteraction } from '../../lib/canvas/core/canvasInteraction';
import { CanvasNode } from '../../lib/canvas/core/CanvasNode';
import {
  type CanvasPortalClickDetail,
  subscribeToCanvasPortalClick
} from '../../lib/canvas/utils/portalClickEvents';
import { handleGroupHeaderClick } from '../groupHeaderClick';

class TestNode extends CanvasNode {
  measure(): void {}

  onPaint(): void {}
}

const node = (id: string, rect: CanvasNode['rect']) => {
  const result = new TestNode(id);
  result.rect = rect;
  return result;
};

/**
 * Шапка группы 300×32 с кнопкой в точке (10..110, 4..28). Кнопка собрана так
 * же, как её собирает buildNode для popover/dropdown с trigger: 'click'.
 */
const createGroupRoot = (
  overlay: Pick<CanvasNode, 'popover'> | Pick<CanvasNode, 'dropdown'>,
  target: HTMLElement
) => {
  const root = node('group', { x: 0, y: 0, width: 300, height: 32 });
  const button = node('button', { x: 10, y: 4, width: 100, height: 24 });
  Object.assign(button, overlay);
  button.interaction = normalizeCanvasInteraction({ selection: 'keep' });
  root.addChild(button);
  const groupRoot = new CellCanvasRoot(root);
  (groupRoot as unknown as { bounds: CanvasNode['rect'] }).bounds = {
    x: 100,
    y: 0,
    width: 300,
    height: 32
  };
  groupRoot.setPortalEventTarget(target);
  return groupRoot;
};

const clickAt = (x: number, y: number) =>
  ({
    kind: 'group-header',
    group: 'Продажи',
    localEventX: x,
    localEventY: y,
    button: 0,
    bounds: { x: 100, y: 0, width: 300, height: 32 },
    preventDefault: vi.fn()
  }) as unknown as GroupHeaderClickedEventArgs;

const columns = [
  { id: 'name' },
  { id: 'q1', group: 'Продажи' },
  { id: 'q2', group: 'Продажи' },
  { id: 'total' }
];

describe('handleGroupHeaderClick: canvas-элементы в шапке группы', () => {
  let target: HTMLDivElement;
  let received: CanvasPortalClickDetail[];
  let unsubscribe: () => void;

  beforeEach(() => {
    target = document.createElement('div');
    received = [];
    unsubscribe = subscribeToCanvasPortalClick(
      (detail) => received.push(detail),
      target
    );
  });

  afterEach(() => {
    unsubscribe();
  });

  it.each([
    ['popover', { popover: { content: 'окно' } }],
    ['dropdown', { dropdown: { items: [{ value: 'a', label: 'A' }] } }]
  ] as const)(
    'клик по элементу с %s не выделяет группу, но вызывает внешний onGroupHeaderClicked',
    (_, overlay) => {
      const selectColumnsByKeys = vi.fn();
      const onGroupHeaderClicked = vi.fn();
      const event = clickAt(20, 10);

      handleGroupHeaderClick({
        colIndex: 1,
        event,
        groupRoot: createGroupRoot(
          overlay as Pick<CanvasNode, 'popover'>,
          target
        ),
        columns,
        enableColumnSelection: true,
        selectColumnsByKeys,
        onGroupHeaderClicked
      });

      expect(received).toHaveLength(1);
      expect(received[0]).toMatchObject({ originId: 'button' });
      expect(selectColumnsByKeys).not.toHaveBeenCalled();
      expect(onGroupHeaderClicked).toHaveBeenCalledTimes(1);
      expect(onGroupHeaderClicked).toHaveBeenCalledWith(1, event);
    }
  );

  it('клик мимо элемента выделяет листья группы и вызывает внешний onGroupHeaderClicked', () => {
    const selectColumnsByKeys = vi.fn();
    const onGroupHeaderClicked = vi.fn();
    const event = clickAt(200, 10);

    handleGroupHeaderClick({
      colIndex: 1,
      event,
      groupRoot: createGroupRoot({ popover: { content: 'окно' } }, target),
      columns,
      enableColumnSelection: true,
      selectColumnsByKeys,
      onGroupHeaderClicked
    });

    expect(received).toHaveLength(0);
    expect(selectColumnsByKeys).toHaveBeenCalledWith(['q1', 'q2']);
    expect(onGroupHeaderClicked).toHaveBeenCalledWith(1, event);
  });

  it('без canvas-содержимого и с выключенным выделением только вызывает внешний обработчик', () => {
    const selectColumnsByKeys = vi.fn();
    const onGroupHeaderClicked = vi.fn();

    handleGroupHeaderClick({
      colIndex: 2,
      event: clickAt(20, 10),
      groupRoot: undefined,
      columns,
      enableColumnSelection: false,
      selectColumnsByKeys,
      onGroupHeaderClicked
    });

    expect(selectColumnsByKeys).not.toHaveBeenCalled();
    expect(onGroupHeaderClicked).toHaveBeenCalledTimes(1);
  });
});
