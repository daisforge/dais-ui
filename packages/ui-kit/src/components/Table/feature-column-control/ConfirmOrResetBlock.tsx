import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import React from 'react';

export const ConfirmOrResetBlock = ({
  confirmAllLocalChanging,
  resetAllLocalChanging,
}: {
  confirmAllLocalChanging: () => void;
  resetAllLocalChanging: () => void;
}) => (
  <Box
    $css={{
      height: '32px',
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'end',
      gap: '8px',
    }}
  >
    <Button size="xs" view="secondary" onClick={resetAllLocalChanging}>
      Отменить
    </Button>
    <Button size="xs" view="accent" onClick={confirmAllLocalChanging}>
      Применить
    </Button>
  </Box>
);
