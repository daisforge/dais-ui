import { Box } from '@ui-kit/components/Box';
import { IconButton } from '@ui-kit/components/IconButton';
import { TextField } from '@ui-kit/components/TextField';
import { surfaceTransparentPrimary, textSecondary } from '@ui-kit/tokens/color';
import styled from 'styled-components';

export const StyledTitleBox = styled(Box)({
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  paddingInline: '8px',
  marginBottom: '12px',
});
export const StyledChangeAllButtonsBox = styled(Box)({
  height: '112px',
  marginInline: '-16px',
  paddingInline: '16px',
  marginBottom: '14px',

  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '8px',
});

export const StyledSearchBlock = styled(TextField)`
  && .input-wrapper {
    height: 100%;
    max-height: 40px;
    padding-block: 12px;
    padding-inline: 10px;
    border-radius: 8px;
    background: ${() => surfaceTransparentPrimary};
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
