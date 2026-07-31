import styled, { keyframes } from 'styled-components';

import {
  STORIES_SIZES,
  STORIES_VIEW_TRANSITION_NAME
} from '../../Stories.constants';

const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.92) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const popOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.96) translateY(6px);
  }
`;

export const StyledBanner = styled.div<{ $closing: boolean }>`
  position: relative;
  width: min(${STORIES_SIZES.bannerMaxWidth}px, calc(100vw - 100px));
  height: 100%;
  max-height: ${STORIES_SIZES.bannerMaxHeight}px;
  border-radius: ${STORIES_SIZES.bannerRadius}px;
  overflow: hidden;
  view-transition-name: ${STORIES_VIEW_TRANSITION_NAME};
  animation: ${({ $closing }) => ($closing ? popOut : popIn)}
    ${({ $closing }) => ($closing ? '0.2s' : '0.24s')} ease forwards;
`;

export const StyledTapLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  touch-action: none;
`;

export const StyledTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: ${STORIES_SIZES.bannerPadding}px;
  pointer-events: none;
`;

export const StyledBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: ${STORIES_SIZES.bannerPadding}px;
  pointer-events: none;
`;

export const StyledActionSlot = styled.div`
  pointer-events: auto;
`;
