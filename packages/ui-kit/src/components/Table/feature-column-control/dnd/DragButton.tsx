import { Box } from '@ui-kit/components/Box';
import { IconDrag } from '@ui-kit/icons';
import { textSecondary, textTertiary } from '@ui-kit/tokens';
import React from 'react';

export const DragButton = ({
  onMouseEnter,
  onMouseLeave,
  itemIsDragging,
  itemIsHovered,
}: {
  itemIsDragging: boolean;
  itemIsHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => (
  <Box
    className="drag-button"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    $css={{
      mr: '8px',

      display: 'inline',
      height: '24px',

      ...(itemIsDragging
        ? {
            color: textSecondary,
            pointerEvents: 'none',
          }
        : {
            color: textTertiary,
            ...(itemIsHovered && {
              color: textSecondary,
            }),
          }),
    }}
  >
    <IconDrag color="inherit" />
  </Box>
);
