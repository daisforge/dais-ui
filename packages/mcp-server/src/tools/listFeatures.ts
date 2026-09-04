import type { RuntimeIndex, ToolError } from '../types.js';
import { listComponentFeatures } from './shared.js';

export interface ListFeaturesArgs {
  component?: string;
}

interface FeatureSummary {
  feature: string;
  summary: string;
  legacy?: true;
}

interface ListFeaturesPayload {
  component: string;
  count: number;
  features: FeatureSummary[];
}

export function listFeatures(
  index: RuntimeIndex,
  { component }: ListFeaturesArgs = {},
): ListFeaturesPayload | ToolError {
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
