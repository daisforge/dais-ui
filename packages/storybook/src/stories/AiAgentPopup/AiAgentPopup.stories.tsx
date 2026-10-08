/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import type { AiAgentLeftPanelItem } from '@ui-kit/components/AiAgentPopup';
import {
  AiAgentInput,
  AiAgentPopup,
  AiAgentSurface,
} from '@ui-kit/components/AiAgentPopup';
import { IconButton } from '@ui-kit/components/IconButton';
import { PopupProvider } from '@ui-kit/components/Popup';
import { SSRProvider } from '@ui-kit/components/SSRProvider';
import { Typography } from '@ui-kit/components/Typography';
import { br, s } from '@ui-kit/constants';
import {
  IconCalendarEventOutline,
  IconCatalogOutline,
  IconChevronLeft,
  IconClose,
  IconDoneCircleOutline,
  IconHistory,
  IconMessageAddOutline,
  IconPanelSidebarLOutline,
  IconSendOutline,
} from '@ui-kit/icons';
import {
  backgroundPrimary,
  surfaceAccentMinor,
  surfaceTransparentSecondary,
  textAccentGradient,
  textInfo,
  textNegative,
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
  AiAgentSurface,
  IconButton,
  PopupProvider,
  SSRProvider,
  surfaceAccentMinor,
  surfaceTransparentSecondary,
  textAccentGradient,
  textInfo,
  textNegative,
  textPrimary,
  Typography,
} from '@daisforge/ui';
import {
  IconCalendarEventOutline,
  IconCatalogOutline,
  IconChevronLeft,
  IconClose,
  IconDoneCircleOutline,
  IconHistory,
  IconMessageAddOutline,
  IconPanelSidebarLOutline,
  IconSendOutline,
} from '@daisforge/ui/icons';

// Весь контент окна на стороне потребителя, ниже один из вариантов сборки.
// Состояние чата и открытый раздел левой панели держим снаружи окна:
// контент переезжает между окном и панелью лэйаута без потерь.

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

const chatMessagesStyle = {
  flex: '1 1 auto',
  minHeight: 0,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '8px',
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

// Кнопки не начинают перетаскивание, по ним работают обычные клики.
// Кнопка с иконкой панели переносит чат между окном и панелью лэйаута
function ChatHeader({ onClose, onTogglePanel }) {
  return (
    <div style={chatHeaderStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton size="s" view="clear">
          <IconChevronLeft size="s" />
        </IconButton>
        <Typography variant="BodyM" bold>
          Тема диалога
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton size="s" view="clear" onClick={onTogglePanel}>
          <IconPanelSidebarLOutline size="s" />
        </IconButton>
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
  onTogglePanel,
}) {
  return (
    <>
      <ChatHeader onClose={onClose} onTogglePanel={onTogglePanel} />
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

const indicatorDotStyle = {
  display: 'block',
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: textNegative,
};

// Разделы левой панели окна: иконка в полосе, заголовок и контент раздела
const leftPanelItems = [
  {
    key: 'history',
    icon: <IconHistory size="s" />,
    indicator: <span style={indicatorDotStyle} />,
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
  // где сейчас живёт чат: в окне или в панели лэйаута
  const [view, setView] = useState('popup');
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

  const leftPanel = {
    items: leftPanelItems,
    activeKey: activeSection,
    onActiveKeyChange: setActiveSection,
  };

  const chat = (
    <ChatContent
      messages={messages}
      draft={draft}
      onDraftChange={setDraft}
      onSend={send}
      onClose={() => {
        setView('popup');
        setOpened(false);
      }}
      onTogglePanel={() => setView(view === 'popup' ? 'panel' : 'popup')}
    />
  );

  // В лэйауте ширину панели задаёт страница: с открытым разделом панель
  // шире на 252 (раздел 300 вместо полосы иконок 48), чат не сужается
  const panelWidth = activeSection ? 612 : 360;

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
          {/* Панель лэйаута с чатом выезжает правее сайдбара: её ширина
              анимируется. Рамка AiAgentSurface здесь входит в блочную модель */}
          <div
            style={{
              width: view === 'panel' ? panelWidth : 0,
              overflow: 'hidden',
              transition: 'width 0.3s ease',
              flex: 'none',
            }}
          >
            <div
              style={{
                width: panelWidth,
                height: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                transition: 'width 0.3s ease',
              }}
            >
              <AiAgentSurface leftPanel={leftPanel} style={{ height: '100%' }}>
                {view === 'panel' ? chat : null}
              </AiAgentSurface>
            </div>
          </div>
        </div>

        <AiAgentPopup
          opened={view === 'popup' && opened}
          targetRef={targetRef}
          leftPanel={leftPanel}
${popupProps}
        >
          {view === 'popup' ? chat : null}
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

const chatMessagesStyle: React.CSSProperties = {
  flex: '1 1 auto',
  minHeight: 0,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '8px',
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

const indicatorDotStyle: React.CSSProperties = {
  display: 'block',
  width: 6,
  height: 6,
  borderRadius: '50%',
  background: textNegative,
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
    text: 'Кнопка с иконкой панели в шапке переносит чат в панель лэйаута и обратно, переписка и открытый раздел сохраняются.',
  },
  {
    text: 'Поле ввода авторастёт: набери несколько строк через Shift+Enter, свечение поднимется вслед за кромкой поля.',
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
    indicator: <span style={indicatorDotStyle} />,
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

// Шапка окна по макету: стрелка назад с темой диалога слева, кнопки-иконки
// справа. Кнопка с иконкой панели переносит чат, крестик закрывает окно
function ChatHeader({
  onClose,
  onTogglePanel,
}: {
  onClose: () => void;
  onTogglePanel: () => void;
}) {
  return (
    <div style={chatHeaderStyle}>
      <div style={chatHeaderGroupStyle}>
        <IconButton size="s" view="clear">
          <IconChevronLeft size="s" />
        </IconButton>
        <Typography variant="BodyM" bold>
          Тема диалога
        </Typography>
      </div>
      <div style={chatHeaderGroupStyle}>
        <IconButton size="s" view="clear" onClick={onTogglePanel}>
          <IconPanelSidebarLOutline size="s" />
        </IconButton>
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

// Контент чата со стейтом снаружи: один и тот же компонент рендерится
// и в окне, и в панели лэйаута, состояние при переносе не теряется
function ChatContent({
  messages,
  draft,
  glow,
  onDraftChange,
  onSend,
  onClose,
  onTogglePanel,
}: {
  messages: ChatMessage[];
  draft: string;
  glow?: boolean;
  onDraftChange: (draft: string) => void;
  onSend: () => void;
  onClose: () => void;
  onTogglePanel: () => void;
}) {
  return (
    <>
      <ChatHeader onClose={onClose} onTogglePanel={onTogglePanel} />
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

// Ширина панели лэйаута: задаёт страница. С открытым разделом панель шире
// на 252 (раздел 300 вместо полосы иконок 48), чат внутри не сужается
const PANEL_WIDTH = 360;
const PANEL_WIDTH_WITH_SECTION = 612;

// Один пример на всё: окно с левой панелью разделов, сайдбар с кнопкой
// открытия и перенос чата в панель лэйаута. Пропсы окна приходят снаружи
// (в Playground из контролов), left в dragBoundary отсчитывается от
// правого края сайдбара
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
  const [view, setView] = useState<'popup' | 'panel'>('popup');
  const [opened, setOpened] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState('');

  const sendDraft = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, { text: draft.trim() }]);
    setDraft('');
  };

  const leftPanel = {
    items: leftPanelItems,
    activeKey: activeSection,
    onActiveKeyChange: setActiveSection,
  };

  const chat = (
    <ChatContent
      messages={messages}
      draft={draft}
      glow={glow}
      onDraftChange={setDraft}
      onSend={sendDraft}
      onClose={() => {
        setView('popup');
        setOpened(false);
      }}
      onTogglePanel={() => setView(view === 'popup' ? 'panel' : 'popup')}
    />
  );

  const panelWidth = activeSection ? PANEL_WIDTH_WITH_SECTION : PANEL_WIDTH;

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
          <div
            style={{
              width: view === 'panel' ? panelWidth : 0,
              overflow: 'hidden',
              transition: 'width 0.3s ease',
              flex: 'none',
            }}
          >
            <div
              style={{
                width: panelWidth,
                height: '100%',
                padding: 8,
                boxSizing: 'border-box',
                transition: 'width 0.3s ease',
              }}
            >
              <AiAgentSurface leftPanel={leftPanel} style={{ height: '100%' }}>
                {view === 'panel' ? chat : null}
              </AiAgentSurface>
            </div>
          </div>
          <AiAgentPopup
            // Пока окно не умеет само расширяться при открытии раздела,
            // стартуем шире размера по умолчанию
            defaultSize={{ width: 680, height: 540 }}
            {...popupArgs}
            opened={view === 'popup' && opened}
            targetRef={targetRef}
            frame={frameRef}
            leftPanel={leftPanel}
            dragBoundary={{
              top: 8,
              right: 8,
              bottom: 8,
              ...dragBoundary,
              left: sidebarWidth + (dragBoundary?.left ?? 0),
            }}
          >
            {view === 'popup' ? chat : null}
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
