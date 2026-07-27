import { Combobox } from '@ui-kit/components/Combobox';
import React from 'react';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { getPriorityRequired, useChangedFormContext } from '../utils';
import type { FormComboboxProps } from './types';
/**
 *  FormAutocomplete относится к группе mutation-form элементов. Он расширяет возможности
 *  компонента [Combobox]  для использования в формах.
 */
export const FormCombobox = <TFieldValues extends FieldValues>({
  name,
  options,
  label,
  helperText = '',
  items,
  onChange: handleChange,
  onBlur: handleBlur,
  placeholder,
  disabled,
  view,
  required: propsRequired,
  multiple = false,
  ...rest
}: FormComboboxProps<TFieldValues>): ReturnType<typeof Combobox> => {
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
      {...remOptions}
      render={({
        field: { name: _fieldName, onBlur, ...fieldRest },
        fieldState: { error }
      }) => {
        const calcMultiple = (multiple
          ? true
          : Array.isArray(fieldRest.value)) as unknown as false;

        return (
          <Combobox
            {...fieldRest}
            multiple={calcMultiple}
            disabled={disabled}
            helperText={error?.message || helperText}
            items={items}
            label={label}
            placeholder={placeholder}
            required={(label && !!newOptions.required) || undefined}
            requiredPlacement="right"
            hasRequiredIndicator={(label && !!newOptions.required) || undefined}
            size="s"
            view={error?.type ? 'negative' : view ?? 'default'}
            onChange={(valueList: string | string[]) => {
              fieldRest.onChange(valueList);
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              handleChange?.(valueList as any, formCtx);

              if (rest.closeAfterSelect ?? !calcMultiple) {
                onBlur();
                handleBlur?.(
                  undefined as unknown as React.FocusEvent<
                    HTMLInputElement,
                    Element
                  >
                );
              }
            }}
            onBlur={(e) => {
              onBlur();
              handleBlur?.(e);
            }}
            // типы конфликтуют из-за Omit<> и тп., хотя идентичны
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...(rest as any)}
          />
        );
      }}
      rules={rules}
    />
  );
};
