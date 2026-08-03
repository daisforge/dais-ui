import { PopoverBeta } from '@ui-kit/components/PopoverBeta';
import { shadowDownSoftS } from '@ui-kit/tokens';
import styled from 'styled-components';

import { COLORS } from '../../styles';
import {
  POPOVER_CONTENT_BORDER_RADIUS,
  POPOVER_CONTENT_PADDING,
} from '../constants';

/**
 * Контейнер для позиционирования поповера.
 * position: absolute внутри основного контейнера таблицы (не скроллящегося).
 */
export const StyledPopoverContainer = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  width: 1px;
  height: 1px;
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
 * PopoverBeta требует видимый target для позиционирования,
 * но мы управляем открытием программно через .click().
 */
export const HiddenTriggerButton = styled.button`
  width: 1px;
  height: 1px;
  appearance: none;
  border: none;
  outline: none;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  padding: 0;
`;

export const StyledPopoverBeta = styled(PopoverBeta)`
  padding: 0;
  box-shadow: none;
  background: transparent;
`;
