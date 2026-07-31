/* eslint-disable @typescript-eslint/no-use-before-define */
import { generateId } from '@df-storybook/utils/generateId';
import { Button } from '@ui-kit/components/Button';
import { Chip } from '@ui-kit/components/Chip';
import { IconButton } from '@ui-kit/components/IconButton';
import { ModalDFConfirmation } from '@ui-kit/components/ModalDFConfirmation';
import { TextArea } from '@ui-kit/components/TextArea';
import {
  IconMessageOutline,
  IconSendOutline,
  IconTrashOutline,
} from '@ui-kit/icons';
import { GlobalStyle } from '@ui-kit/styles';
import {
  bodyS,
  h2,
  inverseTextPrimary,
  lightBackgroundPrimary,
  textAccent,
  textPrimary,
} from '@ui-kit/tokens';
import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';

import { MessageBubble } from './components/MessageBubble';
import {
  FILTERS_ARRAY,
  GLOBAL_STORE,
  LOCAL_STORAGE_KEYS,
  PLACEHOLDER_MAP,
  QUICK_CHIPS_MAP,
  TITLE_MAP,
  TYPING_CLASS,
} from './constants';
import {
  ChatHistory,
  ContentType,
  GlobalStore,
  Message,
  Source,
} from './types';

// ----------------------------------------------------------- Основной компонент -----------------------------------------------------------
export const AiChatDAIS = () => {
  const [clearModalOpened, setClearModalOpened] = useState(false);
  const [messages, _setMessages] = useState<Message[]>(GLOBAL_STORE.messages);
  const [chatHistory, _setChatHistory] = useState<ChatHistory[]>(
    GLOBAL_STORE.chatHistory,
  );
  const [inputValue, _setInputValue] = useState(GLOBAL_STORE.inputValue);
  const [contentType, _setContentType] = useState(GLOBAL_STORE.contentType);
  const [isSending, setIsSending] = useState(false);
  const initialChipsVisible = messages.length === 0;

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaContainerRef = useRef<HTMLDivElement>(null);

  const setMessages: typeof _setMessages = (messagesArg) => {
    _setMessages((prev) => {
      let newMessages = prev;
      if (typeof messagesArg !== 'function') {
        newMessages = messagesArg;
      } else {
        newMessages = messagesArg(prev);
      }

      GLOBAL_STORE.messages = newMessages.filter(
        (m) => !m.className?.includes(TYPING_CLASS),
      );
      return newMessages;
    });
  };
  const setChatHistory: typeof _setChatHistory = (chatHistoryArg) => {
    _setChatHistory((prev) => {
      let newChatHistory = prev;
      if (typeof chatHistoryArg !== 'function') {
        newChatHistory = chatHistoryArg;
      } else {
        newChatHistory = chatHistoryArg(prev);
      }

      GLOBAL_STORE.chatHistory = newChatHistory;
      return newChatHistory;
    });
  };
  const setInputValue: typeof _setInputValue = (inputValueArg) => {
    _setInputValue((prev) => {
      let newInputValue = prev;
      if (typeof inputValueArg !== 'function') {
        newInputValue = inputValueArg;
      } else {
        newInputValue = inputValueArg(prev);
      }

      GLOBAL_STORE.inputValue = newInputValue;
      return newInputValue;
    });
  };

  const setContentType: typeof _setContentType = (contentTypeArg) => {
    _setContentType((prev) => {
      let newContentType = prev;
      if (typeof contentTypeArg !== 'function') {
        newContentType = contentTypeArg;
      } else {
        newContentType = contentTypeArg(prev);
      }

      GLOBAL_STORE.contentType = newContentType;
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.contentType,
        newContentType ?? '',
      );
      return newContentType;
    });
  };

  // Прокрутка вниз при новых сообщениях
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Обработка фильтров
  const handleFilterClick = (value: GlobalStore['contentType']) => {
    setContentType(value || null);
  };

  // Добавление сообщения
  const addMessage = useCallback(
    (
      role: 'user' | 'assistant',
      text: string,
      userQuestion: string | null,
      sources?: Source[],
    ) => {
      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          role,
          text,
          sources,
          userQuestion,
        },
      ]);
    },
    [],
  );

  // Добавление индикатора печати
  const addTyping = useCallback(() => {
    const typingId = `${TYPING_CLASS}-${generateId()}`;
    setMessages((prev) => [
      ...prev,
      {
        id: typingId,
        className: TYPING_CLASS,
        role: 'assistant',
        text: '',
        sources: undefined,
        userQuestion: null,
      },
    ]);
    return typingId;
  }, []);

  // Удаление индикатора печати
  const removeTyping = useCallback((id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  }, []);

  // Отправка сообщения
  const send = async (quickJumpMessageText?: string) => {
    const message = (quickJumpMessageText ?? inputValue).trim();
    if (!message || isSending) return;

    setInputValue('');
    setIsSending(true);

    // Удалить empty state при первом сообщении
    if (messages.length === 0) {
      setMessages([]);
    }

    addMessage('user', message, '');
    const typingId = addTyping();

    try {
      const resPath = '/ai-rag-api/v0/rag';

      const res = await fetch(resPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: generateId(),
          message,
          chat_history: chatHistory,
          content_type: contentType,
        }),
      });

      const data = await res.json();

      removeTyping(typingId);
      const errorMessageFromBackend =
        data.detail ?? data.message ?? 'неизвестная ошибка';
      if (res.status >= 400 && errorMessageFromBackend) {
        addMessage(
          'assistant',
          `⚠️ Ошибка: ${JSON.stringify(errorMessageFromBackend)}`,
          null,
        );
      } else {
        addMessage('assistant', data.response, message, data.sources);
        setChatHistory((prev) => [
          ...prev,
          { role: 'human', content: message },
          { role: 'ai', content: data.response },
        ]);
      }
    } catch {
      removeTyping(typingId);
      addMessage('assistant', '⚠️ Не удалось связаться с сервером.', null);
    }

    setIsSending(false);
  };

  // Обработка клика по быстрому чипу
  const handleQuickChipClick = (chipText: string) => {
    send(chipText);
  };

  // П.10: Обработка переключения раздела по чипу "поискать в..."
  const handleSwitchContentType = (type: ContentType) => {
    setContentType(type);
  };

  // Очистка истории
  const clearHistory = () => {
    setMessages([]);
    setChatHistory([]);

    setClearModalOpened(false);
  };

  // Обработка нажатия Enter в textarea
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  // Обработка изменения textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const currentPlaceholder =
    PLACEHOLDER_MAP[contentType || 'dev'] || PLACEHOLDER_MAP.dev;

  const [textareaIsMultiline, setTextareaIsMultiline] = useState(false);
  useEffect(() => {
    const textareaContainer = textareaContainerRef.current;
    if (!textareaContainer) return;

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        // Округляем полученную высоту контента
        const currentHeight = Math.round(entry.contentRect.height);
        const isMultiLine = currentHeight > 52;
        if (isMultiLine) {
          setTextareaIsMultiline(true);
        } else {
          setTextareaIsMultiline(false);
        }
      });
    });

    observer.observe(textareaContainer);

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledDiv className="sb-unstyled">
        <div className="chat-wrapper">
          <div className="chat-header">
            <span>◈</span> DAIS ассистент FinAI
          </div>

          <div className="messages">
            {messages.length === 0 && (
              <div className="empty-state">
                <IconMessageOutline color="inherit" />
                <div>{TITLE_MAP[contentType || 'dev']}</div>
                {initialChipsVisible && (
                  <div className="quick-chips">
                    {(QUICK_CHIPS_MAP[contentType || 'dev'] || []).map(
                      (chip) => (
                        <Chip
                          view="accent"
                          appearance="transparent"
                          pilled
                          key={chip.text}
                          size="xs"
                          text={chip.text}
                          hasClear={false}
                          onClick={() => handleQuickChipClick(chip.text)}
                        />
                      ),
                    )}
                  </div>
                )}
              </div>
            )}
            {messages.map((msg) => (
              <MessageBubble
                key={msg.id}
                message={msg}
                contentType={contentType}
                onSwitchContentType={handleSwitchContentType}
                send={send}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="bottom-bar">
            <div className="filter-bar">
              {FILTERS_ARRAY.map((filter) => (
                <Chip
                  key={filter.value}
                  size="xs"
                  value={filter.value ?? ''}
                  text={filter.label}
                  view={
                    contentType === filter.value ||
                    contentType === filter?.value2
                      ? 'accent'
                      : 'clear'
                  }
                  hasClear={false}
                  onClick={() => handleFilterClick(filter.value || null)}
                  disabled={filter.disabled}
                />
              ))}
            </div>
            <div className="bottom-bar-right">
              <Button
                disabled={messages.length === 0}
                view="secondary"
                size="xxs"
                className="clear-history-btn"
                onClick={() => setClearModalOpened(true)}
                title="Очистить историю поиска"
                type="button"
                contentRight={<IconTrashOutline color="inherit" size="xs" />}
              >
                Очистить историю поиска
              </Button>
            </div>
          </div>

          <div className="chat-input-area">
            <div className="input-wrapper" ref={textareaContainerRef}>
              <TextArea
                id="input"
                autoResize
                maxAuto={5}
                value={inputValue}
                placeholder={currentPlaceholder}
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
              />
              <div
                className="send-button-wrapper"
                style={
                  {
                    '--offsetBottom': textareaIsMultiline ? '6px' : '4.5px',
                  } as CSSProperties
                }
              >
                <IconButton
                  view="accent"
                  size="xs"
                  id="send"
                  onClick={() => send()}
                  type="button"
                  disabled={isSending}
                >
                  <IconSendOutline size="xs" color="inherit" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </StyledDiv>
      <ModalDFConfirmation
        view="negative"
        icon={<IconTrashOutline color="inherit" />}
        opened={clearModalOpened}
        onClose={() => setClearModalOpened(false)}
        content={{
          header: 'Очистить историю поиска?',
          body: 'Будут удалены все вопросы агенту и ответы на них. Восстановить историю поиска не получится',
          mainButton: {
            text: 'Очистить',
            view: 'negative',
            onClick: clearHistory,
          },
          secondaryButton: {
            text: 'Отменить',
            onClick: () => setClearModalOpened(false),
          },
        }}
      />
    </>
  );
};

// ----------------------------------------------------------- Стили -----------------------------------------------------------
const StyledDiv = styled.div`
  & :where(*:not([class])),
  & :where(*:not([class])::before),
  & :where(*:not([class])::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  height: 100%;
  max-height: 87dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .chat-wrapper {
    width: 100%;
    max-width: 780px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .chat-header {
    padding: 16px 0px;

    display: flex;
    align-items: center;
    gap: 8px;

    ${() => css(h2)}
  }

  .messages {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .message {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 85%;
  }

  .message.user {
    align-self: flex-end;
    align-items: flex-end;
  }

  .message.assistant {
    align-self: flex-start;
    align-items: flex-start;
  }

  .bubble {
    max-width: 100%; // нужен, чтобы внутренний контент не растягивал контейнеры
    padding: 10px 14px;
    border-radius: 12px;
    font-size: 14px;
    line-height: 1.6;
    ${() => css(bodyS)}
  }
  .no-info-divider {
    margin-block: 8px;
  }
  .no-info-text {
    margin-top: 6px;
  }
  .no-info-chips {
    margin-top: 12px;
    display: flex;
    gap: 8px;
  }

  .message.user .bubble {
    background: ${() => textAccent};
    color: ${() => inverseTextPrimary};

    border-bottom-right-radius: 4px;
  }

  .message.assistant .bubble {
    background: ${() => lightBackgroundPrimary};
    color: ${() => textPrimary};
    border-bottom-left-radius: 4px;
  }

  .bubble code {
    background: rgba(0, 0, 0, 0.08);
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 13px;
  }

  .bubble p {
    margin-bottom: 6px;
  }

  .bubble p:last-child {
    margin-bottom: 0;
  }

  .bubble ul,
  .bubble ol {
    padding-left: 18px;
    margin-bottom: 6px;
  }

  .sources {
    display: flex;
    flex-direction: column;
    align-items: start;

    flex-wrap: wrap;
    gap: 4px;
    margin-top: 6px;
  }

  .typing {
    display: flex;
    gap: 4px;
    background: #f4f4f5;
    border-radius: 12px;
    border-bottom-left-radius: 4px;

    align-items: center;
    height: ${bodyS.lineHeight};
  }

  .typing span {
    width: 7px;
    height: 7px;
    background: #9ca3af;
    border-radius: 50%;
    animation: bounce 1.2s infinite;
  }

  .typing span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .typing span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(-6px);
    }
  }

  /* Блок с чипами и кнопкой очистки внизу над инпутом */
  .bottom-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    border-top: 1px solid #eee;

    .filter-bar {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .bottom-bar-right {
      display: flex;
      align-items: center;
      margin-left: auto;
      flex-shrink: 0;
    }
  }

  .quick-chips {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* Инпут с кнопкой отправки внутри */
  .chat-input-area {
    display: flex;

    .input-wrapper {
      display: flex;
      align-items: flex-end;
      gap: 0;
      width: 100%;
      position: relative;

      .send-button-wrapper {
        position: absolute;
        bottom: var(--offsetBottom, 4px);
        right: 6px;
      }
    }
  }

  .empty-state {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #9ca3af;

    ${() => css(bodyS)}
  }
`;
