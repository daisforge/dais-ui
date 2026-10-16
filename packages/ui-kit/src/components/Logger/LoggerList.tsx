import { mergeClasses } from '@ui-kit/utils';
import React, { FC } from 'react';

import { BodyS } from '../Typography';
import { LoggerItems } from './components/LoggerItems';
import { useLogger } from './hooks/useLogger';
import { loggerClassNames as cls } from './Logger.constants';
import { useLoggerContext } from './Logger.context';
import { StyledLoggerEmpty, StyledLoggerList } from './Logger.styled';
import type {
  LoggerCssProp,
  LoggerItem,
  LoggerListProps,
} from './Logger.types';
import { filterLoggerItems } from './Logger.utils';
import { LoggerProvider } from './LoggerProvider';

type LoggerListViewProps = {
  items: LoggerItem[];
  maxHeight?: number | string;
  emptyContent?: LoggerListProps['emptyContent'];
  className?: string;
  $css?: LoggerCssProp;
};

export const LoggerListView: FC<LoggerListViewProps> = ({
  items,
  maxHeight,
  emptyContent,
  className,
  $css,
}) => {
  const { labels, classes } = useLoggerContext();

  return (
    <StyledLoggerList
      $maxHeight={maxHeight}
      $css={$css}
      className={mergeClasses(cls.list, classes?.list, className)}
    >
      {items.length > 0 ? (
        <LoggerItems items={items} />
      ) : (
        emptyContent ?? (
          <StyledLoggerEmpty
            className={mergeClasses(cls.empty, classes?.empty)}
          >
            <BodyS>{labels.empty}</BodyS>
          </StyledLoggerEmpty>
        )
      )}
    </StyledLoggerList>
  );
};

export const LoggerList: FC<LoggerListProps> = ({
  items,
  expandedIds,
  defaultExpandedIds,
  onExpandedIdsChange,
  filter,
  emptyContent,
  maxHeight,
  className,
  $css,
  ...providerProps
}) => {
  const state = useLogger({
    items,
    expandedIds,
    defaultExpandedIds,
    onExpandedIdsChange,
  });

  return (
    <LoggerProvider
      {...providerProps}
      expandedIds={state.expandedIds}
      toggleExpanded={state.toggleExpanded}
    >
      <LoggerListView
        items={filterLoggerItems(items ?? [], filter)}
        maxHeight={maxHeight}
        emptyContent={emptyContent}
        className={className}
        $css={$css}
      />
    </LoggerProvider>
  );
};
