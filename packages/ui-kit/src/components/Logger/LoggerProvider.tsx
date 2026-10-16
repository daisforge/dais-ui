import React, { FC, ReactNode, useMemo } from 'react';

import { DEFAULT_LOGGER_LABELS } from './Logger.constants';
import { LoggerContext, LoggerContextValue } from './Logger.context';
import type { LoggerRenderProps } from './Logger.types';

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
] as const satisfies ReadonlyArray<keyof LoggerRenderProps>;

export type LoggerProviderProps = LoggerRenderProps & {
  expandedIds: string[];
  toggleExpanded: (id: string) => void;
  children: ReactNode;
};

export const LoggerProvider: FC<LoggerProviderProps> = ({
  expandedIds,
  toggleExpanded,
  labels,
  children,
  ...props
}) => {
  const mergedLabels = useMemo(
    () => ({ ...DEFAULT_LOGGER_LABELS, ...labels }),
    [labels],
  );
  const expandedSet = useMemo(() => new Set(expandedIds), [expandedIds]);
  const renderDeps = RENDER_KEYS.map((key) => props[key]);

  const value = useMemo<LoggerContextValue>(() => {
    const picked = Object.fromEntries(
      RENDER_KEYS.map((key) => [key, props[key]]),
    );
    return {
      ...picked,
      labels: mergedLabels,
      managed: true,
      expandedIds: expandedSet,
      toggleExpanded,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...renderDeps, mergedLabels, expandedSet, toggleExpanded]);

  return (
    <LoggerContext.Provider value={value}>{children}</LoggerContext.Provider>
  );
};
