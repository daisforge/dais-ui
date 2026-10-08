import { outlineSolidPrimary, surfaceSolidCard } from '@ui-kit/tokens';
import styled from 'styled-components';

import { DURATION, TABLE_BORDER_RADIUS } from '../../styles/styles.constants';
import { MIN_CANVAS_HEIGHT_WITH_BOTTOM_SHEET } from '../constants';

export const BOTTOM_SHEET_AVAILABLE_HEIGHT = `max(0px, calc(100% - ${MIN_CANVAS_HEIGHT_WITH_BOTTOM_SHEET}px))`;

export const BottomSheetContainer = styled.div<{
  $roundLeft: boolean;
  $roundRight: boolean;
}>`
  box-sizing: border-box;
  flex: 0 0 auto;
  min-width: 0;
  max-height: ${BOTTOM_SHEET_AVAILABLE_HEIGHT};
  border: 1px solid ${outlineSolidPrimary};
  /* Разделитель уже рисует нижняя граница canvas, вторую линию не добавляем. */
  border-top: 0;
  background: ${surfaceSolidCard};
  overflow: hidden;
  transition: height ${DURATION}s ease;

  border-radius: 0 0
    ${({ $roundRight }) => ($roundRight ? TABLE_BORDER_RADIUS : 0)}px
    ${({ $roundLeft }) => ($roundLeft ? TABLE_BORDER_RADIUS : 0)}px;
`;
