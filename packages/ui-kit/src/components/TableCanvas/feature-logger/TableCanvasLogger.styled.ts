import { Divider } from '@ui-kit/components/Divider';
import { br, s } from '@ui-kit/constants';
import {
  surfaceTransparentPrimary,
  surfaceTransparentPrimaryHover,
  surfaceTransparentSecondary,
  textPrimary,
  textSecondary,
  textTertiary,
} from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

import { BUTTON_XXS_RADIUS, ICON_SIZE } from './TableCanvasLogger.constants';
import type { TableCanvasLoggerCssProp } from './TableCanvasLogger.types';

const focusRing = (offset: string) => css`
  &:focus-visible {
    outline: 2px solid ${() => textTertiary};
    outline-offset: ${offset};
  }
`;

export const StyledTableCanvasLoggerRoot = styled.div<{
  $css?: TableCanvasLoggerCssProp;
}>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: ${() => s.x4} ${() => s.x6} 0;
  ${({ $css }) => $css}
`;

export const StyledTableCanvasLoggerDivider = styled(Divider)`
  flex: none;
  margin-top: ${() => s.x4};
`;

export const StyledTableCanvasLoggerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${() => s.x3};
  color: ${() => textPrimary};
`;

export const StyledTableCanvasLoggerToggle = styled.button`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: ${() => s.x3};
  border-radius: ${BUTTON_XXS_RADIUS};
  cursor: pointer;
  user-select: none;
  color: inherit;
  ${focusRing('2px')}
`;

export const StyledTableCanvasLoggerChevron = styled.span<{ $open: boolean }>`
  display: inline-flex;
  rotate: ${({ $open }) => ($open ? '0deg' : '-90deg')};
  transition: rotate 0.15s ease;
`;

export const StyledTableCanvasLoggerHeaderExtra = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const StyledTableCanvasLoggerFilters = styled.div`
  display: flex;
  gap: ${() => s.x1};
`;

export const StyledTableCanvasLoggerFilter = styled.button<{
  $active: boolean;
}>`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: ${() => s.x2};
  padding: ${() => s.x2} ${() => s.x6};
  border-radius: ${BUTTON_XXS_RADIUS};
  cursor: pointer;
  background: ${({ $active }) =>
    $active ? surfaceTransparentPrimaryHover : surfaceTransparentPrimary};
  transition: background 0.15s ease;

  &:hover {
    background: ${() => surfaceTransparentSecondary};
  }

  ${focusRing('1px')}
`;

export const StyledTableCanvasLoggerList = styled.div<{
  $maxHeight?: number | string;
  $css?: TableCanvasLoggerCssProp;
}>`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: ${() => s.x10};
  min-height: 0;
  overflow-y: auto;
  padding: ${() => s.x2} ${() => s.x6} ${() => s.x2} ${() => s.x10};
  ${({ $maxHeight }) =>
    $maxHeight !== undefined &&
    css`
      max-height: ${typeof $maxHeight === 'number'
        ? `${$maxHeight}px`
        : $maxHeight};
    `}
  ${({ $css }) => $css}
`;

export const StyledTableCanvasLoggerEmpty = styled.div`
  padding: ${() => s.x6} 0;
  color: ${() => textSecondary};
`;

export const StyledTableCanvasLoggerGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTableCanvasLoggerGroupHeader = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: ${() => s.x3};
  min-height: 32px;
  padding: 0 ${() => s.x6};
  margin: 0 calc(${() => s.x6} * -1);
  border-radius: ${() => br.xs};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${() => surfaceTransparentPrimary};
  }

  ${focusRing('-2px')}
`;

/** Вложенные элементы начинаются под заголовком группы: шеврон, отступ, иконка, отступ */
export const StyledTableCanvasLoggerGroupBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${() => s.x8};
  margin-top: ${() => s.x2};
  padding-left: calc(${ICON_SIZE * 2}px + ${() => s.x3} * 2);
`;

export const StyledTableCanvasLoggerMessage = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${() => s.x3};
  min-width: 0;
`;

export const StyledTableCanvasLoggerStatusIcon = styled.span`
  display: inline-flex;
  flex: none;
  align-items: center;
  height: ${ICON_SIZE}px;
`;

export const StyledTableCanvasLoggerVisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`;

export const StyledTableCanvasLoggerMessageContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${() => s.x1};
  min-width: 0;
`;

export const StyledTableCanvasLoggerMessageActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${() => s.x1};
`;

export const StyledTableCanvasLoggerMessageDate = styled.span`
  color: ${() => textSecondary};
  white-space: nowrap;

  &:not(:first-child) {
    margin-left: ${() => s.x3};
  }
`;

export const StyledTableCanvasLoggerDetailsIcon = styled.span<{
  $open: boolean;
}>`
  display: inline-flex;
  rotate: ${({ $open }) => ($open ? '180deg' : '0deg')};
  transition: rotate 0.15s ease;
`;

export const StyledTableCanvasLoggerDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${() => s.x4};
  margin-top: ${() => s.x3};
  padding: ${() => s.x3} ${() => s.x4} ${() => s.x3} ${() => s.x6};
  border-radius: ${() => br.xs};
  min-height: 28px;
  box-sizing: border-box;
  background: ${() => surfaceTransparentPrimary};
  word-break: break-word;
  white-space: pre-wrap;
  line-height: ${ICON_SIZE}px;
`;

export const StyledTableCanvasLoggerDescriptionText = styled.div`
  flex: 1;
  min-width: 0;
`;

export const StyledTableCanvasLoggerCopyIcon = styled.button`
  all: unset;
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  border-radius: ${() => br.xxs};
  cursor: pointer;
  color: ${() => textSecondary};
  transition: color 0.15s ease;

  &:hover {
    color: ${() => textPrimary};
  }

  ${focusRing('2px')}
`;
