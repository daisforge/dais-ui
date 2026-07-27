import { Button } from '@ui-kit/components/Button';
import { textAccent, textAccentHover } from '@ui-kit/tokens';
import styled from 'styled-components';

export const ButtonStyled = styled(Button)`
  padding: 0;
  height: fit-content;
  color: ${() => textAccent};

  &:hover {
    background: transparent;
    color: ${() => textAccentHover};
  }
`;
