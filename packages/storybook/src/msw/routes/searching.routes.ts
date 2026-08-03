import { createRows } from '@df-storybook/data/tableData';
import {
  type ContractQueryParams,
  type ContractResponse,
  Q_PARAMS,
} from '@ui-kit/components/TableContract';
import { http, HttpResponse } from 'msw';

const getData = async (params: ContractQueryParams) => {
  const columns: ContractResponse['meta']['columns'] = [
    {
      key: 'id',
      name: 'ID',
    },
    {
      key: 'task',
      name: 'Title',
    },
    {
      key: 'priority',
      name: 'Priority',
    },
    {
      key: 'issueType',
      name: 'Issue Type',
    },
    {
      key: 'complete',
      name: '% Complete',
    },
  ];
  const tableConfig: ContractResponse['meta']['tableConfig'] = {
    searching: { enabled: true, type: 'backend' },
  };

  const rows = createRows();
  const filteredRows = params.q
    ? rows.filter((r) =>
        columns.some((col) =>
          r?.[col.key as keyof typeof r]
            ?.toString()
            ?.toLowerCase()
            ?.includes?.(params.q?.toLowerCase() ?? ''),
        ),
      )
    : rows;

  const resp: ContractResponse = {
    meta: {
      columns,
      tableConfig,
    },
    data: { main: filteredRows },
  };
  return resp;
};

const ENDPOINT = 'api/searching';

export const searchingRoute = {
  ENDPOINT,
  route: http.get(ENDPOINT, async (c) => {
    const { searchParams } = new URL(c.request.url);

    const q = searchParams.get(Q_PARAMS.q);

    const response: ContractResponse = await getData({ q });
    return HttpResponse.json(response);
  }),
};
