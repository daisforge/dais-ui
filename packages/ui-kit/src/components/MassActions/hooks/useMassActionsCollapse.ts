import React, { useCallback } from 'react';

import { ANIMATION_COMPLETE_DELAY } from '../constants';

/**
 * Хук для управления сворачиванием/разворачиванием панели
 */
export const useMassActionsCollapse = ({
  isCollapsed,
  setIsCollapsed,
  isSidebarOpen,
  calculatePositionForState,
  calculatePosition,
  setTranslateX,
  shouldApplySidebarOffsetRef,
  wasAutoCollapsedRef,
}: {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  calculatePositionForState: (targetCollapsed: boolean) => number | undefined;
  calculatePosition: () => void;
  setTranslateX: React.Dispatch<React.SetStateAction<number | undefined>>;
  shouldApplySidebarOffsetRef: React.MutableRefObject<boolean>;
  wasAutoCollapsedRef: React.MutableRefObject<boolean>;
}) => {
  // Обработчик сворачивания/разворачивания панели
  const handleToggleCollapse = useCallback(() => {
    const newCollapsedState = !isCollapsed;

    // Вычисляем и устанавливаем позицию для будущего состояния ДО изменения collapse,
    // чтобы CSS transition анимировал размер и позицию одновременно
    const newTranslateX = calculatePositionForState(newCollapsedState);
    if (newTranslateX !== undefined) {
      setTranslateX(newTranslateX);
    }

    // Обновляем флаги для сайдбара
    if (isSidebarOpen) {
      if (newCollapsedState) {
        shouldApplySidebarOffsetRef.current = true;
      } else {
        shouldApplySidebarOffsetRef.current = false;
        wasAutoCollapsedRef.current = false;
      }
    }

    // Изменяем состояние collapse - CSS transition анимирует все изменения плавно одновременно
    setIsCollapsed(newCollapsedState);

    // После завершения анимации уточняем позицию (на случай погрешностей)
    setTimeout(() => {
      calculatePosition();
    }, ANIMATION_COMPLETE_DELAY);
  }, [
    isCollapsed,
    isSidebarOpen,
    calculatePositionForState,
    calculatePosition,
    setTranslateX,
    shouldApplySidebarOffsetRef,
    wasAutoCollapsedRef,
    setIsCollapsed,
  ]);

  return {
    handleToggleCollapse,
  };
};
