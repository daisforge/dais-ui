import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import React from 'react';
import styled from 'styled-components';

import { useRowContext } from '../contexts';
import type { RowSize } from '../renders/rowIconConfig';
import {
  getTreeButtonBox,
  IconTreeCollapsed,
  IconTreeExpanded,
} from './tree-disclosure-icons';

/**
 * Та же геометрия, что у кнопки дерева на canvas (getTreeButtonBox), иначе
 * текст и поле в редакторе уезжают вправо относительно просмотра. Кнопка SDDS
 * растягивает svg на свою ширину и сама сжимается как flex-элемент, поэтому
 * размеры кнопки и svg заданы жёстко, а пустота справа срезается обёрткой.
 */
const CellExpand = styled.div<{ $rowSize: RowSize }>`
  ${({ $rowSize }) => {
    const { squareSize, layoutWidth, gapToText } = getTreeButtonBox($rowSize);
    return `
      width: ${layoutWidth}px;
      height: ${squareSize}px;
      margin-right: ${gapToText}px;

      > button {
        width: ${squareSize}px !important;
        height: ${squareSize}px !important;
      }

      svg {
        width: ${squareSize}px !important;
        height: ${squareSize}px !important;
      }
    `;
  }}
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  overflow: hidden;

  > button {
    min-width: 0 !important;
    padding: 0 !important;
    justify-content: flex-start;
    overflow: visible;
    flex: 0 0 auto;
  }

  svg {
    flex-shrink: 0;
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
  className,
}: CellExpanderFormatterProps) {
  const { rowSize } = useRowContext();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onCellExpand();
    }
  };

  return (
    <CellExpand
      $rowSize={rowSize}
      className={className}
      onClick={onCellExpand}
      onKeyDown={handleKeyDown}
    >
      <EmbedIconButton tabIndex={tabIndex} view="secondary" stretching="auto">
        {expanded ? (
          <IconTreeExpanded size={rowSize} />
        ) : (
          <IconTreeCollapsed size={rowSize} />
        )}
      </EmbedIconButton>
    </CellExpand>
  );
}
