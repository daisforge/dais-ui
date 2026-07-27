import { useEffect, useRef, useState } from 'react';

type DocWithStartTransition = {
  startViewTransition?: (cb: () => void) => void;
};

/**
 * Хук для управления видимостью панели массовых действий
 * Использует View Transition API для плавной анимации появления/исчезновения
 */
export const useMassActionsVisibility = (selectedCount: number) => {
  const prevSelectedCountRef = useRef(selectedCount);
  const [isVisible, setIsVisible] = useState(selectedCount > 0);

  // Анимация появления/исчезновения через View Transition API
  useEffect(() => {
    const prevCount = prevSelectedCountRef.current;
    const isAppearing = prevCount === 0 && selectedCount > 0;
    const isDisappearing = prevCount > 0 && selectedCount === 0;

    if (isAppearing || isDisappearing) {
      const updateVisibility = () => {
        setIsVisible(selectedCount > 0);
      };

      // Использую View Transition API если доступен
      if ((document as DocWithStartTransition).startViewTransition) {
        (document as DocWithStartTransition).startViewTransition?.(
          updateVisibility
        );
      } else {
        updateVisibility();
      }
    } else {
      setIsVisible(selectedCount > 0);
    }

    prevSelectedCountRef.current = selectedCount;
  }, [selectedCount]);

  return isVisible;
};
