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
  anchor-name: --table-context-menu;
  anchor-scope: --table-context-menu;
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

// Меню следует за ячейкой при прокрутке и может выйти за край таблицы.
export const MenuPortal = styled.div`
  position: fixed;
  position-anchor: --table-context-menu;
  top: anchor(top, 0px);
  left: anchor(left, 0px);
`;
