/**
 * Имитация LLM-агента: правила по ключевым словам.
 *
 * В продукте на этом месте модель с инструментами MCP (list_charts,
 * get_chart_schema, create_report_spec, patch_report_spec). Контракт тот же:
 * на входе текст пользователя, профиль данных и текущая спецификация,
 * на выходе новая спецификация. Поэтому замена имитации на настоящую
 * модель не затрагивает ни рендер, ни экспорт.
 */
import type { StepPlan } from '../../shared/runSteps';
import type { ColumnProfile, Dataset, DatasetProfile } from './dataset';
import { plural } from './dataset';
import {
  Aggregation,
  CHART_CATALOG,
  ChartBlock,
  ChartKind,
  Dimension,
  KpiBlock,
  Measure,
  ReportBlock,
  ReportSpec,
  TableBlock,
  TimeUnit,
  validateSpec,
} from './spec';

export type AgentResult = {
  spec: ReportSpec;
  reply: string;
  steps: StepPlan[];
};

let blockCounter = 0;
const blockId = (kind: string) => {
  blockCounter += 1;
  return `${kind}-${blockCounter}`;
};

const DATIVE: Record<string, string> = {
  Месяц: 'месяцам',
  Регион: 'регионам',
  Продукт: 'продуктам',
  Подразделение: 'подразделениям',
  Дата: 'датам',
};

const GENITIVE: Record<string, string> = {
  Регион: 'регионов',
  Продукт: 'продуктов',
  Подразделение: 'подразделений',
};

const TIME_PHRASE: Record<TimeUnit, string> = {
  day: 'по дням',
  month: 'по месяцам',
  quarter: 'по кварталам',
  year: 'по годам',
};

const KIND_WORDS: [RegExp, ChartKind][] = [
  [/кругов|кольц|пирог|дол[яиюе]|структур/, 'pie'],
  [/област|площад/, 'area'],
  [/столб|гистограм|бар/, 'bar'],
  [/лини|линей|тренд|график(ом)? линией/, 'line'],
];

const ORDINALS: [RegExp, number][] = [
  [/перв/, 0],
  [/втор/, 1],
  [/трет/, 2],
];

const shortName = (column: string) => column.split(',')[0] ?? column;
const lower = (text: string) => text.toLowerCase().replace(/ё/g, 'е');

/** Основа слова для поиска упоминаний: «Выручка» → «выруч» */
function stem(name: string): string {
  const word =
    lower(name)
      .split(/[^a-zа-я0-9]+/i)
      .filter(Boolean)[0] ?? '';
  return word.slice(0, Math.max(4, word.length - 2));
}

/** Колонки, упомянутые в тексте, в порядке упоминания */
function mentionedColumns(
  text: string,
  profile: DatasetProfile,
): ColumnProfile[] {
  const source = lower(text);
  return profile.columns
    .map((column) => ({ column, index: source.indexOf(stem(column.name)) }))
    .filter((item) => item.index >= 0)
    .sort((a, b) => a.index - b.index)
    .map((item) => item.column);
}

/** Значения категорий, упомянутые в тексте: «только Москва» → фильтр */
function mentionedValues(text: string, profile: DatasetProfile) {
  const source = lower(text);
  const filters: { column: string; values: string[] }[] = [];
  profile.columns
    .filter((column) => column.type === 'category')
    .forEach((column) => {
      const values = (column.values ?? []).filter((value) => {
        const valueStem = stem(value);
        // Короткие значения («ИТ», «Юг») ищем целым словом, иначе «ит»
        // найдётся внутри «итоговые»
        return valueStem.length < 4
          ? new RegExp(`(^|[^а-яa-z])${valueStem}([^а-яa-z]|$)`).test(source)
          : source.includes(valueStem);
      });
      if (values.length) filters.push({ column: column.name, values });
    });
  return filters;
}

function detectAgg(text: string): Aggregation {
  const source = lower(text);
  if (/средн/.test(source)) return 'avg';
  if (/количеств|число|сколько/.test(source)) return 'count';
  if (/максим/.test(source)) return 'max';
  if (/миним/.test(source)) return 'min';
  return 'sum';
}

function detectTimeUnit(text: string): TimeUnit | undefined {
  const source = lower(text);
  if (/квартал/.test(source)) return 'quarter';
  if (/по годам|по году/.test(source)) return 'year';
  if (/по дням|ежеднев/.test(source)) return 'day';
  if (/месяц|динамик|тренд/.test(source)) return 'month';
  return undefined;
}

function detectKind(text: string): ChartKind | undefined {
  const source = lower(text);
  return KIND_WORDS.find(([re]) => re.test(source))?.[1];
}

function chartTitle(block: ChartBlock): string {
  const measure =
    block.measures.length > 1
      ? block.measures
          .map((m, i) => {
            const name = shortName(m.column);
            return i === 0 ? name : name.toLowerCase();
          })
          .join(' и ')
      : shortName(block.measures[0]?.column ?? '');
  const by = block.x.timeUnit
    ? TIME_PHRASE[block.x.timeUnit]
    : `по ${DATIVE[block.x.column] ?? `«${block.x.column}»`}`;
  const prefix = block.chart === 'pie' ? 'Структура: ' : '';
  const series = block.series
    ? ` в разрезе ${GENITIVE[block.series] ?? `«${block.series}»`}`
    : '';
  return `${prefix}${measure} ${by}${series}`;
}

/** Разбор одной фразы про график. null — во фразе нет ничего про график */
function parseChartClause(
  clause: string,
  profile: DatasetProfile,
): ChartBlock | null {
  const columns = mentionedColumns(clause, profile);
  const numbers = columns.filter((c) => c.type === 'number');
  const dims = columns.filter(
    (c) => c.type === 'category' || c.type === 'date',
  );
  const timeUnit = detectTimeUnit(clause);
  const kind = detectKind(clause);
  if (!numbers.length && !dims.length && !kind && !timeUnit) return null;

  const agg = detectAgg(clause);
  const firstNumber = profile.columns.find((c) => c.type === 'number');
  const measures: Measure[] = (numbers.length ? numbers : [firstNumber])
    .filter((c): c is ColumnProfile => Boolean(c))
    .map((c) => ({ column: c.name, agg }));

  const dateColumn = profile.columns.find((c) => c.type === 'date');
  const categoryDims = dims.filter((c) => c.type === 'category');

  let x: Dimension;
  let series: string | undefined;
  if (timeUnit && dateColumn && kind !== 'pie') {
    x = { column: dateColumn.name, timeUnit };
    series = categoryDims[0]?.name;
  } else if (categoryDims[0]) {
    x = { column: categoryDims[0].name };
    series = categoryDims[1]?.name;
  } else if (dateColumn && kind !== 'pie') {
    x = { column: dateColumn.name, timeUnit: 'month' };
  } else {
    const firstCategory = profile.columns.find((c) => c.type === 'category');
    x = { column: (firstCategory ?? profile.columns[0])?.name ?? '' };
  }

  const chart: ChartKind = kind ?? (x.timeUnit ? 'line' : 'bar');
  const block: ChartBlock = {
    kind: 'chart',
    id: blockId('chart'),
    title: '',
    chart,
    x,
    measures,
    series: measures.length > 1 ? undefined : series,
    stacked: /накоп|стек|сложен/.test(lower(clause)) || undefined,
  };
  block.title = chartTitle(block);
  return block;
}

function buildKpi(profile: DatasetProfile): KpiBlock {
  const numbers = profile.columns
    .filter((c) => c.type === 'number')
    .slice(0, 3);
  return {
    kind: 'kpi',
    id: blockId('kpi'),
    items: [
      ...numbers.map((column) => ({
        label: `${column.name}, итого`,
        measure: { column: column.name, agg: 'sum' as const },
      })),
      {
        label: 'Строк в выборке',
        measure: {
          column: profile.columns[0]?.name ?? '',
          agg: 'count' as const,
        },
      },
    ],
  };
}

function buildTable(profile: DatasetProfile, spec: ReportSpec): TableBlock {
  const firstChart = spec.blocks.find(
    (block): block is ChartBlock => block.kind === 'chart',
  );
  const numbers = profile.columns.filter((c) => c.type === 'number');
  return {
    kind: 'table',
    id: blockId('table'),
    title: 'Данные отчёта',
    groupBy: firstChart?.x ?? { column: profile.columns[0]?.name ?? '' },
    measures: numbers.slice(0, 3).map((c) => ({ column: c.name, agg: 'sum' })),
  };
}

const CLAUSE_SPLIT =
  /(?:,?\s+и\s+|,\s*|^)(?:добавь|добавить|а также|также|плюс)\s+|[;\n]+/i;

/** Добавляет блоки из фразы: KPI, таблица или график */
function blocksFromClause(
  clause: string,
  profile: DatasetProfile,
  spec: ReportSpec,
): ReportBlock[] {
  const source = lower(clause);
  const result: ReportBlock[] = [];
  if (/kpi|кпи|итог|показател|сводк/.test(source))
    result.push(buildKpi(profile));
  if (/таблиц|детализ/.test(source)) result.push(buildTable(profile, spec));
  const withoutKpi = source.replace(/итогов\S*|kpi|таблиц\S*/g, '');
  const chart = parseChartClause(withoutKpi, profile);
  if (chart && (result.length === 0 || detectKind(withoutKpi)))
    result.push(chart);
  return result;
}

const describeBlock = (block: ReportBlock) => {
  if (block.kind === 'kpi') return `KPI (${block.items.length})`;
  if (block.kind === 'table') return 'таблица';
  return `${CHART_CATALOG[block.chart].title.toLowerCase()} «${block.title}»`;
};

/** Блоки KPI всегда первыми: так отчёт читается сверху вниз */
const orderBlocks = (blocks: ReportBlock[]) => [
  ...blocks.filter((b) => b.kind === 'kpi'),
  ...blocks.filter((b) => b.kind === 'chart'),
  ...blocks.filter((b) => b.kind === 'table'),
];

function validateWithFixes(spec: ReportSpec, profile: DatasetProfile) {
  const issues = validateSpec(spec, profile);
  const fixable = issues.filter((issue) => issue.fix);
  const fixed = fixable.reduce(
    (acc, issue) => (issue.fix ? issue.fix(acc) : acc),
    spec,
  );
  // Заголовки графиков выводятся из их настроек: после исправления пересчитываем
  const blocks = fixed.blocks.map((block) =>
    block.kind === 'chart' ? { ...block, title: chartTitle(block) } : block,
  );
  return { issues, spec: { ...fixed, blocks } };
}

function newReport(text: string, dataset: Dataset): AgentResult {
  const { profile } = dataset;
  const empty: ReportSpec = {
    version: 1,
    title: '',
    dataset: profile.fileName,
    filters: [],
    blocks: [],
  };

  const clauses = text.split(CLAUSE_SPLIT).filter((c) => c && c.trim());
  let blocks: ReportBlock[] = [];
  clauses.forEach((clause) => {
    blocks = [
      ...blocks,
      ...blocksFromClause(clause, profile, { ...empty, blocks }),
    ];
  });
  if (!blocks.some((b) => b.kind === 'chart')) {
    const fallback = parseChartClause(
      profile.columns.find((c) => c.type === 'number')?.name ?? '',
      profile,
    );
    if (fallback) blocks.push(fallback);
  }

  const firstChart = blocks.find((b): b is ChartBlock => b.kind === 'chart');
  const draft: ReportSpec = {
    ...empty,
    title: firstChart ? firstChart.title : `Отчёт по файлу ${profile.fileName}`,
    filters: mentionedValues(text, profile),
    blocks: orderBlocks(blocks),
  };

  const { issues, spec } = validateWithFixes(draft, profile);
  const kinds = Array.from(
    new Set(spec.blocks.flatMap((b) => (b.kind === 'chart' ? [b.chart] : []))),
  );

  const steps: StepPlan[] = [
    {
      title: 'Профиль данных → LLM',
      detail: `${plural(
        profile.rows,
        'строка',
        'строки',
        'строк',
      )} остаются на сервере, в модель уходят схема и по 3 значения на колонку`,
      duration: 700,
    },
    {
      title: 'MCP charts-ui: list_charts()',
      detail: Object.keys(CHART_CATALOG).join(', '),
      duration: 500,
    },
    {
      title: `MCP charts-ui: get_chart_schema(${kinds
        .map((k) => `'${k}'`)
        .join(', ')})`,
      detail: 'схема пропсов и допустимые формы данных',
      duration: 600,
    },
    {
      title: 'LLM: create_report_spec',
      detail: draft.blocks.map(describeBlock).join(' · '),
      duration: 1100,
    },
    {
      title: 'Проверка спецификации',
      detail: issues.length
        ? `найдено замечаний: ${issues.length}`
        : 'колонки существуют, типы и агрегации совместимы',
      duration: 400,
    },
  ];
  if (issues.length) {
    steps.push({
      title: 'LLM: исправление по замечаниям проверки',
      detail: issues.map((issue) => issue.message).join('; '),
      duration: 800,
    });
  }
  steps.push({
    title: 'render_report → HTML',
    detail: `агрегация по всем ${profile.rows} строкам, один файл без внешних зависимостей`,
    duration: 600,
  });

  const filtersText = spec.filters.length
    ? `\nФильтр: ${spec.filters
        .map((f) => `${f.column} = ${f.values.join(', ')}`)
        .join('; ')}.`
    : '';

  return {
    spec,
    steps,
    reply: `Готово. В отчёте: ${spec.blocks
      .map(describeBlock)
      .join(
        ', ',
      )}.${filtersText}\nПредпросмотр справа. Можно уточнить словами или скачать HTML.`,
  };
}

function modifyReport(
  text: string,
  dataset: Dataset,
  current: ReportSpec,
): AgentResult | null {
  const { profile } = dataset;
  const source = lower(text);
  const changes: string[] = [];
  let spec: ReportSpec = { ...current, blocks: [...current.blocks] };

  const charts = () =>
    spec.blocks.filter((b): b is ChartBlock => b.kind === 'chart');
  const targetChart = (): ChartBlock | undefined => {
    const ordinal = ORDINALS.find(([re]) => re.test(source));
    const list = charts();
    return ordinal ? list[ordinal[1]] : list[list.length - 1];
  };
  const replaceBlock = (next: ChartBlock) => {
    spec.blocks = spec.blocks.map((b) => (b.id === next.id ? next : b));
  };

  // Заголовок
  const title = text.match(/[«"]([^»"]+)[»"]/)?.[1];
  if (title && /назови|заголов|переимен/.test(source)) {
    spec.title = title;
    changes.push(`заголовок → «${title}»`);
  }

  // Удаление блоков
  if (/убери|удали|без /.test(source)) {
    const before = spec.blocks.length;
    if (/kpi|кпи|показател/.test(source)) {
      spec.blocks = spec.blocks.filter((b) => b.kind !== 'kpi');
    }
    if (/таблиц/.test(source)) {
      spec.blocks = spec.blocks.filter((b) => b.kind !== 'table');
    }
    if (/структур|кольц|кругов/.test(source)) {
      spec.blocks = spec.blocks.filter(
        (b) => !(b.kind === 'chart' && b.chart === 'pie'),
      );
    }
    if (spec.blocks.length !== before) changes.push('удалены лишние блоки');
  }

  // Сброс фильтров
  if (/сбрось|все регион|без фильтр|все данные|убери фильтр/.test(source)) {
    if (spec.filters.length) changes.push('фильтры сброшены');
    spec.filters = [];
  }

  // Добавление блоков
  const addMatch = source.match(/(?:добавь|добавить|а также|плюс)\s+(.+)/);
  if (addMatch) {
    const added = text
      .slice(source.indexOf(addMatch[0]))
      .split(CLAUSE_SPLIT)
      .filter((c) => c && c.trim())
      .flatMap((clause) => blocksFromClause(clause, profile, spec));
    if (added.length) {
      spec.blocks = orderBlocks([...spec.blocks, ...added]);
      changes.push(`добавлено: ${added.map(describeBlock).join(', ')}`);
    }
  } else {
    // Смена типа графика
    const kind = detectKind(source);
    const target = targetChart();
    if (
      kind &&
      target &&
      target.chart !== kind &&
      /сделай|переделай|замени|покажи|поменяй|как /.test(source)
    ) {
      const next: ChartBlock = {
        ...target,
        chart: kind,
        x:
          kind === 'pie' && target.x.timeUnit && target.series
            ? { column: target.series }
            : target.x,
        series: kind === 'pie' ? undefined : target.series,
      };
      next.title = chartTitle(next);
      replaceBlock(next);
      changes.push(
        `«${target.title}»: ${CHART_CATALOG[
          target.chart
        ].title.toLowerCase()} → ${CHART_CATALOG[kind].title.toLowerCase()}`,
      );
    }

    // Шаг времени
    const timeUnit = /квартал|по годам|по дням|по месяц/.test(source)
      ? detectTimeUnit(source)
      : undefined;
    if (timeUnit) {
      charts()
        .filter((b) => b.x.timeUnit && b.x.timeUnit !== timeUnit)
        .forEach((b) => {
          const next = { ...b, x: { ...b.x, timeUnit } };
          next.title = chartTitle(next);
          replaceBlock(next);
          changes.push(`шаг времени → ${TIME_PHRASE[timeUnit]}`);
        });
    }

    // Накопление
    if (/накоп|стек|сложен/.test(source) && target) {
      replaceBlock({ ...target, stacked: true });
      changes.push(`«${target.title}»: серии с накоплением`);
    }
  }

  // Фильтр по упомянутым значениям
  const filters = mentionedValues(text, profile);
  if (filters.length && /только|оставь|фильтр|покажи по|для /.test(source)) {
    spec.filters = filters;
    changes.push(
      `фильтр: ${filters
        .map((f) => `${f.column} = ${f.values.join(', ')}`)
        .join('; ')}`,
    );
  }

  if (!changes.length) return null;

  const validated = validateWithFixes(spec, profile);
  spec = validated.spec;

  const steps: StepPlan[] = [
    {
      title: 'LLM: patch_report_spec',
      detail: changes.join(' · '),
      duration: 900,
    },
    {
      title: 'Проверка спецификации',
      detail: validated.issues.length
        ? validated.issues.map((issue) => issue.message).join('; ')
        : 'ok',
      duration: 400,
    },
    ...(validated.issues.length
      ? [
          {
            title: 'LLM: исправление по замечаниям проверки',
            detail: 'спецификация исправлена и проверена повторно',
            duration: 700,
          },
        ]
      : []),
    {
      title: 'Перерисовка отчёта',
      detail: 'данные пересчитаны по всем строкам',
      duration: 400,
    },
  ];

  return {
    spec,
    steps,
    reply: `Изменил: ${changes.join('; ')}.`,
  };
}

export function runFakeAgent(
  text: string,
  dataset: Dataset,
  current: ReportSpec | null,
): AgentResult | null {
  const isNew =
    !current || /заново|новый отч|с нуля|другой отч/.test(lower(text));
  if (isNew) return newReport(text, dataset);
  return modifyReport(text, dataset, current);
}
