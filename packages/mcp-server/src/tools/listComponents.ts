import type { ComponentRole, RuntimeIndex } from '../types.js';
import { isOkComponent } from '../types.js';
import type { TruncatedList } from './truncate.js';
import { RESPONSE_BUDGET_CHARS, truncateList } from './truncate.js';

export interface ListComponentsArgs {
  type?: string;
  category?: string;
  scope?: string;
  /**
   * По умолчанию — только 'primary' (самостоятельные компоненты, ~177 из
   * 243): 'part' (слоты вроде DrawerDFHeader) и 'internal' (служебные
   * примитивы вроде CanvasRect) не показываются, чтобы не удваивать
   * список — части доступны через карточку родителя (relatedExports в
   * get_component) или напрямую по имени в get_component/get_component_props.
   * 'all' снимает фильтр.
   */
  role?: ComponentRole | 'all';
  /** Максимум элементов на страницу. Без него список бюджетируется автоматически (см. RESPONSE_BUDGET_CHARS). */
  limit?: number;
  /** Смещение для пагинации, работает только вместе с limit. */
  offset?: number;
}

interface ComponentSummary {
  name: string;
  type: string;
  category?: string;
  description?: string;
  legacy?: true;
  deprecated?: true;
  /** Есть form-аналог `Form${name}` (react-hook-form) — само имя выводимо, поэтому не дублируем строку. */
  hasFormVariant?: true;
  /** Только для role !== 'primary' (виден лишь при явном role: 'all'/'part'/'internal') — карточка настоящего компонента здесь: parentComponent. */
  role?: ComponentRole;
  parentComponent?: string;
}

export interface ListComponentsResult extends TruncatedList<ComponentSummary> {
  hasMore?: boolean;
}

const DESCRIPTION_CLIP_CHARS = 120;

function clipDescription(description?: string): string | undefined {
  if (!description) return undefined;
  if (description.length <= DESCRIPTION_CLIP_CHARS) return description;
  return `${description.slice(0, DESCRIPTION_CLIP_CHARS - 1)}…`;
}

export function listComponents(
  index: RuntimeIndex,
  { type, category, scope, role, limit, offset }: ListComponentsArgs = {},
): ListComponentsResult {
  const roleFilter = role ?? 'primary';
  const filtered = Object.values(index.components)
    .filter(isOkComponent)
    .filter((c) => !type || c.type === type)
    .filter((c) => !category || c.category === category)
    .filter((c) => !scope || c.scope === scope)
    .filter((c) => roleFilter === 'all' || c.role === roleFilter)
    .map(
      (c): ComponentSummary => ({
        name: c.name,
        type: c.type,
        category: c.category,
        description: clipDescription(c.description),
        // legacy и deprecated сигналят одно и то же ("не используйте это") —
        // не показываем оба сразу, deprecated значим только сам по себе.
        legacy: c.legacy || undefined,
        deprecated: !c.legacy && c.deprecated ? true : undefined,
        hasFormVariant: c.formVariant ? true : undefined,
        role: c.role !== 'primary' ? c.role : undefined,
        parentComponent: c.role !== 'primary' ? c.parentComponent : undefined,
      }),
    );

  const total = filtered.length;

  if (limit !== undefined || offset !== undefined) {
    const start = offset ?? 0;
    const end = limit !== undefined ? start + limit : filtered.length;
    const page = filtered.slice(start, end);
    const hasMore = end < total;
    return {
      items: page,
      shown: page.length,
      total,
      hasMore,
      truncationNotice: hasMore
        ? `Показано ${page.length} из ${total}. Следующая страница: offset=${end}.`
        : undefined,
    };
  }

  const result = truncateList(filtered, RESPONSE_BUDGET_CHARS);
  return { ...result, hasMore: result.shown < result.total || undefined };
}
