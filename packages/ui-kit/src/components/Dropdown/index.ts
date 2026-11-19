import type {
  DropdownItemOption,
  DropdownProps as SDDSDropdownProps,
} from '@salutejs/sdds-finai';
import type { RefAttributes } from 'react';

export type { DropdownItemOption } from '@salutejs/sdds-finai';
export { Dropdown } from '@salutejs/sdds-finai';

export type DropdownProps<T extends DropdownItemOption = DropdownItemOption> =
  SDDSDropdownProps<T> & RefAttributes<HTMLButtonElement>;
