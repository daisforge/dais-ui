import { Q_PARAMS } from './constants';
import { SORT_PARAM, SORT_PARAM_ORDER } from './features/sorting';
import { UrlAction } from './types';

export function paramsReducer(
  state: URLSearchParams,
  action: UrlAction,
): URLSearchParams {
  const [param, payload] = action;

  switch (param) {
    case 'sortKey': {
      const newParams = new URLSearchParams(state);

      // const sortString = sortToParam(payload);
      const [sortedCol] = payload;
      if (!sortedCol) {
        newParams.delete(SORT_PARAM);
        newParams.delete(SORT_PARAM_ORDER);
      } else {
        newParams.set(SORT_PARAM, sortedCol.columnKey);
        newParams.set(SORT_PARAM_ORDER, sortedCol.direction.toLowerCase());
      }
      return newParams;
    }
    case 'pagination': {
      const newParams = new URLSearchParams(state);

      Object.entries(payload).forEach(([paramKey, value]) => {
        if (value) {
          newParams.set(paramKey, value.toString());
        }
      });

      return newParams;
    }
    case 'q': {
      const newParams = new URLSearchParams(state);
      newParams.set(Q_PARAMS.q, payload);
      return newParams;
    }
    case 'filters': {
      const newParams = new URLSearchParams(state);
      Object.entries(payload).forEach(([key, value]) => {
        const isEmpty = !(value?.trim() ?? '');
        if (isEmpty) {
          newParams.delete(key);
          return;
        }
        newParams.set(key, value);
      });

      // выставить, если есть пагинация, страницу на первую
      const paginationPage = state.get(Q_PARAMS.page);

      if (paginationPage) {
        newParams.set(Q_PARAMS.page, '1');
      }

      return newParams;
    }

    default:
      return state;
  }
}
