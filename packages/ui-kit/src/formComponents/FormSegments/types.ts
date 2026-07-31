import { SegmentGroup, SegmentItem } from '@ui-kit/components/Segment';
import type { TextFieldProps } from '@ui-kit/components/TextField';
import { THandleChange, TMutationRegister } from '@ui-kit/formComponents/types';
import { ComponentProps } from 'react';
import type {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

// ComponentProps потому что SegmentGroupProps и SegmentItemProps ругается на view?: string
export type TSegmentItemNativeProps = ComponentProps<typeof SegmentItem>;
export type TSegmentGroupNativeProps = ComponentProps<typeof SegmentGroup>;

export type TFieldRestProps<TFieldValues extends FieldValues> = Omit<
  ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>,
  'value' | 'onChange'
>;

type TPropsBase = {
  singleSelectedRequired?: boolean;
  selectionMode?: 'single' | 'multiple';
};

type TProps = {
  selectionMode?: 'multiple' | 'single';
  onChange?: THandleChange<string[]>;
};

type TPropsFromSegmentGroup = Omit<
  TSegmentGroupNativeProps,
  | 'children'
  | 'onChange'
  | keyof Required<TPropsBase>
  | keyof Required<TMutationRegister<object>>
>;

export type TLabelBlockProps = Pick<
  TextFieldProps,
  'label' | 'titleCaption' | 'hintText' | 'hintTrigger' | 'hintHasArrow'
>;

export type FormSegmentGroupProps<TFieldValues extends FieldValues> =
  TMutationRegister<TFieldValues> &
    TPropsFromSegmentGroup &
    TProps &
    TLabelBlockProps & {
      singleSelectedRequired?: boolean;
    } & { items: TSegmentItemNativeProps[] } & { showError?: boolean };

export type TGroupPropsForStyled<TFieldValues extends FieldValues> =
  TPropsFromSegmentGroup &
    TFieldRestProps<TFieldValues> & {
      $mode?: 'column' | 'row'; // ТОЛЬКО для контейнера
      className?: string;
      style?: React.CSSProperties;
    };

export type TOptionsForRequired<TFieldValues extends FieldValues> =
  | RegisterOptions<FieldValues, Path<TFieldValues>>
  | undefined;

export type SegmentControlledProps<TFieldValues extends FieldValues> =
  TLabelBlockProps & {
    value: unknown;
    onRHFChange: (next: string[]) => void;
    onUserChange?: (next: string[]) => void;
    selectionMode?: 'single' | 'multiple';
    optionsRequired?: TOptionsForRequired<TFieldValues>;
    groupProps: TGroupPropsForStyled<TFieldValues>;
    errorMessage?: string;
    items: TSegmentItemNativeProps[];
    singleSelectedRequired?: boolean;
    showError?: boolean;
  };
