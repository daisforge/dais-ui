import { TextXS } from '@ui-kit/components/Typography';
import { IconChevronDown, IconSyncError } from '@ui-kit/icons';
import { textPrimary, textTertiary } from '@ui-kit/tokens';
import { mergeClasses } from '@ui-kit/utils';
import React, { FC, useId } from 'react';

import { TableCanvasLoggerFilters } from './components/TableCanvasLoggerFilters';
import { useTableCanvasLogger } from './hooks/useTableCanvasLogger';
import {
  DEFAULT_TABLE_CANVAS_LOGGER_LABELS,
  tableCanvasLoggerClassNames as cls,
} from './TableCanvasLogger.constants';
import {
  StyledTableCanvasLoggerChevron,
  StyledTableCanvasLoggerDivider,
  StyledTableCanvasLoggerHeader,
  StyledTableCanvasLoggerHeaderExtra,
  StyledTableCanvasLoggerRoot,
  StyledTableCanvasLoggerToggle,
} from './TableCanvasLogger.styled';
import type { TableCanvasLoggerProps } from './TableCanvasLogger.types';
import { TableCanvasLoggerListView } from './TableCanvasLoggerList';
import { TableCanvasLoggerProvider } from './TableCanvasLoggerProvider';

export const TableCanvasLogger: FC<TableCanvasLoggerProps> = ({
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
  maxHeight,
  className,
  $css,
  ...providerProps
}) => {
  const state = useTableCanvasLogger({
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

  const listId = useId();
  const expanded = hideHeader || state.open;

  return (
    <TableCanvasLoggerProvider
      {...providerProps}
      expandedIds={state.expandedIds}
      toggleExpanded={state.toggleExpanded}
    >
      <StyledTableCanvasLoggerRoot
        className={mergeClasses(cls.root, classes?.root, className)}
        $css={$css}
      >
        {!hideHeader && (
          <StyledTableCanvasLoggerHeader
            className={mergeClasses(cls.header, classes?.header)}
          >
            <StyledTableCanvasLoggerToggle
              type="button"
              aria-expanded={state.open}
              aria-controls={state.open ? listId : undefined}
              onClick={state.toggleOpen}
            >
              <StyledTableCanvasLoggerChevron $open={state.open}>
                <IconChevronDown size="xs" color={textPrimary} />
              </StyledTableCanvasLoggerChevron>
              {icon ?? <IconSyncError size="xs" color={textTertiary} />}
              <TextXS bold>
                {title ??
                  labels?.title ??
                  DEFAULT_TABLE_CANVAS_LOGGER_LABELS.title}
              </TextXS>
            </StyledTableCanvasLoggerToggle>
            {!hideFilters && (
              <TableCanvasLoggerFilters
                counts={state.counts}
                value={state.open ? state.filter : null}
                onChange={state.selectFilter}
                showEmpty={showEmptyFilters}
              />
            )}
            {headerExtra && (
              <StyledTableCanvasLoggerHeaderExtra>
                {headerExtra}
              </StyledTableCanvasLoggerHeaderExtra>
            )}
          </StyledTableCanvasLoggerHeader>
        )}
        {expanded && (
          <>
            {!hideHeader && <StyledTableCanvasLoggerDivider length="100%" />}
            <TableCanvasLoggerListView
              id={listId}
              items={state.visibleItems}
              maxHeight={maxHeight}
              emptyContent={emptyContent}
            />
          </>
        )}
      </StyledTableCanvasLoggerRoot>
    </TableCanvasLoggerProvider>
  );
};
