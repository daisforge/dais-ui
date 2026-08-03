import type { CSSProperties } from 'react';
import { forwardRef } from 'react';

import { tourWidgetClassNames as cls } from '../TourWidget.classNames';
import { useTourWidgetContext } from '../TourWidget.context';
import { StyledBullets, StyledBulletsTrack } from '../TourWidget.styled';
import type { TourWidgetBulletsProps } from '../types';
import { TourWidgetBullet } from './TourWidgetBullet';

const MAX_VISIBLE_BULLETS = 7;
const BULLET_SIZE = 8;
const BULLET_GAP = 8;
const BULLET_STEP = BULLET_SIZE + BULLET_GAP;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const getBulletsCount = (count: number) =>
  Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0;

const getBulletsWidth = (count: number) =>
  count > 0 ? count * BULLET_SIZE + (count - 1) * BULLET_GAP : 0;

type BulletsStyle = CSSProperties & {
  '--tour-widget-bullets-offset'?: string;
  '--tour-widget-bullets-width'?: string;
};

export const TourWidgetBullets = forwardRef<
  HTMLDivElement,
  TourWidgetBulletsProps
>(({ count, style, 'aria-label': ariaLabel, ...rest }, ref) => {
  const { activeStepIndex = 0 } = useTourWidgetContext();
  const bulletsCount = getBulletsCount(count);
  const safeActiveStepIndex = Number.isFinite(activeStepIndex)
    ? Math.floor(activeStepIndex)
    : 0;
  const activeIndex =
    bulletsCount > 0 ? clamp(safeActiveStepIndex, 0, bulletsCount - 1) : 0;
  const visibleBulletsCount = Math.min(bulletsCount, MAX_VISIBLE_BULLETS);
  const maxWindowStart = Math.max(0, bulletsCount - visibleBulletsCount);
  const windowStart =
    bulletsCount > MAX_VISIBLE_BULLETS
      ? clamp(
          activeIndex - Math.floor(MAX_VISIBLE_BULLETS / 2),
          0,
          maxWindowStart,
        )
      : 0;
  const windowEnd = windowStart + visibleBulletsCount - 1;
  const hasHiddenBefore = windowStart > 0;
  const hasHiddenAfter = windowEnd < bulletsCount - 1;
  const bulletsStyle: BulletsStyle = {
    ...style,
    '--tour-widget-bullets-offset': `-${windowStart * BULLET_STEP}px`,
    '--tour-widget-bullets-width': `${getBulletsWidth(visibleBulletsCount)}px`,
  };

  return (
    <StyledBullets
      ref={ref}
      aria-label={
        ariaLabel ??
        (bulletsCount > 0
          ? `Шаг ${activeIndex + 1} из ${bulletsCount}`
          : undefined)
      }
      style={bulletsStyle}
      {...rest}
    >
      <StyledBulletsTrack>
        {Array.from({ length: bulletsCount }, (_, index) => {
          const isEdgeBullet =
            bulletsCount > MAX_VISIBLE_BULLETS &&
            ((index === windowStart && hasHiddenBefore) ||
              (index === windowEnd && hasHiddenAfter));

          return (
            <TourWidgetBullet
              key={index}
              index={index}
              active={index === activeIndex}
              className={isEdgeBullet ? cls.bulletEdge : undefined}
            />
          );
        })}
      </StyledBulletsTrack>
    </StyledBullets>
  );
});

TourWidgetBullets.displayName = 'TourWidget.Bullets';
