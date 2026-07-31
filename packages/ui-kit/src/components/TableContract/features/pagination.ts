import { useMemo } from 'react';

import { Q_PARAMS } from '../constants';
import { getNum } from '../lib/number';
import type {
  ContractTableConfig,
  InstanceTableConfig,
  PaginationParams,
  UrlAction,
} from '../types';

export function usePagination({
  tableConfigBackendPagination,
  params,
  dispatchParams,
}: {
  tableConfigBackendPagination: ContractTableConfig['pagination'] | undefined;
  params: URLSearchParams;
  dispatchParams: React.Dispatch<UrlAction>;
}): Pick<InstanceTableConfig, 'pagination'> | null {
  const { defaultPage, defaultPageSize, total, pageSizeList } =
    tableConfigBackendPagination ?? {};

  return useMemo((): Pick<InstanceTableConfig, 'pagination'> | null => {
    if (!defaultPage || !defaultPageSize || !total) {
      return null;
    }

    const paginationPage = getNum(params.get(Q_PARAMS.page)) ?? defaultPage;
    const paginationPageSize =
      getNum(params.get(Q_PARAMS.pageSize)) ?? defaultPageSize;

    return {
      pagination: {
        count: total,
        value: paginationPage,
        perPage: paginationPageSize,
        ...(pageSizeList && { perPageList: pageSizeList }),
        onChange: (page, perPage, scrollToTop) => {
          if (typeof page !== 'number') return;

          const pageIsChanged = paginationPage !== page;
          const perPageIsChanged =
            !!paginationPageSize &&
            !!perPage &&
            +paginationPageSize !== perPage;

          const paginationParams: PaginationParams = {};

          if (pageIsChanged) {
            paginationParams.page = page;
            paginationParams.pageSize = perPage;
          }
          if (perPageIsChanged) {
            paginationParams.pageSize = perPage;

            const pagesCount = total ? Math.ceil(total / perPage) : 0;
            if (+paginationPage > pagesCount) {
              const lastPage = pagesCount;
              paginationParams.page = lastPage;
            }
          }

          if (Object.keys(paginationParams).length) {
            dispatchParams(['pagination', paginationParams]);
            // TODO scroll должен происходить после получения данных
            // и вообще изменение страницы должно происходить после получения данных (тк данные могут не придти)
            scrollToTop();
          }
        },
      },
    };
    // не добавлен pageLimitList (данная переменная не должна меняться при взаимодействии с таблицей)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultPage, defaultPageSize, dispatchParams, total, params]);
}
