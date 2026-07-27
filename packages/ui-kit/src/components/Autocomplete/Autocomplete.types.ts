import type { Autocomplete as BaseAutocomplete } from '@salutejs/sdds-finai';
import type { ComponentProps } from 'react';

type AutocompleteBaseProps = ComponentProps<typeof BaseAutocomplete>;

export type AutocompleteProps = AutocompleteBaseProps & {
  /**
   * Callback при нажатии на кнопку очистки поля ввода.
   */
  onClear?: () => void;
};
