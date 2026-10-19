import React, {
  FC,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { DEFAULT_TABLE_CANVAS_LOGGER_LABELS } from './TableCanvasLogger.constants';
import {
  TableCanvasLoggerContext,
  TableCanvasLoggerContextValue,
  TableCanvasLoggerExpandedStore,
} from './TableCanvasLogger.context';
import type { TableCanvasLoggerRenderProps } from './TableCanvasLogger.types';

const RENDER_KEYS = [
  'statusIcons',
  'renderStatusIcon',
  'renderMessage',
  'renderGroup',
  'renderDescription',
  'renderActions',
  'renderMessageExtra',
  'formatDate',
  'classes',
  'onCopy',
  'copyToClipboard',
  'onCodeClick',
] as const satisfies ReadonlyArray<keyof TableCanvasLoggerRenderProps>;

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

type ExpandedStore = TableCanvasLoggerExpandedStore & {
  setIds: (ids: string[]) => void;
  notify: () => void;
};

const createExpandedStore = (initial: string[]): ExpandedStore => {
  let source = initial;
  let ids = new Set(initial);
  const listeners = new Set<() => void>();

  return {
    has: (id) => ids.has(id),
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    setIds: (next) => {
      if (next === source) return;
      source = next;
      ids = new Set(next);
    },
    notify: () => listeners.forEach((listener) => listener()),
  };
};

const isShallowEqual = (
  a: Record<string, unknown> | undefined,
  b: Record<string, unknown> | undefined,
) => {
  if (a === b) return true;
  if (!a || !b) return false;
  const keys = Object.keys(a);
  return (
    keys.length === Object.keys(b).length &&
    keys.every((key) => Object.is(a[key], b[key]))
  );
};

const useShallowStable = <T extends Record<string, unknown> | undefined>(
  value: T,
): T => {
  const ref = useRef(value);
  if (!isShallowEqual(ref.current, value)) ref.current = value;
  return ref.current;
};

export type TableCanvasLoggerProviderProps = TableCanvasLoggerRenderProps & {
  expandedIds: string[];
  toggleExpanded: (id: string) => void;
  children: ReactNode;
};

export const TableCanvasLoggerProvider: FC<TableCanvasLoggerProviderProps> = ({
  expandedIds,
  toggleExpanded,
  labels,
  children,
  ...props
}) => {
  const [expanded] = useState(() => createExpandedStore(expandedIds));
  expanded.setIds(expandedIds);
  useIsomorphicLayoutEffect(() => expanded.notify(), [expanded, expandedIds]);

  const stableLabels = useShallowStable(labels);
  const mergedLabels = useMemo(
    () => ({ ...DEFAULT_TABLE_CANVAS_LOGGER_LABELS, ...stableLabels }),
    [stableLabels],
  );
  const stableClasses = useShallowStable(props.classes);
  const renderDeps = RENDER_KEYS.map((key) =>
    key === 'classes' ? stableClasses : props[key],
  );

  const value = useMemo<TableCanvasLoggerContextValue>(() => {
    const picked = Object.fromEntries(
      RENDER_KEYS.map((key, index) => [key, renderDeps[index]]),
    );
    return {
      ...picked,
      labels: mergedLabels,
      managed: true,
      expanded,
      toggleExpanded,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...renderDeps, mergedLabels, expanded, toggleExpanded]);

  return (
    <TableCanvasLoggerContext.Provider value={value}>
      {children}
    </TableCanvasLoggerContext.Provider>
  );
};
