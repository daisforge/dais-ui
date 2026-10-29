import type { RefObject } from 'react';
import { useLayoutEffect, useState } from 'react';

import { getFloatingContainer } from '../utils/floatingContainer';

/**
 * Не даёт canvas-поповеру забирать фокус у таблицы при открытии.
 *
 * При открытии floating-ui FloatingFocusManager внутри PopoverBeta ставит
 * фокус на сам контейнер поповера. В таблице из-за этого:
 * - мелькает фокус-рамка вокруг поповера: Glide отменяет pointerdown на canvas,
 *   браузер не видит клика мышью и считает фокус «клавиатурным» (:focus-visible);
 * - фокус уходит из таблицы: перестают работать стрелки.
 *
 * Тот же приём, что у поповера фильтра (use-focus-search-input): focusin в
 * capture-фазе ловит фокус на нашем контейнере и синхронно, до отрисовки кадра,
 * возвращает его туда, где он был до открытия.
 *
 * Перехват работает только в начальном окне открытия: до первого перехвата
 * или до первого нажатия внутри поповера. Дальше фокус ведёт пользователь:
 * клик по тексту внутри поповера (браузер ставит фокус на контейнер) не
 * возвращает его в таблицу, иначе Ctrl+C копировал бы ячейку, а не текст.
 * Если фокус уже внутри (autoFocus поля), floating-ui контейнер не фокусирует
 * и перехвата нет.
 *
 * Если поповер закрывается с фокусом внутри, фокус возвращается на место.
 */
export function usePopoverFocusGuard(
  popoverRef: RefObject<HTMLElement | null>,
) {
  // Читаем при первом рендере: эффекты PopoverBeta (и перевод фокуса) идут раньше наших.
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

    // from — откуда фокус пришёл на контейнер (relatedTarget). Он точнее
    // запомненного при рендере: при переключении поповера A на B фокус до
    // открытия B был внутри A, который уже удалён, а A успел вернуть фокус в
    // таблицу.
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

    // Нажатие внутри поповера: дальше фокус ведёт пользователь.
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
      // Закрываемся с фокусом внутри (кнопка «Закрыть», Esc после Tab):
      // без этого фокус упадёт на body и таблица потеряет клавиатуру.
      const current = getContainer();
      if (current && current.contains(document.activeElement)) {
        restore(current);
      }
    };
  }, [popoverRef, previousFocus]);
}
