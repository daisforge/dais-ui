/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Flow } from '@ui-kit/components/Flow';
import { IconButton } from '@ui-kit/components/IconButton';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { PopupProvider } from '@ui-kit/components/Popup';
import type { PopupDFSize } from '@ui-kit/components/PopupDF';
import { PopupDF } from '@ui-kit/components/PopupDF';
import { SSRProvider } from '@ui-kit/components/SSRProvider';
import { br, s } from '@ui-kit/constants';
import {
  IconFullscreenOff,
  IconFullscreenOn,
  IconInfoCircleOutline,
} from '@ui-kit/icons';
import {
  backgroundPrimary,
  outlineAccent,
  surfaceAccentMinor,
  surfaceInfo,
  surfaceTransparentPositive,
} from '@ui-kit/tokens';
import React, { useRef, useState } from 'react';

type ResizeDirection =
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'top-left';

type ResizeCorner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type ResizeIconSize = 'xs' | 's' | 'm';

type PopupDFStoryArgs = React.ComponentProps<typeof PopupDF> & {
  withSubHeader?: boolean;
  withRightBlock?: boolean;
  withBody?: boolean;
  withFooter?: boolean;
  showCloseButton?: boolean;
  showBackButton?: boolean;
  offsetX?: number;
  offsetY?: number;
  resizableDisabled?: boolean;
  resizableDirections?: ResizeDirection[];
  resizableHiddenIcons?: ResizeCorner[];
  resizableDefaultSize?: { width?: number; height?: number };
  resizableMinWidth?: number;
  resizableMinHeight?: number;
  resizableMaxWidth?: number;
  resizableMaxHeight?: number;
  resizableIconSize?: ResizeIconSize;
};

const actionSizeByPopupSize = {
  l: 's',
  m: 'xs',
  s: 'xxs',
} as const;

const linkButtonSizeByPopupSize = {
  l: 's',
  m: 'xs',
  s: 'xxs',
} as const;

const popupPlacements = [
  'center',
  'top',
  'bottom',
  'right',
  'left',
  'top-right',
  'top-left',
  'bottom-right',
  'bottom-left',
] as const;

const resizeDirectionsOptions: ResizeDirection[] = [
  'top',
  'top-right',
  'right',
  'bottom-right',
  'bottom',
  'bottom-left',
  'left',
  'top-left',
];

const resizeHiddenIconsOptions: ResizeCorner[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];

const hiddenArgType = {
  control: false,
  table: { disable: true },
} as const;

const simpleArgTypes = {
  size: hiddenArgType,
  opened: hiddenArgType,
  defaultOpened: hiddenArgType,
  onToggle: hiddenArgType,
  placement: hiddenArgType,
  offset: hiddenArgType,
  offsetX: hiddenArgType,
  offsetY: hiddenArgType,
  frame: hiddenArgType,
  style: hiddenArgType,
  showCloseButton: hiddenArgType,
  showBackButton: hiddenArgType,
  withSubHeader: hiddenArgType,
  withRightBlock: hiddenArgType,
  withBody: hiddenArgType,
  withFooter: hiddenArgType,
  draggable: hiddenArgType,
  resizable: hiddenArgType,
  resizableDisabled: hiddenArgType,
  resizableDirections: hiddenArgType,
  resizableHiddenIcons: hiddenArgType,
  resizableDefaultSize: hiddenArgType,
  resizableMinWidth: hiddenArgType,
  resizableMinHeight: hiddenArgType,
  resizableMaxWidth: hiddenArgType,
  resizableMaxHeight: hiddenArgType,
  resizableIconSize: hiddenArgType,
};

const preCode = `import { useState } from 'react';
import {
  Button,
  Flow,
  LinkButton,
  PopupDF,
  PopupProvider,
  SSRProvider,
} from '@daisforge/ui';

// Контент футера — обычные кнопки, которые вы кладёте в PopupDF.Footer
function FooterActions() {
  return (
    <Flow mainAxisGap={8}>
      <LinkButton href="/" size="xs">
        LinkButton
      </LinkButton>
      <Button size="xs" view="secondary">
        Отмена
      </Button>
      <Button size="xs" view="accent">
        Применить
      </Button>
    </Flow>
  );
}
`;

const simpleCode = `${preCode}
function Example() {
  const [opened, setOpened] = useState(false);

  // SSRProvider и PopupProvider обычно уже подключены на уровне приложения
  return (
    <SSRProvider>
      <PopupProvider>
        <Button onClick={() => setOpened(true)}>Открыть PopupDF</Button>
        <PopupDF
          opened={opened}
          onToggle={setOpened}
          size="m"
          placement="center"
          style={{ width: '396px' }}
        >
          <PopupDF.Header
            title="Title"
            description="Description"
            rightBlock={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* кастомный контент слева от крестика, ширина не ограничена */}
              </div>
            }
          />
          <PopupDF.Body>Контент попапа</PopupDF.Body>
          <PopupDF.Footer>
            <FooterActions />
          </PopupDF.Footer>
        </PopupDF>
      </PopupProvider>
    </SSRProvider>
  );
}`;

const playgroundCode = `${preCode}
function Example() {
  const [opened, setOpened] = useState(true);

  return (
    <SSRProvider>
      <PopupProvider>
        <Button onClick={() => setOpened(true)}>Открыть PopupDF</Button>
        <PopupDF
          opened={opened}
          onToggle={setOpened}
          size="m"
          placement="center"
          offset={[0, 0]}
          draggable
          resizable={{ minWidth: 240, minHeight: 120, iconSize: 's' }}
          style={{ width: '396px' }}
        >
          <PopupDF.Header
            title="Title"
            description="Description"
            rightBlock={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* кастомный контент слева от крестика, ширина не ограничена */}
              </div>
            }
            showCloseButton
          />
          <PopupDF.Body>Контент попапа</PopupDF.Body>
          <PopupDF.Footer>
            <FooterActions />
          </PopupDF.Footer>
        </PopupDF>
      </PopupProvider>
    </SSRProvider>
  );
}`;

const meta: Meta<PopupDFStoryArgs> = {
  title: 'Локальные компоненты/PopupDF',
  component: PopupDF,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      options: ['l', 'm', 's'],
      control: { type: 'inline-radio' },
    },
    placement: {
      options: popupPlacements,
      control: { type: 'select' },
    },
    offsetX: {
      control: 'number',
    },
    offsetY: {
      control: 'number',
    },
    showCloseButton: {
      control: 'boolean',
    },
    showBackButton: {
      control: 'boolean',
    },
    withSubHeader: {
      control: 'boolean',
    },
    withRightBlock: {
      control: 'boolean',
    },
    withBody: {
      control: 'boolean',
    },
    withFooter: {
      control: 'boolean',
    },
    draggable: {
      control: 'boolean',
    },
    resizable: {
      control: 'boolean',
    },
    resizableDisabled: {
      control: 'boolean',
    },
    resizableDirections: {
      control: 'check',
      options: resizeDirectionsOptions,
    },
    resizableHiddenIcons: {
      control: 'check',
      options: resizeHiddenIconsOptions,
    },
    resizableDefaultSize: {
      control: 'object',
    },
    resizableMinWidth: {
      control: 'number',
    },
    resizableMinHeight: {
      control: 'number',
    },
    resizableMaxWidth: {
      control: 'number',
    },
    resizableMaxHeight: {
      control: 'number',
    },
    resizableIconSize: {
      options: ['xs', 's', 'm'],
      control: { type: 'select' },
    },
  },
  args: {
    size: 'm',
    placement: 'center',
    offsetX: 0,
    offsetY: 0,
    showCloseButton: true,
    showBackButton: false,
    withSubHeader: true,
    withRightBlock: true,
    withBody: true,
    withFooter: true,
    draggable: false,
    resizable: false,
    resizableDisabled: false,
    resizableDirections: undefined,
    resizableHiddenIcons: undefined,
    resizableIconSize: 's',
    resizableDefaultSize: { width: 300, height: 180 },
    resizableMinWidth: 240,
    resizableMinHeight: 120,
  },
};

export default meta;

type Story = StoryObj<PopupDFStoryArgs>;

const playgroundStyle: React.CSSProperties = {
  minHeight: '560px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: s.x16,
  backgroundColor: backgroundPrimary,
};

const frameStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  maxWidth: '920px',
  minHeight: '480px',
  background: surfaceTransparentPositive,
  borderRadius: br.l,
  overflow: 'hidden',
  padding: s.x8,
};

const slotBoxStyle: React.CSSProperties = {
  minHeight: '40px',
  border: `1px solid ${outlineAccent}`,
  background: surfaceAccentMinor,
  display: 'flex',
  alignItems: 'center',
  color: surfaceInfo,
  padding: '10px 12px',
};

const bodyBoxStyle: React.CSSProperties = {
  minHeight: '56px',
  border: `1px solid ${outlineAccent}`,
  background: surfaceAccentMinor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: surfaceInfo,
  padding: '12px',
};

function StoryStage({ children }: { children: React.ReactNode }) {
  return (
    <SSRProvider>
      <PopupProvider>
        <div style={playgroundStyle}>{children}</div>
      </PopupProvider>
    </SSRProvider>
  );
}

function StoryFrame({
  children,
}: {
  children: (frameRef: React.RefObject<HTMLDivElement>) => React.ReactNode;
}) {
  const frameRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={frameRef} style={frameStyle}>
      {children(frameRef)}
    </div>
  );
}

function HeaderSlot() {
  return <div style={slotBoxStyle}>subHeader</div>;
}

const rightBlockHeightByPopupSize = {
  l: '32px',
  m: '32px',
  s: '24px',
} as const;

function RightBlockSlot({ size = 'm' }: { size?: PopupDFSize }) {
  return (
    <div
      style={{
        height: rightBlockHeightByPopupSize[size],
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        border: `1px solid ${outlineAccent}`,
        background: surfaceAccentMinor,
        color: surfaceInfo,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
      }}
    >
      rightBlock
    </div>
  );
}

function BodySlot() {
  return <div style={bodyBoxStyle}>PopupDF.Body</div>;
}

function FooterActions({ size = 'm' }: { size?: PopupDFSize }) {
  const actionSize = actionSizeByPopupSize[size];
  const linkButtonSize = linkButtonSizeByPopupSize[size];

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: s.x4,
      }}
    >
      <Flow mainAxisGap={s.x2}>
        <LinkButton
          href="/"
          size={linkButtonSize}
          onClick={(e) => e.preventDefault()}
        >
          LinkButton
        </LinkButton>
        <Button size={actionSize} view="secondary">
          Label
        </Button>
        <Button size={actionSize} view="accent">
          Label
        </Button>
      </Flow>
    </div>
  );
}

function PopupDFPlaygroundExample({
  size = 'm',
  placement = 'center',
  offsetX = 0,
  offsetY = 0,
  showCloseButton = true,
  showBackButton = false,
  withSubHeader = true,
  withRightBlock = true,
  withBody = true,
  withFooter = true,
  draggable,
  resizable,
  resizableDisabled = false,
  resizableDirections,
  resizableHiddenIcons,
  resizableDefaultSize,
  resizableMinWidth,
  resizableMinHeight,
  resizableMaxWidth,
  resizableMaxHeight,
  resizableIconSize,
}: PopupDFStoryArgs) {
  const [opened, setOpened] = useState(true);
  const resizableConfig = resizable
    ? {
        disabled: resizableDisabled,
        directions: resizableDirections,
        hiddenIcons: resizableHiddenIcons,
        defaultSize: resizableDefaultSize,
        minWidth: resizableMinWidth,
        minHeight: resizableMinHeight,
        maxWidth: resizableMaxWidth,
        maxHeight: resizableMaxHeight,
        iconSize: resizableIconSize,
      }
    : undefined;

  return (
    <StoryFrame>
      {(frameRef) => (
        <>
          <Button onClick={() => setOpened(true)}>Открыть PopupDF</Button>
          <PopupDF
            opened={opened}
            onToggle={setOpened}
            frame={frameRef}
            placement={placement}
            offset={[offsetX, offsetY]}
            size={size}
            draggable={draggable}
            resizable={resizableConfig}
            style={{ width: '396px' }}
          >
            <PopupDF.Header
              title="Title"
              description="Description"
              subHeader={withSubHeader ? <HeaderSlot /> : undefined}
              rightBlock={
                withRightBlock ? <RightBlockSlot size={size} /> : undefined
              }
              showCloseButton={showCloseButton}
              onBackButtonClick={showBackButton ? () => {} : undefined}
            />
            {withBody && (
              <PopupDF.Body>
                <BodySlot />
              </PopupDF.Body>
            )}
            {withFooter && (
              <PopupDF.Footer>
                <FooterActions size={size} />
              </PopupDF.Footer>
            )}
          </PopupDF>
        </>
      )}
    </StoryFrame>
  );
}

function renderInStage(node: React.ReactNode) {
  return <StoryStage>{node}</StoryStage>;
}

function PopupDFSimpleExample() {
  const [opened, setOpened] = useState(false);

  return (
    <SSRProvider>
      <PopupProvider>
        <StoryFrame>
          {(frameRef) => (
            <>
              <Button onClick={() => setOpened(true)}>Открыть PopupDF</Button>
              <PopupDF
                opened={opened}
                onToggle={setOpened}
                frame={frameRef}
                size="m"
                placement="center"
                style={{ width: '396px' }}
              >
                <PopupDF.Header
                  title="Title"
                  description="Description"
                  rightBlock={<RightBlockSlot />}
                />
                <PopupDF.Body>
                  <BodySlot />
                </PopupDF.Body>
                <PopupDF.Footer>
                  <FooterActions />
                </PopupDF.Footer>
              </PopupDF>
            </>
          )}
        </StoryFrame>
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
  render: () => renderInStage(<PopupDFSimpleExample />),
};

export const Playground: Story = {
  name: 'Playground',
  ...storySourceDoc({ code: playgroundCode, previewSource: 'shown' }),
  render: (args) => renderInStage(<PopupDFPlaygroundExample {...args} />),
};

const SIZE_L_ANIM_MS = 280;
const SIZE_L_BASE_WIDTH = 600;
const SIZE_L_BASE_HEIGHT = 600;
// Отступ фуллскрина от краёв frame со всех сторон.
const SIZE_L_FULLSCREEN_GAP = 24;

// Отдельная сцена/фрейм под пример Size L: крупнее обычного, чтобы дефолтный
// попап 600x600 помещался с запасом на drag/resize и разворот.
const sizeLStageStyle: React.CSSProperties = {
  minHeight: '820px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: s.x16,
  backgroundColor: backgroundPrimary,
};

const sizeLFrameStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  maxWidth: '960px',
  minHeight: '720px',
  background: surfaceTransparentPositive,
  borderRadius: br.l,
  overflow: 'hidden',
  padding: s.x8,
};

// Синий блок body тянется на всю высоту (height: 100%), поэтому при ресайзе
// попапа по высоте он растёт вместе с телом, а не остаётся минимальным.
const sizeLBodyStyle: React.CSSProperties = {
  height: '100%',
  boxSizing: 'border-box',
  border: `1px solid ${outlineAccent}`,
  background: surfaceAccentMinor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: surfaceInfo,
  padding: '12px',
};

// Кастомный слот subHeader под description. Компонент высоту не навязывает —
// задаём контентом (здесь простой слот с иконкой, высота около 40px).
const sizeLSubHeaderStyle: React.CSSProperties = {
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '0 12px',
  border: `1px solid ${outlineAccent}`,
  background: surfaceAccentMinor,
  color: surfaceInfo,
  boxSizing: 'border-box',
};

function PopupDFSizeLExample() {
  const [opened, setOpened] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  // interactive: resizable + draggable включены в обычном режиме,
  // выключаются на время фуллскрина (нормализация до базового вида).
  const [interactive, setInteractive] = useState(true);

  const expand = () => {
    setInteractive(false);
    window.setTimeout(() => setFullscreen(true), 30);
  };

  const collapse = () => {
    setFullscreen(false);
    window.setTimeout(() => setInteractive(true), SIZE_L_ANIM_MS + 40);
  };

  const IconFullS = fullscreen ? IconFullscreenOff : IconFullscreenOn;

  const sizeStyle: React.CSSProperties = {
    width: fullscreen
      ? `calc(100% - ${SIZE_L_FULLSCREEN_GAP * 2}px)`
      : `${SIZE_L_BASE_WIDTH}px`,
    height: fullscreen
      ? `calc(100% - ${SIZE_L_FULLSCREEN_GAP * 2}px)`
      : `${SIZE_L_BASE_HEIGHT}px`,
    maxWidth: '100%',
    maxHeight: '100%',
    transition: `width ${SIZE_L_ANIM_MS}ms ease, height ${SIZE_L_ANIM_MS}ms ease`,
    // grid c одной строкой/колонкой 1fr тянет внутреннюю карточку на всю
    // заданную высоту. Без него внешний узел Popup сжимается по контенту
    // (заполняется только ширина) и height здесь игнорируется — нужен всегда,
    // не только во фуллскрине, иначе дефолтные 600x600 дают 600 по ширине и
    // высоту по контенту.
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr',
  };

  const frameRef = useRef<HTMLDivElement>(null);

  return (
    <SSRProvider>
      <PopupProvider>
        <div style={sizeLStageStyle}>
          <div ref={frameRef} style={sizeLFrameStyle}>
            <Button onClick={() => setOpened(true)}>Открыть PopupDF</Button>
            <PopupDF
              opened={opened}
              onToggle={setOpened}
              frame={frameRef}
              size="l"
              placement="center"
              offset={[0, 0]}
              draggable={interactive}
              resizable={
                interactive
                  ? {
                      // Стартовый размер resizable-контейнера. Именно он (а не
                      // style) задаёт размер, когда resizable включён — иначе
                      // контейнер садится на minHeight/контент.
                      defaultSize: {
                        width: SIZE_L_BASE_WIDTH,
                        height: SIZE_L_BASE_HEIGHT,
                      },
                      minWidth: 320,
                      minHeight: 220,
                      iconSize: 's',
                    }
                  : false
              }
              style={sizeStyle}
            >
              <PopupDF.Header
                title="Заголовок PopupDF размера L"
                description="Body S. Двигай за шапку, тяни за угол, разворачивай кнопкой."
                subHeader={
                  <div style={sizeLSubHeaderStyle}>
                    <IconInfoCircleOutline size="xs" />
                    <span>Кастомный слот</span>
                  </div>
                }
                rightBlock={
                  <IconButton
                    size="xs"
                    view="secondary"
                    pin="circle-circle"
                    title={fullscreen ? 'Свернуть' : 'Развернуть'}
                    onClick={() => (fullscreen ? collapse() : expand())}
                  >
                    <IconFullS size="xs" />
                  </IconButton>
                }
              />
              <PopupDF.Body>
                <div style={sizeLBodyStyle}>PopupDF.Body</div>
              </PopupDF.Body>
              <PopupDF.Footer>
                <FooterActions size="l" />
              </PopupDF.Footer>
            </PopupDF>
          </div>
        </div>
      </PopupProvider>
    </SSRProvider>
  );
}

export const SizeL: Story = {
  name: 'Size L',
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
  render: () => <PopupDFSizeLExample />,
};
