import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

import {
  getFloatingContainer,
  isEditableElement,
} from '../utils/floatingContainer';

/** Всплывающие элементы внутри таблицы со своей обработкой Esc (контекстное меню, списки). */
const OWN_ESCAPE_SELECTOR = '[role="menu"], [role="listbox"], [role="dialog"]';

/**
 * Открытые окна всех таблиц страницы в порядке открытия. Esc без фокуса
 * (на body) закрывает только последнее.
 */
const openWindows: object[] = [];

/** Esc, который сейчас идёт по документу. */
let currentEscape: KeyboardEvent | null = null;

/**
 * Идёт ли сейчас обработка нажатия Esc. Атомарные окна сами слушают Esc и
 * зовут `onToggle(false)`, а отключить это нельзя. Такое закрытие переходник
 * пропускает: по Esc окно закрывает только `useEscapeClose`. Проверяем само
 * событие: после обработки у него `eventPhase` снова `NONE`.
 */
export function isEscapeInProgress(): boolean {
  return !!currentEscape && currentEscape.eventPhase !== Event.NONE;
}

export interface UseEscapeCloseParams {
  enabled: boolean;
  onClose: () => void;
  /** Контейнер таблицы: Esc закрывает окно, только если нажат в ней. */
  tableContainer?: HTMLElement | null;
  /** Содержимое окна: Esc внутри него тоже закрывает окно. */
  popoverRef: RefObject<HTMLElement | null>;
}

/**
 * Единственное место, где Popover и Dropdown закрываются по Esc. Слушаем
 * документ в capture-фазе, раньше glide и атомарки. Закрываем, если Esc нажат:
 * - внутри окна;
 * - в своей таблице, но не в поле ввода и не во всплывающем элементе со своим
 *   Esc. Всплытие останавливаем, чтобы первый Esc закрыл только окно;
 * - без фокуса (на body), и это окно открыто последним на странице.
 * Esc в другом месте страницы окно не закрывает.
 */
export function useEscapeClose({
  enabled,
  onClose,
  tableContainer,
  popoverRef,
}: UseEscapeCloseParams) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const tokenRef = useRef({});

  useEffect(() => {
    const token = tokenRef.current;
    openWindows.push(token);
    return () => {
      const index = openWindows.indexOf(token);
      if (index !== -1) openWindows.splice(index, 1);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      currentEscape = event;
      if (!enabled) return;
      const target = event.target instanceof Element ? event.target : null;

      const popover =
        getFloatingContainer(popoverRef.current) ?? popoverRef.current;
      if (target && popover?.contains(target)) {
        onCloseRef.current();
        return;
      }

      const fromNowhere =
        !target ||
        target === document.body ||
        target === document.documentElement;
      if (fromNowhere) {
        if (openWindows[openWindows.length - 1] === tokenRef.current) {
          onCloseRef.current();
        }
        return;
      }

      if (!target || !tableContainer?.contains(target)) return;
      // Учитываем только всплывающие элементы внутри таблицы: closest найдёт и
      // модальное окно вокруг таблицы, а его Esc закрывать окно не мешает.
      const ownEscape =
        isEditableElement(target) ||
        tableContainer.contains(target.closest(OWN_ESCAPE_SELECTOR));
      if (ownEscape) return;

      event.stopPropagation();
      onCloseRef.current();
    };

    document.addEventListener('keydown', handleKeyDown, true);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [enabled, tableContainer, popoverRef]);
}
