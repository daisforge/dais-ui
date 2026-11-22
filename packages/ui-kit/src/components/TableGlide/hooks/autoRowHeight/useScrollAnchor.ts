import { type RefObject, useLayoutEffect } from 'react';

import { queryGlideElements } from '../../utils/queryGlideElements';

interface Params {
  enabled: boolean;
  containerRef: RefObject<HTMLElement | null>;
  rowHeights: unknown;
  takeShift: () => number;
}

/**
 * Держит видимые строки на месте, пока высоты строк по содержимому дорастают.
 *
 * При прокрутке вверх строки у верхнего края впервые рисуются с базовой высотой
 * и после замера вырастают — без поправки содержимое под курсором уезжает вниз
 * сильнее, чем прокрутил пользователь. После каждого коммита высот прокрутка
 * сдвигается на рост строк выше якоря (`anchorShiftOf`) до отрисовки кадра.
 * У самого верха таблицы поправки нет: там содержимое и должно расти вниз.
 */
export function useScrollAnchor({
  enabled,
  containerRef,
  rowHeights,
  takeShift,
}: Params) {
  useLayoutEffect(() => {
    const shift = takeShift();
    if (!enabled || shift === 0) return;
    const { scroller } = queryGlideElements(containerRef.current);
    if (!scroller || scroller.scrollTop === 0) return;
    scroller.scrollTop += shift;
  }, [enabled, containerRef, rowHeights, takeShift]);
}
