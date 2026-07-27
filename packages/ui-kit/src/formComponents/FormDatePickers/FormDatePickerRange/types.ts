import type { DatePickerRange } from '@ui-kit/components/DatePicker';
import type { ComponentProps } from 'react';
import type {
  FieldValues,
  Message,
  Validate,
  ValidationRule
} from 'react-hook-form';

import type { TMutationRegister } from '../../types';
import { TDatePickerFormat } from '../types';

type TDatePickerRangeProps = ComponentProps<typeof DatePickerRange>;
export type TDatePickerRangeData = {
  dateFrom: Date | string | undefined;
  dateTo: Date | string | undefined;
};

// type TPropsFromDatePickerRange = Pick<
//   TDatePickerRangeProps,
//   | 'label'
//   | 'disabled'
//   | 'readOnly'
//   | 'min'
//   | 'max'
//   | 'format'
//   | 'maskWithFormat'
//   | 'isDoubleCalendar'
//   | 'includeEdgeDates'
//   | 'type'
//   | 'usePortal'
//   | 'closeAfterDateSelect'
// >;

type TPropsFromDatePickerRange = Omit<
  TDatePickerRangeProps,
  keyof Required<TProps> | keyof Required<TMutationRegister<object>> | 'value'
>;

type TProps = {
  portal?: TDatePickerRangeProps['frame'];
  onChange?: (newValue: string) => void;
  textHint?: string;
  format?: TDatePickerFormat;
  invalidFormatMessage?: string;
};

export type TMutationDatePickerRangeProps<TFieldValues extends FieldValues> =
  TMutationRegister<TFieldValues> & TPropsFromDatePickerRange & TProps;

export type TValidateDatePickerRange = Validate<
  TDatePickerRangeData,
  Record<string, TMutationRegister<FieldValues>>
>;
export type TRequireResult = string | boolean | undefined;
export type TRequireType = Message | ValidationRule<boolean> | undefined;
