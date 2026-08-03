import type { ExampleRecord, RuntimeIndex, ToolError } from '../types.js';
import { isOkComponent } from '../types.js';
import { findComponent } from './shared.js';

export interface GetComponentExamplesArgs {
  name?: string;
  title?: string;
}

interface ExamplesListPayload {
  name: string;
  titles: string[];
  example: ExampleRecord | undefined;
}

interface SingleExamplePayload {
  name: string;
  example: ExampleRecord;
}

export function getComponentExamples(
  index: RuntimeIndex,
  { name, title }: GetComponentExamplesArgs = {},
): ExamplesListPayload | SingleExamplePayload | ToolError {
  const record = findComponent(index, name);
  if (!record) {
    return { error: `Компонент "${name}" не найден.` };
  }
  if (!isOkComponent(record)) {
    return { error: record.error };
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
