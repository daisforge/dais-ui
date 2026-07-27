import type { Autocomplete } from '@ui-kit/components/Autocomplete';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import type { THandleChange, TMutationRegister } from '../types';

type TAutocompleteProps = ComponentProps<typeof Autocomplete>;

// type TPropsFromAutocomplete = Pick<
//     TAutocompleteProps,
//     | TDefKeys
//     | 'label'
//     | 'disabled'
//     | 'readOnly'
//     | 'portal'
//     | 'suggestions'
//     | 'listMaxHeight'
//     | 'placeholder'
//     | 'threshold'
//     | 'listWidth'
// >;

type TProps = {
  onChange?: THandleChange<string>;
  onChangeInput?: THandleChange<string>;
};

type TPropsFromAutocomplete = Omit<
  TAutocompleteProps,
  | keyof Required<TProps>
  | keyof Required<TMutationRegister<object>>
  | 'value'
  | 'onSuggestionSelect'
>;

export type FormAutocompleteProps<TFieldValues extends FieldValues> =
  TMutationRegister<TFieldValues> & TPropsFromAutocomplete & TProps;
