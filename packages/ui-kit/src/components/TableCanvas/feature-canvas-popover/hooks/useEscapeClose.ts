import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

import {
  getFloatingContainer,
  isEditableElement,
} from '../utils/floatingContainer';

/** Плавающие элементы внутри таблицы, у которых свой Esc (контекстное меню, списки). */
const OWN_ESCAPE_SELECTOR = '[role="menu"], [role="listbox"], [role="dialog"]';

/** Последний Esc и что с ним решили: по нему переходник разбирает onToggle(false). */
export interface LastEscape {
  at: number;
  /**
   * Esc законно закрывает поповер: пришёл изнутри поповера (его закрывает
   * PopoverBeta) или его закрыли мы. Esc из чужого элемента страницы — нет:
   * floating-ui слушает Esc на всём документе, и такое закрытие игнорируем.
   */
  closes: boolean;
}

export interface UseEscapeCloseParams {
  /** Закрывать по Esc (closeOnEsc). */
  enabled: boolean;
  onClose: () => void;
  /** Контейнер таблицы: Esc закрывает поповер, только если пришёл из неё. */
  tableContainer?: HTMLElement | null;
  popoverRef: RefObject<HTMLElement | null>;
}

/**
 * Закрывает canvas-поповер по Esc, пока фокус остаётся в таблице.
 *
 * Фокус при открытом поповере остаётся в таблице (usePopoverFocusGuard), и Esc
 * получает Glide, а не floating-ui. Ловим его в capture-фазе, но только если
 * он пришёл из своей таблицы (или ни из чего: фокус на body) и не из поля ввода
 * или плавающего элемента внутри таблицы со своим Esc. Тогда первый Esc
 * закрывает поповер и до таблицы не доходит. Esc внутри поповера обрабатывают
 * его содержимое и PopoverBeta, Esc в чужих элементах страницы (в том числе в
 * модалке, внутри которой стоит таблица, если фокус не в таблице) мы не трогаем.
 *
 * @returns ref с последним Esc: по нему переходник отличает закрытие по Esc от
 *   клика мимо и решает, принимать ли его.
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
      // Свой Esc у поля ввода и у плавающего элемента внутри таблицы. Модалка
      // снаружи таблицы не в счёт: closest поднимается и до неё.
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
