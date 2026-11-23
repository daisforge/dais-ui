import type { Meta, StoryObj } from '@storybook/react';
import { AnalyticalWidget } from '@ui-kit/components/AnalyticalWidget';
import { Button } from '@ui-kit/components/Button';
import { DatePicker } from '@ui-kit/components/DatePicker';
import { EmptyState } from '@ui-kit/components/EmptyState';
import type { GridDNDItemConfig, GridDNDItems } from '@ui-kit/components/GridDND';
import { GridDND } from '@ui-kit/components/GridDND';
import { SegmentGroup, SegmentItem, SegmentProvider } from '@ui-kit/components/Segment';
import { Select } from '@ui-kit/components/Select';
import { RectSkeleton } from '@ui-kit/components/Skeleton';
import { TabItem, Tabs } from '@ui-kit/components/Tabs';
import { BodyS, BodyXS, H2 } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { IconTrash } from '@ui-kit/icons';
import { surfaceAccentMinor, surfaceInfo, surfaceSolidPrimary, textSecondary } from '@ui-kit/tokens';
import type { CSSProperties, ReactNode } from 'react';
import { useCallback, useState } from 'react';

import { DocPair } from '../../kit/DocPair';
import type { ScreenArgs } from '../../kit/ScreenSwitch';
import { SCREEN_ARG_TYPES, SCREEN_ARGS, withScreen } from '../../kit/ScreenSwitch';
import type { EdgeGap } from '../../kit/EdgeMeasure';
import { EdgeMeasure } from '../../kit/EdgeMeasure';

const meta: Meta = {
  title: 'Композиции/AnalyticalWidget/Для дизайнеров',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
  },
};

export default meta;

type Story = StoryObj;

type Size = 's' | 'm' | 'l';

/* Общие детали примеров */

const WIDTH: Record<Size, number> = { s: 296, m: 608, l: 608 };
const HEIGHT: Record<Size, number> = { s: 248, m: 248, l: 512 };

/** Иконка Info видна только при наведении на виджет. В примерах показываем её всегда */
const INFO_SHOWN = 'aw-doc-info-shown';
const ForceInfo = () => (
  <style>{`.${INFO_SHOWN} .analytical-widget__header-actions { opacity: 1 !important; }`}</style>
);

const slotStyle: CSSProperties = {
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: s.x2,
  border: `1px dashed ${surfaceInfo}`,
  color: surfaceInfo,
  backgroundColor: surfaceAccentMinor,
  whiteSpace: 'nowrap',
};

const SlotStub = ({ children, height }: { children: ReactNode; height?: number }) => (
  <div style={{ ...slotStyle, height: height ?? '100%', padding: height ? '0 8px' : 0 }}>
    <BodyS>{children}</BodyS>
  </div>
);

/** Данные виджета из макета: основное число и строка сравнения */
const Numbers = ({ value = '12 234,34', delta = '-121 234,12 млрд' }: { value?: string; delta?: string }) => (
  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: s.x2 }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: s.x2, whiteSpace: 'nowrap' }}>
      <H2>{value}</H2>
      <BodyS>млрд</BodyS>
    </div>
    <div style={{ display: 'flex', gap: s.x2, whiteSpace: 'nowrap' }}>
      <BodyXS style={{ color: textSecondary }}>vs БП 2026</BodyXS>
      <BodyXS>{delta}</BodyXS>
    </div>
  </div>
);

const PERIODS = [
  { label: 'Месяц', value: 'month' },
  { label: 'Квартал', value: 'quarter' },
  { label: 'Год', value: 'year' },
];

const Segments = () => (
  <SegmentProvider defaultSelected={['month']}>
    <SegmentGroup hasBackground size="xs">
      {PERIODS.map(({ value, label }) => (
        <SegmentItem key={value} value={value} label={label} size="xs" view="primary" />
      ))}
    </SegmentGroup>
  </SegmentProvider>
);

const PeriodSelect = () => {
  const [period, setPeriod] = useState('month');

  return <Select size="xs" value={period} onChange={(v) => setPeriod(v as string)} items={PERIODS} />;
};

const PeriodTabs = () => {
  const [index, setIndex] = useState(0);

  return (
    <Tabs size="xs">
      {PERIODS.map(({ label }, i) => (
        <TabItem key={label} size="xs" selected={i === index} onClick={() => setIndex(i)}>
          {label}
        </TabItem>
      ))}
    </Tabs>
  );
};

type RightType = 'Segment' | 'Select' | 'DatePicker' | 'Custom block';

const RightActions = ({ type }: { type: RightType }) => {
  if (type === 'Select') {
    return <PeriodSelect />;
  }

  if (type === 'DatePicker') {
    return <DatePicker size="xs" placeholder="ДД.ММ.ГГГГ" style={{ width: 140 }} />;
  }

  if (type === 'Custom block') {
    return <SlotStub height={24}>Custom block</SlotStub>;
  }

  return <Segments />;
};

const FILTER_ITEMS = [
  { label: 'Затраты на вендоров', value: 'vendors' },
  { label: 'Затраты на персонал', value: 'staff' },
];

const FilterButton = ({ applied = false }: { applied?: boolean }) => (
  <AnalyticalWidget.FilterIconButton redSquare={applied} dropdownProps={{ items: FILTER_ITEMS }} />
);

type MenuItem = { label: string; value: string; contentLeft?: ReactNode };

const KEBAB_ITEMS: MenuItem[] = [
  { label: 'Удалить виджет', value: 'remove', contentLeft: <IconTrash size="xs" color="inherit" /> },
];

type WidgetProps = {
  size?: Size;
  width?: number;
  title?: ReactNode;
  subtitle?: ReactNode;
  badge?: string;
  info?: boolean;
  infoOpened?: boolean;
  link?: boolean;
  right?: ReactNode;
  kebab?: boolean;
  kebabItems?: MenuItem[];
  kebabOpened?: boolean;
  chips?: string[];
  middle?: ReactNode;
  content?: ReactNode;
};

/** Виджет в контейнере ячейки сетки: ширина и высота как у ячейки, кнопка Kebab абсолютом в углу */
const Widget = ({
  size = 's',
  width,
  title = 'Бюджет',
  subtitle = 'ПГК 2026',
  badge,
  info = false,
  infoOpened = false,
  link = false,
  right,
  kebab = true,
  kebabItems = KEBAB_ITEMS,
  kebabOpened = false,
  chips,
  middle,
  content,
}: WidgetProps) => (
  <div
    className={info ? INFO_SHOWN : undefined}
    style={{ position: 'relative', width: width ?? WIDTH[size], height: HEIGHT[size], flex: 'none' }}
  >
    <AnalyticalWidget
      size={size}
      headerSlot={
        <AnalyticalWidget.Header
          title={title}
          subtitle={subtitle}
          badge={badge}
          infoTooltipText={info ? 'Информация о виджете' : undefined}
          infoTooltipProps={infoOpened ? { opened: true, trigger: 'none' } : undefined}
          titleLinkProps={link ? { href: '#', onClick: (e) => e.preventDefault() } : undefined}
          rightSlot={right}
        />
      }
      topSlot={
        chips ? (
          <AnalyticalWidget.Chips
            opened={chips.length > 0}
            isWrapped
            gap="wide"
            isCommonChipStyles={false}
            chips={chips.map((text) => ({ text, view: 'default', hasClear: false, key: text }))}
          />
        ) : undefined
      }
      middleSlot={middle}
      contentSlot={content ?? <Numbers />}
    />
    {kebab ? (
      <AnalyticalWidget.DotsIconButton
        absolute
        className="aw-doc-kebab"
        dropdownProps={{ items: kebabItems, alwaysOpened: kebabOpened }}
      />
    ) : null}
  </div>
);

/** Серая подложка, как фон рабочего стола: на ней виден белый виджет */
const Stage = ({ children, gap = s.x8, paddingTop }: { children: ReactNode; gap?: number | string; paddingTop?: number }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      gap,
      padding: s.x8,
      paddingTop: paddingTop ?? s.x8,
      borderRadius: s.x8,
      backgroundColor: surfaceSolidPrimary,
    }}
  >
    <ForceInfo />
    {children}
  </div>
);

const Captioned = ({ caption, children }: { caption: string; children: ReactNode }) => (
  <div>
    <BodyS style={{ marginBottom: s.x4 }}>{caption}</BodyS>
    {children}
  </div>
);

/* Живая настройка */

type PlaygroundArgs = {
  Size: Size;
  subTitle: boolean;
  'Text after': boolean;
  Info: boolean;
  Redirect: boolean;
  'Right block': boolean;
  'Filter button': boolean;
  Kebab: boolean;
  'Right actions': boolean;
  Type: RightType;
  Filters: boolean;
};

export const Playground: StoryObj<PlaygroundArgs & ScreenArgs> = {
  decorators: [withScreen],
  name: 'Живая настройка',
  args: {
    ...SCREEN_ARGS,
    Size: 's',
    subTitle: true,
    'Text after': false,
    Info: true,
    Redirect: false,
    'Right block': true,
    'Filter button': false,
    Kebab: true,
    'Right actions': false,
    Type: 'Segment',
    Filters: false,
  },
  argTypes: {
    ...SCREEN_ARG_TYPES,
    Size: { control: 'inline-radio', options: ['s', 'm', 'l'], description: 'Размер виджета' },
    subTitle: { control: 'boolean', description: 'Подзаголовок: за какой период данные' },
    'Text after': { control: 'boolean', description: 'Подпись справа от заголовка' },
    Info: { control: 'boolean', description: 'Кнопка информации о виджете' },
    Redirect: { control: 'boolean', description: 'Заголовок становится ссылкой на полные данные' },
    'Right block': { control: 'boolean', description: 'Правый блок шапки с кнопками: Action row' },
    'Filter button': { control: 'boolean', description: 'Кнопка фильтра', if: { arg: 'Right block', truthy: true } },
    Kebab: { control: 'boolean', description: 'Кнопка дополнительных действий', if: { arg: 'Right block', truthy: true } },
    'Right actions': {
      control: 'boolean',
      description: 'Блок управления справа в шапке',
      if: { arg: 'Right block', truthy: true },
    },
    Type: {
      control: 'select',
      options: ['Segment', 'Select', 'DatePicker', 'Custom block'],
      description: 'Компонент в Right actions',
      if: { arg: 'Right actions', truthy: true },
    },
    Filters: { control: 'boolean', description: 'Применены индивидуальные фильтры: чипы под шапкой' },
  },
  render: (args) => {
    const block = args['Right block'];
    const actions = block && args['Right actions'] ? <RightActions type={args.Type} /> : null;
    const filter = block && args['Filter button'] ? <FilterButton applied={args.Filters} /> : null;

    return (
      <Stage>
        <Widget
          key={args.Size}
          size={args.Size}
          subtitle={args.subTitle ? 'ПГК 2026' : undefined}
          badge={args['Text after'] ? 'TA' : undefined}
          info={args.Info}
          link={args.Redirect}
          right={
            actions || filter ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: s.x4 }}>
                {actions}
                {filter}
              </div>
            ) : undefined
          }
          kebab={block && args.Kebab}
          chips={args.Filters ? ['Затраты на вендоров'] : []}
          middle={args.Size === 'l' ? <PeriodTabs /> : undefined}
        />
      </Stage>
    );
  },
};

/* Состав, размеры и отступы */

export const Composition: Story = {
  name: 'Состав',
  render: () => (
    <Stage>
      <Widget title="Title" subtitle="Subtitle" chips={['filter 1', 'filter 2']} content={<SlotStub>Custom slot</SlotStub>} />
    </Stage>
  ),
};

const W = '.analytical-widget';
const HEADER = '.analytical-widget__header';
const LEFT = `${HEADER} > div:first-child`;
const TITLE_ROW = `${LEFT} > div:first-child`;
const KEBAB = '.aw-doc-kebab';
const CHIP = '.analytical-widget__top-slot .chip-item';

const GAPS_PLAIN: EdgeGap[] = [
  { a: W, ae: 'top', b: HEADER, be: 'top' },
  { a: W, ae: 'left', b: HEADER, be: 'left' },
  { a: TITLE_ROW, ae: 'bottom', b: `${LEFT} > :nth-child(2)`, be: 'top' },
  { a: `${TITLE_ROW} > :nth-child(1)`, ae: 'right', b: `${TITLE_ROW} > :nth-child(2)`, be: 'left' },
  { a: `${TITLE_ROW} > :nth-child(2)`, ae: 'right', b: '.analytical-widget__header-actions', be: 'left' },
  { a: HEADER, ae: 'bottom', b: CHIP, be: 'top' },
  { a: CHIP, ae: 'right', b: `${CHIP} + .chip-item`, be: 'left' },
  { a: CHIP, ae: 'bottom', b: '.analytical-widget__content', be: 'top' },
  { a: '.analytical-widget__content', ae: 'bottom', b: W, be: 'bottom' },
  { a: W, ae: 'top', b: KEBAB, be: 'top' },
  { a: KEBAB, ae: 'right', b: W, be: 'right' },
];

const GAPS_RIGHT: EdgeGap[] = [
  { a: W, ae: 'top', b: KEBAB, be: 'top' },
  { a: LEFT, ae: 'right', b: `${HEADER} > :nth-child(2)`, be: 'left' },
  { a: `${HEADER} > :nth-child(2)`, ae: 'right', b: HEADER, be: 'right' },
  { a: KEBAB, ae: 'top', b: KEBAB, be: 'bottom', aside: true },
];

export const SpacingLive: Story = {
  name: 'Живой замер отступов',
  render: () => (
    <Stage gap={s.x16}>
      <Captioned caption="Без Right actions">
        <EdgeMeasure gaps={GAPS_PLAIN}>
          <Widget badge="TA" info chips={['filter 1', 'filter 2']} />
        </EdgeMeasure>
      </Captioned>
      <Captioned caption="С Right actions">
        <EdgeMeasure gaps={GAPS_RIGHT}>
          <Widget width={360} right={<Segments />} />
        </EdgeMeasure>
      </Captioned>
    </Stage>
  ),
};

export const Sizes: Story = {
  name: 'Размеры S, M и L',
  render: () => (
    <Stage>
      <Captioned caption="S">
        <Widget size="s" />
      </Captioned>
      <Captioned caption="M">
        <Widget size="m" />
      </Captioned>
      <Captioned caption="L, табы под шапкой">
        <Widget size="l" middle={<PeriodTabs />} />
      </Captioned>
    </Stage>
  ),
};

/* Состояния */

const DRAG_ITEMS: GridDNDItems[] = [
  { id: 'budget', type: 's' },
  { id: 'staff', type: 's' },
  { id: 'costs', type: 'm' },
];

const DRAG_TITLES: Record<string, string> = { budget: 'Бюджет', staff: 'Численность', costs: 'Затраты' };

const DragGrid = () => {
  const renderItem = useCallback(
    (item: GridDNDItemConfig) => (
      <GridDND.ItemWrapper item={item}>
        <AnalyticalWidget
          size={item.type}
          $css={{ height: '100%', width: '100% !important' }}
          headerSlot={<AnalyticalWidget.Header title={DRAG_TITLES[item.id]} subtitle="ПГК 2026" />}
          contentSlot={<Numbers />}
        />
      </GridDND.ItemWrapper>
    ),
    [],
  );

  return (
    <div style={{ width: '100%', borderRadius: s.x8, backgroundColor: surfaceSolidPrimary }}>
      {/* eslint-disable-next-line react/no-children-prop */}
      <GridDND
        items={DRAG_ITEMS}
        isDraggable
        compactType="horizontal"
        containerStyle={{ minHeight: 0 }}
        children={renderItem}
      />
    </div>
  );
};

export const States: Story = {
  name: 'Состояния',
  render: () => (
    <div style={{ display: 'grid', gap: s.x16 }}>
      <Stage>
        <Captioned caption="Default">
          <Widget />
        </Captioned>
        <Captioned caption="Hover: рядом с заголовком видна кнопка Info">
          <Widget info />
        </Captioned>
      </Stage>
      <Captioned caption="Dragging: перетащите виджет мышью в другую ячейку сетки">
        <DragGrid />
      </Captioned>
    </div>
  ),
};

export const CustomSlot: Story = {
  name: 'Custom slot с числовыми данными',
  render: () => (
    <Stage>
      <Widget />
    </Stage>
  ),
};

/* Header block и Title block */

const FixFiltersDemo = () => {
  const [applied, setApplied] = useState(false);

  return (
    <div style={{ display: 'grid', gap: s.x8, justifyItems: 'start' }}>
      <Button size="s" view="secondary" onClick={() => setApplied((v) => !v)}>
        {applied ? 'Сбросить фильтр' : 'Применить фильтр'}
      </Button>
      <Stage>
        <Widget right={<FilterButton applied={applied} />} chips={applied ? ['Затраты на вендоров'] : []} />
      </Stage>
    </div>
  );
};

export const FixFilters: Story = {
  name: 'Строка чипов после применения фильтра',
  render: () => <FixFiltersDemo />,
};

export const SubTitle: Story = {
  name: 'subTitle',
  render: () => (
    <Stage>
      <Captioned caption="С подзаголовком">
        <Widget />
      </Captioned>
      <Captioned caption="Без подзаголовка">
        <Widget subtitle={null} />
      </Captioned>
      <Captioned caption="Длинный: наведите, чтобы увидеть целиком">
        <Widget subtitle="Плановые затраты на развитие цифровых сервисов, ПГК 2026" />
      </Captioned>
    </Stage>
  ),
};

export const TextAfter: Story = {
  name: 'Text after',
  render: () => (
    <Stage>
      <Captioned caption="С подписью Text after">
        <Widget badge="TA" />
      </Captioned>
      <Captioned caption="Без подписи">
        <Widget />
      </Captioned>
    </Stage>
  ),
};

export const Info: Story = {
  name: 'Info',
  render: () => (
    <Stage paddingTop={56}>
      <Widget info infoOpened />
    </Stage>
  ),
};

export const Redirect: Story = {
  name: 'Redirect',
  render: () => (
    <Stage>
      <Captioned caption="Наведите на заголовок: это ссылка">
        <Widget link />
      </Captioned>
    </Stage>
  ),
};

/* Action row */

export const FilterButtonExample: Story = {
  name: 'Filter button',
  render: () => (
    <Stage>
      <Captioned caption="Фильтры не применены">
        <Widget right={<FilterButton />} />
      </Captioned>
      <Captioned caption="Фильтры применены: красный индикатор">
        <Widget right={<FilterButton applied />} chips={['Затраты на вендоров']} />
      </Captioned>
    </Stage>
  ),
};

export const Kebab: Story = {
  name: 'Kebab',
  render: () => (
    <Stage>
      <Captioned caption="Нажмите на кнопку Kebab">
        <Widget />
      </Captioned>
    </Stage>
  ),
};

export const RightActionsType: Story = {
  name: 'Right actions: Type',
  render: () => (
    <Stage>
      {(['Segment', 'Select', 'DatePicker', 'Custom block'] as RightType[]).map((type) => (
        <Captioned key={type} caption={type}>
          <Widget size="m" width={448} right={<RightActions type={type} />} />
        </Captioned>
      ))}
    </Stage>
  ),
};

/* Пары к правилам с запретом */

const OWN_KEBAB_ITEMS: MenuItem[] = [
  ...KEBAB_ITEMS,
  { label: 'Выгрузить в Excel', value: 'excel' },
  { label: 'Настроить уведомления', value: 'notify' },
];

/** Место над виджетом: открытое меню Kebab не закрывает подписи пары, куда бы оно ни открылось */
const MenuRoom = ({ children }: { children: ReactNode }) => <div style={{ paddingTop: 160 }}>{children}</div>;

export const PairKebab: Story = {
  name: 'Пара: меню Kebab',
  render: () => (
    <DocPair
      goodText="В Kebab общее действие для всех виджетов: «Удалить виджет»"
      badText="Свои пункты в Kebab для одного виджета"
      good={
        <MenuRoom>
          <Widget kebabOpened />
        </MenuRoom>
      }
      bad={
        <MenuRoom>
          <Widget kebabOpened kebabItems={OWN_KEBAB_ITEMS} />
        </MenuRoom>
      }
    />
  ),
};

export const PairFilters: Story = {
  name: 'Пара: количество фильтров',
  render: () => (
    <DocPair
      goodText="Не больше 2 индивидуальных фильтров"
      badText="3 индивидуальных фильтра на виджете"
      good={<Widget chips={['filter 1', 'filter 2']} />}
      bad={<Widget chips={['filter 1', 'filter 2', 'filter 3']} />}
    />
  ),
};

const LoadingSkeleton = () => (
  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: s.x4 }}>
    <RectSkeleton width={207} height={52} roundness={8} />
    <RectSkeleton width="100%" height={28} roundness={8} />
  </div>
);

export const PairLoading: Story = {
  name: 'Пара: загрузка',
  render: () => (
    <DocPair
      goodText="Во время загрузки видны Title и скелетон"
      badText="Subtitle виден до того, как пришли данные"
      good={<Widget subtitle={null} content={<LoadingSkeleton />} />}
      bad={<Widget content={<LoadingSkeleton />} />}
    />
  ),
};

/* Краевые кейсы */

export const NoData: Story = {
  name: 'Нет данных',
  render: () => (
    <Stage>
      <Widget content={<EmptyState size="s" title="Нет данных" centered />} />
    </Stage>
  ),
};

export const LoadError: Story = {
  name: 'Не удалось загрузить',
  render: () => (
    <Stage>
      <Widget
        content={
          <EmptyState
            size="s"
            title="Не удалось загрузить"
            centered
            buttons={[{ type: 'link', props: { children: 'Обновить' } }]}
          />
        }
      />
    </Stage>
  ),
};

const ADAPTIVE = [
  { width: 296, value: '12 234,34', delta: '-121 234,12 млрд' },
  { width: 266, value: '12 234', delta: '-121 234 … млрд' },
  { width: 216, value: '12 …', delta: '-12 … млрд' },
];

export const Adaptive: Story = {
  name: 'Адаптив',
  render: () => (
    <Stage>
      {ADAPTIVE.map(({ width, value, delta }) => (
        <Captioned key={width} caption={`${width} px`}>
          <Widget width={width} chips={['Затраты на вендоров']} content={<Numbers value={value} delta={delta} />} />
        </Captioned>
      ))}
    </Stage>
  ),
};
