import { Box } from '@ui-kit/components/Box';
import { BodyM, H3 } from '@ui-kit/components/Typography';
import { textPrimary, textSecondary } from '@ui-kit/tokens';
import React from 'react';

interface EmptySearchFallbackProps {
  icon?: React.ReactNode;
  title?: string;
  subTitle?: string;
}

export const EmptySearchFallback: React.FC<EmptySearchFallbackProps> = ({
  icon,
  title = 'Ничего не нашлось',
  subTitle = 'Попробуйте изменить запрос'
}) => (
  <Box
    $css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    {icon && <Box $css={{ marginBottom: '8px' }}>{icon}</Box>}
    <H3 color={textPrimary} style={{ marginBottom: '4px' }}>
      {title}
    </H3>
    <BodyM color={textSecondary}>{subTitle}</BodyM>
  </Box>
);
