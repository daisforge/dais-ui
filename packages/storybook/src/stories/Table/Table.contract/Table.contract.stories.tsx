import type { Meta, StoryObj } from '@storybook/react';
import {
  type FetcherFunc,
  TableContract,
} from '@ui-kit/components/TableContract';

import TableContractDocsMdx from './Table.contract.mdx';

const meta: Meta = {
  title: 'Локальные компоненты/Table/Contract',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: TableContractDocsMdx,
    },
    screenshot: {
      skip: true,
    },
  },
  component: TableContract,
};

export default meta;

const createFetcher = (endpoint: string) =>
  (async ({ params, ...rest }) =>
    fetch(`${endpoint}${params ? `?${params}` : ''}`, rest).then((res) =>
      res.json(),
    )) as FetcherFunc;

const fetcherSimple = createFetcher('api/simple');
const fetcherSearching = createFetcher('api/searching');
const fetcherSorting = createFetcher('api/sorting');
const fetcherPagination = createFetcher('api/pagination');
const fetcherSubRows = createFetcher('api/subRows');

export const Simple: StoryObj<typeof TableContract> = {
  args: { fetcher: fetcherSimple },
};
export const Pagination: StoryObj<typeof TableContract> = {
  args: { fetcher: fetcherPagination },
};
export const Searching: StoryObj<typeof TableContract> = {
  args: { fetcher: fetcherSearching },
};
export const Sorting: StoryObj<typeof TableContract> = {
  args: { fetcher: fetcherSorting },
};
export const SubRows: StoryObj<typeof TableContract> = {
  args: { fetcher: fetcherSubRows },
};
