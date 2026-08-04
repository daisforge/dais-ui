import { Mask } from '@ui-kit/components/Mask';
import React from 'react';
import { Controller, type FieldValues } from 'react-hook-form';

import { getPriorityRequired, useChangedFormContext } from '../utils';
import type { FormMaskProps } from './types';

/**
 *  [FormMask] относится к группе mutation-form элементов. Он расширяет возможности
 *  компонента [Mask] для использования в формах
 */
export const FormMask = <TFieldValues extends FieldValues>({
  name,
  options,
  leftHelper = '',
  view,
  label,
  onChange: handleChange,
  onBlur: handleBlur,
  required: propsRequired,
  ...rest
}: FormMaskProps<TFieldValues>) => {
  const newOptions = {
    ...options,
    required: getPriorityRequired({ options, ruleName: 'required' })
      ? options?.required
      : propsRequired,
  };

  const formCtx = useChangedFormContext(newOptions);
  const { control, remOptions, rules } = formCtx;

  return (
    <Controller
      control={control}
      name={name}
      {...remOptions}
      rules={rules}
      render={({
        field: { name: _fieldName, onBlur, onChange, ...fieldRest },
        fieldState: { error },
      }) => (
        <Mask
          {...fieldRest}
          label={label}
          leftHelper={error?.message ?? leftHelper}
          name={name}
          required={!!newOptions.required || undefined}
          requiredPlacement="right"
          hasRequiredIndicator={!!newOptions.required || undefined}
          size="s"
          view={error?.type ? 'negative' : view ?? 'default'}
          onValueChange={({ value }) => {
            onChange({ target: { value } }); // onChange - для работы при revalidate='onChange'
            handleChange?.(value, formCtx);
          }}
          onBlur={(e) => {
            onBlur();
            handleBlur?.(e);
          }}
          // типы конфликтуют из-за Omit<> и тп., хотя идентичны
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(rest as any)}
        />
      )}
    />
  );
};
