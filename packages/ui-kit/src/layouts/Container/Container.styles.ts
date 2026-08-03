import { Box } from '@ui-kit/components/Box';
import { borderRadiusM } from '@ui-kit/tokens/border';
import { media } from '@ui-kit/utils/breakpoint';
import styled, { css } from 'styled-components';

import { CONTAINER_CLASSES, CONTAINER_DEFAULTS } from './Container.constants';
import {
  IStyledContainerWrapperProps,
  IStyledSplitContainerWrapperProps,
} from './Container.types';
import { getGridTemplate } from './lib/utils';

/**
 * Стили для основного контейнера (не split-режим)
 */
export const StyledContainerWrapper = styled(Box)<IStyledContainerWrapperProps>`
  overflow: auto;
  ${({ $stretch }) =>
    $stretch &&
    css`
      height: 100%;
      width: 100%;
    `}
  ${({ $roundedInner }) => $roundedInner && `border-radius: ${borderRadiusM};`}
  ${({ $css }) => $css}
`;

/**
 * Стили для split-контейнера
 */
export const StyledSplitContainerWrapper = styled(
  Box,
)<IStyledSplitContainerWrapperProps>`
  --container-min-col-width: ${({ $minColWidth }) =>
    $minColWidth ?? CONTAINER_DEFAULTS.MIN_COL_WIDTH};
  --container-gap: ${({ $gap }) => $gap || CONTAINER_DEFAULTS.GAP};
  --container-fixed-width: ${({ $fixedWidth }) =>
    $fixedWidth ?? CONTAINER_DEFAULTS.FIXED_WIDTH};
  --container-min-fixed-width: ${CONTAINER_DEFAULTS.MIN_FIXED_WIDTH};

  display: grid;
  gap: var(--container-gap);
  ${({ $view }) => getGridTemplate($view)};
  ${({ $view }) =>
    $view === 'fixed-fluid' &&
    css`
      & .${CONTAINER_CLASSES.right} {
        position: absolute;
        max-width: 840px;
        left: 50%;
        transform: translateX(-50%);

        ${media.up('xxl')`
          max-width: 840px;
        `}

        ${media.only('xl')`
          position: static;
          left: 0;
          transform: translateX(0);
          max-width: unset;
        `}

        ${media.down('xl')`
          position: static;
          left: 0;
          transform: translateX(0);
          max-width: unset;
        `}
      }
    `}
  ${({ $stretch }) =>
    $stretch &&
    css`
      height: 100%;
      width: 100%;
    `}

 

  ${({ $css }) => $css}
`;

/**
 * Стили для внутренних блоков split-контейнера
 */
export const StyledSplitContainerInnerWrapper = styled.div<{
  $rounded: boolean;
}>`
  height: 100%;
  width: 100%;
  overflow: auto;
  ${({ $rounded }) => $rounded && `border-radius: ${borderRadiusM};`}
`;
