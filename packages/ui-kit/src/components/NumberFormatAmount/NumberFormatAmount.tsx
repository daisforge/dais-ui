import React, { forwardRef } from 'react';

import { StyledNumberFormat } from './NumberFormatAmount.styled';
import type { NumberFormatAmountProps } from './NumberFormatAmount.types';

type EmptyObj = Record<string, never>;

export const NumberFormatAmount = forwardRef<
  HTMLInputElement,
  NumberFormatAmountProps
>(({ size = 'xs', ...restProps }, ref) => (
  <StyledNumberFormat
    ref={ref as React.Ref<HTMLInputElement>}
    $amountSize={size}
    size={size}
    {...(restProps as unknown as EmptyObj)}
  />
));

NumberFormatAmount.displayName = 'NumberFormatAmount';
