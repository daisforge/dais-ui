/**
 * Контейнер поповера, на котором floating-ui (внутри PopoverBeta) держит фокус:
 * элемент с `data-floating-ui-focusable` и ролью dialog.
 *
 * ВАЖНО (внешняя зависимость): атрибут ставит floating-ui, роль ставит
 * PopoverBeta. Ищем по обоим, чтобы переименование одного из них не отключило
 * перехват фокуса. Тест `floatingContainer.test.tsx` рендерит настоящий
 * PopoverBeta и упадёт, если контейнер перестанет находиться.
 */
export const FLOATING_FOCUS_CONTAINER_SELECTOR =
  '[data-floating-ui-focusable], [role="dialog"]';

/** Контейнер поповера для элемента внутри него (ref на PopoverBeta). */
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

/**
 * Редактор ячейки Glide рисуется в портале вне контейнера таблицы
 * (`#gdg-overlay-N`). Атрибут форка Glide; если он сменится, наведение
 * перестанет учитывать редактирование ячейки.
 */
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
