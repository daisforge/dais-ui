import { IconChevronDown, IconSyncError } from '@ui-kit/icons';
import { textPrimary, textTertiary } from '@ui-kit/tokens';
import { mergeClasses } from '@ui-kit/utils';
import React, { FC, KeyboardEvent } from 'react';

import { Divider } from '../Divider';
import { TextXS } from '../Typography';
import { LoggerFilters } from './components/LoggerFilters';
import { LoggerGroup } from './components/LoggerGroup';
import { LoggerMessage } from './components/LoggerMessage';
import { useLogger } from './hooks/useLogger';
import {
  DEFAULT_LOGGER_LABELS,
  loggerClassNames as cls,
} from './Logger.constants';
import {
  StyledLoggerChevron,
  StyledLoggerHeader,
  StyledLoggerHeaderExtra,
  StyledLoggerRoot,
} from './Logger.styled';
import type { LoggerProps } from './Logger.types';
import { LoggerList, LoggerListView } from './LoggerList';
import { LoggerProvider } from './LoggerProvider';

const LoggerRoot: FC<LoggerProps> = ({
  items,
  open,
  defaultOpen,
  onOpenChange,
  filter,
  defaultFilter,
  onFilterChange,
  expandedIds,
  defaultExpandedIds,
  onExpandedIdsChange,
  counts,
  title,
  icon,
  headerExtra,
  hideHeader,
  hideFilters,
  showEmptyFilters,
  emptyContent,
  maxHeight = '50vh',
  className,
  $css,
  ...providerProps
}) => {
  const state = useLogger({
    items,
    open,
    defaultOpen,
    onOpenChange,
    filter,
    defaultFilter,
    onFilterChange,
    expandedIds,
    defaultExpandedIds,
    onExpandedIdsChange,
    counts,
  });
  const { classes, labels } = providerProps;

  const onHeaderKeyDown = (event: KeyboardEvent) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      state.toggleOpen();
    }
  };

  const expanded = hideHeader || state.open;

  return (
    <LoggerProvider
      {...providerProps}
      expandedIds={state.expandedIds}
      toggleExpanded={state.toggleExpanded}
    >
      <StyledLoggerRoot
        className={mergeClasses(cls.root, classes?.root, className)}
        $css={$css}
      >
        {!hideHeader && (
          <StyledLoggerHeader
            role="button"
            tabIndex={0}
            aria-expanded={state.open}
            className={mergeClasses(cls.header, classes?.header)}
            onClick={state.toggleOpen}
            onKeyDown={onHeaderKeyDown}
          >
            <StyledLoggerChevron $open={state.open}>
              <IconChevronDown size="xs" color={textPrimary} />
            </StyledLoggerChevron>
            {icon ?? <IconSyncError size="xs" color={textTertiary} />}
            <TextXS bold>
              {title ?? labels?.title ?? DEFAULT_LOGGER_LABELS.title}
            </TextXS>
            {!hideFilters && (
              <LoggerFilters
                counts={state.counts}
                value={state.filter}
                onChange={state.selectFilter}
                showEmpty={showEmptyFilters}
              />
            )}
            {headerExtra && (
              <StyledLoggerHeaderExtra>{headerExtra}</StyledLoggerHeaderExtra>
            )}
          </StyledLoggerHeader>
        )}
        {expanded && (
          <>
            {!hideHeader && <Divider length="100%" />}
            <LoggerListView
              items={state.visibleItems}
              maxHeight={maxHeight}
              emptyContent={emptyContent}
            />
          </>
        )}
      </StyledLoggerRoot>
    </LoggerProvider>
  );
};

export const Logger = Object.assign(LoggerRoot, {
  List: LoggerList,
  Message: LoggerMessage,
  Group: LoggerGroup,
  Filters: LoggerFilters,
});
