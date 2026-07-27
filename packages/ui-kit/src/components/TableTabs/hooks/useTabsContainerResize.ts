import { createSafeResizeObserver } from '@ui-kit/utils';
import { useEffect, useRef, useState } from 'react';

/**
 * Хук для отслеживания изменения размеров контейнера табов
 * Используется для динамической установки maxWidth
 */
export const useTabsContainerResize = (enabled: boolean) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const handleResize = (entries: ResizeObserverEntry[]) => {
      const entry = entries[0];
      if (entry) {
        setWidth(entry.contentRect.width);
      }
    };

    const observer = createSafeResizeObserver(handleResize);
    observer.observe(element);

    // Получаем начальную ширину
    const initialWidth = element.getBoundingClientRect().width;
    if (initialWidth > 0) {
      setWidth(initialWidth);
    }

    return () => {
      observer.disconnect();
    };
  }, [enabled]);

  return { ref, width };
};
