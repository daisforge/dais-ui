/**
 * Спецификация отчёта — единственное, что генерирует LLM.
 *
 * Модель не пишет HTML и не считает цифры: она выбирает блоки, колонки
 * и агрегации. Спецификация проверяется (в продукте — Zod-схемой
 * из пакета Charts UI), затем runtime строит отчёт по полным данным.
 */
import type { DatasetProfile } from './dataset';

export type Aggregation = 'sum' | 'avg' | 'count' | 'min' | 'max';
export type TimeUnit = 'day' | 'month' | 'quarter' | 'year';
export type ChartKind = 'bar' | 'line' | 'area' | 'pie';

export type Measure = { column: string; agg: Aggregation };
export type Dimension = { column: string; timeUnit?: TimeUnit };

export type ChartBlock = {
  kind: 'chart';
  id: string;
  title: string;
  chart: ChartKind;
  x: Dimension;
  /** Несколько мер — серии по мерам (план/факт), одна мера + series — серии по категории */
  measures: Measure[];
  series?: string;
  stacked?: boolean;
  /** Сколько категорий показать, остальные сворачиваются в «Другие» */
  limit?: number;
};

export type KpiBlock = {
  kind: 'kpi';
  id: string;
  items: { label: string; measure: Measure }[];
};

export type TableBlock = {
  kind: 'table';
  id: string;
  title: string;
  groupBy: Dimension;
  measures: Measure[];
};

export type ReportBlock = ChartBlock | KpiBlock | TableBlock;

export type ReportFilter = { column: string; values: string[] };

export type ReportSpec = {
  version: 1;
  title: string;
  dataset: string;
  filters: ReportFilter[];
  blocks: ReportBlock[];
};

export type SpecIssue = {
  blockId?: string;
  message: string;
  /** Автоисправление, которое «агент» применяет на втором круге */
  fix?: (spec: ReportSpec) => ReportSpec;
};

export const CHART_CATALOG: Record<
  ChartKind,
  { title: string; fits: string; maxSeries: number; maxCategories: number }
> = {
  bar: {
    title: 'Столбчатая',
    fits: 'сравнение категорий, план/факт',
    maxSeries: 8,
    maxCategories: 24,
  },
  line: {
    title: 'Линейная',
    fits: 'динамика во времени',
    maxSeries: 8,
    maxCategories: 366,
  },
  area: {
    title: 'С областями',
    fits: 'динамика объёма во времени',
    maxSeries: 4,
    maxCategories: 366,
  },
  pie: {
    title: 'Кольцевая',
    fits: 'структура целого, до 6 долей',
    maxSeries: 1,
    maxCategories: 6,
  },
};

const updateBlock = (
  spec: ReportSpec,
  id: string,
  patch: (block: ChartBlock) => ChartBlock,
): ReportSpec => ({
  ...spec,
  blocks: spec.blocks.map((block) =>
    block.id === id && block.kind === 'chart' ? patch(block) : block,
  ),
});

/**
 * Проверка спецификации по профилю данных. Ошибки с fix «агент»
 * исправляет сам — так в демо видно, как работает цикл самоисправления.
 */
export function validateSpec(
  spec: ReportSpec,
  profile: DatasetProfile,
): SpecIssue[] {
  const issues: SpecIssue[] = [];
  const column = (name: string) =>
    profile.columns.find((item) => item.name === name);

  const checkMeasure = (measure: Measure, blockId: string) => {
    const target = column(measure.column);
    if (!target) {
      issues.push({ blockId, message: `нет колонки «${measure.column}»` });
    } else if (target.type !== 'number' && measure.agg !== 'count') {
      issues.push({
        blockId,
        message: `«${measure.column}» не число, агрегация ${measure.agg} невозможна`,
      });
    }
  };

  spec.filters.forEach((filter) => {
    if (!column(filter.column)) {
      issues.push({
        message: `фильтр по несуществующей колонке «${filter.column}»`,
      });
    }
  });

  spec.blocks.forEach((block) => {
    if (block.kind === 'kpi') {
      block.items.forEach((item) => checkMeasure(item.measure, block.id));
      return;
    }
    if (
      !column(block.kind === 'chart' ? block.x.column : block.groupBy.column)
    ) {
      issues.push({ blockId: block.id, message: 'нет колонки измерения' });
    }
    block.measures.forEach((measure) => checkMeasure(measure, block.id));

    if (block.kind !== 'chart') return;
    const rules = CHART_CATALOG[block.chart];
    const xColumn = column(block.x.column);
    const seriesColumn = block.series ? column(block.series) : undefined;

    if (block.chart === 'pie' && (block.series || block.measures.length > 1)) {
      issues.push({
        blockId: block.id,
        message: 'кольцевая диаграмма показывает одну меру без серий',
        fix: (s) =>
          updateBlock(s, block.id, (b) => ({
            ...b,
            series: undefined,
            measures: b.measures.slice(0, 1),
          })),
      });
    }
    const categories =
      xColumn?.type === 'category' ? xColumn.distinct : undefined;
    if (categories && categories > rules.maxCategories && !block.limit) {
      issues.push({
        blockId: block.id,
        message: `${categories} категорий для типа «${
          rules.title
        }» много, оставляю топ-${rules.maxCategories - 1} и «Другие»`,
        fix: (s) =>
          updateBlock(s, block.id, (b) => ({
            ...b,
            limit: rules.maxCategories - 1,
          })),
      });
    }
    if (
      block.chart !== 'pie' &&
      seriesColumn &&
      seriesColumn.distinct > rules.maxSeries
    ) {
      issues.push({
        blockId: block.id,
        message: `${seriesColumn.distinct} серий — больше ${rules.maxSeries} цветов не различить`,
        fix: (s) =>
          updateBlock(s, block.id, (b) => ({ ...b, series: undefined })),
      });
    }
  });

  return issues;
}
