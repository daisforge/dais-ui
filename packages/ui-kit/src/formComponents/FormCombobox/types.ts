import type { Combobox } from '@ui-kit/components/Combobox';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import type { THandleChange, TMutationRegister } from '../types';

export type TComboboxProps = ComponentProps<typeof Combobox>;

// type TPropsFromCombobox = Pick<
//     TComboboxProps,
//     | TDefKeys
//     | 'multiple'
//     | 'label'
//     | 'items'
//     | 'listHeight'
//     | 'listWidth'
//     | 'disabled'
//     | 'portal'
//     | 'placeholder'
//     | 'listOverflow'
// >;

type TProps =
  | {
      multiselect: true;
      onChange?: THandleChange<string[]>;
    }
  | {
      multiselect?: false | undefined;
      onChange?: THandleChange<string>;
    };

type TPropsFromCombobox = Omit<
  TComboboxProps,
  keyof Required<TProps> | keyof Required<TMutationRegister<object>> | 'value'
>;

export type FormComboboxProps<TFieldValues extends FieldValues> =
  TMutationRegister<TFieldValues> & TPropsFromCombobox & TProps;
