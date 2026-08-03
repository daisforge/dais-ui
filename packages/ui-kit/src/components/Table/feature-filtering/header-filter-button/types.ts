import React from 'react';

import { HeaderContextValueTypeInstance } from '../../contexts';
import { ObjectForExtending } from '../../types/utils.type';
import { FiltersVariables } from '../filtering.type';

export type FilterComponentInPopoverProps<
  FilterStateType extends ObjectForExtending,
  ColumnConfig,
> = {
  popoverIsOpen: boolean;
  setPopoverIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  columnConfig: ColumnConfig;
  tabIndex: number;
  headerContextState: HeaderContextValueTypeInstance<FilterStateType> &
    FiltersVariables &
    HeaderContextValueTypeInstance<ObjectForExtending>;
  /**
   * Источник открытия фильтра: из шапки таблицы или из сайдбара
   * Полезно для условной логики в customRender (например, alwaysOpened для combobox)
   */
  filterSource?: 'header' | 'sidebar';
};
