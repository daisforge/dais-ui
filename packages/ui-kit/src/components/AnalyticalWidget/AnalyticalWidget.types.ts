import { ReactNode } from 'react';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

export type AnalyticalWidgetSize = 'l' | 'm' | 's';

export type AnalyticalWidgetClasses = {
  /**
   * Кастомный класс для root элемента
   */
  root?: string;
  /**
   * Кастомный класс для topSlot элемента
   */
  topSlot?: string;
  /**
   * Кастомный класс для middleSlot элемента
   */
  middleSlot?: string;
  /**
   * Кастомный класс для contentSlot элемента
   */
  contentSlot?: string;
};

export type AnalyticalWidgetProps = {
  /**
   * Размер виджета
   */
  size: AnalyticalWidgetSize;
  /**
   * Добавление или удаление скролла у contentSlot
   */
  scrollable?: boolean;
  /**
   * ReactNode для шапки
   */
  headerSlot?: ReactNode;
  /**
   * ReactNode (в основном для фильтров)
   */
  topSlot?: ReactNode;
  /**
   * ReactNode (в основном для табов. Отображается только в режиме l)
   */
  middleSlot?: ReactNode;
  /**
   * ReactNode с контентом
   */
  contentSlot: ReactNode;
  /**
   * Кастомные классы для слотов и самого компонента
   */
  classes?: AnalyticalWidgetClasses;
  /**
   * Кастомные стили styled-components для основного контейнера виджета
   */
  $css?: string | CSSObject | FlattenSimpleInterpolation;
};
