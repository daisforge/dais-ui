import { Radiobox, RadioGroup } from '@ui-kit/components/Radiobox';
import { TextFieldProps } from '@ui-kit/components/TextField';
import type { ComponentProps, ReactNode } from 'react';
import type { FieldValues, Path } from 'react-hook-form';

import type { THandleChange, TMutationRegister } from '../types';

// Базовые типы компонентов
export type NativeRadioGroupProps = ComponentProps<typeof RadioGroup>;
export type NativeRadioboxProps = ComponentProps<typeof Radiobox>;

// Пропсы для FormRadioGroup
export type FormRadioGroupProps<TFieldValues extends FieldValues> =
  TMutationRegister<TFieldValues> & {
    name: Path<TFieldValues>;
    children: ReactNode;
    onChange?: THandleChange<string | number>;
    radioGroupMode?: 'column' | 'row';
    size?: 'xs' | 's' | 'm' | 'l';
  } & Omit<NativeRadioGroupProps, 'onChange' | 'name' | 'children'> &
    Pick<
      TextFieldProps,
      | 'label'
      | 'hintText'
      | 'hintHasArrow'
      | 'titleCaption'
      | 'hintTrigger'
      | 'titleCaption'
      | 'size'
      | 'hintSize'
    >;

// Пропсы для FormRadiobox
export type FormRadioboxProps = {
  value: string | number;
  $isError?: boolean;
} & Omit<NativeRadioboxProps, 'value' | 'defaultChecked' | 'ref'>;
