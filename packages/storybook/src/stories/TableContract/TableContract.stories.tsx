import { allFeatsExampleGetRoute } from '@df-storybook/msw/routes';
import { editingExampleGetRoute } from '@df-storybook/msw/routes/editing.routes';
import { paginationRoute } from '@df-storybook/msw/routes/pagination.routes';
import { searchingRoute } from '@df-storybook/msw/routes/searching.routes';
import { simpleRoute } from '@df-storybook/msw/routes/simple.routes';
import { sortingRoute } from '@df-storybook/msw/routes/sorting.routes';
import { subRowsRoute } from '@df-storybook/msw/routes/subRows.routes';
import type { Meta, StoryObj } from '@storybook/react';
import {
  type FetcherFunc,
  TableContract
} from '@ui-kit/components/TableContract';

const meta: Meta = {
  title: 'Локальные компоненты/TableContract',
  tags: ['!autodocs'],
  parameters: {
    screenshot: {
      skip: true
    }
  },

  component: TableContract
};

export default meta;

const createFetcher: (endpoint: string) => FetcherFunc =
  (endpoint: string) =>
  async ({ params, pathParams, ...rest }) =>
    fetch(
      `${endpoint}${pathParams ? `/${pathParams}` : ''}${
        params ? `?${params}` : ''
      }`,
      rest
    );

export const Simple: StoryObj<typeof TableContract> = {
  args: { fetcher: createFetcher(simpleRoute.ENDPOINT) }
};

export const Pagination: StoryObj<typeof TableContract> = {
  args: { fetcher: createFetcher(paginationRoute.ENDPOINT) }
};

export const Searching: StoryObj<typeof TableContract> = {
  args: { fetcher: createFetcher(searchingRoute.ENDPOINT) }
};

export const Sorting: StoryObj<typeof TableContract> = {
  args: { fetcher: createFetcher(sortingRoute.ENDPOINT) }
};

export const SubRows: StoryObj<typeof TableContract> = {
  args: { fetcher: createFetcher(subRowsRoute.ENDPOINT) }
};

export const Editing: StoryObj<typeof TableContract> = {
  args: { fetcher: createFetcher(editingExampleGetRoute.ENDPOINT) }
};

export const AllFeats: StoryObj<typeof TableContract> = {
  args: {
    fetcher: createFetcher(allFeatsExampleGetRoute.ENDPOINT)
  }
};
