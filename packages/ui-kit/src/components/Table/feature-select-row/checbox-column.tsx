import React from 'react';
import { Column, RenderCellProps } from 'react-data-grid';

import { Checkbox } from '../../Checkbox';
import { ObjectForExtending } from '../types/utils.type';
import { CheckboxHeaderCell } from './checkbox-header-cell';
import {
  CHECKBOX_COL_CLASS_CUSTOM,
  CHECKBOX_COLUMN_KEY,
  CHECKBOX_HEADER_COL_CLASS_CUSTOM,
  CHECKBOX_SUMMARY_COL_CLASS_CUSTOM
} from './constants';
import { useSelectingCheckBoxCellContext } from './selecting-contexts';

// const CHECKBOX_DEF_STYLES = {
//   paddingTop: 0,
//   paddingBottom: 4,
//   paddingInline: 2,
//   width: 24,
//   height: 24,
// };

export function CheckboxFormatter(_props: RenderCellProps<ObjectForExtending>) {
  const {
    isHaveCheckbox,
    isRowSelected,
    isIndeterminate,
    isRowSelectionDisabled,
    onChange
  } = useSelectingCheckBoxCellContext();

  if (!isHaveCheckbox) {
    return null;
  }

  return (
    <Checkbox
      className="select-row-checkbox"
      indeterminate={isIndeterminate}
      checked={isRowSelected}
      disabled={isRowSelectionDisabled}
      onChange={onChange}
    />
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ChecboxColumn: Column<any, unknown> = {
  key: CHECKBOX_COLUMN_KEY,
  name: '',
  width: 56,
  minWidth: 56,
  maxWidth: 56,
  cellClass: CHECKBOX_COL_CLASS_CUSTOM,
  headerCellClass: `${CHECKBOX_COL_CLASS_CUSTOM} ${CHECKBOX_HEADER_COL_CLASS_CUSTOM}`,
  summaryCellClass: `${CHECKBOX_COL_CLASS_CUSTOM} ${CHECKBOX_SUMMARY_COL_CLASS_CUSTOM}`,

  resizable: false,
  sortable: false,
  frozen: true,
  renderCell(props) {
    return <CheckboxFormatter {...props} />;
  },
  renderHeaderCell(props) {
    return <CheckboxHeaderCell {...props} />;
  }
};
