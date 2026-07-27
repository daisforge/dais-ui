import { useMemo } from 'react';

import { getRowHeightBySize } from '../../TableGlide/theming/size-tokens';
import { hideRowServiceKeysHandler } from '../data/hideServiceKeysHanlder';
import {
  getDetailPanelHeight,
  isDetailPanelRow
} from '../feature-row-detail/handlers';
import { SIZE } from '../styles';
import { ObjectForExtending, TableConfig } from '../types';

export const useRowHeight = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  rowSize,
  rowDetailIsActiveInConfig,
  tableConfig
}: {
  rowSize: SIZE;
  rowDetailIsActiveInConfig: boolean;
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
}) => {
  const rowHeightInConfig = tableConfig.rowHeight;
  // FIXME
  const rowDetailPanelBoolean = false; // tableConfig.rowDetailPanel;

  const resultRowHeight = useMemo(() => {
    if (!rowHeightInConfig && !rowDetailIsActiveInConfig) {
      return undefined;
    }

    const baseRowHeight = getRowHeightBySize(rowSize);
    const rowSizeObj = {
      rowSizeName: rowSize,
      rowSizeValue: baseRowHeight
    };

    if (rowDetailIsActiveInConfig) {
      return (r: RowType) => {
        const row = hideRowServiceKeysHandler(r);

        if (isDetailPanelRow(r)) {
          // FIXME
          return getDetailPanelHeight(row, undefined);
          // return getDetailPanelHeight(row, tableConfig.rowDetailPanel);
        }
        if (rowHeightInConfig) {
          if (typeof rowHeightInConfig === 'number') {
            return rowHeightInConfig;
          }
          // return rowHeightInConfig(row, rowSizeObj);
          // FIXME
          return rowHeightInConfig(row, rowSizeObj, 0);
        }

        return baseRowHeight;
      };
    }

    if (!rowHeightInConfig) {
      return undefined;
    }

    if (typeof rowHeightInConfig === 'number') {
      return rowHeightInConfig;
    }

    // return (r: RowType) => rowHeightInConfig(r, rowSizeObj);
    // FIXME
    return (r: RowType) => rowHeightInConfig(r, rowSizeObj, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    rowHeightInConfig,
    rowDetailIsActiveInConfig,
    rowSize,
    // tableConfig.rowDetailPanel - заменен на rowDetailPanelBoolean для устранения ненужных перерендеров
    rowDetailPanelBoolean
  ]);

  return { resultRowHeight };
};
