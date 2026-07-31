import { useMemo } from 'react';

import { ColumnOrColumnGroupConfig, ObjectForExtending } from '../types';
import { flattenCols, getDeepestChildren } from './fromTreeToLastLvl';

export const useLastLvlColumnConfig = <
  RowType extends ObjectForExtending,
  SummaryRowType,
>(
  columnMaybeTreeConfig: readonly ColumnOrColumnGroupConfig<
    RowType,
    SummaryRowType
  >[],
) =>
  useMemo(() => {
    const lastLvlColumnsConfig = getDeepestChildren(columnMaybeTreeConfig);
    const allColsFlattened = flattenCols(
      columnMaybeTreeConfig,
      (c) => (c as { children?: (typeof c)[] })?.children,
      (c) => c,
    );

    const columnsGroupingIsActive =
      lastLvlColumnsConfig.length > 0 &&
      lastLvlColumnsConfig.length !== allColsFlattened.length;
    return {
      columnConfig: lastLvlColumnsConfig,
      allColsFlattened,
      columnsGroupingIsActive,
    };
  }, [columnMaybeTreeConfig]);
