import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui-kit/components/Badge';
import { Button } from '@ui-kit/components/Button';
import { Dropdown } from '@ui-kit/components/Dropdown';
import { IconButton } from '@ui-kit/components/IconButton';
import type { PageTitleSlotSizesProps } from '@ui-kit/components/PageTitle';
import { PageTitle } from '@ui-kit/components/PageTitle';
import { BodyS } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { IconDotsVerticalCenteredOutline } from '@ui-kit/icons';
import { surfaceAccentMinor, surfaceInfo } from '@ui-kit/tokens';
import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

import { DocPair } from '../../kit/DocPair';
import { Measure, MeasureLegend } from '../../kit/Measure';
import { ViewportFrame } from '../../kit/ViewportFrame';
import type { ScreenArgs } from '../../kit/ScreenSwitch';
import { SCREEN_ARG_TYPES, SCREEN_ARGS, withScreen } from '../../kit/ScreenSwitch';

const meta: Meta = {
  title: 'Композиции/PageTitle/Для дизайнеров',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
  },
};

export default meta;

type Story = StoryObj;

const stubStyle: CSSProperties = {
  padding: s.x4,
  borderRadius: s.x2,
  border: `1px dashed ${surfaceInfo}`,
  color: surfaceInfo,
  backgroundColor: surfaceAccentMinor,
};

const SlotStub = ({ children }: { children: ReactNode }) => (
  <div style={stubStyle}>
    <BodyS>{children}</BodyS>
  </div>
);

const Stack = ({ children, gap = 40 }: { children: ReactNode; gap?: number }) => (
  <div style={{ display: 'grid', gap }}>{children}</div>
);

const crumbs = {
  items: [
    { title: 'Главная', href: '#' },
    { title: 'Раздел', href: '#' },
    { title: 'Страница' },
  ],
};

const noop = () => undefined;

const Row = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'flex', gap: s.x4, alignItems: 'flex-start' }}>{children}</div>
);

/** Кнопки Right block: Secondary и Primary (в коде вид accent) */
const groupButton = ({ buttonSize }: PageTitleSlotSizesProps) => (
  <Row>
    <Button size={buttonSize} view="secondary">
      Действие 2
    </Button>
    <Button size={buttonSize} view="accent">
      Главное действие
    </Button>
  </Row>
);

const badge = <Badge size="l" view="accent" text="Label" />;

/**
 * «Три точки»: IconButton 40 S с открытым списком действий.
 * Список открывается, когда пример виден на экране: так он встаёт под кнопку,
 * а не по месту, где пример был при загрузке страницы.
 */
const Dots = ({ size, actions }: { size: 's' | 'xs'; actions: string[] }) => {
  const box = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = box.current;

    if (!el) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -20% 0px' },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={box} style={{ display: 'inline-flex' }}>
      <Dropdown
        key={String(shown)}
        alwaysOpened={shown}
        placement="bottom-start"
        listWidth="180px"
        items={actions.map((label) => ({ value: label, label }))}
      >
        <IconButton size={size} view="secondary" aria-label="Ещё действия">
          <IconDotsVerticalCenteredOutline color="inherit" />
        </IconButton>
      </Dropdown>
    </span>
  );
};

/* Живая настройка */

type PlaygroundArgs = {
  BreadCrumbs: boolean;
  Description: boolean;
  'Right block': boolean;
  Type: 'GroupButton' | 'Custom Slot';
  'Custom block': boolean;
  Back: boolean;
  Title: string;
};

export const Playground: StoryObj<PlaygroundArgs & ScreenArgs> = {
  decorators: [withScreen],
  name: 'Живая настройка',
  args: {
    ...SCREEN_ARGS,
    BreadCrumbs: true,
    Description: true,
    'Right block': true,
    Type: 'GroupButton',
    'Custom block': false,
    Back: true,
    Title: 'Title',
  },
  argTypes: {
    ...SCREEN_ARG_TYPES,
    BreadCrumbs: { control: 'boolean', description: 'Хлебные крошки над Title' },
    Description: { control: 'boolean', description: 'Описание под Title' },
    'Right block': { control: 'boolean', description: 'Блок справа' },
    Type: {
      control: 'inline-radio',
      options: ['GroupButton', 'Custom Slot'],
      description: 'Содержимое Right block',
      if: { arg: 'Right block', truthy: true },
    },
    'Custom block': { control: 'boolean', description: 'Custom Slot справа от Title' },
    Back: { control: 'boolean', description: 'Кнопка «Назад»' },
    Title: { control: 'text', description: 'Текст заголовка' },
  },
  render: (args) => (
    <PageTitle
      breadcrumbs={args.BreadCrumbs ? crumbs : undefined}
      showBackButton={args.Back}
      onBackClick={noop}
      title={args.Title}
      subtitle={args.Description ? 'Description' : undefined}
      titleSlot={args['Custom block'] ? badge : undefined}
      rightSlot={
        // eslint-disable-next-line no-nested-ternary
        !args['Right block'] ? undefined : args.Type === 'GroupButton' ? (
          groupButton
        ) : (
          <SlotStub>Custom Slot</SlotStub>
        )
      }
    />
  ),
};

/* Отступы */

const PageStub = ({ className, height, children }: { className: string; height: number; children: ReactNode }) => (
  <div
    className={className}
    style={{ ...stubStyle, height, display: 'grid', placeItems: 'center', padding: 0 }}
  >
    <BodyS>{children}</BodyS>
  </div>
);

const SPACING_GAPS = [
  { a: '.m-header', b: '.PageTitle__root', dir: 'v', tone: 'outer' },
  { a: '&', b: '.PageTitle__root', dir: 'h', tone: 'outer' },
  { a: '.PageTitle__root', b: '&', dir: 'h', tone: 'outer' },
  { a: '.PageTitle__root', b: '.m-panel', dir: 'v', tone: 'outer' },
  { a: '.m-panel', b: '.m-content', dir: 'v', tone: 'outer' },
  { a: '.PageTitle__breadcrumbs', b: '.PageTitle__content', dir: 'v', tone: 'inner' },
  { a: '.PageTitle__title', b: '.PageTitle__subtitle', dir: 'v', tone: 'inner' },
  { a: '.PageTitle__back-icon-block', b: '.PageTitle__title-block', dir: 'h', tone: 'inner' },
  { a: '.PageTitle__title-block', b: '.PageTitle__title-slot', dir: 'h', tone: 'inner' },
  { a: '.PageTitle__left-block', b: '.PageTitle__right-block', dir: 'h', tone: 'inner' },
] as const;

export const SpacingLive: Story = {
  name: 'Отступы на живом компоненте',
  render: () => (
    <>
      <Measure
        gaps={[...SPACING_GAPS]}
        style={{ backgroundColor: 'var(--background-primary)', paddingBottom: 24 }}
      >
        <PageStub className="m-header" height={56}>
          Header FinAI
        </PageStub>
        <div style={{ padding: '16px 32px 0' }}>
          <PageTitle
            breadcrumbs={crumbs}
            showBackButton
            onBackClick={noop}
            title="Title"
            subtitle="Description"
            titleSlot={badge}
            rightSlot={groupButton}
          />
          <div style={{ marginTop: 24 }}>
            <PageStub className="m-panel" height={48}>
              Panel Block
            </PageStub>
          </div>
          <div style={{ marginTop: 24 }}>
            <PageStub className="m-content" height={96}>
              Контент
            </PageStub>
          </div>
        </div>
      </Measure>
      <MeasureLegend />
    </>
  ),
};

/** Страница в окне заданной ширины: для сравнения размера кнопок */
export const AdaptiveFrame: Story = {
  name: 'Page Title в окне',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ width: 900, boxSizing: 'border-box', padding: '16px 32px', backgroundColor: 'var(--background-primary)' }}>
      <PageTitle
        breadcrumbs={crumbs}
        showBackButton
        onBackClick={noop}
        title="Title"
        subtitle="Description"
        titleSlot={({ buttonSize }: PageTitleSlotSizesProps) => (
          <Button size={buttonSize} view="secondary">
            Custom block
          </Button>
        )}
        rightSlot={groupButton}
      />
    </div>
  ),
};

export const Adaptive: Story = {
  name: 'Кнопки на 1920 и 1280 px',
  render: () => (
    <Stack gap={24}>
      <ViewportFrame
        storyId="композиции-pagetitle-для-дизайнеров--adaptive-frame"
        width={1920}
        height={150}
        visibleWidth={900}
        caption="Окно 1920 px: кнопки размера S"
      />
      <ViewportFrame
        storyId="композиции-pagetitle-для-дизайнеров--adaptive-frame"
        width={1280}
        height={150}
        visibleWidth={900}
        caption="Окно 1280 px: кнопки размера XS"
      />
    </Stack>
  ),
};

/* Общие настройки */

export const BreadCrumbs: Story = {
  name: 'BreadCrumbs',
  render: () => (
    <Stack>
      <PageTitle breadcrumbs={crumbs} title="С хлебными крошками" />
      <PageTitle title="Без хлебных крошек" />
    </Stack>
  ),
};

export const Description: Story = {
  name: 'Description',
  render: () => (
    <Stack>
      <PageTitle title="С описанием" subtitle="Описание занимает одну строку" />
      <PageTitle title="Без описания" />
      <div style={{ maxWidth: 520 }}>
        <PageTitle
          title="Длинное описание"
          subtitle="Длинное описание страницы не помещается в одну строку, поэтому обрезается, а целиком показывается в подсказке при наведении"
        />
      </div>
    </Stack>
  ),
};

export const RightBlock: Story = {
  name: 'Right block',
  render: () => (
    <Stack>
      <PageTitle title="GroupButton" rightSlot={groupButton} />
      <PageTitle title="Custom Slot" rightSlot={<SlotStub>Custom Slot</SlotStub>} />
    </Stack>
  ),
};

export const CustomBlock: Story = {
  name: 'Custom block',
  render: () => <PageTitle title="Title" subtitle="Description" titleSlot={badge} />,
};

export const Back: Story = {
  name: 'Back',
  render: () => (
    <Stack>
      <PageTitle title="С кнопкой «Назад»" showBackButton onBackClick={noop} />
      <PageTitle title="Без кнопки «Назад»" />
    </Stack>
  ),
};

/* Кнопки в Right block */

export const ButtonsThree: Story = {
  name: 'Три кнопки',
  render: () => (
    <PageTitle
      title="Title"
      rightSlot={({ buttonSize }: PageTitleSlotSizesProps) => (
        <Row>
          <Button size={buttonSize} view="secondary">
            Действие 3
          </Button>
          {groupButton({ buttonSize })}
        </Row>
      )}
    />
  ),
};

export const ButtonsFour: Story = {
  name: 'Четыре действия',
  render: () => (
    <div style={{ paddingBottom: 120 }}>
      <PageTitle
        title="Title"
        rightSlot={({ buttonSize }: PageTitleSlotSizesProps) => (
          <Row>
            <Dots size={buttonSize} actions={['Действие 3', 'Действие 4']} />
            {groupButton({ buttonSize })}
          </Row>
        )}
      />
    </div>
  ),
};

export const PairDots: Story = {
  name: 'Пара: три точки',
  render: () => (
    <DocPair
      goodText="В «трёх точках» два действия, на экране Primary и три точки"
      badText="В «трёх точках» одно действие"
      good={
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: 120 }}>
          <Row>
            <Dots size="s" actions={['Действие 2', 'Действие 3']} />
            <Button size="s" view="accent">
              Главное действие
            </Button>
          </Row>
        </div>
      }
      bad={
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: 120 }}>
          <Row>
            <Dots size="s" actions={['Действие 3']} />
            <Button size="s" view="secondary">
              Действие 2
            </Button>
            <Button size="s" view="accent">
              Главное действие
            </Button>
          </Row>
        </div>
      }
    />
  ),
};

export const ButtonsException: Story = {
  name: 'Исключение: четыре кнопки',
  render: () => (
    <PageTitle
      title="Title"
      rightSlot={({ buttonSize }: PageTitleSlotSizesProps) => (
        <Row>
          <Button size={buttonSize} view="secondary">
            Действие 4
          </Button>
          <Button size={buttonSize} view="secondary">
            Действие 3
          </Button>
          {groupButton({ buttonSize })}
        </Row>
      )}
    />
  ),
};

/* Заголовок */

export const LongTitle: Story = {
  name: 'Длинный Title',
  render: () => (
    <PageTitle
      title="Длинное название страницы, которое не помещается в одну строку и обрезается многоточием"
      subtitle="Наведите курсор на заголовок, чтобы увидеть его целиком"
      rightSlot={groupButton}
    />
  ),
};

/* Хлебные крошки и «Назад» */

export const CrumbsOrBack: Story = {
  name: 'Хлебные крошки или «Назад»',
  render: () => (
    <Stack>
      <PageTitle breadcrumbs={crumbs} title="Хлебные крошки" />
      <PageTitle title="Кнопка «Назад»" showBackButton onBackClick={noop} />
    </Stack>
  ),
};
