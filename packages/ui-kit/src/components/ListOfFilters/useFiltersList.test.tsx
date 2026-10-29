import { act, cleanup, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { useFiltersList } from './useFiltersList';

const filters = {
  spaceName: 'Platform',
  spaceId: 'platform-1',
  tags: ['first', 'second'],
  enabled: true,
  limit: 10,
  status: 'All',
  search: 'query',
};
const clearedFilters = {
  spaceName: '',
  spaceId: '',
  tags: [],
  enabled: false,
  limit: 0,
  status: 'All',
  search: undefined,
};
const filtersInfo = Object.fromEntries(
  Object.entries(clearedFilters).map(([key, clearedValue]) => [
    key,
    { label: key, clearedValue },
  ]),
);

afterEach(cleanup);

describe('useFiltersList: clearAll compatibility', () => {
  it('keeps per-field calls and their order when updateAllFilters is omitted', () => {
    const updateFilters = vi.fn();
    const { result } = renderHook(() =>
      useFiltersList({ filters, filtersInfo, options: {}, updateFilters }),
    );

    act(() => result.current.clearAll());

    // Includes the already-cleared status, just like the original clearAll.
    expect(updateFilters.mock.calls).toEqual([
      ['spaceName', ''],
      ['spaceId', ''],
      ['tags', []],
      ['enabled', false],
      ['limit', 0],
      ['status', 'All'],
      ['search', undefined],
    ]);
  });

  it('uses one batch call without also issuing per-field calls when opted in', () => {
    const updateFilters = vi.fn();
    const updateAllFilters = vi.fn();
    const { result } = renderHook(() =>
      useFiltersList({
        filters,
        filtersInfo,
        options: {},
        updateFilters,
        updateAllFilters,
      }),
    );

    act(() => result.current.clearAll());

    expect(updateAllFilters).toHaveBeenCalledTimes(1);
    expect(updateAllFilters).toHaveBeenCalledWith(clearedFilters);
    expect(updateFilters).not.toHaveBeenCalled();
    expect(filters.spaceName).toBe('Platform');
    expect(filters.tags).toEqual(['first', 'second']);
  });

  it.each([
    ['spaceName', ''],
    ['tags', ['second']],
    ['enabled', false],
  ] as const)(
    'still uses updateFilters for an individual %s chip when batch reset is enabled',
    (key, value) => {
      const updateFilters = vi.fn();
      const updateAllFilters = vi.fn();
      const { result } = renderHook(() =>
        useFiltersList({
          filters,
          filtersInfo,
          options: {},
          updateFilters,
          updateAllFilters,
        }),
      );
      const entry = result.current.filterList.find((item) =>
        'groupId' in item ? item.groupId === key : item.id === key,
      );
      if (!entry) throw new Error('Expected a filter chip');
      const chip = 'items' in entry ? entry.items[0] : entry;
      if (!chip) throw new Error('Expected a filter value');

      act(() => chip.onClick());

      expect(updateFilters).toHaveBeenCalledTimes(1);
      expect(updateFilters).toHaveBeenCalledWith(key, value);
      expect(updateAllFilters).not.toHaveBeenCalled();
    },
  );

  it('uses the current handler when batch reset is enabled and disabled after rerender', () => {
    const updateFilters = vi.fn();
    const updateAllFilters = vi.fn();
    const initialProps: {
      updateAllFilters?: (nextFilters: Record<string, unknown>) => void;
    } = {};
    const { result, rerender } = renderHook(
      (props: typeof initialProps) =>
        useFiltersList({
          filters,
          filtersInfo,
          options: {},
          updateFilters,
          updateAllFilters: props.updateAllFilters,
        }),
      { initialProps },
    );

    rerender({ updateAllFilters });
    act(() => result.current.clearAll());
    expect(updateAllFilters).toHaveBeenCalledTimes(1);
    expect(updateFilters).not.toHaveBeenCalled();

    rerender({ updateAllFilters: undefined });
    act(() => result.current.clearAll());
    expect(updateAllFilters).toHaveBeenCalledTimes(1);
    expect(updateFilters).toHaveBeenCalledTimes(7);
  });
});
