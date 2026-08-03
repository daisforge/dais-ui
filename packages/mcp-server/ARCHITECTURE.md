# Архитектура @daisforge/ui-mcp

Этот документ описывает полный флоу и устройство MCP-сервера для `@daisforge/ui`: как строится индекс, как он распространяется, как устроены рантайм-инструменты. Контекст и обоснование решений — в `/Users/ramil_hk/.claude/plans/buzzing-herding-lagoon.md`; здесь — как это реализовано по факту.

## Зачем

В репозитории уже был пайплайн `generators/meta-info/generate-meta.js`, генерирующий `_docs/meta/components-meta.json` для чат-бота другой команды. Он покрывал только 36 из 260+ компонентов библиотеки, 0 форм-компонентов, и был заточен под markdown-ответы человеку, а не под точные структурированные вызовы кодового агента.

`@daisforge/ui-mcp` решает именно вторую задачу: даёт агенту, который пишет код, точные пропсы/типы для ЛЮБОГО компонента, явную категорию (wrapper/composition/standalone/form), disambiguation-подсказки, примеры кода и унаследованные пропсы от атомарной библиотеки `@salutejs/sdds-finai` — полностью оффлайн, без обращений к сети или чужим процессам в рантайме.

## Общая схема

```
┌─────────────────────────── BUILD-TIME (npm run mcp:build-index) ───────────────────────────┐
│                                                                                              │
│  packages/ui-kit/src/{components,formComponents,layouts}/*                                  │
│                        │                                                                     │
│                        ▼                                                                     │
│              discoverComponents.js  (ts-morph: перечисляет реальные PascalCase-экспорты      │
│                        │             barrel-файлов — одна папка может дать НЕСКОЛЬКО записей)│
│                        ▼                                                                     │
│              parseComponent.js  (пропсы через тайпчекер + денылист DOM-шума,                 │
│                        │          raw-fallback для дженериков, compound-части)               │
│                        ▼                                                                     │
│              classify.js  (type: wrapper/composition/standalone/form, atomicBase,            │
│                        │    formVariant↔wrappedBy, composition→wrapper promotion)             │
│                        ▼                                                                     │
│              mergeMeta.js  (обогащение из _docs/meta/components-meta.json: hint/category/     │
│                        │     docs/stories, curated wins over heuristic; + legacy-детект)      │
│                        ▼                                                                     │
│              mergeAtomicData.js  (inheritedProps[] из vendor/atomic-mcp-data/,                │
│                        │           дедуп с own props[], atomicDataMissing если атома нет)     │
│                        ▼                                                                     │
│              resolveImportPath.js + synthesizeExample.js (importStatement; синтетический     │
│                        │           пример из required-пропсов, если нет curated-стори)        │
│                        ▼                                                                     │
│              indexFeatures.js  (фичи TableCanvas/Table как плоский параллельный список)       │
│                        ▼                                                                     │
│              diagnostics.js  (терминальная сводка: ошибки/предупреждения/по типам)            │
│                        ▼                                                                     │
│         ┌──────────────────────────────┬────────────────────────────────────────┐            │
│         ▼                              ▼                                        │            │
│  packages/mcp-server/data/       dist/packages/ui-kit/mcp-data/                  │            │
│  component-index.json            component-index.json                           │            │
│  (bundled fallback,               (если dist уже собран —                       │            │
│   уезжает с публикацией            уезжает вместе с публикацией                  │            │
│   @daisforge/ui-mcp)                @daisforge/ui)                               │            │
└────────────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────── RUNTIME (npm run mcp:start / .mcp.json) ────────────────────────┐
│                                                                                              │
│   resolveIndex.js — три уровня, от точного к запасному:                                     │
│     1. workspace  — рядом physически лежит packages/ui-kit → свежий локальный индекс         │
│     2. installed  — у потребителя есть @daisforge/ui с уже собранным mcp-data                │
│     3. bundled    — запасной индекс внутри самого @daisforge/ui-mcp (старые версии           │
│                      библиотеки без mcp-data, или библиотека не установлена вовсе)           │
│                      → dataVersionNotice / libNotInstalled в ответах инструментов            │
│                        │                                                                     │
│                        ▼                                                                     │
│                  server.js  (@modelcontextprotocol/sdk, stdio transport)                     │
│                        │                                                                     │
│                        ▼                                                                     │
│         src/tools/*.js  →  truncate.js (бюджет ~25k символов на ответ, последний рубеж)       │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 1. Индексер (`src/indexer/`)

Весь пайплайн запускается одной командой и оркестрируется `buildIndex.js`.

### 1.1 `tsProject.js`

Общий `ts-morph`-проект на весь прогон (`packages/ui-kit/tsconfig.lib.json` — там уже резолвятся алиасы `@ui-kit/*`). Пересоздание Project на каждый компонент стоило бы секунды на компонент; общий проект грузит 1344 файла за ~2.3с один раз.

### 1.2 `discoverComponents.js`

Обходит `packages/ui-kit/src/{components,formComponents,layouts}/*`. Ключевое отличие от наивного подхода "имя папки = имя компонента": одна папка может экспортировать несколько реальных компонентов (`FormDatePickers/` → `FormDatePicker` + `FormDatePickerRange`; `Segment/` → `SegmentGroup`/`SegmentItem`/`SegmentIconItem`/`SegmentProvider`; `IconButton/` → `IconButton`/`IconButtonDots`/`IconButtonFilter`). Поэтому вместо предположения о совпадении имён — перечисляются реальные экспорты barrel-файла (`index.ts`/`index.tsx`) через `getExportSymbols()`, отфильтрованные эвристикой "PascalCase-значение, не ALL_CAPS-константа, не enum, не хук (`use*`)". Это подняло покрытие со 128 до 265 найденных компонентов и закрыло 7 ошибок парсинга (в т.ч. все 3 "потерянных" form-компонента).

Явный список исключений (`EXCLUDED_DIRS`) — только для `StoriesUtils` (Storybook-хелперы, неотличимые от компонентов по одним флагам символа).

### 1.3 `parseComponent.js`

Для каждого компонента резолвит:

- **Где реально объявлен** — через `getExportedDeclarations()` barrel-файла, которое следует через re-export цепочки до конечной декларации. Если декларация лежит в `node_modules/@salutejs/sdds-finai` → это чистый реэкспорт (`pureAtomicReExport`), собственных пропсов ноль, всё придёт из `inheritedProps` позже.
- **Пропсы** — резолвятся через тайпчекер (`type.getProperties()`), а не текстовым парсингом. Источник типа ищется в три захода: (1) экспортированный `${Name}Props`/`${Name}CompProps` из barrel; (2) фолбек на сигнатуру самой render-функции (`findPropsDeclFromSignature` — критично для `TableCanvas`/`Table`, у которых `TableProps` вообще не реэкспортирован из barrel); (3) для compound-частей — ещё и прямой поиск объявления типа внутри файлов папки компонента (`findLocalTypeDeclaration`), не только среди barrel-экспортов.
- **Фильтр DOM-шума** (`htmlAttributeDenylist.js`) — `ComponentProps<typeof X>` тянет ~300 унаследованных DOM/ARIA атрибутов вперемешку с реальными пропсами. Фильтрация идёт не по имени (иначе потеряли бы переопределённые `Switch.size: "s"|"m"|"l"`), а по паре имя+текст типа, с нормализацией конкретного HTML-элемента (`HTMLInputElement`/`HTMLDivElement` → `HTMLElement`) — иначе `onChange`/`onFocus` не матчились бы из-за разного элемента-параметра. Плюс небольшой список React-статиков (`propTypes`, `defaultProps`, `displayName`...) и styled-components-шума (`theme`, `forwardedAs`). Эффект: DrawerDF 206→46 пропсов, TextField 208→49, без потери значимых полей.
- **Фолбек на сырой текст типа** — если тип генерик (`TableProps<FilterStateType, RowIdType, ...>`, 6 параметров), вместо попытки развернуть его через тайпчекер (нечитаемая простыня) берётся сырой текст AST-узла декларации (`decl.getText()`) — проще, чем ручной подсчёт скобок в старом `generators/meta-info`, потому что AST уже даёт точные границы.
- **Compound-части** — ищутся статические присваивания `Component.Sub = LocalName;` (`DrawerDF.Content = DrawerDFContent`) через AST (`BinaryExpression` + `PropertyAccessExpression`), а не по документации CLAUDE.md напрямую (реальный код иногда расходится с упрощённым описанием — например, `ModalDF.Header` в CLAUDE.md не подтверждается кодом, реальный паттерн статик-присваивания есть только у `DrawerDF`/`AnalyticalWidget`/`LeftPanel`/`MassActions`/`TableTabs`/`Stories`).
- **JSDoc** — описание, `@deprecated`/причина — с самой декларации компонента.

### 1.4 `classify.js`

- `type`: `formComponents/*` → `form`; чистый реэкспорт из sdds-finai → `wrapper` (atomicBase = то же имя); импорт из `@salutejs/sdds-finai` в локальном файле → `wrapper` (atomicBase = импортированное имя, с приоритетом на совпадение с именем компонента, если импортов несколько); импорт других ui-kit компонентов → `composition`; иначе → `standalone`.
- **`promoteCompositionToWrapper`** — второй проход: некоторые компоненты оборачивают атом не напрямую, а через ДРУГОЙ ui-kit компонент (`ModalDF` → внутренний `Modal` → атом `Modal` из sdds-finai). Если среди внутренних импортов composition-компонента есть уже классифицированный wrapper с совпадающим по имени atomicBase — повышаем до wrapper.
- **`linkFormVariants`** — по соглашению именования `Form${Name}` связывает `TextField ↔ FormTextField` и т.д. (`formVariant`/`wrappedBy`), для всех 14 форм-компонентов.

### 1.5 `mergeMeta.js`

Читает `_docs/meta/components-meta.json`. Там, где компонент присутствует (36 из 265), поля `category`/`type`/`description`/`hint`/`scope`/`docs`/`apiDocs`/`stories` **перекрывают** эвристику индексера (curated wins over heuristic). Также:

- переносит `pages["Установка и использование"]` как есть в `guides.installation` (без нового парсинга — переиспользование уже сгенерированного контента);
- детектит `legacy: true` по вхождению "устаревш" в hint/description curated-текста — принципиальная проверка по смыслу, а не хардкод конкретного имени компонента (сейчас единственный кейс — `Table`).

### 1.6 Атомарные данные — вендоринг (`vendorAtomicData.js` + `mergeAtomicData.js`)

Их MCP (`@salutejs/sdds-mcp`) сам работает поверх статического JSON-бандла, который генерирует скрипт `generate-mcp-data` в репозитории `plasma/website/sdds-finai-docs` (схема на компонент: `{name, package, category, summary, api:{props}, examples}`). Вместо подключения к их MCP как к живому процессу — **разово вендорим тот же JSON** к себе:

- `vendorAtomicData.js --source <путь-к-их-mcpData>` копирует `manifest.json` + `components/*.json` в `packages/mcp-server/vendor/atomic-mcp-data/` (закоммиченный снэпшот, обновляется вручную).
- `mergeAtomicData.js` — для каждого компонента с `atomicBase` ищет соответствующий файл в снэпшоте, кладёт его `api.props` как `inheritedProps[]` (с `inheritedFrom`/`inheritedPackage`), и убирает из собственных `props[]` те поля, что уже есть в `inheritedProps` (дедуп — иначе у чистых реэкспортов типа `Button`/`Accordion` весь список пропсов дублировался бы дважды). Если снэпшота для конкретного атома нет — `atomicDataMissing: true`, без падения сборки (часть compound-частей вроде `DrawerHeader`/`DrawerFooter` не имеет отдельной страницы в их доках — API организовано внутри родительской `Drawer`).

### 1.7 `resolveImportPath.js`

`packages/ui-kit/src/index.ts` реэкспортирует ВСЁ (components/formComponents/layouts) единым плоским барелем — проверено напрямую по файлу. Для v1-скоупа путь импорта всегда `@daisforge/ui`, независимо от группы. Сабпасы (`/icons`, `/tokens`) понадобятся только в v1.1.

### 1.8 `synthesizeExample.js`

Если у компонента нет ни одной curated-стори (большинство из 265) — генерирует `<Component requiredProp={placeholder} />` из обязательных пропсов, помечено `type: "synthesized"` (в отличие от `"full-code"`/`"args-only"` из Storybook), чтобы агент не путал с проверенным примером.

### 1.9 `indexFeatures.js`

Фичи `TableCanvas`/`Table` (46 + 31 шт.) — не вложенный подобъект компонента, а **отдельный плоский список**, доступный поиску наравне с компонентами. Причина: у `TableCanvas` фичи составляют 98.5% payload'а компонента (682 511 из 682 511 символов сырой записи против 9 784 в "корне"), а имена не угадываются (`massPanelAction`, `CanvasElements/CanvasText`). `legacy` пробрасывается с родительского компонента (все фичи `Table` — legacy).

### 1.10 `diagnostics.js` + `buildIndex.js`

`diagnostics.js` печатает терминальную сводку (по аналогии с `generate-meta.js`): количество компонентов/фичей, разбивку по типам, ошибки парсинга, предупреждения (`atomicDataMissing`, пустой `props[]` без `isGeneric`, записи сильно больше бюджета ответа). `buildIndex.js` — оркестратор: вызывает весь пайплайн по порядку, пишет итоговый `component-index.json` в оба места (bundled + package-режим, если `dist/packages/ui-kit` уже собран).

## 2. Итоговый `component-index.json`

```jsonc
{
  "generatedAt": "...",
  "libVersion": "1.11.0",           // версия ui-kit на момент сборки — для version-mismatch проверки в рантайме
  "components": {
    "<Name>": {
      "name", "group", "type", "category", "description", "hint",
      "importPath", "importStatement",
      "deprecated", "deprecationReason", "legacy", "scope",
      "atomicBase", "atomicMcpVersion", "atomicDataMissing",
      "formVariant", "wrappedBy", "wrapsInternal",
      "props": [...], "inheritedProps": [...],
      "propsTypeName", "rawType", "isGeneric",
      "compoundParts": [{ "name", "props", ... }],
      "examples": [{ "exportName", "displayName", "type", "code" }],
      "hasCuratedMeta", "curatedStories", "docs", "apiDocs",
      "sourceFile"
    }
  },
  "features": [
    { "component", "feature", "legacy", "summary", "docs", "apiDocs", "api", "stories" }
  ],
  "guides": { "installation": { "title", "description", "docs" } }
}
```

Файл целиком (~МБ, наравне со старым `components-meta.json`) читается один раз при старте сервера — размер на диске не проблема, проблема только в том, что реально уходит в ответ агенту. Этим занимается уровень инструментов (см. ниже).

## 3. Распространение индекса и рантайм-резолв (`resolveIndex.js`)

Сервер обязан работать у любого потребителя, включая тех, кто сидит на версии `@daisforge/ui`, опубликованной **до** появления mcp-data (то есть сейчас — все версии). Три уровня, от точного к запасному:

1. **workspace** — если физически рядом (`../ui-kit/package.json` относительно самого `resolveIndex.js`) лежит `packages/ui-kit` → мы внутри монорепо dais/ui, читаем свежесобранный локальный индекс.
2. **installed** — `require.resolve('@daisforge/ui/mcp-data/component-index.json')` относительно `process.cwd()` потребителя (не относительно нашего пакета!). Сработает только для версий `@daisforge/ui`, уже содержащих `mcp-data` (появится после первой публикации с этим MCP).
3. **bundled** — запасной индекс, вшитый в сам `@daisforge/ui-mcp` (`data/component-index.json`, тот же файл, что и workspace-режим, но семантически означает "библиотека либо старая, либо не установлена"). Сравнивает `libVersion` из индекса с реально установленной версией `@daisforge/ui` (если есть) — при несовпадении или отсутствии добавляет `dataVersionNotice`/`libNotInstalled` в каждый ответ инструмента.

Все три уровня протестированы вживую (см. историю сессии): реальный сценарий "`@daisforge/ui` не установлен вовсе" — сервер не падает, отдаёт `bundled`-индекс и корректно предупреждает агента, что стоит вызвать `get_installation_guide`.

## 4. MCP-сервер и инструменты (`server.js` + `src/tools/`)

Транспорт — stdio (`@modelcontextprotocol/sdk`). Каждый инструмент — чистая функция `(index, args) → payload`, сервер оборачивает результат через `truncate.js` перед отправкой.

| Инструмент | Назначение |
|---|---|
| `list_components({type?, category?, scope?})` | список с фильтрами |
| `search_components({query, limit?})` | скоринг по компонентам И фичам, legacy-демоушен, negation-aware матчинг (см. ниже) |
| `get_component({name})` | **компактная** карточка — без полных доков, без тел примеров |
| `get_component_props({name, part?})` | полные пропсы: own + inheritedProps; `part` — для compound-частей |
| `get_component_examples({name, title?})` | примеры кода |
| `list_features({component})` | список фичей компонента |
| `get_feature({component, feature})` | доки+API одной фичи (без тел примеров) |
| `get_feature_examples({component, feature, title?})` | примеры кода конкретной фичи |
| `list_categories()` | категории с разбивкой по типам |
| `get_installation_guide()` | гайд по установке из `guides.installation` |

`shared.js` — общие хелперы резолва (`findComponent`, `findFeature` — регистронезависимо, с поддержкой вложенных путей вроде `CanvasElements/CanvasText`).

### 4.1 Бюджет ответа (`truncate.js`)

Замер: сырая запись `TableCanvas` в старом `components-meta.json` — 682 511 символов (~170k токенов), при медиане ~11k. Поэтому:

- `get_component` возвращает только компактные поля (имена пропсов в одну строку, заголовки примеров, список фичей) — детали через `get_component_props`/`get_component_examples`/`list_features`;
- фичи не инлайнятся в карточку компонента вообще — отдельные инструменты;
- `truncateForResponse` — последний рубеж: если конкретный ответ всё равно превышает ~25k символов, обрезает с явным маркером и подсказкой, каким параметром (`part`/`title`/`feature`) сузить запрос.

### 4.2 Поиск (`searchComponents.js`)

Простой substring-скоринг (без embeddings/NLP), но с двумя нетривиальными поправками, найденными вживую при тестировании:

- **Мультипликативный, а не аддитивный legacy-штраф** (`score *= 0.6`, не `score -= 12`) — иначе единственное совпадение по редкому термину (`"react-data-grid"` встречается только у `Table`) гасилось штрафом до нуля, и legacy-компонент, который единственно верный ответ, исчезал из выдачи целиком.
- **Negation-aware матчинг** для `hint`/`description` — курированные тексты иногда пишутся как явное опровержение (`AnalyticalWidget.hint`: "Это layout, **не** фильтрация"). Наивное совпадение подстроки засчитало бы запрос "фильтрация" как позитивный сигнал ровно наоборот. Проверяется, не стоит ли "не " непосредственно перед совпадением.
- Точное совпадение слова с именем компонента даёт +100 (перевешивает legacy-штраф) — поэтому `"Table сортировка"` всё равно ставит `Table` выше `TableCanvas`, несмотря на то, что оба имени содержат подстроку "table".

## 5. Известные ограничения (см. также README.md)

- Иконки/токены/миксины/утилиты не проиндексированы — сознательная граница v1.
- `get_installation_guide` содержит устаревшее имя пакета (`@sber-digital-finance-ui/ui-kit`) — проблема в самом курированном `_docs/meta/components-meta.json`, не в индексере.
- Три пары внутренних sub-компонентов с одинаковым именем в разных папках таблиц (`TableFilterSelectListItem`, `ContainerStyled`, `Canvas`) — при коллизии в индекс попадает только последняя обработанная запись.
- Поиск слабее на общих словах, которые встречаются во многих фичах одновременно (например "ячеек").
- `atomicDataMissing: true` — часть compound-частей атомарных компонентов не имеет отдельной записи в вендоренном снэпшоте (их доки организованы по родительской странице, не по каждому именованному экспорту).

## 6. Как обновлять

```bash
npm run mcp:build-index      # пересобрать индекс из текущего исходника ui-kit
npm run mcp:vendor-atomic -- --source <путь-к-их-mcpData>   # обновить снэпшот атомарных пропсов
npm run mcp:start            # запустить сервер локально (stdio)
```

`mcp:build-index` автоматически входит в корневой `postbuild` (после `npm run build`).
