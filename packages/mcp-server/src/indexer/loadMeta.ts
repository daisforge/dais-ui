import fs from 'node:fs';
import path from 'node:path';

import type { MetaJson } from '../types.js';
import { REPO_ROOT } from './tsProject.js';

export const META_JSON_PATH = path.join(
  REPO_ROOT,
  '_docs/meta/components-meta.json',
);

/** Аварийный выход для осознанной сборки заведомо неполного индекса (см. assertMetaAvailable). */
const ALLOW_MISSING_ENV = 'MCP_INDEX_ALLOW_MISSING_META';

let cachedMeta: MetaJson | null | undefined;

/**
 * Единственная точка чтения курированной меты. Раньше её независимо читали
 * mergeMeta.ts и indexFeatures.ts — два кэша, два разных `if (!meta) return`,
 * и ни один из них не был виден снаружи.
 */
export function loadMetaJson(): MetaJson | null {
  if (cachedMeta !== undefined) return cachedMeta;
  cachedMeta = fs.existsSync(META_JSON_PATH)
    ? (JSON.parse(fs.readFileSync(META_JSON_PATH, 'utf8')) as MetaJson)
    : null;
  return cachedMeta;
}

/**
 * `_docs/meta/*` лежит в .gitignore (регенерируется `npm run meta`), поэтому на
 * свежем клоне и в CI файла просто нет. Без этой проверки индексер собирался
 * молча и успешно, но терял ВСЁ, что приходит только из меты: features (77
 * записей, из них 46 у одного TableCanvas), guides.installation, curated
 * описания/keywords/category/chooseWhen у ui-kit компонентов и все примеры
 * типа full-code. Ровно такой выпотрошенный индекс уехал в npm 0.1.1 —
 * потребительский агент видел `list_features` → 0 и пустой поиск по фичам.
 *
 * Поэтому отсутствие меты — ошибка сборки, а не тихая деградация. Escape hatch
 * оставлен для случаев, когда неполный индекс собирается намеренно (например,
 * A/B-стенд сравнивает поведение на заведомо старых данных).
 */
export function assertMetaAvailable(): void {
  if (loadMetaJson()) return;

  if (process.env[ALLOW_MISSING_ENV] === '1') {
    // eslint-disable-next-line no-console
    console.warn(
      `ВНИМАНИЕ: ${META_JSON_PATH} не найден, но ${ALLOW_MISSING_ENV}=1 — ` +
        'собираю ЗАВЕДОМО НЕПОЛНЫЙ индекс без features, guides и curated-меты. ' +
        'Такой индекс нельзя публиковать.',
    );
    return;
  }

  throw new Error(
    `Не найден ${META_JSON_PATH} — без него индекс соберётся без features, ` +
      'guides.installation, curated-описаний и full-code примеров.\n' +
      'Сначала выполните `npm run meta` в корне репозитория, затем повторите сборку индекса.\n' +
      `Осознанно собрать неполный индекс: ${ALLOW_MISSING_ENV}=1.`,
  );
}
