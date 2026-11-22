import { useCallback, useMemo } from 'react';

import type {
  TableCanvasLoggerCounts,
  TableCanvasLoggerFilterValue,
  TableCanvasLoggerItem,
} from '../TableCanvasLogger.types';
import {
  countTableCanvasLoggerItems,
  filterTableCanvasLoggerItems,
  sumTableCanvasLoggerCounts,
} from '../TableCanvasLogger.utils';
import { useControllableState } from './useControllableState';
import { useExpandedIds } from './useExpandedIds';

export type UseTableCanvasLoggerOptions = {
  items?: TableCanvasLoggerItem[] | null;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  filter?: TableCanvasLoggerFilterValue;
  defaultFilter?: TableCanvasLoggerFilterValue;
  onFilterChange?: (filter: TableCanvasLoggerFilterValue) => void;
  expandedIds?: string[];
  defaultExpandedIds?: string[];
  onExpandedIdsChange?: (ids: string[]) => void;
  counts?: TableCanvasLoggerCounts;
};

export const useTableCanvasLogger = (
  options: UseTableCanvasLoggerOptions = {},
) => {
  const { items, counts: externalCounts } = options;

  const [open, setOpen] = useControllableState(
    options.open,
    options.defaultOpen ?? false,
    options.onOpenChange,
  );
  const [filter, setFilter] =
    useControllableState<TableCanvasLoggerFilterValue>(
      options.filter,
      options.defaultFilter ?? 'all',
      options.onFilterChange,
    );
  const expanded = useExpandedIds(options);

  const counts = useMemo(
    () => ({ ...countTableCanvasLoggerItems(items), ...externalCounts }),
    [items, externalCounts],
  );
  const total = useMemo(() => sumTableCanvasLoggerCounts(counts), [counts]);
  const visibleItems = useMemo(
    () => filterTableCanvasLoggerItems(items ?? [], filter),
    [items, filter],
  );

  const selectFilter = useCallback(
    (next: TableCanvasLoggerFilterValue) => {
      setFilter(next);
      setOpen(true);
    },
    [setFilter, setOpen],
  );

  const toggleOpen = useCallback(() => {
    if (open) setFilter('all');
    setOpen(!open);
  }, [open, setFilter, setOpen]);

  return {
    open,
    setOpen,
    toggleOpen,
    filter,
    setFilter,
    selectFilter,
    ...expanded,
    counts,
    total,
    visibleItems,
  };
};

export type UseTableCanvasLoggerResult = ReturnType<
  typeof useTableCanvasLogger
>;
