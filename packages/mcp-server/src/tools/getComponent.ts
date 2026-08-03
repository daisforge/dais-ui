import type { RuntimeIndex, ToolError } from '../types.js';
import { isOkComponent } from '../types.js';
import {
  findComponent,
  listComponentFeatures,
  summarizeProp,
} from './shared.js';

export interface GetComponentArgs {
  name?: string;
}

interface GetComponentPayload {
  name: string;
  type: string;
  category?: string;
  description?: string;
  hint?: string;
  importStatement: string;
  deprecated?: true;
  deprecationReason?: string;
  legacy?: true;
  scope?: string;
  formVariant?: string;
  wrappedBy?: string;
  atomicBase?: string;
  atomicDataMissing?: true;
  ownProps: string[];
  inheritedPropsCount: number;
  compoundParts: string[];
  exampleTitles: string[];
  features: { feature: string; legacy?: true }[];
  dataVersionNotice?: string;
  nextSteps: string;
}

/**
 * Компактная карточка компонента — без полных доков и без тел примеров.
 * Замеры на существующем meta.json показали: полная запись TableCanvas
 * весит 682k символов, что целиком исчерпало бы контекст агента одним
 * вызовом. Здесь — только то, что нужно решить "это ли компонент" и куда
 * идти дальше за деталями.
 */
export function getComponent(
  index: RuntimeIndex,
  { name }: GetComponentArgs = {},
): GetComponentPayload | ToolError {
  const record = findComponent(index, name);
  if (!record) {
    return {
      error: `Компонент "${name}" не найден. Используйте search_components или list_components.`,
    };
  }
  if (!isOkComponent(record)) {
    return { error: record.error };
  }

  const features = listComponentFeatures(index, record.name);
  const exampleTitles = (record.examples || []).map(
    (e) => e.displayName || e.exportName,
  );

  return {
    name: record.name,
    type: record.type,
    category: record.category,
    description: record.description || undefined,
    hint: record.hint || undefined,
    importStatement: record.importStatement,
    deprecated: record.deprecated || undefined,
    deprecationReason: record.deprecationReason,
    legacy: record.legacy || undefined,
    scope: record.scope,
    formVariant: record.formVariant,
    wrappedBy: record.wrappedBy,
    atomicBase: record.atomicBase,
    atomicDataMissing: record.atomicDataMissing || undefined,
    ownProps: (record.props || []).map(summarizeProp),
    inheritedPropsCount: (record.inheritedProps || []).length,
    compoundParts: (record.compoundParts || []).map((p) => p.name),
    exampleTitles,
    features: features.map((f) => ({
      feature: f.feature,
      legacy: f.legacy || undefined,
    })),
    dataVersionNotice: index.dataVersionNotice,
    nextSteps: `get_component_props({name}) — полные пропсы; get_component_examples({name}) — примеры кода${
      features.length ? '; list_features({component}) — фичи компонента' : ''
    }`,
  };
}
