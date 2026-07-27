import { IconButton } from '@ui-kit/components/IconButton';
import { textAccentHover } from '@ui-kit/tokens';
import styled from 'styled-components';

import type { TIconButtonStyledProps } from './types';

export const IconButtonStyled = styled(IconButton)<TIconButtonStyledProps>`
  background-color: transparent !important;
  width: fit-content !important;
  visibility: ${({ $visibility }) => $visibility};

  &:hover {
    color: ${() => textAccentHover} !important;
  }
`;
