import React, { useEffect, useRef } from 'react';

import { useLeftSidebar, useRightSidebar } from '../../../contexts';
import { SIDEBAR_DURATION } from '../../../feature-sidebar/constants';

export const useMassActionsSidebar = (values: {
  isCollapsed: boolean;
  isHaveSomeFeatureInSidebar?: boolean;
  rightSidebarWidth?: string | number;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  calculatePositionForState: (targetCollapsed: boolean) => number | undefined;
  calculatePosition: () => void;
  calculateCompression: () => void;
  setTranslateX: React.Dispatch<React.SetStateAction<number | undefined>>;
  shouldApplySidebarOffsetRef: React.MutableRefObject<boolean>;
}) => {
  const rightSidebar = useRightSidebar();
  const leftSidebar = useLeftSidebar();
  // Скрытая правая оболочка не должна сворачивать массовые действия.
  const rightIsOpen =
    (values.isHaveSomeFeatureInSidebar ?? true) && rightSidebar.isOpen;
  const leftIsOpen = leftSidebar.isOpen;
  const isSidebarOpen = rightIsOpen || leftIsOpen;
  const rightSidebarWidth = rightSidebar.width;
  const wasAutoCollapsedRef = useRef(false);
  // Отложенные измерения используют текущие callbacks и состояние после рендера.
  const valuesRef = useRef(values);
  valuesRef.current = values;

  // Учитываем каждую сторону отдельно: открытие второй панели тоже меняет ширину canvas.
  useEffect(() => {
    const {
      isCollapsed,
      setIsCollapsed,
      calculatePositionForState,
      calculatePosition,
      calculateCompression,
      setTranslateX,
      shouldApplySidebarOffsetRef,
    } = valuesRef.current;
    // Пока открыта хотя бы одна боковая панель, массовые действия остаются свёрнутыми.
    const targetCollapsed = rightIsOpen || leftIsOpen;
    if (targetCollapsed === isCollapsed) {
      shouldApplySidebarOffsetRef.current = targetCollapsed;
      calculatePosition();
      calculateCompression();
    } else {
      wasAutoCollapsedRef.current = targetCollapsed;
      shouldApplySidebarOffsetRef.current = targetCollapsed;
      // Задаём позицию до смены состояния, чтобы положение и размер менялись вместе.
      const newTranslateX = calculatePositionForState(targetCollapsed);
      if (newTranslateX !== undefined) setTranslateX(newTranslateX);
      setIsCollapsed(targetCollapsed);
    }

    // Повторяем оба измерения после перехода, отменяя прежний таймер при смене панелей.
    const timeoutId = setTimeout(() => {
      valuesRef.current.calculatePosition();
      valuesRef.current.calculateCompression();
    }, SIDEBAR_DURATION * 1000 + 50);
    return () => clearTimeout(timeoutId);
  }, [
    rightIsOpen,
    leftIsOpen,
    rightSidebarWidth,
    values.rightSidebarWidth,
    leftSidebar.width,
  ]);

  return {
    isSidebarOpen,
    sidebarWidth: rightSidebarWidth,
    wasAutoCollapsedRef,
  };
};
