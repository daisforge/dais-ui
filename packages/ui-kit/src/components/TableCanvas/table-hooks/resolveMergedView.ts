import { isMergedGroupingView } from '../feature-rows-grouping/mergedView';
import { isMergedSubRowsView } from '../feature-tree/mergedSubRows';
import type { ObjectForExtending, TableConfig } from '../types';

export interface MergedViewInfo {
  kind: 'grouping' | 'subRows';
  /** Колонки уровней слияния (индекс = глубина); keys[0] — верхний уровень. */
  keys: readonly string[];
}

/**
 * Активный merged-вид таблицы: группировка (view: 'merged' + groupBy) или
 * subRows (view: 'merged' + mergedColumns). Единая точка этой развилки для
 * useColumns / usePrepareTableConfig.
 */
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
