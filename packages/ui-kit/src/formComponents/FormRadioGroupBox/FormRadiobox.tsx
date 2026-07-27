import React from 'react';

import { FormRadioboxStyled } from './styled';
import type { FormRadioboxProps } from './types';

export const FormRadiobox = ({ name, value, ...rest }: FormRadioboxProps) => (
  <FormRadioboxStyled
    {...rest}
    name={name}
    value={value}
    data-component="FormRadiobox"
  />
);

FormRadiobox.displayName = 'FormRadiobox';
