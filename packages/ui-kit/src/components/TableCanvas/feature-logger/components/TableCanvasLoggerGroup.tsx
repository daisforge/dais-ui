import { BodyS } from '@ui-kit/components/Typography';
import { IconDisclosureDownFill } from '@ui-kit/icons';
import { mergeClasses } from '@ui-kit/utils';
import React, { FC, memo, ReactNode, useCallback, useState } from 'react';

import {
  TABLE_CANVAS_LOGGER_STATUS_LABEL_KEYS,
  tableCanvasLoggerClassNames as cls,
} from '../TableCanvasLogger.constants';
import {
  useTableCanvasLoggerContext,
  useTableCanvasLoggerExpanded,
} from '../TableCanvasLogger.context';
import {
  StyledTableCanvasLoggerChevron,
  StyledTableCanvasLoggerGroup,
  StyledTableCanvasLoggerGroupBody,
  StyledTableCanvasLoggerGroupHeader,
  StyledTableCanvasLoggerMessageIcon,
} from '../TableCanvasLogger.styled';
import type {
  TableCanvasLoggerGroupItem,
  TableCanvasLoggerGroupRenderContext,
} from '../TableCanvasLogger.types';
import { TableCanvasLoggerStatusIcon } from './TableCanvasLoggerStatusIcon';

export type TableCanvasLoggerGroupProps = {
  item: TableCanvasLoggerGroupItem;
  depth?: number;
  open?: boolean;
  onToggle?: (item: TableCanvasLoggerGroupItem) => void;
  /** Дочерние элементы, уже отрисованные списком */
  children?: ReactNode;
};

const TableCanvasLoggerGroupBase: FC<TableCanvasLoggerGroupProps> = ({
  item,
  depth = 0,
  open: openProp,
  onToggle,
  children,
}) => {
  const ctx = useTableCanvasLoggerContext();
  const { classes, labels, toggleExpanded, managed } = ctx;
  const [localOpen, setLocalOpen] = useState(Boolean(item.defaultOpen));
  const managedOpen = useTableCanvasLoggerExpanded(item.id);
  const open = openProp ?? (managed ? managedOpen : localOpen);

  const toggle = useCallback(() => {
    if (onToggle) onToggle(item);
    else if (managed) toggleExpanded(item.id);
    else setLocalOpen((prev) => !prev);
  }, [onToggle, item, managed, toggleExpanded]);

  const defaultRender = () => (
    <StyledTableCanvasLoggerGroup
      className={mergeClasses(cls.group, classes?.group, item.className)}
      data-status={item.status}
    >
      <StyledTableCanvasLoggerGroupHeader
        type="button"
        aria-expanded={open}
        title={open ? labels.collapseGroup : labels.expandGroup}
        className={mergeClasses(cls.groupHeader, classes?.groupHeader)}
        onClick={toggle}
      >
        <StyledTableCanvasLoggerChevron $open={open}>
          <IconDisclosureDownFill size="xs" />
        </StyledTableCanvasLoggerChevron>
        <StyledTableCanvasLoggerMessageIcon
          role="img"
          aria-label={
            labels[TABLE_CANVAS_LOGGER_STATUS_LABEL_KEYS[item.status]]
          }
        >
          <TableCanvasLoggerStatusIcon status={item.status} item={item} />
        </StyledTableCanvasLoggerMessageIcon>
        <BodyS>{item.title}</BodyS>
      </StyledTableCanvasLoggerGroupHeader>
      {open && (
        <StyledTableCanvasLoggerGroupBody
          className={mergeClasses(cls.groupBody, classes?.groupBody)}
        >
          {children}
        </StyledTableCanvasLoggerGroupBody>
      )}
    </StyledTableCanvasLoggerGroup>
  );

  if (!ctx.renderGroup) return defaultRender();

  const renderCtx: TableCanvasLoggerGroupRenderContext = {
    item,
    depth,
    open,
    toggle,
    children,
    defaultRender,
  };
  return <>{ctx.renderGroup(renderCtx)}</>;
};

export const TableCanvasLoggerGroup = memo(TableCanvasLoggerGroupBase);
