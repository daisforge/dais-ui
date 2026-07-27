import React from 'react';
import { RenderHeaderCellProps } from 'react-data-grid';

import { ObjectForExtending } from '../types/utils.type';
import { SummaryCheckbox } from './summary-checkbox';

export function CheckboxHeaderCell<RowType extends ObjectForExtending>(
  _props: RenderHeaderCellProps<RowType>
) {
  // Используем SummaryCheckbox с пропом renderOnlyCheckbox для получения только чекбокса
  return <SummaryCheckbox isHaveRightDivider={false} renderOnlyCheckbox />;
}
