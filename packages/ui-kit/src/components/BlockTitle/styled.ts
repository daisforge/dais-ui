import { Typography } from '@ui-kit/components/Typography';
import {
  spacing2x,
  spacing8x,
  spacing12x,
  textSecondary
} from '@ui-kit/tokens';
import styled from 'styled-components';

export const BlockTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: ${() => spacing12x};
`;

export const BlockTitleBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${() => spacing2x};
  margin-bottom: ${() => spacing2x};
`;

export const BlockTitleCustomBlock = styled.div`
  width: 100%;
  margin-bottom: ${() => spacing2x};
`;

export const BlockTitleDescription = styled(Typography)<{
  $hasLeftSlot?: boolean;
}>`
  color: ${() => textSecondary};
  padding-left: ${({ $hasLeftSlot }) => ($hasLeftSlot ? '28px' : '0')};
`;

export const BlockTitleLeftBlock = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: end;
`;

export const BlockTitleRightBlock = styled.div`
  display: flex;
  min-height: 100%;
  align-items: end;
`;

export const BlockTitleContentLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${() => spacing8x};
  flex: 1;
  min-width: 0;
`;

export const BlockTitleBackButtonContainer = styled.div`
  margin-top: 3px;
`;
