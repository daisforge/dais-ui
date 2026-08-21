import { IconArrowDown, IconArrowUp, IconSwapVert } from '@ui-kit/icons';
import { textSecondary } from '@ui-kit/tokens';
import React from 'react';
import { SortColumn } from 'react-data-grid';

import { TableTooltip } from '../components/TableTooltip';
import { StyledSortIconButton } from './styles';

export const HeaderSortButton = ({
  columnKey,
  columnSorted,
  setSortState,
}: {
  columnKey: string;
  columnSorted: SortColumn | undefined;
  setSortState: React.Dispatch<React.SetStateAction<readonly SortColumn[]>>;
}) => {
  const SortIcon =
    (columnSorted?.direction === 'ASC' && IconArrowUp) ||
    (columnSorted?.direction === 'DESC' && IconArrowDown) ||
    IconSwapVert;

  return (
    <TableTooltip
      text="Отсортировать по данной колонке"
      placement="top"
      animated
      target={
        <StyledSortIconButton
          size="s"
          view="clear"
          style={{ width: 16, height: 16 }}
          onClick={() => {
            const nextDirection =
              (columnSorted?.direction === undefined && 'ASC') ||
              (columnSorted?.direction === 'ASC' && 'DESC') ||
              undefined;

            setSortState?.(
              nextDirection
                ? [
                    {
                      columnKey,
                      direction: nextDirection,
                    },
                  ]
                : [],
            );
          }}
        >
          <SortIcon color={textSecondary} size="xs" />
        </StyledSortIconButton>
      }
    />
  );
};
