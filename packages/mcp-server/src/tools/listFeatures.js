import { listComponentFeatures } from './shared.js';

export function listFeatures(index, { component } = {}) {
  if (!component) {
    return { error: 'Параметр component обязателен.' };
  }
  const features = listComponentFeatures(index, component);
  return {
    component,
    count: features.length,
    features: features.map((f) => ({
      feature: f.feature,
      summary: f.summary,
      legacy: f.legacy || undefined,
    })),
  };
}
