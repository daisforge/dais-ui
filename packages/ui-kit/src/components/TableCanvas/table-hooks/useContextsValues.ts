/* eslint-disable no-console */
import { useMemo } from 'react';

import { HeaderContextValueTypeInstance } from '../contexts';
import { getClearedFilters } from '../feature-filtering/index';
import { SIZE } from '../styles';
import {
  ActiveViewModsType,
  ObjectForExtending,
  SortColumn,
  TableConfig
} from '../types';

export const useContextsValues = <
  FilterStateType extends ObjectForExtending,
  HeaderContextValueType extends ObjectForExtending,
  RowContextValueType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  // SubRowType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  filters,
  setFilters,
  rowSize,
  setRowSize,
  sortColumns,
  setSortColumns,
  sortIsVisible,
  setSortIsVisible,

  tableConfig,

  headerContextValue,
  rowContextValue,
  isExpandedAllRows,
  toggleExpandAllButton,
  activeView,
  setActiveView
}: {
  filters: FilterStateType | undefined;
  headerContextValue: HeaderContextValueType | undefined;
  rowContextValue: RowContextValueType | undefined;
  rowSize: SIZE;
  setRowSize: React.Dispatch<React.SetStateAction<SIZE>>;
  tableConfig: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
    // SubRowType
  >;
  setFilters: React.Dispatch<React.SetStateAction<FilterStateType>> | undefined;
  setSortColumns:
    | React.Dispatch<React.SetStateAction<readonly SortColumn[]>>
    | undefined;
  sortColumns: readonly SortColumn[] | undefined;
  sortIsVisible: boolean;
  setSortIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isExpandedAllRows: boolean;
  toggleExpandAllButton: () => void;

  activeView: ActiveViewModsType;
  setActiveView: React.Dispatch<React.SetStateAction<ActiveViewModsType>>;
}) => {
  const rowContextValueTotal = useMemo(
    () => ({ ...rowContextValue, rowSize }),
    [rowContextValue, rowSize]
  );

  const headerContextValueTotal = useMemo(() => {
    const v: HeaderContextValueTypeInstance<FilterStateType> = {
      filters,
      setFilters,
      clearedFiltersValue: getClearedFilters<FilterStateType>(
        tableConfig?.filtering
      ),

      sortState: sortColumns,
      setSortState: setSortColumns,
      sortIsVisible,
      setSortIsVisible,
      ...headerContextValue,
      rowSize,
      setRowSize,
      onRowSizeChange: tableConfig.rowSize?.onRowSizeChange,
      isExpandedAllRows,
      toggleExpandAllButton,
      activeView,
      setActiveView
    };
    return v as typeof v & HeaderContextValueType;
  }, [
    filters,
    setFilters,
    tableConfig?.filtering,
    tableConfig.rowSize?.onRowSizeChange,
    sortColumns,
    setSortColumns,
    sortIsVisible,
    setSortIsVisible,
    headerContextValue,
    rowSize,
    setRowSize,
    isExpandedAllRows,
    toggleExpandAllButton,
    activeView,
    setActiveView
  ]);

  return { headerContextValueTotal, rowContextValueTotal };
};
