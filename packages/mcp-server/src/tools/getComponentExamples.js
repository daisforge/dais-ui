import { findComponent } from './shared.js';

export function getComponentExamples(index, { name, title } = {}) {
  const record = findComponent(index, name);
  if (!record) {
    return { error: `Компонент "${name}" не найден.` };
  }

  const examples = record.examples || [];
  if (!title) {
    return {
      name: record.name,
      titles: examples.map((e) => e.displayName || e.exportName),
      example: examples[0],
    };
  }

  const found = examples.find(
    (e) =>
      (e.displayName || '').toLowerCase() === title.toLowerCase() ||
      (e.exportName || '').toLowerCase() === title.toLowerCase(),
  );
  if (!found) {
    return {
      error: `Пример "${title}" не найден у "${record.name}". Доступные: ${
        examples.map((e) => e.displayName || e.exportName).join(', ') || '(нет)'
      }`,
    };
  }
  return { name: record.name, example: found };
}
