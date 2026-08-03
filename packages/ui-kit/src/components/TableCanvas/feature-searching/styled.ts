import { Autocomplete } from '@ui-kit/components/Autocomplete';
import { IconButton } from '@ui-kit/components/IconButton';
import { TextField } from '@ui-kit/components/TextField';
import { textSecondary } from '@ui-kit/tokens/color';
import styled, { css } from 'styled-components';

type StyleProps = {
  $isFullHeight: boolean;
};
const getInputStyles = ({ $isFullHeight }: StyleProps) => css`
  && {
    .input-wrapper {
      height: 100%;
      max-height: 32px;
      box-shadow: none;
      ${$isFullHeight &&
      css({
        maxHeight: 'unset',
        height: '100%',
      })}
    }

    ${$isFullHeight &&
    css({
      maxHeight: 'unset',
      height: '100%',
    })}
  }
`;

export const StyledSearchBlock = styled(TextField)<StyleProps>`
  ${getInputStyles}
`;

export const StyledAutocompleteBlock = styled(Autocomplete)<StyleProps>`
  ${getInputStyles}
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
