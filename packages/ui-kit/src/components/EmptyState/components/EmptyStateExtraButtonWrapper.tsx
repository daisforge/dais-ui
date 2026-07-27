import React, { FC } from 'react';

import { EmptyStateButtonProps, EmptyStateProps } from '../EmptyState.types';
import { EmptyStateExtraButton } from '../styled';
import { EmptyStateButtonVariant } from './EmptyStateButtonVariant';

/**
 * Компонент для дополнительной кнопки EmptyState (только для size='l')
 */
export const EmptyStateExtraButtonWrapper: FC<{
  extraButton: EmptyStateButtonProps;
  size: EmptyStateProps['size'];
  className?: string;
}> = ({ extraButton, size, className }) => {
  if (size !== 'l') return null;
  return (
    <EmptyStateExtraButton className={className}>
      <EmptyStateButtonVariant
        variant={extraButton}
        componentSize={size}
        isExtra
      />
    </EmptyStateExtraButton>
  );
};
