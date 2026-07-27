import { outlineSolidPrimary, surfaceSolidCard } from '@ui-kit/tokens';
import styled from 'styled-components';

const C = {
  surfaceSolidCard: () => surfaceSolidCard,
  outlineSolidPrimary: () => outlineSolidPrimary
};

export const StaticContainer = styled.div<{
  $position?: 'absolute' | 'static' | 'relative';
  $isVisible?: boolean;
  $animate?: boolean;
}>`
  position: ${({ $position = 'absolute' }) => $position};
  ${({ $position }) =>
    $position === 'absolute'
      ? `
    left: 16px;
    right: 16px;
    bottom: 16px;
  `
      : ''}
  padding: 12px;
  border-radius: 14px;
  background: ${C.surfaceSolidCard};
  border: 2px solid ${C.outlineSolidPrimary};
  display: flex;
  align-items: center;
  gap: 4px;
  overflow-x: auto;
  overflow-y: hidden;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  ${({ $animate = true }) =>
    $animate ? 'transition: opacity 0.2s ease-in-out;' : ''}
`;
