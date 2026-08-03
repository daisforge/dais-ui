import type { RuntimeIndex } from '../types.js';
import { isOkComponent } from '../types.js';

export interface ListComponentsArgs {
  type?: string;
  category?: string;
  scope?: string;
}

interface ComponentSummary {
  name: string;
  type: string;
  category?: string;
  description?: string;
  legacy?: true;
  deprecated?: true;
  formVariant?: string;
}

export function listComponents(
  index: RuntimeIndex,
  { type, category, scope }: ListComponentsArgs = {},
): { count: number; components: ComponentSummary[] } {
  const items = Object.values(index.components)
    .filter(isOkComponent)
    .filter((c) => !type || c.type === type)
    .filter((c) => !category || c.category === category)
    .filter((c) => !scope || c.scope === scope)
    .map((c) => ({
      name: c.name,
      type: c.type,
      category: c.category,
      description: c.description || undefined,
      legacy: c.legacy || undefined,
      deprecated: c.deprecated || undefined,
      formVariant: c.formVariant || undefined,
    }));

  return { count: items.length, components: items };
}
