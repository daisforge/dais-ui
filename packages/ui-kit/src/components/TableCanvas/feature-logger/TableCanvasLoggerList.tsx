import { BodyS } from '@ui-kit/components/Typography';
import { mergeClasses } from '@ui-kit/utils';
import React, { FC, useMemo } from 'react';

import { TableCanvasLoggerItems } from './components/TableCanvasLoggerItems';
import { useExpandedIds } from './hooks/useExpandedIds';
import { tableCanvasLoggerClassNames as cls } from './TableCanvasLogger.constants';
import { useTableCanvasLoggerContext } from './TableCanvasLogger.context';
import {
  StyledTableCanvasLoggerEmpty,
  StyledTableCanvasLoggerList,
} from './TableCanvasLogger.styled';
import type {
  TableCanvasLoggerCssProp,
  TableCanvasLoggerItem,
  TableCanvasLoggerListProps,
} from './TableCanvasLogger.types';
import { filterTableCanvasLoggerItems } from './TableCanvasLogger.utils';
import { TableCanvasLoggerProvider } from './TableCanvasLoggerProvider';

type TableCanvasLoggerListViewProps = {
  id?: string;
  items: TableCanvasLoggerItem[];
  maxHeight?: number | string;
  emptyContent?: TableCanvasLoggerListProps['emptyContent'];
  className?: string;
  $css?: TableCanvasLoggerCssProp;
};

export const TableCanvasLoggerListView: FC<TableCanvasLoggerListViewProps> = ({
  id,
  items,
  maxHeight,
  emptyContent,
  className,
  $css,
}) => {
  const { labels, classes } = useTableCanvasLoggerContext();

  return (
    <StyledTableCanvasLoggerList
      id={id}
      $maxHeight={maxHeight}
      $css={$css}
      className={mergeClasses(cls.list, classes?.list, className)}
    >
      {items.length > 0 ? (
        <TableCanvasLoggerItems items={items} />
      ) : (
        emptyContent ?? (
          <StyledTableCanvasLoggerEmpty
            className={mergeClasses(cls.empty, classes?.empty)}
          >
            <BodyS>{labels.empty}</BodyS>
          </StyledTableCanvasLoggerEmpty>
        )
      )}
    </StyledTableCanvasLoggerList>
  );
};

export const TableCanvasLoggerList: FC<TableCanvasLoggerListProps> = ({
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
  const expanded = useExpandedIds({
    items,
    expandedIds,
    defaultExpandedIds,
    onExpandedIdsChange,
  });
  const visibleItems = useMemo(
    () => filterTableCanvasLoggerItems(items ?? [], filter),
    [items, filter],
  );

  return (
    <TableCanvasLoggerProvider
      {...providerProps}
      expandedIds={expanded.expandedIds}
      toggleExpanded={expanded.toggleExpanded}
    >
      <TableCanvasLoggerListView
        items={visibleItems}
        maxHeight={maxHeight}
        emptyContent={emptyContent}
        className={className}
        $css={$css}
      />
    </TableCanvasLoggerProvider>
  );
};
