import React, { FC } from 'react';

import { Button, ButtonCompProps } from '../../Button';
import { LinkButton, LinkButtonCompProps } from '../../LinkButton';
import { EmptyStateButtonProps, EmptyStateProps } from '../EmptyState.types';
import { getButtonSize } from '../EmptyState.utils';

/**
 * Компонент для рендеринга варианта кнопки (Button или LinkButton)
 */
export const EmptyStateButtonVariant: FC<{
  variant: EmptyStateButtonProps;
  componentSize: EmptyStateProps['size'];
  isExtra?: boolean;
}> = ({ variant, componentSize, isExtra = false }) => {
  const isLink = variant.type === 'link';
  const defaultSize = getButtonSize(componentSize);
  const { key: propKey, ...propsWithoutKey } = variant.props || {};
  const baseProps = {
    ...propsWithoutKey,
    size: defaultSize
  } as ButtonCompProps | LinkButtonCompProps;

  if (isExtra) {
    if (!isLink) {
      (baseProps as ButtonCompProps).pin = 'clear-clear';
    }
  }

  if (isLink) {
    return <LinkButton {...(baseProps as LinkButtonCompProps)} />;
  }

  return <Button {...(baseProps as ButtonCompProps)} />;
};
