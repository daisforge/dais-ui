import { createContext, useContext } from 'react';

import { TabId } from './TableTabs.types';

export const TableTabsContext = createContext<TabId | null | undefined>(null);

/**
 * @returns TabId | null | undefined
 *
 * TabId | undefined - значит таблица используется внутри TableTabs
 *
 * null - значит таблица используется без TableTabs
 */
export const useTableTabsContext = <T extends TabId | void = undefined>(
  component: 'table' | 'notTable' = 'table',
) => {
  const ctx = useContext(TableTabsContext);

  if (ctx === null && component === 'notTable') {
    throw new Error('useTableTabsContext must be used within a Provider');
  }

  return {
    activeTabId: ctx as T extends undefined ? typeof ctx : T,
    isInTabs: ctx !== null,
  };
};
