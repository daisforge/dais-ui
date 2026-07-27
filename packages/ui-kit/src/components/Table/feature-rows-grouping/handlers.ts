import { SubRows } from '../feature-tree/types';
import { ObjectForExtending } from '../types';
import { KEYS_ROW_GROUPED } from './constants';
import { RowsGrouping } from './types';

export function rowsGroupActiveInConfig<Row extends ObjectForExtending>(
  rowsGroupingConfig: RowsGrouping<Row> | undefined
): rowsGroupingConfig is RowsGrouping<Row> {
  return !!rowsGroupingConfig;
}

export function rowKeyGetterForRowGroup<RowType extends ObjectForExtending>(
  r: RowType,
  rowsGrouping: RowsGrouping<RowType>
) {
  const groupKey = r?.[KEYS_ROW_GROUPED.groupKey] as string;
  // строка не сгруппированная, самая дочерняя
  if (!groupKey) {
    return rowsGrouping.rowKeyGetter(r);
  }

  const groupParents = (r?.[KEYS_ROW_GROUPED.groupParents] as string) ?? '';

  if (!groupParents) {
    return groupKey;
  }

  return `${groupParents}-$$$-${groupKey}`;
}
export function getRowsGroupingSubrowsConfig<
  RowType extends ObjectForExtending,
  RowIdType extends string | number
>(rowsGrouping: RowsGrouping<RowType>) {
  return {
    getSubRows: (r) => r?.[KEYS_ROW_GROUPED.childGroups],
    rowKeyGetter: (r) => rowKeyGetterForRowGroup(r, rowsGrouping)
  } as SubRows<RowType, RowIdType>;
}
