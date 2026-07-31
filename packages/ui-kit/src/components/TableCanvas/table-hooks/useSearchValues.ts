import { useState } from 'react';

import { ObjectForExtending, TableConfig } from '../types';

export const useSearchValues = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  tableConfig,
}: {
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
}) => {
  const isSearchActive = tableConfig?.searching?.enabled ?? false;
  const isManualSearching = tableConfig?.searching?.manualSearching ?? false;
  const externalSearchState = tableConfig?.searching?.searchQueryState;

  const [showSearchBlock, setShowSearchBlock] = useState<boolean>(
    tableConfig?.searching?.showSearchBlock ?? true,
  );

  const internalSearchState = useState<string>(
    tableConfig?.searching?.defaultSearchQuery ?? '',
  );

  const [searchQuery, setSearchQuery] =
    externalSearchState || internalSearchState;

  const [internalLocalValue, setInternalLocalValue] = useState(
    searchQuery || '',
  );

  const {
    onDebouncedChange,
    onChange,
    debounceDelay = 300,
    isDebounceActive = true,
    searchClasses,
    placeholder = 'Поиск',
  } = tableConfig?.searching || {};

  const searchContextValue = {
    searchQuery,
    setSearchQuery,
    clearSearch: () => {
      setInternalLocalValue('');
    },
    showSearchBlock,
    setShowSearchBlock,
    onDebouncedChange,
    onChange,
    debounceDelay,
    isDebounceActive,
    enabled: isSearchActive,
    searchClasses,
    placeholder,
    internalLocalValue,
    setInternalLocalValue,
    isManualSearching,
    domMetadata: tableConfig.searching?.domMetadata,
    searchOnType: tableConfig.searching?.searchOnType ?? true,
    autocomplete: tableConfig.searching?.autocomplete,
  };

  return searchContextValue;
};
