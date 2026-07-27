import { IconButton } from '@ui-kit/components/IconButton';
import {
  IconDoubleDisclosureDown,
  IconDoubleDisclosureUp
} from '@ui-kit/icons';
import { textSecondary } from '@ui-kit/tokens';
import React from 'react';

import { TableTooltip } from '../components/TableTooltip';
import { HeaderContextValueTypeInstance, useHeaderContext } from '../contexts';
import { ObjectForExtending } from '../types';

export const ExpandAllButton = () => {
  const headerContextState =
    useHeaderContext<HeaderContextValueTypeInstance<ObjectForExtending>>();

  const { isExpandedAllRows, toggleExpandAllButton } = headerContextState;

  return (
    <div
      style={{
        display: 'inline-block'
      }}
    >
      <TableTooltip
        text={`${
          isExpandedAllRows ? 'Скрыть' : 'Раскрыть'
        } все дочерние строки`}
        animated
        placement="top"
        target={
          <IconButton
            size="s"
            view="clear"
            style={{
              width: 16,
              height: 16
            }}
            onClick={toggleExpandAllButton}
          >
            {isExpandedAllRows ? (
              <IconDoubleDisclosureUp size="xs" color={textSecondary} />
            ) : (
              <IconDoubleDisclosureDown size="xs" color={textSecondary} />
            )}
          </IconButton>
        }
      />
    </div>
  );
};
