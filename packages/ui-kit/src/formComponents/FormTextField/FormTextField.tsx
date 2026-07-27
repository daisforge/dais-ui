import { TextField } from '@ui-kit/components/TextField';
import { IconClose } from '@ui-kit/icons';
import React, { useState } from 'react';
import { Controller, type FieldValues } from 'react-hook-form';

import { getPriorityRequired, useChangedFormContext } from '../utils';
import type { FormTextFieldProps } from './types';
import { IconButtonStyled } from './ui/IconButtonStyled';
/**
 *  FormTextField относится к группе form элементов. Он расширяет возможности
 *  компонента [TextField] для использования в формах
 */

export const FormTextField = <TFieldValues extends FieldValues>({
  name,
  options,
  onChange: handleChange,
  leftHelper = '',
  label,
  //
  onFocus: handleFocus,
  onBlur: handleBlur,
  view,
  required: propsRequired,
  ...rest
}: FormTextFieldProps<TFieldValues>): ReturnType<typeof TextField> => {
  const newOptions = {
    ...options,
    required: getPriorityRequired({ options, ruleName: 'required' })
      ? options?.required
      : propsRequired
  };

  const [focusTextField, setFocusTextField] = useState(false);
  const formCtx = useChangedFormContext(newOptions);
  const { control, rules, remOptions } = formCtx;

  return (
    <Controller
      control={control}
      name={name}
      {...remOptions}
      rules={rules}
      render={({
        field: { name: _fieldName, value, onBlur, onChange, ...fieldRest },
        fieldState: { error }
      }) => (
        <TextField
          {...fieldRest}
          contentRight={
            <IconButtonStyled
              $visibility={
                !rest.readOnly && focusTextField && value.length > 0
                  ? 'visible'
                  : 'hidden'
              }
              view="clear"
              onClick={(e) => {
                onChange('');
                handleChange?.('', formCtx);
                e.stopPropagation();
              }}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
            >
              <IconClose color="inherit" size="xs" />
            </IconButtonStyled>
          }
          label={label}
          leftHelper={error?.message ?? leftHelper}
          name={name}
          required={(label && !!newOptions.required) || undefined}
          requiredPlacement="right"
          hasRequiredIndicator={(label && !!newOptions.required) || undefined}
          size="s"
          value={value as string}
          view={error?.type ? 'negative' : view ?? 'default'}
          onBlur={async (e) => {
            setFocusTextField(false);
            await onBlur();
            handleBlur?.(e);
          }}
          onChange={(e) => {
            onChange(e);
            handleChange?.(e.target.value, formCtx);
          }}
          onFocus={(e) => {
            setFocusTextField(true);
            handleFocus?.(e);
          }}
          // типы конфликтуют из-за Omit<> и тп., хотя идентичны
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(rest as any)}
        />
      )}
    />
  );
};
