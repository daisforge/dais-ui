/* eslint-disable no-lonely-if */
import React, { useEffect, useRef } from 'react';

import { ANIMATION_COMPLETE_DELAY } from '../constants';
import type { MassActionsSidebarConfig } from '../types';

/**
 * Хук для взаимодействия панели с сайдбаром
 */
export const useMassActionsSidebar = ({
  isCollapsed,
  setIsCollapsed,
  calculatePositionForState,
  calculatePosition,
  setTranslateX,
  shouldApplySidebarOffsetRef,
  sidebarConfig,
  getContainerWidth
}: {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  calculatePositionForState: (targetCollapsed: boolean) => number | undefined;
  calculatePosition: () => void;
  setTranslateX: React.Dispatch<React.SetStateAction<number | undefined>>;
  shouldApplySidebarOffsetRef: React.MutableRefObject<boolean>;
  sidebarConfig?: MassActionsSidebarConfig;
  getContainerWidth: () => number;
}) => {
  const isSidebarOpen = sidebarConfig?.isOpen ?? false;
  const sidebarWidth = sidebarConfig?.width ?? 0;

  // Флаг для отслеживания автоматического сворачивания при открытии сайдбара
  const wasAutoCollapsedRef = useRef(false);
  // Отслеживаем предыдущее состояние сайдбара для определения изменения
  const prevSidebarOpenRef = useRef(isSidebarOpen);

  // Логика взаимодействия с сайдбаром
  useEffect(() => {
    // Если сайдбар не настроен, ничего не делаем
    if (!sidebarConfig) {
      return;
    }

    const prevSidebarOpen = prevSidebarOpenRef.current;
    const sidebarStateChanged = prevSidebarOpen !== isSidebarOpen;

    // Обновляем ref для следующего рендера
    prevSidebarOpenRef.current = isSidebarOpen;

    // ВАЖНО: реагируем только на ИЗМЕНЕНИЕ состояния сайдбара
    if (!sidebarStateChanged) {
      // Если состояние не изменилось, просто пересчитываем позицию
      calculatePosition();
      return;
    }

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
        }, ANIMATION_COMPLETE_DELAY);
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
        }, ANIMATION_COMPLETE_DELAY);
      } else {
        // Панель уже была развернута - просто убираем смещение и пересчитываем позицию
        shouldApplySidebarOffsetRef.current = false;
        calculatePosition();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSidebarOpen, sidebarWidth, getContainerWidth]);

  return {
    isSidebarOpen,
    sidebarWidth,
    wasAutoCollapsedRef
  };
};
