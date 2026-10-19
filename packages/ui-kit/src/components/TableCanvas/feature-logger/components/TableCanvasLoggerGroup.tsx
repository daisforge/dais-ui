import { BodyS } from '@ui-kit/components/Typography';
import { IconDisclosureDownFill } from '@ui-kit/icons';
import { mergeClasses } from '@ui-kit/utils';
import React, { FC, memo, ReactNode, useCallback } from 'react';

import { useControllableState } from '../hooks/useControllableState';
import { tableCanvasLoggerClassNames as cls } from '../TableCanvasLogger.constants';
import { useTableCanvasLoggerContext } from '../TableCanvasLogger.context';
import {
  StyledTableCanvasLoggerChevron,
  StyledTableCanvasLoggerGroup,
  StyledTableCanvasLoggerGroupBody,
  StyledTableCanvasLoggerGroupHeader,
} from '../TableCanvasLogger.styled';
import type {
  TableCanvasLoggerGroupItem,
  TableCanvasLoggerGroupRenderContext,
} from '../TableCanvasLogger.types';
import { TableCanvasLoggerStatusIcon } from './TableCanvasLoggerStatusIcon';

export type TableCanvasLoggerGroupProps = {
  item: TableCanvasLoggerGroupItem;
  /** Раскрыта ли группа. Без пропа состояние хранится внутри, начальное — `item.defaultOpen` */
  open?: boolean;
  onOpenChange?: (open: boolean, item: TableCanvasLoggerGroupItem) => void;
  /** Вложенные элементы */
  children?: ReactNode;
};

const TableCanvasLoggerGroupBase: FC<TableCanvasLoggerGroupProps> = ({
  item,
  open: openProp,
  onOpenChange,
  children,
}) => {
  const ctx = useTableCanvasLoggerContext();
  const { classes, labels } = ctx;
  const [open, setOpen] = useControllableState(
    openProp,
    Boolean(item.defaultOpen),
    useCallback(
      (next: boolean) => onOpenChange?.(next, item),
      [onOpenChange, item],
    ),
  );
  const toggle = useCallback(() => setOpen((prev) => !prev), [setOpen]);

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
        <TableCanvasLoggerStatusIcon status={item.status} />
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
    open,
    toggle,
    children,
    defaultRender,
  };
  return <>{ctx.renderGroup(renderCtx)}</>;
};

export const TableCanvasLoggerGroup = memo(TableCanvasLoggerGroupBase);
