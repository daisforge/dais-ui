import { Autocomplete } from '@ui-kit/components/Autocomplete';
import React from 'react';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { getPriorityRequired, useChangedFormContext } from '../utils';
import type { FormAutocompleteProps } from './types';

/**
 *  FormAutocomplete относится к группе mutation-form элементов. Он расширяет возможности
 *  компонента Autocomplete
 */
export const FormAutocomplete = <TFieldValues extends FieldValues>({
  name,
  options,
  label,
  onChange: handleChange,
  onChangeInput: handleChangeInput,
  leftHelper = '',
  onBlur: handleBlur,
  view,
  required: propsRequired,
  ...rest
}: FormAutocompleteProps<TFieldValues>): ReturnType<typeof Autocomplete> => {
  const newOptions = {
    ...options,
    required: getPriorityRequired({ options, ruleName: 'required' })
      ? options?.required
      : propsRequired,
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
        field: { name: _fieldName, onBlur, onChange, ...fieldRest },
        fieldState: { error },
      }) => (
        <Autocomplete
          {...fieldRest}
          label={label}
          leftHelper={error?.message || leftHelper}
          required={!!newOptions.required || undefined}
          requiredPlacement="right"
          hasRequiredIndicator={!!newOptions.required || undefined}
          view={error?.type ? 'negative' : view ?? 'default'}
          onChange={async ({ target: { value } }) => {
            await onChange(value);
            handleChangeInput?.(value, formCtx);
          }}
          size="s"
          onSuggestionSelect={({ label: labelSuggestion }) => {
            onChange(labelSuggestion);
            handleChange?.(labelSuggestion, formCtx);
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
