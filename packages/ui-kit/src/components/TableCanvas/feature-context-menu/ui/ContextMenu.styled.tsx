import styled, { css } from 'styled-components';

interface MenuContainerProps {
  $isOpen: boolean;
  position: { x: number; y: number };
  $isFixed?: boolean;
  $zIndex?: number;
}

export const HiddenTriggerButton = styled.button<{ $height: number }>`
  display: block;
  width: 0;
  height: ${({ $height }) => $height}px;
  padding: 0;
  margin: 0;
  border: 0;
  visibility: hidden;
`;

export const MenuContainer = styled.div<MenuContainerProps>`
  position: ${({ $isFixed }) => ($isFixed ? 'fixed' : 'absolute')};
  display: flex;
  left: ${({ position }) => position.x}px;
  top: ${({ position }) => position.y}px;

  ${({ $zIndex }) =>
    $zIndex !== undefined &&
    css`
      z-index: ${$zIndex ?? 9001};
    `}
`;

// Портал остаётся в DOM таблицы, но список может выйти за край её скроллера.
export const MenuPortal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;
