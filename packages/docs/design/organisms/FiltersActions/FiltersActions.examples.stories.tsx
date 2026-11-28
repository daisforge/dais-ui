import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Combobox } from '@ui-kit/components/Combobox';
import { EmptyState } from '@ui-kit/components/EmptyState';
import { IconButton } from '@ui-kit/components/IconButton';
import type { ItemOrGroup } from '@ui-kit/components/ListOfFilters';
import { PageTitle } from '@ui-kit/components/PageTitle';
import { SegmentGroup, SegmentProvider } from '@ui-kit/components/Segment';
import { BodyS } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { IconPlus } from '@ui-kit/icons';
import { surfaceAccentMinor, surfaceInfo, surfaceSolidCard, textSecondary } from '@ui-kit/tokens';
import { FiltersActions } from '@ui-kit/layouts/FiltersActions';
import type { CSSProperties, ReactNode } from 'react';
import { useRef, useState } from 'react';

import { DocPair } from '../../kit/DocPair';
import { Measure, MeasureLegend } from '../../kit/Measure';
import { emptyStateImageHandlers } from '../EmptyState/emptyStateImages';

const meta: Meta = {
  title: 'Композиции/FiltersActions/Для дизайнеров',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
    msw: { handlers: emptyStateImageHandlers },
  },
};

export default meta;

type Story = StoryObj;

const noop = () => undefined;

const Caption = ({ children }: { children: ReactNode }) => (
  <BodyS style={{ color: textSecondary, marginBottom: s.x8 }}>{children}</BodyS>
);

const stub: CSSProperties = {
  display: 'grid',
  placeItems: 'center',
  borderRadius: s.x8,
  border: `1px dashed ${surfaceInfo}`,
  color: surfaceInfo,
  backgroundColor: surfaceAccentMinor,
};

const options = (name: string, count = 8) =>
  Array.from({ length: count }, (_, i) => ({ label: `${name} ${i + 1}`, value: `${name}-${i + 1}` }));

const FIELD_NAMES = ['Блок', 'Трайб', 'Аллокация', 'Брикс', 'Команда'];

/* Поле фильтра: Combobox с множественным выбором и чипом «Выбрано N» */

const Field = ({ name, selected = 0 }: { name: string; selected?: number }) => {
  const items = options(name);
  const [value, setValue] = useState<string[]>(items.slice(0, selected).map((item) => item.value));

  return (
    <div style={{ width: 168, flex: 'none' }}>
      <Combobox
        size="s"
        multiple
        isTargetAmount
        placeholder={`Выберите ${name.toLowerCase()}`}
        items={items}
        value={value}
        onChange={(v: string[]) => setValue(v)}
        listMaxHeight="300px"
      />
    </div>
  );
};

const Switcher = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false);

  return <FiltersActions.SwitcherFilter label={label} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
};

const Segments = ({ labels = ['Все', 'Мои', 'Архив'], slot = false }: { labels?: string[]; slot?: boolean }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: s.x4 }}>
    {slot ? (
      <IconButton size="s" view="secondary" aria-label="Добавить сегмент">
        <IconPlus color="inherit" />
      </IconButton>
    ) : null}
    <SegmentGroup hasBackground size="xs">
      {labels.map((label, i) => (
        <FiltersActions.SegmentItem key={label} value={`seg-${i}`} label={label} />
      ))}
    </SegmentGroup>
  </div>
);

const Search = ({ value = '', width }: { value?: string; width?: number }) => {
  const [v, setV] = useState(value);

  return (
    <div data-m="search" style={width ? { width } : { flex: '1 1 168px', minWidth: 168, maxWidth: 600 }}>
      <FiltersActions.TextFieldSearch value={v} onChange={(e) => setV(e.target.value)} onClear={() => setV('')} autoComplete="off" />
    </div>
  );
};

/* Содержимое Popover «Ещё фильтры»: подпись над каждым полем, между фильтрами 16 px */

const PopoverField = ({ name }: { name: string }) => {
  const items = options(name);
  const [value, setValue] = useState<string[]>([]);

  return (
    <div>
      <BodyS style={{ marginBottom: s.x4 }}>{name}</BodyS>
      <Combobox size="s" multiple isTargetAmount placeholder={`Выберите ${name.toLowerCase()}`} items={items} value={value} onChange={(v: string[]) => setValue(v)} />
    </div>
  );
};

const MoreFilters = ({
  open = false,
  indicator = false,
  fields = ['Брикс', 'Команда'],
  group = false,
  text,
}: {
  open?: boolean;
  indicator?: boolean;
  fields?: string[];
  group?: boolean;
  text?: string;
}) => {
  const state = useState(open);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <FiltersActions.FiltersButtonWithPopover
      state={state}
      title="Ещё фильтры"
      subtitle={group ? 'Фильтры, которые не поместились на панели' : undefined}
      searchable={group}
      redSquare={indicator}
      buttonProps={text ? { text } : undefined}
      popoverProps={{ ref }}
      content={
        <>
          {fields.map((name) => (
            <PopoverField key={name} name={name} />
          ))}
          {group ? (
            <div style={{ marginTop: s.x4, display: 'grid', gap: s.x8 }}>
              <BodyS style={{ fontWeight: 600 }}>Группа фильтров</BodyS>
              <PopoverField name="Статус" />
              <PopoverField name="Период" />
            </div>
          ) : null}
        </>
      }
    />
  );
};

/* Правый блок */

type RightProps = { slot?: boolean; more?: boolean; sec1?: boolean; sec2?: boolean; accent?: boolean; long?: boolean };

const Right = ({ slot = false, more = true, sec1 = true, sec2 = false, accent = true }: RightProps) => (
  <div data-m="right" style={{ display: 'flex', gap: s.x8 }}>
    {slot ? (
      <div style={{ ...stub, height: 40, padding: `0 ${s.x8}` }}>
        <BodyS>Custom Slot</BodyS>
      </div>
    ) : null}
    {more ? (
      <FiltersActions.DotsIconButton
        iconOrientation="vertical"
        dropdownProps={{ items: [{ value: 'a3', label: 'Действие 3' }, { value: 'a4', label: 'Действие 4' }] }}
      />
    ) : null}
    {sec2 ? (
      <Button size="s" view="secondary">
        Выгрузить
      </Button>
    ) : null}
    {sec1 ? (
      <Button size="s" view="secondary">
        Согласовать
      </Button>
    ) : null}
    {accent ? (
      <Button size="s" view="accent">
        Создать
      </Button>
    ) : null}
  </div>
);

/* Строка выбранных фильтров */

const chip = (id: string, label: string) => ({ id, label, onClick: noop });

const ROW: ItemOrGroup[] = [
  {
    groupId: 'block',
    groupLabel: 'Блок',
    items: [chip('b1', 'Блок 1'), chip('b2', 'Блок 2'), chip('b3', 'Блок 3'), chip('b4', 'Блок 4')],
  },
  { groupId: 'tribe', groupLabel: 'Трайб', items: [chip('t1', 'Трайб корпоративного кредитования и лизинга')] },
  { groupId: 'brics', groupLabel: 'Брикс', items: [chip('r1', 'Брикс 2'), chip('r2', 'Брикс 5')] },
  chip('active', 'Активные'),
];

const Row = ({ items = ROW }: { items?: ItemOrGroup[] }) => (
  <FiltersActions.ListOfFilters opened items={items} clearAll={noop} showResetAllFiltersButton={false} />
);

/* Панель целиком */

type PanelProps = {
  segment?: boolean;
  segmentSlot?: boolean;
  search?: boolean;
  filters?: 'Filter' | 'Button only' | 'Custom' | 'none';
  fields?: number;
  selected?: number;
  switchers?: number;
  type?: 'Filters+Reset' | 'Reset only';
  withReset?: boolean;
  reset?: boolean;
  resetOutline?: boolean;
  indicator?: boolean;
  right?: RightProps | false;
  row?: boolean;
  width?: number | string;
};

const Panel = ({
  segment = true,
  segmentSlot = false,
  search = true,
  filters = 'Filter',
  fields = 2,
  selected = 0,
  switchers = 1,
  type = 'Filters+Reset',
  withReset = false,
  reset = true,
  resetOutline = false,
  indicator = false,
  right = {},
  row = false,
  width = '100%',
}: PanelProps) => (
  <div data-m="fa" style={{ width, maxWidth: width === 'max-content' ? undefined : '100%', borderRadius: s.x8, backgroundColor: surfaceSolidCard, paddingInline: s.x16 }}>
    <SegmentProvider defaultSelected={['seg-0']}>
      <FiltersActions
        mainBlock={
          <>
            {segment ? (
              <div data-m="first">
                <Segments slot={segmentSlot} />
              </div>
            ) : null}
            {search ? <Search /> : null}
            {filters === 'Filter'
              ? Array.from({ length: switchers }, (_, i) => <Switcher key={i} label={['Активные', 'Мои', 'Срочные'][i] ?? 'Свитчер'} />)
              : null}
            {filters === 'Filter'
              ? FIELD_NAMES.slice(0, fields).map((name, i) => <Field key={name} name={name} selected={i === 0 ? selected : 0} />)
              : null}
            {filters === 'Custom' ? (
              <div style={{ ...stub, height: 40, width: 240 }}>
                <BodyS>Custom</BodyS>
              </div>
            ) : null}
            {filters === 'Filter' && type === 'Filters+Reset' ? <MoreFilters indicator={indicator} /> : null}
            {filters === 'Button only' ? <MoreFilters indicator={indicator} text="Фильтры" fields={FIELD_NAMES} /> : null}
            {filters !== 'none' && (withReset || type === 'Reset only') ? (
              <div data-m="last" style={resetOutline ? { outline: `1px dashed ${surfaceInfo}`, borderRadius: s.x4 } : undefined}>
                <FiltersActions.ResetAllFiltersButton isVisible={reset} onClick={noop} />
              </div>
            ) : null}
          </>
        }
        activeButtonsBlock={right ? <Right {...right} /> : undefined}
        listOfFilters={row ? <Row /> : undefined}
      />
    </SegmentProvider>
  </div>
);

/* Живая настройка */

type PlaygroundArgs = {
  Segment: boolean;
  Search: boolean;
  'Filters Block': boolean;
  View: 'Filter' | 'Button only' | 'Custom';
  'Switcher 1': boolean;
  'Switcher 2': boolean;
  Type: 'Filters+Reset' | 'Reset only';
  ResetBtn: boolean;
  Indicator: boolean;
  'Right Block': boolean;
  'Custom Slot': boolean;
  MoreBtn: boolean;
  'Secondary 1': boolean;
  'Secondary 2': boolean;
  AccentBtn: boolean;
  RowActiveFltrs: boolean;
};

const ifFilters = { if: { arg: 'Filters Block', truthy: true } } as const;
const ifRight = { if: { arg: 'Right Block', truthy: true } } as const;

export const Playground: StoryObj<PlaygroundArgs> = {
  name: 'Живая настройка',
  args: {
    Segment: true,
    Search: true,
    'Filters Block': true,
    View: 'Filter',
    'Switcher 1': false,
    'Switcher 2': false,
    Type: 'Filters+Reset',
    ResetBtn: false,
    Indicator: false,
    'Right Block': true,
    'Custom Slot': false,
    MoreBtn: true,
    'Secondary 1': true,
    'Secondary 2': false,
    AccentBtn: true,
    RowActiveFltrs: false,
  },
  argTypes: {
    Segment: { control: 'boolean', description: 'Сегменты' },
    Search: { control: 'boolean', description: 'Поле поиска' },
    'Filters Block': { control: 'boolean', description: 'Блок фильтров' },
    View: {
      control: 'inline-radio',
      options: ['Filter', 'Button only', 'Custom'],
      description: 'Вид блока фильтров',
      ...ifFilters,
    },
    'Switcher 1': { control: 'boolean', description: 'Фильтр-свитчер', ...ifFilters },
    'Switcher 2': { control: 'boolean', description: 'Второй фильтр-свитчер', ...ifFilters },
    Type: {
      control: 'inline-radio',
      options: ['Filters+Reset', 'Reset only'],
      description: 'Набор кнопок блока фильтров',
      ...ifFilters,
    },
    ResetBtn: { control: 'boolean', description: 'Кнопка «Сбросить фильтры»', ...ifFilters },
    Indicator: { control: 'boolean', description: 'Красная точка на кнопке фильтров', ...ifFilters },
    'Right Block': { control: 'boolean', description: 'Блок кнопок справа' },
    'Custom Slot': { control: 'boolean', description: 'Слот перед кнопками', ...ifRight },
    MoreBtn: { control: 'boolean', description: 'Кнопка с тремя точками', ...ifRight },
    'Secondary 1': { control: 'boolean', description: 'Кнопка Secondary', ...ifRight },
    'Secondary 2': { control: 'boolean', description: 'Вторая кнопка Secondary', ...ifRight },
    AccentBtn: { control: 'boolean', description: 'Акцентная кнопка', ...ifRight },
    RowActiveFltrs: { control: 'boolean', description: 'Строка выбранных фильтров' },
  },
  render: (args) => (
    // панель рассчитана на широкий экран: в колонке документации её можно прокрутить вбок
    <div>
    <Caption>Панель рассчитана на широкий экран: если кнопки справа не видны, прокрутите пример вбок</Caption>
    <div style={{ overflowX: 'auto', paddingBottom: s.x8 }}>
    <Panel
      width="max-content"
      withReset
      fields={1}
      segment={args.Segment}
      search={args.Search}
      filters={args['Filters Block'] ? args.View : 'none'}
      switchers={Number(args['Switcher 1']) + Number(args['Switcher 2'])}
      type={args.Type}
      reset={args.ResetBtn}
      indicator={args.Indicator}
      right={
        args['Right Block']
          ? {
              slot: args['Custom Slot'],
              more: args.MoreBtn,
              sec1: args['Secondary 1'],
              sec2: args['Secondary 2'],
              accent: args.AccentBtn,
            }
          : false
      }
      row={args.RowActiveFltrs}
    />
    </div>
    </div>
  ),
};

/* Размеры и отступы */

const SpacingView = () => (
  <div>
    <Measure
      gaps={[
        { a: '[data-m="pt"]', b: '[data-m="fa"]', dir: 'v', tone: 'outer' },
        { a: '[data-m="fa"]', b: '[data-m="content"]', dir: 'v', tone: 'outer' },
        { a: '[data-m="fa-top"]', b: '[data-m="search"]', dir: 'v' },
        { a: '[data-m="last"]', b: '[data-m="right"]', dir: 'h' },
      ]}
    >
      <div data-m="pt">
        <PageTitle title="Отчёты" />
      </div>
      <div style={{ height: 24 }} />
      <div data-m="fa-top" />
      <Panel segment={false} fields={1} switchers={0} withReset right={{ more: true, sec1: false, accent: true }} />
      <div style={{ height: 24 }} />
      <div data-m="content" style={{ ...stub, height: 80 }}>
        <BodyS>Контент страницы</BodyS>
      </div>
    </Measure>
    <MeasureLegend />
  </div>
);

export const SpacingLive: Story = {
  name: 'Отступы на живом компоненте',
  render: () => <SpacingView />,
};

/* Общие настройки */

export const Segment: Story = {
  name: 'Segment',
  render: () => (
    <div style={{ display: 'grid', gap: s.x16 }}>
      <div>
        <Caption>Segment включён</Caption>
        <Panel right={false} fields={1} switchers={0} />
      </div>
      <div>
        <Caption>Segment выключен</Caption>
        <Panel right={false} fields={1} switchers={0} segment={false} />
      </div>
    </div>
  ),
};

export const SearchToggle: Story = {
  name: 'Search',
  render: () => (
    <div style={{ display: 'grid', gap: s.x16 }}>
      <div>
        <Caption>Search включён</Caption>
        <Panel right={false} fields={1} switchers={0} />
      </div>
      <div>
        <Caption>Search выключен</Caption>
        <Panel right={false} fields={1} switchers={0} search={false} />
      </div>
    </div>
  ),
};

const Cards = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: s.x8, marginTop: s.x8 }}>
    {['Отчёт по закупкам', 'Платёжный календарь', 'План продаж'].map((name) => (
      <div key={name} style={{ padding: s.x12, borderRadius: s.x8, backgroundColor: surfaceSolidCard }}>
        <BodyS>{name}</BodyS>
      </div>
    ))}
  </div>
);

const TableStub = () => (
  <div style={{ marginTop: s.x8, borderRadius: s.x8, backgroundColor: surfaceSolidCard, padding: s.x8 }}>
    {['Название', 'Отчёт по закупкам', 'Платёжный календарь', 'План продаж'].map((name, i) => (
      <div
        key={name}
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: s.x8,
          padding: `${s.x6} ${s.x8}`,
          borderBottom: '1px solid rgba(8, 8, 8, 0.08)',
          color: i === 0 ? textSecondary : undefined,
        }}
      >
        <BodyS>{name}</BodyS>
        <BodyS>{i === 0 ? 'Статус' : 'В работе'}</BodyS>
        <BodyS>{i === 0 ? 'Срок' : '28.11.2026'}</BodyS>
      </div>
    ))}
  </div>
);

export const PairSearch: Story = {
  name: 'Пара: поиск',
  render: () => (
    <DocPair
      goodText="Поиск в FiltersActions над карточками и другим нетабличным контентом"
      badText="Поиск в FiltersActions над таблицей: для таблицы поиск внутри таблицы"
      good={
        <div>
          <Panel segment={false} fields={0} switchers={0} right={false} />
          <Cards />
        </div>
      }
      bad={
        <div>
          <Panel segment={false} fields={0} switchers={0} right={false} />
          <TableStub />
        </div>
      }
    />
  ),
};

/* Настройки Segment и Search */

export const SegmentCustomSlot: Story = {
  name: 'Custom Slot у сегментов',
  render: () => <Panel segmentSlot search={false} fields={1} switchers={0} right={false} />,
};

const SearchStatesView = () => {
  const box = useRef<HTMLDivElement>(null);

  return (
    <div ref={box} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: s.x16 }}>
      <div>
        <Caption>View = Placeholder</Caption>
        <Search width={240} />
      </div>
      <div>
        <Caption>View = Value</Caption>
        <Search width={240} value="Отчёт по продажам" />
      </div>
      <div>
        <Caption>Focused</Caption>
        <div
          ref={(el) => {
            el?.querySelector('input')?.focus({ preventScroll: true });
          }}
        >
          <Search width={240} />
        </div>
      </div>
    </div>
  );
};

export const SearchStates: Story = {
  name: 'Состояния поля поиска',
  render: () => <SearchStatesView />,
};

/* Настройки Filters Block */

export const FiltersBlockView: Story = {
  name: 'View блока фильтров',
  render: () => (
    <div style={{ display: 'grid', gap: s.x16 }}>
      <div>
        <Caption>Filter</Caption>
        <Panel segment={false} search={false} right={false} fields={2} withReset />
      </div>
      <div>
        <Caption>Button only</Caption>
        <Panel segment={false} search={false} right={false} filters="Button only" withReset />
      </div>
      <div>
        <Caption>Custom</Caption>
        <Panel segment={false} search={false} right={false} filters="Custom" />
      </div>
    </div>
  ),
};

export const ButtonType: Story = {
  name: 'Type: набор кнопок',
  render: () => (
    <div style={{ display: 'grid', gap: s.x16 }}>
      <div>
        <Caption>Filters+Reset</Caption>
        <Panel segment={false} search={false} right={false} fields={2} withReset />
      </div>
      <div>
        <Caption>Reset only</Caption>
        <Panel segment={false} search={false} right={false} fields={2} type="Reset only" />
      </div>
    </div>
  ),
};

export const ResetBtn: Story = {
  name: 'ResetBtn',
  render: () => (
    <div style={{ display: 'grid', gap: s.x16 }}>
      <div>
        <Caption>Кнопка видна</Caption>
        <Panel segment={false} search={false} right={false} fields={2} withReset resetOutline />
      </div>
      <div>
        <Caption>Кнопка скрыта, место под ней сохраняется (пунктир)</Caption>
        <Panel segment={false} search={false} right={false} fields={2} withReset reset={false} resetOutline />
      </div>
    </div>
  ),
};

export const Indicator: Story = {
  name: 'Indicator',
  render: () => (
    <div style={{ display: 'flex', gap: s.x24, flexWrap: 'wrap' }}>
      <div>
        <Caption>Без индикатора</Caption>
        <MoreFilters />
      </div>
      <div>
        <Caption>С индикатором</Caption>
        <MoreFilters indicator />
      </div>
    </div>
  ),
};

/* Right Block */

export const RightBlock: Story = {
  name: 'Right Block',
  render: () => (
    <div style={{ display: 'grid', gap: s.x16 }}>
      <div>
        <Caption>Custom Slot, MoreBtn, Secondary 1 и AccentBtn</Caption>
        <Panel segment={false} search={false} fields={1} switchers={0} right={{ slot: true, more: true, sec1: true, accent: true }} />
      </div>
      <div>
        <Caption>Только AccentBtn</Caption>
        <Panel segment={false} search={false} fields={1} switchers={0} right={{ more: false, sec1: false, accent: true }} />
      </div>
    </div>
  ),
};

export const PairRightBlock: Story = {
  name: 'Пара: кнопки справа',
  render: () => (
    <DocPair
      goodText="Три точки, Secondary и акцентная кнопка: на экране не больше 3 кнопок"
      badText="Четыре видимые кнопки"
      good={
        <div style={{ display: 'flex', gap: s.x8, justifyContent: 'flex-end' }}>
          <Right more sec1 accent />
        </div>
      }
      bad={
        <div style={{ display: 'flex', gap: s.x8, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <Right more={false} sec1 sec2 accent />
          <Button size="s" view="secondary">
            Удалить
          </Button>
        </div>
      }
    />
  ),
};

/* Блок фильтров */

export const PairSwitchers: Story = {
  name: 'Пара: свитчеры',
  render: () => (
    <DocPair
      goodText="Не больше 2 Switcher-filter в блоке"
      badText="Три Switcher-filter на панели"
      good={
        <div style={{ display: 'flex', gap: s.x8, flexWrap: 'wrap' }}>
          <Switcher label="Активные" />
          <Switcher label="Мои" />
          <MoreFilters />
        </div>
      }
      bad={
        <div style={{ display: 'flex', gap: s.x8, flexWrap: 'wrap' }}>
          <Switcher label="Активные" />
          <Switcher label="Мои" />
          <Switcher label="Срочные" />
        </div>
      }
    />
  ),
};

const MultipleChipView = () => {
  const items = options('Блок');
  const [value, setValue] = useState<string[]>(items.slice(0, 3).map((item) => item.value));

  return (
    <div style={{ minHeight: 150, paddingTop: 90 }}>
      <FiltersActions.TooltipList
        groupLabel="Блок"
        opened
        placement="top"
        items={items.filter((item) => value.includes(item.value)).map((item) => item.label)}
      >
        <div style={{ width: 168 }}>
          <Combobox size="s" multiple isTargetAmount items={items} value={value} onChange={(v: string[]) => setValue(v)} />
        </div>
      </FiltersActions.TooltipList>
    </div>
  );
};

export const MultipleChip: Story = {
  name: 'Поле Multiple с чипом «Выбрано N»',
  render: () => <MultipleChipView />,
};

/* Строка выбранных фильтров */

export const RowActiveFltrs: Story = {
  name: 'Строка выбранных фильтров',
  render: () => (
    <div style={{ display: 'grid', gap: s.x16 }}>
      <div>
        <Caption>Группа с 2 тегами и (+N), длинный тег обрезан многоточием</Caption>
        <div style={{ padding: s.x8, borderRadius: s.x8, backgroundColor: surfaceSolidCard }}>
          <Row />
        </div>
      </div>
      <div>
        <Caption>Строка не помещается: появляются стрелки прокрутки</Caption>
        <div style={{ width: 420, maxWidth: '100%', padding: s.x8, borderRadius: s.x8, backgroundColor: surfaceSolidCard }}>
          <Row />
        </div>
      </div>
    </div>
  ),
};

/* Popover «Ещё фильтры» */

export const PopoverOpen: Story = {
  name: 'Popover «Ещё фильтры»',
  render: () => (
    <div style={{ minHeight: 500 }}>
      <MoreFilters open group fields={['Фильтр 1', 'Фильтр 2']} />
    </div>
  ),
};

export const PairPopover: Story = {
  name: 'Пара: что показываем в Popover',
  // в одну колонку: Popover шириной 360 px не помещается в половину колонки
  render: () => (
    <div style={{ maxWidth: 560 }}>
    <DocPair
      goodText="В Popover только фильтры, спрятанные в кнопке «Ещё фильтры»"
      badText="В Popover повторяется фильтр «Блок», который уже виден на панели"
      good={
        <div style={{ minHeight: 520 }}>
          <div style={{ display: 'flex', gap: s.x8 }}>
            <Field name="Блок" />
            <MoreFilters open fields={['Брикс', 'Команда']} />
          </div>
        </div>
      }
      bad={
        <div style={{ minHeight: 520 }}>
          <div style={{ display: 'flex', gap: s.x8 }}>
            <Field name="Блок" />
            <MoreFilters open fields={['Блок', 'Брикс', 'Команда']} />
          </div>
        </div>
      }
    />
    </div>
  ),
};

export const PopoverResize: Story = {
  name: 'Размер Popover',
  render: () => (
    <div style={{ minHeight: 500 }}>
      <MoreFilters open fields={['Брикс']} />
    </div>
  ),
};

/* Перенос фильтров в Popover при сужении */

export const Adaptive: Story = {
  name: 'Фильтры переезжают в Popover',
  render: () => (
    <div style={{ display: 'grid', gap: s.x16 }}>
      <div>
        <Caption>Широкая панель: три поля видны</Caption>
        <Panel width={860} segment={false} search={false} right={false} fields={3} switchers={0} />
      </div>
      <div>
        <Caption>Панель уже: два поля переехали в «Ещё фильтры», в одном из них выбрано значение, на кнопке индикатор</Caption>
        <Panel width={420} segment={false} search={false} right={false} fields={1} switchers={0} indicator />
      </div>
    </div>
  ),
};

/* Пустое состояние на всю страницу */

export const EmptyStatePage: Story = {
  name: 'Пустое состояние страницы',
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <PageTitle
        title="Затраты"
        breadcrumbs={{ items: [{ title: 'Главная', href: '#' }, { title: 'Отчёты', href: '#' }, { title: 'Затраты' }] }}
      />
      <Panel segment={false} fields={2} selected={3} switchers={0} right={{ more: false, sec1: false, accent: true }} row />
      <EmptyState
        size="l"
        variant="not-found"
        title="Ничего не нашлось"
        subtitle="Попробуйте изменить или сбросить фильтры"
        buttons={[{ type: 'button', props: { text: 'Сбросить фильтры', view: 'accent' } }]}
      />
    </div>
  ),
};
