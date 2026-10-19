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

import { GROUP_BODY_INDENT } from './TableCanvasLogger.constants';
import type { TableCanvasLoggerCssProp } from './TableCanvasLogger.types';

const c = {
  textPrimary: () => textPrimary,
  textSecondary: () => textSecondary,
  focus: () => textTertiary,
  bg: () => surfaceTransparentPrimary,
  bgActive: () => surfaceTransparentPrimaryHover,
  bgHover: () => surfaceTransparentSecondary,
  spaceX1: () => s.x1,
  spaceX2: () => s.x2,
  spaceX3: () => s.x3,
  spaceX4: () => s.x4,
  spaceX6: () => s.x6,
  spaceX8: () => s.x8,
  spaceX10: () => s.x10,
  brXXS: () => br.xxs,
  brXS: () => br.xs,
};

export const StyledTableCanvasLoggerRoot = styled.div<{
  $css?: TableCanvasLoggerCssProp;
}>`
  display: flex;
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: ${c.spaceX4} ${c.spaceX6} 0;
  ${({ $css }) => $css}
`;

export const StyledTableCanvasLoggerDivider = styled(Divider)`
  flex: none;
  margin-top: ${c.spaceX4};
`;

export const StyledTableCanvasLoggerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${c.spaceX3};
  color: ${c.textPrimary};
`;

export const StyledTableCanvasLoggerToggle = styled.button`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: ${c.spaceX3};
  cursor: pointer;
  user-select: none;
  color: inherit;

  &:focus-visible {
    outline: 2px solid ${c.focus};
    outline-offset: 2px;
    border-radius: 6px;
  }
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
  gap: ${c.spaceX1};
`;

export const StyledTableCanvasLoggerFilter = styled.button<{
  $active: boolean;
}>`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: ${c.spaceX2};
  padding: ${c.spaceX2} ${c.spaceX6};
  border-radius: 6px;
  cursor: pointer;
  background: ${({ $active }) => ($active ? c.bgActive() : c.bg())};
  transition: background 0.15s ease;

  &:hover {
    background: ${c.bgHover};
  }

  &:focus-visible {
    outline: 2px solid ${c.focus};
    outline-offset: 1px;
  }
`;

export const StyledTableCanvasLoggerList = styled.div<{
  $maxHeight?: number | string;
  $css?: TableCanvasLoggerCssProp;
}>`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: ${c.spaceX10};
  min-height: 0;
  overflow-y: auto;
  padding: ${c.spaceX2} ${c.spaceX6} ${c.spaceX2} ${c.spaceX10};
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
  padding: ${c.spaceX6} 0;
  color: ${c.textSecondary};
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
  gap: ${c.spaceX3};
  min-height: 32px;
  padding: 0 ${c.spaceX6};
  margin: 0 calc(${c.spaceX6} * -1);
  border-radius: ${c.brXS};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${c.bg};
  }

  &:focus-visible {
    outline: 2px solid ${c.focus};
    outline-offset: -2px;
  }
`;

export const StyledTableCanvasLoggerGroupBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${c.spaceX8};
  margin-top: ${c.spaceX2};
  padding-left: ${GROUP_BODY_INDENT}px;
`;

export const StyledTableCanvasLoggerMessage = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${c.spaceX3};
  min-width: 0;
`;

export const StyledTableCanvasLoggerMessageIcon = styled.span`
  display: inline-flex;
  flex: none;
  align-items: center;
  height: 16px;
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
  gap: ${c.spaceX1};
  min-width: 0;
`;

export const StyledTableCanvasLoggerMessageActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${c.spaceX1};
`;

export const StyledTableCanvasLoggerMessageDate = styled.span`
  color: ${c.textSecondary};
  white-space: nowrap;

  &:not(:first-child) {
    margin-left: ${c.spaceX3};
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
  gap: ${c.spaceX4};
  margin-top: ${c.spaceX3};
  padding: ${c.spaceX3} ${c.spaceX4} ${c.spaceX3} ${c.spaceX6};
  border-radius: 10px;
  min-height: 28px;
  box-sizing: border-box;
  background: ${c.bg};
  word-break: break-word;
  white-space: pre-wrap;
  line-height: 16px;
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
  width: 16px;
  height: 16px;
  border-radius: ${c.brXXS};
  cursor: pointer;
  color: ${c.textSecondary};
  transition: color 0.15s ease;

  &:hover {
    color: ${c.textPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${c.focus};
    outline-offset: 2px;
  }
`;
