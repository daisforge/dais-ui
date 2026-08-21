import type { RuntimeIndex, ToolError, TypeRecord } from '../types.js';

export interface GetTypeArgs {
  name?: string;
}

/**
 * Разворачивает именованный тип, встреченный в тексте пропса компонента
 * (например `columnConfig: readonly ColumnConfig<Row>[]` — get_component_props
 * покажет только имя, этот тул — само определение и готовый import).
 *
 * Некоторые имена неоднозначны: TableCanvas активно переиспользует общие
 * имена типов (свой ColumnConfig, отдельный от легаси-Table.ColumnConfig) —
 * такие типы лежат в индексе под квалифицированным ключом "Папка.Имя". Если
 * запрошено голое имя и оно неоднозначно, возвращаем не первый попавшийся
 * вариант, а список кандидатов для уточнения — тихо угадать здесь хуже, чем
 * спросить: `import { ColumnConfig } from '@daisforge/ui'` без разбора может
 * оказаться совсем не тем ColumnConfig, который агент имел в виду.
 */
export function getType(
  index: RuntimeIndex,
  { name }: GetTypeArgs = {},
): TypeRecord | ToolError {
  if (!name) {
    return { error: 'Не указано имя типа.' };
  }

  const direct = index.types[name];
  if (direct) return direct;

  const lowerName = name.toLowerCase();

  const ciKeyMatch = Object.entries(index.types).find(
    ([key]) => key.toLowerCase() === lowerName,
  );
  if (ciKeyMatch) return ciKeyMatch[1];

  const candidates = Object.entries(index.types).filter(
    ([, t]) => t.name.toLowerCase() === lowerName,
  );
  if (candidates.length > 0) {
    const keys = candidates.map(([key]) => key).join(', ');
    return {
      error: `Тип "${name}" неоднозначен — в ui-kit несколько разных типов с этим именем в разных модулях. Уточните одним из ключей: ${keys}.`,
    };
  }

  return { error: `Тип "${name}" не найден в индексе.` };
}
