import { Dropdown } from '@ui-kit/components/Dropdown';
import { IconButton } from '@ui-kit/components/IconButton';
import { Icon, IconDotsVerticalCenteredOutline } from '@ui-kit/icons';
import React, { ComponentProps } from 'react';

export type FiltersActionsDotsIconButtonProps = ComponentProps<
  typeof IconButton
> & {
  /** Пропсы выпадающего меню */
  dropdownProps?: ComponentProps<typeof Dropdown>;
  /** Размер иконки */
  iconSize?: ComponentProps<typeof Icon>['size'];
};

export const FiltersActionsDotsIconButton = ({
  dropdownProps,
  iconSize,
  ...props
}: FiltersActionsDotsIconButtonProps) => {
  const jsx = (
    <IconButton view="secondary" size="s" {...props}>
      <IconDotsVerticalCenteredOutline size={iconSize ?? 's'} />
    </IconButton>
  );

  if (!dropdownProps) {
    return jsx;
  }

  return <Dropdown {...dropdownProps}>{jsx}</Dropdown>;
};
