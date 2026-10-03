/* eslint-disable react-hooks/rules-of-hooks */
import { createSeededRandom } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { StoryHint } from '@df-storybook/utils/StoryHint';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Checkbox } from '@ui-kit/components/Checkbox';
import {
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  SortColumn,
  SummaryCellInfoGlideInstance,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { TextField } from '@ui-kit/components/TextField';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/StickyRowsCols',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;

type Story = StoryObj;

const source = storySourceDoc({
  preCode: `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`,
  previewSource: 'shown',
});

const MONTHS = [
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Окт',
  'Ноя',
  'Дек',
];
const REGIONS = [
  'Москва',
  'Санкт-Петербург',
  'Казань',
  'Новосибирск',
  'Екатеринбург',
];
const PRODUCTS = ['Кредиты', 'Депозиты', 'Карты', 'Ипотека', 'Страхование'];

type ReportRow = {
  id: number;
  kind: 'item' | 'subtotal' | 'total';
  region: string;
  manager: string;
  product: string;
  months: number[];
  total: number;
};

type ReportRowData = Omit<ReportRow, 'id' | 'total'>;

const sum = (values: number[]) => values.reduce((acc, value) => acc + value, 0);

const sumMonths = (rows: ReportRowData[]) =>
  MONTHS.map((_, month) => sum(rows.map((row) => row.months[month] ?? 0)));

/** Отчёт: общий итог, затем по каждому региону — итог региона и его строки. */
function createReportRows(itemsPerRegion = 40): ReportRow[] {
  const random = createSeededRandom(7);

  const sections = REGIONS.map((region) => {
    const items = Array.from(
      { length: itemsPerRegion },
      (_, index): ReportRowData => ({
        kind: 'item',
        region,
        manager: `Менеджер ${index + 1}`,
        product: PRODUCTS[index % PRODUCTS.length] ?? '',
        months: MONTHS.map(() => Math.round(random() * 900 + 100)),
      }),
    );
    const subtotal: ReportRowData = {
      kind: 'subtotal',
      region,
      manager: '—',
      product: `Итого: ${region}`,
      months: sumMonths(items),
    };
    return { subtotal, items };
  });

  const total: ReportRowData = {
    kind: 'total',
    region: 'Все регионы',
    manager: '—',
    product: 'Итого по банку',
    months: sumMonths(sections.map(({ subtotal }) => subtotal)),
  };

  return [
    total,
    ...sections.flatMap(({ subtotal, items }) => [subtotal, ...items]),
  ].map((row, index) => ({
    ...row,
    id: index + 1,
    total: sum(row.months),
  }));
}

const formatNumber = (value: number) => value.toLocaleString('ru-RU');

const ROW_BACKGROUND: Partial<Record<ReportRow['kind'], string>> = {
  total: 'rgba(46, 170, 220, 0.2)',
  subtotal: 'rgba(46, 170, 220, 0.08)',
};

const highlightTotals = ({ row }: { row: ReportRow }) => {
  const bgCell = ROW_BACKGROUND[row.kind];
  return bgCell ? { bgCell } : undefined;
};

function createColumns<SR = unknown>({ sortable = false } = {}): ColumnConfig<
  ReportRow,
  SR
>[] {
  const numberSort = sortable ? ('numberSort' as const) : undefined;
  const stringSort = sortable ? ('stringSort' as const) : undefined;

  const columns: ColumnConfig<ReportRow, SR>[] = [
    { key: 'id', name: '№', width: 64, sortingType: numberSort },
    { key: 'region', name: 'Регион', width: 160, sortingType: stringSort },
    { key: 'manager', name: 'Менеджер', width: 140 },
    { key: 'product', name: 'Продукт', width: 180 },
    ...MONTHS.map((name, month) => ({
      key: `m${month + 1}`,
      name,
      width: 110,
      renderCell: ({ row }: { row: ReportRow }) =>
        formatNumber(row.months[month] ?? 0),
    })),
    {
      key: 'total',
      name: 'Год',
      width: 130,
      sortingType: numberSort,
      renderCell: ({ row }: { row: ReportRow }) => formatNumber(row.total),
    },
  ];

  return columns.map((column) => ({
    ...column,
    themeOverride: highlightTotals,
  }));
}

const REPORT_ROWS = createReportRows();
const COLUMNS = createColumns();
const CONTAINER_STYLE = { height: '600px' };

const isSubtotalOrTotal = (row: ReportRow) => row.kind !== 'item';

export const StickyColumns: Story = {
  ...source,
  name: 'Липкие колонки',
  render: () => (
    <>
      <StoryHint>
        Прокрутите вправо: колонка <b>Регион</b> прилипает к левому краю, а{' '}
        <b>Год</b> встаёт рядом с ней, когда доедет.
      </StoryHint>
      <TableCanvas
        tableConfig={{
          containerStyle: CONTAINER_STYLE,
          stickyColumns: ['region', 'total'],
        }}
        columnConfig={COLUMNS}
        rows={REPORT_ROWS}
      />
    </>
  ),
};

const QUARTER_START_MONTHS = new Set(['m1', 'm4', 'm7', 'm10']);

export const StickyColumnsByPredicate: Story = {
  ...source,
  name: 'Липкие колонки по условию',
  render: () => (
    <>
      <StoryHint>
        Колонки заданы функцией: липкими становятся первые месяцы кварталов.
        Прокрутите вправо — <b>Янв</b>, <b>Апр</b>, <b>Июл</b>, <b>Окт</b> по
        очереди встают у левого края.
      </StoryHint>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '600px', width: '760px' },
          stickyColumns: (column) => QUARTER_START_MONTHS.has(column.key),
        }}
        columnConfig={COLUMNS}
        rows={REPORT_ROWS}
      />
    </>
  ),
};

export const StickyRows: Story = {
  ...source,
  name: 'Липкие строки',
  render: () => (
    <>
      <StoryHint>
        Прокрутите вниз: итоги собираются под шапкой — сначала общий, затем итог
        каждого региона, до которого вы доскроллили.
      </StoryHint>
      <TableCanvas
        tableConfig={{
          containerStyle: CONTAINER_STYLE,
          stickyRows: isSubtotalOrTotal,
        }}
        columnConfig={COLUMNS}
        rows={REPORT_ROWS}
      />
    </>
  ),
};

export const RowsAndColumns: Story = {
  ...source,
  name: 'Строки и колонки вместе',
  render: () => (
    <>
      <StoryHint>
        Липкие колонки <b>Продукт</b> и <b>Год</b>, липкие строки — общий итог и
        итог по Казани. Нумерация строк остаётся слева.
      </StoryHint>
      <TableCanvas
        tableConfig={{
          containerStyle: CONTAINER_STYLE,
          rowMarkers: { startIndex: 1 },
          stickyColumns: ['product', 'total'],
          stickyRows: (row) =>
            row.kind === 'total' ||
            (row.kind === 'subtotal' && row.region === 'Казань'),
        }}
        columnConfig={COLUMNS}
        rows={REPORT_ROWS}
      />
    </>
  ),
};

export const WithPinnedColumns: Story = {
  ...source,
  name: 'Вместе с закреплёнными колонками',
  render: () => (
    <>
      <StoryHint>
        Колонка <b>№</b> закреплена всегда (
        <code>columnsControl.pinnedDefault</code>), а <b>Продукт</b> и{' '}
        <b>Июн</b> прилипают правее неё. Закрепление можно менять в меню
        колонок.
      </StoryHint>
      <TableCanvas
        tableConfig={{
          containerStyle: CONTAINER_STYLE,
          columnsControl: {
            enable: true,
            pinning: true,
            pinnedDefault: ['id'],
          },
          stickyColumns: ['product', 'm6'],
          stickyRows: (row) => row.kind === 'total',
        }}
        columnConfig={COLUMNS}
        rows={REPORT_ROWS}
      />
    </>
  ),
};

const GROUPED_COLUMNS: ColumnOrColumnGroupConfig<ReportRow>[] = [
  { key: 'group-info', name: 'Подразделение', children: COLUMNS.slice(0, 4) },
  { key: 'group-h1', name: '1 полугодие', children: COLUMNS.slice(4, 10) },
  { key: 'group-h2', name: '2 полугодие', children: COLUMNS.slice(10, 16) },
  ...COLUMNS.slice(16),
];

export const WithColumnGroups: Story = {
  ...source,
  name: 'С группировкой колонок',
  render: () => (
    <>
      <StoryHint>
        Группа в шапке разрывается на границе липкой зоны: <b>Регион</b>{' '}
        остаётся под «Подразделением», а <b>Июл</b> прилипает вместе с подписью
        своей группы.
      </StoryHint>
      <TableCanvas
        tableConfig={{
          containerStyle: CONTAINER_STYLE,
          stickyColumns: ['region', 'm7'],
          stickyRows: isSubtotalOrTotal,
        }}
        columnConfig={GROUPED_COLUMNS}
        rows={REPORT_ROWS}
      />
    </>
  ),
};

const SORTABLE_COLUMNS = createColumns({ sortable: true });
const SHORT_REPORT_ROWS = createReportRows(15);

export const WithSorting: Story = {
  ...source,
  name: 'С сортировкой',
  render: () => {
    const sortingState = useState<readonly SortColumn[]>([]);

    return (
      <>
        <StoryHint>
          Отсортируйте по <b>Году</b>: итоги переедут на новые места, но
          останутся липкими — строки задаются условием, а не номером.
        </StoryHint>
        <TableCanvas
          tableConfig={{
            containerStyle: CONTAINER_STYLE,
            sorting: { state: sortingState },
            stickyColumns: ['region'],
            stickyRows: isSubtotalOrTotal,
          }}
          columnConfig={SORTABLE_COLUMNS}
          rows={SHORT_REPORT_ROWS}
        />
      </>
    );
  },
};

const ROW_HEIGHT_BY_KIND: Partial<Record<ReportRow['kind'], number>> = {
  total: 64,
  subtotal: 48,
};

export const VariableRowHeight: Story = {
  ...source,
  name: 'Разная высота строк',
  render: () => (
    <>
      <StoryHint>
        Общий итог высотой 64 px, итоги регионов — 48 px. Полоса прилипших строк
        растёт ступенями, строки под ней уходят без зазоров.
      </StoryHint>
      <TableCanvas
        tableConfig={{
          containerStyle: CONTAINER_STYLE,
          rowHeight: (row, size) =>
            ROW_HEIGHT_BY_KIND[row.kind] ?? size.rowSizeValue,
          stickyColumns: ['product'],
          stickyRows: isSubtotalOrTotal,
        }}
        columnConfig={COLUMNS}
        rows={REPORT_ROWS}
      />
    </>
  ),
};

type SummaryRow = { label: string; total: number };

const SUMMARY_ROWS: SummaryRow[] = [
  {
    label: 'Сумма по строкам',
    total: sum(
      REPORT_ROWS.filter((row) => row.kind === 'item').map((row) => row.total),
    ),
  },
];

const renderSummaryCell =
  (key: string) =>
  ({ row }: SummaryCellInfoGlideInstance<ReportRow, SummaryRow>) => {
    if (key === 'product') return row.label;
    if (key === 'total') return formatNumber(row.total);
    return '';
  };

const COLUMNS_WITH_SUMMARY = createColumns<SummaryRow>().map((column) => ({
  ...column,
  renderSummaryCell: renderSummaryCell(column.key),
}));

export const WithSummaryRows: Story = {
  ...source,
  name: 'С итоговой строкой снизу',
  render: () => (
    <>
      <StoryHint>
        Итоги регионов прилипают сверху, а итоговая строка (
        <code>bottomSummaryRows</code>) всегда закреплена снизу.
      </StoryHint>
      <TableCanvas
        tableConfig={{
          containerStyle: CONTAINER_STYLE,
          summaryRows: { showDefault: true, showInControl: true },
          stickyColumns: ['product', 'total'],
          stickyRows: (row) => row.kind === 'subtotal',
        }}
        columnConfig={COLUMNS_WITH_SUMMARY}
        rows={REPORT_ROWS}
        bottomSummaryRows={SUMMARY_ROWS}
      />
    </>
  ),
};

const MERGE_REPORT_ROWS = createReportRows(12);

// Слитая ячейка берёт фон первой строки блока (итога региона), поэтому колонку слияния не подсвечиваем.
const MERGE_COLUMNS = COLUMNS.map((column) =>
  column.key === 'region' ? { ...column, themeOverride: undefined } : column,
);

export const WithMergedCells: Story = {
  ...source,
  name: 'Со слитыми ячейками',
  render: () => (
    <>
      <StoryHint>
        Регионы слиты в одну ячейку. Когда итог по Санкт-Петербургу прилипает,
        название региона переезжает в прилипшую строку, а остаток блока
        прокручивается под ней.
      </StoryHint>
      <TableCanvas
        tableConfig={{
          containerStyle: CONTAINER_STYLE,
          mergeCells: { mergeByCellValues: ['region'] },
          stickyColumns: ['product'],
          stickyRows: (row) =>
            row.kind === 'subtotal' && row.region === 'Санкт-Петербург',
        }}
        columnConfig={MERGE_COLUMNS}
        rows={MERGE_REPORT_ROWS}
      />
    </>
  ),
};

export const StickyMergedColumn: Story = {
  ...source,
  name: 'Липкая колонка со слитыми ячейками',
  render: () => (
    <>
      <StoryHint>
        Колонка <b>Регион</b> слита по значениям и при этом липкая. Прокрутите
        вправо — слитые блоки регионов прилипают к левому краю целиком;
        прокрутите вниз — итоги регионов прилипают под шапкой, и название
        региона переезжает в прилипшую строку.
      </StoryHint>
      <TableCanvas
        tableConfig={{
          containerStyle: CONTAINER_STYLE,
          mergeCells: { mergeByCellValues: ['region'] },
          stickyColumns: ['region'],
          stickyRows: (row) => row.kind === 'subtotal',
        }}
        columnConfig={MERGE_COLUMNS}
        rows={MERGE_REPORT_ROWS}
      />
    </>
  ),
};

export const LargeData: Story = {
  ...source,
  name: '20 000 строк',
  render: () => {
    const [rows] = useState(() => createReportRows(4000));

    return (
      <>
        <StoryHint>
          20 000 строк и 17 колонок: позиции считаются только по видимым
          строкам, поэтому прокрутка остаётся плавной.
        </StoryHint>
        <TableCanvas
          tableConfig={{
            containerStyle: CONTAINER_STYLE,
            rowMarkers: { startIndex: 1 },
            stickyColumns: ['region', 'total'],
            stickyRows: isSubtotalOrTotal,
          }}
          columnConfig={COLUMNS}
          rows={rows}
        />
      </>
    );
  },
};

type BigRow = {
  id: number;
  kind: ReportRow['kind'];
  region: string;
  product: string;
};

const SECTION_SIZE = 50_000;

/** Псевдослучайное значение ячейки по номеру строки и месяца — без хранения в строке. */
const cellValue = (id: number, month: number) =>
  ((id * 7 + month * 13) % 89) * 10 + 100;

const createBigRow = (index: number): BigRow => {
  const section = Math.floor(index / SECTION_SIZE);
  const region = `Регион ${section + 1}`;
  if (index === 0) {
    return { id: 1, kind: 'total', region: 'Все регионы', product: 'Итого' };
  }
  if (index % SECTION_SIZE === 0) {
    return {
      id: index + 1,
      kind: 'subtotal',
      region,
      product: `Итого: ${region}`,
    };
  }
  return {
    id: index + 1,
    kind: 'item',
    region,
    product: PRODUCTS[index % PRODUCTS.length] ?? '',
  };
};

const createBigRows = (from: number, count: number) =>
  Array.from({ length: count }, (_, offset) => createBigRow(from + offset));

const BIG_COLUMNS: ColumnConfig<BigRow>[] = [
  { key: 'id', name: '№', width: 100 },
  { key: 'region', name: 'Регион', width: 160 },
  { key: 'product', name: 'Продукт', width: 180 },
  ...MONTHS.map((name, month) => ({
    key: `m${month + 1}`,
    name,
    width: 110,
    renderCell: ({ row }: { row: BigRow }) =>
      formatNumber(cellValue(row.id, month)),
  })),
].map((column) => ({
  ...column,
  themeOverride: ({ row }: { row: BigRow }) => {
    const bgCell = ROW_BACKGROUND[row.kind];
    return bgCell ? { bgCell } : undefined;
  },
}));

const MILLION = 1_000_000;
const MILLION_STICKY_ROWS = [0, 250_000, 500_000, 750_000];

export const MillionRowsByIndexes: Story = {
  ...source,
  name: '1 000 000 строк, липкие по индексам',
  render: () => {
    const [rows] = useState(() => createBigRows(0, MILLION));

    return (
      <>
        <StoryHint>
          Миллион строк. Липкие строки переданы индексами (
          <code>stickyRows: [0, 250000, …]</code>) — таблица не проходит по
          строкам вообще. Перетащите ползунок прокрутки вниз.
        </StoryHint>
        <TableCanvas
          tableConfig={{
            containerStyle: CONTAINER_STYLE,
            stickyColumns: ['region'],
            stickyRows: MILLION_STICKY_ROWS,
          }}
          columnConfig={BIG_COLUMNS}
          rows={rows}
        />
      </>
    );
  },
};

const CHUNK_SIZE = SECTION_SIZE;

export const ChunkLoading: Story = {
  ...source,
  name: 'Подгрузка чанками',
  render: () => {
    const [rows, setRows] = useState(() => createBigRows(0, CHUNK_SIZE));
    const predicateCalls = useRef(0);
    const [callsShown, setCallsShown] = useState(0);

    const isSticky = useCallback((row: BigRow) => {
      predicateCalls.current += 1;
      return row.kind !== 'item';
    }, []);

    useEffect(() => setCallsShown(predicateCalls.current), [rows]);

    const loadChunk = () =>
      setRows((current) => [
        ...current,
        ...createBigRows(current.length, CHUNK_SIZE),
      ]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <StoryHint>
          Строки подгружаются чанками по {formatNumber(CHUNK_SIZE)}. Липкие
          строки заданы предикатом; его результаты кешируются, поэтому после
          подгрузки он вызывается только для новых строк — счётчик растёт на
          размер чанка, а не на всю таблицу.
        </StoryHint>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Button size="s" view="secondary" onClick={loadChunk}>
            Загрузить ещё {formatNumber(CHUNK_SIZE)}
          </Button>
          <span>
            Строк: <b>{formatNumber(rows.length)}</b> · вызовов предиката:{' '}
            <b>{formatNumber(callsShown)}</b>
          </span>
        </div>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '540px' },
            stickyColumns: ['region'],
            stickyRows: isSticky,
          }}
          columnConfig={BIG_COLUMNS}
          rows={rows}
        />
      </div>
    );
  },
};

const PLAYGROUND_ROWS = createReportRows(20);

const parseIds = (text: string) =>
  new Set(
    text
      .split(/[,\s]+/)
      .map(Number)
      .filter(Number.isInteger),
  );

export const Playground: Story = {
  ...storySourceDoc({ previewSource: 'hidden' }),
  name: 'Песочница',
  render: () => {
    const [stickyColumns, setStickyColumns] = useState(['region', 'total']);
    const [stickyIdsText, setStickyIdsText] = useState('1, 2, 23');

    const stickyRows = useMemo(() => {
      const ids = parseIds(stickyIdsText);
      return (row: ReportRow) => ids.has(row.id);
    }, [stickyIdsText]);

    const toggleColumn = (key: string, checked: boolean) =>
      setStickyColumns((current) =>
        checked ? [...current, key] : current.filter((item) => item !== key),
      );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <StoryHint>
          Укажите номера липких строк (колонка <b>№</b>) и отметьте липкие
          колонки — таблица обновится сразу.
        </StoryHint>
        <div style={{ width: 320 }}>
          <TextField
            size="s"
            label="Липкие строки"
            labelPlacement="outer"
            placeholder="Например: 1, 2, 23"
            value={stickyIdsText}
            onChange={(event) => setStickyIdsText(event.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
          {COLUMNS.map(({ key, name }) => (
            <Checkbox
              key={key}
              size="s"
              label={typeof name === 'string' ? name : key}
              checked={stickyColumns.includes(key)}
              onChange={(event) => toggleColumn(key, event.target.checked)}
            />
          ))}
        </div>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            stickyColumns,
            stickyRows,
          }}
          columnConfig={COLUMNS}
          rows={PLAYGROUND_ROWS}
        />
      </div>
    );
  },
};
