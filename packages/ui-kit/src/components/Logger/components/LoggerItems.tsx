import React, { FC } from 'react';

import type { LoggerItem } from '../Logger.types';
import { isLoggerGroup } from '../Logger.utils';
import { LoggerGroup } from './LoggerGroup';
import { LoggerMessage } from './LoggerMessage';

export const LoggerItems: FC<{ items: LoggerItem[]; depth?: number }> = ({
  items,
  depth = 0,
}) => (
  <>
    {items.map((item) =>
      isLoggerGroup(item) ? (
        <LoggerGroup key={item.id} item={item} depth={depth}>
          <LoggerItems items={item.items} depth={depth + 1} />
        </LoggerGroup>
      ) : (
        <LoggerMessage key={item.id} item={item} depth={depth} />
      ),
    )}
  </>
);
