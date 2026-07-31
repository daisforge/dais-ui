import { BodyXS } from '@ui-kit/components/Typography';
import { getViewColor } from '@ui-kit/utils';
import React from 'react';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { getIsRequired, useChangedFormContext } from '../utils';
import { formGroupRadioBoxClassNames as cls } from './classNames';
import { FormRadioGroupStyled, HiddenTextField } from './styled';
import type { FormRadioboxProps, FormRadioGroupProps } from './types';

export const FormRadioGroup = <TFieldValues extends FieldValues>({
  name,
  children,
  options,
  onChange: handleChange,
  label,
  hintText,
  hintHasArrow = true,
  hintTrigger = 'hover',
  titleCaption,
  radioGroupMode,
  size = 's',
  ...rest
}: FormRadioGroupProps<TFieldValues>) => {
  const formCtx = useChangedFormContext(options);
  const { control, rules, remOptions } = formCtx;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      {...remOptions}
      render={({
        field: { onChange, value, ...fieldRest },
        fieldState: { error },
      }) => (
        <FormRadioGroupStyled {...fieldRest} {...rest} $mode={radioGroupMode}>
          {(label || titleCaption) && (
            <HiddenTextField
              required={getIsRequired(options)}
              label={label}
              value={value}
              hintHasArrow={hintHasArrow}
              hintText={hintText ?? ''}
              hintTrigger={hintTrigger}
              className={cls.hiddenInput}
              titleCaption={titleCaption}
              size={size}
            />
          )}
          <div className={cls.groupBoxContainer}>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                const isFormRadiobox =
                  child.props['data-component']?.toLowerCase() ===
                    'formradiobox' ||
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (child.type as any)?.displayName?.toLowerCase() ===
                    'formradiobox' ||
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (child.type as any)?.target?.displayName === 'formradiobox';

                if (!isFormRadiobox) {
                  return child;
                }

                const FormRadioboxComponent =
                  child.type as React.ComponentType<FormRadioboxProps>;

                return (
                  <FormRadioboxComponent
                    {...child.props}
                    name={name}
                    checked={child.props.value === value}
                    onChange={(e) => {
                      onChange(e.target.value);
                      handleChange?.(e.target.value, formCtx);
                    }}
                    $isError={!!error?.message}
                  />
                );
              }
              return null;
            })}
          </div>
          <BodyXS color={getViewColor('negative')}>{error?.message}</BodyXS>
        </FormRadioGroupStyled>
      )}
    />
  );
};
