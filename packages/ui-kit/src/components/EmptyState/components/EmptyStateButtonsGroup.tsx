import React, { FC } from 'react';

import { EmptyStateButtonProps, EmptyStateProps } from '../EmptyState.types';
import { EmptyStateButtons } from '../styled';
import { EmptyStateButtonVariant } from './EmptyStateButtonVariant';

/**
 * Компонент для группы основных кнопок EmptyState
 */
export const EmptyStateButtonsGroup: FC<{
  buttons: EmptyStateButtonProps[];
  size: EmptyStateProps['size'];
  className?: string;
}> = ({ buttons, size, className }) => {
  if (!buttons.length) return null;
  const buttonsToRender =
    size === 'l' ? buttons.slice(0, 2) : buttons.slice(0, 1);

  return (
    <EmptyStateButtons className={className}>
      {buttonsToRender.map((variant, index) => (
        <EmptyStateButtonVariant
          key={variant.props?.key || `${index}-${variant.props?.text ?? ''}`}
          variant={variant}
          componentSize={size}
        />
      ))}
    </EmptyStateButtons>
  );
};
