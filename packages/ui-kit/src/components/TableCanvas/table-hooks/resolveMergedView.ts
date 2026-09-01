import { isMergedGroupingView } from '../feature-rows-grouping/mergedView';
import { isMergedSubRowsView } from '../feature-tree/mergedSubRows';
import type { ObjectForExtending, TableConfig } from '../types';

export interface MergedViewInfo {
  kind: 'grouping' | 'subRows';
  /** Колонки уровней слияния; keys[0] — верхний уровень. */
  keys: readonly string[];
}

// Какой вид со слиянием сейчас активен: группировка, subRows или ни одного.
export function resolveMergedView<
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>(
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>,
): MergedViewInfo | null {
  const groupByArr = tableConfig.rowsGrouping?.groupByState?.[0];
  if (isMergedGroupingView(tableConfig.rowsGrouping, groupByArr)) {
    return { kind: 'grouping', keys: groupByArr as readonly string[] };
  }
  const mergedColumns = tableConfig.subRows?.mergedColumns;
  if (isMergedSubRowsView(tableConfig.subRows) && mergedColumns) {
    return { kind: 'subRows', keys: mergedColumns };
  }
  return null;
}
