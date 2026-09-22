/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { AiAgentPopup } from '@ui-kit/components/AiAgentPopup';
import { Button } from '@ui-kit/components/Button';
import { PopupProvider } from '@ui-kit/components/Popup';
import { SSRProvider } from '@ui-kit/components/SSRProvider';
import { br, s } from '@ui-kit/constants';
import {
  backgroundPrimary,
  surfaceAccentMinor,
  surfaceTransparentSecondary,
  textPrimary,
  textSecondary,
} from '@ui-kit/tokens';
import React, { useRef, useState } from 'react';

type AiAgentPopupStoryArgs = React.ComponentProps<typeof AiAgentPopup>;

const preCode = `import { useRef, useState } from 'react';
import { AiAgentPopup, Button, PopupProvider, SSRProvider } from '@daisforge/ui';
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
          {/* всё содержимое окна на вашей стороне: шапка, чат, поле ввода */}
          <div>Контент AI-помощника</div>
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
          <div>Контент AI-помощника</div>
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
  minHeight: '640px',
  display: 'flex',
  backgroundColor: backgroundPrimary,
};

const toolbarStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: s.x4,
  padding: s.x4,
  background: surfaceTransparentSecondary,
};

const chatHeaderStyle: React.CSSProperties = {
  color: textPrimary,
  fontWeight: 600,
  paddingBottom: '8px',
};

const chatMessagesStyle: React.CSSProperties = {
  flex: '1 1 auto',
  minHeight: 0,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  color: textSecondary,
};

const chatBubbleStyle: React.CSSProperties = {
  background: surfaceAccentMinor,
  borderRadius: br.s,
  padding: '8px 12px',
};

const chatInputRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '8px',
  paddingTop: '12px',
};

const chatTextareaStyle: React.CSSProperties = {
  flex: '1 1 auto',
  resize: 'none',
  borderRadius: br.s,
  padding: '8px',
};

// Заглушка содержимого: в реальном использовании сюда встраивается чат
// AI-помощника со стороны потребителя
function ChatStub() {
  return (
    <>
      <div style={chatHeaderStyle}>AI помощник</div>
      <div style={chatMessagesStyle} data-no-drag>
        <div style={chatBubbleStyle}>
          Привет! Я AI-помощник. Этот блок помечен data-no-drag: здесь работает
          выделение текста, а перетаскивание окна начинается с других зон.
        </div>
        <div style={chatBubbleStyle}>
          Окно можно перетащить за любое свободное место и растянуть за правый
          нижний угол.
        </div>
      </div>
      <div style={chatInputRowStyle}>
        <textarea
          style={chatTextareaStyle}
          rows={2}
          placeholder="Спросите что-нибудь"
        />
        <Button size="xs" view="accent">
          Отправить
        </Button>
      </div>
    </>
  );
}

function AiAgentPopupExample(args: AiAgentPopupStoryArgs) {
  const targetRef = useRef<HTMLSpanElement>(null);
  const [opened, setOpened] = useState(true);

  return (
    <SSRProvider>
      <PopupProvider>
        <div style={stageStyle}>
          <div style={toolbarStyle}>
            <span ref={targetRef}>
              <Button size="xs" onClick={() => setOpened(!opened)}>
                AI помощник
              </Button>
            </span>
          </div>
        </div>
        <AiAgentPopup {...args} opened={opened} targetRef={targetRef}>
          <ChatStub />
        </AiAgentPopup>
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
  render: () => (
    <AiAgentPopupExample
      defaultSize={{ width: 360, height: 420 }}
      dragBoundary={{ top: 8, right: 8, bottom: 8, left: 8 }}
    />
  ),
};

export const Playground: Story = {
  name: 'Playground',
  ...storySourceDoc({ code: playgroundCode, previewSource: 'shown' }),
  render: (args) => <AiAgentPopupExample {...args} />,
};
