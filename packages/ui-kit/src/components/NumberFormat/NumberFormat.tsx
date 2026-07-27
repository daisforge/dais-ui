// eslint-disable-next-line no-restricted-imports
import {
  NumberFormat as BaseNumberFormat,
  numberFormatter
} from '@salutejs/sdds-finai';
import { getContentRight } from '@ui-kit/shared/utils/inputs';
import type { ComponentProps } from 'react';
import React, { forwardRef } from 'react';

type NumberFormatBaseProps = ComponentProps<typeof BaseNumberFormat>;

export { numberFormatter };

export type NumberFormatCompProps = NumberFormatBaseProps & {
  onClear?: () => void;
};

export const NumberFormat = forwardRef<HTMLInputElement, NumberFormatCompProps>(
  (
    { disabled, readOnly, contentRight, size = 'xs', value, onClear, ...rest },
    ref
  ) => (
    <BaseNumberFormat
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
        contentRight
      })}
    />
  )
);

NumberFormat.displayName = 'NumberFormat';
