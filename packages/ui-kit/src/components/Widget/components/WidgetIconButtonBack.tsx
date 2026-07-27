import { IconButton } from '@ui-kit/components/IconButton';
import { IconArrowLeft } from '@ui-kit/icons';
import React, { ComponentProps } from 'react';

import { widgetClassNames as cls } from '../Widget.classNames';

export type WidgetIconButtonBackProps = ComponentProps<typeof IconButton> & {
  iconSize?: ComponentProps<typeof IconArrowLeft>['size'];
};

export const WidgetIconButtonBack = ({
  iconSize,
  ...props
}: WidgetIconButtonBackProps) => (
  <IconButton
    view="secondary"
    size="s"
    pin="circle-circle"
    className={cls.backIconButton}
    {...props}
  >
    <IconArrowLeft
      size={iconSize ?? 's'}
      {...(iconSize && { size: iconSize })}
    />
  </IconButton>
);
