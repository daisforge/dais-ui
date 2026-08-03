import { useCallback, useMemo } from 'react';

import { LOCAL_STORAGE_DEFAULT_KEY } from '../AiAgentPopover.constants';
import { AiAgentPopoverDragBoundary } from '../AiAgentPopover.types';
import { validatePosition } from '../AiAgentPopover.utils';

export const usePositionStorage = (
  useStorage: boolean | string | undefined,
  initialPosition: { x: number; y: number },
  elementSize: { width: number; height: number },
  dragBoundary: AiAgentPopoverDragBoundary = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
) => {
  // Загрузка позиции из localStorage (только при монтировании)
  const loadPosition = useCallback(() => {
    if (!useStorage) return null;
    const key =
      typeof useStorage === 'string' ? useStorage : LOCAL_STORAGE_DEFAULT_KEY;
    try {
      const data = localStorage.getItem(key);
      if (!data) return null;

      const parsed = JSON.parse(data);
      return validatePosition(parsed, elementSize, {
        top: dragBoundary.top ?? 0,
        right: dragBoundary.right ?? 0,
        bottom: dragBoundary.bottom ?? 0,
        left: dragBoundary.left ?? 0,
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Failed to load position:', e);
      return null;
    }
  }, [dragBoundary, elementSize, useStorage]);

  // Сохранение позиции
  const savePosition = useCallback(
    (position: { x: number; y: number }) => {
      if (!useStorage) return;
      const key =
        typeof useStorage === 'string' ? useStorage : LOCAL_STORAGE_DEFAULT_KEY;
      try {
        localStorage.setItem(key, JSON.stringify(position));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Failed to save position:', e);
      }
    },
    [useStorage],
  );

  // Загружаем позицию только один раз при инициализации
  const savedPosition = useMemo(() => loadPosition(), [loadPosition]);

  return {
    savedPosition: savedPosition || initialPosition, // Fallback на initialPosition
    savePosition,
  };
};
