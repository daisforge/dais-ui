import { createContext, useContext } from 'react';

import { DEFAULT_LOGGER_LABELS } from './Logger.constants';
import type { LoggerLabels, LoggerRenderProps } from './Logger.types';

export type LoggerContextValue = Omit<LoggerRenderProps, 'labels'> & {
  labels: LoggerLabels;
  /** true, если состояние раскрытия ведёт Logger или LoggerList */
  managed: boolean;
  expandedIds: ReadonlySet<string>;
  toggleExpanded: (id: string) => void;
};

export const LoggerContext = createContext<LoggerContextValue>({
  labels: DEFAULT_LOGGER_LABELS,
  managed: false,
  expandedIds: new Set(),
  toggleExpanded: () => undefined,
});

export const useLoggerContext = () => useContext(LoggerContext);
