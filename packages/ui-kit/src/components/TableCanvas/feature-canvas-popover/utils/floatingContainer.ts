/**
 * Контейнер Popover, на который PopoverBeta ставит фокус. Атрибут ставит
 * floating-ui, роль ставит PopoverBeta: ищем по обоим, чтобы смена одного
 * из них не сломала возврат фокуса.
 */
export const FLOATING_FOCUS_CONTAINER_SELECTOR =
  '[data-floating-ui-focusable], [role="dialog"]';

export function getFloatingContainer(
  element: Element | null | undefined,
): HTMLElement | null {
  const container = element?.closest(FLOATING_FOCUS_CONTAINER_SELECTOR);
  return container instanceof HTMLElement ? container : null;
}

/** Поле ввода, в котором Esc и наведение не должны мешать пользователю. */
export function isEditableElement(element: Element | null): boolean {
  if (!(element instanceof HTMLElement)) return false;
  if (element.isContentEditable) return true;
  const tag = element.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
}

/** Редактор ячейки glide рисуется вне контейнера таблицы, в `#gdg-overlay-N`. */
const GRID_EDITOR_OVERLAY_SELECTOR = '[id^="gdg-overlay"]';

/** Пользователь печатает в своей таблице: в её поле ввода или в редакторе ячейки. */
export function isEditingInTable(container: HTMLElement | null): boolean {
  if (typeof document === 'undefined') return false;
  const active = document.activeElement;
  if (!active || !isEditableElement(active)) return false;
  return (
    !!container?.contains(active) ||
    !!active.closest(GRID_EDITOR_OVERLAY_SELECTOR)
  );
}
