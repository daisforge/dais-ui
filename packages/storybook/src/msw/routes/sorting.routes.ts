import { createRows } from '@df-storybook/data/tableData';
import {
  type ContractQueryParams,
  type ContractResponse,
  Q_PARAMS,
} from '@ui-kit/components/TableContract';
import { http, HttpResponse } from 'msw';

const rows = createRows(1, 1000);
const getSortedData = (
  sort: string | undefined | null,
  sortingType: ContractResponse['meta']['columns'][number]['sortingType'],
  key: string | undefined,
) =>
  sort && sortingType && key
    ? [...rows].sort((a, b) => {
        if (sortingType === 'numberSort') {
          const aKey = a[key as 'id'] as number;
          const bKey = b[key as 'id'] as number;
          if (sort[0] === '-') {
            return bKey - aKey;
          }
          return aKey - bKey;
        }
        const aKey = a[key as 'id'] as string;
        const bKey = b[key as 'id'] as string;

        const nameA = aKey.toUpperCase();
        const nameB = bKey.toUpperCase();

        if (sort[0] === '-') {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        }

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
    : rows;

const getData = async (params: ContractQueryParams) => {
  const { sort } = params;

  const columns: ContractResponse['meta']['columns'] = [
    {
      key: 'id',
      name: 'ID',
      sortingType: 'numberSort',
    },
    {
      key: 'task',
      name: 'Title',
      sortingType: 'stringSort',
    },
    {
      key: 'priority',
      name: 'Priority',
      sortingType: 'stringSort',
    },
    {
      key: 'issueType',
      name: 'Issue Type',
      sortingType: 'stringSort',
    },
    {
      key: 'complete',
      name: '% Complete',
      sortingType: 'numberSort',
    },
  ];
  const tableConfig: ContractResponse['meta']['tableConfig'] = {
    sorting: { type: 'backend' },
  };
  const sortColumn = columns.find(
    (c) => c.key === sort || `-${c.key}` === sort,
  );
  const { sortingType, key } = sortColumn ?? {};
  const sortedRows = getSortedData(sort, sortingType, key);
  const resp: ContractResponse = {
    meta: {
      columns,
      tableConfig,
    },
    data: { main: sortedRows },
  };
  return resp;
};

const ENDPOINT = 'api/sorting';

export const sortingRoute = {
  ENDPOINT,
  route: http.get(ENDPOINT, async (c) => {
    const { searchParams } = new URL(c.request.url);

    const sort = searchParams.get(Q_PARAMS.sort);

    const response: ContractResponse = await getData({ sort });
    return HttpResponse.json(response);
  }),
};
