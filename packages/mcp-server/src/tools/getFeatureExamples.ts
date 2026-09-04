import type { ExampleRecord, RuntimeIndex, ToolError } from '../types.js';
import { findFeature } from './shared.js';

export interface GetFeatureExamplesArgs {
  component?: string;
  feature?: string;
  title?: string;
}

interface FeatureExamplesListPayload {
  component: string;
  feature: string;
  titles: string[];
  example: ExampleRecord | undefined;
}

interface FeatureExamplePayload {
  component: string;
  feature: string;
  example: ExampleRecord;
}

export function getFeatureExamples(
  index: RuntimeIndex,
  { component, feature, title }: GetFeatureExamplesArgs = {},
): FeatureExamplesListPayload | FeatureExamplePayload | ToolError {
  const found = findFeature(index, component, feature);
  if (!found) {
    return {
      error: `Фича "${feature}" не найдена у "${component}". Используйте list_features({component}).`,
    };
  }

  const stories = found.stories || [];
  if (!title) {
    return {
      component: found.component,
      feature: found.feature,
      titles: stories.map((s) => s.displayName || s.exportName),
      example: stories[0],
    };
  }

  const story = stories.find(
    (s) =>
      (s.displayName || '').toLowerCase() === title.toLowerCase() ||
      (s.exportName || '').toLowerCase() === title.toLowerCase(),
  );
  if (!story) {
    return {
      error: `Пример "${title}" не найден у "${component}/${feature}". Доступные: ${
        stories.map((s) => s.displayName || s.exportName).join(', ') || '(нет)'
      }`,
    };
  }
  return { component: found.component, feature: found.feature, example: story };
}
