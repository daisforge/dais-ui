import { DatePickerCompProps } from '@ui-kit/components/DatePicker';
import type { FieldValues } from 'react-hook-form';

import type { TMutationRegister } from '../../types';
import { TDatePickerFormat } from '../types';

type TDatePickerProps = DatePickerCompProps;

// type TPropsFromDatePicker = Pick<
//   TDatePickerProps,
//   'label' | 'disabled' | 'readOnly' | 'usePortal' | 'onClick' | 'maskWithFormat'
// >;

type TProps = {
  portal?: TDatePickerProps['frame'];
  // onChange?: THandleChange<string>;
  textHint?: string;
  format?: TDatePickerFormat;
  invalidFormatMessage?: string;
};

type TPropsFromDatePicker = Omit<
  TDatePickerProps,
  keyof Required<TProps> | keyof Required<TMutationRegister<object>> | 'value'
>;

export type FormDatePickerProps<TFieldValues extends FieldValues> =
  TMutationRegister<TFieldValues> & TPropsFromDatePicker & TProps;
