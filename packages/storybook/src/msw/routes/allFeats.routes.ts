import { getPaginationData } from '@df-storybook/data/tableData';
import {
  type ContractDeleteOneBody,
  type ContractQueryParams,
  type ContractResponse,
  type ContractUpdateOneBody,
  type ObjectAny,
  Q_PARAMS
} from '@ui-kit/components/TableContract';
import { delay, http, HttpResponse } from 'msw';

const getDataWithPagination = async (params: ContractQueryParams) => {
  const total = 300;
  const defaultPage = 1;
  const defaultPageSize = 50;
  const page = Number(params.page ?? defaultPage);
  const perPage = Number(params.pageSize ?? defaultPageSize);

  const rows = getPaginationData({
    page,
    perPage,
    total
  });

  const columns: ContractResponse['meta']['columns'] = [
    {
      key: 'task',
      name: 'Task',
      columnType: 'Text',
      title: 'tooltip Task',
      sortingType: 'stringSort'
    },
    {
      key: 'done',
      columnType: 'Boolean',
      name: 'Статус Завершенности',
      title: 'tooltip Статус Завершенности',
      sortingType: 'stringSort'
    },
    {
      key: 'complete',
      name: 'Complete',
      columnType: 'Real',
      title: 'tooltip Complete',
      sortingType: 'stringSort'
    },
    {
      key: 'inspiredDay',
      columnType: 'Integer/Int/Int4',
      name: 'Дней с даты создания',
      title: 'tooltip Дней с даты создания',
      sortingType: 'stringSort'
    }
  ];
  const tableConfig: ContractResponse['meta']['tableConfig'] = {
    editing: {
      rowUniqIdKey: 'task,done,complete,inspiredDay',
      saving: { type: 'onRowChange' }
    },
    sorting: { type: 'backend' },
    filtering: { type: 'backend' },
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

const ENDPOINT = 'api/allFeats' as const;

export const allFeatsExampleGetRoute = {
  ENDPOINT,
  route: http.get(ENDPOINT, async (c) => {
    const { searchParams } = new URL(c.request.url);

    const page = searchParams.get(Q_PARAMS.page);
    const pageSize = searchParams.get(Q_PARAMS.pageSize);
    const response: ContractResponse = await getDataWithPagination({
      page,
      pageSize
    });

    await delay(500);

    return HttpResponse.json(response);
  })
};

export const allFeatsExampleUpdateOneRoute = {
  ENDPOINT,
  route: http.put(`${ENDPOINT}`, async (c) => {
    const changeObject: ContractUpdateOneBody = (await c.request
      .clone()
      .json()) as ContractUpdateOneBody;
    await delay(500);

    return HttpResponse.json(
      { ...changeObject, fromBack: true },
      { status: 200 }
    );
  })
};

export const allFeatsExampleDeleteOneRoute = {
  ENDPOINT,
  route: http.post(`${ENDPOINT}/delete`, async (c) => {
    const rowForDelete: ContractDeleteOneBody = (await c.request
      .clone()
      .json()) as ContractDeleteOneBody;
    await delay(500);

    return HttpResponse.json(rowForDelete);
  })
};
export const allFeatsExampleCreateOneRoute = {
  ENDPOINT,
  route: http.post<never, ObjectAny>(`${ENDPOINT}`, async (c) => {
    const newRowData = await c.request.clone().json();
    await delay(500);

    return HttpResponse.json(newRowData);
  })
};
