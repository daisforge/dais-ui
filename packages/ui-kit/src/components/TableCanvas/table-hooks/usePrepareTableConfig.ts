import { getRowsGroupingSubrowsConfig } from '../feature-rows-grouping';
import {
  isMergedGroupingView,
  wrapMergedGroupSelecting,
} from '../feature-rows-grouping/mergedView';
import { ObjectForExtending, TableConfig } from '../types';

export const usePrepareTableConfig = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  tableConfigExternal,
  flattenedRowsRef,
}: {
  tableConfigExternal: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
  >;
  /** Видимые строки — для группового чекбокса merged-вида группировки. */
  flattenedRowsRef?: { readonly current: readonly RowType[] };
}) => {
  if (!tableConfigExternal) {
    return { tableConfig: tableConfigExternal };
  }

  const { rowsGrouping } = tableConfigExternal || {};

  if (!rowsGrouping) {
    return { tableConfig: tableConfigExternal };
  }

  const groupByArr = rowsGrouping.groupByState?.[0];
  if (isMergedGroupingView(rowsGrouping, groupByArr)) {
    // Вид 'merged': subRows-мост не нужен (дерево не строится, шевронов нет).
    // Чекбокс слит по верхней группе — сеттер selecting расширяет дельту
    // выделения до границ группы.
    const { selecting } = tableConfigExternal;
    const wrappedSelecting =
      selecting?.state && flattenedRowsRef
        ? wrapMergedGroupSelecting(
            selecting,
            groupByArr[0] as string,
            flattenedRowsRef,
          )
        : selecting;
    return {
      tableConfig: {
        ...tableConfigExternal,
        ...(wrappedSelecting && { selecting: wrappedSelecting }),
      } as typeof tableConfigExternal,
    };
  }

  //  добавили subRows для rowsGrouping при активном rowsGrouping
  return {
    tableConfig: {
      ...tableConfigExternal,
      ...(rowsGrouping && {
        subRows: getRowsGroupingSubrowsConfig(rowsGrouping),
      }),
    } as typeof tableConfigExternal,
  };
};
