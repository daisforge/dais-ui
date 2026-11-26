import { Autocomplete as BaseAutocomplete } from '@salutejs/sdds-finai';
import { getContentRight } from '@ui-kit/shared/utils/inputs';
import type {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import React, { forwardRef } from 'react';

import { AutocompleteProps } from './Autocomplete.types';

export const Autocomplete: ForwardRefExoticComponent<
  PropsWithoutRef<AutocompleteProps> & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    { disabled, readOnly, contentRight, size = 's', value, onClear, ...rest },
    ref,
  ) => (
    <BaseAutocomplete
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

Autocomplete.displayName = 'Autocomplete';
