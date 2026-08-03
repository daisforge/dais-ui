import { useMemo } from 'react';

import type {
  ContractTableConfig,
  InstanceTableConfig,
  UrlAction,
} from '../types';

const SEARCHING = {
  debounceDelay: 1000,
};

export function useSearching({
  tableConfigBackendSearching,
  dispatchParams,
}: {
  tableConfigBackendSearching: ContractTableConfig['searching'] | undefined;
  dispatchParams: React.Dispatch<UrlAction>;
}): Pick<InstanceTableConfig, 'searching'> | null {
  const {
    enabled,
    type,

    defaultSearchQuery,
    showSearchBlock,
    debounceDelay,
    isDebounceActive,
    searchClasses,
    placeholder,
  } = tableConfigBackendSearching ?? {};

  return useMemo((): Pick<InstanceTableConfig, 'searching'> | null => {
    if (!enabled) {
      return null;
    }

    const rest = {
      defaultSearchQuery,
      showSearchBlock,
      debounceDelay,
      isDebounceActive,
      searchClasses,
      placeholder,
    };
    if (type === 'frontend') {
      return {
        searching: {
          enabled: true,
          manualSearching: false,
          ...rest,
        },
      };
    }

    return {
      searching: {
        enabled: true,
        manualSearching: true,
        onDebouncedChange(value) {
          dispatchParams(['q', value]);
        },
        ...rest,
        debounceDelay: rest.debounceDelay ?? SEARCHING.debounceDelay,
      },
    };
  }, [
    enabled,
    defaultSearchQuery,
    showSearchBlock,
    debounceDelay,
    isDebounceActive,
    searchClasses,
    placeholder,
    type,
    dispatchParams,
  ]);
}
