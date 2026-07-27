import { Box } from '@ui-kit/components/Box';
import { bodyM, textPrimary, textSecondary } from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

import { classNames } from './classNames';

export const StyledContainer = styled(Box)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .${classNames.contentContainer} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* max-width: 562px; */

    & .${classNames.title} {
      /* margin-bottom: 16px; */
      color: ${() => textPrimary};
    }
    & .${classNames.description} {
      color: ${() => textSecondary};
    }

    & .${classNames['navigate-btn']} {
      /* margin-top: 32px; */
    }
  }
`;

export const StyledErrorId = styled.p<{ $hasButtons: boolean }>`
  ${() => css(bodyM)};
  color: ${() => textSecondary};
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top: ${({ $hasButtons }) => ($hasButtons ? '60px' : '0px')};
`;
