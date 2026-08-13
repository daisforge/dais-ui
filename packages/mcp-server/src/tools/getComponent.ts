import type { PropRecord, RuntimeIndex, ToolError } from '../types.js';
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
  keywords?: string[];
  importStatement: string;
  deprecated?: true;
  deprecationReason?: string;
  legacy?: true;
  scope?: string;
  formVariant?: string;
  wrappedBy?: string;
  /** Только когда не 'primary' — самостоятельные компоненты (большинство карточек) этот флаг не несут. */
  role?: 'part' | 'internal';
  /** У role: 'part'/'internal' — где реально смотреть компонент целиком. */
  parentComponent?: string;
  /** У owner-компонента папки — part/internal-экспорты той же папки, иначе недостижимы после фильтрации list_components по умолчанию. */
  relatedExports?: string[];
  /**
   * Эта запись — одновременно top-level компонент и compound-часть другого
   * (см. TASKS.md T12) — вместо повторной выдачи пропсов здесь ссылка на
   * канонический запрос; сами пропсы (own/ownPropsCount/inheritedPropsCount)
   * в карточке такой записи не дублируются.
   */
  compoundPartOf?: { component: string; part: string };
  atomicBase?: string;
  atomicDataMissing?: true;
  ownProps?: string[];
  /** Всего своих пропсов у компонента — может быть больше, чем элементов в ownProps (см. selectOwnProps). */
  ownPropsCount?: number;
  inheritedPropsCount?: number;
  compoundParts: string[];
  /** Синтетическая заглушка из обязательных пропсов — есть всегда, в отличие от exampleTitles (см. TASKS.md T3). */
  minimalUsage: string;
  /** Настоящие примеры (full-code/usage/args-only) — [] честно значит "нет", не тратьте вызов get_component_examples. */
  exampleTitles: string[];
  features: { feature: string; legacy?: true }[];
  dataVersionNotice?: string;
  nextSteps: string;
}

/**
 * Сколько необязательных пропсов с описанием показывать в компактной
 * карточке сверх обязательных. У широких API (TableGlideInstance — 153
 * своих пропса) весь список отдавать здесь бессмысленно — карточка
 * задумана как дешёвый шаг выбора компонента, а не замена
 * get_component_props.
 */
const MAX_OPTIONAL_OWN_PROPS_SHOWN = 10;

/**
 * required-пропсы — всегда (без них компонент не собрать), плюс до
 * MAX_OPTIONAL_OWN_PROPS_SHOWN "значимых" необязательных: с описанием и не
 * deprecated (без описания в компактной карточке от пропса пользы ноль, а
 * deprecated не должны конкурировать за место с живыми пропсами).
 */
function selectOwnProps(props: PropRecord[]): PropRecord[] {
  const required = props.filter((p) => p.required);
  const significantOptional = props.filter(
    (p) => !p.required && p.description && !p.deprecated,
  );
  return [
    ...required,
    ...significantOptional.slice(0, MAX_OPTIONAL_OWN_PROPS_SHOWN),
  ];
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

  const allOwnProps = record.props || [];
  const shownOwnProps = selectOwnProps(allOwnProps);
  const hiddenOwnPropsCount = allOwnProps.length - shownOwnProps.length;
  const { compoundPartOf } = record;

  // Настоящих примеров нет (exampleTitles: []) — незачем звать инструмент,
  // который вернёт то же самое, что уже есть в minimalUsage этой карточки.
  const examplesHint = exampleTitles.length
    ? '; get_component_examples({name}) — примеры кода'
    : '';

  const nextSteps = compoundPartOf
    ? `Это одновременно compound-часть "${compoundPartOf.part}" у "${
        compoundPartOf.component
      }" — за пропсами идите туда: get_component_props({name: ${JSON.stringify(
        compoundPartOf.component,
      )}, part: ${JSON.stringify(compoundPartOf.part)}})${examplesHint}${
        features.length ? '; list_features({component}) — фичи компонента' : ''
      }`
    : `get_component_props({name}) — полные пропсы${
        hiddenOwnPropsCount > 0
          ? ` (в карточке показано ${shownOwnProps.length} из ${allOwnProps.length})`
          : ''
      }${examplesHint}${
        features.length ? '; list_features({component}) — фичи компонента' : ''
      }`;

  return {
    name: record.name,
    type: record.type,
    category: record.category,
    description: record.description || undefined,
    hint: record.hint || undefined,
    keywords: record.keywords,
    importStatement: record.importStatement,
    deprecated: record.deprecated || undefined,
    deprecationReason: record.deprecationReason,
    legacy: record.legacy || undefined,
    scope: record.scope,
    formVariant: record.formVariant,
    wrappedBy: record.wrappedBy,
    role: record.role !== 'primary' ? record.role : undefined,
    parentComponent: record.parentComponent,
    relatedExports: record.relatedExports,
    compoundPartOf,
    atomicBase: record.atomicBase,
    atomicDataMissing: record.atomicDataMissing || undefined,
    ...(compoundPartOf
      ? {}
      : {
          ownProps: shownOwnProps.map(summarizeProp),
          ownPropsCount: allOwnProps.length,
          inheritedPropsCount: (record.inheritedProps || []).length,
        }),
    compoundParts: (record.compoundParts || []).map((p) => p.name),
    minimalUsage: record.minimalUsage,
    exampleTitles,
    features: features.map((f) => ({
      feature: f.feature,
      legacy: f.legacy || undefined,
    })),
    dataVersionNotice: index.dataVersionNotice,
    nextSteps,
  };
}
