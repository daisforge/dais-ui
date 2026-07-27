import type { CSSObject } from 'styled-components';
import { css, keyframes } from 'styled-components';

import type { TourPulseMixinOptions } from './types';

type TourPulseAnimationOptions = {
  duration: NonNullable<TourPulseMixinOptions['duration']>;
  timingFunction: NonNullable<TourPulseMixinOptions['timingFunction']>;
  iterationCount: NonNullable<TourPulseMixinOptions['iterationCount']>;
};

const tourPulseKeyframes = keyframes`
  0%,
  100% {
    box-shadow:
      0 0 0 2px var(--tour-pulse-border-color),
      0 0 0 6px var(--tour-pulse-shadow-color);
  }

  50% {
    box-shadow:
      0 0 0 3px var(--tour-pulse-border-color-fade),
      0 0 0 12px var(--tour-pulse-shadow-color-fade);
  }
`;

const getTourPulseAnimation = ({
  duration,
  timingFunction,
  iterationCount
}: TourPulseAnimationOptions) => css`
  animation-name: ${tourPulseKeyframes};
  animation-duration: ${duration};
  animation-timing-function: ${timingFunction};
  animation-iteration-count: ${iterationCount};
`;

export const tourPulseMixin = ({
  backgroundColor = 'transparent',
  borderColor = 'var(--on-light-outline-accent-minor, rgb(82, 186, 255))',
  borderColorFade = 'rgba(82, 186, 255, 0.42)',
  shadowColor = 'rgba(82, 186, 255, 0.24)',
  shadowColorFade = 'rgba(82, 186, 255, 0)',
  inset = '-4px',
  borderRadius = '16px',
  duration = '1.4s',
  timingFunction = 'ease-in-out',
  iterationCount = 'infinite',
  pointerEventsNone = true
}: TourPulseMixinOptions = {}) =>
  css`
    ${css({
      '--tour-pulse-border-color': borderColor,
      '--tour-pulse-border-color-fade': borderColorFade,
      '--tour-pulse-shadow-color': shadowColor,
      '--tour-pulse-shadow-color-fade': shadowColorFade,
      inset,
      borderRadius,
      background: backgroundColor,
      ...(pointerEventsNone ? { pointerEvents: 'none' } : {})
    } as CSSObject)}
    ${getTourPulseAnimation({ duration, timingFunction, iterationCount })}
  `;
