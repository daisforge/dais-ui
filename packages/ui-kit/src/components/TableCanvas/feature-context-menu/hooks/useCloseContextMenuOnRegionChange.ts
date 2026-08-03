import { useCallback, useEffect, useRef } from 'react';

import { TableGlideInstanceProps } from '../../TableGlideInstance/type';
import { ObjectForExtending } from '../../types';

interface UseCloseContextMenuOnRegionChangeOptions {
  /** Порог вертикального скролла для закрытия (в пикселях) */
  scrollThreshold?: number;
}

/**
 * Закрывает контекстное меню при вертикальном скролле таблицы (колёсиком).
 *
 * Смотрим только на `ty`: по оси X проскроллить с открытым меню можно лишь
 * внешним кликом, который и так закрывает меню, поэтому горизонтальные
 * изменения региона игнорируем.
 */
export function useCloseContextMenuOnRegionChange<
  RowType extends ObjectForExtending,
  SummaryRowType,
>(
  contextMenu: { isOpen: boolean; close: () => void },
  options: UseCloseContextMenuOnRegionChangeOptions = {},
) {
  const { scrollThreshold = 5 } = options;

  const lastTyRef = useRef<number | null>(null);

  // Сбрасываем базовую точку при каждом открытии меню
  useEffect(() => {
    if (contextMenu.isOpen) {
      lastTyRef.current = null;
    }
  }, [contextMenu.isOpen]);

  return useCallback<
    NonNullable<
      TableGlideInstanceProps<RowType, SummaryRowType>['onVisibleRegionChanged']
    >
  >(
    (_range, _tx, ty) => {
      if (!contextMenu.isOpen) {
        return;
      }

      if (ty === 0) {
        lastTyRef.current = 0;
        return;
      }

      if (lastTyRef.current === null) {
        lastTyRef.current = ty;
        return;
      }

      if (Math.abs(lastTyRef.current - ty) > scrollThreshold) {
        contextMenu.close();
      }

      lastTyRef.current = ty;
    },
    [contextMenu, scrollThreshold],
  );
}
