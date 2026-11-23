import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { IconButton } from '@ui-kit/components/IconButton';
import type { LeftPanelSlotSizesProps } from '@ui-kit/components/LeftPanel';
import { LeftPanel } from '@ui-kit/components/LeftPanel';
import { PageTitle } from '@ui-kit/components/PageTitle';
import { TableSDDS } from '@ui-kit/components/TableSDDS';
import { BodyS } from '@ui-kit/components/Typography';
import { IconGroupOutline, IconSearch } from '@ui-kit/icons';
import type { LayoutVariant } from '@ui-kit/layouts/Layout';
import { Layout } from '@ui-kit/layouts/Layout';
import { PageLayout } from '@ui-kit/layouts/PageLayout';
import {
  shadowDownSoftS,
  surfaceSolidCard,
  surfaceSolidSecondary,
} from '@ui-kit/tokens';
import { useBreakpoint } from '@ui-kit/utils';
import type { CSSProperties, ReactNode } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

import type { MeasureGap } from '../../kit/Measure';
import { Measure, MeasureLegend } from '../../kit/Measure';
import { ViewportFrame } from '../../kit/ViewportFrame';

/*
 * Layout зависит от ширины окна браузера: отступы и колонки задают медиазапросы
 * PageLayout и Layout. Поэтому страница целиком собирается в историях «Окно: …»
 * (layout: 'fullscreen'), а на дизайн-странице показывается через ViewportFrame
 * в окне нужной ширины: 2560, 1920, 1440, 1280 или 960 px.
 */

const meta: Meta = {
  title: 'Композиции/Layout/Для дизайнеров',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
  },
};

export default meta;

type Story = StoryObj;

const frameId = (name: string) => `композиции-layout-для-дизайнеров--${name}`;

const FRAME_HEIGHT = 480;

/* Раскладки колонок: названия как в разделе «Колонки Layout» */

const VARIANTS: [LayoutVariant, string, number][] = [
  ['V1_1', 'Одна колонка', 1],
  ['V2_1', 'Две колонки, основная слева', 2],
  ['V2_2', 'Две колонки, основная справа', 2],
  ['V3_1', 'Две колонки, справа узкая', 2],
  ['V3_2', 'Две колонки, слева узкая', 2],
  ['V3_3', 'Три колонки, центр шире', 3],
  ['V4_1', 'Две равные колонки', 2],
  ['V4_2', 'Три равные колонки', 3],
  ['V5_1', 'Фиксированная слева и центрированная', 2],
];

const variantName = (variant: LayoutVariant) =>
  VARIANTS.find(([v]) => v === variant)?.[1] ?? variant;

const variantByName = (name: string) =>
  VARIANTS.find(([, n]) => n === name)?.[0] ?? 'V1_1';

const columnCount = (variant: LayoutVariant) =>
  VARIANTS.find(([v]) => v === variant)?.[2] ?? 1;

/* id окна раскладки: экспорт FrameV2_1 даёт frame-v-2-1 */
const variantFrameId = (variant: LayoutVariant) =>
  frameId(`frame-v-${variant.slice(1).replace('_', '-')}`);

const SIZE_NAME: Record<number, string> = {
  2560: 'шире 1920 px',
  1920: 'Large',
  1440: 'Large',
  1280: 'Medium',
  960: 'Medium',
};

const caption = (width: number) => `${width} px, ${SIZE_NAME[width]}`;

/* Общие части страницы */

const useMedium = () => useBreakpoint().down('xl');

const blockStyle = (medium: boolean, padding?: number): CSSProperties => ({
  boxSizing: 'border-box',
  height: '100%',
  padding: padding ?? (medium ? 12 : 16),
  borderRadius: medium ? 12 : 16,
  backgroundColor: surfaceSolidCard,
  boxShadow: shadowDownSoftS,
});

/* Подписи замера внутри окна крупнее: окно уменьшается под колонку текста */
const BIG_MARKS = `
.lt-marks > div > span[aria-hidden="true"] > span + span {
  font-size: 18px !important;
  line-height: 26px !important;
  padding: 0 7px !important;
  border-radius: 6px !important;
}
`;

const Frame = ({ children }: { children: ReactNode }) => (
  <div className="lt-frame">
    <style>{BIG_MARKS}</style>
    {children}
  </div>
);

const HeaderFinAI = () => (
  <div
    className="lt-header"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: surfaceSolidCard,
      boxShadow: shadowDownSoftS,
    }}
  >
    <PageLayout paddingTop={0} paddingBottom={0} minHeight={0}>
      <div style={{ display: 'flex', alignItems: 'center', height: 72 }}>
        <BodyS style={{ fontSize: 20, fontWeight: 600 }}>Header FinAI</BodyS>
      </div>
    </PageLayout>
  </div>
);

const pageTitle = <PageTitle title="Page Title" />;

const Label = ({ children }: { children: ReactNode }) => (
  <BodyS style={{ fontSize: 20, lineHeight: '28px', fontWeight: 600 }}>
    {children}
  </BodyS>
);

const Bar = ({ height = 40 }: { height?: number }) => (
  <div
    className="lt-el"
    style={{ height, borderRadius: 8, backgroundColor: surfaceSolidSecondary }}
  />
);

/* Разбор CSS-колонок Layout: 'minmax(0, 1fr) 360px' → ['minmax(0, 1fr)', '360px'] */
const splitTracks = (value: string): string[] => {
  const tracks: string[] = [];
  let depth = 0;
  let current = '';

  value
    .trim()
    .split('')
    .forEach((ch) => {
      if (ch === '(') depth += 1;
      if (ch === ')') depth -= 1;
      if (ch === ' ' && depth === 0) {
        if (current) tracks.push(current);
        current = '';
      } else {
        current += ch;
      }
    });

  if (current) tracks.push(current);

  return tracks.flatMap((track) => {
    const repeat = track.match(/^repeat\((\d+),\s*(.+)\)$/);
    return repeat
      ? Array<string>(Number(repeat[1])).fill(repeat[2] ?? '')
      : [track];
  });
};

/* Блок контента в колонке. Подпись: живая ширина колонки и Fill, если колонка резиновая */
const ColumnBlock = ({ index }: { index: number }) => {
  const medium = useMedium();
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');

  useLayoutEffect(() => {
    const el = ref.current;

    if (!el) {
      return undefined;
    }

    const update = () => {
      const main = el.closest('.layout__main');
      const tracks = main
        ? splitTracks(
            getComputedStyle(main).getPropertyValue(
              '--pageLayout-container-grid-template-column',
            ),
          )
        : [];
      const track = tracks[index % Math.max(tracks.length, 1)] ?? '';
      const width = Math.round(el.getBoundingClientRect().width);

      setLabel(track.includes('fr') ? `Fill · ${width} px` : `${width} px`);
    };

    const observer = new ResizeObserver(update);

    observer.observe(el);
    update();

    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} style={blockStyle(medium)}>
      <Label>{label}</Label>
    </div>
  );
};

const columns = (variant: LayoutVariant) =>
  Array.from({ length: columnCount(variant) }, (_, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <ColumnBlock key={i} index={i} />
  ));

/* Страница: Header FinAI, PageLayout, Layout с Page Title и колонками, как в примерах PageLayout */
const Page = ({ variant }: { variant: LayoutVariant }) => (
  <>
    <HeaderFinAI />
    <PageLayout>
      <Layout
        variant={variant}
        marginBottom="0"
        headerSlot={pageTitle}
        mainSlot={columns(variant)}
      />
    </PageLayout>
  </>
);

const frameStory = (variant: LayoutVariant): Story => ({
  name: `Окно: ${variantName(variant)}`,
  parameters: { layout: 'fullscreen' },
  render: () => (
    <Frame>
      <Page variant={variant} />
    </Frame>
  ),
});

/* Окна раскладок: по одному на раскладку, нужны живой настройке и разделу «Колонки» */
export const FrameV1_1 = frameStory('V1_1');
export const FrameV2_1 = frameStory('V2_1');
export const FrameV2_2 = frameStory('V2_2');
export const FrameV3_1 = frameStory('V3_1');
export const FrameV3_2 = frameStory('V3_2');
export const FrameV3_3 = frameStory('V3_3');
export const FrameV4_1 = frameStory('V4_1');
export const FrameV4_2 = frameStory('V4_2');
export const FrameV5_1 = frameStory('V5_1');

/* Живая настройка */

const WIDTHS = ['2560 px', '1920 px', '1440 px', '1280 px', '960 px'] as const;

type PlaygroundArgs = {
  Раскладка: string;
  'Ширина экрана': (typeof WIDTHS)[number];
};

export const Playground: StoryObj<PlaygroundArgs> = {
  name: 'Живая настройка',
  args: {
    Раскладка: variantName('V2_1'),
    'Ширина экрана': '1440 px',
  },
  argTypes: {
    Раскладка: {
      control: 'select',
      options: VARIANTS.map(([, name]) => name),
      description: 'Раскладка колонок контента',
    },
    'Ширина экрана': {
      control: 'inline-radio',
      options: WIDTHS,
      description: 'Ширина окна браузера',
    },
  },
  render: (args) => {
    const width = parseInt(args['Ширина экрана'], 10);

    return (
      <ViewportFrame
        storyId={variantFrameId(variantByName(args['Раскладка']))}
        width={width}
        height={FRAME_HEIGHT}
        caption={caption(width)}
      />
    );
  },
};

/* Размеры и отступы: живой замер на странице с двумя колонками */

const SPACING_GAPS: MeasureGap[] = [
  { a: '&', b: '.layout__root', dir: 'h', tone: 'outer' },
  { a: '.layout__root', b: '&', dir: 'h', tone: 'outer' },
  { a: '.lt-header', b: '.layout__header', dir: 'v', tone: 'outer' },
  { a: '.layout__main', b: '&', dir: 'v', tone: 'outer' },
  { a: '.layout__header', b: '.layout__main', dir: 'v', tone: 'inner' },
  {
    a: '.layout__item:nth-child(1)',
    b: '.layout__item:nth-child(2)',
    dir: 'h',
    tone: 'inner',
  },
];

export const FrameSpacing: Story = {
  name: 'Окно: отступы',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <Frame>
      <div className="lt-marks">
        <Measure gaps={SPACING_GAPS}>
          <Page variant="V2_1" />
        </Measure>
      </div>
    </Frame>
  ),
};

const Frames = ({
  storyId,
  widths,
  height = FRAME_HEIGHT,
}: {
  storyId: string;
  widths: number[];
  height?: number;
}) => (
  <div style={{ display: 'grid', gap: 24 }}>
    {widths.map((width) => (
      <ViewportFrame
        key={width}
        storyId={storyId}
        width={width}
        height={height}
        caption={caption(width)}
      />
    ))}
  </div>
);

export const SpacingLive: Story = {
  name: 'Отступы на живом компоненте',
  render: () => (
    <>
      <Frames storyId={frameId('frame-spacing')} widths={[1440, 1280]} />
      <MeasureLegend />
    </>
  ),
};

/* Колонки: переключатель раскладки, окна 1440 и 1280 px */

const Switcher = <T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: [T, string][];
  value: T;
  onChange: (next: T) => void;
}) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 8,
      marginBottom: 20,
    }}
  >
    <BodyS style={{ marginRight: 4, fontWeight: 600 }}>{label}</BodyS>
    {options.map(([option, text]) => (
      <Button
        key={option}
        size="xs"
        view={option === value ? 'accent' : 'secondary'}
        onClick={() => onChange(option)}
      >
        {text}
      </Button>
    ))}
  </div>
);

const ColumnsDemo = () => {
  const [variant, setVariant] = useState<LayoutVariant>('V2_1');

  return (
    <>
      <Switcher
        label="Раскладка"
        options={VARIANTS.map(([v, name]) => [v, name])}
        value={variant}
        onChange={setVariant}
      />
      <Frames storyId={variantFrameId(variant)} widths={[1440, 1280]} />
    </>
  );
};

export const Columns: Story = {
  name: 'Колонки',
  render: () => <ColumnsDemo />,
};

/* Блоки контента: Left Panel, Center Block, Right Panel */

/* Блок с замером внутренних отступов. Отступ слева только там, где подпись не обрезает край колонки */
const BlockMeasure = ({
  title,
  count = 3,
  left = false,
}: {
  title: string;
  count?: number;
  left?: boolean;
}) => {
  const medium = useMedium();
  const gap = medium ? 12 : 16;

  return (
    <div className="lt-marks" style={{ height: '100%' }}>
      <Measure
        style={blockStyle(medium)}
        gaps={[
          { a: '&', b: '.lt-el', dir: 'v' },
          { a: '.lt-el', b: '.lt-el + .lt-el', dir: 'v' },
          /* отступ слева меряется по второму элементу: подпись не налезает на отступ между блоками */
          ...(left
            ? [{ a: '&', b: '.lt-el + .lt-el', dir: 'h' } as MeasureGap]
            : []),
        ]}
      >
        <div style={{ display: 'grid', gap }}>
          {Array.from({ length: count }, (_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Bar key={i} height={i === 0 ? 56 : 40} />
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <Label>{title}</Label>
        </div>
      </Measure>
    </div>
  );
};

const panelContent = (
  <div style={{ display: 'grid', gap: 12, padding: '64px 16px 16px' }}>
    <Label>Left Panel</Label>
    <Bar />
    <Bar />
    <Bar />
  </div>
);

const panelCollapsed = ({ buttonSize }: LeftPanelSlotSizesProps) => (
  <>
    <IconButton size={buttonSize} view="secondary">
      <IconSearch color="inherit" />
    </IconButton>
    <IconButton size={buttonSize} view="secondary">
      <IconGroupOutline color="inherit" />
    </IconButton>
  </>
);

const BLOCK_GAPS: MeasureGap[] = [
  { a: '.lt-left', b: '.lt-center', dir: 'h', tone: 'outer' },
  { a: '.lt-center', b: '.lt-right', dir: 'h', tone: 'outer' },
];

export const FrameContentBlocks: Story = {
  name: 'Окно: блоки контента',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <Frame>
      <div className="lt-marks">
        <Measure gaps={BLOCK_GAPS}>
          <HeaderFinAI />
          <PageLayout>
            <Layout
              variant="V3_1"
              marginBottom="0"
              headerSlot={pageTitle}
              mainSlot={[
                <div key="main" style={{ display: 'flex', height: '100%' }}>
                  <LeftPanel
                    maxWidth={280}
                    containerProps={{ className: 'lt-left' }}
                    expandedContent={panelContent}
                    collapsedContent={panelCollapsed}
                  />
                  <div className="lt-center" style={{ flex: 1, minWidth: 0 }}>
                    <BlockMeasure title="Center Block" count={4} left />
                  </div>
                </div>,
                <div
                  key="right"
                  className="lt-right"
                  style={{ height: '100%' }}
                >
                  <BlockMeasure title="Right Panel" />
                </div>,
              ]}
            />
          </PageLayout>
        </Measure>
      </div>
    </Frame>
  ),
};

export const ContentBlocks: Story = {
  name: 'Блоки контента',
  render: () => (
    <>
      <Frames
        storyId={frameId('frame-content-blocks')}
        widths={[1440, 1280]}
        height={560}
      />
      <MeasureLegend />
    </>
  ),
};

/* Блок, где только таблица */

const tableColumns = [
  { id: 'name', label: 'Название' },
  { id: 'status', label: 'Статус' },
  { id: 'date', label: 'Дата' },
  { id: 'sum', label: 'Сумма' },
];

const tableData = [
  {
    id: '1',
    name: 'Договор поставки',
    status: 'Активен',
    date: '12.03.2026',
    sum: '120 000',
  },
  {
    id: '2',
    name: 'Счёт на оплату',
    status: 'Оплачен',
    date: '15.03.2026',
    sum: '48 500',
  },
  {
    id: '3',
    name: 'Акт сверки',
    status: 'Черновик',
    date: '18.03.2026',
    sum: '0',
  },
];

const TableBlockDemo = () => {
  const medium = useMedium();

  return (
    <div style={{ maxWidth: 720 }}>
      <Measure
        style={{ ...blockStyle(medium, 8), width: 'fit-content' }}
        gaps={[
          { a: '&', b: '.lt-table', dir: 'h' },
          { a: '&', b: '.lt-table', dir: 'v' },
          { a: '.lt-table', b: '&', dir: 'h' },
          { a: '.lt-table', b: '&', dir: 'v' },
        ]}
      >
        <div className="lt-table">
          <TableSDDS
            view="default"
            size="s"
            borderVariant="rows"
            columns={tableColumns}
            data={tableData}
          />
        </div>
      </Measure>
      <MeasureLegend />
    </div>
  );
};

export const TableBlock: Story = {
  name: 'Блок, где только таблица',
  render: () => <TableBlockDemo />,
};

/* Ширина Left Panel: Collapsed=Off и Collapsed=On */

/* Живая ширина Left Panel поверх панели: тёмная подпись, это ширина, а не отступ */
const PanelWidth = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();

  useLayoutEffect(() => {
    const panel = ref.current?.querySelector<HTMLElement>('.lt-left');

    if (!panel) {
      return undefined;
    }

    const update = () =>
      setWidth(Math.round(panel.getBoundingClientRect().width));
    const observer = new ResizeObserver(update);

    observer.observe(panel);
    update();

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ position: 'relative', display: 'flex', height: '100%' }}
    >
      {children}
      {width ? (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: width / 2,
            bottom: 24,
            transform: 'translateX(-50%)',
            padding: '0 7px',
            borderRadius: 6,
            font: '500 18px/26px sans-serif',
            color: '#fff',
            backgroundColor: 'rgb(31, 35, 40)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 20,
          }}
        >
          {width}
        </span>
      ) : null}
    </div>
  );
};

const LeftPanelPage = ({ collapsed }: { collapsed: boolean }) => {
  const medium = useMedium();
  const collapseState = useState(collapsed);

  return (
    <>
      <HeaderFinAI />
      <PageLayout>
        <Layout
          variant="V1_1"
          marginBottom="0"
          headerSlot={pageTitle}
          mainSlot={
            <PanelWidth>
              <LeftPanel
                collapseState={collapseState}
                containerProps={{ className: 'lt-left' }}
                expandedContent={panelContent}
                collapsedContent={panelCollapsed}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={blockStyle(medium)}>
                  <Label>Center Block</Label>
                </div>
              </div>
            </PanelWidth>
          }
        />
      </PageLayout>
    </>
  );
};

export const FrameLeftPanelOff: Story = {
  name: 'Окно: Left Panel, Collapsed=Off',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <Frame>
      <LeftPanelPage collapsed={false} />
    </Frame>
  ),
};

export const FrameLeftPanelOn: Story = {
  name: 'Окно: Left Panel, Collapsed=On',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <Frame>
      <LeftPanelPage collapsed />
    </Frame>
  ),
};

const LeftPanelDemo = () => {
  const [state, setState] = useState<'off' | 'on'>('off');

  return (
    <>
      <Switcher
        label="Collapsed"
        options={[
          ['off', 'Collapsed=Off'],
          ['on', 'Collapsed=On'],
        ]}
        value={state}
        onChange={setState}
      />
      <Frames
        storyId={frameId(`frame-left-panel-${state}`)}
        widths={[1440, 1280]}
      />
    </>
  );
};

export const LeftPanelWidth: Story = {
  name: 'Ширина Left Panel',
  render: () => <LeftPanelDemo />,
};
