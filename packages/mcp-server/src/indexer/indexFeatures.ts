import type { FeatureRecord, WorkingComponentRecord } from '../types.js';
import { loadMetaJson } from './loadMeta.js';

/** Первая содержательная строка — пропускаем markdown-заголовки ("# Editing"), это не summary. */
function firstMeaningfulLine(text: string | undefined): string {
  const line = (text || '')
    .split('\n')
    .map((l) => l.trim())
    .find((l) => l.length > 0 && !/^#+\s/.test(l));
  return (line || '').replace(/^[-*]\s*/, '');
}

/**
 * Фичи — первоклассные сущности, не вложенный подобъект компонента. Замеры на
 * TableCanvas/Table показали: 46/31 фичей составляют 95-98% payload'а этих
 * двух компонентов, а имена фичей не угадываются (massPanelAction,
 * controlBlockApe, CanvasElements/CanvasText) — поэтому разворачиваем их в
 * отдельный плоский список, доступный поиску наравне с компонентами.
 *
 * `features` в components-meta.json уже плоский dict (даже вложенные с виду
 * ключи вроде "CanvasElements/CanvasText" — на деле обычная строка с "/"),
 * рекурсия не нужна.
 */
export function buildFeatureIndex(
  records: WorkingComponentRecord[],
): FeatureRecord[] {
  const meta = loadMetaJson();
  if (!meta) return [];

  const legacyByName = new Map(records.map((r) => [r.name, Boolean(r.legacy)]));

  return Object.entries(meta.components).flatMap(
    ([componentName, componentMeta]): FeatureRecord[] => {
      const { features } = componentMeta;
      if (!features) return [];

      const legacy = legacyByName.get(componentName) ?? false;

      return Object.entries(features).map(
        ([featureName, featureMeta]): FeatureRecord => ({
          component: componentName,
          feature: featureName,
          legacy,
          summary:
            firstMeaningfulLine(featureMeta.docs) ||
            firstMeaningfulLine(featureMeta.apiDocs),
          docs: featureMeta.docs,
          apiDocs: featureMeta.apiDocs,
          api: featureMeta.api || [],
          stories: featureMeta.stories || [],
        }),
      );
    },
  );
}
