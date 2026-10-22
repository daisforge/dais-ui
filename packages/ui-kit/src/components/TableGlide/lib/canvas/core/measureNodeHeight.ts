import { CanvasContainer } from './CanvasContainer';
import type { CanvasNode } from './CanvasNode';

/**
 * Высота, которую узлу нужно при ширине `width`: layout без заданной высоты,
 * её задаёт содержимое. Стиль узла после замера восстанавливается — узел
 * можно сразу раскладывать для отрисовки.
 */
export const measureNodeHeight = (
  ctx: CanvasRenderingContext2D,
  node: CanvasNode,
  width: number,
): number => {
  const { style } = node;
  node.style = { width };
  Object.assign(node.rect, { x: 0, y: 0, width, height: 0 });

  if (node instanceof CanvasContainer) {
    node.performLayout(ctx);
  } else {
    node.measure(ctx);
  }

  const { height } = node.rect;
  node.style = style;
  return height;
};
