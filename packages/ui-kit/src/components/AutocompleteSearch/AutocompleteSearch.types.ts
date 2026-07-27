import type { Autocomplete } from '@ui-kit/components/Autocomplete';
import type { ComponentProps } from 'react';

type BaseAutocompliteSearchProps = {
  /**
   * Размер Поля ввода
   */
  size?: 'xs' | 's';
  /**
   * Показать/Скрыть count значение в начале выпадающего листа. Или указать собственное число
   */
  beforeListTotal?: number | boolean;
  /**
   * Добавление названия сущности в начале выпадающего списка
   */
  beforeListTotalEntity?: string;
  /**
   * Действие при выполнении нажатия на кнопку очистки поля ввода
   * @deprecated Используйте onClear
   */
  handlerClear?: () => void;
  /**
   * Действие при выполнении нажатия на кнопку очистки поля ввода
   */
  onClear?: () => void;
};

export type AutocompleteSearchProps = BaseAutocompliteSearchProps &
  ComponentProps<typeof Autocomplete>;
