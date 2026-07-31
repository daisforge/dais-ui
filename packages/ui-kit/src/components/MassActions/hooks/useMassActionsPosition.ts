/* eslint-disable no-console */
/* eslint-disable no-lonely-if */
import React, { useCallback, useRef } from 'react';

import {
  ACTION_BUTTON_WIDTH_ESTIMATE,
  COLLAPSE_BUTTON_WIDTH,
  COUNTER_WIDTH_ESTIMATE,
  MIN_PANEL_PADDING,
  PANEL_PADDING_COLLAPSED,
  PANEL_PADDING_EXPANDED,
  RESET_BUTTON_WIDTH_ESTIMATE,
  TOGGLE_SIDEBAR_PANEL_WIDTH,
} from '../constants';
import type { MassActionsSidebarConfig } from '../types';

/**
 * Обобщенный хук для позиционирования панели массовых действий
 * Не зависит от контекстов таблицы - все данные передаются явно
 */
export const useMassActionsPosition = ({
  containerRef,
  collapseButtonRef,
  leftSectionRef,
  getContainerWidth,
  isHaveSomeFeatureInSidebar,
  sidebarConfig,
  visibleButtonsCount,
  setTranslateX,
  minPadding = MIN_PANEL_PADDING,
  enableDebugLogs = false,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  collapseButtonRef: React.RefObject<HTMLDivElement | null>;
  leftSectionRef: React.RefObject<HTMLDivElement>;
  getContainerWidth: () => number;
  isHaveSomeFeatureInSidebar: boolean;
  sidebarConfig?: MassActionsSidebarConfig;
  visibleButtonsCount: number;
  setTranslateX: React.Dispatch<React.SetStateAction<number | undefined>>;
  minPadding?: number;
  enableDebugLogs?: boolean;
}) => {
  const isSidebarOpen = sidebarConfig?.isOpen ?? false;
  const sidebarWidth = sidebarConfig?.width ?? 0;
  const toggleSidebarPanelWidth =
    sidebarConfig?.togglePanelWidth ?? TOGGLE_SIDEBAR_PANEL_WIDTH;

  const shouldApplySidebarOffsetRef = useRef(false);

  // Упрощенная функция для расчета позиции панели для будущего состояния
  // Панель всегда центрируется, смещение только для сайдбара
  // Учитываем ограничение по левой границе
  const calculatePositionForState = useCallback(
    (targetCollapsed: boolean) => {
      const tableWidth = getContainerWidth();
      if (!tableWidth || tableWidth === 0) {
        return undefined;
      }

      // Рассчитываем идеальное смещение для центрирования
      const totalSidebarWidth = sidebarWidth + toggleSidebarPanelWidth;
      const sidebarOffset = isSidebarOpen ? totalSidebarWidth / 2 : 0;
      const togglePanelOffset = isHaveSomeFeatureInSidebar
        ? toggleSidebarPanelWidth / 2
        : 0;
      let translateXValue = -(sidebarOffset + togglePanelOffset);

      // Приблизительная ширина панели для целевого состояния
      let estimatedPanelWidth: number;
      if (targetCollapsed) {
        const leftSectionWidth =
          leftSectionRef?.current?.getBoundingClientRect().width ??
          COUNTER_WIDTH_ESTIMATE;
        const collapseButtonWidth =
          collapseButtonRef.current?.getBoundingClientRect().width ??
          COLLAPSE_BUTTON_WIDTH;
        const collapsedPadding =
          PANEL_PADDING_COLLAPSED.top +
          PANEL_PADDING_COLLAPSED.right +
          PANEL_PADDING_COLLAPSED.left;
        estimatedPanelWidth =
          leftSectionWidth + collapseButtonWidth + collapsedPadding;
      } else {
        // Используем реальную ширину если есть, иначе приблизительную
        if (containerRef.current) {
          estimatedPanelWidth =
            containerRef.current.getBoundingClientRect().width;
        } else {
          const buttonsWidth =
            visibleButtonsCount * ACTION_BUTTON_WIDTH_ESTIMATE;
          const expandedPadding =
            PANEL_PADDING_EXPANDED.top +
            PANEL_PADDING_EXPANDED.right +
            PANEL_PADDING_EXPANDED.left;
          estimatedPanelWidth =
            COUNTER_WIDTH_ESTIMATE +
            RESET_BUTTON_WIDTH_ESTIMATE +
            COLLAPSE_BUTTON_WIDTH +
            buttonsWidth +
            expandedPadding;
        }
      }

      // Проверяем ограничение по левой границе
      const tableCenter = tableWidth / 2;
      const leftEdgePosition =
        tableCenter - estimatedPanelWidth / 2 + translateXValue;

      if (leftEdgePosition < minPadding) {
        translateXValue = minPadding - (tableCenter - estimatedPanelWidth / 2);
      }

      return translateXValue;
    },
    [
      getContainerWidth,
      containerRef,
      collapseButtonRef,
      leftSectionRef,
      isHaveSomeFeatureInSidebar,
      isSidebarOpen,
      sidebarWidth,
      toggleSidebarPanelWidth,
      visibleButtonsCount,
      minPadding,
    ],
  );

  // Упрощенная функция для расчета позиции панели
  // Панель всегда центрируется, смещение нужно только для учета сайдбара
  // Но если панель уходит за левую границу - ограничиваем смещение
  const calculatePosition = useCallback(() => {
    const tableWidth = getContainerWidth();
    if (!tableWidth || tableWidth === 0 || !containerRef.current) {
      return;
    }

    if (enableDebugLogs) {
      console.group('📍 MassActions Position');
    }

    // Если сайдбар открыт, смещаем панель влево на половину ширины сайдбара
    // чтобы центрировать относительно доступного пространства
    const totalSidebarWidth = sidebarWidth + toggleSidebarPanelWidth;
    const sidebarOffset = isSidebarOpen ? totalSidebarWidth / 2 : 0;
    const togglePanelOffset = isHaveSomeFeatureInSidebar
      ? toggleSidebarPanelWidth / 2
      : 0;

    // Идеальное смещение: влево на половину ширины всех элементов слева
    let translateXValue = -(sidebarOffset + togglePanelOffset);

    // Получаем реальную ширину панели
    const panelWidth = containerRef.current.getBoundingClientRect().width;

    // Проверяем, не уходит ли панель за левую границу контейнера
    // Центр контейнера: tableWidth / 2
    // Позиция левого края панели: tableWidth / 2 - panelWidth / 2 + translateXValue
    const tableCenter = tableWidth / 2;
    const leftEdgePosition = tableCenter - panelWidth / 2 + translateXValue;

    // Если панель уходит за левую границу (с учетом минимального отступа)
    if (leftEdgePosition < minPadding) {
      // Ограничиваем смещение так, чтобы панель оставалась в пределах контейнера
      // Нужное смещение: minPadding - (tableCenter - panelWidth / 2)
      translateXValue = minPadding - (tableCenter - panelWidth / 2);
    }

    if (enableDebugLogs) {
      console.log(
        '🎯 Позиционирование:',
        JSON.stringify(
          {
            tableWidth,
            panelWidth,
            tableCenter,
            sidebarWidth,
            toggleSidebarPanelWidth,
            isSidebarOpen,
            isHaveSomeFeatureInSidebar,
            totalSidebarWidth,
            sidebarOffset,
            togglePanelOffset,
            idealTranslateX: -(sidebarOffset + togglePanelOffset),
            leftEdgePosition,
            minPadding,
            finalTranslateX: translateXValue,
            adjusted: leftEdgePosition < MIN_PANEL_PADDING,
          },
          null,
          2,
        ),
      );
      console.groupEnd();
    }

    setTranslateX(translateXValue);

    // Если сайдбар открыт, устанавливаем флаг для отслеживания смещения
    if (isSidebarOpen) {
      shouldApplySidebarOffsetRef.current = true;
    } else {
      shouldApplySidebarOffsetRef.current = false;
    }
  }, [
    getContainerWidth,
    containerRef,
    enableDebugLogs,
    sidebarWidth,
    toggleSidebarPanelWidth,
    isHaveSomeFeatureInSidebar,
    isSidebarOpen,
    setTranslateX,
    minPadding,
  ]);

  return {
    calculatePosition,
    calculatePositionForState,
    shouldApplySidebarOffsetRef,
  };
};
