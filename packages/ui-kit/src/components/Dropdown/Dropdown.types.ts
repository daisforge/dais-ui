/* eslint-disable no-restricted-imports -- Адаптер и его контракт проверяются непосредственно относительно SDDS. */
import type {
  DropdownItemOption as SDDSItemOption,
  DropdownProps as SDDSDropdownProps,
} from '@salutejs/sdds-finai';
import type { ReactNode, RefAttributes, SyntheticEvent } from 'react';

export type LegacyPlacement = 'top' | 'bottom' | 'left' | 'right';

export type DropdownItemOption = Omit<SDDSItemOption, 'placement' | 'items'> & {
  placement?: SDDSItemOption['placement'] | LegacyPlacement;
  items?: DropdownItemOption[];
};

export type DropdownProps<T extends DropdownItemOption = DropdownItemOption> =
  Omit<
    SDDSDropdownProps<SDDSItemOption>,
    'items' | 'placement' | 'renderItem' | 'onHover' | 'onItemSelect'
  > & {
    items: T[];
    placement?:
      | SDDSDropdownProps<SDDSItemOption>['placement']
      | LegacyPlacement;
    renderItem?: (item: T) => ReactNode;
    onHover?: (index: number, item: T) => void;
    onItemSelect?: (item: T, event: SyntheticEvent) => void;
  } & RefAttributes<HTMLButtonElement>;
