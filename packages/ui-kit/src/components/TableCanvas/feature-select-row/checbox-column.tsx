import React from 'react';

import type { SIZE } from '../styles/styles.constants';
import {
  Canvas,
  CellInfoGlideInstance,
  createEmptyCellGlide,
} from '../TableGlideInstance';
import { ObjectForExtending } from '../types';
import { ColumnConfigInternal } from '../types/column-config-internal.type';
import {
  getCheckboxMetricsByRowSize,
  getCheckboxMetricsByTheme,
} from './checkbox-metrics';
import { CHECKBOX_COLUMN_KEY } from './constants';
import { getRowSelectingInfo } from './selecting-contexts';
import { renderSummaryCheckbox } from './summary-checkbox';

function renderCell(props: CellInfoGlideInstance<ObjectForExtending>) {
  const {
    isHaveCheckbox,
    isRowSelected,
    isIndeterminate,
    isRowSelectionDisabled,
    onChange,
  } = getRowSelectingInfo(props);

  if (!isHaveCheckbox) {
    return createEmptyCellGlide();
  }

  const { checkboxSize } = getCheckboxMetricsByTheme(props.theme);

  return (
    <Canvas.Container
      onClick={() => {
        if (isRowSelectionDisabled) {
          return;
        }

        onChange();
      }}
      justifyContent="center"
      alignItems="center"
      style={{ cursor: isRowSelectionDisabled ? 'auto' : 'pointer' }}
    >
      <Canvas.Checkbox
        checked={isRowSelected}
        disabled={isRowSelectionDisabled}
        indeterminate={isIndeterminate}
        size={checkboxSize}
      />
    </Canvas.Container>
  );
}

export const createCheckboxColumn = ({
  rowSize,
}: {
  rowSize: SIZE;
}): ColumnConfigInternal<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  unknown
> => {
  const { columnWidth } = getCheckboxMetricsByRowSize(rowSize);

  return {
    key: CHECKBOX_COLUMN_KEY,
    name: ' ',
    isServiceColumn: true,
    width: columnWidth,
    minWidth: columnWidth,
    frozen: true,
    renderCell,
    renderHeaderCell: renderSummaryCheckbox,
  };
};
