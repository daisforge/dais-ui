import { useMemo } from 'react';

import { hideRowServiceKeysHandler } from '../data/hideServiceKeysHanlder';
import {
  getDetailPanelHeight,
  isDetailPanelRow
} from '../feature-row-detail/handlers';
import { SIZE, SIZES } from '../styles';
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
  const rowDetailPanelBoolean = tableConfig.rowDetailPanel;

  const resultRowHeight = useMemo(() => {
    if (!rowHeightInConfig && !rowDetailIsActiveInConfig) {
      return undefined;
    }

    const rowSizeObj = {
      rowSizeName: rowSize,
      rowSizeValue: SIZES[rowSize].rowHeight
    };

    if (rowDetailIsActiveInConfig) {
      return (r: RowType) => {
        const row = hideRowServiceKeysHandler(r);

        if (isDetailPanelRow(r)) {
          return getDetailPanelHeight(row, tableConfig.rowDetailPanel);
        }
        if (rowHeightInConfig) {
          if (typeof rowHeightInConfig === 'number') {
            return rowHeightInConfig;
          }
          return rowHeightInConfig(row, rowSizeObj);
        }

        return SIZES[rowSize].rowHeight;
      };
    }

    if (!rowHeightInConfig) {
      return undefined;
    }

    if (typeof rowHeightInConfig === 'number') {
      return rowHeightInConfig;
    }

    return (r: RowType) => rowHeightInConfig(r, rowSizeObj);
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
