import { mCls } from '@ui-kit/utils';
import { forwardRef } from 'react';

import { tourWidgetClassNames as cls } from '../TourWidget.classNames';
import { useTourWidgetContext } from '../TourWidget.context';
import { StyledBullet } from '../TourWidget.styled';
import type { TourWidgetBulletProps } from '../types';

export const TourWidgetBullet = forwardRef<
  HTMLSpanElement,
  TourWidgetBulletProps
>(({ index, active, className, 'aria-label': ariaLabel, ...rest }, ref) => {
  const { activeStepIndex } = useTourWidgetContext();
  const isActive =
    active ?? (typeof index === 'number' && activeStepIndex === index);

  return (
    <StyledBullet
      ref={ref}
      className={mCls(isActive && cls.bulletActive, className)}
      aria-current={isActive ? 'step' : undefined}
      aria-label={
        ariaLabel ??
        (typeof index === 'number' ? `Шаг ${index + 1}` : undefined)
      }
      {...rest}
    />
  );
});

TourWidgetBullet.displayName = 'TourWidget.Bullet';
