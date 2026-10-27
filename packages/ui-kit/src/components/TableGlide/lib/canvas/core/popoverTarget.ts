import type { CanvasNode } from './CanvasNode';

/** У ноды есть Popover или Dropdown, который открывается кликом. */
export function hasClickOverlay(node: CanvasNode): boolean {
  const overlay = node.popover ?? node.dropdown;
  return !!overlay && overlay.trigger !== 'hover';
}

/**
 * Ближайшая нода с Popover или Dropdown по клику: сама нода под курсором или её
 * родитель. Так клик по тексту внутри кнопки считается кликом по кнопке.
 * Открытие по наведению здесь не учитывается.
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
