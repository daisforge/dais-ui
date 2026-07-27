import { Box } from '@ui-kit/components/Box';
import { IconSettingsFilter } from '@ui-kit/icons';
import { textSecondary } from '@ui-kit/tokens';
import React from 'react';

import { COLORS, DEFAULT_TABLE_TRANSITION } from '../../styles';
import { StyledFilterIconButton } from './styles';

export const FilterIcon = ({ redSquare }: { redSquare?: boolean }) => (
  <StyledFilterIconButton
    size="s"
    view="clear"
    style={{
      width: 16,
      height: 16,
      position: 'relative'
    }}
  >
    <Box
      $css={{
        position: 'absolute',
        top: -3,
        right: -3,
        width: '6px',
        aspectRatio: '1',
        borderRadius: '50%',

        transition: DEFAULT_TABLE_TRANSITION,
        backgroundColor: 'transparent',
        transform: 'scale(0)',
        ...(redSquare && {
          backgroundColor: COLORS.red,
          transform: 'scale(1)'
        })
      }}
    />

    <IconSettingsFilter size="xs" color={textSecondary} />
  </StyledFilterIconButton>
);
