/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import type { AiAgentLeftPanelItem } from '@ui-kit/components/AiAgentPopup';
import { AiAgentInput, AiAgentPopup } from '@ui-kit/components/AiAgentPopup';
import { IconButton } from '@ui-kit/components/IconButton';
import { PopupProvider } from '@ui-kit/components/Popup';
import { SSRProvider } from '@ui-kit/components/SSRProvider';
import { Typography } from '@ui-kit/components/Typography';
import { br, s } from '@ui-kit/constants';
import {
  IconCalendarEventOutline,
  IconCatalogOutline,
  IconClose,
  IconDoneCircleOutline,
  IconHistory,
  IconMessageAddOutline,
  IconSearchAIOutline,
  IconSendOutline,
  IconSettingsOutline,
  IconStar,
  IconTrashOutline,
} from '@ui-kit/icons';
import {
  backgroundPrimary,
  surfaceAccentMinor,
  surfaceTransparentSecondary,
  textAccentGradient,
  textInfo,
  textPrimary,
} from '@ui-kit/tokens';
import React, { useLayoutEffect, useRef, useState } from 'react';

type AiAgentPopupStoryArgs = React.ComponentProps<typeof AiAgentPopup> & {
  glow?: boolean;
};

type ChatMessage = { text: string; system?: boolean };

// Состояние чата живёт снаружи окна: закрытие окна размонтирует контент,
// а переписка и черновик это переживают
function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: 'Привет! Я AI-помощник. Это сообщение помечено data-no-drag: текст в нём можно выделять, перетаскивание с него не начинается.',
    },
    {
      text: 'А за свободные места, включая просветы между сообщениями, окно можно перетащить. Растянуть за угол с иконкой, закрыть крестиком.',
    },
    {
      text: 'Окно не заезжает на серый сайдбар слева: левая граница перетаскивания (dragBoundary) равна его ширине.',
    },
    {
      text: 'Иконки слева в окне открывают разделы: история, задачи, календарь. Из раздела назад к иконкам ведёт крестик. Избранное выключено, внизу настройки и корзина: она очищает чат без открытия раздела.',
    },
    {
      text: 'Поле ввода авторастёт: набери несколько строк через Shift+Enter, свечение поднимется вместе с верхним краем поля.',
    },
    {
      text: 'Закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи.',
    },
    { text: 'Анализирую ваш запрос…', system: true },
  ]);
  const [draft, setDraft] = useState('');

  const send = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, { text: draft.trim() }]);
    setDraft('');
  };

  const clear = () => setMessages([]);

  return { messages, draft, setDraft, send, clear };
}

// Пункты левой панели: разделы сверху, выключенный раздел, снизу раздел
// настроек и кнопка-действие без раздела (только onClick)
function getLeftPanelItems(onClearChat: () => void): AiAgentLeftPanelItem[] {
  const sectionBodyStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 12,
    height: '100%',
    overflow: 'auto',
  };

  return [
    {
      key: 'history',
      icon: <IconHistory size="s" />,
      title: 'История',
      content: (
        <div style={sectionBodyStyle}>
          <Typography variant="BodyS">Вчера: вопросы по таблицам</Typography>
          <Typography variant="BodyS">2 дня назад: настройка форм</Typography>
          <Typography variant="BodyS">Неделю назад: обзор дашбордов</Typography>
        </div>
      ),
    },
    {
      key: 'tasks',
      icon: <IconDoneCircleOutline size="s" />,
      title: 'Задачи',
      content: (
        <div style={sectionBodyStyle}>
          <Typography variant="BodyS">Проверить отчёт</Typography>
          <Typography variant="BodyS">Согласовать макет</Typography>
        </div>
      ),
    },
    {
      key: 'calendar',
      icon: <IconCalendarEventOutline size="s" />,
      title: 'Календарь',
      content: (
        <div style={sectionBodyStyle}>
          <Typography variant="BodyS">Сегодня: созвон в 15:00</Typography>
          <Typography variant="BodyS">Завтра: демо в 12:00</Typography>
        </div>
      ),
    },
    {
      key: 'favorites',
      icon: <IconStar size="s" />,
      title: 'Избранное',
      disabled: true,
      content: (
        <div style={sectionBodyStyle}>
          <Typography variant="BodyS">Избранных ответов пока нет</Typography>
        </div>
      ),
    },
    {
      key: 'settings',
      icon: <IconSettingsOutline size="s" />,
      title: 'Настройки',
      placement: 'bottom',
      content: (
        <div style={sectionBodyStyle}>
          <Typography variant="BodyS">Язык ответов: русский</Typography>
        </div>
      ),
    },
    {
      key: 'clear',
      icon: <IconTrashOutline size="s" />,
      placement: 'bottom',
      onClick: onClearChat,
    },
  ];
}

// Шапка окна по макету: иконка AI и заголовок AI-Chat слева, кнопки-иконки
// справа, крестик закрывает окно
function ChatHeader({ onClose }: { onClose: () => void }) {
  const groupStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };
  // Иконка у заголовка не кликается, но стоит в том же квадрате 40x40,
  // что и кнопки шапки
  const titleIconStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  };

  return (
    <div style={{ ...groupStyle, justifyContent: 'space-between' }}>
      <div style={groupStyle}>
        <span style={titleIconStyle}>
          {/* плазма-иконки умеют градиент в color: рисуют её маской */}
          <IconSearchAIOutline size="s" color={textAccentGradient} />
        </span>
        <Typography variant="BodyM" bold>
          AI-Chat
        </Typography>
      </div>
      <div style={groupStyle}>
        <IconButton size="s" view="clear">
          <IconMessageAddOutline size="s" />
        </IconButton>
        <IconButton size="s" view="clear" onClick={onClose}>
          <IconClose size="s" />
        </IconButton>
      </div>
    </div>
  );
}

// Контент окна полностью на стороне потребителя, здесь один из вариантов
function ChatContent({
  messages,
  draft,
  glow,
  onDraftChange,
  onSend,
  onClose,
}: {
  messages: ChatMessage[];
  draft: string;
  glow?: boolean;
  onDraftChange: (draft: string) => void;
  onSend: () => void;
  onClose: () => void;
}) {
  const messagesStyle: React.CSSProperties = {
    flex: '1 1 auto',
    minHeight: 0,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '12px',
  };
  const bubbleStyle: React.CSSProperties = {
    background: surfaceAccentMinor,
    borderRadius: br.s,
    padding: '10px 12px',
    color: textPrimary,
  };
  // Сообщение от системы: без фона, свечение поля ввода ложится прямо
  // под текст, буквы остаются читаемыми поверх градиента
  const systemMessageStyle: React.CSSProperties = {
    padding: '0 12px',
    color: textInfo,
  };

  return (
    <>
      <ChatHeader onClose={onClose} />
      {/* data-no-drag стоит точечно на сообщениях: их текст выделяется, а за
          просветы между ними и остальные свободные места окно перетаскивается */}
      <div style={messagesStyle}>
        {messages.map((message, index) => (
          <Typography
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            variant="BodyS"
            style={message.system ? systemMessageStyle : bubbleStyle}
            data-no-drag
          >
            {message.text}
          </Typography>
        ))}
      </div>
      {/* Отступов вокруг AiAgentInput нет: по дизайну поле прижато
          к ленте сообщений */}
      <AiAgentInput
        glow={glow}
        placeholder="Спросите что-нибудь"
        value={draft}
        onChange={(e) => onDraftChange(e.target.value)}
        rightSlot={
          <IconButton size="xs" view="clear" onClick={onSend}>
            {/* плазма-иконки умеют градиент в color: рисуют её маской */}
            <IconSendOutline size="s" color={textAccentGradient} />
          </IconButton>
        }
      />
    </>
  );
}

// Сайдбар страницы с кнопкой AI-помощника: окно открывается справа
// от неё, targetRef висит на обёртке кнопки
function Sidebar({
  sidebarRef,
  targetRef,
  onToggle,
}: {
  sidebarRef: React.RefObject<HTMLDivElement>;
  targetRef: React.RefObject<HTMLSpanElement>;
  onToggle: () => void;
}) {
  return (
    <div
      ref={sidebarRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: s.x2,
        background: surfaceTransparentSecondary,
      }}
    >
      <span ref={targetRef}>
        <IconButton size="s" view="clear" onClick={onToggle}>
          <IconCatalogOutline size="s" />
        </IconButton>
      </span>
    </div>
  );
}

// Левая граница перетаскивания равна ширине сайдбара: окно не заезжает
// на него. Ширину следим наблюдателем, а не одним замером, чтобы граница
// не отставала при изменении размеров сайдбара
function useSidebarWidth(ref: React.RefObject<HTMLElement>) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const update = () => setWidth(node.offsetWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);
  return width;
}

// Импорты, тип и вспомогательные функции примера. Функции берутся
// из этого файла как есть, сам пример показывается из render стори
const preCode = `import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  AiAgentInput,
  AiAgentPopup,
  backgroundPrimary,
  IconButton,
  PopupProvider,
  SSRProvider,
  surfaceAccentMinor,
  surfaceTransparentSecondary,
  textAccentGradient,
  textInfo,
  textPrimary,
  Typography,
} from '@daisforge/ui';
import type { AiAgentLeftPanelItem } from '@daisforge/ui';
import { br, s } from '@daisforge/ui/constants';
import {
  IconCalendarEventOutline,
  IconCatalogOutline,
  IconClose,
  IconDoneCircleOutline,
  IconHistory,
  IconMessageAddOutline,
  IconSearchAIOutline,
  IconSendOutline,
  IconSettingsOutline,
  IconStar,
  IconTrashOutline,
} from '@daisforge/ui/icons';

type ChatMessage = { text: string; system?: boolean };

${getFuncAsString(
  'packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx',
  'useChat',
)}

${getFuncAsString(
  'packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx',
  'getLeftPanelItems',
)}

${getFuncAsString(
  'packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx',
  'ChatHeader',
)}

${getFuncAsString(
  'packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx',
  'ChatContent',
)}

${getFuncAsString(
  'packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx',
  'Sidebar',
)}

${getFuncAsString(
  'packages/storybook/src/stories/AiAgentPopup/AiAgentPopup.stories.tsx',
  'useSidebarWidth',
)}

`;

const hiddenArgType = {
  control: false,
  table: { disable: true },
} as const;

const mainArgTypes = {
  opened: hiddenArgType,
  frame: hiddenArgType,
  targetRef: hiddenArgType,
  targetGap: hiddenArgType,
  defaultPosition: hiddenArgType,
  positionState: hiddenArgType,
  onPositionChange: hiddenArgType,
  draggable: hiddenArgType,
  dragBoundary: hiddenArgType,
  dragIgnoreSelector: hiddenArgType,
  useStorage: hiddenArgType,
  resizable: hiddenArgType,
  defaultSize: hiddenArgType,
  onSizeChange: hiddenArgType,
  leftPanel: hiddenArgType,
  glow: hiddenArgType,
};

const meta: Meta<AiAgentPopupStoryArgs> = {
  title: 'Локальные компоненты/AiAgentPopup',
  component: AiAgentPopup,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    targetRef: hiddenArgType,
    frame: hiddenArgType,
    positionState: hiddenArgType,
    onPositionChange: hiddenArgType,
    onSizeChange: hiddenArgType,
    opened: hiddenArgType,
    leftPanel: hiddenArgType,
    draggable: { control: 'boolean' },
    resizable: { control: 'boolean' },
    useStorage: { control: 'boolean' },
    glow: {
      control: 'boolean',
      description: 'Свечение поля ввода (проп AiAgentInput в примере)',
    },
    targetGap: { control: 'number' },
    dragIgnoreSelector: { control: 'text' },
    defaultPosition: { control: 'object' },
    defaultSize: { control: 'object' },
    dragBoundary: {
      control: 'object',
      description:
        'Отступы от краёв. В примере left отсчитывается от правого края сайдбара',
    },
  },
  args: {
    draggable: true,
    resizable: true,
    useStorage: false,
    glow: true,
    targetGap: 12,
    defaultSize: { width: 680, height: 540 },
    dragBoundary: { top: 8, right: 8, bottom: 8, left: 0 },
  },
};

export default meta;

type Story = StoryObj<AiAgentPopupStoryArgs>;

export const Simple: Story = {
  name: 'Simple',
  argTypes: mainArgTypes,
  args: {},
  parameters: {
    controls: {
      disable: true,
      exclude: /.*/,
    },
    docs: {
      controls: {
        exclude: /.*/,
      },
    },
  },
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  render() {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLSpanElement>(null);
    // frame нужен только в стори: изолирует окно в рамках примера, чтобы
    // примеры на странице документации не мешали друг другу. В продуктовом
    // коде frame не передавайте, окно живёт поверх всей страницы
    const frameRef = useRef<HTMLDivElement>(null);
    const sidebarWidth = useSidebarWidth(sidebarRef);
    const [opened, setOpened] = useState(true);
    // Открытый раздел левой панели, null: видна полоса иконок
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const chat = useChat();

    // SSRProvider и PopupProvider обычно уже подключены на уровне приложения
    return (
      <SSRProvider>
        <PopupProvider>
          <div
            ref={frameRef}
            style={{
              position: 'relative',
              display: 'flex',
              height: '100vh',
              minHeight: 640,
              overflow: 'hidden',
              backgroundColor: backgroundPrimary,
            }}
          >
            <Sidebar
              sidebarRef={sidebarRef}
              targetRef={targetRef}
              onToggle={() => setOpened(!opened)}
            />
            <AiAgentPopup
              opened={opened}
              targetRef={targetRef}
              frame={frameRef}
              // Пока окно не умеет само расширяться при открытии раздела,
              // стартуем шире размера по умолчанию
              defaultSize={{ width: 680, height: 540 }}
              dragBoundary={{ top: 8, right: 8, bottom: 8, left: sidebarWidth }}
              leftPanel={{
                items: getLeftPanelItems(chat.clear),
                activeKey: activeSection,
                onActiveKeyChange: setActiveSection,
              }}
            >
              <ChatContent
                glow
                messages={chat.messages}
                draft={chat.draft}
                onDraftChange={chat.setDraft}
                onSend={chat.send}
                onClose={() => setOpened(false)}
              />
            </AiAgentPopup>
          </div>
        </PopupProvider>
      </SSRProvider>
    );
  },
};

export const Playground: Story = {
  name: 'Playground',
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  render: ({ glow, dragBoundary, ...popupArgs }) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLSpanElement>(null);
    // frame нужен только в стори, в продуктовом коде его не передавайте
    const frameRef = useRef<HTMLDivElement>(null);
    const sidebarWidth = useSidebarWidth(sidebarRef);
    const [opened, setOpened] = useState(true);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const chat = useChat();

    return (
      <SSRProvider>
        <PopupProvider>
          <div
            ref={frameRef}
            style={{
              position: 'relative',
              display: 'flex',
              height: '100vh',
              minHeight: 640,
              overflow: 'hidden',
              backgroundColor: backgroundPrimary,
            }}
          >
            <Sidebar
              sidebarRef={sidebarRef}
              targetRef={targetRef}
              onToggle={() => setOpened(!opened)}
            />
            <AiAgentPopup
              {...popupArgs}
              opened={opened}
              targetRef={targetRef}
              frame={frameRef}
              // left в dragBoundary отсчитывается от правого края сайдбара
              dragBoundary={{
                ...dragBoundary,
                left: sidebarWidth + (dragBoundary?.left ?? 0),
              }}
              leftPanel={{
                items: getLeftPanelItems(chat.clear),
                activeKey: activeSection,
                onActiveKeyChange: setActiveSection,
              }}
            >
              <ChatContent
                glow={glow}
                messages={chat.messages}
                draft={chat.draft}
                onDraftChange={chat.setDraft}
                onSend={chat.send}
                onClose={() => setOpened(false)}
              />
            </AiAgentPopup>
          </div>
        </PopupProvider>
      </SSRProvider>
    );
  },
};
