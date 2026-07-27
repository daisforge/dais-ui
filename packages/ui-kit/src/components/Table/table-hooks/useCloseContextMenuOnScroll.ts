import React, { useCallback, useEffect, useRef } from 'react';

interface UseCloseContextMenuOnScrollOptions {
  /** Порог вертикального скролла для закрытия (в пикселях) */
  scrollThreshold?: number;
}

/**
 * Закрывает контекстное меню при вертикальном скролле таблицы (колёсиком).
 *
 * Смотрим только на `scrollTop`: по оси X проскроллить с открытым меню можно
 * лишь внешним кликом, который и так закрывает меню.
 */
export const useCloseContextMenuOnScroll = (
  contextMenu: { isOpen: boolean; close: () => void },
  options: UseCloseContextMenuOnScrollOptions = {}
) => {
  const { scrollThreshold = 5 } = options;

  const lastScrollTopRef = useRef<number | null>(null);

  // Сбрасываем базовую точку при каждом открытии меню
  useEffect(() => {
    if (contextMenu.isOpen) {
      lastScrollTopRef.current = null;
    }
  }, [contextMenu.isOpen]);

  return useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      if (!contextMenu.isOpen) {
        return;
      }

      const { scrollTop } = event.currentTarget;

      if (lastScrollTopRef.current === null) {
        lastScrollTopRef.current = scrollTop;
        return;
      }

      if (Math.abs(lastScrollTopRef.current - scrollTop) > scrollThreshold) {
        contextMenu.close();
      }

      lastScrollTopRef.current = scrollTop;
    },
    [contextMenu, scrollThreshold]
  );
};
