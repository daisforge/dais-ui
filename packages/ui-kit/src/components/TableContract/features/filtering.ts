import { useDebouncedValue } from '@ui-kit/utils';
import React, { useEffect, useMemo, useState } from 'react';

import { InstanceColumnConfig, InstanceTableConfig, UrlAction } from '../types';
import { ContractTableConfig } from '../types.contractResponse';

const getEmptyFilters = (columns: InstanceColumnConfig[]) =>
  Object.fromEntries(columns.map((i) => [i.key, '']));

export const useFiltering = ({
  tableConfigBackendFiltering,
  dispatchParams,
  columnsConfig,
}: {
  tableConfigBackendFiltering: ContractTableConfig['filtering'] | undefined;
  dispatchParams: React.Dispatch<UrlAction>;
  columnsConfig: InstanceColumnConfig[] | undefined;
}): Pick<InstanceTableConfig, 'filtering'> | null => {
  const isHaveFiltering = !!tableConfigBackendFiltering;
  const columns = columnsConfig ?? [];

  const [filters, setFilters] = useState(getEmptyFilters(columns));
  /* очистка filters при получении новых данных */
  useEffect(() => {
    setFilters(getEmptyFilters(columns));

    // удаления колонок нет - поэтому можно полагаться на длину - (если изменилась длина - то таблица изменила свои данные - нужно сбросить фильтры)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns.length]);

  const clearedFilters = useMemo(
    () => getEmptyFilters(columns),
    // удаления колонок нет - поэтому можно полагаться на длину - (ссылка меняется каждый раз после запроса)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [columns.length],
  );

  /** state для отложенного изменения url-а query-параметров */
  const debouncedFilters = useDebouncedValue(filters, 1000);

  useEffect(() => {
    dispatchParams(['filters', debouncedFilters]);
  }, [debouncedFilters, dispatchParams]);

  return useMemo(() => {
    if (!isHaveFiltering) return null;
    const isReady =
      Object.keys(clearedFilters).length === Object.keys(filters).length;

    if (!isReady) return null;

    return {
      filtering: {
        state: [filters, setFilters],
        manualFiltering: true,
        clearedValue: clearedFilters,
      } as InstanceTableConfig['filtering'],
    };
  }, [clearedFilters, filters, isHaveFiltering]);
};
