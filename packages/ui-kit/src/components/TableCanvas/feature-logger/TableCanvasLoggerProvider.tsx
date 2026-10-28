import React, {
  FC,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  COPIED_FEEDBACK_MS,
  DEFAULT_TABLE_CANVAS_LOGGER_LABELS,
} from './TableCanvasLogger.constants';
import {
  TableCanvasLoggerContext,
  TableCanvasLoggerContextValue,
  TableCanvasLoggerExpandedContext,
  TableCanvasLoggerExpandedStore,
} from './TableCanvasLogger.context';
import { StyledTableCanvasLoggerVisuallyHidden } from './TableCanvasLogger.styled';
import type {
  TableCanvasLoggerClasses,
  TableCanvasLoggerLabels,
  TableCanvasLoggerRenderProps,
} from './TableCanvasLogger.types';

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

type ExpandedStore = TableCanvasLoggerExpandedStore & {
  update: (ids: string[]) => void;
};

const createExpandedStore = (
  initialIds: string[],
  toggle: (id: string) => void,
): ExpandedStore => {
  let source = initialIds;
  let ids = new Set(initialIds);
  const listeners = new Set<() => void>();

  return {
    has: (id) => ids.has(id),
    toggle,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    update: (next) => {
      if (next === source) return;
      source = next;
      ids = new Set(next);
      listeners.forEach((listener) => listener());
    },
  };
};

/** Объект со строковыми значениями, стабильный пока не поменялось содержимое */
const useStableStrings = <T extends object>(value: T | undefined) => {
  const key = JSON.stringify(value ?? {});
  return useMemo(() => JSON.parse(key) as Partial<T>, [key]);
};

const Announcer: FC<{
  announceRef: MutableRefObject<(text: string) => void>;
}> = ({ announceRef }) => {
  const [text, setText] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    announceRef.current = (next) => {
      setText(next);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setText(''), COPIED_FEEDBACK_MS);
    };
    return () => {
      announceRef.current = () => undefined;
      clearTimeout(timer.current);
    };
  }, [announceRef]);

  return (
    <StyledTableCanvasLoggerVisuallyHidden role="status">
      {text}
    </StyledTableCanvasLoggerVisuallyHidden>
  );
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
  classes,
  statusIcons,
  renderMessage,
  renderGroup,
  renderDescription,
  renderActions,
  renderMessageExtra,
  formatDate,
  onCopy,
  copyToClipboard,
  onCodeClick,
  children,
}) => {
  const toggleRef = useRef(toggleExpanded);
  useIsomorphicLayoutEffect(() => {
    toggleRef.current = toggleExpanded;
  });
  const [expanded] = useState(() =>
    createExpandedStore(expandedIds, (id) => toggleRef.current(id)),
  );
  useIsomorphicLayoutEffect(
    () => expanded.update(expandedIds),
    [expanded, expandedIds],
  );

  const announceRef = useRef<(text: string) => void>(() => undefined);
  const announce = useCallback((text: string) => announceRef.current(text), []);

  const stableLabels =
    useStableStrings<Partial<TableCanvasLoggerLabels>>(labels);
  const stableClasses = useStableStrings<TableCanvasLoggerClasses>(classes);

  const value = useMemo<TableCanvasLoggerContextValue>(
    () => ({
      labels: { ...DEFAULT_TABLE_CANVAS_LOGGER_LABELS, ...stableLabels },
      classes: stableClasses,
      statusIcons,
      renderMessage,
      renderGroup,
      renderDescription,
      renderActions,
      renderMessageExtra,
      formatDate,
      onCopy,
      copyToClipboard,
      onCodeClick,
      announce,
    }),
    [
      stableLabels,
      stableClasses,
      statusIcons,
      renderMessage,
      renderGroup,
      renderDescription,
      renderActions,
      renderMessageExtra,
      formatDate,
      onCopy,
      copyToClipboard,
      onCodeClick,
      announce,
    ],
  );

  return (
    <TableCanvasLoggerContext.Provider value={value}>
      <TableCanvasLoggerExpandedContext.Provider value={expanded}>
        {children}
        <Announcer announceRef={announceRef} />
      </TableCanvasLoggerExpandedContext.Provider>
    </TableCanvasLoggerContext.Provider>
  );
};
