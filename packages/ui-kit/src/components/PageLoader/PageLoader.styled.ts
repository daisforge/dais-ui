import {
  backgroundPrimary,
  bodyM,
  h3Bold,
  spacing2x,
  spacing4x,
  spacing8x,
  textPrimary,
  textSecondary,
} from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

export const Root = styled.div`
  position: relative;
  isolation: isolate;
  display: grid;
  flex: 1;
  min-width: 0;
  min-height: 0;
`;

export const Content = styled.div`
  position: relative;
  z-index: 0;
  grid-area: 1 / 1;
  min-width: 0;
  min-height: 0;
`;

export const Overlay = styled.div`
  position: relative;
  z-index: 1;
  grid-area: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: ${spacing8x};
  background: ${backgroundPrimary};
  border-radius: inherit;
  text-align: center;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex: none;
  margin-bottom: ${spacing4x};
`;

export const Title = styled.h3`
  ${() => css(h3Bold)}
  max-width: 100%;
  margin: 0;
  color: ${textPrimary};
  overflow-wrap: anywhere;
`;

export const Subtitle = styled.p`
  ${() => css(bodyM)}
  max-width: 100%;
  margin: ${spacing2x} 0 0;
  color: ${textSecondary};
  overflow-wrap: anywhere;
`;
