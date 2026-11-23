/**
 * Агрегация по спецификации. Все цифры отчёта считает этот код
 * по полным данным, а не LLM: для отчёта руководству это главное.
 */
import type { DataRow } from './dataset';
import type {
  Aggregation,
  ChartBlock,
  Dimension,
  Measure,
  ReportFilter,
  TableBlock,
} from './spec';

export type ChartSeries = {
  name: string;
  values: number[];
  /** Слот палитры: фиксирован за сущностью и не меняется при фильтрации */
  colorIndex: number;
};
export type ChartData = { categories: string[]; series: ChartSeries[] };

const MONTH_SHORT = [
  'янв',
  'фев',
  'мар',
  'апр',
  'май',
  'июн',
  'июл',
  'авг',
  'сен',
  'окт',
  'ноя',
  'дек',
];

const AGG_LABEL: Record<Aggregation, string> = {
  sum: 'сумма',
  avg: 'среднее',
  count: 'количество',
  min: 'минимум',
  max: 'максимум',
};

export const measureLabel = (measure: Measure) =>
  measure.agg === 'sum'
    ? measure.column
    : `${measure.column}, ${AGG_LABEL[measure.agg]}`;

export function applyFilters(rows: DataRow[], filters: ReportFilter[]) {
  if (!filters.length) return rows;
  return rows.filter((row) =>
    filters.every((filter) =>
      filter.values.includes(String(row[filter.column])),
    ),
  );
}

/** Ключ группировки: сортируемый и одновременно читаемый после formatKey */
function dimensionKey(row: DataRow, dimension: Dimension): string {
  const value = row[dimension.column];
  if (value === null || value === undefined) return '—';
  const text = String(value);
  if (!dimension.timeUnit || !/^\d{4}-\d{2}/.test(text)) return text;
  const [year = '', month = '1'] = text.split('-');
  switch (dimension.timeUnit) {
    case 'year':
      return year;
    case 'quarter':
      return `${year}-Q${Math.ceil(Number(month) / 3)}`;
    case 'month':
      return `${year}-${month}`;
    default:
      return text.slice(0, 10);
  }
}

export function formatKey(key: string, dimension: Dimension): string {
  if (!dimension.timeUnit) return key;
  const quarter = key.match(/^(\d{4})-Q(\d)$/);
  if (quarter) return `${quarter[2]} кв. ${quarter[1]}`;
  const month = key.match(/^(\d{4})-(\d{2})$/);
  if (month)
    return `${MONTH_SHORT[Number(month[2]) - 1]} ${month[1]?.slice(2)}`;
  const day = key.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (day) return `${day[3]}.${day[2]}`;
  return key;
}

function aggregate(rows: DataRow[], measure: Measure): number {
  if (measure.agg === 'count') return rows.length;
  const values = rows
    .map((row) => row[measure.column])
    .filter((value): value is number => typeof value === 'number');
  if (!values.length) return 0;
  switch (measure.agg) {
    case 'avg':
      return values.reduce((a, b) => a + b, 0) / values.length;
    case 'min':
      return Math.min(...values);
    case 'max':
      return Math.max(...values);
    default:
      return values.reduce((a, b) => a + b, 0);
  }
}

function groupBy(rows: DataRow[], key: (row: DataRow) => string) {
  const groups = new Map<string, DataRow[]>();
  rows.forEach((row) => {
    const value = key(row);
    const list = groups.get(value);
    if (list) list.push(row);
    else groups.set(value, [row]);
  });
  return groups;
}

export const computeMeasure = aggregate;

export function computeChart(
  block: ChartBlock,
  rows: DataRow[],
  /** Полный порядок значений колонки серий из профиля, до фильтров */
  seriesOrder: string[] = [],
): ChartData {
  const [firstMeasure] = block.measures;
  if (!firstMeasure) return { categories: [], series: [] };
  const groups = groupBy(rows, (row) => dimensionKey(row, block.x));
  let keys = Array.from(groups.keys());
  const isTime = Boolean(block.x.timeUnit);
  const total = (key: string) => aggregate(groups.get(key) ?? [], firstMeasure);

  // Время — по порядку, категории — по убыванию первой меры
  keys = isTime ? keys.sort() : keys.sort((a, b) => total(b) - total(a));

  let other: DataRow[] = [];
  if (block.limit && keys.length > block.limit) {
    other = keys.slice(block.limit).flatMap((key) => groups.get(key) ?? []);
    keys = keys.slice(0, block.limit);
  }

  const categories = keys.map((key) => formatKey(key, block.x));
  const bucket = (key: string) => groups.get(key) ?? [];
  if (other.length) categories.push('Другие');

  let series: ChartSeries[];
  if (block.series) {
    // Порядок серий фиксирован порядком значений в данных: цвет следует
    // за сущностью и не перекрашивается при фильтрации
    const seriesColumn = block.series;
    const present = new Set(rows.map((row) => String(row[seriesColumn])));
    const order = seriesOrder.length ? seriesOrder : Array.from(present);
    series = order.flatMap((name, colorIndex) => {
      if (!present.has(name)) return [];
      const ofSeries = (list: DataRow[]) =>
        list.filter((row) => String(row[seriesColumn]) === name);
      const values = keys.map((key) =>
        aggregate(ofSeries(bucket(key)), firstMeasure),
      );
      if (other.length) values.push(aggregate(ofSeries(other), firstMeasure));
      return [{ name, values, colorIndex }];
    });
  } else {
    series = block.measures.map((measure, colorIndex) => {
      const values = keys.map((key) => aggregate(bucket(key), measure));
      if (other.length) values.push(aggregate(other, measure));
      return { name: measureLabel(measure), values, colorIndex };
    });
  }

  return { categories, series };
}

export type TableData = { header: string[]; rows: (string | number)[][] };

export function computeTable(block: TableBlock, rows: DataRow[]): TableData {
  const groups = groupBy(rows, (row) => dimensionKey(row, block.groupBy));
  const keys = Array.from(groups.keys()).sort();
  return {
    header: [block.groupBy.column, ...block.measures.map(measureLabel)],
    rows: [
      ...keys.map((key) => [
        formatKey(key, block.groupBy),
        ...block.measures.map((measure) =>
          aggregate(groups.get(key) ?? [], measure),
        ),
      ]),
      ['Итого', ...block.measures.map((measure) => aggregate(rows, measure))],
    ],
  };
}

const numberFormat = new Intl.NumberFormat('ru-RU', {
  maximumFractionDigits: 1,
});

export const formatNumber = (value: number) => numberFormat.format(value);

/** Подпись оси: 1 200 → «1,2 тыс.» */
export function formatCompact(value: number): string {
  const abs = Math.abs(value);
  if (abs >= 1e6) return `${numberFormat.format(value / 1e6)} млн`;
  if (abs >= 1e4) return `${numberFormat.format(value / 1e3)} тыс.`;
  return numberFormat.format(value);
}
