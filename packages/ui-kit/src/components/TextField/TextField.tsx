// eslint-disable-next-line no-restricted-imports
import { TextField as BaseTextField } from '@salutejs/sdds-finai';
import { getContentRight } from '@ui-kit/shared/utils/inputs';
import type { ComponentProps } from 'react';
import React, { forwardRef } from 'react';

type TextFieldBaseProps = ComponentProps<typeof BaseTextField>;

export type TextFieldProps = TextFieldBaseProps & {
  /**
   * Callback при нажатии на кнопку очистки поля ввода.
   * При наличии value и onClear справа отображается крестик.
   */
  onClear?: () => void;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { disabled, readOnly, contentRight, size = 's', value, onClear, ...rest },
    ref,
  ) => (
    <BaseTextField
      {...rest}
      ref={ref}
      size={size}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      contentRight={getContentRight({
        disabled,
        readOnly,
        value,
        onClear,
        size,
        contentRight,
      })}
    />
  ),
);

TextField.displayName = 'TextField';
