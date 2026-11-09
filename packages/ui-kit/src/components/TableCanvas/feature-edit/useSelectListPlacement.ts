import { SELECT_LIST_PORTAL_ID } from '@ui-kit/components/TableCanvasSharedConstants';
import { useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

const findListHeight = (): number | undefined =>
  document
    .querySelector(`#${SELECT_LIST_PORTAL_ID} [role='tree']`)
    ?.parentElement?.getBoundingClientRect().height;

/**
 * Куда открывать список Select. При подписи внизу блока предпочитаем верх, но только
 * если настоящий список поместится над подписью внутри области данных. Иначе он
 * закрыл бы шапку и блок управления: `flip` смотрит только на окно.
 *
 * Высота снимается с самого списка, поэтому размер строки, `listMaxHeight` и перенос
 * длинных подписей учитываются сами. Если список не нашёлся, он открывается вниз.
 * Сторона переключается до отрисовки кадра.
 */
export const useSelectListPlacement = ({
  preferTop,
  getSpaceAbove,
}: {
  preferTop: boolean;
  /** Высота области данных над полем. */
  getSpaceAbove: () => number | undefined;
}): 'top' | 'bottom' => {
  const [placement, setPlacement] = useState<'top' | 'bottom'>('bottom');
  const getSpaceAboveRef = useRef(getSpaceAbove);
  getSpaceAboveRef.current = getSpaceAbove;

  useLayoutEffect(() => {
    if (!preferTop) {
      return undefined;
    }

    const fitsAbove = (listHeight: number) => {
      const spaceAbove = getSpaceAboveRef.current();
      return spaceAbove !== undefined && listHeight <= spaceAbove;
    };

    const initialHeight = findListHeight();
    if (initialHeight !== undefined) {
      if (fitsAbove(initialHeight)) {
        setPlacement('top');
      }
      return undefined;
    }

    // Список появляется позже поля: ждём его, наблюдатель сработает до отрисовки.
    const observer = new MutationObserver(() => {
      const listHeight = findListHeight();
      if (listHeight === undefined) {
        return;
      }
      observer.disconnect();
      if (fitsAbove(listHeight)) {
        flushSync(() => setPlacement('top'));
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
    // Сторона выбирается один раз, при открытии редактора.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return placement;
};
