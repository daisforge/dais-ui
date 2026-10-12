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
  /** Видимые строки — для группового чекбокса при группировке со слиянием. */
  flattenedRowsRef?: { readonly current: readonly RowType[] };
}) => {
  if (!tableConfigExternal) {
    return { tableConfig: tableConfigExternal };
  }

  // Нормализуем алиас один раз: все существующие фичи правой панели читают sidebarConfig.
  const tableConfig = tableConfigExternal.rightSidebarConfig
    ? {
        ...tableConfigExternal,
        sidebarConfig: tableConfigExternal.rightSidebarConfig,
      }
    : tableConfigExternal;

  const { rowsGrouping } = tableConfig;

  // Вид со слиянием (группировка или subRows): здесь только оборачиваем чекбокс
  // по верхнему уровню, чтобы клик по строке выделял весь блок. Дерево и слияние
  // колонок делают useFlattenedRows и useColumns; переходник subRows для
  // группировки не нужен (дерево не строится, стрелок нет).
  const mergedView = resolveMergedView(tableConfig);
  if (mergedView) {
    const { selecting } = tableConfig;
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
        ...tableConfig,
        ...(wrappedSelecting && { selecting: wrappedSelecting }),
      } as typeof tableConfigExternal,
    };
  }

  if (!rowsGrouping) {
    return { tableConfig };
  }

  //  добавили subRows для rowsGrouping при активном rowsGrouping
  return {
    tableConfig: {
      ...tableConfig,
      ...(rowsGrouping && {
        subRows: getRowsGroupingSubrowsConfig(rowsGrouping),
      }),
    } as typeof tableConfigExternal,
  };
};
