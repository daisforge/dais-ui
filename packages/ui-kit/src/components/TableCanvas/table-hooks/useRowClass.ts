import { useCallback } from 'react';

import { isDetailPanelRow } from '../feature-row-detail/handlers';
import { TREE_ID_KEY } from '../feature-tree/constants';
import {
  DETAIL_PANEL_ROW_CLASS,
  LVL_1_ROW_CLASS,
  ROW_IDX_START_CLASS,
} from '../styles';
import { Maybe, ObjectForExtending } from '../types';

export const useRowClass = <RowType extends ObjectForExtending>({
  rowClassExternal,
  tableConfigSubRowsBoolean,
  tableConfigRowDetailBoolean,
}: {
  rowClassExternal: Maybe<(row: RowType, rowIdx: number) => Maybe<string>>;
  tableConfigSubRowsBoolean: boolean;
  tableConfigRowDetailBoolean: boolean;
}) => {
  const rowClass = useCallback(
    (row: RowType, rowIdx: number) => {
      const custom = rowClassExternal?.(row, rowIdx) ?? '';

      let resultClass = '';

      const isLvl1Row =
        !tableConfigSubRowsBoolean || typeof row?.[TREE_ID_KEY] === 'undefined';

      const isDetailPanel =
        tableConfigRowDetailBoolean && isDetailPanelRow(row);

      if (isLvl1Row && !isDetailPanel) {
        resultClass = `${LVL_1_ROW_CLASS} ${resultClass}`;
      }

      if (isDetailPanel) {
        resultClass = `${DETAIL_PANEL_ROW_CLASS} ${resultClass}`;
      }

      const rowIdxClass = `${ROW_IDX_START_CLASS}${rowIdx}`;

      return `${custom} ${rowIdxClass} ${resultClass}`;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rowClassExternal, tableConfigRowDetailBoolean, tableConfigSubRowsBoolean],
  );
  return { rowClass };
};
