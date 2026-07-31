import type { Select } from '@ui-kit/components/Select';
import React from 'react';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { getPriorityRequired, useChangedFormContext } from '../utils';
import type { FormSelectProps } from './types';
import { SelectStyled } from './ui/SelectStyled';

/**
 *  MutationSelect относится к группе mutation-form элементов. Он расширяет возможности
 *  компонента [Select] для использования в формах
 */

export const FormSelect = <TFieldValues extends FieldValues>({
  name,
  options,
  items,
  onChange: handleChange,
  onBlur: handleBlur,
  label,
  helperText = '',
  view,
  required: propsRequired,
  multiselect = false,
  ...rest
}: FormSelectProps<TFieldValues>): ReturnType<typeof Select> => {
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
      {...remOptions}
      render={({
        field: { name: _fieldName, onBlur, ...fieldRest },
        fieldState: { error },
      }) => {
        const calcMultiselect = (multiselect
          ? true
          : Array.isArray(fieldRest.value)) as unknown as false;

        return (
          <SelectStyled
            {...fieldRest}
            multiselect={calcMultiselect}
            helperText={error?.message || helperText}
            items={items}
            label={label}
            size="s"
            chipView="secondary"
            view={error?.type ? 'negative' : view ?? 'default'}
            onChange={(newValue: string) => {
              fieldRest.onChange(newValue);
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              handleChange?.(newValue as any, formCtx);

              if (rest.closeAfterSelect ?? !calcMultiselect) {
                onBlur();
                handleBlur?.(
                  undefined as unknown as React.FocusEvent<
                    HTMLButtonElement,
                    Element
                  >,
                );
              }
            }}
            onBlur={(e) => {
              onBlur();
              handleBlur?.(e);
            }}
            required={(label && !!newOptions.required) || false}
            requiredPlacement="right"
            hasRequiredIndicator={(label && !!newOptions.required) || false}
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
