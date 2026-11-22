import styled from 'styled-components';

/**
 * Невидимый элемент, к которому PopoverBeta привязывает Popover. Занимает
 * место canvas-элемента целиком, клики пропускает на canvas.
 */
export const CanvasAnchor = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
