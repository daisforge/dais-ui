import type { RuntimeIndex } from '../types.js';
import { isOkComponent } from '../types.js';

interface CategoryEntry {
  category: string;
  count: number;
  types: Record<string, number>;
}

export function listCategories(index: RuntimeIndex): {
  categories: CategoryEntry[];
} {
  const byCategory = new Map<string, CategoryEntry>();

  Object.values(index.components)
    .filter(isOkComponent)
    .forEach((c) => {
      const key = c.category || '(без категории)';
      const entry = byCategory.get(key) || {
        category: key,
        count: 0,
        types: {},
      };
      entry.count += 1;
      entry.types[c.type] = (entry.types[c.type] || 0) + 1;
      byCategory.set(key, entry);
    });

  return { categories: Array.from(byCategory.values()) };
}
