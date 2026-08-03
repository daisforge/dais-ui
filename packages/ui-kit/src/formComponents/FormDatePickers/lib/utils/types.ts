import type {
  FieldValues,
  Path,
  RegisterOptions,
  ValidationRule,
} from 'react-hook-form';

import { TDatePickerFormat } from '../../types';

export type TMouthNames = { [key: string]: number };
export type TValidateDateProps = {
  min?: ValidationRule<string | number> | undefined;
  max?: ValidationRule<string | number> | undefined;
  required?: string | ValidationRule<boolean> | undefined;
  invalidFormatMessage: string;
  format?: TDatePickerFormat;
};
export type THasValidationRuleProps<TFieldValues extends FieldValues> = {
  options: RegisterOptions<FieldValues, Path<TFieldValues>> | undefined;
  ruleName: keyof RegisterOptions<FieldValues, Path<TFieldValues>>;
};
