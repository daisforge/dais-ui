import fs from 'node:fs';
import path from 'node:path';

import type {
  ComponentMeta,
  InstallationGuide,
  MetaJson,
  WorkingComponentRecord,
} from '../types.js';
import { REPO_ROOT } from './tsProject.js';

const META_JSON_PATH = path.join(REPO_ROOT, '_docs/meta/components-meta.json');
const INSTALLATION_PAGE_TITLE = 'Установка и использование';

let cachedMeta: MetaJson | null | undefined;

function loadMetaJson(): MetaJson | null {
  if (cachedMeta !== undefined) return cachedMeta;
  cachedMeta = fs.existsSync(META_JSON_PATH)
    ? (JSON.parse(fs.readFileSync(META_JSON_PATH, 'utf8')) as MetaJson)
    : null;
  return cachedMeta;
}

/** Убирает крупные <style>...</style>-блоки из сырого MDX — чистый шум для агента. */
function stripStyleBlocks(text: string | undefined): string | undefined {
  return text ? text.replace(/<style>[\s\S]*?<\/style>/g, '').trim() : text;
}

/**
 * `legacy` (поддерживается, но не рекомендуется для нового кода) — ОТДЕЛЬНЫЙ
 * флаг от `deprecated` (реально устаревший API из @deprecated JSDoc).
 * Детектится по curated-тексту: сейчас в библиотеке только один такой случай
 * (Table — "устаревшая, но поддерживается"), но это принципиальная проверка
 * по смыслу текста, а не хардкод конкретного имени компонента.
 */
function detectLegacy(componentMeta: ComponentMeta): boolean {
  const text = `${componentMeta.description || ''} ${componentMeta.hint || ''}`;
  return /устаревш/i.test(text);
}

/**
 * Курированные поля из _docs/meta/components-meta.json (hint, disambiguation,
 * готовые докстроки/примеры) — там, где компонент присутствует, они
 * перекрывают эвристику индексера, а не наоборот (curated wins over heuristic).
 * Мета покрывает только 36 из 265+ найденных компонентов — для остальных
 * просто ничего не меняется.
 */
export function mergeMeta(
  record: WorkingComponentRecord,
): WorkingComponentRecord {
  const meta = loadMetaJson();
  const componentMeta = meta?.components?.[record.name];
  if (!componentMeta) return record;

  return {
    ...record,
    ...(componentMeta.category ? { category: componentMeta.category } : {}),
    ...(componentMeta.type ? { type: componentMeta.type } : {}),
    ...(componentMeta.role ? { role: componentMeta.role } : {}),
    ...(componentMeta.description
      ? { description: componentMeta.description }
      : {}),
    ...(componentMeta.hint ? { hint: componentMeta.hint } : {}),
    ...(componentMeta.keywords?.length
      ? { keywords: componentMeta.keywords }
      : {}),
    ...(componentMeta.scope ? { scope: componentMeta.scope } : {}),
    ...(componentMeta.docs ? { docs: componentMeta.docs } : {}),
    ...(componentMeta.apiDocs ? { apiDocs: componentMeta.apiDocs } : {}),
    ...(componentMeta.stories?.length
      ? { curatedStories: componentMeta.stories }
      : {}),
    ...(detectLegacy(componentMeta) ? { legacy: true as const } : {}),
    hasCuratedMeta: true as const,
  };
}

/** Гайд по установке (`guides.installation`) — то же поле, что уже генерирует meta-info, без нового парсинга. */
export function getInstallationGuide(): InstallationGuide | undefined {
  const meta = loadMetaJson();
  const page = meta?.pages?.[INSTALLATION_PAGE_TITLE];
  if (!page) return undefined;

  return {
    title: page.title,
    description: page.description,
    docs: stripStyleBlocks(page.docs),
  };
}
