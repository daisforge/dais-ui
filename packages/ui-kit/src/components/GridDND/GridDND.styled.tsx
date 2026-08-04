import {
  outlineAccent,
  outlineAccentMinor,
  outlineTransparentAccent,
  shadowDownHardS,
  shadowDownSoftS,
  surfaceTransparentAccent,
} from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

import { analyticalWidgetClassNames } from '../AnalyticalWidget/AnalyticalWidget.constants';
import { GridDNDClassNames as cls } from './GridDND.constants';

export const gridItemPlaceholderMixin = css`
  background-color: ${() => surfaceTransparentAccent};
  border-radius: 16px;
  outline: 1px solid ${() => outlineAccent};
`;
export const GridDNDContainer = styled.div`
  width: 100%;
  min-height: 400px;
  max-width: 1890px;
  &:has(.react-grid-placeholder) {
    & .react-grid-item.react-grid-placeholder {
      ${gridItemPlaceholderMixin}
      opacity: 1;
    }
  }
`;

// FIXME (ПАША): белый цвет
export const GridItem = styled.div.attrs(() => ({
  className: cls.gridItem,
}))<{ $isDraggable: boolean }>`
  // Стили в момент dragging
  &.react-draggable-dragging {
    outline: 2px solid ${() => outlineAccentMinor};
    box-shadow: ${() => shadowDownHardS};
    cursor: grabbing;
  }
  // Для блоков c topSlot из AnalyticalWidget
  & .${analyticalWidgetClassNames.topSlot} {
    cursor: default;
  }
  height: 100%;
  width: 100%;
  cursor: ${(props) => (props.$isDraggable ? 'grab' : 'default')};
  background-color: white;
  border-radius: 16px;
  outline: ${(props) =>
    props.$isDraggable ? `2px solid ${outlineTransparentAccent}` : 'none'};
  box-shadow: ${() => shadowDownSoftS};
  overflow: hidden;
`;

export const GridItemContent = styled.div`
  height: 100%;
  width: 100%;
`;
