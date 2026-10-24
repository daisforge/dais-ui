import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from 'react';

import { DEFAULT_TABLE_CANVAS_LOGGER_LABELS } from './TableCanvasLogger.constants';
import type {
  TableCanvasLoggerLabels,
  TableCanvasLoggerRenderProps,
} from './TableCanvasLogger.types';

export type TableCanvasLoggerContextValue = Omit<
  TableCanvasLoggerRenderProps,
  'labels'
> & {
  labels: TableCanvasLoggerLabels;
  /** Озвучить текст скринридером через общий live-регион */
  announce: (text: string) => void;
};

export const TableCanvasLoggerContext =
  createContext<TableCanvasLoggerContextValue>({
    labels: DEFAULT_TABLE_CANVAS_LOGGER_LABELS,
    announce: () => undefined,
  });

export const useTableCanvasLoggerContext = () =>
  useContext(TableCanvasLoggerContext);

/** Раскрытые id с подпиской: элемент перерисовывается только при смене своего состояния */
export type TableCanvasLoggerExpandedStore = {
  has: (id: string) => boolean;
  toggle: (id: string) => void;
  subscribe: (listener: () => void) => () => void;
};

export const TableCanvasLoggerExpandedContext =
  createContext<TableCanvasLoggerExpandedStore>({
    has: () => false,
    toggle: () => undefined,
    subscribe: () => () => undefined,
  });

export const useTableCanvasLoggerExpandedItem = (id: string) => {
  const store = useContext(TableCanvasLoggerExpandedContext);
  const getSnapshot = () => store.has(id);
  const open = useSyncExternalStore(store.subscribe, getSnapshot, getSnapshot);
  const toggle = useCallback(() => store.toggle(id), [store, id]);
  return [open, toggle] as const;
};
