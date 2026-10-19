import { useCallback, useEffect, useMemo, useRef } from 'react';

import type {
  TableCanvasLoggerCounts,
  TableCanvasLoggerFilterValue,
  TableCanvasLoggerItem,
} from '../TableCanvasLogger.types';
import {
  countTableCanvasLoggerItems,
  filterTableCanvasLoggerItems,
  getTableCanvasLoggerDefaultOpenIds,
  getTableCanvasLoggerGroupIds,
  sumTableCanvasLoggerCounts,
} from '../TableCanvasLogger.utils';
import { useControllableState } from './useControllableState';

export type UseTableCanvasLoggerOptions = {
  items?: TableCanvasLoggerItem[] | null;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  filter?: TableCanvasLoggerFilterValue | null;
  defaultFilter?: TableCanvasLoggerFilterValue | null;
  onFilterChange?: (filter: TableCanvasLoggerFilterValue | null) => void;
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
    useControllableState<TableCanvasLoggerFilterValue | null>(
      options.filter,
      options.defaultFilter ?? 'all',
      options.onFilterChange,
    );
  const [expandedIds, setExpandedIds] = useControllableState<string[]>(
    options.expandedIds,
    () =>
      options.defaultExpandedIds ?? getTableCanvasLoggerDefaultOpenIds(items),
    options.onExpandedIdsChange,
  );

  const isExpandedControlled = options.expandedIds !== undefined;
  const knownGroupIds = useRef<Set<string> | null>(null);
  useEffect(() => {
    const groupIds = getTableCanvasLoggerGroupIds(items);
    if (!knownGroupIds.current) {
      knownGroupIds.current = new Set(groupIds);
      return;
    }
    const known = knownGroupIds.current;
    const fresh = getTableCanvasLoggerDefaultOpenIds(items).filter(
      (id) => !known.has(id),
    );
    groupIds.forEach((id) => known.add(id));
    if (!fresh.length || isExpandedControlled) return;
    setExpandedIds((prev) => [
      ...prev,
      ...fresh.filter((id) => !prev.includes(id)),
    ]);
  }, [items, isExpandedControlled, setExpandedIds]);

  const counts = useMemo(() => {
    const own = countTableCanvasLoggerItems(items);
    return { ...own, ...externalCounts };
  }, [items, externalCounts]);

  const total = useMemo(() => sumTableCanvasLoggerCounts(counts), [counts]);
  const visibleItems = useMemo(
    () => filterTableCanvasLoggerItems(items ?? [], filter),
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
    () => setExpandedIds(getTableCanvasLoggerGroupIds(items)),
    [items, setExpandedIds],
  );
  const collapseAll = useCallback(() => setExpandedIds([]), [setExpandedIds]);

  const selectFilter = useCallback(
    (next: TableCanvasLoggerFilterValue) => {
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

export type UseTableCanvasLoggerResult = ReturnType<
  typeof useTableCanvasLogger
>;
