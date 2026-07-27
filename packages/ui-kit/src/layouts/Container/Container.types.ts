import { BoxProps } from '@ui-kit/components/Box';
import { ReactElement, ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

export interface IStyledContainerWrapperProps {
  $stretch: boolean;
  $css?: FlattenSimpleInterpolation;
  $roundedInner?: boolean;
}

export interface IStyledSplitContainerWrapperProps
  extends IStyledContainerWrapperProps {
  $view: TContainerView;
  $minColWidth?: string;
  $gap?: string;
  $fixedWidth?: string;
}

/**
 * Варианты разметки контейнера
 */
export type TContainerView =
  | '30/70'
  | '20/80'
  | '70/30'
  | '80/20'
  | '1/1'
  | '1/1/1'
  | '1/3/1'
  | 'fixed-fluid';

/**
 * Базовые пропсы Container
 */
export interface IContainerBaseProps {
  /**
   * Скругление углов внутренних блоков
   * @default true
   */
  roundedInner?: boolean;
  className?: string;
  /**
   * Растягивать на всю доступную ширину/высоту
   * @default false
   */
  stretch?: boolean;
  css?: BoxProps['$css'];
}

/**
 * Пропсы для разделенного контейнера
 */
export interface ISplitContainerProps extends IContainerBaseProps {
  split: true;
  children?:
    | [ReactElement, ReactElement]
    | [ReactElement, ReactElement, ReactElement];
  /**
   * @default '30/70'
   */
  view?: TContainerView;
  /**
   * Минимальная ширина колонок
   * @default '360px'
   */
  minColWidth?: string;
  /**
   * Отступ между колонками
   * @default '24px'
   */
  gap?: string;
  /**
   * Ширина фиксированной колонки (для view='fixed-fluid')
   * @default '288px'
   */
  fixedWidth?: string;
}

/**
 * Пропсы для обычного контейнера
 */
export interface INotSplitContainerProps extends IContainerBaseProps {
  split?: false;
  children?: ReactNode;
}

/**
 * Основные пропсы Container
 */
export type ContainerProps = ISplitContainerProps | INotSplitContainerProps;
