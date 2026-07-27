import type { Switch } from '@ui-kit/components/Switch';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import type { THandleChange, TMutationRegister } from '../types';

type TSwitchProps = ComponentProps<typeof Switch>;

// type TPropsFromSwitch = Pick<
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

type TPropsFromSwitch = Omit<
  TSwitchProps,
  | keyof Required<TProps>
  | keyof Required<TMutationRegister<object>>
  | 'checked'
  | 'value'
>;

export type FormSwitchProps<TFieldValues extends FieldValues> =
  TMutationRegister<TFieldValues> & TPropsFromSwitch & TProps;
