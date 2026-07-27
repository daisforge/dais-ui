/* eslint-disable no-continue */
/* eslint-disable no-lonely-if */
import React, { useCallback, useRef } from 'react';

import { useTableResizeObserverWidth } from '../../../contexts';
import { MassActionButtonProps } from '../types';

// Константы для позиционирования
const TOGGLE_SIDEBAR_PANEL_WIDTH = 44;
const MIN_PADDING = 24; // Минимальный отступ слева и справа

export const useMassActionsCompression = ({
  isCollapsed,
  containerRef,
  contentRef,
  resetButtonRef,
  buttonRefs,
  moreButtonRef,
  collapseButtonRef,
  summaryCheckboxElRef,
  buttons,
  isHaveSomeFeatureInSidebar,
  setVisibleButtonsCount
}: {
  isCollapsed: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  resetButtonRef: React.RefObject<HTMLDivElement>;
  buttonRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  moreButtonRef: React.RefObject<HTMLDivElement | null>;
  collapseButtonRef: React.RefObject<HTMLDivElement | null>;
  summaryCheckboxElRef: React.RefObject<HTMLDivElement>;
  buttons?: MassActionButtonProps[];
  isHaveSomeFeatureInSidebar: boolean;
  setVisibleButtonsCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const getTableContainerWidth = useTableResizeObserverWidth();
  // Сохраняем измеренные ширины всех кнопок для использования при компрессии
  const measuredButtonWidthsRef = useRef<number[]>([]);

  // Функция для расчета компрессии кнопок
  const calculateCompression = useCallback(() => {
    if (isCollapsed || !containerRef.current || !contentRef.current) {
      // В свернутом режиме не выполняем компрессию
      return;
    }

    // Использую requestAnimationFrame для корректного измерения после рендера
    requestAnimationFrame(() => {
      setTimeout(() => {
        const tableWidth = getTableContainerWidth();
        if (!tableWidth || tableWidth === 0) {
          return;
        }

        const availableWidth =
          tableWidth -
          (isHaveSomeFeatureInSidebar ? TOGGLE_SIDEBAR_PANEL_WIDTH : 0);

        // Измеряем ширину элементов панели
        const summaryCheckboxWidth =
          summaryCheckboxElRef?.current?.getBoundingClientRect().width ?? 0;
        const resetButtonWidth =
          resetButtonRef.current?.getBoundingClientRect().width ?? 0;
        const collapseButtonWidth =
          collapseButtonRef.current?.getBoundingClientRect().width ?? 24;
        const gap = 4; // gap между элементами
        const containerPadding = 32; // padding контейнера (24px слева + 8px справа)

        // Ширина фиксированных элементов
        const fixedElementsWidth =
          summaryCheckboxWidth +
          resetButtonWidth +
          collapseButtonWidth +
          containerPadding;

        // Измеряем ширину каждой кнопки
        // Использую сохраненные значения, если они есть, иначе измеряем заново
        const buttonWidths: number[] = [];
        let allButtonsMeasured = true;

        for (let i = 0; i < (buttons?.length ?? 0); i += 1) {
          const ref = buttonRefs.current[i];
          if (ref) {
            // Пробуем измерить саму кнопку внутри обертки
            const buttonElement = ref.querySelector(
              'button, a'
            ) as HTMLElement | null;
            const elementToMeasure = buttonElement || ref;

            // Пробуем разные способы измерения ширины
            const rect = elementToMeasure.getBoundingClientRect();
            const width =
              rect.width ||
              elementToMeasure.offsetWidth ||
              elementToMeasure.scrollWidth ||
              elementToMeasure.clientWidth;

            if (width > 0) {
              buttonWidths.push(width);
              // Сохраняем измеренную ширину
              measuredButtonWidthsRef.current[i] = width;
            } else {
              // Если ширина 0, Использую сохраненное значение
              if (measuredButtonWidthsRef.current[i] !== undefined) {
                buttonWidths.push(measuredButtonWidthsRef.current[i] ?? 100);
              } else {
                allButtonsMeasured = false;
                // Использую приблизительное значение для кнопки с текстом
                buttonWidths.push(100);
              }
            }
          } else {
            // Если ref пустой (кнопка еще не отрендерена), Использую сохраненное значение
            if (measuredButtonWidthsRef.current[i] !== undefined) {
              buttonWidths.push(measuredButtonWidthsRef.current[i] ?? 100);
            } else {
              allButtonsMeasured = false;
              // Использую приблизительное значение для кнопки с текстом
              buttonWidths.push(100);
            }
          }
        }

        // Если кнопки еще не отрендерены и нет сохраненных значений, не обновляем состояние
        if (
          !allButtonsMeasured &&
          buttonWidths.length === 0 &&
          (buttons?.length ?? 0) > 0
        ) {
          return;
        }

        // Ширина кнопки "Еще"
        const moreButtonWidth =
          moreButtonRef.current?.getBoundingClientRect().width ?? 40;

        // Максимально допустимая ширина панели
        const maxPanelWidth = availableWidth - MIN_PADDING * 2;

        // Проходим по кнопкам в оригинальном порядке
        // Accent кнопки всегда видимы и сохраняют свой порядок
        const allButtons = buttons ?? [];
        let visibleCount = 0;
        let totalButtonsWidth = 0;

        for (let i = 0; i < allButtons.length; i += 1) {
          const button = allButtons[i];
          const buttonWidth = buttonWidths[i];

          if (buttonWidth === undefined) {
            continue;
          }

          // Проверяем, является ли кнопка accent - такие всегда видимы
          const isAccent = button?.view === 'accent';

          // Проверяем, есть ли еще не-accent кнопки после текущей, которые не поместятся
          // (accent кнопки всегда будут видны, поэтому их не считаем при расчете "Еще")
          let hasMoreNonAccentButtons = false;
          for (let j = i + 1; j < allButtons.length; j += 1) {
            const nextButton = allButtons[j];
            const isNextAccent = nextButton?.view === 'accent';
            if (!isNextAccent) {
              hasMoreNonAccentButtons = true;
              break;
            }
          }

          const moreButtonSpace = hasMoreNonAccentButtons
            ? moreButtonWidth + gap
            : 0;

          // Требуемая ширина для текущей кнопки + кнопки "Еще" (если нужна)
          const requiredWidth =
            totalButtonsWidth + buttonWidth + gap + moreButtonSpace;
          const testPanelWidth = fixedElementsWidth + requiredWidth;

          // Если кнопка accent - всегда добавляем её (независимо от того, помещается ли)
          // Если не accent - добавляем только если помещается
          if (isAccent) {
            totalButtonsWidth += buttonWidth + gap;
            visibleCount += 1;
          } else if (testPanelWidth <= maxPanelWidth) {
            totalButtonsWidth += buttonWidth + gap;
            visibleCount += 1;
          } else {
            // Если не accent и не помещается - останавливаемся
            break;
          }
        }

        // Финальная проверка: если панель не помещается, уменьшаем количество не-accent кнопок
        // Accent кнопки всегда остаются видимыми
        const buttonsInDropdownTemp = allButtons.slice(visibleCount);
        const hasMoreButtons = buttonsInDropdownTemp.length > 0;
        let finalPanelWidth =
          fixedElementsWidth +
          totalButtonsWidth +
          (hasMoreButtons ? moreButtonWidth + gap : 0);

        // Считаем accent кнопки и их ширину
        let accentButtonsCount = 0;
        let accentButtonsWidth = 0;
        for (let i = 0; i < allButtons.length; i += 1) {
          const button = allButtons[i];
          const isAccent = button?.view === 'accent';
          if (isAccent) {
            accentButtonsCount += 1;
            const width = buttonWidths[i];
            if (width !== undefined) {
              accentButtonsWidth += width + gap;
            }
          }
        }

        // Если панель не помещается, уменьшаем количество не-accent кнопок
        if (finalPanelWidth > maxPanelWidth) {
          const nonAccentVisibleCount = visibleCount - accentButtonsCount;

          // Уменьшаем количество не-accent кнопок до тех пор, пока панель не поместится
          let reducedNonAccentCount = nonAccentVisibleCount;
          while (reducedNonAccentCount > 0) {
            // Пересчитываем ширину: accent кнопки + уменьшенное количество не-accent кнопок
            let recalculatedWidth = accentButtonsWidth;
            let nonAccentAdded = 0;

            for (let i = 0; i < allButtons.length; i += 1) {
              const button = allButtons[i];
              const isAccent = button?.view === 'accent';
              const width = buttonWidths[i];

              if (width === undefined) {
                continue;
              }

              if (isAccent) {
                // Accent кнопки всегда учитываем
                continue;
              }

              if (nonAccentAdded < reducedNonAccentCount) {
                recalculatedWidth += width + gap;
                nonAccentAdded += 1;
              }
            }

            const hasMoreButtonsRecalc =
              accentButtonsCount + nonAccentAdded < allButtons.length;
            const recalculatedPanelWidth =
              fixedElementsWidth +
              recalculatedWidth +
              (hasMoreButtonsRecalc ? moreButtonWidth + gap : 0);

            if (recalculatedPanelWidth <= maxPanelWidth) {
              visibleCount = accentButtonsCount + nonAccentAdded;
              totalButtonsWidth = recalculatedWidth;
              finalPanelWidth = recalculatedPanelWidth;
              break;
            }

            // Если не поместилось, уменьшаем количество не-accent кнопок
            reducedNonAccentCount -= 1;
          }

          // Если даже с одной не-accent кнопкой не помещается, оставляем только accent кнопки
          if (reducedNonAccentCount === 0) {
            visibleCount = accentButtonsCount;
            totalButtonsWidth = accentButtonsWidth;
            finalPanelWidth =
              fixedElementsWidth +
              accentButtonsWidth +
              (accentButtonsCount < allButtons.length
                ? moreButtonWidth + gap
                : 0);
          }
        }

        setVisibleButtonsCount(visibleCount);
      }, 50);
    });
  }, [
    isCollapsed,
    getTableContainerWidth,
    isHaveSomeFeatureInSidebar,
    buttons,
    containerRef,
    contentRef,
    resetButtonRef,
    buttonRefs,
    moreButtonRef,
    collapseButtonRef,
    summaryCheckboxElRef,
    setVisibleButtonsCount
  ]);

  return {
    calculateCompression,
    measuredButtonWidthsRef
  };
};
