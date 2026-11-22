import { SubRows } from '../feature-tree/types';
import { ObjectForExtending } from '../types';
import { KEYS_ROW_GROUPED } from './constants';
import { isGroupRow } from './typeGuards';
import { RowsGrouping } from './types';

export function rowsGroupActiveInConfig<Row extends ObjectForExtending>(
  rowsGroupingConfig: RowsGrouping<Row> | undefined,
): rowsGroupingConfig is RowsGrouping<Row> {
  return !!rowsGroupingConfig;
}

export function rowKeyGetterForRowGroup<
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>(r: RowType, rowsGrouping: RowsGrouping<RowType, SummaryRowType>) {
  const groupKey = r?.[KEYS_ROW_GROUPED.groupKey] as string;
  // строка не сгруппированная, самая дочерняя
  if (!groupKey && !isGroupRow(r)) {
    return rowsGrouping.rowKeyGetter(r);
  }

  const groupParents = (r?.[KEYS_ROW_GROUPED.groupParents] as string) ?? '';

  if (!groupParents) {
    return groupKey;
  }

  return `${groupParents}-$$$-${groupKey}`;
}

/** Служебные строки групп получают собственный ключ. Потребитель видит только записи продукта. */
export function getSelectionRowKey<R extends ObjectForExtending>(
  recordKey: ((row: R) => string | number) | undefined,
  treeGrouping: boolean,
) {
  if (!recordKey) return undefined;
  return (row: R) => {
    if (treeGrouping && isGroupRow(row)) {
      return JSON.stringify([row.groupParents, row.groupByKey, row.groupKey]);
    }
    const key = recordKey(row);
    return typeof key === 'string' ? `row:${key}` : key;
  };
}

export function getRowsGroupingSubrowsConfig<
  RowType extends ObjectForExtending,
  RowIdType extends string | number,
  SummaryRowType = unknown,
>(rowsGrouping: RowsGrouping<RowType, SummaryRowType>) {
  return {
    getSubRows: (r) => r?.[KEYS_ROW_GROUPED.childGroups],
    rowKeyGetter: (r) => rowKeyGetterForRowGroup(r, rowsGrouping),
  } as SubRows<RowType, RowIdType>;
}
