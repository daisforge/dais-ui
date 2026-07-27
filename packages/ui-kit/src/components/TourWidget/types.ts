import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

export type TourWidgetCss = string | CSSObject | FlattenSimpleInterpolation;

export type TourWidgetOrientation = 'vertical' | 'horizontal';

export type TourWidgetProps = ComponentPropsWithoutRef<'div'> & {
  /**
   * @default 'vertical'
   */
  orientation?: TourWidgetOrientation;
  /**
   * Активный шаг тура. Нумерация с нуля.
   */
  activeStepIndex?: number;
  $css?: TourWidgetCss;
};

export type TourWidgetHeaderProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'title'
> & {
  title?: ReactNode;
  description?: ReactNode;
  $css?: TourWidgetCss;
};

export type TourWidgetContentProps = ComponentPropsWithoutRef<'div'> & {
  children?: ReactNode;
  $css?: TourWidgetCss;
};

export type TourWidgetFooterProps = ComponentPropsWithoutRef<'div'> & {
  children?: ReactNode;
  $css?: TourWidgetCss;
};

export type TourWidgetBulletsProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children' | 'onClick'
> & {
  count: number;
  $css?: TourWidgetCss;
};

export type TourWidgetBulletProps = Omit<
  ComponentPropsWithoutRef<'span'>,
  'onClick'
> & {
  /**
   * Индекс буллета. Сравнивается с `TourWidget.activeStepIndex`.
   */
  index?: number;
  /**
   * Ручное переопределение активного состояния.
   */
  active?: boolean;
  $css?: TourWidgetCss;
};
