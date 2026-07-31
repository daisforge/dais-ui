import { IconButton } from '@ui-kit/components/IconButton';
import { IconClose } from '@ui-kit/icons';
import React from 'react';

export const CloseButton = ({
  onClose,
}: {
  onClose: (() => void) | undefined;
}) => (
  <IconButton
    title="Закрыть"
    onClick={() => {
      onClose?.();
    }}
    size="s"
    view="clear"
  >
    <IconClose color="inherit" />
  </IconButton>
);
