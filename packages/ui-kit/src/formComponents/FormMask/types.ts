import type { Mask } from '@ui-kit/components/Mask';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import type { THandleChange, TMutationRegister } from '../types';

type TMaskProps = ComponentProps<typeof Mask>;

// type TPropsFromMask = Pick<
//     TMaskProps,
//     | TDefKeys
//     | 'label'
//     | 'mask'
//     | 'disabled'
//     | 'maskString'
//     | 'placeholder'
//     | 'maskChar'
//     | 'alwaysShowMask'
//     | 'showMask'
//     | 'disabled'
//     | 'readOnly'
//     | 'showStartChars'
// >;

type TProps = {
  onChange?: THandleChange<string>;
  mask: string;
};

type TPropsFromMask = Omit<
  TMaskProps,
  | 'mask'
  | keyof Required<TProps>
  | keyof Required<TMutationRegister<object>>
  | 'value'
>;

export type FormMaskProps<TFieldValues extends FieldValues> =
  TMutationRegister<TFieldValues> & TPropsFromMask & TProps;
