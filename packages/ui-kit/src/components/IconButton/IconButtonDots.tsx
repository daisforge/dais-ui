import { Dropdown } from '@ui-kit/components/Dropdown';
import {
  Icon,
  IconDotsHorizontalOutline,
  IconDotsVerticalCenteredOutline
} from '@ui-kit/icons';
import React, { ComponentProps } from 'react';

import { IconButton, type IconButtonProps } from './IconButton';

type IconButtonDotsProps = IconButtonProps & {
  dropdownProps?: ComponentProps<typeof Dropdown>;
  iconSize?: ComponentProps<typeof Icon>['size'];
  iconOrientation?: 'horizontal' | 'vertical';
};

export const IconButtonDots = ({
  dropdownProps,
  iconSize,
  iconOrientation = 'horizontal',
  ...props
}: IconButtonDotsProps) => {
  const Icon =
    iconOrientation === 'vertical'
      ? IconDotsVerticalCenteredOutline
      : IconDotsHorizontalOutline;

  const jsx = (
    <IconButton view="secondary" size="s" {...props}>
      <Icon size={iconSize ?? 's'} />
    </IconButton>
  );

  if (!dropdownProps) {
    return jsx;
  }

  return <Dropdown {...dropdownProps}>{jsx}</Dropdown>;
};
