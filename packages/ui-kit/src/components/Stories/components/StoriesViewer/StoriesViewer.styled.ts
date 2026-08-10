import styled, { css, keyframes } from 'styled-components';

import { STORIES_SIZES } from '../../Stories.constants';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// keyframes нельзя интерполировать в обычную строку — только через css``.
const controlAnimation = ($closing: boolean) => css`
  animation: ${$closing ? fadeOut : fadeIn} ${$closing ? '0.2s' : '0.24s'} ease
    forwards;
`;

export const StyledRoot = styled.div<{ $zIndex: number }>`
  position: fixed;
  inset: 0;
  z-index: ${({ $zIndex }) => $zIndex};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledOverlay = styled.div<{ $color: string; $closing: boolean }>`
  position: absolute;
  inset: 0;
  background: ${({ $color }) => $color};
  opacity: ${({ $closing }) => ($closing ? 0 : 1)};
  transition: opacity 0.24s ease;
`;

export const StyledStage = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /* Ширина подстраивается под баннер (он ведётся высотой), чтобы стрелки
     оставались вплотную к нему при уменьшении вьюпорта. По бокам — просветы
     под стрелки: (stageWidth - bannerMaxWidth) / 2. */
  width: fit-content;
  max-width: min(${STORIES_SIZES.stageWidth}px, 100vw);
  height: min(${STORIES_SIZES.bannerMaxHeight}px, calc(100vh - 32px));
  padding: 0 ${(STORIES_SIZES.stageWidth - STORIES_SIZES.bannerMaxWidth) / 2}px;
  outline: none;
`;

export const StyledArrow = styled.div<{
  $side: 'prev' | 'next';
  $closing: boolean;
}>`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === 'prev' ? 'left: 0;' : 'right: 0;')}
  z-index: 3;
  transform: translateY(-50%);
  ${({ $closing }) => controlAnimation($closing)}
`;

export const StyledClose = styled.div<{ $closing: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  ${({ $closing }) => controlAnimation($closing)}
`;
