import { Button } from '@ui-kit/components/Button';
import { BodyS, BodyXS, TextXS } from '@ui-kit/components/Typography';
import { IconCopyOutline, IconDisclosureDownOutline } from '@ui-kit/icons';
import { handleCopyAsync } from '@ui-kit/shared/utils/copy';
import { mergeClasses } from '@ui-kit/utils';
import React, {
  FC,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import {
  COPIED_FEEDBACK_MS,
  TABLE_CANVAS_LOGGER_STATUS_LABEL_KEYS,
  tableCanvasLoggerClassNames as cls,
} from '../TableCanvasLogger.constants';
import {
  useTableCanvasLoggerContext,
  useTableCanvasLoggerExpanded,
} from '../TableCanvasLogger.context';
import {
  StyledTableCanvasLoggerCopyIcon,
  StyledTableCanvasLoggerDescription,
  StyledTableCanvasLoggerDescriptionText,
  StyledTableCanvasLoggerDetailsIcon,
  StyledTableCanvasLoggerMessage,
  StyledTableCanvasLoggerMessageActions,
  StyledTableCanvasLoggerMessageContent,
  StyledTableCanvasLoggerMessageDate,
  StyledTableCanvasLoggerMessageIcon,
  StyledTableCanvasLoggerVisuallyHidden,
} from '../TableCanvasLogger.styled';
import type {
  TableCanvasLoggerCopyKind,
  TableCanvasLoggerMessageItem,
  TableCanvasLoggerMessageRenderContext,
} from '../TableCanvasLogger.types';
import { formatTableCanvasLoggerDate } from '../TableCanvasLogger.utils';
import { TableCanvasLoggerStatusIcon } from './TableCanvasLoggerStatusIcon';

export type TableCanvasLoggerMessageProps = {
  item: TableCanvasLoggerMessageItem;
  depth?: number;
  /** Раскрыты ли подробности. По умолчанию берётся из контекста TableCanvasLogger */
  open?: boolean;
  onToggle?: (item: TableCanvasLoggerMessageItem) => void;
};

const TableCanvasLoggerMessageBase: FC<TableCanvasLoggerMessageProps> = ({
  item,
  depth = 0,
  open: openProp,
  onToggle,
}) => {
  const ctx = useTableCanvasLoggerContext();
  const { labels, classes, toggleExpanded, managed: hasProvider } = ctx;
  const {
    id,
    status,
    title,
    description,
    date,
    traceId,
    code,
    actions = [],
  } = item;

  const descriptionId = `${useId()}-description`;
  const [localOpen, setLocalOpen] = useState(false);
  const managedOpen = useTableCanvasLoggerExpanded(id);
  const open = openProp ?? (hasProvider ? managedOpen : localOpen);

  const [copied, setCopied] = useState<TableCanvasLoggerCopyKind | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);

  const toggle = useCallback(() => {
    if (onToggle) onToggle(item);
    else if (hasProvider) toggleExpanded(id);
    else setLocalOpen((prev) => !prev);
  }, [onToggle, item, hasProvider, toggleExpanded, id]);

  const copy = useCallback(
    async (kind: TableCanvasLoggerCopyKind, value: string) => {
      try {
        const result = ctx.copyToClipboard
          ? await ctx.copyToClipboard(value)
          : await handleCopyAsync(value);
        if (result === false) {
          setCopied(null);
          return;
        }
        ctx.onCopy?.(kind, value, item);
        setCopied(kind);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(null), COPIED_FEEDBACK_MS);
      } catch {
        setCopied(null);
      }
    },
    [ctx, item],
  );

  const hasDescription =
    description !== undefined &&
    description !== null &&
    description !== false &&
    description !== '';
  const descriptionText =
    typeof description === 'string' ? description : undefined;
  const formattedDate =
    date !== undefined
      ? (ctx.formatDate ?? formatTableCanvasLoggerDate)(date, item)
      : null;

  const defaultActions: ReactNode = (
    <>
      {hasDescription && (
        <Button
          size="xxs"
          view="secondary"
          aria-expanded={open}
          aria-controls={open ? descriptionId : undefined}
          text={open ? labels.hide : labels.details}
          contentRight={
            <StyledTableCanvasLoggerDetailsIcon $open={open}>
              <IconDisclosureDownOutline size="xs" />
            </StyledTableCanvasLoggerDetailsIcon>
          }
          onClick={toggle}
        />
      )}
      {traceId && (
        <Button
          size="xxs"
          view="secondary"
          text={copied === 'traceId' ? labels.copied : labels.copyTraceId}
          contentLeft={<IconCopyOutline size="xs" />}
          onClick={() => copy('traceId', traceId)}
        />
      )}
      {code && (
        <Button
          size="xxs"
          view="secondary"
          text={code}
          onClick={() => ctx.onCodeClick?.(code, item)}
        />
      )}
      {actions.map((action) => (
        <Button
          key={action.id}
          size="xxs"
          view={action.view ?? 'secondary'}
          text={action.text}
          title={action.title}
          aria-label={action.text ? undefined : action.title}
          disabled={action.disabled}
          contentLeft={action.icon}
          onClick={() => action.onClick?.(item)}
        />
      ))}
    </>
  );

  const defaultDescription = open && hasDescription && (
    <StyledTableCanvasLoggerDescription
      id={descriptionId}
      className={mergeClasses(
        cls.messageDescription,
        classes?.messageDescription,
      )}
    >
      <StyledTableCanvasLoggerDescriptionText>
        {ctx.renderDescription ? (
          ctx.renderDescription(item)
        ) : (
          <BodyXS>{description}</BodyXS>
        )}
      </StyledTableCanvasLoggerDescriptionText>
      {descriptionText && (
        <StyledTableCanvasLoggerCopyIcon
          type="button"
          title={
            copied === 'description' ? labels.copied : labels.copyDescription
          }
          aria-label={labels.copyDescription}
          onClick={() => copy('description', descriptionText)}
        >
          <IconCopyOutline size="xs" />
        </StyledTableCanvasLoggerCopyIcon>
      )}
    </StyledTableCanvasLoggerDescription>
  );

  const defaultRender = () => (
    <StyledTableCanvasLoggerMessage
      className={mergeClasses(cls.message, classes?.message, item.className)}
      data-status={status}
    >
      <StyledTableCanvasLoggerMessageIcon
        role="img"
        aria-label={labels[TABLE_CANVAS_LOGGER_STATUS_LABEL_KEYS[status]]}
        className={mergeClasses(cls.messageIcon, classes?.messageIcon)}
      >
        <TableCanvasLoggerStatusIcon status={status} item={item} />
      </StyledTableCanvasLoggerMessageIcon>
      <StyledTableCanvasLoggerMessageContent>
        <BodyS
          className={mergeClasses(cls.messageTitle, classes?.messageTitle)}
        >
          {title}
        </BodyS>
        {ctx.renderMessageExtra?.(item)}
        <StyledTableCanvasLoggerMessageActions
          className={mergeClasses(cls.messageActions, classes?.messageActions)}
        >
          {ctx.renderActions
            ? ctx.renderActions(item, defaultActions)
            : defaultActions}
          {formattedDate && (
            <StyledTableCanvasLoggerMessageDate
              className={mergeClasses(cls.messageDate, classes?.messageDate)}
            >
              <TextXS>{formattedDate}</TextXS>
            </StyledTableCanvasLoggerMessageDate>
          )}
        </StyledTableCanvasLoggerMessageActions>
        {defaultDescription}
        <StyledTableCanvasLoggerVisuallyHidden role="status">
          {copied ? labels.copied : ''}
        </StyledTableCanvasLoggerVisuallyHidden>
      </StyledTableCanvasLoggerMessageContent>
    </StyledTableCanvasLoggerMessage>
  );

  if (!ctx.renderMessage) return defaultRender();

  const renderCtx: TableCanvasLoggerMessageRenderContext = {
    item,
    depth,
    open,
    toggle,
    copy,
    defaultRender,
  };
  return <>{ctx.renderMessage(renderCtx)}</>;
};

export const TableCanvasLoggerMessage = memo(TableCanvasLoggerMessageBase);
