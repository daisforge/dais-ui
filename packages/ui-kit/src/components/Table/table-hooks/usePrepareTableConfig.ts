import { getRowsGroupingSubrowsConfig } from '../feature-rows-grouping';
import { ObjectForExtending, TableConfig } from '../types';

export const usePrepareTableConfig = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  tableConfigExternal
}: {
  tableConfigExternal: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
  >;
}) => {
  if (!tableConfigExternal) {
    return { tableConfig: tableConfigExternal };
  }

  const { rowsGrouping } = tableConfigExternal || {};

  if (!rowsGrouping) {
    return { tableConfig: tableConfigExternal };
  }

  //  добавили subRows для rowsGrouping при активном rowsGrouping
  return {
    tableConfig: {
      ...tableConfigExternal,
      ...(rowsGrouping && {
        subRows: getRowsGroupingSubrowsConfig(rowsGrouping)
      })
    } as typeof tableConfigExternal
  };
};
