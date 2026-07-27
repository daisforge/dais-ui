import { IconProps } from '@ui-kit/icons';
import { ReactNode } from 'react';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

import { ButtonCompProps } from '../Button';
import { LinkButtonCompProps } from '../LinkButton';

type ButtonVariant = {
  type: 'button';
  props: Omit<ButtonCompProps, 'size'>;
};

type LinkButtonVariant = {
  type: 'link';
  props: Omit<LinkButtonCompProps, 'size'>;
};

export type EmptyStateButtonProps = ButtonVariant | LinkButtonVariant;

export type EmptyStateClasses = {
  root?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
  buttons?: string;
  extraButton?: string;
};

/**
 * Варианты изображений для EmptyState
 *
 * @remarks
 * Вариант `'not-result'` является устаревшим (deprecated).
 * Используйте `'not-found'` вместо него. Оставлен для обратной совместимости.
 */
export type EmptyStateVariant =
  | 'loading'
  | 'life-circle'
  | 'need-access'
  | 'no-access'
  | 'no-content'
  | 'not-found'
  /** @deprecated Используйте `'not-found'` */
  | 'not-result'
  | 'success';

/**
 * Варианты изображений для ErrorPage
 */
export type ErrorPageVariant =
  | '400'
  | '401'
  | '403'
  | '404'
  | '409'
  | '500'
  | '502'
  | '503'
  | 'unidentified';

/**
 * Объединенный тип вариантов
 */
export type EmptyStateImageVariant = EmptyStateVariant | ErrorPageVariant;

/**
 * Props компонента EmptyState
 */
export type EmptyStateProps = {
  /**
   * Размер компонента (small, medium, large)
   *   */
  size: 's' | 'm' | 'l';
  /**
   * Основной заголовок состояния
   *   */
  title?: ReactNode;
  /**
   * Дополнительный поясняющий текст
   *   */
  subtitle?: ReactNode;
  /**
   * Вариант изображения для отображения
   * Поддерживаются варианты EmptyState (loading, life-circle, need-access, no-access, no-content, not-found, not-result)
   * и варианты ErrorPage (400, 401, 403, 404, 500, 502, 503, unidentified)
   */
  variant?: EmptyStateImageVariant;
  /**
   * @deprecated Используйте prop `variant` для отображения изображений.
   * Компонент иконки (только для size='m' или для size='s')
   * Оставлено для обратной совместимости.
   */
  icon?: React.FC<IconProps>;
  /**
   * @deprecated Используйте prop `variant` для отображения изображений.
   * Дополнительные пропсы для иконки
   * Оставлено для обратной совместимости.
   */
  iconProps?: Omit<IconProps, 'size'>;
  /**
   * Массив кнопок (до 2 для size='l', до 1 для других размеров)
   */
  buttons?: EmptyStateButtonProps[];
  /**
   * Дополнительная кнопка (только для size='l')
   */
  extraButton?: EmptyStateButtonProps;
  /**
   * Дополнительный класс для корневого элемента
   */
  className?: string;
  /**
   * Объект с классами для внутренних элементов
   */
  classes?: EmptyStateClasses;
  /**
   * Центрировать контент по вертикали и горизонтали
   */
  centered?: boolean;
  /**
   * Кастомные CSS-стили для контейнера
   */
  $css?: string | CSSObject | FlattenSimpleInterpolation;
};

/**
 * Размеры компонента
 */
export type EmptyStateSize = EmptyStateProps['size'];
