import { createRows } from '@df-storybook/data/tableData';
import type {
  ContractDeleteOneBody,
  ContractResponse,
  ContractUpdateOneBody,
  ObjectAny
} from '@ui-kit/components/TableContract';
import { delay, http, HttpResponse } from 'msw';

const getData = async () => {
  const rows = createRows();

  const columns: ContractResponse['meta']['columns'] = [
    {
      key: 'task',
      name: 'Task',
      columnType: 'Text',
      title: 'tooltip Task'
    },
    {
      key: 'done',
      columnType: 'Boolean',
      name: 'Статус Завершенности',
      title: 'tooltip Статус Завершенности'
    },
    {
      key: 'complete',
      name: 'Complete',
      columnType: 'Real',
      title: 'tooltip Complete'
    },
    {
      key: 'inspiredDay',
      columnType: 'Integer/Int/Int4',
      name: 'Дней с даты создания',
      title: 'tooltip Дней с даты создания'
    }
  ];

  const tableConfig: ContractResponse['meta']['tableConfig'] = {
    subRows: { subRowsKey: 'child', rowUniqIdKey: 'id' },
    editing: {
      rowUniqIdKey: 'id',
      saving: { type: 'onRowChange' }
    }
  };

  const resp: ContractResponse = {
    data: { main: rows },
    meta: {
      columns,
      tableConfig
    }
  };
  return resp;
};

const ENDPOINT = 'api/editing';

export const editingExampleGetRoute = {
  ENDPOINT,
  route: http.get(ENDPOINT, async () => {
    const response: ContractResponse = await getData();
    await delay(2000);

    return HttpResponse.json(response);
  })
};

export const editingExampleUpdateOneRoute = {
  ENDPOINT,
  route: http.put(`${ENDPOINT}`, async (c) => {
    const changeObject: ContractUpdateOneBody = (await c.request
      .clone()
      .json()) as ContractUpdateOneBody;
    await delay(2000);

    return HttpResponse.json(
      { ...changeObject, fromBack: true },
      { status: 200 }
    );
  })
};

export const editingExampleDeleteOneRoute = {
  ENDPOINT,
  route: http.post(`${ENDPOINT}/delete`, async (c) => {
    const rowForDelete: ContractDeleteOneBody = (await c.request
      .clone()
      .json()) as ContractDeleteOneBody;
    await delay(2000);
    return HttpResponse.json(rowForDelete);
  })
};
export const editingExampleCreateOneRoute = {
  ENDPOINT,
  route: http.post<never, ObjectAny>(`${ENDPOINT}`, async (c) => {
    const newRowData = await c.request.clone().json();
    await delay(2000);

    return HttpResponse.json(newRowData);
  })
};
