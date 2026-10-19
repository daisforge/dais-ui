import { createContext, useContext, useSyncExternalStore } from 'react';

import { DEFAULT_TABLE_CANVAS_LOGGER_LABELS } from './TableCanvasLogger.constants';
import type {
  TableCanvasLoggerLabels,
  TableCanvasLoggerRenderProps,
} from './TableCanvasLogger.types';

/** Раскрытые id с подпиской: элемент перерисовывается только при смене своего состояния */
export type TableCanvasLoggerExpandedStore = {
  has: (id: string) => boolean;
  subscribe: (listener: () => void) => () => void;
};

export type TableCanvasLoggerContextValue = Omit<
  TableCanvasLoggerRenderProps,
  'labels'
> & {
  labels: TableCanvasLoggerLabels;
  /** true, если состояние раскрытия ведёт TableCanvasLogger или TableCanvasLoggerList */
  managed: boolean;
  expanded: TableCanvasLoggerExpandedStore;
  toggleExpanded: (id: string) => void;
};

const EMPTY_EXPANDED_STORE: TableCanvasLoggerExpandedStore = {
  has: () => false,
  subscribe: () => () => undefined,
};

export const TableCanvasLoggerContext =
  createContext<TableCanvasLoggerContextValue>({
    labels: DEFAULT_TABLE_CANVAS_LOGGER_LABELS,
    managed: false,
    expanded: EMPTY_EXPANDED_STORE,
    toggleExpanded: () => undefined,
  });

export const useTableCanvasLoggerContext = () =>
  useContext(TableCanvasLoggerContext);

export const useTableCanvasLoggerExpanded = (id: string) => {
  const { expanded } = useTableCanvasLoggerContext();
  const getSnapshot = () => expanded.has(id);
  return useSyncExternalStore(expanded.subscribe, getSnapshot, getSnapshot);
};
