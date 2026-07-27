import type {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
  ValidationValue,
  ValidationValueMessage
} from 'react-hook-form';

type TRules = {
  rules: Omit<
    RegisterOptions<FieldValues, Path<FieldValues>>,
    'disabled' | 'setValueAs' | 'valueAsNumber' | 'valueAsDate'
  >;
};

type TOptions = {
  remOptions: Pick<
    RegisterOptions<FieldValues, Path<FieldValues>>,
    'disabled' | 'setValueAs' | 'valueAsNumber' | 'valueAsDate'
  >;
};
export type TReturnUseChangedFormContext = UseFormReturn<FieldValues> &
  TRules &
  TOptions;

export type TUseChangedFormContext = (
  options?: RegisterOptions<FieldValues, Path<FieldValues>>
) => TReturnUseChangedFormContext;

export type TGetRuleValueProps<T extends ValidationValue> = {
  rule: T | ValidationValueMessage<T> | undefined;
  typeValue: string;
};

export type THasValidationRuleProps<TFieldValues extends FieldValues> = {
  options: RegisterOptions<FieldValues, Path<TFieldValues>> | undefined;
  ruleName: keyof RegisterOptions<FieldValues, Path<TFieldValues>>;
};
