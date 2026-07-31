import { createSafeResizeObserver } from '@ui-kit/utils';
import React, { useEffect, useLayoutEffect } from 'react';

import { useTableResizeObserver } from '../../../contexts';
import { MassActionButtonProps } from '../types';

export const useMassActionsEffects = ({
  containerRef,
  buttonRefs,
  buttons,
  isVisible,
  isCollapsed,
  visibleButtonsCount,
  selectedCount,
  selectingRowsIsActive,
  setIsCollapsed,
  setVisibleButtonsCount,
  calculatePosition,
  calculateCompression,
  measuredButtonWidthsRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  buttonRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  buttons?: MassActionButtonProps[];
  isVisible: boolean;
  isCollapsed: boolean;
  visibleButtonsCount: number;
  selectedCount: number;
  selectingRowsIsActive: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  setVisibleButtonsCount: React.Dispatch<React.SetStateAction<number>>;
  calculatePosition: () => void;
  calculateCompression: () => void;
  measuredButtonWidthsRef: React.MutableRefObject<number[]>;
}) => {
  // Подписываемся на изменения размера контейнера таблицы
  useTableResizeObserver(() => {
    // Пересчитываем позицию (работает и в свернутом, и в развернутом режиме)
    calculatePosition();
    // Пересчитываем компрессию (только в развернутом режиме)
    calculateCompression();
  });

  // ResizeObserver для самой панели - пересчитывает позицию при изменении размера
  useLayoutEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const resizeObserver = createSafeResizeObserver(() => {
      calculatePosition();
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [calculatePosition, containerRef]);

  // Инициализируем refs для кнопок при изменении количества кнопок
  useEffect(() => {
    buttonRefs.current = Array(buttons?.length ?? 0).fill(null);
    // Сбрасываем видимое количество кнопок при изменении списка кнопок
    setVisibleButtonsCount(buttons?.length ?? 0);
    // Сбрасываем сохраненные ширины при изменении списка кнопок
    measuredButtonWidthsRef.current = [];
  }, [
    buttons?.length,
    buttonRefs,
    setVisibleButtonsCount,
    measuredButtonWidthsRef,
  ]);

  // Вызываем компрессию при первом появлении панели
  useEffect(() => {
    if (isVisible && !isCollapsed) {
      // Небольшая задержка для корректного измерения после рендера
      const timeoutId = setTimeout(() => {
        calculateCompression();
        calculatePosition();
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    }
    return undefined;
  }, [isVisible, isCollapsed, calculateCompression, calculatePosition]);

  // Позиционирование панели - работает и в свернутом, и в развернутом режиме
  useEffect(() => {
    // В свернутом режиме просто центрируем без компрессии
    if (isCollapsed) {
      calculatePosition();
      return;
    }

    // В развернутом режиме позиция пересчитывается через ResizeObserver панели
    // Но также пересчитываем при изменении количества видимых кнопок
    calculatePosition();
  }, [isCollapsed, visibleButtonsCount, calculatePosition]);

  // Размонтирование при пустом состоянии - сбрасываем стейт IsCollapsed
  useEffect(
    () => () => {
      if (!isVisible || selectedCount === 0 || !selectingRowsIsActive) {
        setIsCollapsed(false);
      }
    },
    [isVisible, selectedCount, selectingRowsIsActive, setIsCollapsed],
  );
};
