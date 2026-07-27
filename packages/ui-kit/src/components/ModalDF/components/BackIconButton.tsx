import { IconButton } from '@ui-kit/components/IconButton';
import { IconArrowLeft } from '@ui-kit/icons';
import React from 'react';

import { cls } from '../classNames';
import type { ModalDFBackIconButtonProps } from '../types';

export const BackIconButton = ({
  iconSize,
  ...props
}: ModalDFBackIconButtonProps) => (
  <IconButton
    view="secondary"
    size="xs"
    pin="circle-circle"
    className={cls.backIconButton}
    {...props}
  >
    <IconArrowLeft
      size="xs"
      {...(props.size === 's' && { size: props.size })}
      {...(iconSize && { size: iconSize })}
    />
  </IconButton>
);
