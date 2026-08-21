import type { FeatureApiEntry, RuntimeIndex, ToolError } from '../types.js';
import { findFeature } from './shared.js';

export interface GetFeatureArgs {
  component?: string;
  feature?: string;
}

interface GetFeaturePayload {
  component: string;
  feature: string;
  legacy?: true;
  docs?: string;
  apiDocs?: string;
  api: FeatureApiEntry[];
  exampleTitles: string[];
}

export function getFeature(
  index: RuntimeIndex,
  { component, feature }: GetFeatureArgs = {},
): GetFeaturePayload | ToolError {
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
    exampleTitles: (found.stories || []).map(
      (s) => s.displayName || s.exportName,
    ),
  };
}
