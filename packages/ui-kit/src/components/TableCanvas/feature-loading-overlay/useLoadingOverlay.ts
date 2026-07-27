import { useEffect, useState } from 'react';

interface LoadingOverlayState {
  showOverlay: boolean; // показывается сразу при active=true
  showSubtitle: boolean; // появляется после задержки
  elapsedTime: number;
}

export const useLoadingOverlay = (config: {
  active: boolean;
  showSubtitleDelay?: number;
}): LoadingOverlayState => {
  const { active, showSubtitleDelay = 10000 } = config;

  const [state, setState] = useState<LoadingOverlayState>({
    showOverlay: false,
    showSubtitle: false,
    elapsedTime: 0
  });

  useEffect(() => {
    if (!active) {
      setState({
        showOverlay: false,
        showSubtitle: false,
        elapsedTime: 0
      });
      return undefined;
    }

    // Показываем оверлей МГНОВЕННО
    setState({
      showOverlay: true,
      showSubtitle: false,
      elapsedTime: 0
    });

    const startTime = Date.now();

    // Таймер для подзаголовка
    const subtitleTimeout = setTimeout(() => {
      setState((prev) => ({
        ...prev,
        showSubtitle: true
      }));
    }, showSubtitleDelay);

    // Таймер для секундомера
    const intervalId = setInterval(() => {
      setState((prev) => ({
        ...prev,
        elapsedTime: Math.floor((Date.now() - startTime) / 1000)
      }));
    }, 1000);

    const cleanup = () => {
      clearTimeout(subtitleTimeout);
      clearInterval(intervalId);
    };

    return cleanup;
  }, [active, showSubtitleDelay]);

  return state;
};
