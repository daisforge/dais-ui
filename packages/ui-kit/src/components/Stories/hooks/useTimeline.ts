import { RefObject, useEffect, useRef } from 'react';

export interface UseTimelineParams {
  /** Элемент-заливка активного индикатора: его `transform: scaleX()` двигается кадрами. */
  fillRef: RefObject<HTMLElement>;
  /** Вьюер открыт и этот сегмент — активный. */
  active: boolean;
  /** Длительность активного сегмента, мс. */
  duration: number;
  /** Идёт ли проигрывание (false на паузе). */
  isPlaying: boolean;
  /** Ассет активного сегмента загружен (иначе таймер стоит — крутится спиннер). */
  isReady: boolean;
  /** Ключ сброса: при смене группы/сегмента прогресс обнуляется. */
  resetKey: string;
  /** Сегмент доигран до конца. */
  onComplete: () => void;
}

const setFill = (el: HTMLElement | null, fraction: number): void => {
  if (el) {
    el.style.transform = `scaleX(${fraction})`;
  }
};

/**
 * Движок прогресса на requestAnimationFrame. Заполнение активного индикатора
 * пишется прямо в DOM (transform), в обход React — поэтому 60 кадров/сек не
 * вызывают ре-рендеров. Пауза/загрузка ассета замораживают накопленное время;
 * при возобновлении отсчёт продолжается с той же точки.
 */
export const useTimeline = ({
  fillRef,
  active,
  duration,
  isPlaying,
  isReady,
  resetKey,
  onComplete,
}: UseTimelineParams): void => {
  const elapsedRef = useRef(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Сброс прогресса при переключении сегмента/группы.
  useEffect(() => {
    elapsedRef.current = 0;
    setFill(fillRef.current, 0);
  }, [resetKey, fillRef]);

  useEffect(() => {
    if (!active || !isPlaying || !isReady || duration <= 0) {
      return undefined;
    }

    let raf = 0;
    let last = performance.now();

    const tick = (now: number): void => {
      elapsedRef.current += now - last;
      last = now;

      const fraction = Math.min(1, elapsedRef.current / duration);
      setFill(fillRef.current, fraction);

      if (fraction >= 1) {
        onCompleteRef.current();
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, isPlaying, isReady, duration, resetKey, fillRef]);
};
