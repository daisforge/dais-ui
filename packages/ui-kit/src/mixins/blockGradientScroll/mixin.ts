import { media } from '@ui-kit/utils/breakpoint';
import { css } from 'styled-components';

import {
  BLOCK_GRADIENT_SCROLL_ANIMATION,
  BLOCK_GRADIENT_SCROLL_HEIGHT,
  BLOCK_GRADIENT_SCROLL_HEIGHT_MOBILE,
  BLOCK_GRADIENT_SCROLL_TIMELINE,
  BLOCK_GRADIENT_VAR_BOTTOM,
  BLOCK_GRADIENT_VAR_LEFT,
  BLOCK_GRADIENT_VAR_RIGHT,
} from './constants';
import {
  BlockGradientScrollOptions,
  BlockGradientScrollPadding,
  BlockGradientScrollVariant,
} from './types';
import { getGradientColor, getResolvedPadding } from './utils';

export const blockGradientScrollContainerStyles = (
  padding: BlockGradientScrollPadding | undefined,
) => {
  /* Применяем реальные padding'и к контейнеру */
  const { left, right, bottom, top } = getResolvedPadding(padding);

  return css`
    scroll-timeline: ${BLOCK_GRADIENT_SCROLL_TIMELINE} block;
    padding-top: ${top}px;
    padding-right: ${right}px;
    padding-bottom: ${bottom}px;
    padding-left: ${left}px;
  `;
};

export const blockGradientScrollAfterStyles = (
  padding: BlockGradientScrollPadding | undefined,
  variant: BlockGradientScrollVariant,
) => {
  const { left, right, bottom } = getResolvedPadding(padding);
  const gradientColor = getGradientColor(variant);

  return css`
    content: '';
    display: block;
    position: sticky;
    bottom: 0;
    height: ${BLOCK_GRADIENT_SCROLL_HEIGHT}px;
    pointer-events: none;
    background: ${() => gradientColor};
    margin-top: -${BLOCK_GRADIENT_SCROLL_HEIGHT}px;
    opacity: 0;
    animation: ${BLOCK_GRADIENT_SCROLL_ANIMATION} linear both;
    animation-timeline: ${BLOCK_GRADIENT_SCROLL_TIMELINE};

    margin-left: calc(0px - var(${BLOCK_GRADIENT_VAR_LEFT}, ${left}px));
    margin-right: calc(0px - var(${BLOCK_GRADIENT_VAR_RIGHT}, ${right}px));
    transform: translateY(var(${BLOCK_GRADIENT_VAR_BOTTOM}, ${bottom}px));
    width: calc(
      100% + var(${BLOCK_GRADIENT_VAR_LEFT}, ${left}px) +
        var(${BLOCK_GRADIENT_VAR_RIGHT}, ${right}px)
    );
    will-change: transform;

    ${media.exact(
      0,
      1279,
    )(`
      height: ${BLOCK_GRADIENT_SCROLL_HEIGHT_MOBILE}px;
      margin-top: -${BLOCK_GRADIENT_SCROLL_HEIGHT_MOBILE}px;
    `)}
  `;
};

export const blockGradientScrollKeyframes = css`
  @keyframes ${BLOCK_GRADIENT_SCROLL_ANIMATION} {
    0%,
    85% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const BlockGradientScrollMixin = (
  options: BlockGradientScrollOptions,
) => {
  const { variant = 'white', padding } = options;

  return css`
    ${blockGradientScrollContainerStyles(padding)}

    &::after {
      ${blockGradientScrollAfterStyles(padding, variant)}
    }

    ${blockGradientScrollKeyframes}
  `;
};
