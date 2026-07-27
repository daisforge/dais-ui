import {
  borderRadiusXs,
  outlineSolidPrimary,
  surfaceSolidCard
} from '@ui-kit/tokens';
import { fadeIn } from '@ui-kit/utils/styles/animations';
import styled, { css, keyframes } from 'styled-components';

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.985);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const getBorderRadiusValue = (rounded: boolean) =>
  rounded ? borderRadiusXs : '0px';

export const OverlayContainer = styled.div<{
  $topOffset: number;
  $displayMode: 'body-overlay' | 'full-content';
  $borderLeftTopRadiusRounded: boolean;
  $borderRightTopRadiusRounded: boolean;
  $borderLeftBottomRadiusRounded: boolean;
  $borderRightBottomRadiusRounded: boolean;
}>`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  padding: 24px 16px;
  overflow: auto;
  background: ${() => surfaceSolidCard};
  pointer-events: auto;

  ${({ $displayMode, $topOffset }) =>
    $displayMode === 'body-overlay'
      ? css`
          top: ${$topOffset + 2}px;
          right: 1px;
          bottom: 1px;
          left: 1px;
          border: none;
        `
      : css`
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border: 1px solid ${() => outlineSolidPrimary};
        `}

  ${({
    $displayMode,
    $borderLeftTopRadiusRounded,
    $borderRightTopRadiusRounded,
    $borderLeftBottomRadiusRounded,
    $borderRightBottomRadiusRounded
  }) =>
    css`
      border-radius: ${getBorderRadiusValue(
          $displayMode === 'full-content' && $borderLeftTopRadiusRounded
        )}
        ${getBorderRadiusValue(
          $displayMode === 'full-content' && $borderRightTopRadiusRounded
        )}
        ${getBorderRadiusValue($borderRightBottomRadiusRounded)}
        ${getBorderRadiusValue($borderLeftBottomRadiusRounded)};
    `}
`;

export const OverlayContent = styled.div`
  width: min(100%, 720px);
  max-width: 100%;
  margin: auto;
  opacity: 0;
  animation: ${fadeIn} 0.18s ease-out forwards,
    ${riseIn} 0.24s ease-out forwards;
  animation-delay: 0.06s;
  will-change: opacity, transform;
`;
