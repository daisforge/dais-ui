import { BoxProps } from '@ui-kit/components/Box';
import { Popup } from '@ui-kit/components/Popup';
import type { ComponentProps, ReactNode } from 'react';

export type PopupDFSize = 's' | 'm';

export type PopupDFResizableConfig = Exclude<
  ComponentProps<typeof Popup>['resizable'],
  boolean | undefined
>;

export type PopupDFProps = Omit<
  ComponentProps<typeof Popup>,
  'children' | 'isOpen'
> & {
  /**
   * Содержимое popup.
   * Обычно используется композиция из `PopupDF.Header`, `PopupDF.Body` и `PopupDF.Footer`.
   */
  children?: ReactNode;
  /**
   * Начальное состояние открытия в uncontrolled-режиме.
   * @default false
   */
  defaultOpened?: boolean;
  /**
   * Коллбэк смены состояния открытия.
   */
  onToggle?: (opened: boolean) => void;
  /**
   * Размер PopupDF.
   * Влияет на внутренние отступы и типографику header.
   * @default 'm'
   */
  size?: PopupDFSize;
};

export type PopupDFHeaderProps = Omit<BoxProps, 'children'> & {
  /**
   * Заголовок в верхней левой части header.
   */
  title?: ReactNode;
  /**
   * Текст под заголовком в верхней левой части header.
   */
  description?: ReactNode;
  /**
   * Кастомный контент, относящийся по смыслу к header.
   */
  subHeader?: ReactNode;
  /**
   * Кастомный слот в правой части header, слева от крестика закрытия.
   * Прижимается к крестику; если контент широкий — «давит» на title/description
   * (уходят в многоточие с тултипом). Максимальная высота — как у крестика
   * (32px при `size='m'`, 24px при `size='s'`), ширина не ограничена.
   */
  rightBlock?: ReactNode;
  /**
   * Показывать ли крестик закрытия в правой верхней части header.
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * Callback при клике на кнопку со стрелкой назад слева от заголовка.
   */
  onBackButtonClick?: () => void;
  /**
   * Кастомный обработчик закрытия.
   * Если не передан, будет использован обработчик закрытия из `PopupDF`.
   */
  onClose?: () => void;
};

export type PopupDFBodyProps = BoxProps;

export type PopupDFFooterProps = BoxProps & {
  children?: ReactNode;
};
