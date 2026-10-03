import type {
  ComboboxCompProps,
  ComboboxItemOption,
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
  /**
   * Поведение фокуса/каретки при открытии редактора:
   * - `autoFocus` — фокус, каретка в конец значения;
   * - `autoFocusAndSelect` — фокус и выделение всего значения (вход через
   *   Enter/двойной клик — набор заменяет значение целиком);
   * - `autoFocusBeforeDecimals` — фокус, каретка в конец целой части (перед
   *   дробной). Для входа «перезаписью»: после набранной цифры можно сразу
   *   продолжать ввод, не попадая в нули дробной части. Длина дробной части
   *   берётся из `decimalScale`/`fixedDecimalScale` и не зависит от символа
   *   разделителя;
   * - `none` — фокусом/кареткой компонент не управляет.
   */
  autoFocusType:
    'autoFocus' | 'autoFocusAndSelect' | 'autoFocusBeforeDecimals' | 'none';
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
