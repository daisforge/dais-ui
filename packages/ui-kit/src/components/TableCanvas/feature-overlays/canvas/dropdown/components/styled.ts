import styled from 'styled-components';

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

/**
 * Заполняет якорь целиком, чтобы список раскрывался от границ canvas-элемента.
 * Клики проходят сквозь неё на canvas.
 *
 * Dropdown оборачивает DropdownAnchor в две обёртки без размеров, и список
 * считал бы положение от точки. Растягиваем их на весь якорь.
 */
export const DropdownRoot = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;

  & > ${DropdownPortal} + div,
  & > ${DropdownPortal} + div > div {
    width: 100%;
    height: 100%;
  }
`;
