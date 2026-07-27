import type { SortColumn } from '@ui-kit/components/Table';
import { useMemo, useState } from 'react';

import type { ContractTableConfig, UrlAction } from '../types';

export const SORT_PARAM = 'sortKey';
export const SORT_PARAM_ORDER = 'sortOrder';

export function sortFromParam(
  sortUrlParam: string | null,
  sortOrder: string | null
): SortColumn | null {
  if (!sortUrlParam) {
    return null;
  }
  return {
    columnKey: sortUrlParam,
    direction: sortOrder ? (sortOrder.toUpperCase() as 'ASC') : 'ASC'
  };
}

// export function sortFromParam(sortUrlParam: string | null) {
//   if (!sortUrlParam) {
//     return null;
//   }
//   // парсим строку вида 'column1Key,column2Key'
//   return sortUrlParam.split(',').map((s) => {
//     const dir: SortColumn['direction'] = s.startsWith('-') ? 'DESC' : 'ASC';
//     const columnKey = dir === 'DESC' ? s.slice(1) : s;
//     return { direction: dir, columnKey };
//   }) as readonly SortColumn[];
// }
// export function sortToParam(sortVariable: readonly SortColumn[]) {
//   return sortVariable
//     .map((s) => `${s.direction === 'DESC' ? '-' : ''}${s.columnKey}`)
//     .join();
// }

export function useSorting({
  params,
  dispatchParams,
  tableConfigBackendSorting
}: {
  params: URLSearchParams;
  dispatchParams: React.Dispatch<UrlAction>;
  tableConfigBackendSorting: ContractTableConfig['sorting'];
}) {
  const isSortingActive = !!tableConfigBackendSorting;
  const isSortOnBackend = tableConfigBackendSorting?.type === 'backend';

  const sortBackendParam = params.get(SORT_PARAM);
  const sortBackendParamOder = params.get(SORT_PARAM_ORDER);

  const sortingFrontStateAndSetter = useState<readonly SortColumn[]>([]);

  const sortingBackendStateAndSetter: typeof sortingFrontStateAndSetter =
    useMemo(() => {
      const newV = sortFromParam(sortBackendParam, sortBackendParamOder);
      const state: readonly SortColumn[] = newV ? [newV] : [];
      return [
        state,
        (v) => {
          let newV = state;
          if (typeof v === 'function') {
            newV = v(state);
          } else {
            newV = v;
          }
          dispatchParams([SORT_PARAM, newV]);
        }
      ];
    }, [dispatchParams, sortBackendParam, sortBackendParamOder]);

  const sortStateAndSetter =
    isSortingActive &&
    (isSortOnBackend
      ? sortingBackendStateAndSetter
      : sortingFrontStateAndSetter);

  if (!sortStateAndSetter) {
    return null;
  }

  return {
    sorting: { state: sortStateAndSetter, manualSorting: isSortOnBackend }
  };
}
