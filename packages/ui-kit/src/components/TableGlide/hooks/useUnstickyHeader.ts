import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { type RefObject, useCallback, useMemo, useRef, useState } from 'react';

import { DEFAULT_HEADER_HEIGHT } from '../constants';
import type { GlideProps } from '../types';

interface UseUnstickyHeaderParams {
  enabled?: boolean;
  portalEventTargetRef?: RefObject<HTMLElement | null>;
  headerHeight?: GlideProps['headerHeight'];
  groupHeaderHeight?: GlideProps['groupHeaderHeight'];
  experimental?: GlideProps['experimental'];
}

/**
 * Хук «нелипкого» заголовка — header уезжает вместе со скроллом.
 *
 * 1. CSS `translateY(-fixedY)` на `.dvn-underlay` сдвигает канвас вверх
 * 2. `overflowY: visible` на underlay не обрезает контент
 * 3. Отрицательный `experimental.paddingBottom` расширяет видимую область DataEditor
 *
 * Возвращает `unstickyCallbackRef` (callback ref для mergeRefs) и `mergedExperimental`.
 */
export function useUnstickyHeader({
  enabled,
  portalEventTargetRef,
  headerHeight,
  groupHeaderHeight,
  experimental,
}: UseUnstickyHeaderParams) {
  const [unstickyPadding, setUnstickyPadding] = useState(0);
  const scrollCleanupRef = useRef<(() => void) | null>(null);

  const totalHeaderHeight = useMemo(() => {
    const hh = headerHeight ?? DEFAULT_HEADER_HEIGHT;
    let total = typeof hh === 'number' ? hh : DEFAULT_HEADER_HEIGHT;

    if (Array.isArray(groupHeaderHeight)) {
      total += groupHeaderHeight.reduce((a: number, b: number) => a + b, 0);
    } else if (typeof groupHeaderHeight === 'number') {
      total += groupHeaderHeight;
    }
    return total;
  }, [headerHeight, groupHeaderHeight]);

  const totalHeaderHeightRef = useRef(totalHeaderHeight);
  totalHeaderHeightRef.current = totalHeaderHeight;

  const unstickyCallbackRef = useCallback(
    (instance: DataEditorRef | null) => {
      scrollCleanupRef.current?.();
      scrollCleanupRef.current = null;

      // ref-recycling: React вызывает ref(null) при смене ref-функции — не трогаем padding
      if (!instance) return;

      // Фича выключена — сбрасываем padding
      if (!enabled) {
        setUnstickyPadding(0);
        return;
      }

      const rootEl = portalEventTargetRef?.current;
      if (!rootEl) return;

      const scroller = rootEl.querySelector<HTMLDivElement>('.dvn-scroller');
      const underlay = rootEl.querySelector<HTMLDivElement>('.dvn-underlay');
      if (!scroller || !underlay) return;

      const scrollCb = () => {
        const y = scroller.scrollTop;
        const fixedY = Math.min(y, totalHeaderHeightRef.current);

        setUnstickyPadding(-1 * fixedY);

        underlay.style.overflowY = 'visible';
        underlay.style.transform = `translateY(-${fixedY}px)`;
      };

      scroller.addEventListener('scroll', scrollCb);

      scrollCleanupRef.current = () => {
        scroller.removeEventListener('scroll', scrollCb);
        // Возвращаем стили underlay к дефолту: иначе последний
        // translateY(-fixedY) остаётся висеть после выключения фичи — при
        // scrollTop>0 канвас застывает сдвинутым вверх (шапка уходит из вида,
        // снизу дыра в высоту шапки). Вызывается в т.ч. при disable/ref-recycle.
        underlay.style.transform = '';
        underlay.style.overflowY = '';
      };
    },
    [enabled, portalEventTargetRef]
  );

  const mergedExperimental = useMemo(() => {
    if (!enabled) return experimental;

    return { ...experimental, paddingBottom: unstickyPadding };
  }, [enabled, unstickyPadding, experimental]);

  return { unstickyCallbackRef, mergedExperimental };
}
