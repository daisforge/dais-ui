import { Box } from '@ui-kit/components/Box';
import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import {
  outlineSolidSecondary,
  outlineSolidSecondaryHover,
  shadowDownSoftS,
  spacing6x,
  spacing8x,
  spacing16x,
  surfaceSolidCard,
  surfaceSolidSecondary
} from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

import { TRANSITION_TIME } from './constants';

interface PanelProps {
  minWidth: number;
  maxWidth: number;
  collapsed: boolean;
  width?: number;
  showResizeable: boolean;
  $resizing?: boolean;
}

interface ToggleButtonTypeProps {
  $isAdaptive1280?: boolean;
  collapsed: boolean;
  isAbsolute: boolean;
}

export const PanelContainer = styled(Box)<PanelProps>`
  width: 100%;
  height: 100%;
  min-width: ${({ minWidth }) => minWidth}px;
  display: flex;
  background-color: ${() => surfaceSolidCard};
  margin-right: ${spacing8x};
  border-radius: ${spacing8x};
  box-shadow: ${() => shadowDownSoftS};
  /* Во время активного ресайза transition ширины отключаем — иначе панель
     тянется за курсором с инерцией. В остальных случаях (кнопка/внешний
     контрол) всегда плавно анимируем max-width в обе стороны — раньше при
     заданном width анимировалась только opacity, из-за чего открытие было
     мгновенным, а закрытие плавным (асимметрия). */
  transition: ${(props) =>
    props.$resizing
      ? 'none'
      : `max-width ${TRANSITION_TIME}s ease-in-out, opacity ${TRANSITION_TIME}s ease-in-out`};
  max-width: ${(props) => {
    if (props.width !== undefined) {
      return `${Math.min(props.width, props.maxWidth)}px`;
    }
    return `${props.minWidth}px`;
  }};
  position: relative;
  overflow: hidden;
  padding-right: ${({ showResizeable }) => (showResizeable ? spacing6x : 0)};
`;

/* Обёртка-кросс-фейд: оба слоя (раскрытый/свёрнутый) всегда в DOM и
   наложены друг на друга в одной grid-ячейке. Переключение collapsed
   плавно перегоняет opacity между слоями — вместо прежнего резкого
   появления контента (animation с нулевой длительностью и задержкой). */
export const PanelCrossfade = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  overflow: hidden;
`;

const crossfadeLayer = css<{ $active?: boolean }>`
  grid-area: 1 / 1;
  min-width: 0;
  min-height: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  visibility: ${({ $active }) => ($active ? 'visible' : 'hidden')};
  pointer-events: ${({ $active }) => ($active ? 'auto' : 'none')};
  transition: opacity ${TRANSITION_TIME}s ease-in-out,
    visibility 0s ${({ $active }) => ($active ? '0s' : `${TRANSITION_TIME}s`)};
`;

export const PanelContent = styled.div<{ $active?: boolean }>`
  ${crossfadeLayer};
  width: 100%;
  height: 100%;
  margin-top: 0;
  position: relative;
`;

export const PanelCollapsedContent = styled.div<{
  $isAdaptive1280?: boolean;
  showResizeable: boolean;
  $active?: boolean;
}>`
  ${crossfadeLayer};
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({ $isAdaptive1280, showResizeable }) => {
    if (!showResizeable) return spacing8x;

    return $isAdaptive1280 ? '6px' : '10px';
  }};
  width: 100%;
`;

export const PanelCollapsedBody = styled.div`
  gap: ${spacing8x};
  display: flex;
  flex-direction: column;
`;

export const PanelIconButton = styled(EmbedIconButton)<ToggleButtonTypeProps>`
  z-index: 1;
  position: ${(props) => (props.isAbsolute ? 'absolute' : 'static')};
  top: ${spacing8x};
  right: ${spacing8x};
  width: ${({ $isAdaptive1280 }) => ($isAdaptive1280 ? 32 : 40)}px !important;
  height: ${({ $isAdaptive1280 }) => ($isAdaptive1280 ? 32 : 40)}px !important;

  .left-panel__toggle-button {
    transform: ${(props) =>
      props.collapsed ? 'rotate(270deg)' : 'rotate(90deg)'};
  }
`;

export const PanelSeparator = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  width: 12px;
  height: 100%;
  cursor: col-resize;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 100%;
    background-color: ${() => surfaceSolidSecondary};
  }

  &::after {
    content: '';
    position: absolute;
    top: ${`calc(50% - ${spacing16x} / 2)`};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 95px;
    width: 4px;
    height: ${spacing16x};
    background-color: ${() => outlineSolidSecondary};
  }

  &:hover {
    &::after {
      background-color: ${() => outlineSolidSecondaryHover};
    }
  }
`;
