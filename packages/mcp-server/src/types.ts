/* ─────────────── Пропсы ─────────────── */

/** Собственный пропс компонента, извлечённый parseComponent через ts-morph. */
export interface PropRecord {
  name: string;
  type: string;
  required: boolean;
  description: string;
  /** Ставится только когда true — в JSON поле просто отсутствует. */
  deprecated?: true;
  /**
   * Значение по умолчанию — если проставлено. Два источника (см. TASKS.md
   * T6, extractPropsFromType/collectDestructuringDefaults в parseComponent.ts):
   * деструктуризация параметра render-функции (`{ size = 'm' }`, приоритетный
   * источник — реальный рантайм-дефолт) и тег `@default` в JSDoc пропса
   * (фолбэк, если деструктуризации нет). Пустая строка не сохраняется —
   * поле либо отсутствует, либо несёт содержательное значение.
   */
  default?: string;
}

/**
 * Пропс из вендоренного снэпшота @salutejs/sdds-finai (vendor/atomic-mcp-data).
 * `description`/`default` опциональны: в снэпшоте они систематически приходят
 * пустой строкой (вендор не несёт ни описаний, ни дефолтов — см. mergeAtomicData
 * и ARCHITECTURE.md §1.6), и mergeAtomicData такие поля не сохраняет вовсе —
 * пустая строка в ответе тула читалась бы агентом как содержательное значение.
 */
export interface AtomicPropRecord {
  name: string;
  type: string;
  required: boolean;
  description?: string;
  default?: string;
}

/** AtomicPropRecord после mergeAtomicData — с пометкой источника. */
export interface InheritedPropRecord extends AtomicPropRecord {
  inheritedFrom: string;
  inheritedPackage: string;
}

/* ─────────────── Compound-части ─────────────── */

export interface CompoundPart {
  name: string;
  typeName?: string;
  rawType?: string;
  isGeneric?: true;
  props: PropRecord[];
}

/* ─────────────── Примеры ─────────────── */

/**
 * 'args-only'/'full-code' приходят из generators/meta-info (curated Storybook
 * стори), 'usage' — из collectUsageExamples (реальное JSX-вхождение,
 * найденное грепом по монорепо, см. TASKS.md T3), 'vendor' — из
 * vendor/atomic-mcp-data (curated-примеры атомарной команды `@salutejs/sdds-finai`,
 * см. mergeAtomicData.ts/vendorExamples.ts). Плейсхолдерный синтетический
 * пример (было 'synthesized') больше не попадает в examples[] вовсе — он
 * вынесен в отдельное поле `minimalUsage` ComponentRecord, чтобы
 * `exampleTitles: []` честно означало «настоящих примеров нет».
 */
export type ExampleKind = 'args-only' | 'full-code' | 'usage' | 'vendor';

export interface ExampleRecord {
  exportName: string;
  displayName?: string;
  type: ExampleKind;
  code: string;
  /** Только у type: 'usage' — путь (относительно корня монорепо) к файлу, где найдено вхождение. */
  sourceFile?: string;
}

/* ─────────────── Фичи ─────────────── */

export interface FeatureApiEntry {
  typeName: string;
  source: string;
}

export interface FeatureRecord {
  component: string;
  feature: string;
  legacy: boolean;
  summary: string;
  docs?: string;
  apiDocs?: string;
  api: FeatureApiEntry[];
  stories: ExampleRecord[];
}

/* ─────────────── Именованные типы ─────────────── */

/**
 * Именованный тип, структурно найденный среди типов пропсов (см.
 * indexer/parseComponent.ts, collectNamedTypeRefs) — раскрывает то, что в
 * props[].type видно только как ссылка по имени (`ColumnConfig<T>[]`,
 * `MassActionsButtonProps[] | undefined`). Только типы, объявленные в самом
 * ui-kit — типы React/DOM и @salutejs/* уже приходят как inheritedProps.
 */
export interface TypeRecord {
  name: string;
  definition: string;
  importPath: string;
  importStatement: string;
  sourceFile: string;
}

/* ─────────────── Компонент ─────────────── */

export type ComponentType = 'wrapper' | 'composition' | 'standalone' | 'form';
export type ComponentGroup = 'components' | 'formComponents' | 'layouts';

/** Роль экспорта относительно его папки — см. src/indexer/classifyRole.ts. */
export type ComponentRole = 'primary' | 'part' | 'internal';

export interface ComponentRecord {
  /** Дискриминант: у успешной записи ошибки нет. Позволяет `if (record.error)` сужать тип. */
  error?: undefined;

  name: string;
  group: ComponentGroup;
  type: ComponentType;
  sourceFile: string;

  // из discoverComponents / classifyRole
  /** Имя папки, из барреля которой найден экспорт (см. discoverComponents.ts). */
  folderName: string;
  role: ComponentRole;
  /** У part/internal — имя владельца папки (обычно primary-компонент с name === folderName). */
  parentComponent?: string;
  /** У primary-компонента, владеющего папкой, — part/internal-экспорты той же папки (иначе они недостижимы после фильтрации list_components по умолчанию). */
  relatedExports?: string[];
  /**
   * Эта запись — одновременно top-level компонент И compound-часть другого
   * (`${component}.${part}`, например DrawerDFHeader === DrawerDF.Header) —
   * два независимых пути резолва одного типа (см. TASKS.md T12).
   * mergeCompoundPartDuplicates синхронизирует props между обоими путями,
   * так что расхождений в данных нет, но ссылка остаётся — она подсказывает
   * агенту не тратить второй вызов get_component_props на то же самое.
   */
  compoundPartOf?: { component: string; part: string };

  // из parseComponent
  description?: string;
  deprecated?: true;
  deprecationReason?: string;
  props: PropRecord[];
  propsTypeName?: string;
  rawType?: string;
  isGeneric?: true;
  compoundParts?: CompoundPart[];

  // из classify
  atomicBase?: string;
  /** Атом из @salutejs/sdds-finai/beta, а не из основного пакета — влияет на то, в какой папке вендоренного снэпшота искать atomicBase. */
  atomicSubpath?: 'beta';
  wrapsInternal?: string;
  formVariant?: string;
  wrappedBy?: string;

  // из mergeMeta (курированный _docs/meta/components-meta.json)
  category?: string;
  hint?: string;
  /** 2-4 синонима задачи (ru/en) — скорится в search_components наравне с hint. */
  keywords?: string[];
  scope?: string;
  docs?: string;
  apiDocs?: string;
  curatedStories?: ExampleRecord[];
  legacy?: true;
  hasCuratedMeta?: true;
  /** У `legacy: true` — имя компонента, который берут вместо него в новом коде (TASKS.md T9). */
  supersededBy?: string;
  /** Одна строка: при каких условиях брать именно этот компонент из группы конкурирующих (TASKS.md T9). */
  chooseWhen?: string;
  /** 1-3 строки частых антипаттернов — только там, где ошибка реально частая (TASKS.md T9). */
  gotchas?: string[];

  // из mergeAtomicData
  inheritedProps?: InheritedPropRecord[];
  atomicMcpVersion?: string;
  atomicDataMissing?: true;

  // из resolveImportPath / finalizeExamples
  importPath: string;
  importStatement: string;
  examples: ExampleRecord[];
  /**
   * Синтетический `<Component requiredProp={placeholder} />` из обязательных
   * пропсов — всегда вычислен, независимо от того, есть ли реальные examples.
   * Раньше это был единственный "пример" (type: 'synthesized') внутри
   * examples[] — вынесен в отдельное поле (TASKS.md T3), чтобы
   * exampleTitles: [] честно означало «настоящих примеров нет», а не тратило
   * вызов get_component_examples на строку, уже известную из importStatement.
   */
  minimalUsage: string;
}

/** Компонент, который индексер не смог разобрать. */
export interface ComponentErrorRecord {
  error: string;
  name: string;
  group: ComponentGroup;
}

export type IndexedComponent = ComponentRecord | ComponentErrorRecord;

/** Сужающий guard — `.filter()` сам по себе тип не сужает. */
export function isOkComponent(
  record: IndexedComponent,
): record is ComponentRecord {
  return record.error === undefined;
}

/* ─────────────── Индекс ─────────────── */

export interface InstallationGuide {
  title: string;
  description?: string;
  docs?: string;
}

/** Ровно то, что лежит в data/component-index.json. */
export interface ComponentIndex {
  generatedAt: string;
  libVersion: string;
  components: Record<string, IndexedComponent>;
  features: FeatureRecord[];
  types: Record<string, TypeRecord>;
  guides: { installation?: InstallationGuide };
}

export type IndexSource = 'workspace' | 'installed' | 'bundled';

/** Возврат resolveIndex(). Плоский, не дискриминированный по source — поля правда опциональны во всех трёх режимах. */
export interface ResolvedIndex {
  index: ComponentIndex;
  source: IndexSource;
  installedLibVersion?: string;
  libNotInstalled?: boolean;
  dataVersionNotice?: string;
}

/** Индекс + рантайм-поля, которые server.ts домешивает перед раздачей тулзам. */
export interface RuntimeIndex extends ComponentIndex {
  dataVersionNotice?: string;
  libNotInstalled?: boolean;
  indexSource: IndexSource;
}

/* ─────────────── Результаты тулзов ─────────────── */

export interface ToolError {
  error: string;
}

export type ToolResult<T> = T | ToolError;

export function isToolError(result: unknown): result is ToolError {
  return typeof result === 'object' && result !== null && 'error' in result;
}

/* ─────────────── Внешний контракт: _docs/meta/components-meta.json ─────────────── */
/* Файл генерируется generators/meta-info и не типизирован — эти интерфейсы
   описывают только те поля, которые реально читает индексер. */

export interface FeatureMeta {
  docs?: string;
  apiDocs?: string;
  api?: FeatureApiEntry[];
  stories?: ExampleRecord[];
}

export interface ComponentMeta {
  category?: string;
  type?: ComponentType;
  /** Оверрайд эвристики classifyRole для спорных случаев — curated wins over heuristic (см. TASKS.md T11). */
  role?: ComponentRole;
  description?: string;
  hint?: string;
  /** 2-4 синонима задачи (ru/en) — формулировка задачи, не имени компонента. См. TASKS.md T2. */
  keywords?: string[];
  scope?: string;
  docs?: string;
  apiDocs?: string;
  stories?: ExampleRecord[];
  features?: Record<string, FeatureMeta>;
  /** См. одноимённые поля ComponentRecord — TASKS.md T9. */
  supersededBy?: string;
  chooseWhen?: string;
  gotchas?: string[];
}

export interface PageMeta {
  title: string;
  description?: string;
  docs?: string;
}

export interface MetaJson {
  components: Record<string, ComponentMeta>;
  pages?: Record<string, PageMeta>;
}

/* ─────────────── Внешний контракт: vendor/atomic-curated-meta.json ─────────────── */
/* Курированные description/category/keywords для компонентов без собственного
   кода в ui-kit — чистых реэкспортов атомов @salutejs/sdds-finai (Accordion,
   Col, Row, Divider и т.п.). У них нет ни JSDoc (нет своего файла с логикой),
   ни Storybook-страницы — mergeMeta.ts (_docs/meta/components-meta.json) их
   не покрывает. См. TASKS.md T2 и mergeAtomicCuratedMeta.ts. */

export interface AtomicCuratedMetaEntry {
  description?: string;
  category?: string;
  keywords?: string[];
  /** См. одноимённые поля ComponentRecord — TASKS.md T9. */
  supersededBy?: string;
  chooseWhen?: string;
  gotchas?: string[];
}

export interface AtomicCuratedMeta {
  components: Record<string, AtomicCuratedMetaEntry>;
}

/* ─────────────── Build-time мутабельная запись ─────────────── */
/* classify.promoteCompositionToWrapper / linkFormVariants мутируют записи на
   месте (record.type = 'wrapper', delete record.internalComponentImports),
   поэтому конвейеру нужен мутабельный вид, отличный от ComponentRecord. */

export interface WorkingComponentRecord
  extends Omit<Partial<ComponentRecord>, 'error'> {
  name: string;
  group: ComponentGroup;
  type?: ComponentType;
  error?: string;
  /** Промежуточное поле classify — удаляется в promoteCompositionToWrapper. */
  internalComponentImports?: string[];
  /**
   * Промежуточное поле mergeAtomicData — сырые examples[] вендоренного JSON
   * (`vendor/atomic-mcp-data/**\/<atomicBase>.json`), ещё без переписанного на
   * `@daisforge/ui` импорта (importPath на этом шаге пайплайна ещё не
   * посчитан). Превращается в `ExampleRecord[]` в finalizeVendorExamples
   * (vendorExamples.ts) и удаляется в buildIndex.ts перед финальной сборкой
   * записи — наружу не должен уйти сырой снэпшот-формат, см. TASKS.md T3.
   */
  vendorExampleSnippets?: { title?: string; snippet: string }[];
}
