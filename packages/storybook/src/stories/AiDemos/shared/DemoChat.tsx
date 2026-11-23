import { AiAgentInput } from '@ui-kit/components/AiAgentPopup';
// Оболочка пока не экспортируется потребителям (см. index.ts AiAgentPopup),
// в демо берём её напрямую: чат встроен в лэйаут страницы, а не в окно
import { AiAgentSurface } from '@ui-kit/components/AiAgentPopup/AiAgentSurface';
import { Badge } from '@ui-kit/components/Badge';
import { Chip } from '@ui-kit/components/Chip';
import { IconButton } from '@ui-kit/components/IconButton';
import { Spinner } from '@ui-kit/components/Spinner';
import { Typography } from '@ui-kit/components/Typography';
import { br } from '@ui-kit/constants';
import {
  IconDoneCircleFill,
  IconFileTextOutline,
  IconSearchAIOutline,
  IconSendOutline,
} from '@ui-kit/icons';
import {
  surfaceAccentMinor,
  surfaceTransparentSecondary,
  textAccentGradient,
  textPositive,
  textPrimary,
  textSecondary,
} from '@ui-kit/tokens';
import React, { CSSProperties, ReactNode, useEffect, useRef } from 'react';

import type { DemoMessage, DemoStep } from './types';

export type DemoChatProps = {
  title: string;
  messages: DemoMessage[];
  draft: string;
  onDraftChange: (value: string) => void;
  onSend: () => void;
  /** Агент «думает»: свечение поля ввода и блокировка отправки */
  busy?: boolean;
  /** Подсказки-чипы над полем ввода */
  suggestions?: string[];
  onSuggestion?: (text: string) => void;
  placeholder?: string;
  /** Дополнительная кнопка слева от отправки, например «Прикрепить файл» */
  extraAction?: ReactNode;
  style?: CSSProperties;
};

const messagesStyle: CSSProperties = {
  flex: '1 1 auto',
  minHeight: 0,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  margin: '12px 0',
  paddingRight: 4,
};

const userBubbleStyle: CSSProperties = {
  alignSelf: 'flex-end',
  maxWidth: '85%',
  background: surfaceAccentMinor,
  borderRadius: br.s,
  padding: '10px 12px',
  color: textPrimary,
  whiteSpace: 'pre-wrap',
};

const assistantStyle: CSSProperties = {
  alignSelf: 'stretch',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: '0 4px',
  color: textPrimary,
  whiteSpace: 'pre-wrap',
};

const stepsStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  padding: '8px 10px',
  borderRadius: br.s,
  background: surfaceTransparentSecondary,
};

const rowStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

function StepIcon({ status }: { status: DemoStep['status'] }) {
  const box: CSSProperties = {
    width: 16,
    height: 16,
    flex: '0 0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  if (status === 'running') {
    return (
      <span style={box}>
        <Spinner size="xxs" view="accent" />
      </span>
    );
  }
  if (status === 'done') {
    return (
      <span style={box}>
        <IconDoneCircleFill size="xs" color={textPositive} />
      </span>
    );
  }
  return (
    <span style={box}>
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: 3,
          background: textSecondary,
          opacity: 0.5,
        }}
      />
    </span>
  );
}

function Steps({ steps }: { steps: DemoStep[] }) {
  return (
    <div style={stepsStyle}>
      {steps.map((step) => (
        <div key={step.id} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={rowStyle}>
            <StepIcon status={step.status} />
            <Typography
              variant="BodyXS"
              style={{
                color: step.status === 'pending' ? textSecondary : textPrimary,
              }}
            >
              {step.title}
            </Typography>
          </div>
          {step.detail && step.status !== 'pending' && (
            <Typography
              variant="BodyXXS"
              style={{ color: textSecondary, marginLeft: 24 }}
            >
              {step.detail}
            </Typography>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Встроенный чат AI-агента для демо: оболочка AiAgentSurface,
 * лента сообщений с шагами обработки, подсказки и AiAgentInput.
 * Вся логика ответа на стороне стори, компонент только рисует.
 */
export function DemoChat({
  title,
  messages,
  draft,
  onDraftChange,
  onSend,
  busy = false,
  suggestions = [],
  onSuggestion,
  placeholder = 'Опишите, что нужно сделать',
  extraAction,
  style,
}: DemoChatProps) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView?.({ block: 'end' });
  }, [messages]);

  const send = () => {
    if (busy || !draft.trim()) return;
    onSend();
  };

  return (
    <AiAgentSurface style={{ height: '100%', ...style }}>
      <div style={{ ...rowStyle, justifyContent: 'space-between' }}>
        <div style={rowStyle}>
          <IconSearchAIOutline size="s" color={textAccentGradient} />
          <Typography variant="BodyM" bold>
            {title}
          </Typography>
        </div>
        <Badge size="s" view="warning" text="Демо: LLM имитируется" pilled />
      </div>

      <div style={messagesStyle}>
        {messages.map((message) =>
          message.role === 'user' ? (
            <div key={message.id} style={userBubbleStyle}>
              {message.attachment && (
                <div style={{ ...rowStyle, marginBottom: 4 }}>
                  <IconFileTextOutline size="xs" color={textSecondary} />
                  <Typography variant="BodyXS" style={{ color: textSecondary }}>
                    {message.attachment}
                  </Typography>
                </div>
              )}
              <Typography variant="BodyS">{message.text}</Typography>
            </div>
          ) : (
            <div key={message.id} style={assistantStyle}>
              {message.steps && message.steps.length > 0 && (
                <Steps steps={message.steps} />
              )}
              {message.text && (
                <Typography variant="BodyS">{message.text}</Typography>
              )}
              {message.actions && (
                <div style={{ ...rowStyle, flexWrap: 'wrap' }}>
                  {message.actions}
                </div>
              )}
            </div>
          ),
        )}
        <div ref={endRef} />
      </div>

      {suggestions.length > 0 && !busy && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            marginBottom: 8,
          }}
        >
          {suggestions.map((text) => (
            <Chip
              key={text}
              size="xs"
              view="default"
              pilled
              hasClear={false}
              text={text}
              onClick={() => onSuggestion?.(text)}
            />
          ))}
        </div>
      )}

      <AiAgentInput
        glow={busy}
        placeholder={placeholder}
        value={draft}
        onChange={(e) => onDraftChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            send();
          }
        }}
        rightSlot={
          <div style={rowStyle}>
            {extraAction}
            <IconButton
              size="xs"
              view="clear"
              onClick={send}
              disabled={busy}
              aria-label="Отправить"
            >
              <IconSendOutline size="s" color={textAccentGradient} />
            </IconButton>
          </div>
        }
      />
    </AiAgentSurface>
  );
}
