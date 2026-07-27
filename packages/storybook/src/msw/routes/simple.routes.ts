import { createRows } from '@df-storybook/data/tableData';
import { type ContractResponse } from '@ui-kit/components/TableContract';
import { delay, http, HttpResponse } from 'msw';

const getData = async () => {
  const rows = createRows(1, 1000);

  const columns: ContractResponse['meta']['columns'] = [
    {
      key: 'id',
      name: 'ID'
    },
    {
      key: 'task',
      name: 'Title'
    },
    {
      key: 'priority',
      name: 'Priority'
    },
    {
      key: 'issueType',
      name: 'Issue Type'
    },
    {
      key: 'complete',
      name: '% Complete'
    }
  ];

  const resp: ContractResponse = {
    meta: {
      columns
    },
    data: { main: rows }
  };
  return resp;
};

const ENDPOINT = 'api/simple';

export const simpleRoute = {
  ENDPOINT,
  route: http.get(ENDPOINT, async () => {
    await delay(2000);
    const response: ContractResponse = await getData();
    return HttpResponse.json(response);
  })
};
