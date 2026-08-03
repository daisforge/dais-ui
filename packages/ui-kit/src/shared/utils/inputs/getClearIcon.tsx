import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { IconClose } from '@ui-kit/icons';
import React, { ReactElement } from 'react';

// Размер кнопки в зависимости от размера input
const EmbedIconButtonAndIconSizeMap = {
  xl: 'm',
  l: 'm',
  m: 'm',
  s: 'm',
  xs: 's',
} as const;

// Размер иконки в зависимости от EmbedIconButton
const IconSizeMap = {
  s: 'xs',
  m: 's',
} as const;

type GetClearIconOptions = {
  value: unknown;
  onClear?: () => void;
  size?: 'm' | 's' | 'xs' | 'l' | 'xl';
};

export const getClearIcon = ({
  value,
  onClear,
  size = 's',
}: GetClearIconOptions): ReactElement | undefined => {
  if (!value || !onClear) return undefined;

  const buttonSize = EmbedIconButtonAndIconSizeMap[size] ?? 'm';
  const iconSize = IconSizeMap[buttonSize] ?? 's';

  return (
    <EmbedIconButton size={buttonSize} onClick={onClear} view="secondary">
      <IconClose size={iconSize} />
    </EmbedIconButton>
  ) as ReactElement;
};
