import { Pagination } from '@ui-kit/components/Pagination';
import { ComponentProps } from 'react';

export type PaginationProps = Omit<
  ComponentProps<typeof Pagination>,
  'onChangePageValue' | 'onChange'
> & {
  onChangePageValue?: (
    page: number | undefined,
    scrollToTop: () => void,
  ) => void;
  onChange?: (
    newPage: number | undefined,
    perPage: number | undefined,
    scrollToTop: () => void,
  ) => void;
  /**
   * Нужно ли активировать умную адаптацию изменения количества слотов в зависимости от ширины блока пагинации и от size
   * @default false
   */
  responsiveSlots?: boolean;
  /**
   * Callback при ресайзе блока с пагинацией таблицы
   */
  onResize?: (width: number) => void;
};

export type PaginationSize = NonNullable<PaginationProps['size']>;

export type PaginationSlots = PaginationProps['slots'];
