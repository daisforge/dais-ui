import styled from 'styled-components';

/**
 * Target для PopoverBeta у canvas-поповера: заполняет якорь целиком, чтобы
 * placement считался от границ canvas-элемента. Клики проходят на canvas.
 */
export const CanvasAnchor = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
