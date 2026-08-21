/*
 * meta-config.types.ts — типы для meta-config.json
 *
 * Этот файл не импортируется скриптом напрямую.
 * Он нужен для документации структуры конфига и подсказок в IDE.
 */

/**
 * Тип компонента относительно атомарных (@salutejs/sdds-finai).
 *
 * - wrapper     — обёртка над атомарным компонентом (DrawerDF -> Drawer)
 * - composition — композиция из нескольких атомарных/обёрток (Layout, EmptyState)
 * - standalone  — самостоятельный, не связан с атомарными (TableCanvas)
 */
export type ComponentType = 'wrapper' | 'composition' | 'standalone';

/**
 * Область применения компонента.
 *
 * - general  — универсальный, для всех команд (по умолчанию)
 * - internal — создан для конкретной команды, не предлагать как общее решение
 */
export type ComponentScope = 'general' | 'internal';

/**
 * Категория компонента в Storybook.
 * Берётся из <Meta title="Категория/Компонент" /> в MDX,
 * но может быть задана явно в конфиге.
 */
export type ComponentCategory = 'Локальные компоненты' | 'Композиции' | 'Формы';

/**
 * Маппинг Story-компонента на реальный тип из исходников.
 *
 * Ключ — имя Story-компонента из Storybook (например StoryTableCanvasConfigComp).
 * Это имя используется в MDX: <CustomArgTypes of={StoryTableCanvasConfigComp} />.
 * Ключи должны совпадать с тем, что написано в MDX — их нельзя переименовать.
 */
export interface ArgTypesMapping {
  [storyComponentName: string]: {
    /** Путь к файлу с типом относительно корня проекта */
    filePath: string;
    /** Имя типа/интерфейса в файле */
    typeName: string;
  };
}

/** Конфигурация простого компонента (минимальный набор полей) */
export interface SimpleComponentConfig {
  name: string;

  /** wrapper | composition | standalone */
  type?: ComponentType;

  /** general (по умолчанию) | internal */
  scope?: ComponentScope;

  /** Пояснение scope: "Создан для команды AI-агента" */
  scopeNote?: string;

  /** Категория в Storybook */
  category?: ComponentCategory;

  /** Краткое описание компонента */
  description?: string;

  /** Подсказка агенту: чем отличается от похожих компонентов */
  hint?: string;

  /**
   * 2-4 синонима задачи (ru/en) для поиска в search_components — формулировка
   * задачи, а не имени компонента: Calendar -> ["выбор даты", "date range", "календарь"].
   */
  keywords?: string[];

  /**
   * Оверрайд роли экспорта относительно папки (primary/part/internal) —
   * curated wins over heuristic, см. packages/mcp-server/src/indexer/classifyRole.ts
   * (TASKS.md T11). Нужен только для случаев, не покрытых механическим
   * списком структурных слотов (например FiltersActionsTabs/FiltersActionsTabItem).
   */
  role?: 'primary' | 'part' | 'internal';

  /**
   * Имя компонента, который заменяет этот при `hint`/`description`,
   * детектящихся как `legacy` (см. detectLegacy в mergeMeta.ts). Обязателен
   * для каждого legacy-компонента (TASKS.md T9).
   */
  supersededBy?: string;

  /**
   * Одна строка: при каких условиях брать именно ЭТОТ компонент из группы
   * конкурирующих (Table/TableCanvas/TableGlide/..., Select/FormSelect и
   * т.п.) — заполняется у КАЖДОГО члена группы, не только у рекомендуемого
   * (TASKS.md T9).
   */
  chooseWhen?: string;

  /**
   * 1-3 строки антипаттернов — только там, где ошибка реально частая
   * (обязательные пары компонентов, взаимоисключающие пропсы, компонент вне
   * Portal и т.п.). Не заполняется для всех подряд (TASKS.md T9).
   */
  gotchas?: string[];
}

/** Конфигурация сложного компонента (TableCanvas и подобные) */
export interface ComplexComponentConfig extends SimpleComponentConfig {
  /** Путь к корневому MDX-файлу документации (относительно storiesBase) */
  rootDocs?: string;

  /** Настройки API */
  api?: {
    /** Папка с API stories (относительно storiesBase) */
    dir: string;
    /** Маппинг Story-компонентов на реальные типы */
    argTypesMapping?: ArgTypesMapping;
  };

  /** Список подпапок-фич (например ["TableCanvas.Filtering"]) */
  features?: string[];

  /** Подпапки, которые НЕ являются фичами — пропускаются */
  exclude?: string[];
}

/** Запись в массиве components: строка (автодетект) или объект */
export type ComponentEntry =
  | string
  | SimpleComponentConfig
  | ComplexComponentConfig;

/**
 * Standalone-страница (не компонент): отдельный MDX вне storiesBase.
 * Например интро «Установка и использование» (storybook-intro/intro.mdx).
 * Парсится в docs и попадает в output.pages.
 */
export interface PageConfig {
  /** Заголовок-ключ страницы в output.pages (обычно совпадает с Meta title) */
  title: string;
  /** Путь к MDX относительно КОРНЯ проекта */
  mdx: string;
  /** Категория для группировки (опционально) */
  category?: string;
  /** Краткое описание для AI-агента (опционально) */
  description?: string;
}

/** Корневая структура meta-config.json */
export interface MetaConfig {
  /** Папка для выходного JSON (относительно корня проекта) */
  outputDir: string;

  /**
   * Имя единого выходного файла (режим single).
   * @default "components-meta.json"
   */
  outputFile?: string;

  /**
   * Имя подпапки для по-файлового вывода (режим --split): один файл на компонент.
   * Путь: <outputDir>/<componentsDir>/<ComponentName>.json
   * @default "components"
   */
  componentsDir?: string;

  /** Базовая папка stories (относительно корня проекта) */
  storiesBase: string;

  /** Текст инструкции для AI-агента (попадёт в выходной JSON) */
  instructions: string;

  /** Базовый URL Storybook-инстанса (без trailing slash) */
  storybookBaseUrl?: string;

  /** Standalone-страницы вне storiesBase (интро, установка/использование) */
  pages?: PageConfig[];

  /** Список компонентов для обработки */
  components: ComponentEntry[];
}
