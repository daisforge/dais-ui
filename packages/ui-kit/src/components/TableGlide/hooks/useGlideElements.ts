import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { tableDebug } from '@ui-kit/utils/tableDebug';

import { queryGlideElements } from '../utils/queryGlideElements';

const TAG = '[useGlideElements]';

/**
 * Хук для поиска DOM-элементов Glide (`.gdg-table`, `.dvn-scroller`, `.dvn-underlay`)
 * через useEffect + MutationObserver вместо callback ref.
 *
 * Не участвует в ref-цепочке DataEditor — полностью развязан от
 * useImperativeHandle и cascade рендеров.
 *
 * @param wrapperRef - ref на обёрточный div таблицы (внутри которого Glide создаёт `.gdg-table`)
 * @param fullScreened - при переключении fullscreen DOM перестраивается, элементы ищутся заново
 */
export function useGlideElements(
  wrapperRef: React.RefObject<HTMLDivElement | null> | undefined,
  fullScreened?: boolean
) {
  const [glideContainer, setGlideContainer] = useState<HTMLDivElement | null>(
    null
  );
  const [glideScroller, setGlideScroller] = useState<HTMLDivElement | null>(
    null
  );
  const [glideUnderlay, setGlideUnderlay] = useState<HTMLDivElement | null>(
    null
  );

  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef?.current;
    tableDebug(TAG, 'useEffect fired', { hasWrapper: !!wrapper, fullScreened });
    if (!wrapper) return undefined;

    const tryFind = () => {
      const { container, scroller, underlay } = queryGlideElements(wrapper);
      tableDebug(TAG, 'tryFind', {
        containerFound: !!container,
        scrollerFound: !!scroller,
        underlayFound: !!underlay,
      });
      if (container) {
        setGlideContainer((prev) => (prev === container ? prev : container));
        setGlideScroller((prev) => (prev === scroller ? prev : scroller));
        setGlideUnderlay((prev) => (prev === underlay ? prev : underlay));
        // Найдено — observer больше не нужен
        if (observerRef.current) {
          observerRef.current.disconnect();
          observerRef.current = null;
        }
        return true;
      }
      return false;
    };

    // Попытка 1: rAF после mount (DOM уже может быть готов)
    const raf = requestAnimationFrame(() => {
      if (tryFind()) return;

      // Попытка 2: MutationObserver — ждём появления .gdg-table
      const observer = new MutationObserver(() => {
        tryFind();
      });
      observer.observe(wrapper, { childList: true, subtree: true });
      observerRef.current = observer;
    });

    return () => {
      cancelAnimationFrame(raf);
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      // Сброс при unmount / смене fullScreened
      setGlideContainer(null);
      setGlideScroller(null);
      setGlideUnderlay(null);
    };
  }, [wrapperRef, fullScreened]);

  const renderInContainer = useCallback(
    (children: React.ReactNode) => {
      if (!glideContainer) return null;
      return createPortal(children, glideContainer);
    },
    [glideContainer]
  );

  return {
    /** `.gdg-table` - основной контейнер Glide. */
    glideContainer,
    /** `.dvn-scroller` - скроллящийся контейнер внутри Glide. Может быть null. */
    glideScroller,
    /** `.dvn-underlay` - underlay контейнер внутри Glide. Может быть null. */
    glideUnderlay,
    /** true, когда glideContainer найден и можно рендерить порталы. */
    isReady: !!glideContainer,
    /** createPortal-обёртка для рендеринга внутри `.gdg-table`. */
    renderInContainer,
  };
}
