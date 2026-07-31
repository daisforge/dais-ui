import { RefObject, useEffect, useState } from 'react';

import { createSafeResizeObserver } from '../createSafeResizeObserver';

type ScrollDirection = 'vertical' | 'horizontal' | 'both';

interface ScrollState {
  vertical: boolean;
  horizontal: boolean;
}

/**
 * Хук для определения наличия скроллбаров у элемента
 * @param ref - React ref элемента
 * @param direction - Направление проверки ('vertical', 'horizontal' или 'both')
 * @param observeResize - Нужно ли отслеживать изменения размера
 * @returns Состояние скроллов или булево значение (в зависимости от direction)
 */
export const useHasScroll = (
  ref: RefObject<HTMLElement>,
  direction: ScrollDirection = 'vertical',
  observeResize = true,
): ScrollState | boolean => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    vertical: false,
    horizontal: false,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const checkScroll = () => {
      if (!element) return;

      const newVertical = element.scrollHeight > element.clientHeight;
      const newHorizontal = element.scrollWidth > element.clientWidth;

      setScrollState((prev) =>
        prev.vertical !== newVertical || prev.horizontal !== newHorizontal
          ? { vertical: newVertical, horizontal: newHorizontal }
          : prev,
      );
    };

    checkScroll();

    let resizeObserver: ResizeObserver | undefined;

    if (observeResize && typeof ResizeObserver !== 'undefined') {
      resizeObserver = createSafeResizeObserver(checkScroll);
      resizeObserver.observe(element);
    }

    return () => {
      resizeObserver?.disconnect();
    };
  }, [ref, observeResize]);

  switch (direction) {
    case 'vertical':
      return scrollState.vertical;
    case 'horizontal':
      return scrollState.horizontal;
    case 'both':
      return scrollState;
    default:
      return scrollState.vertical;
  }
};
