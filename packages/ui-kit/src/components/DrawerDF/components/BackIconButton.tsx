import { IconButton } from '@ui-kit/components/IconButton';
import { IconChevronLeft } from '@ui-kit/icons';
import React from 'react';

import { drawerDFClassNames as cls } from '../classNames';
import type { DrawerDFBackIconButtonProps } from '../types';

export const DrawerDFBackIconButton = ({
  ...props
}: DrawerDFBackIconButtonProps) => (
  <IconButton
    size="s"
    view="clear"
    className={cls.drawerBackIconButton}
    {...props}
  >
    <IconChevronLeft color="inherit" />
  </IconButton>
);
