import { IconCopyOutline, IconDisclosureDownOutline } from '@ui-kit/icons';
import { mergeClasses } from '@ui-kit/utils';
import React, {
  FC,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Button } from '../../Button';
import { BodyS, BodyXS, TextXS } from '../../Typography';
import {
  COPIED_FEEDBACK_MS,
  loggerClassNames as cls,
} from '../Logger.constants';
import { useLoggerContext } from '../Logger.context';
import {
  StyledLoggerCopyIcon,
  StyledLoggerDescription,
  StyledLoggerDescriptionText,
  StyledLoggerDetailsIcon,
  StyledLoggerMessage,
  StyledLoggerMessageActions,
  StyledLoggerMessageContent,
  StyledLoggerMessageDate,
  StyledLoggerMessageIcon,
} from '../Logger.styled';
import type {
  LoggerCopyKind,
  LoggerMessageItem,
  LoggerMessageRenderContext,
} from '../Logger.types';
import { formatLoggerDate } from '../Logger.utils';
import { LoggerStatusIcon } from './LoggerStatusIcon';

export type LoggerMessageProps = {
  item: LoggerMessageItem;
  depth?: number;
  /** Раскрыты ли подробности. По умолчанию берётся из контекста Logger */
  open?: boolean;
  onToggle?: (item: LoggerMessageItem) => void;
};

const copyWithClipboardApi = async (value: string) => {
  await navigator.clipboard.writeText(value);
};

const LoggerMessageBase: FC<LoggerMessageProps> = ({
  item,
  depth = 0,
  open: openProp,
  onToggle,
}) => {
  const ctx = useLoggerContext();
  const {
    labels,
    classes,
    expandedIds,
    toggleExpanded,
    managed: hasProvider,
  } = ctx;
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

  const [localOpen, setLocalOpen] = useState(false);
  const open = openProp ?? (hasProvider ? expandedIds.has(id) : localOpen);

  const [copied, setCopied] = useState<LoggerCopyKind | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);

  const toggle = useCallback(() => {
    if (onToggle) onToggle(item);
    else if (hasProvider) toggleExpanded(id);
    else setLocalOpen((prev) => !prev);
  }, [onToggle, item, hasProvider, toggleExpanded, id]);

  const copy = useCallback(
    async (kind: LoggerCopyKind, value: string) => {
      try {
        await (ctx.copyToClipboard ?? copyWithClipboardApi)(value);
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

  const descriptionText =
    typeof description === 'string' ? description : undefined;
  const formattedDate =
    date !== undefined
      ? (ctx.formatDate ?? formatLoggerDate)(date, item)
      : null;

  const defaultActions: ReactNode = (
    <>
      {description && (
        <Button
          size="xxs"
          view="secondary"
          aria-expanded={open}
          aria-controls={`${id}-description`}
          text={open ? labels.hide : labels.details}
          contentRight={
            <StyledLoggerDetailsIcon $open={open}>
              <IconDisclosureDownOutline size="xs" />
            </StyledLoggerDetailsIcon>
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
          aria-label={action.title}
          disabled={action.disabled}
          contentLeft={action.icon}
          onClick={() => action.onClick?.(item)}
        />
      ))}
    </>
  );

  const defaultDescription = open && description && (
    <StyledLoggerDescription
      id={`${id}-description`}
      className={mergeClasses(
        cls.messageDescription,
        classes?.messageDescription,
      )}
    >
      <StyledLoggerDescriptionText>
        {ctx.renderDescription ? (
          ctx.renderDescription(item)
        ) : (
          <BodyXS>{description}</BodyXS>
        )}
      </StyledLoggerDescriptionText>
      {descriptionText && (
        <StyledLoggerCopyIcon
          type="button"
          title={
            copied === 'description' ? labels.copied : labels.copyDescription
          }
          aria-label={labels.copyDescription}
          onClick={() => copy('description', descriptionText)}
        >
          <IconCopyOutline size="xs" />
        </StyledLoggerCopyIcon>
      )}
    </StyledLoggerDescription>
  );

  const defaultRender = () => (
    <StyledLoggerMessage
      className={mergeClasses(cls.message, classes?.message, item.className)}
      data-status={status}
    >
      <StyledLoggerMessageIcon
        className={mergeClasses(cls.messageIcon, classes?.messageIcon)}
      >
        <LoggerStatusIcon status={status} item={item} />
      </StyledLoggerMessageIcon>
      <StyledLoggerMessageContent>
        <BodyS
          className={mergeClasses(cls.messageTitle, classes?.messageTitle)}
        >
          {title}
        </BodyS>
        {ctx.renderMessageExtra?.(item)}
        <StyledLoggerMessageActions
          className={mergeClasses(cls.messageActions, classes?.messageActions)}
        >
          {ctx.renderActions
            ? ctx.renderActions(item, defaultActions)
            : defaultActions}
          {formattedDate && (
            <StyledLoggerMessageDate
              className={mergeClasses(cls.messageDate, classes?.messageDate)}
            >
              <TextXS>{formattedDate}</TextXS>
            </StyledLoggerMessageDate>
          )}
        </StyledLoggerMessageActions>
        {defaultDescription}
      </StyledLoggerMessageContent>
    </StyledLoggerMessage>
  );

  if (!ctx.renderMessage) return defaultRender();

  const renderCtx: LoggerMessageRenderContext = {
    item,
    depth,
    open,
    toggle,
    copy,
    defaultRender,
  };
  return <>{ctx.renderMessage(renderCtx)}</>;
};

export const LoggerMessage = memo(LoggerMessageBase);
