import type { RefObject } from 'react';
import { useLayoutEffect, useState } from 'react';

import { getFloatingContainer } from '../utils/floatingContainer';

/**
 * Не даёт Popover забрать фокус у таблицы при открытии. PopoverBeta ставит
 * фокус на свой контейнер: вокруг Popover мелькает рамка фокуса, а стрелки в
 * таблице перестают работать. Сразу возвращаем фокус туда, где он был.
 *
 * Возвращаем только один раз, до первого нажатия внутри Popover: дальше фокус
 * ведёт пользователь, например, чтобы Ctrl+C копировал выделенный текст.
 * При закрытии с фокусом внутри фокус тоже возвращается на место.
 */
export function usePopoverFocusGuard(
  popoverRef: RefObject<HTMLElement | null>,
) {
  // Запоминаем при первом рендере: PopoverBeta переносит фокус раньше наших эффектов.
  const [previousFocus] = useState<Element | null>(() =>
    typeof document === 'undefined' ? null : document.activeElement,
  );

  useLayoutEffect(() => {
    let armed = true;
    const getContainer = () => getFloatingContainer(popoverRef.current);

    const canTakeFocus = (element: unknown): element is HTMLElement =>
      element instanceof HTMLElement &&
      element !== document.body &&
      element.isConnected;

    // from: откуда фокус пришёл на контейнер. Он точнее запомненного при
    // рендере, когда один Popover сменяется другим: прежний уже удалён и успел
    // вернуть фокус в таблицу.
    const restore = (container: HTMLElement, from?: unknown) => {
      if (canTakeFocus(from) && !container.contains(from)) {
        from.focus({ preventScroll: true });
      } else if (canTakeFocus(previousFocus)) {
        previousFocus.focus({ preventScroll: true });
      } else {
        container.blur();
      }
    };

    const handleFocusIn = (event: FocusEvent) => {
      if (!armed) return;
      const container = getContainer();
      if (!container || event.target !== container) return;
      const from = event.relatedTarget;
      if (from instanceof Node && container.contains(from)) return;
      armed = false;
      restore(container, from);
    };

    // Нажатие внутри Popover: дальше фокус ведёт пользователь.
    const handlePointerDown = (event: PointerEvent) => {
      const container = getContainer();
      if (
        container &&
        event.target instanceof Node &&
        container.contains(event.target)
      ) {
        armed = false;
      }
    };

    document.addEventListener('focusin', handleFocusIn, true);
    document.addEventListener('pointerdown', handlePointerDown, true);

    // Фокус мог уйти на контейнер ещё до подписки.
    const container = getContainer();
    if (container && document.activeElement === container) {
      armed = false;
      restore(container);
    }

    return () => {
      document.removeEventListener('focusin', handleFocusIn, true);
      document.removeEventListener('pointerdown', handlePointerDown, true);
      // Закрываемся с фокусом внутри (кнопка «Закрыть», Esc после Tab): иначе
      // фокус уйдёт на body и таблица перестанет отвечать на клавиатуру.
      const current = getContainer();
      if (current && current.contains(document.activeElement)) {
        restore(current);
      }
    };
  }, [popoverRef, previousFocus]);
}
