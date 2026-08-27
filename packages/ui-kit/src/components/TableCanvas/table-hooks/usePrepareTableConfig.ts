import { getRowsGroupingSubrowsConfig } from '../feature-rows-grouping';
import { wrapMergedGroupSelecting } from '../feature-rows-grouping/mergedView';
import { ObjectForExtending, TableConfig } from '../types';
import { resolveMergedView } from './resolveMergedView';

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

  // Merged-вид (группировка или subRows): здесь только оборачиваем чекбокс по
  // верхнему уровню слияния, чтобы тоггл строки выделял весь блок. Дерево и
  // слияние колонок делают useFlattenedRows / useColumns; subRows-мост
  // группировки не нужен (дерево не строится, шевронов нет).
  const mergedView = resolveMergedView(tableConfigExternal);
  if (mergedView) {
    const { selecting } = tableConfigExternal;
    const wrappedSelecting =
      selecting?.state && flattenedRowsRef
        ? wrapMergedGroupSelecting(
            selecting,
            mergedView.keys[0] as string,
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

  if (!rowsGrouping) {
    return { tableConfig: tableConfigExternal };
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
