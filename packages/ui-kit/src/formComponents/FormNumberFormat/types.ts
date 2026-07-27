import type { NumberFormat } from '@ui-kit/components/NumberFormat';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import type { THandleChange, TMutationRegister } from '../types';

type TNumberFormatProps = ComponentProps<typeof NumberFormat>;

type TProps = {
  onChange?: THandleChange<string>;
};

type TPropsFromNumberFormat = Omit<
  TNumberFormatProps,
  keyof Required<TProps> | keyof Required<TMutationRegister<object>> | 'value'
>;

export type FormNumberFormatProps<TFieldValues extends FieldValues> =
  TMutationRegister<TFieldValues> & TPropsFromNumberFormat & TProps;
