/* eslint-disable no-lonely-if */
import React, { useCallback, useRef } from 'react';

import { useSidebar, useTableResizeObserverWidth } from '../../../contexts';

// Константы для позиционирования
const TOGGLE_SIDEBAR_PANEL_WIDTH = 44;
const MIN_PADDING = 24; // Минимальный отступ слева и справа

export const useMassActionsPosition = ({
  containerRef,
  collapseButtonRef,
  summaryCheckboxElRef,
  isCompact,
  isHaveSomeFeatureInSidebar,
  visibleButtonsCount,
  setTranslateX,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  collapseButtonRef: React.RefObject<HTMLDivElement | null>;
  summaryCheckboxElRef: React.RefObject<HTMLDivElement>;
  isCompact: boolean;
  isHaveSomeFeatureInSidebar: boolean;
  visibleButtonsCount: number;
  setTranslateX: React.Dispatch<React.SetStateAction<number | undefined>>;
}) => {
  const getTableContainerWidth = useTableResizeObserverWidth();
  const sidebar = useSidebar();
  const { isOpen: isSidebarOpen, width: sidebarWidth } = sidebar;
  const shouldApplySidebarOffsetRef = useRef(false);

  // Функция для расчета позиции панели для будущего состояния (collapsed/expanded)
  const calculatePositionForState = useCallback(
    (targetCollapsed: boolean) => {
      const tableWidth = getTableContainerWidth();
      if (!tableWidth || tableWidth === 0) {
        return undefined;
      }

      const totalSidebarWidth = sidebarWidth + TOGGLE_SIDEBAR_PANEL_WIDTH;
      const availableWidth =
        tableWidth -
        (isHaveSomeFeatureInSidebar ? TOGGLE_SIDEBAR_PANEL_WIDTH : 0) -
        (isSidebarOpen ? totalSidebarWidth : 0);

      // Вычисляем приблизительную ширину панели для целевого состояния
      let estimatedPanelWidth: number;
      if (targetCollapsed) {
        // Свернутое состояние: summaryCheckbox + collapseButton + padding
        const summaryCheckboxWidth =
          summaryCheckboxElRef?.current?.getBoundingClientRect().width ?? 90;
        const collapseButtonWidth =
          collapseButtonRef.current?.getBoundingClientRect().width ?? 24;
        const collapsedPadding = isCompact ? 16 + 24 : 8 + 16 + 24;
        estimatedPanelWidth =
          summaryCheckboxWidth + collapseButtonWidth + collapsedPadding;
      } else {
        // Развернутое состояние: используем текущую ширину или вычисляем на основе видимых кнопок
        if (containerRef.current) {
          estimatedPanelWidth =
            containerRef.current.getBoundingClientRect().width;
        } else {
          // Приблизительная ширина развернутой панели
          const summaryCheckboxWidth = 90;
          const resetButtonWidth = 110;
          const collapseButtonWidth = 24;
          const buttonsWidth = visibleButtonsCount * 100; // Приблизительно
          const expandedPadding = 12 + 16 + 24; // top + right + left
          estimatedPanelWidth =
            summaryCheckboxWidth +
            resetButtonWidth +
            collapseButtonWidth +
            buttonsWidth +
            expandedPadding;
        }
      }

      // Вычисляем центр доступной области
      const availableCenter = availableWidth / 2;

      // Вычисляем, где должен быть центр панели
      let targetCenter: number;

      // Если панель шире доступного пространства, центрируем относительно минимального отступа
      if (estimatedPanelWidth > availableWidth - MIN_PADDING * 2) {
        targetCenter = MIN_PADDING + estimatedPanelWidth / 2;
      } else {
        // Центрируем панель в доступной области
        targetCenter = availableCenter;

        // Проверяем минимальные отступы
        const leftPosition = targetCenter - estimatedPanelWidth / 2;
        if (leftPosition < MIN_PADDING) {
          targetCenter = MIN_PADDING + estimatedPanelWidth / 2;
        } else if (
          leftPosition + estimatedPanelWidth >
          availableWidth - MIN_PADDING
        ) {
          targetCenter = availableWidth - MIN_PADDING - estimatedPanelWidth / 2;
        }
      }

      // Вычисляем translateX: разница между центром таблицы и целевым центром панели
      const tableCenter = tableWidth / 2;
      const translateXValue = targetCenter - tableCenter;

      return translateXValue;
    },
    [
      getTableContainerWidth,
      isHaveSomeFeatureInSidebar,
      isSidebarOpen,
      sidebarWidth,
      visibleButtonsCount,
      containerRef,
      summaryCheckboxElRef,
      collapseButtonRef,
      isCompact,
    ],
  );

  // Функция для расчета позиции панели
  const calculatePosition = useCallback(() => {
    const tableWidth = getTableContainerWidth();
    if (!tableWidth || tableWidth === 0 || !containerRef.current) {
      return;
    }

    const totalSidebarWidth = sidebarWidth + TOGGLE_SIDEBAR_PANEL_WIDTH;

    // Вычисляем доступную ширину с учетом сайдбара, если он открыт
    const availableWidth =
      tableWidth -
      (isHaveSomeFeatureInSidebar ? TOGGLE_SIDEBAR_PANEL_WIDTH : 0) -
      (isSidebarOpen ? totalSidebarWidth : 0);

    const panelWidth = containerRef.current.getBoundingClientRect().width;

    // Вычисляем центр доступной области
    const availableCenter = availableWidth / 2;

    // Вычисляем, где должен быть центр панели
    let targetCenter: number;

    // Если панель шире доступного пространства, центрируем относительно минимального отступа
    if (panelWidth > availableWidth - MIN_PADDING * 2) {
      targetCenter = MIN_PADDING + panelWidth / 2;
    } else {
      // Центрируем панель в доступной области
      targetCenter = availableCenter;

      // Проверяем минимальные отступы
      const leftPosition = targetCenter - panelWidth / 2;
      if (leftPosition < MIN_PADDING) {
        targetCenter = MIN_PADDING + panelWidth / 2;
      } else if (leftPosition + panelWidth > availableWidth - MIN_PADDING) {
        targetCenter = availableWidth - MIN_PADDING - panelWidth / 2;
      }
    }

    // Вычисляем translateX: разница между центром таблицы и целевым центром панели
    const tableCenter = tableWidth / 2;
    const translateXValue = targetCenter - tableCenter;

    setTranslateX(translateXValue);

    // Если сайдбар открыт, устанавливаем флаг для отслеживания смещения
    if (isSidebarOpen) {
      shouldApplySidebarOffsetRef.current = true;
    } else {
      shouldApplySidebarOffsetRef.current = false;
    }
  }, [
    getTableContainerWidth,
    isHaveSomeFeatureInSidebar,
    isSidebarOpen,
    sidebarWidth,
    containerRef,
    setTranslateX,
  ]);

  return {
    calculatePosition,
    calculatePositionForState,
    shouldApplySidebarOffsetRef,
  };
};
