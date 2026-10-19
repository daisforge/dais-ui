import React, { FC, memo } from 'react';

import type { TableCanvasLoggerItem } from '../TableCanvasLogger.types';
import { isTableCanvasLoggerGroup } from '../TableCanvasLogger.utils';
import { TableCanvasLoggerGroup } from './TableCanvasLoggerGroup';
import { TableCanvasLoggerMessage } from './TableCanvasLoggerMessage';

type TableCanvasLoggerItemsProps = {
  items: TableCanvasLoggerItem[];
  depth?: number;
};

const TableCanvasLoggerItemsBase: FC<TableCanvasLoggerItemsProps> = ({
  items,
  depth = 0,
}) => (
  <>
    {items.map((item) =>
      isTableCanvasLoggerGroup(item) ? (
        <TableCanvasLoggerGroup key={item.id} item={item} depth={depth}>
          <TableCanvasLoggerItems items={item.items} depth={depth + 1} />
        </TableCanvasLoggerGroup>
      ) : (
        <TableCanvasLoggerMessage key={item.id} item={item} depth={depth} />
      ),
    )}
  </>
);

export const TableCanvasLoggerItems = memo(TableCanvasLoggerItemsBase);
