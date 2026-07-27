import type { TextArea } from '@ui-kit/components/TextArea';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import type { THandleChange, TMutationRegister } from '../types';

type TTextAreaProps = ComponentProps<typeof TextArea> & {
  showClearButton?: boolean;
};

// type TPropsFromTextArea = Pick<
//     TTextAreaProps,
//     | TDefKeys
//     | 'placeholder'
//     | 'label'
//     | 'disabled'
//     | 'readOnly'
//     | 'minAuto'
//     | 'maxAuto'
//     | 'autoResize'
// >;

type TProps = {
  onChange?: THandleChange<string>;
};
type TPropsFromTextArea = Omit<
  TTextAreaProps,
  keyof Required<TProps> | keyof Required<TMutationRegister<object>> | 'value'
>;

export type FormTextAreaProps<TFieldValues extends FieldValues> =
  TMutationRegister<TFieldValues> & TPropsFromTextArea & TProps;
