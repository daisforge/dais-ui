/* eslint-disable @typescript-eslint/naming-convention */
import { getPaginationData } from '@df-storybook/data/tableData';
import {
  type ContractQueryParams,
  type ContractResponse,
  Q_PARAMS
} from '@ui-kit/components/TableContract';
import { http, HttpResponse } from 'msw';

const getData = async (params: ContractQueryParams) => {
  const total = 300;
  const defaultPage = 1;
  const defaultPageSize = 50;

  const page = Number(params.page ?? defaultPage);
  const perPage = Number(params.pageSize ?? defaultPageSize);

  const rows = getPaginationData({
    page: Number(params.page ?? defaultPage),
    perPage: Number(params.pageSize ?? defaultPageSize),
    total
  });

  const columns: ContractResponse['meta']['columns'] = [
    {
      key: 'id',
      name: 'ID',
      sortingType: 'numberSort'
    },
    {
      key: 'task',
      name: 'Title',
      sortingType: 'stringSort'
    },
    {
      key: 'priority',
      name: 'Priority',
      sortingType: 'stringSort'
    },
    {
      key: 'issueType',
      name: 'Issue Type',
      sortingType: 'stringSort'
    },
    {
      key: 'complete',
      name: '% Complete',
      sortingType: 'numberSort'
    }
  ];
  const tableConfig: ContractResponse['meta']['tableConfig'] = {
    sorting: { type: 'frontend' },
    pagination: {
      total,
      totalRows: total,
      defaultPage,
      defaultPageSize,
      page,
      pageSize: perPage
    }
  };

  const resp: ContractResponse = {
    meta: {
      columns,
      tableConfig
    },
    data: { main: rows }
  };
  return resp;
};

const ENDPOINT = 'api/pagination';

export const paginationRoute = {
  ENDPOINT,
  route: http.get(ENDPOINT, async (c) => {
    const { searchParams } = new URL(c.request.url);

    const page = searchParams.get(Q_PARAMS.page);
    const pageSize = searchParams.get(Q_PARAMS.pageSize);

    const response: ContractResponse = await getData({
      page,
      pageSize
    });
    return HttpResponse.json(response);
  })
};
