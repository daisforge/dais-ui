import { useEffect, useRef } from 'react';

import { isEditableElement } from '../utils/floatingContainer';

/** Всплывающие элементы со своей обработкой Esc (контекстное меню, списки, вложенные окна). */
const OWN_ESCAPE_SELECTOR = '[role="menu"], [role="listbox"], [role="dialog"]';

/**
 * Открытые окна всех таблиц страницы в порядке открытия. Esc без фокуса
 * (на body) закрывает только последнее. Окно с `closeOnEsc: false` сюда не
 * попадает, иначе оно заслоняло бы Esc для остальных.
 */
const openWindows: object[] = [];

/** Esc, который сейчас идёт по документу. После прохода ссылку отпускаем. */
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

/**
 * Esc нажат в элементе, который сам его обрабатывает: в поле ввода или во
 * всплывающем элементе, лежащем внутри `boundary` (сам `boundary` не считается:
 * у контейнера Popover тоже роль dialog).
 */
function hasOwnEscape(target: Element, boundary: Element): boolean {
  if (isEditableElement(target)) return true;
  const own = target.closest(OWN_ESCAPE_SELECTOR);
  return !!own && own !== boundary && boundary.contains(own);
}

export interface UseEscapeCloseParams {
  enabled: boolean;
  onClose: () => void;
  /** Контейнер таблицы: Esc закрывает окно, только если нажат в ней. */
  tableContainer?: HTMLElement | null;
  /**
   * Корень окна на странице: Esc внутри него закрывает окно. У Popover это
   * контейнер floating-ui, на который PopoverBeta ставит фокус, у Dropdown
   * сам список. Вверх от него не поднимаемся: вокруг таблицы может лежать
   * модальное окно, и его содержимое не наше.
   */
  getOverlayElement: () => HTMLElement | null;
}

/**
 * Единственное место, где Popover и Dropdown закрываются по Esc. Слушаем
 * документ в capture-фазе, раньше glide и атомарки. Закрываем, если Esc нажат:
 * - внутри окна, но не в поле ввода и не во вложенном элементе со своим Esc
 *   (список, меню): их Esc сворачивает только их;
 * - в своей таблице, но не в поле ввода и не во всплывающем элементе со своим
 *   Esc;
 * - без фокуса (на body), и это окно открыто последним на странице.
 * В первых двух случаях всплытие останавливаем, чтобы первый Esc закрыл только
 * окно и не дошёл до таблицы и того, что вокруг неё. Esc в другом месте
 * страницы окно не закрывает.
 */
export function useEscapeClose({
  enabled,
  onClose,
  tableContainer,
  getOverlayElement,
}: UseEscapeCloseParams) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const getOverlayElementRef = useRef(getOverlayElement);
  getOverlayElementRef.current = getOverlayElement;
  const tokenRef = useRef({});

  useEffect(() => {
    if (!enabled) return undefined;
    const token = tokenRef.current;
    openWindows.push(token);
    return () => {
      const index = openWindows.indexOf(token);
      if (index !== -1) openWindows.splice(index, 1);
    };
  }, [enabled]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (currentEscape !== event) {
        currentEscape = event;
        window.setTimeout(() => {
          if (currentEscape === event) currentEscape = null;
        }, 0);
      }
      if (!enabled) return;
      const target = event.target instanceof Element ? event.target : null;

      const overlay = getOverlayElementRef.current();
      if (target && overlay?.contains(target)) {
        if (hasOwnEscape(target, overlay)) return;
        event.stopPropagation();
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
      if (hasOwnEscape(target, tableContainer)) return;

      event.stopPropagation();
      onCloseRef.current();
    };

    document.addEventListener('keydown', handleKeyDown, true);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [enabled, tableContainer]);
}
