import { Autocomplete } from '@ui-kit/components/Autocomplete';
import { Typography } from '@ui-kit/components/Typography';
import { surfaceTransparentSecondary, textSecondary } from '@ui-kit/tokens';
import styled from 'styled-components';

export const StyledAutocomplete: typeof Autocomplete = styled(Autocomplete)`
  && {
    .input-wrapper {
      background: ${() => surfaceTransparentSecondary};
      box-shadow: none;
    }
  }
`;

export const StyledBeforeList = styled(Typography)`
  padding: 10px 12px;
  color: ${() => textSecondary};
`;
