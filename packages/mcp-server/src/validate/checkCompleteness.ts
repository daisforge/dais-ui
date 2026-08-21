import type { ComponentIndex } from '../types.js';
import { isOkComponent } from '../types.js';

/**
 * Нижние границы наполненности индекса. Каждая покрывает источник данных,
 * который уже терялся молча: features/guides/curated/full-code пропадают
 * вместе с _docs/meta/components-meta.json, compound-части — при поломке
 * детекта в parseComponent, types — при поломке сбора типов.
 *
 * Пороги намеренно с большим запасом вниз от фактических значений: их задача —
 * поймать обвал источника (стало 0 или почти 0), а не колебания каталога от
 * релиза к релизу. Обновлять их вверх нужно только вместе с реальным ростом.
 */
export const COMPLETENESS_THRESHOLDS = {
  components: 180,
  features: 50,
  curatedDocsComponents: 25,
  fullCodeExamples: 30,
  types: 35,
  compoundComponents: 10,
} as const;

export interface CompletenessReport {
  stats: Record<
    keyof typeof COMPLETENESS_THRESHOLDS | 'installationGuide',
    number
  >;
  failures: string[];
}

/**
 * Проверяет собранный индекс на обвал любого из источников данных. Вызывается
 * дважды и намеренно: в buildIndex (не дать выпотрошенному индексу записаться
 * и уехать в npm) и в mcp:validate-index (поймать уже опубликованный такой
 * индекс, каким бы образом он ни собрался).
 */
export function checkIndexCompleteness(
  index: ComponentIndex,
): CompletenessReport {
  const records = Object.values(index.components);
  const okRecords = records.filter(isOkComponent);

  const stats = {
    components: okRecords.length,
    features: index.features.length,
    // Именно `docs`, а не `hasCuratedMeta`: второй флаг ставит и вендоренная
    // atomic-мета (она закоммичена и не теряется), поэтому он равен общему
    // числу компонентов всегда и обвал _docs/meta не поймает. `docs`
    // приходит только из курированной меты ui-kit.
    curatedDocsComponents: okRecords.filter((r) => r.docs).length,
    fullCodeExamples: okRecords.reduce(
      (acc, r) =>
        acc + (r.examples || []).filter((e) => e.type === 'full-code').length,
      0,
    ),
    types: Object.keys(index.types).length,
    compoundComponents: okRecords.filter((r) => (r.compoundParts || []).length)
      .length,
    installationGuide: index.guides?.installation ? 1 : 0,
  };

  const failures: string[] = Object.entries(COMPLETENESS_THRESHOLDS)
    .filter(
      ([key, min]) => stats[key as keyof typeof COMPLETENESS_THRESHOLDS] < min,
    )
    .map(
      ([key, min]) =>
        `${key}: ${
          stats[key as keyof typeof COMPLETENESS_THRESHOLDS]
        } — ожидалось не меньше ${min}`,
    );

  if (!stats.installationGuide) {
    failures.push('guides.installation отсутствует');
  }

  return { stats, failures };
}

/** Единый формат вывода для buildIndex и validateIndex — отчёт читают в обоих местах. */
export function formatCompletenessReport(report: CompletenessReport): string {
  const line = Object.entries(report.stats)
    .map(([key, value]) => `${key}: ${value}`)
    .join('  |  ');

  if (report.failures.length === 0) {
    return `Наполненность индекса — ОК (${line})`;
  }

  return [
    `Наполненность индекса — ПРОВАЛ (${line})`,
    ...report.failures.map((f) => `  ✗ ${f}`),
    'Скорее всего не сгенерирована курированная мета: выполните `npm run meta` и пересоберите индекс.',
  ].join('\n');
}
