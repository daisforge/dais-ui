import { Notification as NotificationNative } from '@salutejs/sdds-finai';
import { ComponentRef, forwardRef } from 'react';

import { getClassName } from './utils/getClassName';

type NotificationRef = ComponentRef<typeof NotificationNative>;
type NotificationProps = React.ComponentPropsWithoutRef<
  typeof NotificationNative
>;

export const Notification = forwardRef<NotificationRef, NotificationProps>(
  (props, ref) => {
    const className = getClassName(props);

    // @ts-expect-error ref поддерживается, но типы не выводятся корректно
    return <NotificationNative {...props} ref={ref} className={className} />;
  },
);
