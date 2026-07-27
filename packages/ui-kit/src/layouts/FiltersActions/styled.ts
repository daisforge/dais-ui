import { Box } from '@ui-kit/components/Box';
import { borderRadiusL } from '@ui-kit/tokens';
import styled from 'styled-components';

export const StyledContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  & > div:first-child {
    width: 100%;
  }
`;
export const StyledCard = styled.div`
  padding-block: 8px;
  border-radius: ${() => borderRadiusL};
`;

export const StyledButtonsBlock = styled(StyledCard)`
  display: flex;
  column-gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 24px;
`;
export const StyledMainBlock = styled(Box)`
  display: flex;
  gap: 8px;
  align-items: center;
  max-height: 40px;
`;
