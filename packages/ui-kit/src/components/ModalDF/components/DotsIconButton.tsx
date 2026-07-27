import { Dropdown } from '@ui-kit/components/Dropdown';
import { IconButton } from '@ui-kit/components/IconButton';
import { IconDotsVerticalCenteredOutline } from '@ui-kit/icons';
import React from 'react';

import type { ModalDFDotsIconButtonProps } from '../types';

export const DotsIconButton = ({
  dropdownProps,
  iconSize,
  ...props
}: ModalDFDotsIconButtonProps) => {
  const jsx = (
    <IconButton view="secondary" size="xs" {...props}>
      <IconDotsVerticalCenteredOutline
        size="xs"
        {...(props.size === 's' && { size: props.size })}
        {...(iconSize && { size: iconSize })}
      />
    </IconButton>
  );

  if (!dropdownProps) {
    return jsx;
  }

  return <Dropdown {...dropdownProps}>{jsx}</Dropdown>;
};
