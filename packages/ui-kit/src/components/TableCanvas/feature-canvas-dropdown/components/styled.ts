import styled from 'styled-components';

/**
 * Обёртка дропдауна внутри якоря таблицы: заполняет якорь целиком, чтобы
 * список раскрывался от границ canvas-элемента. Клики проходят на canvas.
 */
export const DropdownRoot = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

/** Target атомарного Dropdown: невидимый элемент размером с якорь. */
export const DropdownAnchor = styled.div`
  width: 100%;
  height: 100%;
`;

/**
 * Портал для списка. Лежит внутри якоря с `pointer-events: none`, поэтому
 * возвращает клики себе: иначе пункты не нажимались бы.
 */
export const DropdownPortal = styled.div`
  pointer-events: auto;
`;
