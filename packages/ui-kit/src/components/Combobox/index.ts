import type {
  Combobox as ComboboxSDDS,
  ComboboxItemOption,
  ComboboxProps
} from '@salutejs/sdds-finai';
import type { ComponentProps } from 'react';

type ComboboxType<T extends ComboboxItemOption> = typeof ComboboxSDDS<T>;

type ComboboxCompProps<T extends ComboboxItemOption> = ComponentProps<
  ComboboxType<T>
>;

export { StyledCombobox as Combobox } from './Combobox';
export type { ComboboxCompProps, ComboboxItemOption, ComboboxProps };
