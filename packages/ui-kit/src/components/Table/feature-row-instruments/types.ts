import { DropdownProps } from '@ui-kit/components/Dropdown';
import { SyntheticEvent } from 'react';

import { HeaderContextValueTypeInstance } from '../contexts';
import { DropdownItemOption } from '../types/additional.type';
import { ObjectForExtending, Prettify } from '../types/utils.type';

export type RowInstrumentsDropdownItemOption = Prettify<
  DropdownItemOption & {
    onItemSelect?: (item: DropdownItemOption, event: SyntheticEvent) => void;
  }
>;

export type RowInstrumentsType<RowType extends ObjectForExtending> =
  (rowProps: {
    row: RowType;
    rowIdx: number;
    onRowChange: (r: RowType) => void;
    additional: HeaderContextValueTypeInstance<RowType>;
  }) => {
    items: (DropdownItemOption & {
      onItemSelect?: (item: DropdownItemOption, event: SyntheticEvent) => void;
    })[];
    dropdownProps?: Partial<DropdownProps> & {
      /**
       * При количестве item-ов = 1:  использовать ли contentLeft ?? contentRight
       * как иконку для основной кнопки и onItemSelect item-а как onClick основной кнопки
       */
      useItemContentAsButtonContent?: boolean;
    };
  };
