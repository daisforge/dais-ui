import { forwardRef } from 'react';

import { StyledSwitch } from './styled';
import { BaseSwitchProps } from './types';

const Switch = forwardRef<HTMLInputElement, Omit<BaseSwitchProps, 'ref'>>(
  ({ hasBackground, size, ...rest }, ref) => (
    <StyledSwitch
      hasBackground={hasBackground}
      ref={ref}
      size={hasBackground ? 'm' : size}
      {...rest}
    />
  )
);

export { Switch };
