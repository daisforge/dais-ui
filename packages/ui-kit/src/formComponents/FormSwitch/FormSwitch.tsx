import { Switch } from '@ui-kit/components/Switch';
import React from 'react';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { useChangedFormContext } from '../utils';
import type { FormSwitchProps } from './types';

/**
 *  FormSwitch относится к группе mutation-form элементов. Он расширяет возможности
 *  компонента [Switch] для использования в формах.
 *
 *  **Обратите внимание, что компонент FormSwitch не валидируется.**
 */
export const FormSwitch = <TFieldValues extends FieldValues>({
  label,
  name,
  options,
  onChange: handleChange,
  ...rest
}: FormSwitchProps<TFieldValues>) => {
  const formCtx = useChangedFormContext(options);
  const {
    control,
    rules,
    remOptions,
    formState: { defaultValues },
  } = formCtx;

  return (
    <Controller
      control={control}
      name={name}
      {...remOptions}
      render={({ field: { name: _fieldName, value, ...fieldRest } }) => (
        <Switch
          {...fieldRest}
          defaultChecked={defaultValues && defaultValues[name]}
          checked={value}
          label={label}
          size="s"
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
