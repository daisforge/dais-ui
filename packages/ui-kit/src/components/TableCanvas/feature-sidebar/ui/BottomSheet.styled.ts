import { outlineSolidPrimary, surfaceSolidCard } from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

import { DURATION, TABLE_BORDER_RADIUS } from '../../styles/styles.constants';
import { MIN_CANVAS_HEIGHT_WITH_BOTTOM_SHEET } from '../constants';

export const BOTTOM_SHEET_AVAILABLE_HEIGHT = `max(0px, calc(100% - ${MIN_CANVAS_HEIGHT_WITH_BOTTOM_SHEET}px))`;

export const BottomSheetContainer = styled.div<{
  $roundLeft: boolean;
  $roundRight: boolean;
  $autoHeight: boolean;
}>`
  box-sizing: border-box;
  flex: 0 0 auto;
  min-width: 0;
  height: var(--rdg-bottom-sheet-height);
  min-height: var(--rdg-bottom-sheet-min-height);
  max-height: var(--rdg-bottom-sheet-max-height);
  border: 1px solid ${outlineSolidPrimary};
  /* Разделитель уже рисует нижняя граница canvas, вторую линию не добавляем. */
  border-top: 0;
  background: ${surfaceSolidCard};
  overflow: ${({ $autoHeight }) => ($autoHeight ? 'auto' : 'hidden')};
  transition: height ${DURATION}s ease;

  ${({ $autoHeight }) =>
    $autoHeight &&
    css`
      @supports (height: calc-size(auto, size)) {
        /* Ограничиваем конечный размер до интерполяции: закрытие начинается сразу. */
        height: calc-size(
          auto,
          clamp(
            var(--rdg-bottom-sheet-min-height),
            size,
            var(--rdg-bottom-sheet-max-height)
          )
        );
      }
    `}

  border-radius: 0 0
    ${({ $roundRight }) => ($roundRight ? TABLE_BORDER_RADIUS : 0)}px
    ${({ $roundLeft }) => ($roundLeft ? TABLE_BORDER_RADIUS : 0)}px;
`;
