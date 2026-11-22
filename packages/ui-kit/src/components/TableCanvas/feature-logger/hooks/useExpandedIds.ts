import { useCallback, useEffect, useRef } from 'react';

import type { TableCanvasLoggerItem } from '../TableCanvasLogger.types';
import {
  getTableCanvasLoggerDefaultOpenIds,
  getTableCanvasLoggerGroupIds,
} from '../TableCanvasLogger.utils';
import { useControllableState } from './useControllableState';

export type UseExpandedIdsOptions = {
  items?: TableCanvasLoggerItem[] | null;
  expandedIds?: string[];
  defaultExpandedIds?: string[];
  onExpandedIdsChange?: (ids: string[]) => void;
};

/** Раскрытые сообщения и группы, включая группы с `defaultOpen`, пришедшие после монтирования */
export const useExpandedIds = ({
  items,
  expandedIds: controlledIds,
  defaultExpandedIds,
  onExpandedIdsChange,
}: UseExpandedIdsOptions) => {
  const [expandedIds, setExpandedIds] = useControllableState<string[]>(
    controlledIds,
    () => defaultExpandedIds ?? getTableCanvasLoggerDefaultOpenIds(items),
    onExpandedIdsChange,
  );

  const isControlled = controlledIds !== undefined;
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
    if (!fresh.length || isControlled) return;
    setExpandedIds((prev) => [
      ...prev,
      ...fresh.filter((id) => !prev.includes(id)),
    ]);
  }, [items, isControlled, setExpandedIds]);

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

  return {
    expandedIds,
    setExpandedIds,
    toggleExpanded,
    expandAll,
    collapseAll,
  };
};
