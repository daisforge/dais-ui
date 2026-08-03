export function listCategories(index) {
  const byCategory = new Map();

  Object.values(index.components)
    .filter((c) => !c.error)
    .forEach((c) => {
      const key = c.category || '(без категории)';
      const entry = byCategory.get(key) || { category: key, count: 0, types: {} };
      entry.count += 1;
      entry.types[c.type] = (entry.types[c.type] || 0) + 1;
      byCategory.set(key, entry);
    });

  return { categories: Array.from(byCategory.values()) };
}
