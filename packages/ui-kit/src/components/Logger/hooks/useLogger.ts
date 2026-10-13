import { useCallback, useMemo } from 'react';

import type {
  LoggerCounts,
  LoggerFilterValue,
  LoggerItem,
} from '../Logger.types';
import {
  countLoggerItems,
  filterLoggerItems,
  getLoggerDefaultOpenIds,
  getLoggerGroupIds,
  sumLoggerCounts,
} from '../Logger.utils';
import { useControllableState } from './useControllableState';

export type UseLoggerOptions = {
  items?: LoggerItem[] | null;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  filter?: LoggerFilterValue | null;
  defaultFilter?: LoggerFilterValue | null;
  onFilterChange?: (filter: LoggerFilterValue | null) => void;
  expandedIds?: string[];
  defaultExpandedIds?: string[];
  onExpandedIdsChange?: (ids: string[]) => void;
  counts?: LoggerCounts;
};

export const useLogger = (options: UseLoggerOptions = {}) => {
  const { items, counts: externalCounts } = options;

  const [open, setOpen] = useControllableState(
    options.open,
    options.defaultOpen ?? false,
    options.onOpenChange,
  );
  const [filter, setFilter] = useControllableState<LoggerFilterValue | null>(
    options.filter,
    options.defaultFilter ?? 'all',
    options.onFilterChange,
  );
  const [expandedIds, setExpandedIds] = useControllableState<string[]>(
    options.expandedIds,
    options.defaultExpandedIds ?? getLoggerDefaultOpenIds(items),
    options.onExpandedIdsChange,
  );

  const counts = useMemo(() => {
    const own = countLoggerItems(items);
    return { ...own, ...externalCounts };
  }, [items, externalCounts]);

  const total = useMemo(() => sumLoggerCounts(counts), [counts]);
  const visibleItems = useMemo(
    () => filterLoggerItems(items ?? [], filter),
    [items, filter],
  );

  const toggleExpanded = useCallback(
    (id: string) =>
      setExpandedIds((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
      ),
    [setExpandedIds],
  );

  const expandAll = useCallback(
    () => setExpandedIds(getLoggerGroupIds(items)),
    [items, setExpandedIds],
  );
  const collapseAll = useCallback(() => setExpandedIds([]), [setExpandedIds]);

  const selectFilter = useCallback(
    (next: LoggerFilterValue) => {
      setFilter(next);
      setOpen(true);
    },
    [setFilter, setOpen],
  );

  const toggleOpen = useCallback(() => {
    if (open) {
      setFilter(null);
      setOpen(false);
    } else {
      if (filter === null) setFilter('all');
      setOpen(true);
    }
  }, [open, filter, setFilter, setOpen]);

  return {
    open,
    setOpen,
    toggleOpen,
    filter,
    setFilter,
    selectFilter,
    expandedIds,
    setExpandedIds,
    toggleExpanded,
    expandAll,
    collapseAll,
    counts,
    total,
    visibleItems,
  };
};

export type UseLoggerResult = ReturnType<typeof useLogger>;
