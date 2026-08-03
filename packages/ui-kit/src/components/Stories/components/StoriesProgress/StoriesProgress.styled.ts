import styled from 'styled-components';

import { STORIES_SIZES } from '../../Stories.constants';

export const StyledProgress = styled.div`
  display: flex;
  gap: ${STORIES_SIZES.progressGap}px;
  width: 100%;
`;

export const StyledItem = styled.div<{ $bg: string }>`
  position: relative;
  flex: 1 1 0;
  height: ${STORIES_SIZES.progressHeight}px;
  border-radius: ${STORIES_SIZES.progressRadius}px;
  overflow: hidden;
  background: ${({ $bg }) => $bg};
`;

/** Ползущая заливка активного сегмента: двигается через transform: scaleX() из useTimeline. */
export const StyledFill = styled.span<{ $color: string }>`
  position: absolute;
  inset: 0;
  border-radius: ${STORIES_SIZES.progressFillRadius}px;
  background: ${({ $color }) => $color};
  transform: scaleX(0);
  transform-origin: left center;
  will-change: transform;
`;
