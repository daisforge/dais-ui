import type { TextField } from '@ui-kit/components/TextField';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import type { THandleChange, TMutationRegister } from '../types';

type TTextFieldProps = ComponentProps<typeof TextField>;

// type TPropsFromTextField = Pick<
//     TTextFieldProps,
//     TDefKeys | 'label' | 'disabled' | 'readOnly' | 'placeholder'
// >;

type TProps = {
  onChange?: THandleChange<string>;
};
type TPropsFromTextField = Omit<
  TTextFieldProps,
  keyof Required<TProps> | keyof Required<TMutationRegister<object>> | 'value'
>;

export type FormTextFieldProps<TFieldValues extends FieldValues> =
  TMutationRegister<TFieldValues> & TPropsFromTextField & TProps;
