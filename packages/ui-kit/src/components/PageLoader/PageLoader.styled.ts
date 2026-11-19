import { spacing2x, spacing4x } from '@ui-kit/tokens';
import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing4x};
  text-align: center;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: ${spacing2x};
`;
