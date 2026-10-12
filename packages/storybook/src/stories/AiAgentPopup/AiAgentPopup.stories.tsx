/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
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

const preCode = `import { useLayoutEffect, useRef, useState } from 'react';
import {
  AiAgentInput,
  AiAgentPopup,
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
import {
  IconCalendarEventOutline,
  IconCatalogOutline,
  IconClose,
  IconDoneCircleOutline,
  IconHistory,
  IconMessageAddOutline,
  IconSearchAIOutline,
  IconSendOutline,
} from '@daisforge/ui/icons';

// Весь контент окна на стороне потребителя, ниже один из вариантов сборки.
// Состояние чата и открытый раздел левой панели держим снаружи окна:
// закрытие окна размонтирует контент, а состояние снаружи это переживает.

// Левый сайдбар страницы с кнопкой AI-помощника: окно откроется справа
// от неё, targetRef висит на обёртке кнопки
const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  background: surfaceTransparentSecondary,
};

function Sidebar({ sidebarRef, targetRef, onToggle }) {
  return (
    <div ref={sidebarRef} style={sidebarStyle}>
      <span ref={targetRef}>
        <IconButton size="s" view="clear" onClick={onToggle}>
          <IconCatalogOutline size="s" />
        </IconButton>
      </span>
    </div>
  );
}

// Левая граница перетаскивания равна ширине сайдбара: окно не заезжает
// на него. Ширину следим наблюдателем, а не одним замером
function useSidebarWidth(ref) {
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

const chatHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

// Иконка у заголовка не кликается, но стоит в том же квадрате 40x40,
// что и кнопки шапки
const chatTitleIconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
};

const chatMessagesStyle = {
  flex: '1 1 auto',
  minHeight: 0,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '12px',
};

const chatBubbleStyle = {
  background: surfaceAccentMinor,
  borderRadius: '8px',
  padding: '10px 12px',
  color: textPrimary,
};

// Сообщение от системы: без фона, свечение ложится прямо под текст
const systemMessageStyle = {
  padding: '0 12px',
  color: textInfo,
};

// Кнопки не начинают перетаскивание, по ним работают обычные клики
function ChatHeader({ onClose }) {
  return (
    <div style={chatHeaderStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={chatTitleIconStyle}>
          <IconSearchAIOutline size="s" color={textAccentGradient} />
        </span>
        <Typography variant="BodyM" bold>
          AI-Chat
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
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

function ChatContent({
  messages,
  draft,
  onDraftChange,
  onSend,
  onClose,
}) {
  return (
    <>
      <ChatHeader onClose={onClose} />
      <div style={chatMessagesStyle}>
        {messages.map((message, index) => (
          <Typography
            key={index}
            variant="BodyS"
            style={message.system ? systemMessageStyle : chatBubbleStyle}
            data-no-drag
          >
            {message.text}
          </Typography>
        ))}
      </div>
      {/* Отступов вокруг AiAgentInput нет: по дизайну поле прижато
          к ленте сообщений */}
      <AiAgentInput
        glow
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

const sectionBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '12px',
  height: '100%',
  overflow: 'auto',
};


// Разделы левой панели окна: иконка в полосе, заголовок и контент раздела
const leftPanelItems = [
  {
    key: 'history',
    icon: <IconHistory size="s" />,
    title: 'История',
    content: (
      <div style={sectionBodyStyle}>
        <Typography variant="BodyS">Вчера: вопросы по таблицам</Typography>
        <Typography variant="BodyS">2 дня назад: настройка форм</Typography>
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
      </div>
    ),
  },
];
`;

const exampleBody = (popupProps: string) => `
function Example() {
  const sidebarRef = useRef(null);
  const targetRef = useRef(null);
  const sidebarWidth = useSidebarWidth(sidebarRef);
  const [opened, setOpened] = useState(false);
  // открытый раздел левой панели; null — видна полоса иконок
  const [activeSection, setActiveSection] = useState(null);
  const [messages, setMessages] = useState([
    { text: 'Привет! Я AI-помощник.' },
    { text: 'Анализирую ваш запрос…', system: true },
  ]);
  const [draft, setDraft] = useState('');

  const send = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, { text: draft.trim() }]);
    setDraft('');
  };

  // SSRProvider и PopupProvider обычно уже подключены на уровне приложения
  return (
    <SSRProvider>
      <PopupProvider>
        <div style={{ display: 'flex', height: '100vh' }}>
          <Sidebar
            sidebarRef={sidebarRef}
            targetRef={targetRef}
            onToggle={() => setOpened(!opened)}
          />
        </div>

        <AiAgentPopup
          opened={opened}
          targetRef={targetRef}
          leftPanel={{
            items: leftPanelItems,
            activeKey: activeSection,
            onActiveKeyChange: setActiveSection,
          }}
${popupProps}
        >
          <ChatContent
            messages={messages}
            draft={draft}
            onDraftChange={setDraft}
            onSend={send}
            onClose={() => setOpened(false)}
          />
        </AiAgentPopup>
      </PopupProvider>
    </SSRProvider>
  );
}`;

const mainCode = `${preCode}${exampleBody(`          // Пока окно не умеет само расширяться при открытии раздела, стартуем
          // шире размера по умолчанию, чтобы чату хватило места рядом с разделом
          defaultSize={{ width: 680, height: 540 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: sidebarWidth }}`)}`;

const playgroundCode = `${preCode}${exampleBody(`          targetGap={12}
          draggable
          resizable
          useStorage
          defaultSize={{ width: 680, height: 540 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: sidebarWidth }}
          onPositionChange={(position) => console.log(position)}
          onSizeChange={(size) => console.log(size)}`)}`;

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

const stageStyle: React.CSSProperties = {
  position: 'relative',
  minHeight: '640px',
  display: 'flex',
  overflow: 'hidden',
  backgroundColor: backgroundPrimary,
};

// В режиме отдельной стори фрейм занимает весь вьюпорт, на странице
// документации остаётся компактным
const fullHeightStageStyle: React.CSSProperties = {
  ...stageStyle,
  height: '100vh',
};

const sidebarStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: s.x2,
  background: surfaceTransparentSecondary,
};

const chatHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const chatHeaderGroupStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

// Иконка у заголовка не кликается, но стоит в том же квадрате 40x40,
// что и кнопки шапки
const chatTitleIconStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
};

const chatMessagesStyle: React.CSSProperties = {
  flex: '1 1 auto',
  minHeight: 0,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '12px',
};

const chatBubbleStyle: React.CSSProperties = {
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

const sectionBodyStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 12,
  height: '100%',
  overflow: 'auto',
};

type ChatMessage = { text: string; system?: boolean };

const initialMessages: ChatMessage[] = [
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
    text: 'Иконки слева в окне открывают разделы: история, задачи, календарь. Из раздела назад к иконкам ведёт крестик.',
  },
  {
    text: 'Поле ввода авторастёт: набери несколько строк через Shift+Enter, свечение поднимется вместе с верхним краем поля.',
  },
  {
    text: 'Закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи.',
  },
  { text: 'Анализирую ваш запрос…', system: true },
];

const leftPanelItems: AiAgentLeftPanelItem[] = [
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
];

// Шапка окна по макету: иконка AI и заголовок AI-Chat слева, кнопки-иконки
// справа, крестик закрывает окно
function ChatHeader({ onClose }: { onClose: () => void }) {
  return (
    <div style={chatHeaderStyle}>
      <div style={chatHeaderGroupStyle}>
        <span style={chatTitleIconStyle}>
          {/* плазма-иконки умеют градиент в color: рисуют её маской */}
          <IconSearchAIOutline size="s" color={textAccentGradient} />
        </span>
        <Typography variant="BodyM" bold>
          AI-Chat
        </Typography>
      </div>
      <div style={chatHeaderGroupStyle}>
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

// Контент чата со стейтом снаружи: закрытие окна размонтирует контент,
// а переписка и черновик живут в примере и не теряются
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
  return (
    <>
      <ChatHeader onClose={onClose} />
      {/* data-no-drag стоит точечно на сообщениях: их текст выделяется, а за
          просветы между ними и остальные свободные места окно перетаскивается */}
      <div style={chatMessagesStyle}>
        {messages.map((message, index) => (
          <Typography
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            variant="BodyS"
            style={message.system ? systemMessageStyle : chatBubbleStyle}
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
    <div ref={sidebarRef} style={sidebarStyle}>
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

// Один пример на всё: окно с левой панелью разделов и сайдбар с кнопкой
// открытия. Пропсы окна приходят снаружи (в Playground из контролов),
// left в dragBoundary отсчитывается от правого края сайдбара
function AiAgentExample({
  fullHeight,
  glow,
  dragBoundary,
  ...popupArgs
}: AiAgentPopupStoryArgs & { fullHeight?: boolean }) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const sidebarWidth = useSidebarWidth(sidebarRef);
  const [opened, setOpened] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState('');

  const sendDraft = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, { text: draft.trim() }]);
    setDraft('');
  };

  // frame здесь нужен только для стори: он изолирует окно в рамках примера,
  // чтобы примеры на странице документации не мешали друг другу.
  // В продуктовом коде frame не передавайте: окно живёт поверх всей страницы
  return (
    <SSRProvider>
      <PopupProvider>
        <div
          ref={frameRef}
          style={fullHeight ? fullHeightStageStyle : stageStyle}
        >
          <Sidebar
            sidebarRef={sidebarRef}
            targetRef={targetRef}
            onToggle={() => setOpened(!opened)}
          />
          <AiAgentPopup
            // Пока окно не умеет само расширяться при открытии раздела,
            // стартуем шире размера по умолчанию
            defaultSize={{ width: 680, height: 540 }}
            {...popupArgs}
            opened={opened}
            targetRef={targetRef}
            frame={frameRef}
            leftPanel={{
              items: leftPanelItems,
              activeKey: activeSection,
              onActiveKeyChange: setActiveSection,
            }}
            dragBoundary={{
              top: 8,
              right: 8,
              bottom: 8,
              ...dragBoundary,
              left: sidebarWidth + (dragBoundary?.left ?? 0),
            }}
          >
            <ChatContent
              messages={messages}
              draft={draft}
              glow={glow}
              onDraftChange={setDraft}
              onSend={sendDraft}
              onClose={() => setOpened(false)}
            />
          </AiAgentPopup>
        </div>
      </PopupProvider>
    </SSRProvider>
  );
}

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
  ...storySourceDoc({ code: mainCode, previewSource: 'shown' }),
  render: (_args, context) => (
    <AiAgentExample glow fullHeight={context.viewMode === 'story'} />
  ),
};

export const Playground: Story = {
  name: 'Playground',
  ...storySourceDoc({ code: playgroundCode, previewSource: 'shown' }),
  render: (args, context) => (
    <AiAgentExample {...args} fullHeight={context.viewMode === 'story'} />
  ),
};
