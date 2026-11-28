import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui-kit/components/Badge';
import type { BlockTitleSlotSizesProps } from '@ui-kit/components/BlockTitle';
import { BlockTitle } from '@ui-kit/components/BlockTitle';
import { blockTitleClassNames as cls } from '@ui-kit/components/BlockTitle/BlockTitle.classname';
import { Button } from '@ui-kit/components/Button';
import { IconButton } from '@ui-kit/components/IconButton';
import { PageTitle } from '@ui-kit/components/PageTitle';
import { DocPair } from '../../kit/DocPair';
import type { ScreenArgs } from '../../kit/ScreenSwitch';
import { SCREEN_ARG_TYPES, SCREEN_ARGS, withScreen } from '../../kit/ScreenSwitch';
import { BodyS } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { IconDotsVerticalCenteredOutline, IconPlasma } from '@ui-kit/icons';
import { surfaceAccentMinor, surfaceInfo } from '@ui-kit/tokens';
import type { CSSProperties, ReactNode } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

const meta: Meta = {
  title: 'Композиции/BlockTitle/Для дизайнеров',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
  },
};

export default meta;

type Story = StoryObj;

const slotStyle: CSSProperties = {
  padding: s.x4,
  borderRadius: s.x2,
  border: `1px dashed ${surfaceInfo}`,
  color: surfaceInfo,
  backgroundColor: surfaceAccentMinor,
};

const SlotStub = ({ children }: { children: ReactNode }) => (
  <div style={slotStyle}>
    <BodyS>{children}</BodyS>
  </div>
);

const groupButton = ({
  buttonSize,
  actionIconSize,
}: BlockTitleSlotSizesProps) => (
  <div style={{ display: 'flex', gap: s.x4 }}>
    <IconButton size={buttonSize} view="secondary">
      <IconDotsVerticalCenteredOutline size={actionIconSize} color="inherit" />
    </IconButton>
    <Button size={buttonSize} view="secondary">
      Label
    </Button>
    <Button size={buttonSize} view="accent">
      Label
    </Button>
  </div>
);

const icon = ({ titleIconSize }: BlockTitleSlotSizesProps) => (
  <IconPlasma size={titleIconSize} />
);

const badge = ({ titleBadgeSize }: BlockTitleSlotSizesProps) => (
  <Badge size={titleBadgeSize} view="default" text="Label" />
);

const noop = () => undefined;

export const Overview: Story = {
  name: 'Общий вид',
  render: () => (
    <BlockTitle
      title="Title"
      titleSize="H4"
      description="Description"
      onBackButtonClick={noop}
      titleRightSlot={badge}
      rightSlot={groupButton}
    />
  ),
};

export const CustomSlot: Story = {
  name: 'Custom Slot',
  render: () => (
    <BlockTitle
      title="Title"
      titleSize="H4"
      topSlot={<SlotStub>Custom Slot</SlotStub>}
    />
  ),
};

export const RightBlock: Story = {
  name: 'Right Block',
  render: () => (
    <div style={{ display: 'grid', gap: s.x12 }}>
      <BlockTitle title="Group Button" titleSize="H4" rightSlot={groupButton} />
      <BlockTitle
        title="Custom Slot"
        titleSize="H4"
        rightSlot={<SlotStub>Custom Slot</SlotStub>}
      />
    </div>
  ),
};

export const Back: Story = {
  name: 'Back',
  render: () => (
    <BlockTitle title="Title" titleSize="H4" onBackButtonClick={noop} />
  ),
};

export const TitleSize: Story = {
  name: 'TitleSize',
  render: () => (
    <div style={{ display: 'grid', gap: s.x12 }}>
      {(['H3', 'H4', 'H5'] as const).map((size) => (
        <BlockTitle
          key={size}
          title={size}
          titleSize={size}
          titleLeftSlot={icon}
          titleRightSlot={badge}
        />
      ))}
    </div>
  ),
};

export const Description: Story = {
  name: 'Description',
  render: () => (
    <BlockTitle
      title="Title"
      titleSize="H4"
      description="Описание под заголовком, рекомендуем не более двух строк"
    />
  ),
};

export const LIcon: Story = {
  name: 'L Icon',
  render: () => <BlockTitle title="Title" titleSize="H4" titleLeftSlot={icon} />,
};

export const RContent: Story = {
  name: 'R Content',
  render: () => (
    <div style={{ display: 'grid', gap: s.x12 }}>
      <BlockTitle title="Icon" titleSize="H4" titleRightSlot={icon} />
      <BlockTitle title="Badge" titleSize="H4" titleRightSlot={badge} />
    </div>
  ),
};

export const TitleCustomSlot: Story = {
  name: 'TitleCustomSlot',
  render: () => (
    <BlockTitle
      title="Title"
      titleSize="H4"
      titleRightSlot={<SlotStub>Custom Slot</SlotStub>}
    />
  ),
};

type PlaygroundArgs = {
  'Custom Slot': boolean;
  'Right Block': boolean;
  Type: 'Group Button' | 'Custom Slot';
  Back: boolean;
  TitleSize: 'H3' | 'H4' | 'H5';
  Text: string;
  Description: boolean;
  'L Icon': boolean;
  'R Content': boolean;
  Content: 'Icon' | 'Badge';
  TitleCustomSlot: boolean;
};

export const Playground: StoryObj<PlaygroundArgs & ScreenArgs> = {
  decorators: [withScreen],
  name: 'Живая настройка',
  args: {
    ...SCREEN_ARGS,
    'Custom Slot': false,
    'Right Block': true,
    Type: 'Group Button',
    Back: false,
    TitleSize: 'H4',
    Text: 'Title',
    Description: true,
    'L Icon': false,
    'R Content': true,
    Content: 'Badge',
    TitleCustomSlot: false,
  },
  argTypes: {
    ...SCREEN_ARG_TYPES,
    'Custom Slot': { control: 'boolean', description: 'Слот над Title' },
    'Right Block': { control: 'boolean', description: 'Блок справа' },
    Type: {
      control: 'inline-radio',
      options: ['Group Button', 'Custom Slot'],
      description: 'Содержимое Right Block',
      if: { arg: 'Right Block', truthy: true },
    },
    Back: { control: 'boolean', description: 'Кнопка «Назад»' },
    TitleSize: {
      control: 'inline-radio',
      options: ['H3', 'H4', 'H5'],
      description: 'Размер заголовка',
    },
    Text: { control: 'text', description: 'Значение заголовка' },
    Description: { control: 'boolean', description: 'Описание под заголовком' },
    'L Icon': { control: 'boolean', description: 'Иконка слева' },
    'R Content': { control: 'boolean', description: 'Контент справа' },
    Content: {
      control: 'inline-radio',
      options: ['Icon', 'Badge'],
      description: 'Содержимое R Content',
      if: { arg: 'R Content', truthy: true },
    },
    TitleCustomSlot: {
      control: 'boolean',
      description: 'Custom Slot справа от Title',
    },
  },
  render: (args) => {
    const rightContent = args.Content === 'Icon' ? icon : badge;

    return (
      <BlockTitle
        title={args.Text}
        titleSize={args.TitleSize}
        description={args.Description ? 'Description' : undefined}
        onBackButtonClick={args.Back ? noop : undefined}
        topSlot={args['Custom Slot'] ? <SlotStub>Custom Slot</SlotStub> : null}
        titleLeftSlot={args['L Icon'] ? icon : null}
        titleRightSlot={(sizes: BlockTitleSlotSizesProps) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: s.x4 }}>
            {args['R Content'] ? rightContent(sizes) : null}
            {args.TitleCustomSlot ? <SlotStub>Custom Slot</SlotStub> : null}
          </div>
        )}
        rightSlot={
          // eslint-disable-next-line no-nested-ternary
          !args['Right Block'] ? null : args.Type === 'Group Button' ? (
            groupButton
          ) : (
            <SlotStub>Custom Slot</SlotStub>
          )
        }
      />
    );
  },
};

const OUTER = 'rgba(124, 58, 237, 0.14)';
const OUTER_MARK = 'rgb(124, 58, 237)';
const INNER_MARK = 'rgb(225, 45, 45)';

const Mark = ({
  children,
  color,
  style,
}: {
  children: ReactNode;
  color: string;
  style: CSSProperties;
}) => (
  <span
    style={{
      position: 'absolute',
      padding: '0 4px',
      borderRadius: 4,
      font: '500 11px/16px sans-serif',
      color: '#fff',
      backgroundColor: color,
      transform: 'translate(-50%, -50%)',
      ...style,
    }}
  >
    {children}
  </span>
);

const SpacingMeasure = () => {
  const box = useRef<HTMLDivElement>(null);
  const [gap, setGap] = useState<{
    left: number;
    top: number;
    width: number;
    value: number;
  }>();

  useLayoutEffect(() => {
    const root = box.current;
    const title = root?.querySelector(`.${cls.title}`);
    const description = root?.querySelector(`.${cls.description}`);

    if (!root || !title || !description) {
      return;
    }

    const base = root.getBoundingClientRect();
    const a = title.getBoundingClientRect();
    const b = description.getBoundingClientRect();

    const text = document.createRange();
    text.selectNodeContents(description);

    setGap({
      left: b.left - base.left,
      top: a.bottom - base.top,
      width: text.getBoundingClientRect().width,
      value: Math.round(b.top - a.bottom),
    });
  }, []);

  return (
    <div
      ref={box}
      style={{ position: 'relative', padding: 16, backgroundColor: OUTER }}
    >
      <div style={{ backgroundColor: 'var(--background-primary)' }}>
        <BlockTitle
          title="Title"
          titleSize="H4"
          description="Description"
          rightSlot={groupButton}
        />
      </div>
      <div
        style={{
          height: 72,
          marginTop: 16,
          display: 'grid',
          placeItems: 'center',
          backgroundColor: surfaceAccentMinor,
          color: surfaceInfo,
        }}
      >
        <BodyS>Content</BodyS>
      </div>
      <Mark color={OUTER_MARK} style={{ left: '50%', top: 8 }}>
        16
      </Mark>
      <Mark color={OUTER_MARK} style={{ left: 8, top: 'calc(100% - 52px)' }}>
        16
      </Mark>
      <Mark
        color={OUTER_MARK}
        style={{ left: 'calc(100% - 8px)', top: 'calc(100% - 52px)' }}
      >
        16
      </Mark>
      <Mark color={OUTER_MARK} style={{ left: '50%', top: 'calc(100% - 96px)' }}>
        16
      </Mark>
      {gap ? (
        <>
          <span
            style={{
              position: 'absolute',
              left: gap.left,
              top: gap.top,
              width: gap.width,
              height: gap.value,
              backgroundColor: INNER_MARK,
              opacity: 0.45,
            }}
          />
          <Mark
            color={INNER_MARK}
            style={{
              left: gap.left + gap.width + 16,
              top: gap.top + gap.value / 2,
            }}
          >
            {gap.value}
          </Mark>
        </>
      ) : null}
    </div>
  );
};

export const SpacingLive: Story = {
  name: 'Отступы на живом компоненте',
  render: () => <SpacingMeasure />,
};

/* Пары примеров к правилам с запретом */

const pageButtons = ({ buttonSize }: { buttonSize: 's' | 'xs' }) => (
  <div style={{ display: 'flex', gap: s.x4 }}>
    <Button size={buttonSize} view="secondary">
      Label
    </Button>
    <Button size={buttonSize} view="accent">
      Label
    </Button>
  </div>
);

const pairButtons = () => (
  <DocPair
    goodText="Кнопки только в Block Title, Page Title без кнопок"
    badText="Кнопки и в Page Title, и в Block Title"
    good={
      <div style={{ display: 'grid', gap: 16 }}>
        <PageTitle title="Page Title" />
        <BlockTitle title="Block Title" titleSize="H4" rightSlot={groupButton} />
      </div>
    }
    bad={
      <div style={{ display: 'grid', gap: 16 }}>
        <PageTitle title="Page Title" rightSlot={pageButtons} />
        <BlockTitle title="Block Title" titleSize="H4" rightSlot={groupButton} />
      </div>
    }
  />
);

export const PairButtons: Story = {
  name: 'Пара: кнопки',
  render: () => pairButtons(),
};

export const PairTitleSize: Story = {
  name: 'Пара: размер заголовка',
  render: () => (
    <DocPair
      goodText="Под Page Title заголовок второстепенный: H4 или H5"
      badText="Под Page Title заголовок H3"
      good={
        <div style={{ display: 'grid', gap: 16 }}>
          <PageTitle title="Page Title" />
          <BlockTitle title="Block Title" titleSize="H4" />
        </div>
      }
      bad={
        <div style={{ display: 'grid', gap: 16 }}>
          <PageTitle title="Page Title" />
          <BlockTitle title="Block Title" titleSize="H3" />
        </div>
      }
    />
  ),
};

export const PairDescription: Story = {
  name: 'Пара: описание',
  render: () => (
    <DocPair
      goodText="Описание не длиннее 2 строк"
      badText="Описание на 4 строки и больше"
      good={
        <div style={{ maxWidth: 300 }}>
          <BlockTitle title="Title" titleSize="H4" description="Короткое описание блока, которое помещается в две строки" />
        </div>
      }
      bad={
        <div style={{ maxWidth: 300 }}>
          <BlockTitle
            title="Title"
            titleSize="H4"
            description="Длинное описание блока, в котором пересказано всё содержимое ниже, перечислены условия, исключения и ещё несколько подробностей, которые лучше вынести в сам блок"
          />
        </div>
      }
    />
  ),
};
