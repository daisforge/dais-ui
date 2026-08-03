export function listComponents(index, { type, category, scope } = {}) {
  const items = Object.values(index.components)
    .filter((c) => !c.error)
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
