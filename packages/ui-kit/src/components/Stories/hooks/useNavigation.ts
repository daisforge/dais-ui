import { PointerEvent as ReactPointerEvent, useEffect, useRef } from 'react';

import { StoriesController } from '../Stories.types';

export interface UseNavigationParams {
  controller: StoriesController;
  /** Порог удержания для паузы, мс. */
  pauseHoldDelay: number;
  /** Доля ширины слева под переход к предыдущему сегменту. */
  tapPrevZone: number;
  /** Вьюер открыт (нужно ли слушать клавиши). */
  isOpen: boolean;
}

export interface TapHandlers {
  onPointerDown: (event: ReactPointerEvent) => void;
  onPointerUp: (event: ReactPointerEvent) => void;
  onPointerLeave: (event: ReactPointerEvent) => void;
  onPointerCancel: (event: ReactPointerEvent) => void;
}

/**
 * Навигация по контенту:
 * - короткий тап по левой ⅓ / правой ⅔ баннера → предыдущий/следующий сегмент;
 * - удержание дольше `pauseHoldDelay` → пауза, отпускание → возобновление;
 * - стрелки клавиатуры ←/→ зеркалят тап.
 * Всё на pointer-событиях — работает и с мышью, и с тач/тачпадом.
 */
export const useNavigation = ({
  controller,
  pauseHoldDelay,
  tapPrevZone,
  isOpen,
}: UseNavigationParams): TapHandlers => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const pausedByHoldRef = useRef(false);
  const zoneRef = useRef<'prev' | 'next'>('next');

  const clearTimer = (): void => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }
  };

  const onPointerDown = (event: ReactPointerEvent): void => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = rect.width > 0 ? (event.clientX - rect.left) / rect.width : 1;
    zoneRef.current = ratio < tapPrevZone ? 'prev' : 'next';

    pausedByHoldRef.current = false;
    clearTimer();
    timerRef.current = setTimeout(() => {
      pausedByHoldRef.current = true;
      controller.pause();
    }, pauseHoldDelay);
  };

  const onPointerUp = (): void => {
    clearTimer();
    if (pausedByHoldRef.current) {
      pausedByHoldRef.current = false;
      controller.resume();
      return;
    }
    if (zoneRef.current === 'prev') {
      controller.prev();
    } else {
      controller.next();
    }
  };

  // Указатель ушёл/отменён во время удержания — снимаем паузу, но не навигируем.
  const onPointerLeave = (): void => {
    clearTimer();
    if (pausedByHoldRef.current) {
      pausedByHoldRef.current = false;
      controller.resume();
    }
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        controller.prev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        controller.next();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        controller.close();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, controller]);

  return {
    onPointerDown,
    onPointerUp,
    onPointerLeave,
    onPointerCancel: onPointerLeave,
  };
};
