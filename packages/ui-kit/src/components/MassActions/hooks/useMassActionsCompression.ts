/* eslint-disable no-console */
/* eslint-disable no-continue */
/* eslint-disable no-lonely-if */
import React, { useCallback, useRef } from 'react';

import {
  ACTION_BUTTON_WIDTH_ESTIMATE,
  COLLAPSE_BUTTON_WIDTH,
  COMPRESSION_CALCULATION_DELAY,
  ELEMENTS_GAP,
  MIN_PANEL_PADDING,
  MORE_BUTTON_WIDTH_ESTIMATE,
  PANEL_PADDING_EXPANDED,
  TOGGLE_SIDEBAR_PANEL_WIDTH
} from '../constants';
import { MassActionsButtonProps } from '../types';

/**
 * Обобщенный хук для компрессии кнопок в панели массовых действий
 * Не зависит от контекстов таблицы - все данные передаются явно
 */
export const useMassActionsCompression = ({
  isCollapsed,
  containerRef,
  contentRef,
  middleSectionRef,
  buttonRefs,
  moreButtonRef,
  collapseButtonRef,
  leftSectionRef,
  dividerRef,
  buttons,
  isHaveSomeFeatureInSidebar,
  getContainerWidth,
  setVisibleButtonsCount,
  minPadding = MIN_PANEL_PADDING,
  leftPadding = PANEL_PADDING_EXPANDED.left,
  rightPadding = PANEL_PADDING_EXPANDED.right,
  moreButtonWidthEstimate = MORE_BUTTON_WIDTH_ESTIMATE,
  enableDebugLogs = false
}: {
  isCollapsed: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  middleSectionRef: React.RefObject<HTMLDivElement>;
  buttonRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  moreButtonRef: React.RefObject<HTMLDivElement | null>;
  collapseButtonRef: React.RefObject<HTMLDivElement | null>;
  leftSectionRef: React.RefObject<HTMLDivElement>;
  dividerRef: React.RefObject<HTMLDivElement | null>;
  buttons?: MassActionsButtonProps[];
  isHaveSomeFeatureInSidebar: boolean;
  getContainerWidth: () => number;
  setVisibleButtonsCount: React.Dispatch<React.SetStateAction<number>>;
  minPadding?: number;
  leftPadding?: number;
  rightPadding?: number;
  moreButtonWidthEstimate?: number;
  enableDebugLogs?: boolean;
}) => {
  // Сохраняем измеренные ширины всех кнопок для использования при компрессии
  const measuredButtonWidthsRef = useRef<number[]>([]);

  /**
   * Предварительный расчет компрессии на основе реальных измерений из скрытого контейнера
   * Используется для предотвращения "прыжка" при первом рендере
   * Вызывается синхронно в useLayoutEffect после рендера скрытого контейнера
   */
  const calculateInitialCompression = useCallback(() => {
    const tableWidth = getContainerWidth();
    if (!tableWidth || tableWidth === 0 || !buttons || buttons.length === 0) {
      if (enableDebugLogs) {
        console.debug(
          '❌ calculateInitialCompression: нет tableWidth или buttons'
        );
      }
      return false; // Возвращаем false если не можем выполнить расчет
    }

    // Проверяем что все ref'ы установлены
    const allRefsSet = buttons.every(
      (_, i) =>
        buttonRefs.current[i] !== null && buttonRefs.current[i] !== undefined
    );

    if (!allRefsSet) {
      if (enableDebugLogs) {
        console.debug(
          "❌ calculateInitialCompression: ref'ы еще не установлены",
          {
            buttonsCount: buttons.length,
            refsCount: buttonRefs.current.filter(Boolean).length,
            refs: buttonRefs.current.map(
              (r: HTMLDivElement | null, i: number) => ({
                index: i,
                hasRef: !!r
              })
            )
          }
        );
      }
      return false; // Ref'ы еще не установлены
    }

    const availableWidth =
      tableWidth -
      (isHaveSomeFeatureInSidebar ? TOGGLE_SIDEBAR_PANEL_WIDTH : 0);

    // Измеряем реальные ширины фиксированных элементов
    const leftSectionWidth =
      leftSectionRef?.current?.getBoundingClientRect().width ?? 0;
    const middleSectionWidth =
      middleSectionRef.current?.getBoundingClientRect().width ?? 0;

    // Divider показывается если есть кнопки
    // Divider обернут в div (dividerRef указывает на div-обертку)
    // Div-обертка автоматически включает ширину divider элемента + его margins
    const shouldShowDivider = buttons.length > 0;
    const dividerWrapperWidth = shouldShowDivider
      ? dividerRef?.current?.getBoundingClientRect().width ?? 0
      : 0;
    const dividerGapRight = shouldShowDivider ? ELEMENTS_GAP : 0;
    const dividerGapLeft =
      shouldShowDivider && middleSectionWidth > 0 ? ELEMENTS_GAP : 0;
    const dividerTotalWidth =
      dividerWrapperWidth + dividerGapLeft + dividerGapRight;

    // ВАЖНО: MassActionsContent имеет gap: 4px между дочерними элементами
    // Нужно учитывать gaps между leftSection и ActionsWrapper, и между ActionsWrapper и collapse button
    // middleSection находится ВНУТРИ ActionsWrapper, поэтому gaps между фиксированными элементами всегда 2
    const gapsBetweenFixedElements = ELEMENTS_GAP * 2; // gap между leftSection-ActionsWrapper и ActionsWrapper-collapse
    const fixedElementsWidth =
      leftSectionWidth +
      middleSectionWidth +
      dividerTotalWidth + // Divider с учетом margins и gaps
      (collapseButtonRef.current?.getBoundingClientRect().width ??
        COLLAPSE_BUTTON_WIDTH) +
      (leftPadding + rightPadding) + // Динамический padding контейнера
      gapsBetweenFixedElements;

    // Измеряем реальные ширины всех кнопок из скрытого контейнера
    const buttonWidths: number[] = [];
    let allButtonsMeasured = true;

    for (let i = 0; i < buttons.length; i += 1) {
      const ref = buttonRefs.current[i];
      if (!ref) {
        allButtonsMeasured = false;
        break;
      }

      const buttonElement = ref.querySelector(
        'button, a'
      ) as HTMLElement | null;
      const elementToMeasure = buttonElement || ref;

      // Проверяем что элемент действительно отрендерился
      if (!elementToMeasure || !elementToMeasure.isConnected) {
        allButtonsMeasured = false;
        break;
      }

      const rect = elementToMeasure.getBoundingClientRect();
      const width =
        rect.width ||
        elementToMeasure.offsetWidth ||
        elementToMeasure.scrollWidth ||
        elementToMeasure.clientWidth;

      // Ширина должна быть больше 0 (элемент отрендерился)
      if (width > 0) {
        buttonWidths.push(width);
        measuredButtonWidthsRef.current[i] = width;
      } else {
        // Если ширина 0, элемент еще не отрендерился
        console.debug(
          '❌ calculateInitialCompression: кнопка не отрендерилась',
          {
            index: i,
            text: buttons[i]?.text,
            width,
            isConnected: elementToMeasure.isConnected,
            rect
          }
        );
        allButtonsMeasured = false;
        break;
      }
    }

    // Если не все кнопки измерены, не выполняем предварительный расчет
    if (!allButtonsMeasured || buttonWidths.length !== buttons.length) {
      if (enableDebugLogs) {
        console.debug(
          '❌ calculateInitialCompression: не все кнопки измерены',
          {
            allButtonsMeasured,
            buttonWidthsLength: buttonWidths.length,
            buttonsLength: buttons.length
          }
        );
      }
      return false;
    }

    const moreButtonWidth =
      moreButtonRef.current?.getBoundingClientRect().width ??
      moreButtonWidthEstimate;

    const maxPanelWidth = availableWidth - minPadding * 2;

    // Разделяем кнопки на accent и обычные
    const accentButtonIndices: number[] = [];
    const regularButtonIndices: number[] = [];

    buttons.forEach((button, i) => {
      if (buttonWidths[i] === undefined) return;
      const isAccent = button?.view === 'accent';
      if (isAccent) {
        accentButtonIndices.push(i);
      } else {
        regularButtonIndices.push(i);
      }
    });

    // Ширина всех accent кнопок (только сумма ширин, без gaps)
    let accentButtonsWidth = 0;
    accentButtonIndices.forEach((i) => {
      const width = buttonWidths[i];
      if (width !== undefined) {
        accentButtonsWidth += width;
      }
    });

    // Определяем сколько обычных кнопок поместится
    const visibleButtonIndices = new Set<number>(accentButtonIndices);
    let totalButtonsWidth = accentButtonsWidth; // Пока только сумма ширин кнопок без gaps
    let visibleRegularCount = 0;

    for (let i = 0; i < regularButtonIndices.length; i += 1) {
      const buttonIndex = regularButtonIndices[i];
      const width =
        typeof buttonIndex !== 'undefined' ? buttonWidths[buttonIndex] : 0;
      if (width === undefined) {
        continue;
      }

      const hasMoreRegularButtons = i < regularButtonIndices.length - 1;
      const moreButtonSpace = hasMoreRegularButtons
        ? moreButtonWidth + ELEMENTS_GAP
        : 0;

      // Количество видимых кнопок после добавления текущей (включая accent)
      const visibleCountAfter = visibleButtonIndices.size + 1;
      // Gaps между видимыми кнопками: (n-1) gaps
      const gapsBetweenButtons = (visibleCountAfter - 1) * ELEMENTS_GAP;

      // Требуемая ширина = сумма ширин кнопок + gaps между ними + moreButton если нужно
      const requiredWidth =
        totalButtonsWidth + width + gapsBetweenButtons + moreButtonSpace;
      const testPanelWidth = fixedElementsWidth + requiredWidth;

      if (testPanelWidth <= maxPanelWidth) {
        totalButtonsWidth += width; // Добавляем только ширину кнопки, gaps посчитаем отдельно
        visibleRegularCount += 1;
        if (typeof buttonIndex !== 'undefined') {
          visibleButtonIndices.add(buttonIndex);
        }
      } else {
        break;
      }
    }

    const visibleCount = visibleButtonIndices.size;
    setVisibleButtonsCount(visibleCount);

    console.debug('✅ calculateInitialCompression: успешно выполнено', {
      buttonWidths,
      visibleCount,
      accentCount: accentButtonIndices.length,
      regularVisibleCount: visibleRegularCount
    });

    return true; // Успешно выполнен расчет
  }, [
    buttons,
    getContainerWidth,
    isHaveSomeFeatureInSidebar,
    setVisibleButtonsCount,
    buttonRefs,
    leftSectionRef,
    middleSectionRef,
    moreButtonRef,
    collapseButtonRef,
    dividerRef,
    enableDebugLogs,
    minPadding,
    leftPadding,
    rightPadding,
    moreButtonWidthEstimate
  ]);

  // Функция для расчета компрессии кнопок
  const calculateCompression = useCallback(() => {
    if (isCollapsed || !containerRef.current || !contentRef.current) {
      // В свернутом режиме не выполняем компрессию
      return;
    }

    // Использую requestAnimationFrame для корректного измерения после рендера
    requestAnimationFrame(() => {
      setTimeout(() => {
        const tableWidth = getContainerWidth();
        if (!tableWidth || tableWidth === 0) {
          return;
        }

        const availableWidth =
          tableWidth -
          (isHaveSomeFeatureInSidebar ? TOGGLE_SIDEBAR_PANEL_WIDTH : 0);

        if (enableDebugLogs) {
          console.group('🔧 MassActions Compression');
          console.debug(
            '📏 Размеры контейнера:',
            JSON.stringify(
              {
                tableWidth,
                isHaveSomeFeatureInSidebar,
                togglePanelWidth: isHaveSomeFeatureInSidebar
                  ? TOGGLE_SIDEBAR_PANEL_WIDTH
                  : 0,
                availableWidth,
                minPaddingRequired: minPadding * 2,
                maxPanelWidthAllowed: availableWidth - minPadding * 2
              },
              null,
              2
            )
          );
        }

        // Измеряем ширину элементов панели
        const leftSectionWidth =
          leftSectionRef?.current?.getBoundingClientRect().width ?? 0;
        const middleSectionWidth =
          middleSectionRef.current?.getBoundingClientRect().width ?? 0;

        // Divider показывается если есть кнопки (shouldShowActionsDivider = !isCollapsed && buttons?.length > 0)
        // Но в расчете компрессии мы уже проверили что isCollapsed === false, и buttons есть
        // Divider обернут в div (dividerRef указывает на div-обертку)
        // Divider внутри имеет margin-inline: 12px (по 12px с каждой стороны) и padding-left: 1px
        // Div-обертка автоматически включает ширину divider элемента + его margins
        // Также нужно учесть gaps от ActionsWrapper (gap: 4px) с обеих сторон div-обертки
        const shouldShowDivider = (buttons?.length ?? 0) > 0;
        // Измеряем ширину div-обертки (которая уже включает ширину divider + его margins)
        const dividerWrapperWidth = shouldShowDivider
          ? dividerRef?.current?.getBoundingClientRect().width ?? 0
          : 0;
        // Divider обернут в div, который участвует в gap ActionsWrapper (gap: 4px)
        // gap слева только если есть middleSection
        const dividerGapRight = shouldShowDivider ? ELEMENTS_GAP : 0; // gap справа от divider всегда есть
        const dividerGapLeft =
          shouldShowDivider && middleSectionWidth > 0 ? ELEMENTS_GAP : 0; // gap слева только если есть middleSection
        // Общая ширина divider: ширина обертки (включая margins divider'а) + gaps от ActionsWrapper
        const dividerTotalWidth =
          dividerWrapperWidth + dividerGapLeft + dividerGapRight;

        // Детальная информация о leftSection для отладки
        let leftSectionDetails: {
          width: number;
          height: number;
          children: Array<{
            tagName: string;
            className: string;
            width: number;
            height: number;
          }>;
          childrenTotalWidth: number;
        } | null = null;
        if (leftSectionRef?.current) {
          const leftSectionRect =
            leftSectionRef.current.getBoundingClientRect();
          const { children } = leftSectionRef.current;
          const leftSectionChildren: Array<{
            tagName: string;
            className: string;
            width: number;
            height: number;
          }> = [];
          for (let i = 0; i < children.length; i += 1) {
            const child = children[i];
            if (child) {
              const rect = child.getBoundingClientRect();
              leftSectionChildren.push({
                tagName: child.tagName,
                className: child.className,
                width: rect.width,
                height: rect.height
              });
            }
          }
          leftSectionDetails = {
            width: leftSectionRect.width,
            height: leftSectionRect.height,
            children: leftSectionChildren,
            childrenTotalWidth: leftSectionChildren.reduce(
              (sum, child) => sum + child.width,
              0
            )
          };
        }

        // Ширина фиксированных элементов
        // ВАЖНО: MassActionsContent имеет gap: 4px между дочерними элементами
        // Нужно учитывать gaps между leftSection и ActionsWrapper, и между ActionsWrapper и collapse button
        // middleSection находится ВНУТРИ ActionsWrapper, поэтому gaps между фиксированными элементами всегда 2
        const gapsBetweenFixedElements = ELEMENTS_GAP * 2; // gap между leftSection-ActionsWrapper и ActionsWrapper-collapse
        const fixedElementsWidth =
          leftSectionWidth +
          middleSectionWidth +
          dividerTotalWidth + // Divider с учетом margins и gaps
          (collapseButtonRef.current?.getBoundingClientRect().width ??
            COLLAPSE_BUTTON_WIDTH) +
          (leftPadding + rightPadding) +
          gapsBetweenFixedElements;

        if (enableDebugLogs) {
          console.debug(
            '🔲 Фиксированные элементы:',
            JSON.stringify(
              {
                leftSectionWidth,
                leftSectionDetails,
                middleSectionWidth,
                divider: {
                  shouldShow: shouldShowDivider,
                  wrapperWidth: dividerWrapperWidth,
                  gapLeft: dividerGapLeft,
                  gapRight: dividerGapRight,
                  totalWidth: dividerTotalWidth
                },
                collapseButtonWidth:
                  collapseButtonRef.current?.getBoundingClientRect().width ??
                  COLLAPSE_BUTTON_WIDTH,
                containerPadding: leftPadding + rightPadding,
                gapsBetweenFixedElements,
                fixedElementsTotal: fixedElementsWidth
              },
              null,
              2
            )
          );
        }

        // Измеряем ширину каждой кнопки
        const buttonWidths: number[] = [];
        let allButtonsMeasured = true;

        for (let i = 0; i < (buttons?.length ?? 0); i += 1) {
          const ref = buttonRefs.current[i];
          if (ref) {
            const buttonElement = ref.querySelector(
              'button, a'
            ) as HTMLElement | null;
            const elementToMeasure = buttonElement || ref;

            const rect = elementToMeasure.getBoundingClientRect();
            const width =
              rect.width ||
              elementToMeasure.offsetWidth ||
              elementToMeasure.scrollWidth ||
              elementToMeasure.clientWidth;

            if (width > 0) {
              buttonWidths.push(width);
              measuredButtonWidthsRef.current[i] = width;
            } else {
              if (measuredButtonWidthsRef.current[i] !== undefined) {
                buttonWidths.push(
                  measuredButtonWidthsRef.current[i] ??
                    ACTION_BUTTON_WIDTH_ESTIMATE
                );
              } else {
                allButtonsMeasured = false;
                buttonWidths.push(ACTION_BUTTON_WIDTH_ESTIMATE);
              }
            }
          } else {
            if (measuredButtonWidthsRef.current[i] !== undefined) {
              buttonWidths.push(
                measuredButtonWidthsRef.current[i] ??
                  ACTION_BUTTON_WIDTH_ESTIMATE
              );
            } else {
              allButtonsMeasured = false;
              buttonWidths.push(ACTION_BUTTON_WIDTH_ESTIMATE);
            }
          }
        }

        if (
          !allButtonsMeasured &&
          buttonWidths.length === 0 &&
          (buttons?.length ?? 0) > 0
        ) {
          return;
        }

        const moreButtonWidth =
          moreButtonRef.current?.getBoundingClientRect().width ??
          moreButtonWidthEstimate;

        const maxPanelWidth = availableWidth - minPadding * 2;

        // Текущая реальная ширина панели
        const currentPanelWidth = containerRef.current
          ? containerRef.current.getBoundingClientRect().width
          : 0;

        if (enableDebugLogs) {
          console.debug(
            '🎯 Ограничения и текущее состояние:',
            JSON.stringify(
              {
                targetContainer: {
                  tableWidth,
                  availableWidth,
                  minPaddingEach: minPadding,
                  minPaddingTotal: minPadding * 2,
                  maxPanelWidth
                },
                currentPanel: {
                  width: currentPanelWidth,
                  exceedsMax: currentPanelWidth > maxPanelWidth,
                  exceedsAvailable: currentPanelWidth > availableWidth,
                  leftPadding: minPadding,
                  rightPadding: minPadding
                },
                moreButtonWidth
              },
              null,
              2
            )
          );

          console.debug(
            '🔘 Ширины кнопок:',
            JSON.stringify(
              {
                buttons: buttons?.map((btn, i) => ({
                  index: i,
                  text: btn.text,
                  view: btn.view,
                  isAccent: btn.view === 'accent',
                  width: buttonWidths[i]
                })),
                totalButtonsWidth: buttonWidths.reduce((sum, w) => sum + w, 0),
                averageButtonWidth:
                  buttonWidths.length > 0
                    ? buttonWidths.reduce((sum, w) => sum + w, 0) /
                      buttonWidths.length
                    : 0
              },
              null,
              2
            )
          );
        }

        // ЛОГИКА: сначала собираем accent кнопки, потом добавляем обычные
        const allButtons = buttons ?? [];

        // Шаг 1: Разделяем кнопки на accent и обычные
        const accentButtonIndices: number[] = [];
        const regularButtonIndices: number[] = [];

        allButtons.forEach((button, i) => {
          if (buttonWidths[i] === undefined) return;

          const isAccent = button?.view === 'accent';
          if (isAccent) {
            accentButtonIndices.push(i);
          } else {
            regularButtonIndices.push(i);
          }
        });

        if (enableDebugLogs) {
          console.debug('🎨 Распределение:', {
            accentCount: accentButtonIndices.length,
            regularCount: regularButtonIndices.length,
            accentButtons: accentButtonIndices.map((i) => ({
              index: i,
              text: allButtons[i]?.text,
              width: buttonWidths[i]
            }))
          });
        }

        // Шаг 2: Вычисляем ширину всех accent кнопок (они ВСЕГДА видимы)
        // ВАЖНО: ActionsWrapper использует CSS gap: 4px, который автоматически создает gaps между элементами
        // Поэтому gaps должны считаться только МЕЖДУ кнопками: для n кнопок = (n-1) gaps
        let accentButtonsWidth = 0;
        accentButtonIndices.forEach((i) => {
          const width = buttonWidths[i];
          if (width !== undefined) {
            accentButtonsWidth += width; // Не добавляем gap здесь, добавим в конце
          }
        });

        // Шаг 3: Определяем сколько обычных кнопок поместится
        const visibleButtonIndices = new Set<number>(accentButtonIndices);
        let totalButtonsWidth = accentButtonsWidth; // Пока только сумма ширин кнопок без gaps
        let visibleRegularCount = 0;

        for (let i = 0; i < regularButtonIndices.length; i += 1) {
          const buttonIndex = regularButtonIndices[i];
          const width =
            typeof buttonIndex !== 'undefined' ? buttonWidths[buttonIndex] : 0;
          if (width === undefined) {
            continue;
          }

          // Проверяем есть ли еще обычные кнопки после текущей
          const hasMoreRegularButtons = i < regularButtonIndices.length - 1;
          const moreButtonSpace = hasMoreRegularButtons
            ? moreButtonWidth + ELEMENTS_GAP
            : 0;

          // Количество видимых кнопок после добавления текущей (включая accent)
          const visibleCountAfter = visibleButtonIndices.size + 1;
          // Gaps между видимыми кнопками: (n-1) gaps
          const gapsBetweenButtons = (visibleCountAfter - 1) * ELEMENTS_GAP;

          // Требуемая ширина = сумма ширин кнопок + gaps между ними + moreButton если нужно
          const requiredWidth =
            totalButtonsWidth + width + gapsBetweenButtons + moreButtonSpace;
          const testPanelWidth = fixedElementsWidth + requiredWidth;

          // Добавляем небольшой буфер (2-3px) для учета погрешностей рендеринга браузера
          // (округления, subpixel rendering, и т.д.), чтобы компрессия срабатывала немного раньше
          const COMPRESSION_BUFFER = 3;
          const testWithBuffer = testPanelWidth + COMPRESSION_BUFFER;

          if (enableDebugLogs) {
            console.debug(`  🔍 Проверка кнопки ${i}:`, {
              text:
                typeof buttonIndex !== 'undefined'
                  ? allButtons[buttonIndex]?.text
                  : '',
              width,
              totalButtonsWidthBefore: totalButtonsWidth,
              visibleCountAfter,
              gapsBetweenButtons,
              moreButtonSpace,
              requiredWidth,
              testPanelWidth,
              testWithBuffer,
              maxPanelWidth,
              fits: testPanelWidth <= maxPanelWidth,
              fitsWithBuffer: testWithBuffer <= maxPanelWidth
            });
          }

          if (testWithBuffer <= maxPanelWidth) {
            totalButtonsWidth += width; // Добавляем только ширину кнопки, gaps посчитаем отдельно
            visibleRegularCount += 1;
            if (typeof buttonIndex !== 'undefined') {
              visibleButtonIndices.add(buttonIndex);
            }
          } else {
            // Не помещается, останавливаемся
            break;
          }
        }

        const finalVisibleCount = visibleButtonIndices.size;

        const hiddenButtonsCount = allButtons.length - finalVisibleCount;
        const hasMoreButtons = hiddenButtonsCount > 0;

        // Финальная ширина кнопок: сумма ширин + gaps между ними
        // Если есть moreButton, добавляем его ширину и gap перед ним
        const gapsBetweenVisibleButtons =
          finalVisibleCount > 0 ? (finalVisibleCount - 1) * ELEMENTS_GAP : 0;
        const buttonsAreaWidth =
          totalButtonsWidth +
          gapsBetweenVisibleButtons +
          (hasMoreButtons ? moreButtonWidth + ELEMENTS_GAP : 0);

        // Финальная ширина панели
        const finalPanelWidth = fixedElementsWidth + buttonsAreaWidth;

        // Формируем массивы для логов (сохраняя оригинальный порядок)
        const visibleButtons: MassActionsButtonProps[] = [];
        const hiddenButtons: MassActionsButtonProps[] = [];

        allButtons.forEach((button, index) => {
          if (visibleButtonIndices.has(index)) {
            visibleButtons.push(button);
          } else {
            hiddenButtons.push(button);
          }
        });

        // Обновляем visibleCount для использования в дальнейшем
        const visibleCount = finalVisibleCount;

        // Детальный расчет для отладки
        const compressionBreakdown = {
          fixedElements: {
            leftSection: leftSectionWidth,
            middleSection: middleSectionWidth,
            divider: dividerTotalWidth,
            collapseButton: COLLAPSE_BUTTON_WIDTH,
            containerPadding: leftPadding + rightPadding,
            gapsBetweenFixedElements,
            total: fixedElementsWidth
          },
          buttons: {
            accentButtonsWidth,
            visibleRegularButtonsWidth: totalButtonsWidth - accentButtonsWidth,
            totalButtonsWidth, // Сумма только ширин кнопок без gaps
            gapsBetweenVisibleButtons,
            buttonsAreaWidth, // С учетом gaps
            visibleButtonsCount: finalVisibleCount,
            hiddenButtonsCount: hiddenButtons.length
          },
          moreButton: hasMoreButtons
            ? {
                width: moreButtonWidth,
                gap: ELEMENTS_GAP,
                total: moreButtonWidth + ELEMENTS_GAP
              }
            : null,
          final: {
            calculatedWidth: finalPanelWidth,
            actualPanelWidth: currentPanelWidth,
            widthDifference: currentPanelWidth - finalPanelWidth,
            maxAllowedWidth: maxPanelWidth,
            availableWidth,
            fits: finalPanelWidth <= maxPanelWidth,
            actualFits: currentPanelWidth <= maxPanelWidth,
            exceedsBy:
              finalPanelWidth > maxPanelWidth
                ? finalPanelWidth - maxPanelWidth
                : 0,
            actualExceedsBy:
              currentPanelWidth > maxPanelWidth
                ? currentPanelWidth - maxPanelWidth
                : 0,
            leftPaddingRequired: minPadding,
            rightPaddingRequired: minPadding,
            totalPaddingRequired: minPadding * 2
          }
        };

        if (enableDebugLogs) {
          console.debug(
            '✅ Результат компрессии:',
            JSON.stringify(
              {
                summary: {
                  totalButtons: allButtons.length,
                  accentCount: accentButtonIndices.length,
                  visibleRegularCount,
                  visibleCount,
                  hiddenCount: hiddenButtons.length,
                  finalPanelWidth,
                  maxPanelWidth,
                  fits: finalPanelWidth <= maxPanelWidth,
                  hasMoreButton: hasMoreButtons
                },
                breakdown: compressionBreakdown
              },
              null,
              2
            )
          );

          console.debug('👁️ Видимые кнопки:', {
            buttons: visibleButtons.map((btn) => ({
              text: btn.text,
              view: btn.view,
              isAccent: btn.view === 'accent'
            }))
          });

          console.debug('📦 Кнопки в dropdown:', {
            buttons: hiddenButtons.map((btn) => ({
              text: btn.text,
              view: btn.view
            }))
          });
          console.groupEnd();
        }

        setVisibleButtonsCount(finalVisibleCount);
      }, COMPRESSION_CALCULATION_DELAY);
    });
  }, [
    isCollapsed,
    containerRef,
    contentRef,
    getContainerWidth,
    isHaveSomeFeatureInSidebar,
    enableDebugLogs,
    leftSectionRef,
    middleSectionRef,
    buttons,
    dividerRef,
    moreButtonRef,
    collapseButtonRef,
    minPadding,
    leftPadding,
    rightPadding,
    moreButtonWidthEstimate,
    setVisibleButtonsCount,
    buttonRefs
  ]);

  return {
    calculateCompression,
    calculateInitialCompression,
    measuredButtonWidthsRef
  };
};
