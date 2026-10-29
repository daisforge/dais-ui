import type { CanvasNode } from './CanvasNode';

/** У ноды есть поповер или дропдаун, который открывается кликом. */
export function hasClickOverlay(node: CanvasNode): boolean {
  const overlay = node.popover ?? node.dropdown;
  return !!overlay && overlay.trigger !== 'hover';
}

/**
 * Ближайшая нода с поповером или дропдауном по клику: сама нода под курсором
 * или её родитель. Так клик по тексту внутри кнопки с поповером считается
 * кликом по кнопке. Конфиг с `trigger: 'hover'` открывается наведением, по
 * клику его не ищем.
 */
export function findPopoverTarget(
  node: CanvasNode | undefined,
): CanvasNode | null {
  let current: CanvasNode | null = node ?? null;
  while (current) {
    if (hasClickOverlay(current)) {
      return current;
    }
    current = current.parent;
  }
  return null;
}
