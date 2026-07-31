import { NumberFormat } from '@ui-kit/components/NumberFormat';
import { bodyMBold, bodySBold } from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

type AmountSize = 'xs' | 's';

const typographyMap: Record<AmountSize, Record<string, string>> = {
  xs: bodySBold,
  s: bodyMBold,
};

const getTypography = (size: AmountSize) => css(typographyMap[size]);

export const StyledNumberFormat = styled(NumberFormat)<{
  $amountSize: AmountSize;
}>`
  && .input-wrapper div:has(> input) {
    ${({ $amountSize }) => getTypography($amountSize)}
  }
`;
