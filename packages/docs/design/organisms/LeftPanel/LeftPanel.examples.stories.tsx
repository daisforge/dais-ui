import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Checkbox } from '@ui-kit/components/Checkbox';
import { Dropdown } from '@ui-kit/components/Dropdown';
import { IconButton } from '@ui-kit/components/IconButton';
import type {
  LeftPanelProps,
  LeftPanelSlotSizesProps,
} from '@ui-kit/components/LeftPanel';
import { LeftPanel } from '@ui-kit/components/LeftPanel';
import { List, ListItem } from '@ui-kit/components/List';
import { MassActionsStatic } from '@ui-kit/components/MassActionsStatic';
import {
  SegmentGroup,
  SegmentItem,
  SegmentProvider,
} from '@ui-kit/components/Segment';
import { Steps } from '@ui-kit/components/Steps';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import type { TreeItem } from '@ui-kit/components/Tree';
import { Tree } from '@ui-kit/components/Tree';
import { BodyM, BodyS } from '@ui-kit/components/Typography';
import { Widget } from '@ui-kit/components/Widget';
import { widgetClassNames as wcls } from '@ui-kit/components/Widget/Widget.classNames';
import { s } from '@ui-kit/constants';
import {
  IconDotsVerticalCenteredOutline,
  IconGroupOutline,
  IconHierarchy,
  IconPlasma,
  IconPlus,
  IconSearch,
} from '@ui-kit/icons';
import {
  shadowDownSoftS,
  surfaceAccentMinor,
  surfaceInfo,
  surfaceSolidCard,
  textSecondary,
} from '@ui-kit/tokens';
import type { CSSProperties, Key, ReactNode } from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { DocPair } from '../../kit/DocPair';
import type { MeasureGap } from '../../kit/Measure';
import { Measure, MeasureLegend } from '../../kit/Measure';
import { ViewportFrame } from '../../kit/ViewportFrame';
import type { ScreenArgs } from '../../kit/ScreenSwitch';
import { SCREEN_ARG, SCREEN_ARG_TYPES, SCREEN_ARGS, withScreen } from '../../kit/ScreenSwitch';

const meta: Meta = {
  title: 'Композиции/LeftPanel/Для дизайнеров',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
  },
};

export default meta;

type Story = StoryObj;
type Size = LeftPanelSlotSizesProps['buttonSize'];
type ButtonView = 'secondary' | 'accent' | 'dark';

/*
 * Примеры на странице показываются в размерах для экрана шире 1280 px
 * (`disableMediaAdaptive`): окно Storybook уже экрана, и без этой настройки
 * панель в примерах была бы 56 px, а текст рядом говорит про 72 px.
 * Вид на экране до 1280 px показан в замере отступов: там пример открыт
 * в окне заданной ширины без этой настройки.
 */

const PANEL = 'lp-doc-panel';
const EXPANDED = 'lp-doc-expanded';
const COLLAPSED = 'lp-doc-collapsed';
const CENTER = 'lp-doc-center';
const FOOTER_FEATURE = 'lp-doc-footer-feature';

const ITEMS = [
  'Основной план',
  'План блока',
  'Персональный план',
  'Журнал публикаций',
  'Сводный отчёт',
  'Черновики',
  'Шаблоны',
  'Архив планов',
  'Заявки',
  'Согласования',
  'Отчёт за квартал',
  'Отчёт за год',
  'Справочники',
  'Настройки доступа',
  'История изменений',
  'Корзина',
];

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

const Caption = ({ children }: { children: ReactNode }) => (
  <div style={{ marginTop: 8, font: '400 12px/16px sans-serif', color: '#5c636b' }}>
    {children}
  </div>
);

const ItemsList = ({ count = 6 }: { count?: number }) => (
  <List>
    {ITEMS.slice(0, count).map((text) => (
      <ListItem key={text}>{text}</ListItem>
    ))}
  </List>
);

/* Центральный блок страницы: заглушка рядом с панелью */
const Center = ({ children }: { children?: ReactNode }) => (
  <div
    className={CENTER}
    style={{
      flex: 1,
      minWidth: 0,
      padding: 16,
      borderRadius: 16,
      backgroundColor: surfaceSolidCard,
      boxShadow: shadowDownSoftS,
    }}
  >
    {children ?? <BodyS style={{ color: textSecondary }}>Центральный блок</BodyS>}
  </div>
);

/* Страница: панель и центральный блок в autolayout с явной высотой */
const Page = ({ height = 400, children }: { height?: number; children: ReactNode }) => (
  <div style={{ display: 'flex', height }}>{children}</div>
);

/* Sub-header: сегмент, строка поиска с кнопками, Bot Slot */

type SubHeaderOptions = {
  segment?: boolean;
  segmentLabels?: [string, string];
  search?: boolean;
  lButton?: ReactNode | boolean;
  rButton?: ReactNode | boolean;
  botSlot?: ReactNode | boolean;
};

const Segment = ({
  size,
  labels = ['Label', 'Label'],
}: {
  size: Size;
  labels?: [string, string];
}) => (
  <SegmentProvider defaultSelected={['item_0']}>
    <SegmentGroup hasBackground size={size} stretch>
      {labels.map((label, i) => (
        <SegmentItem
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          view="secondary"
          value={`item_${i}`}
          label={label}
          size={size}
        />
      ))}
    </SegmentGroup>
  </SegmentProvider>
);

const iconButton = (
  size: Size,
  icon: ReactNode = <IconGroupOutline />,
  view: ButtonView = 'secondary',
) => (
  <IconButton size={size} view={view} style={{ aspectRatio: '1 / 1' }}>
    {icon}
  </IconButton>
);

const subHeader = (o: SubHeaderOptions) => (size: Size) => {
  const lButton = o.lButton === true ? iconButton(size) : o.lButton || null;
  const rButton = o.rButton === true ? iconButton(size) : o.rButton || null;
  const botSlot =
    o.botSlot === true ? <SlotStub>Bot Slot</SlotStub> : o.botSlot || null;

  return (
    <div style={{ display: 'grid', gap: s.x8 }}>
      {o.segment ? <Segment size={size} labels={o.segmentLabels} /> : null}
      {o.search !== false ? (
        <div style={{ display: 'flex', gap: s.x4 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <TextFieldSearch size={size} placeholder="Поиск" />
          </div>
          {lButton}
          {rButton}
        </div>
      ) : null}
      {botSlot}
    </div>
  );
};

/* Развёрнутая панель из Widget: Header, Sub-header, Body, Footer */

type ExpandedOptions = {
  header?: boolean;
  title?: string;
  titleSize?: 'H3' | 'H4' | 'H5';
  badge?: boolean;
  description?: boolean;
  subHeader?: (size: Size) => ReactNode;
  reserveToggle?: boolean;
  body?: ReactNode;
  footer?: (size: Size) => ReactNode;
};

/* Место справа от заголовка под кнопку сворачивания, как в примере разработчиков */
const headerCss = { overflow: 'hidden', columnGap: '56px !important' };

const expanded =
  (o: ExpandedOptions) =>
  ({ buttonSize }: LeftPanelSlotSizesProps) => {
    const header = o.header !== false;
    const bottom = o.subHeader ? o.subHeader(buttonSize) : null;

    return (
      <Widget $css={{ overflow: 'hidden' }}>
        {header || bottom ? (
          <Widget.Header
            title={header ? o.title ?? 'Title' : undefined}
            titleSize={o.titleSize ?? 'H4'}
            badge={header && o.badge ? { text: 'Label', size: 's', transparent: true } : undefined}
            subTitle={header && o.description ? 'Description' : undefined}
            bottomBlock={
              bottom && o.reserveToggle ? (
                <div style={{ paddingRight: 48 }}>{bottom}</div>
              ) : (
                bottom
              )
            }
            $css={
              header
                ? headerCss
                : {
                    overflow: 'hidden',
                    [`& .${wcls.headerBottomBlock}`]: { marginTop: 0 },
                  }
            }
          />
        ) : null}
        <Widget.Content>{o.body ?? <ItemsList />}</Widget.Content>
        {o.footer ? <Widget.Footer>{o.footer(buttonSize)}</Widget.Footer> : null}
      </Widget>
    );
  };

const footerButton = (size: Size) => (
  <Button size={size} view="secondary" stretching="filled">
    Label
  </Button>
);

const features =
  (
    icons: ReactNode[] = [
      <IconSearch key="search" />,
      <IconGroupOutline key="group" />,
      <IconPlus key="plus" />,
    ],
  ) =>
  ({ buttonSize }: LeftPanelSlotSizesProps) => (
    <>
      {icons.map((icon, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <IconButton key={i} size={buttonSize} view="secondary">
          {icon}
        </IconButton>
      ))}
    </>
  );

const footerFeatures = ({ buttonSize }: LeftPanelSlotSizesProps) => (
  <IconButton className={FOOTER_FEATURE} size={buttonSize} view="secondary">
    <IconGroupOutline />
  </IconButton>
);

/* Панель со своим состоянием: свёрнута или нет, ширина */

type PanelProps = Omit<LeftPanelProps, 'collapseState' | 'widthState'> & {
  collapsed?: boolean;
  width?: number;
  /** Вести себя как в настоящем окне: на экране до 1280 px уменьшаться */
  adaptive?: boolean;
};

const Panel = ({
  collapsed = false,
  width = 320,
  adaptive = false,
  containerProps,
  ...rest
}: PanelProps) => {
  const collapseState = useState(collapsed);
  const widthState = useState<number | undefined>(collapsed ? undefined : width);

  return (
    <LeftPanel
      disableMediaAdaptive={!adaptive}
      collapseState={collapseState}
      widthState={widthState}
      containerProps={{ ...containerProps, className: PANEL }}
      contentProps={{ className: EXPANDED }}
      collapsedContentProps={{ className: COLLAPSED }}
      {...rest}
    />
  );
};

const standard: ExpandedOptions = {
  title: 'Title',
  badge: true,
  description: true,
  subHeader: subHeader({ segment: true, lButton: true, rButton: true }),
  footer: footerButton,
};

/* Живая настройка */

type PlaygroundArgs = {
  Collapsed: boolean;
  Resize: boolean;
  Header: boolean;
  SubHeader: boolean;
  Footer: boolean;
  ShowCollapse: boolean;
  TitleSize: 'H3' | 'H4' | 'H5';
  Text: string;
  'R Badge': boolean;
  Description: boolean;
  Segment: boolean;
  'Search bar': boolean;
  'L Button': boolean;
  'R Button': boolean;
  'Bot Slot': boolean;
  Features: boolean;
  'Footer Features': boolean;
};

const PlaygroundView = (args: PlaygroundArgs & Partial<ScreenArgs>) => {
  const collapseState = useState(args.Collapsed);
  const widthState = useState<number | undefined>(
    args.Collapsed ? undefined : 360,
  );
  const [, setCollapsed] = collapseState;
  const [, setWidth] = widthState;

  useEffect(() => {
    setCollapsed(args.Collapsed);
    setWidth(args.Collapsed ? 72 : 360);
  }, [args.Collapsed, setCollapsed, setWidth]);

  return (
    <Page height={520}>
      <LeftPanel
        // на странице панель в размерах шире 1280 px, в окне 1920 или 1280 px как на настоящем экране
        disableMediaAdaptive={(args[SCREEN_ARG] ?? 'Текущий') === 'Текущий'}
        collapseState={collapseState}
        widthState={widthState}
        showResizeable={args.Resize}
        showToggleButton={args.ShowCollapse}
        containerProps={{ className: PANEL }}
        expandedContent={expanded({
          header: args.Header,
          title: args.Text,
          titleSize: args.TitleSize,
          badge: args['R Badge'],
          description: args.Description,
          reserveToggle: !args.Header && args.ShowCollapse,
          subHeader: args.SubHeader
            ? subHeader({
                segment: args.Segment,
                search: args['Search bar'],
                lButton: args['L Button'],
                rButton: args['R Button'],
                botSlot: args['Bot Slot'],
              })
            : undefined,
          body: <ItemsList count={10} />,
          footer: args.Footer ? footerButton : undefined,
        })}
        collapsedContent={args.Features ? features() : null}
        collapsedFooterContent={args['Footer Features'] ? footerFeatures : null}
      />
      <Center />
    </Page>
  );
};

export const Playground: StoryObj<PlaygroundArgs & ScreenArgs> = {
  decorators: [withScreen],
  name: 'Живая настройка',
  args: {
    ...SCREEN_ARGS,
    Collapsed: false,
    Resize: true,
    Header: true,
    SubHeader: true,
    Footer: true,
    ShowCollapse: true,
    TitleSize: 'H4',
    Text: 'Title',
    'R Badge': true,
    Description: true,
    Segment: true,
    'Search bar': true,
    'L Button': true,
    'R Button': true,
    'Bot Slot': false,
    Features: true,
    'Footer Features': true,
  },
  argTypes: {
    ...SCREEN_ARG_TYPES,
    Collapsed: { control: 'boolean', description: 'Свёрнутый вид' },
    Resize: {
      control: 'boolean',
      description: 'Полоска ресайза на правой границе',
    },
    Header: { control: 'boolean', description: 'Шапка панели' },
    SubHeader: {
      control: 'boolean',
      description: 'Блок под шапкой: сегмент, поиск, кнопки',
    },
    Footer: { control: 'boolean', description: 'Блок внизу панели' },
    ShowCollapse: { control: 'boolean', description: 'Кнопка сворачивания' },
    TitleSize: {
      control: 'inline-radio',
      options: ['H3', 'H4', 'H5'],
      description: 'Размер заголовка',
      if: { arg: 'Header', truthy: true },
    },
    Text: {
      control: 'text',
      description: 'Текст заголовка',
      if: { arg: 'Header', truthy: true },
    },
    'R Badge': {
      control: 'boolean',
      description: 'Бадж справа от заголовка',
      if: { arg: 'Header', truthy: true },
    },
    Description: {
      control: 'boolean',
      description: 'Описание под заголовком',
      if: { arg: 'Header', truthy: true },
    },
    Segment: {
      control: 'boolean',
      description: 'Сегмент над поиском',
      if: { arg: 'SubHeader', truthy: true },
    },
    'Search bar': {
      control: 'boolean',
      description: 'Строка поиска с кнопками',
      if: { arg: 'SubHeader', truthy: true },
    },
    'L Button': {
      control: 'boolean',
      description: 'Левая кнопка справа от поиска',
      if: { arg: 'Search bar', truthy: true },
    },
    'R Button': {
      control: 'boolean',
      description: 'Правая кнопка справа от поиска',
      if: { arg: 'Search bar', truthy: true },
    },
    'Bot Slot': {
      control: 'boolean',
      description: 'Кастомный слот под поиском',
      if: { arg: 'SubHeader', truthy: true },
    },
    Features: {
      control: 'boolean',
      description: 'Кнопки фич в свёрнутом виде',
    },
    'Footer Features': {
      control: 'boolean',
      description: 'Кнопки фич внизу свёрнутой панели',
    },
  },
  render: (args) => <PlaygroundView {...args} />,
};

/* Живой замер отступов: в окне заданной ширины */

const PANEL_SEPARATOR = `.${PANEL} > div:last-child`;
const PANEL_INNER = `.${PANEL} > div:first-child`;
const TOGGLE_COLLAPSED = `.${COLLAPSED} button`;

const gapsExpanded: MeasureGap[] = [
  { a: `.${PANEL}`, b: `.${CENTER}`, dir: 'h', tone: 'outer' },
  { a: '&', b: `.${EXPANDED} .${wcls.header}`, dir: 'v' },
  { a: '&', b: `.${EXPANDED} .${wcls.headerTitlesBox}`, dir: 'h' },
  {
    a: `.${EXPANDED} .${wcls.headerBottomBlock}`,
    b: PANEL_SEPARATOR,
    dir: 'h',
  },
  { a: `.${EXPANDED} .${wcls.slotBlock}`, b: '&', dir: 'v' },
];

/* Отступ сверху тут не меряем: его подпись легла бы на подпись полоски ресайза */
const gapsCollapsedResize: MeasureGap[] = [
  { a: '&', b: TOGGLE_COLLAPSED, dir: 'h' },
  { a: `.${FOOTER_FEATURE}`, b: PANEL_SEPARATOR, dir: 'h' },
  { a: PANEL_INNER, b: '&', dir: 'h' },
  { a: `.${FOOTER_FEATURE}`, b: '&', dir: 'v' },
];

const gapsCollapsed: MeasureGap[] = [
  { a: '&', b: TOGGLE_COLLAPSED, dir: 'v' },
  { a: '&', b: TOGGLE_COLLAPSED, dir: 'h' },
  { a: TOGGLE_COLLAPSED, b: '&', dir: 'h' },
  { a: `.${FOOTER_FEATURE}`, b: '&', dir: 'v' },
];

/* Подпись с живой шириной панели */
const PanelWidth = ({ text, children }: { text: string; children: ReactNode }) => {
  const box = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();

  useLayoutEffect(() => {
    const panel = box.current?.querySelector<HTMLElement>(`.${PANEL}`);

    if (!panel) {
      return undefined;
    }

    const update = () => setWidth(Math.round(panel.getBoundingClientRect().width));
    const observer = new ResizeObserver(update);

    observer.observe(panel);
    update();

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={box}>
      {children}
      <Caption>
        {text}: {width ?? '…'} px
      </Caption>
    </div>
  );
};

/*
 * У полоски ресайза z-index 10, она закрывала бы подписи замера.
 * В замере опускаем её на 0: над контентом панели она остаётся.
 */
const MEASURE_ROOT = 'lp-doc-measure';
const measureCss = `.${MEASURE_ROOT} ${PANEL_SEPARATOR} { z-index: 0 !important; }`;

const SpacingWindow = () => (
  <div
    className={MEASURE_ROOT}
    style={{
      minHeight: '100vh',
      boxSizing: 'border-box',
      padding: 24,
      backgroundColor: '#f4f5f7',
    }}
  >
    <style>{measureCss}</style>
    <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
      <PanelWidth text="Развёрнутая">
        <Measure
          gaps={gapsExpanded}
          style={{ display: 'flex', width: 420, height: 420 }}
        >
          <Panel
            adaptive
            width={300}
            expandedContent={expanded({
              title: 'Title',
              description: true,
              subHeader: subHeader({ rButton: true }),
              body: <ItemsList count={3} />,
              footer: footerButton,
            })}
          />
          <Center>
            <span />
          </Center>
        </Measure>
      </PanelWidth>
      <PanelWidth text="Свёрнутая с Resize">
        <Measure
          gaps={gapsCollapsedResize}
          style={{ display: 'flex', width: 'fit-content', height: 420 }}
        >
          <Panel
            adaptive
            collapsed
            containerProps={{ style: { marginRight: 0 } }}
            collapsedFooterContent={footerFeatures}
          />
        </Measure>
      </PanelWidth>
      <PanelWidth text="Свёрнутая без Resize">
        <Measure
          gaps={gapsCollapsed}
          style={{ display: 'flex', width: 'fit-content', height: 420 }}
        >
          <Panel
            adaptive
            collapsed
            showResizeable={false}
            containerProps={{ style: { marginRight: 0 } }}
            collapsedFooterContent={footerFeatures}
          />
        </Measure>
      </PanelWidth>
    </div>
    <MeasureLegend />
  </div>
);

export const Spacing1440: Story = {
  name: 'Замер в окне 1440 px',
  parameters: { layout: 'fullscreen' },
  render: () => <SpacingWindow />,
};

export const Spacing1280: Story = {
  name: 'Замер в окне 1280 px',
  parameters: { layout: 'fullscreen' },
  render: () => <SpacingWindow />,
};

export const SpacingLive: Story = {
  name: 'Отступы на живом компоненте',
  render: () => (
    <div style={{ display: 'grid', gap: 32 }}>
      <ViewportFrame
        storyId="композиции-leftpanel-для-дизайнеров--spacing-1440"
        width={1440}
        height={540}
        visibleWidth={860}
        caption="Окно шириной 1440 px"
      />
      <ViewportFrame
        storyId="композиции-leftpanel-для-дизайнеров--spacing-1280"
        width={1280}
        height={540}
        visibleWidth={860}
        caption="Окно шириной 1280 px: свёрнутая панель 56 px, внешний отступ 16 px, кнопки и поиск XS"
      />
    </div>
  ),
};

/* Collapsed */

const collapsedPair = (collapsed: boolean) => (
  <Page>
    <Panel
      collapsed={collapsed}
      width={240}
      expandedContent={expanded({
        subHeader: subHeader({ rButton: true }),
        footer: footerButton,
      })}
      collapsedContent={features()}
      collapsedFooterContent={footerFeatures}
    />
    <Center />
  </Page>
);

export const Collapsed: Story = {
  name: 'Collapsed',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 24,
      }}
    >
      <div>
        {collapsedPair(false)}
        <Caption>Collapsed = Off</Caption>
      </div>
      <div>
        {collapsedPair(true)}
        <Caption>Collapsed = On</Caption>
      </div>
    </div>
  ),
};

/* Header */

export const Header: Story = {
  name: 'Header',
  render: () => (
    <div style={{ display: 'flex', height: 200 }}>
      {(['H3', 'H4', 'H5'] as const).map((size) => (
        <Panel
          key={size}
          width={260}
          showResizeable={false}
          expandedContent={expanded({
            title: size,
            titleSize: size,
            badge: true,
            description: true,
            body: <span />,
          })}
        />
      ))}
    </div>
  ),
};

/* Sub-header */

export const SubHeader: Story = {
  name: 'Sub-header',
  render: () => (
    <Page>
      <Panel
        width={360}
        expandedContent={expanded({
          subHeader: subHeader({ segment: true, lButton: true, rButton: true }),
        })}
      />
      <Center />
    </Page>
  ),
};

/* Body */

export const BodyScroll: Story = {
  name: 'Body со скроллом',
  render: () => (
    <Page>
      <Panel
        width={320}
        expandedContent={expanded({
          subHeader: subHeader({ rButton: true }),
          body: <ItemsList count={16} />,
        })}
      />
      <Center />
    </Page>
  ),
};

/* Footer */

export const Footer: Story = {
  name: 'Footer',
  render: () => (
    <Page>
      <Panel
        width={320}
        expandedContent={expanded({
          subHeader: subHeader({ rButton: true }),
          body: <ItemsList count={16} />,
          footer: footerButton,
        })}
      />
      <Center />
    </Page>
  ),
};

/* Свёрнутый вид */

export const CollapsedView: Story = {
  name: 'Свёрнутый вид',
  render: () => (
    <Page>
      <Panel
        collapsed
        expandedContent={expanded(standard)}
        collapsedContent={features()}
        collapsedFooterContent={footerFeatures}
      />
      <Center />
    </Page>
  ),
};

/* Шаги в свёрнутом виде */

/* В свёрнутой панели у шагов только индикаторы, без подписей */
const STEP_ITEMS = Array.from({ length: 10 }, (_, i) => ({
  indicator: i + 1,
  height: '44px',
}));

export const CollapsedSteps: Story = {
  name: 'Шаги в свёрнутом виде',
  render: () => (
    <Page height={540}>
      <Panel
        collapsed
        expandedContent={expanded(standard)}
        collapsedContent={
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Steps
              orientation="vertical"
              hasContent="none"
              items={STEP_ITEMS}
              current={2}
              size="m"
            />
          </div>
        }
      />
      <Center />
    </Page>
  ),
};

/* Ресайз */

const ResizeView = () => {
  const collapseState = useState(false);
  const widthState = useState<number | undefined>(360);
  const [collapsed] = collapseState;
  const [width] = widthState;

  return (
    <Page height={420}>
      <LeftPanel
        disableMediaAdaptive
        collapseState={collapseState}
        widthState={widthState}
        containerProps={{ className: PANEL }}
        expandedContent={expanded(standard)}
        collapsedContent={features()}
        collapsedFooterContent={footerFeatures}
      />
      <Center>
        <BodyM>
          {collapsed ? 'Панель свёрнута' : 'Панель развёрнута'}, ширина{' '}
          {Math.round(width ?? 72)} px
        </BodyM>
        <BodyS style={{ marginTop: 8, color: textSecondary }}>
          Потяните полоску на правой границе панели
        </BodyS>
      </Center>
    </Page>
  );
};

export const Resize: Story = {
  name: 'Ресайз',
  render: () => <ResizeView />,
};

/* Mass Actions: «Выбрать всё» и панель массовых действий в Footer */

const TREE: TreeItem[] = [
  {
    key: 'reports',
    title: 'Отчёты',
    children: [
      { key: 'r1', title: 'Отчёт за январь' },
      { key: 'r2', title: 'Отчёт за февраль' },
      { key: 'r3', title: 'Отчёт за март' },
    ],
  },
  {
    key: 'plans',
    title: 'Планы',
    children: [
      { key: 'p1', title: 'Основной план' },
      { key: 'p2', title: 'Персональный план' },
    ],
  },
  { key: 'journal', title: 'Журнал публикаций' },
];

const LEAVES: Key[] = ['r1', 'r2', 'r3', 'p1', 'p2', 'journal'];
const ALL_KEYS: Key[] = ['reports', 'plans', ...LEAVES];

const actionButton = (
  <Button
    text="Label"
    contentLeft={<IconPlasma />}
    size="s"
    view="secondary"
    style={{ flexGrow: 1 }}
  />
);
const moreButton = (
  <IconButton size="s" view="secondary">
    <IconDotsVerticalCenteredOutline />
  </IconButton>
);
const plasmaIconButton = (
  <IconButton size="s" view="secondary">
    <IconPlasma />
  </IconButton>
);

const MassActionsView = () => {
  const [checked, setChecked] = useState<Key[]>(['reports', 'r1', 'r2', 'r3']);
  const count = LEAVES.filter((key) => checked.includes(key)).length;

  return (
    <Page height={480}>
      <Panel
        width={360}
        expandedContent={expanded({
          subHeader: subHeader({ rButton: true }),
          body: (
            <div style={{ display: 'grid', gap: s.x4 }}>
              <Checkbox
                size="m"
                label="Выбрать всё"
                checked={count === LEAVES.length}
                indeterminate={count > 0 && count < LEAVES.length}
                onChange={(e) => setChecked(e.target.checked ? ALL_KEYS : [])}
              />
              <Tree
                size="s"
                items={TREE}
                checkable
                defaultExpandAll
                checkedKeys={checked}
                onTreeCheck={(keys) => setChecked(keys)}
              />
            </div>
          ),
          footer: () => (
            <MassActionsStatic position="static" show={count > 0}>
              {moreButton}
              {actionButton}
              {actionButton}
            </MassActionsStatic>
          ),
        })}
      />
      <Center />
    </Page>
  );
};

export const MassActionsSelectAll: Story = {
  name: 'Mass Actions: выбрать всё',
  render: () => <MassActionsView />,
};

/* Mass Actions: комбинации кнопок */

const COMBINATIONS: [string, ReactNode][] = [
  ['Одна кнопка', actionButton],
  [
    'Две кнопки',
    <>
      {actionButton}
      {actionButton}
    </>,
  ],
  [
    '«Ещё» и кнопка',
    <>
      {moreButton}
      {actionButton}
    </>,
  ],
  [
    '«Ещё» и две кнопки',
    <>
      {moreButton}
      {actionButton}
      {actionButton}
    </>,
  ],
  [
    '«Ещё», IconButton и кнопка',
    <>
      {moreButton}
      {plasmaIconButton}
      {actionButton}
    </>,
  ],
  [
    'Две IconButton и кнопка',
    <>
      {plasmaIconButton}
      {plasmaIconButton}
      {actionButton}
    </>,
  ],
];

export const MassActionsButtons: Story = {
  name: 'Mass Actions: комбинации кнопок',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: 24,
      }}
    >
      {COMBINATIONS.map(([caption, content]) => (
        <div key={caption}>
          <MassActionsStatic position="static">{content}</MassActionsStatic>
          <Caption>{caption}</Caption>
        </div>
      ))}
    </div>
  ),
};

/* Кнопки в Sub-header */

const buttonsPanel = (subHeaderSlot: (size: Size) => ReactNode, caption: string) => (
  <div>
    <div style={{ display: 'flex', height: 220 }}>
      <Panel
        width={320}
        showResizeable={false}
        expandedContent={expanded({
          subHeader: subHeaderSlot,
          body: <ItemsList count={3} />,
        })}
      />
    </div>
    <Caption>{caption}</Caption>
  </div>
);

export const SubHeaderButtons: Story = {
  name: 'Кнопки в Sub-header',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 24,
      }}
    >
      {buttonsPanel(
        (size) =>
          subHeader({ rButton: iconButton(size, <IconPlus />, 'accent') })(size),
        'Одна акцентная кнопка',
      )}
      {buttonsPanel(
        (size) =>
          subHeader({
            lButton: iconButton(size, <IconDotsVerticalCenteredOutline />),
            rButton: iconButton(size, <IconPlus />, 'accent'),
          })(size),
        'Действий больше 2: «...» с выпадающим списком и главное действие',
      )}
    </div>
  ),
};

/* Пара: акцентная кнопка в Sub-header */

const accentPage = (rView: ButtonView) => (
  <div style={{ display: 'flex', height: 240 }}>
    <Panel
      width={240}
      showResizeable={false}
      expandedContent={expanded({
        subHeader: (size) =>
          subHeader({ rButton: iconButton(size, <IconPlus />, rView) })(size),
        body: <ItemsList count={2} />,
      })}
    />
    <Center>
      <Button size="s" view="accent" text="Label" />
    </Center>
  </div>
);

export const PairAccent: Story = {
  name: 'Пара: акцентная кнопка',
  render: () => (
    <DocPair
      goodText="На странице уже есть акцентная кнопка: в Sub-header кнопка Dark"
      badText="Две акцентные кнопки на странице"
      good={accentPage('dark')}
      bad={accentPage('accent')}
    />
  ),
};

/* Segment над поиском или под поиском */

export const SegmentPlacement: Story = {
  name: 'Segment над поиском или под поиском',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 24,
      }}
    >
      <div>
        <div style={{ display: 'flex', height: 260 }}>
          <Panel
            width={320}
            showResizeable={false}
            expandedContent={expanded({
              title: 'Список',
              subHeader: (size) =>
                subHeader({
                  lButton: true,
                  rButton: true,
                  botSlot: <Segment size={size} labels={['Области', 'Объекты']} />,
                })(size),
              body: <ItemsList count={3} />,
            })}
          />
        </div>
        <Caption>Поиск общий: сегменты под поиском, в Bot Slot</Caption>
      </div>
      <div>
        <div style={{ display: 'flex', height: 260 }}>
          <Panel
            width={320}
            showResizeable={false}
            expandedContent={expanded({
              title: 'Список',
              subHeader: subHeader({
                segment: true,
                segmentLabels: ['Области', 'Объекты'],
                lButton: true,
                rButton: true,
              }),
              body: <ItemsList count={3} />,
            })}
          />
        </div>
        <Caption>Поиск раздельный: сегменты над поиском</Caption>
      </div>
    </div>
  ),
};

/* Иконка дерева в свёрнутом виде */

const TREE_MENU = ITEMS.slice(0, 4).map((label, i) => ({
  label,
  value: `item_${i}`,
}));

export const TreeCollapsed: Story = {
  name: 'Иконка дерева в свёрнутом виде',
  render: () => (
    <Page>
      <Panel
        collapsed
        expandedContent={expanded(standard)}
        collapsedContent={({ buttonSize }: LeftPanelSlotSizesProps) => (
          <>
            <IconButton size={buttonSize} view="secondary">
              <IconSearch />
            </IconButton>
            <IconButton size={buttonSize} view="secondary">
              <IconPlus />
            </IconButton>
            <Dropdown items={TREE_MENU} portal="document" placement="right-start">
              <IconButton size={buttonSize} view="secondary">
                <IconHierarchy />
              </IconButton>
            </Dropdown>
          </>
        )}
        collapsedFooterContent={footerFeatures}
      />
      <Center>
        <BodyS style={{ color: textSecondary }}>
          Нажмите на иконку дерева в свёрнутой панели
        </BodyS>
      </Center>
    </Page>
  ),
};
