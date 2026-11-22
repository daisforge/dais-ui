import React, { FC, memo } from 'react';

import { useTableCanvasLoggerExpandedItem } from '../TableCanvasLogger.context';
import type {
  TableCanvasLoggerGroupItem,
  TableCanvasLoggerItem,
  TableCanvasLoggerMessageItem,
} from '../TableCanvasLogger.types';
import { isTableCanvasLoggerGroup } from '../TableCanvasLogger.utils';
import { TableCanvasLoggerGroup } from './TableCanvasLoggerGroup';
import { TableCanvasLoggerMessage } from './TableCanvasLoggerMessage';

const ExpandedMessage: FC<{ item: TableCanvasLoggerMessageItem }> = memo(
  ({ item }) => {
    const [open, toggle] = useTableCanvasLoggerExpandedItem(item.id);
    return (
      <TableCanvasLoggerMessage item={item} open={open} onOpenChange={toggle} />
    );
  },
);

const ExpandedGroup: FC<{ item: TableCanvasLoggerGroupItem }> = memo(
  ({ item }) => {
    const [open, toggle] = useTableCanvasLoggerExpandedItem(item.id);
    return (
      <TableCanvasLoggerGroup item={item} open={open} onOpenChange={toggle}>
        <TableCanvasLoggerItems items={item.items} />
      </TableCanvasLoggerGroup>
    );
  },
);

/** Сообщения и группы с раскрытием из TableCanvasLoggerProvider */
export const TableCanvasLoggerItems: FC<{ items: TableCanvasLoggerItem[] }> =
  memo(({ items }) => (
    <>
      {items.map((item) =>
        isTableCanvasLoggerGroup(item) ? (
          <ExpandedGroup key={item.id} item={item} />
        ) : (
          <ExpandedMessage key={item.id} item={item} />
        ),
      )}
    </>
  ));
