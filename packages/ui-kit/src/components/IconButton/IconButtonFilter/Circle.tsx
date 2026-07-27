import { Box } from '@ui-kit/components/Box';
import { surfaceNegative } from '@ui-kit/tokens';
import { DEFAULT_TRANSITION } from '@ui-kit/utils/styles/animations';
import React from 'react';

export const Circle = ({
  visible,
  topLeft
}: {
  visible?: boolean | undefined;
  topLeft?: string | number;
}) => (
  <Box
    $css={{
      position: 'absolute',
      top: topLeft ?? 0,
      right: topLeft ?? 0,
      width: '6px',
      aspectRatio: '1',
      borderRadius: '50%',
      transition: DEFAULT_TRANSITION,
      backgroundColor: 'transparent',
      transform: 'scale(0)',
      ...(visible && {
        backgroundColor: surfaceNegative,
        transform: 'scale(1)'
      })
    }}
  />
);
