import {
  surfaceTransparentPrimary,
  surfaceTransparentPrimaryHover,
  surfaceTransparentSecondary,
  textPrimary,
  textSecondary,
  textTertiary,
} from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

import { GROUP_BODY_INDENT } from './Logger.constants';
import type { LoggerCssProp } from './Logger.types';

export const StyledLoggerRoot = styled.div<{ $css?: LoggerCssProp }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  min-height: 0;
  ${({ $css }) => $css}
`;

export const StyledLoggerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  user-select: none;
  color: ${textPrimary};

  &:focus-visible {
    outline: 2px solid ${textTertiary};
    outline-offset: 2px;
    border-radius: 6px;
  }
`;

export const StyledLoggerChevron = styled.span<{ $open: boolean }>`
  display: inline-flex;
  rotate: ${({ $open }) => ($open ? '0deg' : '-90deg')};
  transition: rotate 0.15s ease;
`;

export const StyledLoggerHeaderExtra = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const StyledLoggerFilters = styled.div`
  display: flex;
  gap: 2px;
`;

export const StyledLoggerFilter = styled.button<{ $active: boolean }>`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 12px;
  border-radius: 6px;
  cursor: pointer;
  background: ${({ $active }) =>
    $active ? surfaceTransparentPrimaryHover : surfaceTransparentPrimary};
  transition: background 0.15s ease;

  &:hover {
    background: ${surfaceTransparentSecondary};
  }

  &:focus-visible {
    outline: 2px solid ${textTertiary};
    outline-offset: 1px;
  }
`;

export const StyledLoggerList = styled.div<{
  $maxHeight?: number | string;
  $css?: LoggerCssProp;
}>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  padding: 5px 12px 5px 22px;
  ${({ $maxHeight }) =>
    $maxHeight !== undefined &&
    css`
      max-height: ${typeof $maxHeight === 'number'
        ? `${$maxHeight}px`
        : $maxHeight};
    `}
  ${({ $css }) => $css}
`;

export const StyledLoggerEmpty = styled.div`
  padding: 12px 0;
  color: ${textSecondary};
`;

export const StyledLoggerGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLoggerGroupHeader = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 32px;
  padding: 0 12px;
  margin: 0 -12px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${surfaceTransparentPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${textTertiary};
    outline-offset: -2px;
  }
`;

export const StyledLoggerGroupBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 4px;
  padding-left: ${GROUP_BODY_INDENT}px;
`;

export const StyledLoggerMessage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  min-width: 0;
`;

export const StyledLoggerMessageIcon = styled.span`
  display: inline-flex;
  flex: none;
  align-items: center;
  height: 16px;
`;

export const StyledLoggerMessageContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const StyledLoggerMessageActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px 2px;
`;

export const StyledLoggerMessageDate = styled.span`
  color: ${textSecondary};
  white-space: nowrap;

  &:not(:first-child) {
    margin-left: 6px;
  }
`;

export const StyledLoggerDetailsIcon = styled.span<{ $open: boolean }>`
  display: inline-flex;
  rotate: ${({ $open }) => ($open ? '180deg' : '0deg')};
  transition: rotate 0.15s ease;
`;

export const StyledLoggerDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
  padding: 6px 10px 6px 12px;
  border-radius: 10px;
  min-height: 28px;
  box-sizing: border-box;
  background: ${surfaceTransparentPrimary};
  word-break: break-word;
  white-space: pre-wrap;
  line-height: 16px;
`;

export const StyledLoggerDescriptionText = styled.div`
  flex: 1;
  min-width: 0;
`;

export const StyledLoggerCopyIcon = styled.button`
  all: unset;
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  cursor: pointer;
  color: ${textSecondary};
  transition: color 0.15s ease;

  &:hover {
    color: ${textPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${textTertiary};
    outline-offset: 2px;
  }
`;
