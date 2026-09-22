import { useCallback, useRef } from 'react';

import { LOCAL_STORAGE_DEFAULT_KEY } from '../AiAgentPopup.constants';
import type {
  AiAgentPopupDragBoundary,
  AiAgentPopupStoredState,
} from '../AiAgentPopup.types';
import { validatePosition } from '../AiAgentPopup.utils';

/**
 * Хранение позиции и размера окна в localStorage. Читается один раз при
 * монтировании, сохранённая позиция зажимается в границы текущего вьюпорта
 * на случай, если окно браузера с прошлого раза изменилось.
 */
export const useStateStorage = (
  useStorage: boolean | string | undefined,
  dragBoundary?: AiAgentPopupDragBoundary,
) => {
  const storageKey =
    typeof useStorage === 'string' ? useStorage : LOCAL_STORAGE_DEFAULT_KEY;

  const loadState = useCallback((): AiAgentPopupStoredState | null => {
    if (!useStorage) return null;
    try {
      const data = localStorage.getItem(storageKey);
      if (!data) return null;

      const parsed = JSON.parse(data) as AiAgentPopupStoredState;
      if (!parsed || typeof parsed !== 'object') return null;

      return {
        position: parsed.position
          ? validatePosition(parsed.position, parsed.size, dragBoundary)
          : undefined,
        size: parsed.size,
      };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('AiAgentPopup: failed to load state:', e);
      return null;
    }
  }, [useStorage, storageKey, dragBoundary]);

  const saveState = useCallback(
    (state: AiAgentPopupStoredState) => {
      if (!useStorage) return;
      try {
        localStorage.setItem(storageKey, JSON.stringify(state));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('AiAgentPopup: failed to save state:', e);
      }
    },
    [useStorage, storageKey],
  );

  const savedStateRef = useRef<AiAgentPopupStoredState | null | undefined>(
    undefined,
  );
  if (savedStateRef.current === undefined) {
    savedStateRef.current = loadState();
  }

  return {
    savedState: savedStateRef.current,
    saveState,
  };
};
