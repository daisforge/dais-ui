import type { Checkbox } from '@ui-kit/components/Checkbox';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import type { THandleChange, TMutationRegister } from '../types';

type TCheckboxProps = ComponentProps<typeof Checkbox>;

// type TPropsFromCheckbox = Pick<
//     TSwitchProps,
//     | TDefKeys
//     | 'label'
//     | 'disabled'
//     | 'readOnly'
//     | 'description'
//     | 'labelPosition'
// >;

type TProps = {
  onChange?: THandleChange<boolean>;
};

type TPropsFromCheckbox = Omit<
  TCheckboxProps,
  | keyof Required<TProps>
  | keyof Required<TMutationRegister<object>>
  | 'checked'
  | 'value'
>;

export type FormCheckboxProps<TFieldValues extends FieldValues> =
  TMutationRegister<TFieldValues> & TPropsFromCheckbox & TProps;
