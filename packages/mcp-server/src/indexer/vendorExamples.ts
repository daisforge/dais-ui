import type { ExampleRecord } from '../types.js';

/**
 * Третий источник examples[] (TASKS.md T3) — curated-примеры, которые
 * приносит сам вендоренный снэпшот атомарной команды
 * (`vendor/atomic-mcp-data/**\/<atomicBase>.json`, поле `examples[]`:
 * `{title, snippet}`, см. mergeAtomicData.ts). Для 71 из 77 вендоренных
 * атомов это готовый рабочий JSX-код — заметно доступнее, чем результат
 * `collectUsageExamples.ts` для компонентов, которых в этом чекауте монорепо
 * никто не использует напрямую (`Attach`, `Card`, `Row`, типографика и т.п.).
 */

const MAX_VENDOR_EXAMPLES = 2;
/** Вендорные снэпшоты — цельные демо-приложения ("import ... export function App() {...}"), длиннее usage-сниппетов, но всё равно не безлимитные. */
const MAX_VENDOR_CODE_CHARS = 900;

/**
 * Снэпшот импортирует атом из его настоящего пакета (`@salutejs/sdds-finai`,
 * реже `.../beta`), а не из `@daisforge/ui` — агенту нужен рабочий импорт под
 * реально резолвящийся из этой библиотеки путь, иначе пример выглядит
 * рабочим, а скопированный код не соберётся.
 */
function rewriteImportSpecifier(snippet: string, importPath: string): string {
  return snippet.replace(
    /from\s+'@salutejs\/sdds-finai(?:\/beta)?'/g,
    `from '${importPath}'`,
  );
}

function clip(raw: string): string {
  const trimmed = raw.trim();
  return trimmed.length > MAX_VENDOR_CODE_CHARS
    ? `${trimmed.slice(0, MAX_VENDOR_CODE_CHARS)}\n// … (обрезано)`
    : trimmed;
}

/**
 * До MAX_VENDOR_EXAMPLES снэпшотов, разных по названию (снэпшот часто несёт
 * почти дублирующие друг друга варианты — "Пример 1", "Пример 2" с
 * незначительными различиями) и по возможности компактных: длинные "простыни"
 * из десятка склеенных вариаций одного пропса (типичный кейс для Accordion —
 * демонстрация всех size сразу) после обрезки менее читаемы, чем короткий
 * сфокусированный пример.
 */
function pickBest(
  entries: { title?: string; snippet: string }[],
): { title?: string; snippet: string }[] {
  const seenTitles = new Set<string>();
  const deduped = entries.filter((e) => {
    const key = e.title || e.snippet.slice(0, 40);
    if (seenTitles.has(key)) return false;
    seenTitles.add(key);
    return true;
  });
  return [...deduped]
    .sort((a, b) => a.snippet.length - b.snippet.length)
    .slice(0, MAX_VENDOR_EXAMPLES);
}

export function finalizeVendorExamples(
  snippets: { title?: string; snippet: string }[] | undefined,
  importPath: string,
): ExampleRecord[] {
  if (!snippets?.length) return [];

  const best = pickBest(snippets);
  return best.map(
    (s, i): ExampleRecord => ({
      exportName: best.length > 1 ? `Vendor${i + 1}` : 'Vendor',
      displayName: s.title || 'Пример из документации @salutejs/sdds-finai',
      type: 'vendor',
      code: clip(rewriteImportSpecifier(s.snippet, importPath)),
    }),
  );
}
