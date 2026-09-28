/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { AiAgentPopup, AiAgentSurface } from '@ui-kit/components/AiAgentPopup';
import { Button } from '@ui-kit/components/Button';
import { IconButton } from '@ui-kit/components/IconButton';
import { PopupProvider } from '@ui-kit/components/Popup';
import { SSRProvider } from '@ui-kit/components/SSRProvider';
import { TextArea } from '@ui-kit/components/TextArea';
import { Typography } from '@ui-kit/components/Typography';
import { br, s } from '@ui-kit/constants';
import {
  IconChevronLeft,
  IconClose,
  IconHistory,
  IconMessageAddOutline,
  IconPanelSidebarLOutline,
  IconSendOutline,
} from '@ui-kit/icons';
import {
  backgroundPrimary,
  surfaceAccentMinor,
  surfaceSolidCard,
  surfaceTransparentSecondary,
  textAccentGradient,
  textPrimary,
} from '@ui-kit/tokens';
import React, { useRef, useState } from 'react';

type AiAgentPopupStoryArgs = React.ComponentProps<typeof AiAgentPopup>;

const preCode = `import { useRef, useState } from 'react';
import {
  AiAgentPopup,
  Button,
  IconButton,
  PopupProvider,
  SSRProvider,
  surfaceAccentMinor,
  surfaceSolidCard,
  TextArea,
  textAccentGradient,
  textPrimary,
  Typography,
} from '@daisforge/ui';
import {
  IconChevronLeft,
  IconClose,
  IconHistory,
  IconMessageAddOutline,
  IconPanelSidebarLOutline,
  IconSendOutline,
} from '@daisforge/ui/icons';

// Весь контент окна на стороне потребителя, ниже один из вариантов сборки.
// Рамку, тень и овальное свечение снизу рисует сам компонент: свечение
// включается пропом glow (например, пока AI-агент обдумывает ответ)
// и выключается в реальном времени.

const chatHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const chatBodyStyle = {
  flex: '1 1 auto',
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
};

// Лента скроллится в своём контейнере, свечение при этом стоит на месте:
// оно нарисовано компонентом в слое окна под контентом
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

// Фон у поля атомарки полупрозрачный, и свечение просвечивало бы сквозь
// него. Непрозрачная подложка цвета карточки глушит свечение, поле поверх
// неё выглядит как обычно. Радиус равен радиусу поля размера s
const inputBackplateStyle = {
  background: surfaceSolidCard,
  borderRadius: '0.625rem',
};

// Кнопки не начинают перетаскивание, по ним работают обычные клики
function ChatHeader({ onClose }) {
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
        <IconButton size="s" view="clear">
          <IconPanelSidebarLOutline size="s" />
        </IconButton>
        <IconButton size="s" view="clear">
          <IconMessageAddOutline size="s" />
        </IconButton>
        <IconButton size="s" view="clear">
          <IconHistory size="s" />
        </IconButton>
        <IconButton size="s" view="clear" onClick={onClose}>
          <IconClose size="s" />
        </IconButton>
      </div>
    </div>
  );
}

function ChatContent({ onClose }) {
  const [messages, setMessages] = useState([
    'Привет! Я AI-помощник.',
    'Сообщения помечены data-no-drag: текст в них выделяется, а за свободные места окно можно перетащить.',
  ]);
  const [draft, setDraft] = useState('');

  const sendDraft = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, draft.trim()]);
    setDraft('');
  };

  return (
    <>
      <ChatHeader onClose={onClose} />
      <div style={chatBodyStyle}>
        <div style={chatMessagesStyle}>
          {messages.map((message, index) => (
            <Typography
              key={index}
              variant="BodyS"
              style={chatBubbleStyle}
              data-no-drag
            >
              {message}
            </Typography>
          ))}
        </div>
        <div style={{ paddingTop: '12px' }}>
          <div style={inputBackplateStyle}>
            <TextArea
              size="s"
              rows={1}
              placeholder="Спросите что-нибудь"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              contentRight={
                <IconButton size="xs" view="clear" onClick={sendDraft}>
                  {/* плазма-иконки умеют градиент в color: рисуют её маской */}
                  <IconSendOutline size="s" color={textAccentGradient} />
                </IconButton>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
`;

const simpleCode = `${preCode}
function Example() {
  const targetRef = useRef(null);
  const [opened, setOpened] = useState(false);

  // SSRProvider и PopupProvider обычно уже подключены на уровне приложения
  return (
    <SSRProvider>
      <PopupProvider>
        <span ref={targetRef}>
          <Button onClick={() => setOpened(!opened)}>AI помощник</Button>
        </span>
        <AiAgentPopup
          opened={opened}
          targetRef={targetRef}
          glow
          defaultSize={{ width: 360, height: 420 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: 8 }}
        >
          <ChatContent onClose={() => setOpened(false)} />
        </AiAgentPopup>
      </PopupProvider>
    </SSRProvider>
  );
}`;

const playgroundCode = `${preCode}
function Example() {
  const targetRef = useRef(null);
  const [opened, setOpened] = useState(true);

  return (
    <SSRProvider>
      <PopupProvider>
        <span ref={targetRef}>
          <Button onClick={() => setOpened(!opened)}>AI помощник</Button>
        </span>
        <AiAgentPopup
          opened={opened}
          targetRef={targetRef}
          targetGap={12}
          draggable
          resizable
          useStorage
          glow
          defaultSize={{ width: 360, height: 420 }}
          dragBoundary={{ top: 8, right: 8, bottom: 8, left: 8 }}
          onPositionChange={(position) => console.log(position)}
          onSizeChange={(size) => console.log(size)}
        >
          <ChatContent onClose={() => setOpened(false)} />
        </AiAgentPopup>
      </PopupProvider>
    </SSRProvider>
  );
}`;

const panelCode = `import { useRef, useState } from 'react';
import {
  AiAgentPopup,
  AiAgentSurface,
  Button,
  PopupProvider,
  SSRProvider,
} from '@daisforge/ui';

// Один и тот же контент чата живёт то в окне, то в левой панели лэйаута.
// Состояние чата (сообщения, черновик) держите снаружи: окно при закрытии
// размонтирует контент, а при переносе в панель контент перемонтируется.
// ChatContent тот же, что в примерах выше, но со стейтом снаружи и кнопкой
// панели в шапке: onTogglePanel переключает view.

function Example() {
  const targetRef = useRef(null);
  // где сейчас живёт чат: в окне или в левой панели
  const [view, setView] = useState('popup');
  const [opened, setOpened] = useState(true);

  return (
    <SSRProvider>
      <PopupProvider>
        <div style={{ display: 'flex', height: '100vh' }}>
          {/* Левая панель: её ширина анимируется, поэтому переход плавный.
              Рамка AiAgentSurface в варианте embedded входит в блочную
              модель: отступы лэйаута идут от светящегося края, absolute
              позиционирования нет */}
          <div
            style={{
              width: view === 'panel' ? 376 : 0,
              overflow: 'hidden',
              transition: 'width 0.3s ease',
              flex: 'none',
            }}
          >
            <div style={{ width: 360, height: '100%', padding: 8 }}>
              <AiAgentSurface glow style={{ height: '100%' }}>
                {view === 'panel' ? (
                  <ChatContent
                    onTogglePanel={() => setView('popup')}
                    onClose={() => setView('popup')}
                  />
                ) : null}
              </AiAgentSurface>
            </div>
          </div>

          {/* остальная страница */}
          <div style={{ flex: 1 }}>
            <span ref={targetRef}>
              <Button onClick={() => setOpened(!opened)}>AI помощник</Button>
            </span>
          </div>
        </div>

        <AiAgentPopup
          opened={view === 'popup' && opened}
          targetRef={targetRef}
          glow
          defaultSize={{ width: 360, height: 420 }}
        >
          {view === 'popup' ? (
            <ChatContent
              onTogglePanel={() => setView('panel')}
              onClose={() => setOpened(false)}
            />
          ) : null}
        </AiAgentPopup>
      </PopupProvider>
    </SSRProvider>
  );
}`;

const hiddenArgType = {
  control: false,
  table: { disable: true },
} as const;

const simpleArgTypes = {
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
    draggable: { control: 'boolean' },
    resizable: { control: 'boolean' },
    useStorage: { control: 'boolean' },
    glow: { control: 'boolean' },
    targetGap: { control: 'number' },
    dragIgnoreSelector: { control: 'text' },
    defaultPosition: { control: 'object' },
    defaultSize: { control: 'object' },
    dragBoundary: { control: 'object' },
  },
  args: {
    draggable: true,
    resizable: true,
    useStorage: false,
    glow: true,
    targetGap: 12,
    defaultSize: { width: 360, height: 420 },
    dragBoundary: { top: 8, right: 8, bottom: 8, left: 8 },
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

const toolbarStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: s.x4,
  padding: s.x4,
  background: surfaceTransparentSecondary,
};

const chatHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

// Общий контейнер ленты сообщений и поля ввода
const chatBodyStyle: React.CSSProperties = {
  flex: '1 1 auto',
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
};

const chatHeaderGroupStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

// Лента скроллится в своём контейнере, свечение при этом стоит на месте:
// оно нарисовано компонентом в слое окна под контентом
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

const chatInputRowStyle: React.CSSProperties = {
  paddingTop: '12px',
};

// Фон у поля атомарки полупрозрачный, и свечение просвечивало бы сквозь
// него. Непрозрачная подложка цвета карточки глушит свечение, поле поверх
// неё выглядит как обычно. Радиус равен радиусу поля размера s
const inputBackplateStyle: React.CSSProperties = {
  background: surfaceSolidCard,
  borderRadius: '0.625rem',
};

const initialMessages = [
  'Привет! Я AI-помощник. Это сообщение помечено data-no-drag: текст в нём можно выделять, перетаскивание с него не начинается.',
  'А за свободные места, включая просветы между сообщениями, окно можно перетащить. Растянуть за угол с иконкой, закрыть крестиком.',
  'Свечение снизу рисует сам компонент, оно включено пропом glow.',
  'Проверь: позиция скролла и набранный черновик не теряются при перетаскивании окна.',
  'И при ресайзе за любой угол тоже.',
  'И когда активный угол ресайза переезжает после переноса окна в другой сектор экрана.',
  'Отправь своё сообщение кнопкой, оно добавится в конец ленты.',
  'Кнопка с иконкой панели в шапке переносит чат в левую панель, смотри стори «Переход в панель».',
  'Закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи.',
  'Это описано в документации компонента.',
];

// Шапка окна по макету: стрелка назад с темой диалога слева, четыре
// кнопки-иконки справа, крестик закрывает окно
function ChatHeader({
  onClose,
  onTogglePanel,
}: {
  onClose: () => void;
  onTogglePanel?: () => void;
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
        <IconButton size="s" view="clear">
          <IconHistory size="s" />
        </IconButton>
        <IconButton size="s" view="clear" onClick={onClose}>
          <IconClose size="s" />
        </IconButton>
      </div>
    </div>
  );
}

// Контент чата со стейтом снаружи: один и тот же компонент рендерится
// и в окне, и в левой панели, состояние при переносе не теряется
function ChatContent({
  messages,
  draft,
  onDraftChange,
  onSend,
  onClose,
  onTogglePanel,
}: {
  messages: string[];
  draft: string;
  onDraftChange: (draft: string) => void;
  onSend: () => void;
  onClose: () => void;
  onTogglePanel?: () => void;
}) {
  return (
    <>
      <ChatHeader onClose={onClose} onTogglePanel={onTogglePanel} />
      <div style={chatBodyStyle}>
        {/* data-no-drag стоит точечно на сообщениях: их текст выделяется, а за
            просветы между ними и остальные свободные места окно перетаскивается */}
        <div style={chatMessagesStyle}>
          {messages.map((message, index) => (
            <Typography
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              variant="BodyS"
              style={chatBubbleStyle}
              data-no-drag
            >
              {message}
            </Typography>
          ))}
        </div>
        <div style={chatInputRowStyle}>
          <div style={inputBackplateStyle}>
            <TextArea
              size="s"
              rows={1}
              placeholder="Спросите что-нибудь"
              value={draft}
              onChange={(e) => onDraftChange(e.target.value)}
              contentRight={
                <IconButton size="xs" view="clear" onClick={onSend}>
                  {/* плазма-иконки умеют градиент в color: рисуют её маской */}
                  <IconSendOutline size="s" color={textAccentGradient} />
                </IconButton>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Стейт чата: в простых сторях живёт внутри примера, в стори с переходом
// в панель показывает, что состояние переживает перенос контента
function useChatState() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState('');

  const sendDraft = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, draft.trim()]);
    setDraft('');
  };

  return { messages, draft, setDraft, sendDraft };
}

function AiAgentPopupExample({
  fullHeight,
  ...args
}: AiAgentPopupStoryArgs & { fullHeight?: boolean }) {
  const targetRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(true);
  const chat = useChatState();

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
          <div style={toolbarStyle}>
            <span ref={targetRef}>
              <Button size="xs" onClick={() => setOpened(!opened)}>
                AI помощник
              </Button>
            </span>
          </div>
          <AiAgentPopup
            {...args}
            opened={opened}
            targetRef={targetRef}
            frame={frameRef}
          >
            <ChatContent
              messages={chat.messages}
              draft={chat.draft}
              onDraftChange={chat.setDraft}
              onSend={chat.sendDraft}
              onClose={() => setOpened(false)}
            />
          </AiAgentPopup>
        </div>
      </PopupProvider>
    </SSRProvider>
  );
}

// Чат переезжает из окна в левую панель лэйаута и обратно по кнопке
// с иконкой панели в шапке. Состояние чата живёт снаружи и перенос
// переживает. Ширина панели анимируется, рамка оболочки в варианте
// embedded входит в блочную модель: отступ лэйаута идёт от светящегося края
function PanelTransformExample({ fullHeight }: { fullHeight?: boolean }) {
  const targetRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<'popup' | 'panel'>('popup');
  const [opened, setOpened] = useState(true);
  const chat = useChatState();

  const chatContent = (
    <ChatContent
      messages={chat.messages}
      draft={chat.draft}
      onDraftChange={chat.setDraft}
      onSend={chat.sendDraft}
      onClose={() => {
        setView('popup');
        setOpened(false);
      }}
      onTogglePanel={() => setView(view === 'popup' ? 'panel' : 'popup')}
    />
  );

  return (
    <SSRProvider>
      <PopupProvider>
        <div
          ref={frameRef}
          style={fullHeight ? fullHeightStageStyle : stageStyle}
        >
          <div
            style={{
              width: view === 'panel' ? 376 : 0,
              overflow: 'hidden',
              transition: 'width 0.3s ease',
              flex: 'none',
            }}
          >
            <div style={{ width: 360, height: '100%', padding: 8 }}>
              <AiAgentSurface glow style={{ height: '100%' }}>
                {view === 'panel' ? chatContent : null}
              </AiAgentSurface>
            </div>
          </div>
          <div style={toolbarStyle}>
            <span ref={targetRef}>
              <Button size="xs" onClick={() => setOpened(!opened)}>
                AI помощник
              </Button>
            </span>
          </div>
          <AiAgentPopup
            opened={view === 'popup' && opened}
            targetRef={targetRef}
            frame={frameRef}
            glow
            defaultSize={{ width: 360, height: 420 }}
            dragBoundary={{ top: 8, right: 8, bottom: 8, left: 8 }}
          >
            {view === 'popup' ? chatContent : null}
          </AiAgentPopup>
        </div>
      </PopupProvider>
    </SSRProvider>
  );
}

export const Simple: Story = {
  name: 'Simple',
  argTypes: simpleArgTypes,
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
  ...storySourceDoc({ code: simpleCode, previewSource: 'shown' }),
  render: (_args, context) => (
    <AiAgentPopupExample
      glow
      defaultSize={{ width: 360, height: 420 }}
      dragBoundary={{ top: 8, right: 8, bottom: 8, left: 8 }}
      fullHeight={context.viewMode === 'story'}
    />
  ),
};

export const Playground: Story = {
  name: 'Playground',
  ...storySourceDoc({ code: playgroundCode, previewSource: 'shown' }),
  render: (args, context) => (
    <AiAgentPopupExample {...args} fullHeight={context.viewMode === 'story'} />
  ),
};

export const PanelTransform: Story = {
  name: 'Переход в панель',
  argTypes: simpleArgTypes,
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
  ...storySourceDoc({ code: panelCode, previewSource: 'shown' }),
  render: (_args, context) => (
    <PanelTransformExample fullHeight={context.viewMode === 'story'} />
  ),
};
