import { IconButton } from '@ui-kit/components/IconButton';
import {
  IconDisclosureDownOutline,
  IconDisclosureRightOutline
} from '@ui-kit/icons';
import React from 'react';
import styled from 'styled-components';

const CellExpand = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  > button {
    //     width: 24px !important;
    height: 24px !important;
  }
`;

interface CellExpanderFormatterProps {
  tabIndex: number | undefined;
  expanded: boolean;
  onCellExpand: () => void;
  className: string;
}

export function CellExpandFormatter({
  tabIndex,
  expanded,
  onCellExpand,
  className
}: CellExpanderFormatterProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onCellExpand();
    }
  };

  return (
    <CellExpand
      className={className}
      onClick={onCellExpand}
      onKeyDown={handleKeyDown}
    >
      <IconButton tabIndex={tabIndex} view="clear" stretching="auto">
        {expanded ? (
          <IconDisclosureDownOutline color="inherit" />
        ) : (
          <IconDisclosureRightOutline color="inherit" />
        )}
      </IconButton>
    </CellExpand>
  );
}
