import { Badge } from '@ui-kit/components/Badge';
import type { ComponentProps } from 'react';

export type StyledBadgeProps = ComponentProps<typeof Badge> & {
  $badgeMarginTop?: number;
};
