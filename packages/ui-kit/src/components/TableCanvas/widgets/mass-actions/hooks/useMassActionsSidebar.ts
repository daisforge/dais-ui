/* eslint-disable no-lonely-if */
import React, { useEffect, useRef } from 'react';

import { useSidebar, useTableResizeObserverWidth } from '../../../contexts';

export const useMassActionsSidebar = ({
  isCollapsed,
  setIsCollapsed,
  calculatePositionForState,
  calculatePosition,
  setTranslateX,
  shouldApplySidebarOffsetRef,
}: {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  calculatePositionForState: (targetCollapsed: boolean) => number | undefined;
  calculatePosition: () => void;
  setTranslateX: React.Dispatch<React.SetStateAction<number | undefined>>;
  shouldApplySidebarOffsetRef: React.MutableRefObject<boolean>;
}) => {
  const sidebar = useSidebar();
  const { isOpen: isSidebarOpen, width: sidebarWidth } = sidebar;
  const getTableContainerWidth = useTableResizeObserverWidth();
  // Флаг для отслеживания автоматического сворачивания при открытии сайдбара
  const wasAutoCollapsedRef = useRef(false);

  // Логика взаимодействия с сайдбаром
  useEffect(() => {
    if (isSidebarOpen) {
      // Сайдбар открылся
      if (!isCollapsed) {
        // Если панель была развернута - сворачиваем её автоматически
        wasAutoCollapsedRef.current = true;

        // Сначала вычисляем и устанавливаем позицию для свернутого состояния,
        // затем сворачиваем панель - CSS transition анимирует все изменения одновременно
        const newTranslateX = calculatePositionForState(true);
        if (newTranslateX !== undefined) {
          setTranslateX(newTranslateX);
          shouldApplySidebarOffsetRef.current = true;
        }

        // Сворачиваем панель - CSS transition анимирует изменение размера и позиции плавно одновременно
        setIsCollapsed(true);

        // После завершения анимации уточняем позицию (на случай погрешностей)
        setTimeout(() => {
          calculatePosition();
        }, 550); // Немного больше времени анимации (300ms + запас)
      } else {
        // Панель уже свернута - применяем смещение с учетом сайдбара
        calculatePosition();
      }
    } else {
      // Сайдбар закрылся
      // Если панель была свернута (автоматически или вручную) - всегда раскрываем её
      if (isCollapsed) {
        wasAutoCollapsedRef.current = false;
        shouldApplySidebarOffsetRef.current = false;

        // Сначала вычисляем и устанавливаем позицию для развернутого состояния,
        // затем раскрываем панель - CSS transition анимирует все изменения одновременно
        const newTranslateX = calculatePositionForState(false);
        if (newTranslateX !== undefined) {
          setTranslateX(newTranslateX);
        }

        // Раскрываем панель - CSS transition анимирует изменение размера и позиции плавно одновременно
        setIsCollapsed(false);

        // После завершения анимации уточняем позицию
        setTimeout(() => {
          calculatePosition();
        }, 550); // Немного больше времени анимации (300ms + запас)
      } else {
        // Панель уже была развернута - просто убираем смещение и пересчитываем позицию
        shouldApplySidebarOffsetRef.current = false;
        calculatePosition();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSidebarOpen, sidebarWidth, getTableContainerWidth]);

  return {
    isSidebarOpen,
    sidebarWidth,
    wasAutoCollapsedRef,
  };
};
