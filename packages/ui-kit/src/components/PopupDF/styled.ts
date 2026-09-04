// eslint-disable-next-line no-restricted-imports
import { Box } from '@ui-kit/components/Box';
import { Popup, popupClasses } from '@ui-kit/components/Popup';
import { br, s } from '@ui-kit/constants';
import {
  shadowDownHardS,
  surfaceSolidCard,
  textPrimary,
  textSecondary,
} from '@ui-kit/tokens';
import styled from 'styled-components';

import type { PopupDFSize } from './types';

const sizeMap: Record<
  PopupDFSize,
  {
    titleDescriptionGap: string;
    sectionInnerGap: string;
    sectionGap: string;
    contentPadding: string;
    subHeaderBottomGap: string;
    rightBlockGap: string;
    rightBlockToCloseGap: string;
    rightBlockMaxHeight: string;
  }
> = {
  l: {
    titleDescriptionGap: s.x1,
    sectionInnerGap: s.x4,
    sectionGap: '16px',
    contentPadding: '16px',
    subHeaderBottomGap: '0',
    rightBlockGap: s.x8,
    rightBlockToCloseGap: s.x6,
    rightBlockMaxHeight: '32px',
  },
  m: {
    titleDescriptionGap: s.x1,
    sectionInnerGap: s.x4,
    sectionGap: '16px',
    contentPadding: '16px',
    subHeaderBottomGap: '0',
    rightBlockGap: s.x8,
    rightBlockToCloseGap: s.x6,
    rightBlockMaxHeight: '32px',
  },
  s: {
    titleDescriptionGap: s.x1,
    sectionInnerGap: s.x4,
    sectionGap: '12px',
    contentPadding: '12px',
    subHeaderBottomGap: '0',
    rightBlockGap: s.x8,
    rightBlockToCloseGap: s.x4,
    rightBlockMaxHeight: '24px',
  },
};

const C = {
  bg: () => surfaceSolidCard,
  radius: () => br.m,
  shadow: () => shadowDownHardS,
  titleColor: () => textPrimary,
  descriptionColor: () => textSecondary,
};

export const StyledPopup = styled(Popup)`
  && .${popupClasses.root} {
    padding: 0;
  }
`;

export const StyledContainer = styled.div<{ $size: PopupDFSize }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $size }) => sizeMap[$size].sectionGap};
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${({ $size }) => sizeMap[$size].contentPadding};
  background: ${C.bg};
  border-radius: ${C.radius};
  box-shadow: ${C.shadow};
  overflow: hidden;
`;

export const StyledHeader = styled(Box)<{ $size: PopupDFSize }>`
  flex-shrink: 0;
  min-width: 0;
`;

export const StyledHeaderTop = styled.div<{
  $size: PopupDFSize;
  $alignTitleToClose: boolean;
}>`
  display: flex;
  align-items: ${({ $alignTitleToClose }) =>
    $alignTitleToClose ? 'center' : 'flex-start'};
  min-width: 0;
`;

export const StyledHeaderContent = styled.div<{
  $alignTitleToClose: boolean;
}>`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $alignTitleToClose }) =>
    $alignTitleToClose ? 'center' : 'flex-start'};
`;

export const StyledHeaderTitle = styled.div`
  color: ${C.titleColor};
  min-width: 0;
`;

export const StyledHeaderDescription = styled.div<{ $size: PopupDFSize }>`
  margin-top: ${({ $size }) => sizeMap[$size].titleDescriptionGap};
  color: ${C.descriptionColor};
  min-width: 0;
`;

export const StyledHeaderActions = styled.div<{
  $size: PopupDFSize;
  $hasRightBlock?: boolean;
}>`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  // Есть rightBlock — зазор до крестика 12/8 по размеру; нет rightBlock —
  // базовый отступ как раньше (s.x4), для ранней обрезки длинного title.
  margin-left: ${({ $size, $hasRightBlock }) =>
    $hasRightBlock
      ? sizeMap[$size].rightBlockToCloseGap
      : sizeMap[$size].sectionInnerGap};
  column-gap: ${({ $size }) => sizeMap[$size].sectionInnerGap};
`;

export const StyledHeaderRightBlock = styled.div<{ $size: PopupDFSize }>`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  margin-left: ${({ $size }) => sizeMap[$size].rightBlockGap};
  max-height: ${({ $size }) => sizeMap[$size].rightBlockMaxHeight};
  overflow: hidden;
`;

export const StyledHeaderSubHeader = styled.div<{ $size: PopupDFSize }>`
  margin-top: 8px;
  margin-bottom: ${({ $size }) => sizeMap[$size].subHeaderBottomGap};
  min-width: 0;
`;

export const StyledHeaderBackButton = styled.div`
  flex-shrink: 0;
  margin-right: 12px;
`;

export const StyledBody = styled(Box)`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  overflow: auto;
`;

export const StyledFooter = styled(Box)`
  flex-shrink: 0;
  min-width: 0;
`;
