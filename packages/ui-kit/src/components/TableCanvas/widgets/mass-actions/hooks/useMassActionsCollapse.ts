import React, { useCallback, useEffect, useRef } from 'react';

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
  const positionRef = useRef(calculatePosition);
  positionRef.current = calculatePosition;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    },
    [],
  );

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
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      positionRef.current();
    }, 550);
  }, [
    isCollapsed,
    isSidebarOpen,
    calculatePositionForState,
    setTranslateX,
    shouldApplySidebarOffsetRef,
    wasAutoCollapsedRef,
    setIsCollapsed,
  ]);

  return {
    handleToggleCollapse,
  };
};
