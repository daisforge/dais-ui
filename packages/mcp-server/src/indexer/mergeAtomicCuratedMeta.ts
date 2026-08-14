import fs from 'node:fs';
import path from 'node:path';

import type { AtomicCuratedMeta, WorkingComponentRecord } from '../types.js';
import { REPO_ROOT } from './tsProject.js';

const ATOMIC_CURATED_META_PATH = path.join(
  REPO_ROOT,
  'packages/mcp-server/vendor/atomic-curated-meta.json',
);

let cachedMeta: AtomicCuratedMeta | null | undefined;

function loadAtomicCuratedMeta(): AtomicCuratedMeta | null {
  if (cachedMeta !== undefined) return cachedMeta;
  cachedMeta = fs.existsSync(ATOMIC_CURATED_META_PATH)
    ? (JSON.parse(
        fs.readFileSync(ATOMIC_CURATED_META_PATH, 'utf8'),
      ) as AtomicCuratedMeta)
    : null;
  return cachedMeta;
}

/**
 * Курированные description/category/keywords для компонентов, у которых нет
 * собственного кода в ui-kit — чистых реэкспортов атомов @salutejs/sdds-finai
 * (`export { Accordion } from '@salutejs/sdds-finai'`, без единой строчки
 * своей логики). Для них mergeMeta.ts (_docs/meta/components-meta.json)
 * бесполезен: там курируются компоненты с собственной реализацией и
 * Storybook-документацией, а у чистых реэкспортов нет ни того, ни другого —
 * единственный источник контента при курировании этого файла вручную —
 * вендоренный снэпшот атомарки (vendor/atomic-mcp-data/**\/*.json, поле
 * summary) и inheritedProps. См. TASKS.md T2.
 *
 * Отдельный файл и отдельный модуль от mergeMeta — это две независимые по
 * происхождению записи (курируем "свой" код и "чужой" атом по-разному),
 * curated wins over heuristic/JSDoc в обоих случаях одинаково.
 */
export function mergeAtomicCuratedMeta(
  record: WorkingComponentRecord,
): WorkingComponentRecord {
  const meta = loadAtomicCuratedMeta();
  const entry = meta?.components?.[record.name];
  if (!entry) return record;

  return {
    ...record,
    ...(entry.category ? { category: entry.category } : {}),
    ...(entry.description ? { description: entry.description } : {}),
    ...(entry.keywords?.length ? { keywords: entry.keywords } : {}),
    ...(entry.supersededBy ? { supersededBy: entry.supersededBy } : {}),
    ...(entry.chooseWhen ? { chooseWhen: entry.chooseWhen } : {}),
    ...(entry.gotchas?.length ? { gotchas: entry.gotchas } : {}),
    hasCuratedMeta: true as const,
  };
}
