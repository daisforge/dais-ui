/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Flow } from '@ui-kit/components/Flow';
import { PopoverDF } from '@ui-kit/components/PopoverDF';
import { s } from '@ui-kit/constants';
import {
  backgroundPrimary,
  outlineAccent,
  surfaceAccentMinor,
  surfaceInfo
} from '@ui-kit/tokens';
import React, { useState } from 'react';

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

type PopoverDFStoryArgs = React.ComponentProps<typeof PopoverDF> & {
  withHeaderSlot?: boolean;
  withBody?: boolean;
  withFooter?: boolean;
  showCloseButton?: boolean;
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

const actionSizeByPopoverSize = {
  m: 'xs',
  s: 'xxs'
} as const;

const popoverPlacements = [
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end'
] as const;

const resizeDirectionsOptions: ResizeDirection[] = [
  'top',
  'top-right',
  'right',
  'bottom-right',
  'bottom',
  'bottom-left',
  'left',
  'top-left'
];

const resizeHiddenIconsOptions: ResizeCorner[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right'
];

const hiddenArgType = {
  control: false,
  table: { disable: true }
} as const;

const simpleArgTypes = {
  size: hiddenArgType,
  target: hiddenArgType,
  placement: hiddenArgType,
  trigger: hiddenArgType,
  defaultOpened: hiddenArgType,
  opened: hiddenArgType,
  onToggle: hiddenArgType,
  hasTail: hiddenArgType,
  flip: hiddenArgType,
  shift: hiddenArgType,
  offset: hiddenArgType,
  outsideClick: hiddenArgType,
  delayOpen: hiddenArgType,
  delayClose: hiddenArgType,
  showCloseButton: hiddenArgType,
  withHeaderSlot: hiddenArgType,
  withBody: hiddenArgType,
  withFooter: hiddenArgType,
  resizable: hiddenArgType,
  resizableDisabled: hiddenArgType,
  resizableDirections: hiddenArgType,
  resizableHiddenIcons: hiddenArgType,
  resizableDefaultSize: hiddenArgType,
  resizableMinWidth: hiddenArgType,
  resizableMinHeight: hiddenArgType,
  resizableMaxWidth: hiddenArgType,
  resizableMaxHeight: hiddenArgType,
  resizableIconSize: hiddenArgType
};

const preCode = `import { useState } from 'react';
import { Button, Flow, PopoverDF } from '@dais-ui/ui-kit';

// Контент футера — обычные кнопки, которые вы кладёте в PopoverDF.Footer
function FooterActions() {
  return (
    <Flow mainAxisGap={8}>
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

  return (
    <PopoverDF
      target={
        <Button onClick={() => setOpened(true)}>Открыть PopoverDF</Button>
      }
      opened={opened}
      onToggle={setOpened}
      placement="bottom-start"
      offset={8}
      size="m"
      style={{ width: '320px' }}
    >
      <PopoverDF.Header title="Title" description="Description" />
      <PopoverDF.Body>Контент поповера</PopoverDF.Body>
      <PopoverDF.Footer>
        <FooterActions />
      </PopoverDF.Footer>
    </PopoverDF>
  );
}`;

const playgroundCode = `${preCode}
function Example() {
  const [opened, setOpened] = useState(false);

  return (
    <PopoverDF
      target={
        <Button onClick={() => setOpened(true)}>Открыть PopoverDF</Button>
      }
      opened={opened}
      onToggle={setOpened}
      placement="bottom"
      trigger="click"
      size="m"
      hasTail
      offset={8}
      resizable={{
        defaultSize: { width: 320, height: 180 },
        minWidth: 240,
        minHeight: 120,
        iconSize: 's',
      }}
    >
      <PopoverDF.Header
        title="Title"
        description="Description"
        showCloseButton
      />
      <PopoverDF.Body>Контент поповера</PopoverDF.Body>
      <PopoverDF.Footer>
        <FooterActions />
      </PopoverDF.Footer>
    </PopoverDF>
  );
}`;

const meta: Meta<PopoverDFStoryArgs> = {
  title: 'Локальные компоненты/PopoverDF',
  component: PopoverDF,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    size: {
      options: ['m', 's'],
      control: { type: 'inline-radio' }
    },
    target: {
      control: false,
      table: { disable: true }
    },
    placement: {
      options: popoverPlacements,
      control: { type: 'select' }
    },
    trigger: {
      options: ['click', 'hover', 'focus'],
      control: { type: 'select' }
    },
    defaultOpened: {
      control: 'boolean'
    },
    hasTail: {
      control: 'boolean'
    },
    flip: {
      control: 'boolean'
    },
    shift: {
      control: 'boolean'
    },
    offset: {
      control: 'number'
    },
    outsideClick: {
      control: 'boolean'
    },
    delayOpen: {
      control: 'number'
    },
    delayClose: {
      control: 'number'
    },
    showCloseButton: {
      control: 'boolean'
    },
    withHeaderSlot: {
      control: 'boolean'
    },
    withBody: {
      control: 'boolean'
    },
    withFooter: {
      control: 'boolean'
    },
    resizable: {
      control: 'boolean'
    },
    resizableDisabled: {
      control: 'boolean'
    },
    resizableDirections: {
      control: 'check',
      options: resizeDirectionsOptions
    },
    resizableHiddenIcons: {
      control: 'check',
      options: resizeHiddenIconsOptions
    },
    resizableDefaultSize: {
      control: 'object'
    },
    resizableMinWidth: {
      control: 'number'
    },
    resizableMinHeight: {
      control: 'number'
    },
    resizableMaxWidth: {
      control: 'number'
    },
    resizableMaxHeight: {
      control: 'number'
    },
    resizableIconSize: {
      options: ['xs', 's', 'm'],
      control: { type: 'select' }
    }
  },
  args: {
    size: 'm',
    placement: 'bottom',
    trigger: 'click',
    defaultOpened: false,
    hasTail: true,
    flip: false,
    shift: false,
    offset: 8,
    outsideClick: true,
    delayOpen: 0,
    delayClose: 0,
    showCloseButton: true,
    withHeaderSlot: true,
    withBody: true,
    withFooter: true,
    resizable: false,
    resizableDisabled: false,
    resizableDirections: undefined,
    resizableHiddenIcons: undefined,
    resizableDefaultSize: { width: 320, height: 180 },
    resizableMinWidth: 240,
    resizableMinHeight: 120,
    resizableIconSize: 's'
  }
};

export default meta;

type Story = StoryObj<PopoverDFStoryArgs>;

const playgroundStyle: React.CSSProperties = {
  minHeight: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: s.x16,
  backgroundColor: backgroundPrimary
};

const slotBoxStyle: React.CSSProperties = {
  minHeight: '56px',
  border: `1px solid ${outlineAccent}`,
  background: surfaceAccentMinor,
  display: 'flex',
  alignItems: 'center',
  color: surfaceInfo,
  padding: '12px'
};

const bodyBoxStyle: React.CSSProperties = {
  minHeight: '56px',
  border: `1px solid ${outlineAccent}`,
  background: surfaceAccentMinor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: surfaceInfo,
  padding: '12px'
};

function StoryStage({ children }: { children: React.ReactNode }) {
  return <div style={playgroundStyle}>{children}</div>;
}

function HeaderSlot() {
  return <div style={slotBoxStyle}>PopoverDF.Header / bottomBlock</div>;
}

function BodySlot() {
  return <div style={bodyBoxStyle}>PopoverDF.Body</div>;
}

function FooterButtons({ size = 'm' }: { size?: 's' | 'm' }) {
  const actionSize = actionSizeByPopoverSize[size];

  return (
    <Flow mainAxisGap={s.x2}>
      <Button size={actionSize} view="secondary">
        Label
      </Button>
      <Button size={actionSize} view="accent">
        Label
      </Button>
    </Flow>
  );
}

function FooterActions({ size = 'm' }: { size?: 's' | 'm' }) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
      <FooterButtons size={size} />
    </div>
  );
}

function PopoverDFPlaygroundExample({
  size = 'm',
  placement = 'bottom',
  trigger = 'click',
  defaultOpened = false,
  hasTail = true,
  flip = false,
  shift = false,
  offset = 8,
  outsideClick = true,
  delayOpen = 0,
  delayClose = 0,
  showCloseButton = true,
  withHeaderSlot = true,
  withBody = true,
  withFooter = true,
  resizable,
  resizableDisabled = false,
  resizableDirections,
  resizableHiddenIcons,
  resizableDefaultSize,
  resizableMinWidth,
  resizableMinHeight,
  resizableMaxWidth,
  resizableMaxHeight,
  resizableIconSize
}: PopoverDFStoryArgs) {
  const content = (
    <>
      <PopoverDF.Header
        title="Title"
        description="Description"
        showCloseButton={showCloseButton}
        bottomBlock={withHeaderSlot ? <HeaderSlot /> : undefined}
      />
      {withBody && (
        <PopoverDF.Body>
          <BodySlot />
        </PopoverDF.Body>
      )}
      {withFooter && (
        <PopoverDF.Footer>
          <FooterActions size={size} />
        </PopoverDF.Footer>
      )}
    </>
  );

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
        iconSize: resizableIconSize
      }
    : undefined;

  return (
    <PopoverDF
      target={<Button>Открыть PopoverDF</Button>}
      placement={placement}
      trigger={trigger}
      defaultOpened={defaultOpened}
      flip={flip}
      shift={shift}
      offset={offset}
      outsideClick={outsideClick}
      delayOpen={delayOpen}
      delayClose={delayClose}
      size={size}
      hasTail={hasTail}
      resizable={resizableConfig}
      style={resizable ? undefined : { width: '320px' }}
    >
      {content}
    </PopoverDF>
  );
}

function renderInStage(node: React.ReactNode) {
  return <StoryStage>{node}</StoryStage>;
}

function PopoverDFSimpleExample() {
  const [opened, setOpened] = useState(false);

  return (
    <PopoverDF
      target={
        <Button onClick={() => setOpened(true)}>Открыть PopoverDF</Button>
      }
      opened={opened}
      onToggle={setOpened}
      placement="bottom-start"
      offset={8}
      size="m"
      style={{ width: '320px' }}
    >
      <PopoverDF.Header title="Title" description="Description" />
      <PopoverDF.Body>
        <BodySlot />
      </PopoverDF.Body>
      <PopoverDF.Footer>
        <FooterActions />
      </PopoverDF.Footer>
    </PopoverDF>
  );
}

export const Simple: Story = {
  name: 'Simple',
  argTypes: simpleArgTypes,
  args: {},
  parameters: {
    controls: {
      disable: true,
      exclude: /.*/
    },
    docs: {
      controls: {
        exclude: /.*/
      }
    }
  },
  ...storySourceDoc({ code: simpleCode, previewSource: 'shown' }),
  render: () => renderInStage(<PopoverDFSimpleExample />)
};

export const Playground: Story = {
  name: 'Playground',
  ...storySourceDoc({ code: playgroundCode, previewSource: 'shown' }),
  render: (args) => renderInStage(<PopoverDFPlaygroundExample {...args} />)
};
