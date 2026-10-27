import styled from 'styled-components';

/**
 * Заполняет якорь целиком, чтобы список раскрывался от границ canvas-элемента.
 * Клики проходят сквозь неё на canvas.
 */
export const DropdownRoot = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

/** Невидимый элемент размером с якорь, от него раскрывается Dropdown. */
export const DropdownAnchor = styled.div`
  width: 100%;
  height: 100%;
`;

/**
 * Портал для списка. Якорь не ловит клики, поэтому портал включает их
 * обратно, иначе пункты не нажимались бы.
 */
export const DropdownPortal = styled.div`
  pointer-events: auto;
`;
