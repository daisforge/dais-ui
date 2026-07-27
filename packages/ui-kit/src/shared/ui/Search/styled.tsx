import { IconButton } from '@ui-kit/components/IconButton';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import { textSecondary } from '@ui-kit/tokens/color';
import styled from 'styled-components';

export const StyledSearchBlock = styled(TextFieldSearch)`
  && .input-wrapper {
    padding-block: 12px;
    padding-inline: 10px;
    border-radius: 8px;
  }
`;

export const StyledClearBtn = styled(IconButton)`
  background-color: transparent;
  height: 100%;
  width: 24px !important;
  color: ${() => textSecondary};
  &:hover {
    background-color: transparent;
    color: ${() => textSecondary};
  }
`;
