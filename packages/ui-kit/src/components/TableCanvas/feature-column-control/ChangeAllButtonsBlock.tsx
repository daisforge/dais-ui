import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { Switch } from '@ui-kit/components/Switch';
import { IconListView, IconPinOutline } from '@ui-kit/icons';
import { surfaceTransparentPrimary } from '@ui-kit/tokens';
import React from 'react';

import { StyledChangeAllButtonsBox } from './styled';
import { ColumnsControlConfig } from './types';

export const ChangeAllButtonsBlock = ({
  clearLocalPinned,
  disabledClearPinnedButton,
  resetToDefaultOrder,
  disableResetToDefaultOrderButton,
  allColumnsIsVisible,
  allColumnsVisibilityChanger,
  columnsControlConfig
}: {
  clearLocalPinned: () => void;
  disabledClearPinnedButton: boolean;
  resetToDefaultOrder: () => void;
  disableResetToDefaultOrderButton: boolean;
  allColumnsIsVisible: boolean;
  allColumnsVisibilityChanger: () => void;
  columnsControlConfig: ColumnsControlConfig;
}) => (
  <StyledChangeAllButtonsBox>
    {columnsControlConfig.pinning && (
      <Button
        view="secondary"
        size="xs"
        contentLeft={<IconPinOutline color="inherit" size="xs" />}
        onClick={clearLocalPinned}
        disabled={disabledClearPinnedButton}
      >
        Открепить все
      </Button>
    )}
    {(columnsControlConfig.reorderingAside ||
      columnsControlConfig.reorderingHeader) && (
      <Button
        view="secondary"
        size="xs"
        contentLeft={<IconListView color="inherit" size="xs" />}
        onClick={resetToDefaultOrder}
        disabled={disableResetToDefaultOrderButton}
      >
        Сбросить порядок
      </Button>
    )}
    {columnsControlConfig.hiding && (
      <Box
        $css={{
          width: '100%',
          padding: '10px 12px',
          backgroundColor: surfaceTransparentPrimary,
          borderRadius: '8px'
        }}
      >
        <Switch
          label="Включить все столбцы"
          checked={allColumnsIsVisible}
          onChange={allColumnsVisibilityChanger}
          size="s"
          toggleSize="s"
        />
      </Box>
    )}
  </StyledChangeAllButtonsBox>
);
