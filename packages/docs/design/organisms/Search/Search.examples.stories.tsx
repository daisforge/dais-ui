import type { Meta, StoryObj } from '@storybook/react';
import { AutocompleteSearch } from '@ui-kit/components/AutocompleteSearch';
import { List, ListItem } from '@ui-kit/components/List';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import { BodyS } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { IconTrash } from '@ui-kit/icons';
import { dataYellow, textSecondary } from '@ui-kit/tokens';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { DocPair } from '../../kit/DocPair';
import { Measure, MeasureLegend } from '../../kit/Measure';
import { emptyStateImageHandlers } from '../EmptyState/emptyStateImages';

const meta: Meta = {
  title: 'Локальные компоненты/TextFieldSearch/Для дизайнеров',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
    msw: { handlers: emptyStateImageHandlers },
  },
};

export default meta;

type Story = StoryObj;

type City = { label: string };

const CITIES: City[] = [
  { label: 'Москва' },
  { label: 'Можайск' },
  { label: 'Моздок' },
  { label: 'Казань' },
  { label: 'Самара' },
  { label: 'Сочи' },
  { label: 'Томск' },
];

const REPORTS = [
  'Бюджет на 2026 год',
  'Отчёт по закупкам',
  'Отчёт по продажам',
  'План продаж',
  'Платёжный календарь',
  'Реестр договоров',
  'Сверка с контрагентами',
];

const Caption = ({ children }: { children: ReactNode }) => (
  <BodyS style={{ color: textSecondary, marginBottom: s.x4 }}>{children}</BodyS>
);

const column = (width: number): CSSProperties => ({
  display: 'grid',
  gap: s.x8,
  width,
  maxWidth: '100%',
});

/* Подсветка найденного текста цветом dataYellow */

const Highlight = ({ text, query }: { text: string; query: string }) => {
  const start = query ? text.toLowerCase().indexOf(query.toLowerCase()) : -1;

  if (start < 0) {
    return <span>{text}</span>;
  }

  // одна строка в span: иначе в ячейке списка пробел перед подсветкой пропадает
  return (
    <span>
      {text.slice(0, start)}
      <mark style={{ backgroundColor: dataYellow, color: 'inherit', borderRadius: 2 }}>
        {text.slice(start, start + query.length)}
      </mark>
      {text.slice(start + query.length)}
    </span>
  );
};

/* Textfield Search с введённым значением и очисткой */

const SearchField = ({
  initial = '',
  size = 's',
  width = 360,
  disabled,
  readOnly,
  withClear = true,
  contentRight,
  focused,
}: {
  initial?: string;
  size?: 's' | 'xs';
  width?: number;
  disabled?: boolean;
  readOnly?: boolean;
  withClear?: boolean;
  contentRight?: ReactElement;
  focused?: boolean;
}) => {
  const [value, setValue] = useState(initial);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (focused) {
      box.current?.querySelector('input')?.focus({ preventScroll: true });
    }
  }, [focused]);

  return (
    <div ref={box} style={{ width, maxWidth: '100%' }}>
      <TextFieldSearch
        size={size}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={withClear ? () => setValue('') : undefined}
        disabled={disabled}
        readOnly={readOnly}
        contentRight={contentRight}
      />
    </div>
  );
};

/*
 * Autocomplete Search. Список подсказок у компонента открывается в фокусе.
 * Чтобы показать открытый список без клика, пример сообщает полю о фокусе
 * событием focusin: список открывается, настоящий фокус остаётся на месте.
 * Клик мимо списка закрывает его, как в интерфейсе.
 */

const AutocompleteDemo = ({
  initial = '',
  open = false,
  size = 's',
  width = 360,
  height = 190,
  total = false,
  entity,
  highlight = false,
}: {
  initial?: string;
  open?: boolean;
  size?: 's' | 'xs';
  width?: number;
  height?: number;
  total?: boolean;
  entity?: string;
  highlight?: boolean;
}) => {
  const [value, setValue] = useState(initial);
  const [, rerender] = useState(0);
  const box = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!open) {
      return undefined;
    }

    box.current?.querySelector('input')?.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));

    // строка «Найдено» берёт число подсказок с прошлой отрисовки, поэтому перерисовываем один раз
    const timer = window.setTimeout(() => rerender((n) => n + 1), 50);

    return () => window.clearTimeout(timer);
  }, [open]);

  return (
    <div ref={box} style={{ width, maxWidth: '100%', minHeight: open ? height : undefined }}>
      <AutocompleteSearch
        size={size}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
        suggestions={CITIES}
        onSuggestionSelect={(item: City) => setValue(item.label)}
        beforeListTotal={total}
        beforeListTotalEntity={entity}
        renderItem={highlight ? (item: City) => <Highlight text={item.label} query={value} /> : undefined}
      />
    </div>
  );
};

/* Живая настройка */

type PlaygroundArgs = {
  Search: 'Textfield Search' | 'Autocomplete Search';
  View: 'Placeholder' | 'Value';
  NamePlaceholder: string;
  NameValue: string;
  Focused: boolean;
  State: 'Default' | 'Opened' | 'EmptyState';
  Size: 'S' | 'XS';
};

const initialValue = (args: PlaygroundArgs, state: PlaygroundArgs['State']) => {
  if (state === 'Opened') {
    return 'Мо';
  }

  if (state === 'EmptyState') {
    return 'Тверь';
  }

  return args.View === 'Value' ? args.NameValue : '';
};

const PlaygroundView = (args: PlaygroundArgs) => {
  const isAutocomplete = args.Search === 'Autocomplete Search';
  const state = isAutocomplete ? args.State : 'Default';
  const [value, setValue] = useState(initialValue(args, state));
  const box = useRef<HTMLDivElement>(null);
  const size = args.Size === 'XS' ? 'xs' : 's';

  useLayoutEffect(() => {
    const input = box.current?.querySelector('input');

    if (args.Focused) {
      input?.focus({ preventScroll: true });
    } else if (state !== 'Default') {
      input?.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    }
  }, [args.Focused, state]);

  return (
    <div ref={box} style={{ width: 360, maxWidth: '100%', minHeight: isAutocomplete ? 240 : undefined }}>
      {isAutocomplete ? (
        <AutocompleteSearch
          size={size}
          placeholder={args.NamePlaceholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
          suggestions={CITIES}
          onSuggestionSelect={(item: City) => setValue(item.label)}
        />
      ) : (
        <TextFieldSearch
          size={size}
          placeholder={args.NamePlaceholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
        />
      )}
    </div>
  );
};

export const Playground: StoryObj<PlaygroundArgs> = {
  name: 'Живая настройка',
  args: {
    Search: 'Textfield Search',
    View: 'Value',
    NamePlaceholder: 'Поиск',
    NameValue: 'Отчёт по продажам',
    Focused: false,
    State: 'Opened',
    Size: 'S',
  },
  argTypes: {
    Search: {
      control: 'inline-radio',
      options: ['Textfield Search', 'Autocomplete Search'],
      description: 'Вид поиска',
    },
    View: {
      control: 'inline-radio',
      options: ['Placeholder', 'Value'],
      description: 'Подсказка или введённое значение',
    },
    NamePlaceholder: { control: 'text', description: 'Текст подсказки' },
    NameValue: {
      control: 'text',
      description: 'Введённое значение',
      if: { arg: 'View', eq: 'Value' },
    },
    Focused: { control: 'boolean', description: 'Фокус в поле' },
    State: {
      control: 'inline-radio',
      options: ['Default', 'Opened', 'EmptyState'],
      description: 'Состояние Autocomplete Search. В Opened и EmptyState текст в поле задан примером',
      if: { arg: 'Search', eq: 'Autocomplete Search' },
    },
    Size: {
      control: 'inline-radio',
      options: ['S', 'XS'],
      description: 'Размер поля',
    },
  },
  render: (args) => <PlaygroundView key={JSON.stringify(args)} {...args} />,
};

/* Когда какой Search */

const TextfieldWithListView = () => {
  const [value, setValue] = useState('Отчёт');
  const items = REPORTS.filter((item) => item.toLowerCase().includes(value.toLowerCase()));

  return (
    <div style={column(320)}>
      <TextFieldSearch value={value} onChange={(e) => setValue(e.target.value)} onClear={() => setValue('')} />
      <List>
        {items.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
    </div>
  );
};

export const TextfieldWithList: Story = {
  name: 'Textfield Search над списком',
  render: () => <TextfieldWithListView />,
};

export const AutocompleteCities: Story = {
  name: 'Autocomplete Search с подсказками',
  render: () => <AutocompleteDemo initial="Мо" open />,
};

/* Размеры и отступы */

const fieldGaps = [
  { a: '&', b: '[class*="StyledContentLeft"] .icon-root-container', dir: 'h' as const },
  { a: '[class*="StyledContentLeft"] .icon-root-container', b: '.input-scrollable-wrapper', dir: 'h' as const },
  { a: '.input-scrollable-wrapper', b: '[class*="StyledContentRight"] button', dir: 'h' as const },
  { a: '[class*="StyledContentRight"] button', b: '&', dir: 'h' as const },
];

export const SpacingLive: Story = {
  name: 'Отступы на живом компоненте',
  render: () => (
    <div>
      <div style={{ display: 'grid', gap: s.x16 }}>
        {(['s', 'xs'] as const).map((size) => (
          <div key={size}>
            <Caption>{size === 's' ? 'Размер S, высота 40 px' : 'Размер XS, высота 32 px'}</Caption>
            <Measure gaps={fieldGaps} style={{ width: 360, maxWidth: '100%', marginBottom: s.x12 }}>
              <SearchField size={size} initial="Отчёт по продажам" />
            </Measure>
          </div>
        ))}
      </div>
      <MeasureLegend />
    </div>
  ),
};

/* Общие настройки */

export const View: Story = {
  name: 'View',
  render: () => (
    <div style={column(360)}>
      <div>
        <Caption>View = Placeholder</Caption>
        <SearchField />
      </div>
      <div>
        <Caption>View = Value</Caption>
        <SearchField initial="Отчёт по продажам" />
      </div>
    </div>
  ),
};

export const Focused: Story = {
  name: 'Focused',
  render: () => <SearchField focused />,
};

/* Настройки Autocomplete Search */

export const State: Story = {
  name: 'State',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: s.x12 }}>
      <div>
        <Caption>Default</Caption>
        <AutocompleteDemo width={250} />
      </div>
      <div>
        <Caption>Opened</Caption>
        <AutocompleteDemo width={250} initial="Мо" open />
      </div>
      <div>
        <Caption>EmptyState</Caption>
        <AutocompleteDemo width={250} initial="Тверь" open height={240} />
      </div>
    </div>
  ),
};

export const BeforeListTotal: Story = {
  name: 'Строка «Найдено»',
  render: () => <AutocompleteDemo initial="Мо" open total entity="городов" height={230} />,
};

/* Состояния */

export const States: Story = {
  name: 'Disabled и Read only',
  render: () => (
    <div style={column(360)}>
      <div>
        <Caption>Disabled</Caption>
        <SearchField initial="Отчёт по продажам" disabled />
      </div>
      <div>
        <Caption>Read only</Caption>
        <SearchField initial="Отчёт по продажам" readOnly />
      </div>
    </div>
  ),
};

/* Краевые сценарии */

export const PairClear: Story = {
  name: 'Пара: очистка поля',
  render: () => (
    <DocPair
      goodText="Крестик очистки справа, когда в поле есть значение"
      badText="Поле без очистки или с другой иконкой вместо крестика"
      good={<SearchField initial="Отчёт по продажам" width={300} />}
      bad={
        <div style={{ display: 'grid', gap: s.x8 }}>
          <SearchField initial="Отчёт по продажам" width={300} withClear={false} />
          <SearchField
            initial="Отчёт по продажам"
            width={300}
            withClear={false}
            contentRight={<IconTrash size="s" color={textSecondary} />}
          />
        </div>
      }
    />
  ),
};

export const EmptyStateList: Story = {
  name: 'Ничего не нашлось',
  render: () => <AutocompleteDemo initial="Тверь" open height={240} />,
};

const HighlightListView = () => {
  const [value, setValue] = useState('2351');
  const items = ['Договор 2351-А', 'Договор 2351-Б', 'Счёт 12351', 'Акт 4402', 'Заявка 2017'];

  return (
    <div style={column(320)}>
      <TextFieldSearch value={value} onChange={(e) => setValue(e.target.value)} onClear={() => setValue('')} />
      <List>
        {items
          .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
          .map((item) => (
            <ListItem key={item}>
              <Highlight text={item} query={value} />
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export const HighlightList: Story = {
  name: 'Подсветка найденного текста',
  render: () => <HighlightListView />,
};

const CityCard = ({ query, highlight }: { query: string; highlight: boolean }) => (
  <div
    style={{
      padding: s.x8,
      borderRadius: s.x4,
      border: '1px solid rgba(8, 8, 8, 0.12)',
    }}
  >
    <BodyS style={{ color: textSecondary }}>Город в карточке</BodyS>
    <BodyS>{highlight ? <Highlight text="Москва" query={query} /> : 'Москва'}</BodyS>
  </div>
);

export const PairHighlight: Story = {
  name: 'Пара: подсветка',
  render: () => (
    <DocPair
      goodText="Подсветка в одном месте: только в выпадающем списке"
      badText="Подсветка сразу в списке и в карточке"
      good={
        <div style={{ display: 'grid', gap: s.x12 }}>
          <CityCard query="Мо" highlight={false} />
          <AutocompleteDemo initial="Мо" open highlight width={260} />
        </div>
      }
      bad={
        <div style={{ display: 'grid', gap: s.x12 }}>
          <CityCard query="Мо" highlight />
          <AutocompleteDemo initial="Мо" open highlight width={260} />
        </div>
      }
    />
  ),
};

/* Фильтрация */

const filterReports = (query: string) =>
  REPORTS.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

const FilteringView = () => {
  const [live, setLive] = useState('');
  const [typed, setTyped] = useState('');
  const [query, setQuery] = useState('');

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: s.x16 }}>
      <div style={column(300)}>
        <Caption>Фильтрация при вводе</Caption>
        <TextFieldSearch value={live} onChange={(e) => setLive(e.target.value)} onClear={() => setLive('')} />
        <List>
          {filterReports(live).map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </div>
      <div style={column(300)}>
        <Caption>Фильтрация по Enter</Caption>
        <TextFieldSearch
          value={typed}
          placeholder="Запрос и Enter"
          onChange={(e) => setTyped(e.target.value)}
          onSearch={(v: string) => setQuery(v)}
          onClear={() => {
            setTyped('');
            setQuery('');
          }}
        />
        <List>
          {filterReports(query).map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export const Filtering: Story = {
  name: 'Фильтрация при вводе и по Enter',
  render: () => <FilteringView />,
};
