import { useCallback, useRef } from 'react';

import { LOCAL_STORAGE_DEFAULT_KEY } from '../AiAgentPopup.constants';
import type {
  AiAgentPopupPosition,
  AiAgentPopupSize,
  AiAgentPopupStoredState,
} from '../AiAgentPopup.types';

const isValidPosition = (position: unknown): position is AiAgentPopupPosition =>
  !!position &&
  typeof (position as AiAgentPopupPosition).x === 'number' &&
  typeof (position as AiAgentPopupPosition).y === 'number';

const isValidSize = (size: unknown): size is AiAgentPopupSize =>
  !!size &&
  typeof (size as AiAgentPopupSize).width === 'number' &&
  typeof (size as AiAgentPopupSize).height === 'number';

/**
 * Хранение позиции и размера окна в localStorage. Читается один раз при
 * монтировании. Позиция возвращается как есть: в границы области её
 * зажимает usePopupPosition, когда знает настоящие метрики области
 * и размер отрендеренного окна.
 */
export const useStateStorage = (useStorage: boolean | string | undefined) => {
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
        position: isValidPosition(parsed.position)
          ? parsed.position
          : undefined,
        size: isValidSize(parsed.size) ? parsed.size : undefined,
      };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('AiAgentPopup: failed to load state:', e);
      return null;
    }
  }, [useStorage, storageKey]);

  // Запись мержится с уже сохранённым: не заданные поля не затираются.
  // Иначе при внешнем управлении позицией (positionState) запись размера
  // стирала бы сохранённую ранее позицию
  const saveState = useCallback(
    (state: AiAgentPopupStoredState) => {
      if (!useStorage) return;
      try {
        const prevRaw = localStorage.getItem(storageKey);
        const prev: AiAgentPopupStoredState = prevRaw
          ? JSON.parse(prevRaw)
          : {};
        const next: AiAgentPopupStoredState = {
          position: state.position ?? prev.position,
          size: state.size ?? prev.size,
        };
        localStorage.setItem(storageKey, JSON.stringify(next));
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
