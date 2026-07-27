import {
  addNotification as addNotificationNative,
  NotificationProps
} from '@salutejs/sdds-finai';

import { getClassName } from './utils/getClassName';

export function addNotification(
  { id: externalId, ...rest }: NotificationProps,
  timeout?: number | null
): string {
  const className = getClassName(rest);

  return addNotificationNative(
    {
      id: externalId,
      ...rest,
      className
    },
    timeout
  );
}
