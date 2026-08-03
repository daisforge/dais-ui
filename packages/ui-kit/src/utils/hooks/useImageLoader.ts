import { useCallback, useEffect, useRef, useState } from 'react';

export type ImageLoaderStatus = 'idle' | 'loading' | 'loaded' | 'error';

/**
 * Общий кэш результатов загрузки по URL. Один раз загруженная (или упавшая)
 * картинка не грузится повторно — важно для предзагрузки соседних ассетов.
 */
const cache = new Map<string, 'loaded' | 'error'>();

/**
 * Императивная предзагрузка изображения вне React-дерева. Заполняет общий кэш,
 * поэтому последующий `useImageLoader(src)` отдаёт статус мгновенно.
 * Промис резолвится и на успехе, и на ошибке (никогда не реджектится) —
 * удобно для `Promise.all` по группе ассетов.
 */
export const preloadImage = (src?: string): Promise<void> => {
  if (!src || cache.get(src) === 'loaded') {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => {
      cache.set(src, 'loaded');
      resolve();
    };
    img.onerror = () => {
      cache.set(src, 'error');
      resolve();
    };
    img.src = src;
  });
};

export interface UseImageLoaderResult {
  status: ImageLoaderStatus;
  isLoading: boolean;
  isLoaded: boolean;
  isError: boolean;
  /** Повторить загрузку (сбрасывает кэш по этому URL). */
  reload: () => void;
}

/**
 * Асинхронно загружает изображение по URL и отдаёт его статус.
 * Пока `loading` — потребитель показывает плейсхолдер/спиннер; на `loaded`
 * рендерит картинку; на `error` — свой error-state. Результат кэшируется между
 * вызовами (см. `preloadImage`); `reload()` сбрасывает кэш и пробует снова.
 * `delayMs` откладывает применение результата (для демо/тестов состояния загрузки).
 */
export const useImageLoader = (
  src?: string,
  delayMs = 0,
): UseImageLoaderResult => {
  const [status, setStatus] = useState<ImageLoaderStatus>(() => {
    if (!src) return 'idle';
    return cache.get(src) ?? 'loading';
  });
  const [attempt, setAttempt] = useState(0);

  // Актуальный src, чтобы отсеять «догнавшие» коллбэки уже неактуальной картинки.
  const srcRef = useRef(src);
  srcRef.current = src;

  const reload = useCallback(() => {
    if (src) cache.delete(src);
    setAttempt((value) => value + 1);
  }, [src]);

  useEffect(() => {
    if (!src) {
      setStatus('idle');
      return undefined;
    }

    const cached = cache.get(src);
    if (cached) {
      setStatus(cached);
      return undefined;
    }

    let active = true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    setStatus('loading');

    const finish = (result: 'loaded' | 'error'): void => {
      cache.set(src, result);
      const apply = (): void => {
        if (active && srcRef.current === src) setStatus(result);
      };
      if (delayMs > 0) {
        timer = setTimeout(apply, delayMs);
      } else {
        apply();
      }
    };

    const img = new Image();
    img.onload = () => finish('loaded');
    img.onerror = () => finish('error');
    img.src = src;

    return () => {
      active = false;
      if (timer) clearTimeout(timer);
    };
  }, [src, attempt, delayMs]);

  return {
    status,
    isLoading: status === 'loading',
    isLoaded: status === 'loaded',
    isError: status === 'error',
    reload,
  };
};
