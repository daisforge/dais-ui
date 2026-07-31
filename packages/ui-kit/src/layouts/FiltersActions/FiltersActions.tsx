/* eslint-disable @typescript-eslint/no-use-before-define */
import { IconButtonDots } from '@ui-kit/components/IconButton';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import { TooltipList } from '@ui-kit/components/Tooltip';
import { createSafeResizeObserver, mergeRefs } from '@ui-kit/utils';
import React, { useLayoutEffect, useRef } from 'react';

import { BoxProps } from '../../components/Box';
import { FiltersActionsFiltersButton } from './components/FiltersButton';
import { FiltersActionsFiltersButtonWithPopover } from './components/FiltersButtonWithPopover';
import { FiltersActionsListOfFilters } from './components/ListOfFilters';
import { RedDot } from './components/RedDot';
import { ResetAllFiltersButton } from './components/ResetAllFiltersButton';
import { FiltersActionsSegmentItem } from './components/Segments';
import { SwitcherFilter } from './components/SwitcherFilter';
import { FiltersActionsTabItem, FiltersActionsTabs } from './components/Tabs';
import { getCssStyle } from './handlers';
import {
  StyledButtonsBlock,
  StyledCard,
  StyledContainer,
  StyledMainBlock,
} from './styled';

/**
 * Данные о размерах блоков FiltersActions
 */
export interface FiltersActionsResizeDimensions {
  /** Полная ширина контейнера */
  containerWidth: number;
  /** Ширина левого блока (mainBlock) - вычисляется как containerWidth - buttonsBlockWidth - gap */
  mainBlockWidth: number;
  /** Ширина правого блока (activeButtonsBlock), 0 если блок отсутствует */
  buttonsBlockWidth: number;
  /** Доступная ширина для элементов mainBlock (за вычетом padding и gap) */
  availableMainBlockWidth: number;
}

export type FiltersActionsProps = {
  /**
   * блок фильтров и табов
   *   */
  mainBlock?: React.ReactNode;

  /**
   * блок активных действий
   *   */
  activeButtonsBlock?: React.ReactNode;

  /**
   * блок списка примененных фильтров
   * */
  listOfFilters?: React.ReactNode;

  /**
   * пропс для ширины для дочерних элементов - слева направо (Например, "auto 30% 30%")
   *   */
  mainBlockElementsWidth?: string;

  /**
   * пропсы для контейнера всего компонента
   *   */
  containerProps?: BoxProps;

  /**
   * пропсы для контейнера блока фильтров и табов
   *   */
  mainBlockProps?: BoxProps;
  /**
   * Колбэк, вызываемый при изменении размеров блоков
   * Получает актуальные размеры контейнера, mainBlock и buttonsBlock
   */
  onResize?: (dimensions: FiltersActionsResizeDimensions) => void;
};

export const FiltersActions = ({
  mainBlock,
  listOfFilters,
  activeButtonsBlock,
  mainBlockElementsWidth,
  containerProps,
  mainBlockProps: { $css, ref: externalRef, ...restMainBlockProps } = {},
  onResize,
}: FiltersActionsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainBlockRef = useRef<HTMLDivElement>(null);
  const buttonsBlockRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!onResize) return undefined;

    const containerElement = containerRef.current;
    const mainBlockElement = mainBlockRef.current;
    const buttonsBlockElement = buttonsBlockRef.current;

    if (!containerElement || !mainBlockElement) return undefined;

    // Объект для хранения текущих размеров
    const dimensions: FiltersActionsResizeDimensions = {
      containerWidth: 0,
      mainBlockWidth: 0,
      buttonsBlockWidth: 0,
      availableMainBlockWidth: 0,
    };

    // Функция для вычисления и отправки размеров
    const calculateAndNotify = () => {
      const containerWidth = containerElement.getBoundingClientRect().width;
      const mainBlockWidth = mainBlockElement.getBoundingClientRect().width;
      const buttonsBlockWidth = buttonsBlockElement
        ? buttonsBlockElement.getBoundingClientRect().width
        : 0;

      const availableMainBlockWidth = mainBlockWidth;

      dimensions.containerWidth = containerWidth;
      dimensions.mainBlockWidth = mainBlockWidth;
      dimensions.buttonsBlockWidth = buttonsBlockWidth;
      dimensions.availableMainBlockWidth = availableMainBlockWidth;
      onResize({ ...dimensions });
    };

    // ResizeObserver для всех элементов
    const resizeObserver = createSafeResizeObserver(() => {
      calculateAndNotify();
    });

    // Наблюдаем за всеми элементами
    resizeObserver.observe(containerElement);
    resizeObserver.observe(mainBlockElement);
    if (buttonsBlockElement) {
      resizeObserver.observe(buttonsBlockElement);
    }

    // Первоначальный расчет
    calculateAndNotify();

    return () => {
      resizeObserver.disconnect();
    };
  }, [onResize]);

  return (
    <StyledContainer ref={containerRef} {...containerProps}>
      <StyledCard>
        <StyledMainBlock
          $css={getCssStyle(mainBlockElementsWidth, $css)}
          {...restMainBlockProps}
          ref={mergeRefs(externalRef, mainBlockRef)}
        >
          {mainBlock}
          {activeButtonsBlock && (
            <StyledButtonsBlock ref={buttonsBlockRef}>
              {activeButtonsBlock}
            </StyledButtonsBlock>
          )}
        </StyledMainBlock>
        {listOfFilters}
      </StyledCard>
    </StyledContainer>
  );
};

FiltersActions.FiltersButton = FiltersActionsFiltersButton;
FiltersActions.DotsIconButton = IconButtonDots;
FiltersActions.ListOfFilters = FiltersActionsListOfFilters;
FiltersActions.TextFieldSearch = TextFieldSearch;
FiltersActions.Tabs = FiltersActionsTabs;
FiltersActions.TabItem = FiltersActionsTabItem;
FiltersActions.SegmentItem = FiltersActionsSegmentItem;
// --------------------
FiltersActions.Tooltip = TooltipList;
// новое имя, более правильное. второе имя.
FiltersActions.TooltipList = TooltipList;
// --------------------
FiltersActions.FilterPopover = FiltersActionsFiltersButtonWithPopover;
// новое имя, более правильное. второе имя.
FiltersActions.FiltersButtonWithPopover =
  FiltersActionsFiltersButtonWithPopover;
// --------------------
FiltersActions.ResetAllFiltersButton = ResetAllFiltersButton;
FiltersActions.SwitcherFilter = SwitcherFilter;
// Красная точка-индикатор для кастомного таргета FiltersButtonWithPopover (renderTarget)
FiltersActions.RedDot = RedDot;
