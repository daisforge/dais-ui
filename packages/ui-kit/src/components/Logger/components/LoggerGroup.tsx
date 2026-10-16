import { IconDisclosureDownFill } from '@ui-kit/icons';
import { mergeClasses } from '@ui-kit/utils';
import React, { FC, memo, ReactNode, useCallback, useState } from 'react';

import { BodyS } from '../../Typography';
import { loggerClassNames as cls } from '../Logger.constants';
import { useLoggerContext } from '../Logger.context';
import {
  StyledLoggerChevron,
  StyledLoggerGroup,
  StyledLoggerGroupBody,
  StyledLoggerGroupHeader,
} from '../Logger.styled';
import type {
  LoggerGroupItem,
  LoggerGroupRenderContext,
} from '../Logger.types';
import { LoggerStatusIcon } from './LoggerStatusIcon';

export type LoggerGroupProps = {
  item: LoggerGroupItem;
  depth?: number;
  open?: boolean;
  onToggle?: (item: LoggerGroupItem) => void;
  /** Дочерние элементы, уже отрисованные списком */
  children?: ReactNode;
};

const LoggerGroupBase: FC<LoggerGroupProps> = ({
  item,
  depth = 0,
  open: openProp,
  onToggle,
  children,
}) => {
  const ctx = useLoggerContext();
  const { classes, labels, expandedIds, toggleExpanded, managed } = ctx;
  const [localOpen, setLocalOpen] = useState(Boolean(item.defaultOpen));
  const open = openProp ?? (managed ? expandedIds.has(item.id) : localOpen);

  const toggle = useCallback(() => {
    if (onToggle) onToggle(item);
    else if (managed) toggleExpanded(item.id);
    else setLocalOpen((prev) => !prev);
  }, [onToggle, item, managed, toggleExpanded]);

  const defaultRender = () => (
    <StyledLoggerGroup
      className={mergeClasses(cls.group, classes?.group, item.className)}
      data-status={item.status}
    >
      <StyledLoggerGroupHeader
        type="button"
        aria-expanded={open}
        aria-label={`${open ? labels.collapseGroup : labels.expandGroup}: ${
          typeof item.title === 'string' ? item.title : ''
        }`}
        className={mergeClasses(cls.groupHeader, classes?.groupHeader)}
        onClick={toggle}
      >
        <StyledLoggerChevron $open={open}>
          <IconDisclosureDownFill size="xs" />
        </StyledLoggerChevron>
        <LoggerStatusIcon status={item.status} item={item} />
        <BodyS>{item.title}</BodyS>
      </StyledLoggerGroupHeader>
      {open && (
        <StyledLoggerGroupBody
          className={mergeClasses(cls.groupBody, classes?.groupBody)}
        >
          {children}
        </StyledLoggerGroupBody>
      )}
    </StyledLoggerGroup>
  );

  if (!ctx.renderGroup) return defaultRender();

  const renderCtx: LoggerGroupRenderContext = {
    item,
    depth,
    open,
    toggle,
    children,
    defaultRender,
  };
  return <>{ctx.renderGroup(renderCtx)}</>;
};

export const LoggerGroup = memo(LoggerGroupBase);
