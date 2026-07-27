import { BoxProps } from '@ui-kit/components/Box';
import { PopoverBeta } from '@ui-kit/components/PopoverBeta';
import type { ComponentProps, ReactNode } from 'react';

export type PopoverDFSize = 's' | 'm';

export type PopoverDFResizableConfig = Exclude<
  ComponentProps<typeof PopoverBeta>['resizable'],
  boolean | undefined
>;

type PopoverDFBaseProps = {
  /**
   * Содержимое popover.
   * Обычно используется композиция из `PopoverDF.Header`, `PopoverDF.Body` и `PopoverDF.Footer`.
   */
  children?: ReactNode;
  /**
   * Размер PopoverDF.
   * Влияет на внутренние отступы и типографику header.
   * @default 'm'
   */
  size?: PopoverDFSize;
};

export type PopoverDFProps = Omit<
  ComponentProps<typeof PopoverBeta>,
  'children' | 'appearance' | 'size'
> &
  PopoverDFBaseProps;

export type PopoverDFHeaderProps = Omit<BoxProps, 'children'> & {
  /**
   * Заголовок в верхней левой части header.
   */
  title?: ReactNode;
  /**
   * Текст под заголовком в верхней левой части header.
   */
  description?: ReactNode;
  /**
   * Нижний блок header на всю ширину.
   * Удобен для кастомных слотов, фильтров, тегов и другого дополнительного контента.
   */
  bottomBlock?: ReactNode;
  /**
   * Показывать ли крестик закрытия в правой верхней части header.
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * Кастомный обработчик закрытия.
   * Если не передан, будет использован обработчик закрытия из `PopoverDF`.
   */
  onClose?: () => void;
};

export type PopoverDFBodyProps = BoxProps;

/**
 * Нижняя секция popover под body.
 * Контент и его раскладка полностью управляются через `children`.
 */
export type PopoverDFFooterProps = BoxProps & {
  children?: ReactNode;
};
