import { NumberFormat } from '@ui-kit/components/NumberFormat';
import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';

import { getPriorityRequired, useChangedFormContext } from '../utils';
import type { FormNumberFormatProps } from './types';

export const FormNumberFormat = <TFieldValues extends FieldValues>({
  name,
  options,
  onChange: handleChange,
  onBlur: handleBlur,
  view,
  isAllowed,
  leftHelper,
  ref,
  required: propsRequired,
  ...rest
}: FormNumberFormatProps<TFieldValues>) => {
  const newOptions = {
    ...options,
    required: getPriorityRequired({ options, ruleName: 'required' })
      ? options?.required
      : propsRequired
  };

  const formCtx = useChangedFormContext(newOptions);
  const { control, rules, remOptions } = formCtx;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      {...remOptions}
      render={({
        field: { value, ref: rhfRef, ...fieldRest },
        fieldState: { error }
      }) => (
        <NumberFormat
          {...fieldRest}
          ref={rhfRef}
          value={value as string}
          isAllowed={(values) => {
            const allowed = isAllowed ? isAllowed(values) : true;
            return allowed;
          }}
          onChange={(e, values) => {
            const newValue = values?.value ?? e?.target?.value ?? '';
            fieldRest.onChange(newValue);
            handleChange?.(newValue, formCtx);
          }}
          onBlur={(e) => {
            fieldRest.onBlur();
            handleBlur?.(e);
          }}
          leftHelper={error?.message || leftHelper}
          view={error?.message ? 'negative' : view ?? 'default'}
          required={(rest.label && !!newOptions.required) || undefined}
          hasRequiredIndicator={
            (rest.label && !!newOptions.required) || undefined
          }
          // типы конфликтуют из-за Omit<> и тп., хотя идентичны
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(rest as any)}
        />
      )}
    />
  );
};
