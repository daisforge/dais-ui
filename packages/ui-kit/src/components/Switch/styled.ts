import { Switch } from '@salutejs/sdds-finai';
import { surfaceTransparentSecondary } from '@ui-kit/tokens';
import styled from 'styled-components';

export const StyledSwitch = styled(Switch)<{ hasBackground?: boolean }>`
  background: ${({ hasBackground }) =>
    hasBackground ? surfaceTransparentSecondary : 'none'};
  padding: ${({ hasBackground }) => (hasBackground ? '10px 14px' : 'auto')};
  border-radius: ${({ hasBackground }) => (hasBackground ? '10px' : 'auto')};
  max-height: 48px;
`;
