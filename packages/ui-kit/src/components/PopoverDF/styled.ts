// eslint-disable-next-line no-restricted-imports
import { Box } from '@ui-kit/components/Box';
import { PopoverBeta } from '@ui-kit/components/PopoverBeta';
import { br, s } from '@ui-kit/constants';
import {
  shadowDownHardS,
  surfaceSolidCard,
  textPrimary,
  textSecondary,
} from '@ui-kit/tokens';
import styled from 'styled-components';

import type { PopoverDFSize } from './types';

const sizeMap: Record<
  PopoverDFSize,
  {
    titleDescriptionGap: string;
    sectionInnerGap: string;
    sectionGap: string;
    contentPaddingY: string;
    contentPaddingX: string;
  }
> = {
  m: {
    titleDescriptionGap: s.x2,
    sectionInnerGap: s.x4,
    sectionGap: s.x6,
    contentPaddingY: s.x6,
    contentPaddingX: '14px',
  },
  s: {
    titleDescriptionGap: s.x1,
    sectionInnerGap: s.x4,
    sectionGap: s.x4,
    contentPaddingY: s.x4,
    contentPaddingX: '10px',
  },
};

const C = {
  bg: () => surfaceSolidCard,
  radius: () => br.l,
  titleColor: () => textPrimary,
  descriptionColor: () => textSecondary,
  shadow: () => shadowDownHardS,
};

export const StyledPopover = styled(PopoverBeta)`
  &.popover-root {
    padding: 0;
    border-radius: 10px;
    box-shadow: ${C.shadow};
  }
`;

export const StyledContainer = styled.div<{ $size: PopoverDFSize }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $size }) => sizeMap[$size].sectionGap};
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${({ $size }) =>
    `${sizeMap[$size].contentPaddingY} ${sizeMap[$size].contentPaddingX}`};
  background: ${C.bg};
  border-radius: ${C.radius};
  overflow: hidden;
`;

export const StyledHeader = styled(Box)<{ $size: PopoverDFSize }>`
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'content actions'
    'bottom bottom';
  align-items: start;
  column-gap: ${({ $size }) => sizeMap[$size].sectionInnerGap};
`;

export const StyledHeaderContent = styled.div`
  grid-area: content;
  min-width: 0;
`;

export const StyledHeaderTitle = styled.div`
  color: ${C.titleColor};
  min-width: 0;
`;

export const StyledHeaderDescription = styled.div<{ $size: PopoverDFSize }>`
  margin-top: ${({ $size }) => sizeMap[$size].titleDescriptionGap};
  color: ${C.descriptionColor};
  min-width: 0;
`;

export const StyledHeaderActions = styled.div<{ $size: PopoverDFSize }>`
  grid-area: actions;
  display: inline-flex;
  align-items: center;
  column-gap: ${({ $size }) => sizeMap[$size].sectionInnerGap};
`;

export const StyledHeaderBottom = styled.div<{ $size: PopoverDFSize }>`
  grid-area: bottom;
  margin-top: ${({ $size }) => sizeMap[$size].sectionInnerGap};
`;

export const StyledBody: typeof Box = styled(Box)`
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  overflow: auto;
`;

export const StyledFooter: typeof Box = styled(Box)`
  flex-shrink: 0;
  min-width: 0;
`;
