import type { TextArea } from '@ui-kit/components/TextArea';
import React, { useState } from 'react';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import {
  getPriorityRequired,
  getRuleValue,
  useChangedFormContext,
} from '../utils';
import { RightContent } from './components/RightContent';
import type { FormTextAreaProps } from './types';
import { TextAreaStyled } from './ui';

export const FormTextArea = <TFieldValues extends FieldValues>({
  name,
  options,
  onChange: handleChange,
  label,
  leftHelper = '',
  onBlur: handleBlur,
  onFocus: handleFocus,
  view,
  showClearButton = true,
  required: propsRequired,
  ...rest
}: FormTextAreaProps<TFieldValues>): ReturnType<typeof TextArea> => {
  const newOptions = {
    ...options,
    required: getPriorityRequired({ options, ruleName: 'required' })
      ? options?.required
      : propsRequired,
  };

  const [isFocused, setIsFocused] = useState(false);
  const formCtx = useChangedFormContext(newOptions);
  const { control, rules, remOptions, setValue } = formCtx;

  const maxCount = getRuleValue<number>({
    rule: rules.maxLength,
    typeValue: 'number',
  });

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
        <TextAreaStyled
          {...fieldRest}
          label={label}
          labelPlacement="outer"
          leftHelper={error?.message || leftHelper}
          leftHelperPlacement="inner"
          name={name}
          required={(label && !!newOptions.required) || undefined}
          requiredPlacement="right"
          hasRequiredIndicator={(label && !!newOptions.required) || undefined}
          rightHelper={
            isFocused &&
            !fieldRest.disabled &&
            !rest.disabled &&
            !rest.readOnly && (
              <RightContent
                currentCount={(fieldRest.value?.length as number) || 0}
                maxCount={maxCount as number}
                onClear={() => {
                  setValue(name as string, '', {
                    shouldDirty: true,
                  });
                  handleChange?.('', formCtx);
                }}
                showClearButton={showClearButton}
              />
            )
          }
          size="s"
          view={error?.type ? 'negative' : view ?? 'default'}
          onBlur={(e) => {
            if (e.relatedTarget) {
              return;
            }
            onBlur();
            handleBlur?.(e);
            setIsFocused(false);
          }}
          onChange={(e) => {
            onChange(e.target.value);
            handleChange?.(e.target.value, formCtx);
          }}
          onFocus={(e) => {
            setIsFocused(true);
            handleBlur?.(e);
          }}
          {...(maxCount !== undefined && { maxLength: maxCount })}
          // типы конфликтуют из-за Omit<> и тп., хотя идентичны
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(rest as any)}
        />
      )}
    />
  );
};
