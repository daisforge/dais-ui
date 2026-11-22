import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { ItemOrGroup } from '../../../ListOfFilters/types';
import { FilterListBlock as CanvasFilterListBlock } from '../../../TableCanvas/feature-filtering/filter-list-block/filter-list-block';
import { FilterListBlock } from './filter-list-block';

// Exercise the real filter hooks and table adapters without the visual chips.
vi.mock('@ui-kit/components/ListOfFilters', async () => ({
  useFiltersList: (await import('../../../ListOfFilters/useFiltersList'))
    .useFiltersList,
}));

vi.mock('@ui-kit/layouts/FiltersActions', () => ({
  FiltersActionsListOfFilters: ({
    clearAll,
    items,
  }: {
    clearAll: () => void;
    items: ItemOrGroup[];
  }) => (
    <>
      <button type="button" onClick={clearAll}>
        Сбросить все
      </button>
      {items
        .flatMap((entry) => ('items' in entry ? entry.items : [entry]))
        .map((item) => (
          <button type="button" key={item.id} onClick={item.onClick}>
            {item.label}
          </button>
        ))}
    </>
  ),
}));

type Filters = {
  spaceName: string;
  spaceId: string;
  status: string;
  tags: string[];
  enabled: boolean;
  limit: number;
  search: string | undefined;
  columnOnly?: string;
};

const filters: Filters = {
  spaceName: 'Platform',
  spaceId: 'platform-1',
  status: 'active',
  tags: ['first', 'second'],
  enabled: true,
  limit: 10,
  search: 'query',
};
const clearedFilters: Filters = {
  spaceName: '',
  spaceId: '',
  status: 'All',
  tags: [],
  enabled: false,
  limit: 0,
  search: undefined,
  columnOnly: '',
};
const filtersInfo = Object.fromEntries(
  Object.entries(clearedFilters).map(([key, clearedValue]) => [
    key,
    { label: key, clearedValue },
  ]),
) as Record<
  keyof Filters,
  { label: string; clearedValue: Filters[keyof Filters] }
>;

afterEach(cleanup);

describe.each([
  ['Table', FilterListBlock],
  ['TableCanvas', CanvasFilterListBlock],
] as const)('%s: reset filters', (_name, FilterList) => {
  const mount = (legacy = false) => {
    const setFilters = vi.fn<[React.SetStateAction<Filters>], void>();

    render(
      <FilterList
        isOpened
        activeView="rows"
        columnConfig={['spaceName', 'columnOnly'].map((key) => ({
          key,
          name: key,
          filtering: {
            component: 'input',
            keyInFilterState: key,
            filter: 'equal',
          },
        }))}
        tableConfig={{
          filtering: {
            state: [filters, setFilters],
            ...(legacy ? { clearedValue: clearedFilters } : { filtersInfo }),
            manualFiltering: true,
          },
        }}
        headerContextValue={undefined}
        $borderLeftTopRadiusRounded={false}
        $borderRightTopRadiusRounded={false}
      />,
    );

    return setFilters;
  };

  it('clears all filters with one complete object, including state-only and column-only keys', () => {
    const setFilters = mount();

    fireEvent.click(screen.getByRole('button', { name: 'Сбросить все' }));

    expect(setFilters).toHaveBeenCalledTimes(1);
    expect(setFilters).toHaveBeenCalledWith(clearedFilters);
    expect(filters.spaceName).toBe('Platform');
    expect(filters.tags).toEqual(['first', 'second']);
  });

  it('also batches the legacy clearedValue configuration', () => {
    const setFilters = mount(true);

    fireEvent.click(screen.getByRole('button', { name: 'Сбросить все' }));

    expect(setFilters).toHaveBeenCalledTimes(1);
    expect(setFilters).toHaveBeenCalledWith(clearedFilters);
  });

  it('clears one filter with one updater and preserves the latest other values', () => {
    const setFilters = mount();

    fireEvent.click(screen.getByRole('button', { name: 'Platform' }));

    expect(setFilters).toHaveBeenCalledTimes(1);
    const action = setFilters.mock.calls[0]?.[0];
    expect(typeof action).toBe('function');
    if (typeof action !== 'function') throw new Error('Expected an updater');
    const latest = { ...filters, status: 'archived' };
    expect(action(latest)).toEqual({ ...latest, spaceName: '' });
  });

  it('removes only the selected value of a multiple filter', () => {
    const setFilters = mount();

    fireEvent.click(screen.getByRole('button', { name: 'first' }));

    expect(setFilters).toHaveBeenCalledTimes(1);
    const action = setFilters.mock.calls[0]?.[0];
    if (typeof action !== 'function') throw new Error('Expected an updater');
    expect(action(filters)).toEqual({ ...filters, tags: ['second'] });
  });
});
