import type { BreadcrumbsPropsComp } from '@ui-kit/components/Breadcrumbs';
import type { IconButton } from '@ui-kit/components/IconButton';
import { TypographyWithAutoTooltipProps } from '@ui-kit/components/Typography';
import type { IconChevronLeft } from '@ui-kit/icons';
import type { ComponentProps, ReactNode } from 'react';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

export type PageTitleSlotSizesProps = {
  /**
   * Размер кнопок в кастомных слотах
   */
  buttonSize: 's' | 'xs';
};

export type PageTitleAdaptiveSlot =
  | ReactNode
  | ((props: PageTitleSlotSizesProps) => ReactNode);

/**
 * Компонент `PageTitle` предназначен для отображения заголовка страницы с опциональными breadcrumbs, кнопкой «назад», заголовком, подзаголовком и правым блоком действий.
 * Компонент автоматически обрабатывает длинные тексты через `TypographyWithAutoTooltip`, показывая тултип при обрезке.
 * */
export type PageTitleProps = {
  /**
   * Заголовок страницы (текст)
   */
  title?: string;
  /**
   * Пропсы для TypographyWithAutoTooltip в который обернут title
   */
  titleTypographyProps?: Omit<
    TypographyWithAutoTooltipProps<'H2'>,
    'children' | 'variant'
  >;
  /**
   * Подзаголовок/описание страницы (текст)
   */
  subtitle?: string;
  /**
   * Пропсы для  TypographyWithAutoTooltip в который обернут subtitle
   */
  subtitleTypographyProps?: Omit<
    TypographyWithAutoTooltipProps<'BodyS'>,
    'children' | 'variant'
  >;
  /**
   * Кастомный слот правее заголовка.
   * Можно передать ReactNode или callback с размерами для адаптива.
   */
  titleSlot?: PageTitleAdaptiveSlot;
  /**
   * Контент справа (прижат к правому краю и к нижней границе).
   * Можно передать ReactNode или callback с размерами для адаптива.
   */
  rightSlot?: PageTitleAdaptiveSlot;
  /**
   * Отключает принудительный адаптив компонента на viewport <= 1280px.
   *
   * @deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
   *
   * @remarks
   * При `true` компонент использует desktop-размеры для кастомных слотов и кнопки назад даже на viewport <= 1280px.
   * Это временный escape hatch, не основной сценарий использования.
   *
   * @default false
   */
  disableMediaAdaptive?: boolean;
  /**
   * Пропсы для Breadcrumbs компонента
   * По умолчанию size='m'
   */
  breadcrumbs?: BreadcrumbsPropsComp;
  /**
   * Показывать ли кнопку со стрелкой назад слева от title
   */
  showBackButton?: boolean;
  /**
   * Callback при клике на кнопку назад
   */
  onBackClick?: () => void;
  /**
   * Кастомные стили styled-components для основного контейнера
   */
  $css?: string | CSSObject | FlattenSimpleInterpolation;
  /**
   * Дополнительный className для корневого элемента
   */
  className?: string;
};

export type PageTitleIconButtonProps = ComponentProps<typeof IconButton> & {
  iconSize?: ComponentProps<typeof IconChevronLeft>['size'];
};
