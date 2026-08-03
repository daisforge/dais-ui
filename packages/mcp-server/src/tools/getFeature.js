import { findFeature } from './shared.js';

export function getFeature(index, { component, feature } = {}) {
  const found = findFeature(index, component, feature);
  if (!found) {
    return {
      error: `Фича "${feature}" не найдена у "${component}". Используйте list_features({component}).`,
    };
  }

  return {
    component: found.component,
    feature: found.feature,
    legacy: found.legacy || undefined,
    docs: found.docs,
    apiDocs: found.apiDocs,
    api: found.api || [],
    exampleTitles: (found.stories || []).map((s) => s.displayName || s.exportName),
  };
}
