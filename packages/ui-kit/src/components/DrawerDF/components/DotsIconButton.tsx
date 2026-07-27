import { Dropdown } from '@ui-kit/components/Dropdown';
import { IconButton } from '@ui-kit/components/IconButton';
import { IconDotsHorizontalOutline } from '@ui-kit/icons';
import React from 'react';

import type { DrawerDFDotsIconButtonProps } from '../types';

export const DrawerDFDotsIconButton = ({
  dropdownProps,
  iconSize,
  ...props
}: DrawerDFDotsIconButtonProps) => {
  const jsx = (
    <IconButton view="secondary" size="xs" {...props}>
      <IconDotsHorizontalOutline
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
