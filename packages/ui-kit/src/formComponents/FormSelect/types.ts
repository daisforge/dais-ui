import type { Select } from '@ui-kit/components/Select';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import type { THandleChange, TMutationRegister } from '../types';

type TSelectProps = ComponentProps<typeof Select>;

// type TPropsFromSelect = Pick<
//     TSelectProps,
//     | TDefKeys
//     | 'multiselect'
//     | 'label'
//     | 'items'
//     | 'listHeight'
//     | 'listWidth'
//     | 'disabled'
//     | 'portal'
//     | 'placeholder'
//     | 'listOverflow'
//     | 'zIndex'
//     | 'onScrollBottom'
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

type TPropsFromSelect = Omit<
  TSelectProps,
  keyof Required<TProps> | keyof Required<TMutationRegister<object>> | 'value'
>;

export type FormSelectProps<TFieldValues extends FieldValues> =
  TMutationRegister<TFieldValues> &
    TPropsFromSelect &
    TProps & { required?: boolean };
