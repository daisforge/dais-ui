import { visuallyHiddenCss } from '@ui-kit/utils';
import styled, { css } from 'styled-components';

interface MenuContainerProps {
  $isOpen: boolean;
  position: { x: number; y: number };
  $isFixed?: boolean;
  $zIndex?: number;
}

export const HiddenTriggerButton = styled.button`
  ${visuallyHiddenCss}
`;

export const MenuContainer = styled.div<MenuContainerProps>`
  position: ${({ $isFixed }) => ($isFixed ? 'fixed' : 'absolute')};
  display: inline-block;
  left: ${({ position }) => position.x}px;
  top: ${({ position }) => position.y}px;

  ${({ $zIndex }) =>
    $zIndex !== undefined &&
    css`
      z-index: ${$zIndex ?? 9001};
    `}
`;
