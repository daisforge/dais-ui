import { NumberFormat } from '@ui-kit/components/NumberFormat';
import styled, { css } from 'styled-components';

export const StyledNumberFormat = styled(NumberFormat)<{
  $align?: 'left' | 'center' | 'right';
}>`
  ${({ $align }) =>
    $align &&
    css`
      & input {
        text-align: ${$align};
      }
    `}
`;
