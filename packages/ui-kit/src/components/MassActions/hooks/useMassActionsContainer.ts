import { createSafeResizeObserver } from '@ui-kit/utils';
import {
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';

/**
 * Хук для работы с контейнером панели массовых действий
 * Вешает ResizeObserver на контейнер и возвращает его размеры
 */
export const useMassActionsContainer = (
  containerRef:
    | RefObject<HTMLElement>
    | MutableRefObject<HTMLElement | null>
    | (() => HTMLElement | null),
) => {
  const [containerWidth, setContainerWidth] = useState<number>(0);

  // Функция для получения элемента контейнера
  const getContainer = useCallback(() => {
    if (typeof containerRef === 'function') {
      return containerRef();
    }
    return containerRef.current;
  }, [containerRef]);

  // Функция для получения ширины контейнера
  const getContainerWidth = useCallback(() => {
    const container = getContainer();
    if (!container) {
      return 0;
    }
    return container.getBoundingClientRect().width;
  }, [getContainer]);

  // ResizeObserver для отслеживания изменения размеров контейнера
  useEffect(() => {
    const container = getContainer();
    if (!container) {
      return undefined;
    }

    // Инициализируем начальную ширину
    setContainerWidth(container.getBoundingClientRect().width);

    const resizeObserver = createSafeResizeObserver((entries) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const entry of entries) {
        const { width } = entry.contentRect;
        setContainerWidth(width);
      }
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [getContainer]);

  return {
    containerWidth,
    getContainerWidth,
    getContainer,
  };
};
