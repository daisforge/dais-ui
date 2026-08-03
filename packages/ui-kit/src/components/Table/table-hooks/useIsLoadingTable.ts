import { ObjectForExtending, TableConfig } from '../types';

export const useIsLoadingTable = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  tableConfig,
}: {
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
}) => {
  const tableConfigisLoading = tableConfig.isLoading;

  const { boolean: isLoadingTable, skeletonRowsCount } = (() => {
    if (typeof tableConfigisLoading === 'undefined') {
      return { boolean: false, skeletonRowsCount: 10 };
    }
    if (typeof tableConfigisLoading === 'boolean') {
      return { boolean: tableConfigisLoading, skeletonRowsCount: 10 };
    }
    return tableConfigisLoading;
  })();
  return { isLoadingTable, skeletonRowsCount };
};
