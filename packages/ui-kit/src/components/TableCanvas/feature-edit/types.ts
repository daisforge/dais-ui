import type {
  ComboboxCompProps,
  ComboboxItemOption
} from '@ui-kit/components/Combobox';
import type { NumberFormatCompProps } from '@ui-kit/components/NumberFormat';
import { ComponentProps } from 'react';

import type { TextCellEntry } from '../TableGlideInstance';

export type CustomCellStyleProps = {
  cellWidth: number;
  cellHeight: number;
  disableLeftOffset?: boolean | undefined;
};
export type EmptyObj = Record<string, never>;

export type CustomCellStyleNumberFormatProps = {
  align?: 'left' | 'center' | 'right';
  autoFocusType: 'autoFocus' | 'autoFocusAndSelect' | 'none';
} & CustomCellStyleProps;

export type CellEditorNumberFormatProps = Omit<
  NumberFormatCompProps,
  'view' | 'size'
> &
  CustomCellStyleNumberFormatProps;

export type { ComboboxItemOption };
export type CellEditorComboboxProps<T extends ComboboxItemOption> =
  ComboboxCompProps<T> &
    CustomCellStyleProps & {
      autoFocusType: 'autoFocus' | 'none';
      paddingInline: number;
    };

export type CellEditorTextAreaProps = Omit<
  ComponentProps<typeof TextCellEntry>,
  'highlight'
> & {
  autoFocusType?: 'autoFocus' | 'autoFocusAndSelect' | 'none';
  paddingInline: number;
  containerClassName?: string;
} & CustomCellStyleProps;
