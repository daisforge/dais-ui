import { Checkbox } from '@ui-kit/components/Checkbox';
import React from 'react';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { useChangedFormContext } from '../utils';
import type { FormCheckboxProps } from './types';

/**
 *  FormCheckbox относится к группе mutation-form элементов. Он расширяет возможности
 *  компонента [Checkbox] для использования в формах.
 *
 *  **Обратите внимание, что компонент FormCheckbox не валидируется.**
 */
export const FormCheckbox = <TFieldValues extends FieldValues>({
  label,
  name,
  options,
  onChange: handleChange,
  ...rest
}: FormCheckboxProps<TFieldValues>) => {
  const formCtx = useChangedFormContext(options);
  const {
    control,
    rules,
    remOptions,
    formState: { defaultValues }
  } = formCtx;

  return (
    <Controller
      control={control}
      name={name}
      {...remOptions}
      render={({ field: { name: _fieldName, value, ...fieldRest } }) => (
        <Checkbox
          {...fieldRest}
          defaultChecked={defaultValues && defaultValues[name]}
          checked={value}
          label={label}
          size="m"
          onChange={(e) => {
            fieldRest.onChange(e.target.checked);
            handleChange?.(e.target.checked, formCtx);
          }}
          {...rest}
        />
      )}
      rules={rules}
    />
  );
};
