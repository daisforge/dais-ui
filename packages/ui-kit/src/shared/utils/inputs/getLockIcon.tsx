import { IconLockOutline } from '@ui-kit/icons';

export const getLockIcon = (size?: 'm' | 's' | 'xs' | 'l' | 'xl') => {
  const iconSize = size === 'xs' ? 'xs' : 's';

  return <IconLockOutline size={iconSize} />;
};
