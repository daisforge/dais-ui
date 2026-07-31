import { Box } from '@ui-kit/components/Box';
import { DEFAULT_TABLE_TRANSITION } from '@ui-kit/components/Table';
import { surfaceNegative } from '@ui-kit/tokens';
import React from 'react';

export const Circle = ({
  visible,
  topLeft,
}: {
  visible?: boolean | undefined;
  topLeft?: string | number;
}) => (
  <Box
    $css={{
      position: 'absolute',
      top: topLeft ?? 0,
      right: topLeft ?? 0,
      width: '8px',
      aspectRatio: '1',
      borderRadius: '50%',

      transition: DEFAULT_TABLE_TRANSITION,
      backgroundColor: 'transparent',
      transform: 'scale(0)',
      ...(visible && {
        backgroundColor: surfaceNegative,
        transform: 'scale(1)',
      }),
    }}
  />
);
