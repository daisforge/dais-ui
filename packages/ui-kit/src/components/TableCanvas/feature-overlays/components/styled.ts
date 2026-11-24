import { PopoverBeta } from '@ui-kit/components/PopoverBeta';
import { shadowDownSoftS } from '@ui-kit/tokens';
import styled from 'styled-components';

import { COLORS } from '../../styles';
import {
  POPOVER_CONTENT_BORDER_RADIUS,
  POPOVER_CONTENT_PADDING,
} from '../constants';

/**
 * Якорь поповера: невидимый DOM-элемент на месте canvas-элемента.
 * position: absolute внутри основного контейнера таблицы (не скроллящегося).
 * Фильтр открывается от прямоугольника иконки, Popover на canvas от прямоугольника
 * элемента или ячейки. С `$passThrough` клики проходят сквозь якорь на canvas.
 */
export const StyledPopoverContainer = styled.div<{
  $x: number;
  $y: number;
  $width?: number;
  $height?: number;
  $passThrough?: boolean;
}>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  width: ${({ $width }) => $width ?? 1}px;
  height: ${({ $height }) => $height ?? 1}px;
  ${({ $passThrough }) => ($passThrough ? 'pointer-events: none;' : '')}
`;

/**
 * Контент popover с тенью и скруглением.
 */
export const PopoverContent = styled.div`
  padding: ${POPOVER_CONTENT_PADDING}px;
  background-color: ${COLORS.white};
  border-radius: ${POPOVER_CONTENT_BORDER_RADIUS}px;
  box-shadow: ${() => shadowDownSoftS};
`;

/**
 * Скрытый target button для PopoverBeta.
 * Занимает весь прямоугольник иконки и не перехватывает события грида.
 */
export const HiddenTriggerButton = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  appearance: none;
  border: none;
  outline: none;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  padding: 0;
`;

export const StyledPopoverBeta = styled(PopoverBeta)`
  && {
    padding: 0;
    box-shadow: none;
    background: transparent;
  }
`;
