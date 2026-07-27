import { createRowsTree } from '@df-storybook/data/tableData';
import { type ContractResponse } from '@ui-kit/components/TableContract';
import { http, HttpResponse } from 'msw';

const getData = async () => {
  const treeRows = createRowsTree('child');

  const columns: ContractResponse['meta']['columns'] = [
    {
      key: 'block',
      name: 'Блок / Трайб / Продукт',

      subRow: {
        keyOfColumnInSubRow: {
          0: 'block',
          1: 'tribe',
          2: 'product',
          default: 'block'
        },
        isColumnWithArrow: true
      }
    },
    {
      key: 'blockActivity',
      name: 'Активность блока',
      sortingType: 'stringSort'
    },
    {
      key: '',
      minWidth: 170,

      name: 'Локация трайба',
      subRow: {
        keyOfColumnInSubRow: {
          0: 'tribeZone',
          default: ''
        }
      }
    },
    {
      key: 'q1',
      name: 'Q1',
      subRow: {
        parentKeyAsDefault: true
      },
      sortingType: 'numberSort',
      contentFormat: {
        type: 'number'
      }
    },

    {
      key: 'q2',
      name: 'Q2',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      },
      sortingType: 'numberSort',
      contentFormat: {
        type: 'number'
      }
    },
    {
      key: 'q3',
      name: 'Q3',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      },
      sortingType: 'numberSort',
      contentFormat: {
        type: 'number'
      }
    },
    {
      key: 'q4',
      name: 'Q4',
      subRow: {
        keyOfColumnInSubRow: 'q1'
      },
      sortingType: 'numberSort',
      contentFormat: {
        type: 'number'
      }
    }
  ];

  const tableConfig: ContractResponse['meta']['tableConfig'] = {
    sorting: { type: 'frontend' },
    subRows: { subRowsKey: 'child', rowUniqIdKey: 'id' }
  };

  const resp: ContractResponse = {
    data: { main: treeRows },
    meta: {
      columns,
      tableConfig
    }
  };
  return resp;
};

const ENDPOINT = 'api/subRows';

export const subRowsRoute = {
  ENDPOINT,
  route: http.get(ENDPOINT, async () => {
    const response: ContractResponse = await getData();
    return HttpResponse.json(response);
  })
};
