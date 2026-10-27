import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

import {
  getFloatingContainer,
  isEditableElement,
} from '../utils/floatingContainer';

/** Всплывающие элементы внутри таблицы со своей обработкой Esc (контекстное меню, списки). */
const OWN_ESCAPE_SELECTOR = '[role="menu"], [role="listbox"], [role="dialog"]';

/** Последнее нажатие Esc и закрывает ли оно Popover. */
export interface LastEscape {
  at: number;
  /**
   * Esc нажат внутри Popover или в таблице и закрывает Popover. Esc в другом
   * месте страницы Popover не закрывает, хотя floating-ui его тоже слышит.
   */
  closes: boolean;
}

export interface UseEscapeCloseParams {
  enabled: boolean;
  onClose: () => void;
  /** Контейнер таблицы: Esc закрывает Popover, только если нажат в ней. */
  tableContainer?: HTMLElement | null;
  popoverRef: RefObject<HTMLElement | null>;
}

/**
 * Закрывает Popover по Esc, когда фокус в таблице. Пока Popover открыт, фокус
 * остаётся в таблице, и Esc сначала получает glide. Перехватываем его раньше,
 * если он нажат в своей таблице или фокуса нет нигде, но не в поле ввода и не
 * во всплывающем элементе со своим Esc. Тогда первый Esc закрывает только Popover.
 *
 * @returns ref с последним Esc, чтобы отличить закрытие по Esc от клика мимо.
 */
export function useEscapeClose({
  enabled,
  onClose,
  tableContainer,
  popoverRef,
}: UseEscapeCloseParams) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const lastEscapeRef = useRef<LastEscape>({ at: 0, closes: false });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const target = event.target instanceof Element ? event.target : null;
      const remember = (closes: boolean) => {
        lastEscapeRef.current = { at: Date.now(), closes };
      };

      const popover =
        getFloatingContainer(popoverRef.current) ?? popoverRef.current;
      if (target && popover?.contains(target)) {
        remember(true);
        return;
      }

      const fromNowhere =
        !target ||
        target === document.body ||
        target === document.documentElement;
      const fromTable = !!target && !!tableContainer?.contains(target);
      // Учитываем только всплывающие элементы внутри таблицы: closest найдёт и
      // модальное окно вокруг таблицы, а его Esc закрывать Popover не мешает.
      const ownEscape =
        !!target &&
        (isEditableElement(target) ||
          !!tableContainer?.contains(target.closest(OWN_ESCAPE_SELECTOR)));

      if (!enabled || (!fromNowhere && !fromTable) || ownEscape) {
        remember(false);
        return;
      }

      remember(true);
      if (fromTable) event.stopPropagation();
      onCloseRef.current();
    };

    document.addEventListener('keydown', handleKeyDown, true);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [enabled, tableContainer, popoverRef]);

  return lastEscapeRef;
}
