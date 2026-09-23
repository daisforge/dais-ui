/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { AiAgentPopup } from '@ui-kit/components/AiAgentPopup';
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

// Слой свечения: фон окна. Позиционируется он от контейнера окна (absolute
// с inset 0), поэтому паддинги контентной области его не сжимают, а
// overflow со скруглением обрезают размытие по форме окна, чтобы оно не
// выходило за его пределы
const glowClipStyle = {
  position: 'absolute',
  inset: 0,
  overflow: 'hidden',
  borderRadius: '16px',
  pointerEvents: 'none',
};

// Овальное свечение из двух слоёв: широкий мягкий ореол и более плотное
// ядро, один сильный blur съедал бы всю насыщенность цвета. Ширина в
// процентах, поэтому при ресайзе окна овал растёт вместе с ним
const glowBaseStyle = {
  position: 'absolute',
  left: '50%',
  bottom: '8px',
  transform: 'translateX(-50%)',
  width: '84%',
  height: '79px',
  borderRadius: '50%',
  background:
    'linear-gradient(268.89deg, rgba(157, 179, 255, 1) 6.881%, rgba(0, 224, 255, 1) 50.076%, rgba(157, 179, 255, 1) 99.883%)',
  opacity: 0.2,
};
const glowHaloStyle = { ...glowBaseStyle, filter: 'blur(92px)' };
const glowCoreStyle = { ...glowBaseStyle, filter: 'blur(28px)', opacity: 0.14 };

// Контент лежит поверх слоя свечения за счёт zIndex
const chatHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  zIndex: 1,
};
const chatBodyStyle = {
  flex: '1 1 auto',
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: 1,
};

// Лента скроллится в своём контейнере, свечение при этом стоит на месте:
// оно живёт в отдельном слое окна, а не внутри скролла
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
      <div style={glowClipStyle}>
        <div style={glowHaloStyle} />
        <div style={glowCoreStyle} />
      </div>
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
  position: 'relative',
  zIndex: 1,
};

// Общий контейнер ленты сообщений и поля ввода
const chatBodyStyle: React.CSSProperties = {
  flex: '1 1 auto',
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: 1,
};

// Слой свечения: фон окна, растянут на всю карточку без учёта её паддингов
// (позиционируется от контейнера окна) и обрезает размытие по скруглению,
// чтобы оно не выходило за пределы окна. Весь контент лежит поверх слоя
const glowClipStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  overflow: 'hidden',
  borderRadius: '16px',
  pointerEvents: 'none',
};

// Овальное свечение по макету, прижато к нижнему краю окна под полем ввода.
// Два слоя: насыщенное ядро с небольшим размытием и широкий мягкий ореол,
// один сильный blur съедал всю насыщенность цвета. Ширина в процентах,
// поэтому при ресайзе окна овал растёт вместе с ним
const glowBaseStyle: React.CSSProperties = {
  position: 'absolute',
  left: '50%',
  bottom: '8px',
  transform: 'translateX(-50%)',
  width: '84%',
  height: '79px',
  borderRadius: '50%',
  background:
    'linear-gradient(268.89deg, rgba(157, 179, 255, 1) 6.881%, rgba(0, 224, 255, 1) 50.076%, rgba(157, 179, 255, 1) 99.883%)',
  opacity: 0.2,
};

const glowHaloStyle: React.CSSProperties = {
  ...glowBaseStyle,
  filter: 'blur(92px)',
};

const glowCoreStyle: React.CSSProperties = {
  ...glowBaseStyle,
  filter: 'blur(28px)',
  opacity: 0.14,
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

// Шапка окна по макету: стрелка назад с темой диалога слева, четыре
// кнопки-иконки справа, крестик закрывает окно
function ChatHeader({ onClose }: { onClose: () => void }) {
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

const initialMessages = [
  'Привет! Я AI-помощник. Это сообщение помечено data-no-drag: текст в нём можно выделять, перетаскивание с него не начинается.',
  'А за свободные места, включая просветы между сообщениями, окно можно перетащить. Растянуть за угол с иконкой, закрыть крестиком.',
  'Сообщений специально много, чтобы в ленте появился скролл.',
  'Проверь: позиция скролла и набранный черновик не теряются при перетаскивании окна.',
  'И при ресайзе за любой угол тоже.',
  'И когда активный угол ресайза переезжает после переноса окна в другой сектор экрана.',
  'Отправь своё сообщение кнопкой, оно добавится в конец ленты.',
  'Локальный стейт живёт, пока окно открыто.',
  'А вот закрытие окна размонтирует контент, поэтому в реальном чате состояние держат снаружи.',
  'Это описано в документации компонента.',
];

// Заглушка содержимого: в реальном использовании сюда встраивается чат
// AI-помощника со стороны потребителя. Локальные стейты (лента сообщений,
// черновик ввода) здесь для проверки, что драг и ресайз их не теряют
function ChatStub({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState('');

  const sendDraft = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, draft.trim()]);
    setDraft('');
  };

  return (
    <>
      <div style={glowClipStyle}>
        <div style={glowHaloStyle} />
        <div style={glowCoreStyle} />
      </div>
      <ChatHeader onClose={onClose} />
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

function AiAgentPopupExample({
  fullHeight,
  ...args
}: AiAgentPopupStoryArgs & { fullHeight?: boolean }) {
  const targetRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(true);

  // frame здесь нужен только для стори: он изолирует окно в рамках примера,
  // чтобы два примера на странице документации не мешали друг другу.
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
            <ChatStub onClose={() => setOpened(false)} />
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
