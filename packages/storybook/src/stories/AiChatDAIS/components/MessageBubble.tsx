import { Chip } from '@ui-kit/components/Chip';
import { Divider } from '@ui-kit/components/Divider';
import { IconLink, IconSendOutline } from '@ui-kit/icons';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize, { defaultSchema, Options } from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

import { CHAT_URL, FILTERS_ARRAY, TYPING_CLASS } from '../constants';
import { ContentType, Message } from '../types';
import { CopyMessageButton } from './CopyMessageButton';
import { MD_COMPONENTS } from './MDComponents';

// 1. Создаем кастомную схему очистки
const customSchema: Options = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [
      ...(defaultSchema.attributes?.code || []),
      ['className', /^language-./]
    ]
  }
};

function isNoInfoResponse(text: string): boolean {
  const lower = text.toLowerCase();
  return lower.includes('отсутствует в документации');
}

// П.10: Метка для типа
function contentTypeLabel(type: ContentType): string {
  switch (type) {
    case 'dev':
      return 'разработки';
    case 'editorial':
      return 'редполитики';
    case 'design':
      return 'дизайна';
    default:
      return '';
  }
}

export interface MessageBubbleProps {
  message: Message;
  contentType: ContentType;
  onSwitchContentType?: (type: ContentType) => void;
  send: (text?: string) => void;
}

export function MessageBubble({
  message,
  contentType,
  onSwitchContentType,
  send
}: MessageBubbleProps) {
  const isAssistant = message.role === 'assistant';
  const isTypingMessage = message.className?.includes?.(TYPING_CLASS);

  // Какие разделы доступны для переключения
  const [switchTypes, setSwitchType] = useState<ContentType[]>(
    FILTERS_ARRAY.filter((t) => t.value !== contentType && !t.disabled).map(
      (t) => t.value as ContentType
    )
  );

  // Проверяем, что ответ — "не найдено" и у нас есть колбэк
  const showSwitchChips =
    isAssistant &&
    !isTypingMessage &&
    message.text &&
    onSwitchContentType &&
    message.userQuestion &&
    isNoInfoResponse(message.text);

  const showCopy =
    isAssistant && !isTypingMessage && message.text && !showSwitchChips;

  return (
    <div className={`message ${message.role}`}>
      <div className="bubble">
        {isTypingMessage && (
          <div className={TYPING_CLASS}>
            <span />
            <span />
            <span />
          </div>
        )}
        {isAssistant && message.text ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={MD_COMPONENTS}
            rehypePlugins={[[rehypeSanitize, customSchema]]}
          >
            {message.text}
          </ReactMarkdown>
        ) : (
          message.text
        )}
        {showCopy && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '4px'
            }}
          >
            <CopyMessageButton text={message.text} />
          </div>
        )}

        {/* Чипы для переключения раздела */}
        {showSwitchChips && switchTypes.length > 0 && (
          <>
            <Divider className="no-info-divider" />
            <div className="no-info-text">
              Можно задать этот вопрос в{' '}
              <MD_COMPONENTS.a href={CHAT_URL}>чате поддержки</MD_COMPONENTS.a>{' '}
              или:
            </div>
            <div className="no-info-chips">
              {switchTypes.map((type) => (
                <Chip
                  key={type}
                  pilled
                  size="xs"
                  text={`Искать в разделе ${contentTypeLabel(type)}`}
                  view="accent"
                  appearance="transparent"
                  hasClear={false}
                  onClick={() => {
                    onSwitchContentType?.(type);
                    setSwitchType([]);
                    if (message.userQuestion) {
                      send(message.userQuestion);
                    }
                  }}
                  contentRight={<IconSendOutline size="xs" color="inherit" />}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {message.sources && message.sources.length > 0 && (
        <div className="sources">
          {message.sources.map((source) => (
            <Chip
              className="source-tag"
              key={source.componentName}
              text={`${source.componentName} · ${source.chunkType}`}
              size="xxs"
              title={source.meta.url}
              view="accent"
              appearance="transparent"
              onClick={() => {
                window.open(source.meta.url, '_blank', 'noopener,noreferrer');
              }}
              hasClear={false}
              contentRight={<IconLink size="xs" color="inherit" />}
            />
          ))}
        </div>
      )}
    </div>
  );
}
