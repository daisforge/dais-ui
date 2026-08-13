# Архитектура @daisforge/ui-mcp

Этот документ описывает полный флоу и устройство MCP-сервера для `@daisforge/ui`: как строится индекс, как он распространяется, как устроены рантайм-инструменты. Контекст и обоснование решений — в `/Users/ramil_hk/.claude/plans/buzzing-herding-lagoon.md`; здесь — как это реализовано по факту.

## Зачем

В репозитории уже был пайплайн `generators/meta-info/generate-meta.js`, генерирующий `_docs/meta/components-meta.json` для чат-бота другой команды. Он покрывал только 36 из 260+ компонентов библиотеки, 0 форм-компонентов, и был заточен под markdown-ответы человеку, а не под точные структурированные вызовы кодового агента.

`@daisforge/ui-mcp` решает именно вторую задачу: даёт агенту, который пишет код, точные пропсы/типы для ЛЮБОГО компонента, явную категорию (wrapper/composition/standalone/form), disambiguation-подсказки, примеры кода и унаследованные пропсы от атомарной библиотеки `@salutejs/sdds-finai` — полностью оффлайн, без обращений к сети или чужим процессам в рантайме.

Пакет написан на TypeScript (`tsc` → `dist/`, публикуется собранным). Доменная модель, разделяемая всем пайплайном и рантаймом (`PropRecord`, `ComponentRecord`, `FeatureRecord`, `ResolvedIndex` и т.д.), живёт в `src/types.ts` — рассинхрон полей между этапами индексера (6 файлов последовательно мутируют одну и ту же запись компонента) ловится компилятором, а не только прогоном.

## Общая схема

```
┌─────────────────────────── BUILD-TIME (npm run mcp:build-index) ───────────────────────────┐
│                                                                                              │
│  packages/ui-kit/src/{components,formComponents,layouts}/*                                  │
│                        │                                                                     │
│                        ▼                                                                     │
│              discoverComponents.ts  (ts-morph: перечисляет реальные PascalCase-экспорты      │
│                        │             barrel-файлов — одна папка может дать НЕСКОЛЬКО записей)│
│                        ▼                                                                     │
│              parseComponent.ts  (пропсы через тайпчекер + денылист DOM-шума,                 │
│                        │          raw-fallback для дженериков, compound-части)               │
│                        ▼                                                                     │
│              classify.ts  (type: wrapper/composition/standalone/form, atomicBase,            │
│                        │    formVariant↔wrappedBy, composition→wrapper promotion)             │
│                        ▼                                                                     │
│              mergeMeta.ts  (обогащение из _docs/meta/components-meta.json: hint/category/     │
│                        │     description/keywords/docs/stories, curated wins over heuristic;  │
│                        │     + legacy-детект)                                                │
│                        ▼                                                                     │
│              mergeAtomicCuratedMeta.ts  (description/category/keywords из                    │
│                        │     vendor/atomic-curated-meta.json — второй curated-источник,       │
│                        │     для компонентов БЕЗ своего кода в ui-kit, T2)                    │
│                        ▼                                                                     │
│              mergeAtomicData.ts  (inheritedProps[] из vendor/atomic-mcp-data/,                │
│                        │           дедуп с own props[], atomicDataMissing если атома нет)     │
│                        ▼                                                                     │
│              resolveImportPath.ts + synthesizeExample.ts (importStatement; синтетический     │
│                        │           пример из required-пропсов, если нет curated-стори)        │
│                        ▼                                                                     │
│              indexFeatures.ts  (фичи TableCanvas/Table как плоский параллельный список)       │
│                        ▼                                                                     │
│              diagnostics.ts  (терминальная сводка: ошибки/предупреждения/по типам)            │
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
│   resolveIndex.ts — три уровня, от точного к запасному:                                     │
│     1. workspace  — рядом physически лежит packages/ui-kit → свежий локальный индекс         │
│     2. installed  — у потребителя есть @daisforge/ui с уже собранным mcp-data                │
│     3. bundled    — запасной индекс внутри самого @daisforge/ui-mcp (старые версии           │
│                      библиотеки без mcp-data, или библиотека не установлена вовсе)           │
│                      → dataVersionNotice / libNotInstalled в ответах инструментов            │
│                        │                                                                     │
│                        ▼                                                                     │
│                  server.ts  (@modelcontextprotocol/sdk, stdio transport)                     │
│                        │                                                                     │
│                        ▼                                                                     │
│         src/tools/*.ts  →  truncate.ts (бюджет ~25k символов на ответ, последний рубеж)       │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 1. Индексер (`src/indexer/`)

Весь пайплайн запускается одной командой и оркестрируется `buildIndex.ts`.

### 1.1 `tsProject.ts`

Общий `ts-morph`-проект на весь прогон (`packages/ui-kit/tsconfig.lib.json` — там уже резолвятся алиасы `@ui-kit/*`). Пересоздание Project на каждый компонент стоило бы секунды на компонент; общий проект грузит 1344 файла за ~2.3с один раз.

### 1.2 `discoverComponents.ts`

Обходит `packages/ui-kit/src/{components,formComponents,layouts}/*`. Ключевое отличие от наивного подхода "имя папки = имя компонента": одна папка может экспортировать несколько реальных компонентов (`FormDatePickers/` → `FormDatePicker` + `FormDatePickerRange`; `Segment/` → `SegmentGroup`/`SegmentItem`/`SegmentIconItem`/`SegmentProvider`; `IconButton/` → `IconButton`/`IconButtonDots`/`IconButtonFilter`). Поэтому вместо предположения о совпадении имён — перечисляются реальные экспорты barrel-файла (`index.ts`/`index.tsx`) через `getExportSymbols()`, отфильтрованные эвристикой "PascalCase-значение, не ALL_CAPS-константа, не enum, не хук (`use*`)". Это подняло покрытие со 128 до 265 найденных компонентов и закрыло 7 ошибок парсинга (в т.ч. все 3 "потерянных" form-компонента).

Явный список исключений (`EXCLUDED_DIRS`) — только для `StoriesUtils` (Storybook-хелперы, неотличимые от компонентов по одним флагам символа).

### 1.3 `parseComponent.ts`

Для каждого компонента резолвит:

- **Где реально объявлен** — через `getExportedDeclarations()` barrel-файла, которое следует через re-export цепочки до конечной декларации. Если декларация лежит в `node_modules/@salutejs/sdds-finai` → это чистый реэкспорт (`pureAtomicReExport`), собственных пропсов ноль, всё придёт из `inheritedProps` позже.
- **Пропсы** — резолвятся через тайпчекер (`type.getProperties()`), а не текстовым парсингом. Источник типа ищется в три захода: (1) экспортированный `${Name}Props`/`${Name}CompProps` из barrel; (2) фолбек на сигнатуру самой render-функции (`findPropsDeclFromSignature` — критично для `TableCanvas`/`Table`, у которых `TableProps` вообще не реэкспортирован из barrel); (3) для compound-частей — ещё и прямой поиск объявления типа внутри файлов папки компонента (`findLocalTypeDeclaration`), не только среди barrel-экспортов.
- **Фильтр DOM-шума** (`htmlAttributeDenylist.ts`) — `ComponentProps<typeof X>` тянет ~300 унаследованных DOM/ARIA атрибутов вперемешку с реальными пропсами. Фильтрация идёт не по имени (иначе потеряли бы переопределённые `Switch.size: "s"|"m"|"l"`), а по паре имя+текст типа, с нормализацией конкретного HTML-элемента (`HTMLInputElement`/`HTMLDivElement` → `HTMLElement`) — иначе `onChange`/`onFocus` не матчились бы из-за разного элемента-параметра. Плюс небольшой список React-статиков (`propTypes`, `defaultProps`, `displayName`...) и styled-components-шума (`theme`, `forwardedAs`). Эффект: DrawerDF 206→46 пропсов, TextField 208→49, без потери значимых полей.
- **Фолбек на сырой текст типа** — если тип генерик (`TableProps<FilterStateType, RowIdType, ...>`, 6 параметров), вместо попытки развернуть его через тайпчекер (нечитаемая простыня) берётся сырой текст AST-узла декларации (`decl.getText()`) — проще, чем ручной подсчёт скобок в старом `generators/meta-info`, потому что AST уже даёт точные границы.
- **Compound-части** — ищутся статические присваивания `Component.Sub = LocalName;` (`DrawerDF.Content = DrawerDFContent`) через AST (`BinaryExpression` + `PropertyAccessExpression`), а не по документации CLAUDE.md напрямую (реальный код иногда расходится с упрощённым описанием — например, `ModalDF.Header` в CLAUDE.md не подтверждается кодом, реальный паттерн статик-присваивания есть только у `DrawerDF`/`AnalyticalWidget`/`LeftPanel`/`MassActions`/`TableTabs`/`Stories`). `resolveCompoundPart` — та же цепочка фолбэков, что и у top-level компонента (`findPropsDeclaration` → `findLocalTypeDeclaration` → `findPropsDeclFromSignature`), плюс тот же финальный `tryExtractViaComponentProps(localDecl)` последним звеном: без него часть compound-подкомпонентов (реэкспорты из `@salutejs/sdds-finai` без инициализатора, откуда неоткуда взять параметр render-функции) откатывались на сырой текст типа — до 400 символов нечитаемого `((((Omit<Omit<...` вместо разобранных полей.
- **JSDoc** — описание, `@deprecated`/причина — с самой декларации компонента.

### 1.4 `classify.ts`

- `type`: `formComponents/*` → `form`; чистый реэкспорт из sdds-finai → `wrapper` (atomicBase = то же имя); импорт из `@salutejs/sdds-finai` в локальном файле → `wrapper` (atomicBase = импортированное имя, с приоритетом на совпадение с именем компонента, если импортов несколько); импорт других ui-kit компонентов → `composition`; иначе → `standalone`.
- **`promoteCompositionToWrapper`** — второй проход: некоторые компоненты оборачивают атом не напрямую, а через ДРУГОЙ ui-kit компонент (`ModalDF` → внутренний `Modal` → атом `Modal` из sdds-finai). Если среди внутренних импортов composition-компонента есть уже классифицированный wrapper с совпадающим по имени atomicBase — повышаем до wrapper.
- **`linkFormVariants`** — по соглашению именования `Form${Name}` связывает `TextField ↔ FormTextField` и т.д. (`formVariant`/`wrappedBy`), для всех 14 форм-компонентов.

### 1.4a `classifyRole.ts` + `linkFolderRoles` (роль экспорта: primary/part/internal)

Из 246 обнаруженных экспортов (126 папок с barrel-файлом) только часть — самостоятельные единицы выбора; остальное — слоты внутри них (`ModalDFHeader` — часть `ModalDF`) или служебные примитивы рендеринга (`CanvasRect` внутри `TableGlide`), в прикладном коде не встречающиеся никогда. Наивное правило "оставить только `name === folderName`" неверное — вырезало бы легитимные `Col`, `Row`, всю типографику (`BodyM`...), `AccordionItem`, `DatePickerRange`. Вместо этого — трёхролевая эвристика (`classifyRole(name, folderName)`):

1. `name === folderName` → `primary`.
2. иначе имя из явного списка внутренних примитивов (`/^Canvas/`, `/^CellEditor/`, `/^TextCellEntry/`, `/Styled$/`, плюс точные имена вроде `RootBridge`/`RedDot`) → `internal`.
3. иначе имя начинается с `folderName`, а остаток совпадает со структурным слотом (`Header|Footer|Content|...`) → `part`.
4. иначе → `primary`.

Курируемый оверрайд — `role` в `_docs/meta/components-meta.json` (curated wins over heuristic, тот же принцип, что и у остальных полей `mergeMeta.ts`); применяется до `linkFolderRoles`, так что оверрайд учитывается при расчёте `parentComponent`/`relatedExports`. Используется для случаев, не покрытых механическим списком слотов (`FiltersActionsTabs`/`FiltersActionsTabItem` — реальные compound-присваивания `FiltersActions.Tabs`/`FiltersActions.TabItem` в коде, но суффиксы `Tabs`/`TabItem` намеренно не входят в общий список слотов, чтобы не расширять его вслепую под один кейс).

**Регенерация-безопасность (T2)**: до T2 `role` для `FiltersActionsTabs`/`FiltersActionsTabItem` был вписан только в сгенерированный `_docs/meta/components-meta.json` вручную — `generate-meta.js` вообще не читал/не писал поле `role`, а значит любой `npm run meta` тихо стирал оба оверрайда. T2 добавил `role` в схему конфига (`meta-config.types.ts`) и в `processSimpleComponent`/`processComplexComponent` (`generate-meta.js`), а сами оверрайды перенесены в `generators/meta-info/config/meta-config.json` — теперь они переживают регенерацию.

`linkFolderRoles` (в `buildIndex.ts`, выполняется после `mergeMeta`) группирует записи по `folderName` и проставляет: `parentComponent` — у каждой `part`/`internal`-записи (имя владельца папки, `name === folderName`; если такого владельца нет — само имя папки, у пяти папок его действительно нет: `Segment`, `Skeleton`, `FormDatePickers`, `FormRadioGroupBox`, `FormSegments`); `relatedExports` — у каждой `primary`-записи той же папки (имена скрытых `part`/`internal`-соседей, иначе они недостижимы после того, как `list_components` по умолчанию показывает только `primary`).

`list_components` фильтрует по `role` (по умолчанию `primary`, `role: "all"` снимает фильтр). `search_components` по роли НЕ фильтрует (агент может целенаправленно искать `ModalDFHeader`) — только понижает `internal` тем же мультипликативным приёмом, что и `legacy`.

### 1.5 `mergeMeta.ts`

Читает `_docs/meta/components-meta.json`. Там, где компонент присутствует, поля `category`/`type`/`description`/`hint`/`keywords`/`scope`/`docs`/`apiDocs`/`stories` **перекрывают** эвристику индексера (curated wins over heuristic). Также:

- переносит `pages["Установка и использование"]` как есть в `guides.installation` (без нового парсинга — переиспользование уже сгенерированного контента);
- детектит `legacy: true` по вхождению "устаревш" в hint/description curated-текста — принципиальная проверка по смыслу, а не хардкод конкретного имени компонента (сейчас единственный кейс — `Table`).

**`_docs/meta/components-meta.json` — build-артефакт, не редактируемый файл.** Он полностью перезаписывается скриптом `generators/meta-info/generate-meta.js` (`npm run meta`) из конфига `generators/meta-info/config/meta-config.json` (поле `components`). Ручные правки в `_docs/meta/components-meta.json` теряются при следующем `npm run meta` — это едва не привело к порче T11-оверрайдов `role` (см. §1.4a); правки нужно вносить **только** в `meta-config.json`.

До T2 `meta-config.json` покрывал 36 из 265+ компонентов — только те, у кого есть собственный код в `ui-kit` и (в целевом сценарии) страница в Storybook. T2 расширил покрытие до 126 (все компоненты с собственной реализацией, включая ~85 без Storybook-страницы) и добавил в схему `keywords`/`role`. Резолвер `resolveComponent.js` до T2 требовал папку `packages/storybook/src/stories/<Name>/` — при её отсутствии компонент тихо выпадал из вывода (скрытый баг: `resolveSimpleComponent`/`resolveComplexComponent` возвращали `null`, но `{type: 'simple', ...null}` в `resolveComponent()` даёт truthy `{type: 'simple'}`, `processSimpleComponent` падал на `for (const mdxPath of resolved.docsMdx)` — TypeError гасился try/catch в главном цикле генератора). T2 поменял `null` на минимальную запись с пустыми `docsMdx/apiMdx/storyFiles` — компонент без Storybook-страницы теперь получает `category`/`description`/`keywords` из конфига, но пустой `docs`/`api`/`stories` (только `console.warn`, не потеря записи).

### 1.5a `mergeAtomicCuratedMeta.ts` — второй curated-источник (T2)

117 из 243 компонентов — чистые реэкспорты атомов `@salutejs/sdds-finai` (`export { X } from '@salutejs/sdds-finai'`), без единой строчки собственного кода и без Storybook-страницы. `meta-config.json`/`generate-meta.js` для них принципиально бесполезны — резолвятся по папке в `ui-kit`/Storybook, которой у чистых реэкспортов просто нет что описывать помимо самого факта реэкспорта.

Для этих 117 — отдельный курируемый файл **`packages/mcp-server/vendor/atomic-curated-meta.json`** (`{ components: { <Name>: { description, category, keywords } } }`), НЕ проходящий через `generators/meta-info` вообще. `mergeAtomicCuratedMeta.ts` читает его напрямую (аналогично `mergeMeta.ts`, тот же паттерн `curated wins`) и выполняется в `buildIndex.ts` сразу после `mergeMeta`, до `linkFolderRoles`.

Единственный практический источник контента при курировании этого файла — вендоренный снэпшот атомарки (`vendor/atomic-mcp-data/**/*.json`, поле `summary`) и `inheritedProps`; сам `summary` неровный (то голое имя компонента без содержания — `"Switch"`, `"Tooltip"` — то избыточный технический текст за 100-символьный лимит) и не годится как автоматический фолбэк в коде — описания в `atomic-curated-meta.json` написаны вручную по этому материалу, не скопированы напрямую.

Название файла (`atomic-curated-meta.json`) намеренно похоже на `atomic-mcp-data/` — оба про атомарные компоненты — но это два независимых по происхождению файла: `atomic-mcp-data/` — вендоренный (внешний) снэпшот пропсов, обновляется через `mcp:vendor-atomic --source`; `atomic-curated-meta.json` — наш собственный курированный текст, правится вручную и не перезаписывается никаким внешним генератором.

### 1.6 Атомарные данные — вендоринг (`vendorAtomicData.ts` + `mergeAtomicData.ts`)

Их MCP (`@salutejs/sdds-mcp`) сам работает поверх статического JSON-бандла, который генерирует скрипт `generate-mcp-data` в репозитории `plasma/website/sdds-finai-docs` (схема на компонент: `{name, package, category, summary, api:{props}, examples}`). Вместо подключения к их MCP как к живому процессу — **разово вендорим тот же JSON** к себе:

- `vendorAtomicData.ts --source <путь-к-их-mcpData>` копирует `manifest.json` + `components/*.json` в `packages/mcp-server/vendor/atomic-mcp-data/` (закоммиченный снэпшот, обновляется вручную).
- `mergeAtomicData.ts` — для каждого компонента с `atomicBase` ищет соответствующий файл в снэпшоте, кладёт его `api.props` как `inheritedProps[]` (с `inheritedFrom`/`inheritedPackage`), и убирает из собственных `props[]` те поля, что уже есть в `inheritedProps` (дедуп — иначе у чистых реэкспортов типа `Button`/`Accordion` весь список пропсов дублировался бы дважды). Если снэпшота для конкретного атома нет — `atomicDataMissing: true`, без падения сборки (часть compound-частей вроде `DrawerHeader`/`DrawerFooter` не имеет отдельной страницы в их доках — API организовано внутри родительской `Drawer`).

**Вендор — источник списка пропсов и чистых текстов типов, не источник описаний.** Замер на снэпшоте: `description`/`default` заполнены пустой строкой у 100% вендоренных пропсов, `required: true` не встречается вовсе — их `PropsTable`-генератор кладёт в текст только `{name, type}` (см. `generateIndexFiles.mjs` в `plasma/website/sdds-finai-docs`). Собственный резолв через ts-morph (own `props[]`, до дедупа) при этом часто ЗНАЕТ описание и настоящий `required` — тот же тип уже резолвился при разборе wrapper-компонента. Поэтому дедуп при совпадении имени — не "own проигрывает и выкидывается", а пополевой мёрдж (`mergeWithOwn`): `description`/`required` берёт own (непустое значение побеждает), список пропсов и текст типа — вендор. Пустые `description: ""`/`default: ""` из вендора не сохраняются вовсе (`dropEmptyStrings`) — оба поля в `AtomicPropRecord`/`InheritedPropRecord` опциональны именно из-за этого: отсутствие поля ≠ пустая строка, которую агент читал бы как содержательный (пустой) дефолт.

### 1.6a `linkCompoundPartDuplicates` (дедуп compound-частей)

10 записей в индексе присутствуют одновременно и как top-level компонент, и как элемент `compoundParts` родителя: `DrawerDF/{Content,Header,Footer}`, `MassActions/Counter`, `Stories/Preview`, `FiltersActions/{FiltersButton,DotsIconButton,ListOfFilters,Tabs,TabItem}`. Это два независимых пути резолва одного и того же типа (`parseComponent` для top-level записи, `resolveCompoundPart` для части родителя) — до этой правки они могли дать разный результат и вдвое расходовали бюджет ответа.

`linkCompoundPartDuplicates` (в `buildIndex.ts`, выполняется после `mergeAtomicData` — сравнивать полноту нужно по уже обогащённому top-level пути) для каждой пары `${parent.name}${part.name}`, совпадающей с top-level именем: проставляет top-level записи `compoundPartOf: {component, part}` и синхронизирует `props` в обе стороны — источником истины становится тот путь резолва, что дал больше пропсов (обычно top-level, он полнее проходит цепочку фолбэков, но не всегда — сравнение по факту, не предположение). `get_component` для такой записи не повторяет пропсы — карточка отсылает к `get_component_props({name: parent, part})`; сам `get_component_props` по top-level имени по-прежнему работает и возвращает те же (синхронизированные) данные, плюс `own`/`inherited` разделение, которого нет у compound-part пути.

### 1.7 `resolveImportPath.ts`

`packages/ui-kit/src/index.ts` реэкспортирует ВСЁ (components/formComponents/layouts) единым плоским барелем — проверено напрямую по файлу. Для v1-скоупа путь импорта всегда `@daisforge/ui`, независимо от группы. Сабпасы (`/icons`, `/tokens`) понадобятся только в v1.1.

### 1.8 `synthesizeExample.ts` — `minimalUsage` (T3)

`synthesizeMinimalUsage` генерирует `<Component requiredProp={placeholder} />` из обязательных пропсов — для КАЖДОГО компонента, независимо от того, есть ли у него настоящие примеры. Результат кладётся в отдельное поле записи `minimalUsage`, а не в `examples[]` (до T3 это был единственный "пример" внутри `examples[]` с `type: "synthesized"`). Вынесено намеренно: `exampleTitles: []` в ответе `get_component` теперь честно означает «настоящих примеров нет», а не тратит вызов `get_component_examples` на строку, и так выводимую из `importStatement`.

### 1.8a `collectUsageExamples.ts` — реальные примеры из монорепо (T3)

`ExampleKind` — `'full-code' | 'usage' | 'vendor' | 'args-only'`. `'full-code'`/`'args-only'` приходят из curated Storybook-стори (`mergeMeta.curatedStories`, покрывают часть каталога — Storybook пишут не для всех компонентов). `'usage'` — второй источник: однопроходный грep по остальным пакетам монорепо за реальными JSX-вхождениями, хорош именно потому, что это код, который заведомо компилируется и отражает то, как компонент используют на практике, а не синтетическая заглушка и не изолированная демонстрация. `'vendor'` — третий источник (свои и кросс-файловые сниппеты вендорного снэпшота), см. §1.8b.

Как работает `buildUsageExamples(componentNames)`:

1. **Поисковые корни** — "apps/\*\*, packages/\*\* кроме ui-kit" из формулировки задачи считаются динамически (`fs.readdirSync` по `apps/` и `packages/`, минус `ui-kit` и сам `mcp-server`), не хардкодятся. В этом чекауте физически есть только `packages/storybook` и `packages/vite-project` — `webpack-finportal-platform`/`webpack-project-finalheader` из CLAUDE.md сюда не выкачаны; появятся новые пакеты-потребители — попадут в поиск сами, без правки кода.
2. **Разбор** — сырой TypeScript-компилятор (`ts.createSourceFile`, тот же `ts` из `ts-morph`, что и в `parseComponent.ts`), не общий типизированный `Project` из `tsProject.ts`: нужен только синтаксис (найти JSX), не типы — заводить сотни файлов вне `tsconfig.lib.json` ui-kit в типизированный проект дорого и не нужно для этой задачи.
3. **Фильтр по импортам, не по тексту тега** — для каждого файла сначала собираются его импорты из ui-kit (`@daisforge/ui`, `@daisforge/ui/*`, `@ui-kit/*`, включая alias `import { X as Y }` и `import * as UI from ...`); JSX-тег засчитывается как usage, только если он реально пришёл из такого импорта. Без этого шага `<Container>`/`<Card>`/`<Toast>` — частые имена локальных styled-components в самих Storybook-стори — засчитались бы как использование одноимённых компонентов ui-kit: пример выглядел бы как настоящий, но к пропсам реального компонента отношения не имел бы — шум хуже, чем `synthesized`-заглушка.
4. **Compound-части через dot-notation** — в реальном коде их пишут `<DrawerDF.Content>`/`<ModalDF.Header>`, а не плоским именем `DrawerDFContent`. Если `DrawerDF` импортирован из ui-kit, `<DrawerDF.Content>` резолвится в `DrawerDFContent` — то самое плоское имя, под которым эта compound-часть лежит в индексе как отдельная top-level запись (10 пар, см. §1.6a/T12). Без этой ветки все 10 таких записей были бы обречены на `exampleTitles: []` навсегда — их плоское имя в реальном коде никто не пишет. `<Widget.Header>` (Widget не входит в T12-пары) даёт `WidgetHeader` — не находит совпадения среди известных имён компонента и просто отбрасывается, без ложного срабатывания.
5. **Отбор** — до 2 самых "богатых" (по числу разных атрибутов JSX-тега) вхождений на компонент, по возможности из разных файлов; длинные блоки обрезаются до ~700 символов. `sourceFile` (путь относительно корня монорепо, не абсолютный — абсолютный путь окружения сборки не должен попадать в публикуемый индекс) сохраняется в `ExampleRecord.sourceFile`.

### 1.8b `vendorExamples.ts` — curated-примеры вендоренного снэпшота (T3)

Третий источник, найденный уже после первого прохода T3 — вендоренный снэпшот атомарной команды (`vendor/atomic-mcp-data/**/<atomicBase>.json`, см. §1.6) несёт не только `api.props`, но и собственное поле `examples[]: {title, snippet}` — готовый, curated JSX-код, которым атомарная команда документирует сам атом. 71 из 77 вендоренных файлов (92%) несут непустой `examples[]`, суммарно 440 сниппетов — источник, который `mergeAtomicData.ts` до этой правки читал только частично (`api.props`), полностью игнорируя `examples`.

Пайплайн:

1. `mergeAtomicData.ts` при подмешивании `inheritedProps` заодно копирует `atomicComponent.examples` (без снятых пустых `snippet`) в промежуточное поле `WorkingComponentRecord.vendorExampleSnippets` — сырыми, без переписанного импорта (importPath на этом шаге пайплайна ещё не посчитан, см. §2/`resolveImportPath.ts` выполняется позже).
2. `finalizeVendorExamples(snippets, importPath)` (новый модуль `vendorExamples.ts`) вызывается позже, в `finalizeExamples` (`buildIndex.ts`), когда `importPath` уже известен:
   - **Переписывает импорт** — снэпшот импортирует атом из его настоящего пакета (`from '@salutejs/sdds-finai'`, реже `.../beta`), не из `@daisforge/ui`; без переписывания агент получил бы рабочий на вид, но не собирающийся в контексте ui-kit пример.
   - **Отбор** — до 2 сниппетов, разных по заголовку (снэпшот часто несёт почти дублирующие друг друга вариации — "Пример 1"/"Пример 2" с минимальными отличиями) и по возможности компактных (сортировка по длине текста снизу вверх — длинные "простыни" из десятка склеенных вариаций одного пропса, типичный кейс для `Accordion`, после обрезки менее читаемы, чем короткий сфокусированный пример).
   - Обрезка до ~900 символов (снэпшот — цельные демо-приложения `import ...; export function App() {...}`, чуть длиннее usage-сниппетов).
3. `buildIndex.ts` удаляет `vendorExampleSnippets` из финальной записи после того, как `finalizeExamples` его потребил (по аналогии с `delete record.internalComponentImports` в `classify.ts`, см. `types.ts`) — сырой вендорный формат не должен уйти в публикуемый индекс.

#### `vendorUsageExamples.ts` — кросс-файловый скан того же снэпшота

У части атомов нет собственного файла в `vendor/atomic-mcp-data` вовсе — `mergeAtomicData` для них никогда не резолвит `atomicBase`, значит основной путь выше их не видит в принципе. Типичный случай — compound-части: у `AccordionItem` нет `AccordionItem.json`, зато `Accordion.json` (примеры самого `Accordion`) почти целиком построен вокруг `<AccordionItem>` — все 10 examples в файле его содержат. Реальное использование подкомпонента записано в "чужом" файле — файле его родителя.

`buildVendorUsageIndex(componentNames)` сканирует `examples[].snippet` ВСЕХ вендорных файлов разом (`components/` + `beta/`) тем же приёмом, что `collectUsageExamples.ts` применяет к реальному коду монорепо: разбор через сырой `ts.createSourceFile`, резолв JSX-тега по импортам из `@salutejs/sdds-finai(/beta)` этого же сниппета (включая dot-notation), а не по тексту тега — так `SvgBackground`, локальная функция внутри демо `Card`, не спутается с настоящим компонентом. Сниппеты "родного" файла компонента исключаются (`skipName`) — их уже даёт основной путь выше, дублировать незачем.

`buildIndex.ts` вызывает оба построителя (`buildUsageExamples` из репозитория, `buildVendorUsageIndex` из вендора) один раз на всю сборку и домешивает результат `buildVendorUsageIndex` в `vendorExampleSnippets` ДО `finalizeExamples` — дальше "свои" и "чужие" вендорные сниппеты неотличимы, проходят один и тот же `finalizeVendorExamples` (переписывание импорта, отбор, обрезка).

### Сведение источников и итоговый замер T3

`finalizeExamples` в `buildIndex.ts` не выбирает ОДИН источник по приоритету — собирает примеры из ВСЕХ трёх сразу (curated + usage + vendor, причём `vendor` уже включает и "свои", и кросс-файловые сниппеты), сортирует `full-code → usage → vendor → args-only` (единая точка сортировки — используется и в `get_component.exampleTitles`, и в `get_component_examples`, отдельно сортировать в тулах не нужно) и режет до 4 суммарно (`MAX_TOTAL_EXAMPLES`) — компонент с args-only Storybook-стори вполне может иметь хороший vendor-пример, и наоборот, источники видят разные части каталога.

Замер по проходам (один и тот же прогон индексера, T3 целиком): только `collectUsageExamples` — 56.0% (136/243), ниже целевых 60%. + `vendorExamples.ts` ("свои" вендорные файлы) — 75.3% (183/243), выше цели. + `vendorUsageExamples.ts` (кросс-файловый скан) — **86.0% (209/243)**. `usage`: 207 примеров, `vendor`: 210 (свои + кросс-файловые вместе), `full-code`: 104, `args-only`: 16. Разрыв первого прохода был структурным (нет `webpack-finportal-platform`/`webpack-project-finalheader` из CLAUDE.md в этом чекауте, часть примитивов вроде `Row`/`Card`/`Toast` там реально не используется по имени), а не багом сканера — но вендоренный снэпшот атомов оказался прямо в репозитории, не требовал грепа вообще, и закрыл разрыв с запасом. `.mdx`-документацию (263 файла, 9 импортируют `@daisforge/ui`) по-прежнему не сканируем: `ts.createSourceFile` в recovery-режиме путает JSX в markdown-прозе с настоящими примерами (проверено на `IconSvgSprite/iconSvgSprite.mdx`) — с двумя вендорными источниками в игре необходимость в этом источнике отпала.

### 1.9 `indexFeatures.ts`

Фичи `TableCanvas`/`Table` (46 + 31 шт.) — не вложенный подобъект компонента, а **отдельный плоский список**, доступный поиску наравне с компонентами. Причина: у `TableCanvas` фичи составляют 98.5% payload'а компонента (682 511 из 682 511 символов сырой записи против 9 784 в "корне"), а имена не угадываются (`massPanelAction`, `CanvasElements/CanvasText`). `legacy` пробрасывается с родительского компонента (все фичи `Table` — legacy).

### 1.10 `diagnostics.ts` + `buildIndex.ts`

`diagnostics.ts` печатает терминальную сводку (по аналогии с `generate-meta.js`): количество компонентов/фичей, разбивку по типам, ошибки парсинга, предупреждения (`atomicDataMissing`, пустой `props[]` без `isGeneric`, записи сильно больше бюджета ответа). `buildIndex.ts` — оркестратор: вызывает весь пайплайн по порядку, пишет итоговый `component-index.json` в оба места (bundled + package-режим, если `dist/packages/ui-kit` уже собран).

## 2. Итоговый `component-index.json`

```jsonc
{
  "generatedAt": "...",
  "libVersion": "1.11.0",           // версия ui-kit на момент сборки — для version-mismatch проверки в рантайме
  "components": {
    "<Name>": {
      "name", "group", "type", "category", "description", "hint", "keywords",
      "folderName", "role",              // primary | part | internal, см. §1.4a
      "parentComponent", "relatedExports", // part/internal ↔ владелец папки
      "compoundPartOf",                  // { component, part } — см. §1.6a
      "importPath", "importStatement",
      "deprecated", "deprecationReason", "legacy", "scope",
      "atomicBase", "atomicMcpVersion", "atomicDataMissing",
      "formVariant", "wrappedBy", "wrapsInternal",
      "props": [...], "inheritedProps": [...],
      "propsTypeName", "rawType", "isGeneric",
      "compoundParts": [{ "name", "props", ... }],
      "examples": [{ "exportName", "displayName", "type", "code", "sourceFile" }], // type: full-code|usage|vendor|args-only, до 4 суммарно; sourceFile только у usage (T3)
      "minimalUsage",                    // синтетическая заглушка из required-пропсов, есть всегда (T3, §1.8)
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

## 3. Распространение индекса и рантайм-резолв (`resolveIndex.ts`)

Сервер обязан работать у любого потребителя, включая тех, кто сидит на версии `@daisforge/ui`, опубликованной **до** появления mcp-data (то есть сейчас — все версии). Три уровня, от точного к запасному:

1. **workspace** — если физически рядом (`../ui-kit/package.json` относительно самого `resolveIndex.ts`) лежит `packages/ui-kit` → мы внутри монорепо dais/ui, читаем свежесобранный локальный индекс.
2. **installed** — `require.resolve('@daisforge/ui/mcp-data/component-index.json')` относительно `process.cwd()` потребителя (не относительно нашего пакета!). Сработает только для версий `@daisforge/ui`, уже содержащих `mcp-data` (появится после первой публикации с этим MCP).
3. **bundled** — запасной индекс, вшитый в сам `@daisforge/ui-mcp` (`data/component-index.json`, тот же файл, что и workspace-режим, но семантически означает "библиотека либо старая, либо не установлена"). Сравнивает `libVersion` из индекса с реально установленной версией `@daisforge/ui` (если есть) — при несовпадении или отсутствии добавляет `dataVersionNotice`/`libNotInstalled` в каждый ответ инструмента.

Все три уровня протестированы вживую (см. историю сессии): реальный сценарий "`@daisforge/ui` не установлен вовсе" — сервер не падает, отдаёт `bundled`-индекс и корректно предупреждает агента, что стоит вызвать `get_installation_guide`.

## 4. MCP-сервер и инструменты (`server.ts` + `src/tools/`)

Транспорт — stdio (`@modelcontextprotocol/sdk`). Каждый инструмент — чистая функция `(index, args) → payload`, сервер оборачивает результат через `truncate.ts` перед отправкой.

| Инструмент | Назначение |
|---|---|
| `list_components({type?, category?, scope?, role?, limit?, offset?})` | список с фильтрами; по умолчанию `role: "primary"` (~177 из 243, см. §1.4a), `role: "all"` снимает фильтр; ответ `{items, shown, total, hasMore?, truncationNotice?}` |
| `search_components({query, limit?})` | скоринг по компонентам И фичам, legacy- и internal-демоушен, negation-aware матчинг (см. ниже) |
| `get_component({name})` | **компактная** карточка — без полных доков, без тел примеров; у `part`/`internal` — `parentComponent`; у владельца папки — `relatedExports`; у compound-part дубликатов (§1.6a) — `compoundPartOf` вместо повторных пропсов |
| `get_component_props({name, part?})` | полные пропсы: own + inheritedProps; `part` — для compound-частей |
| `get_component_examples({name, title?})` | примеры кода |
| `list_features({component})` | список фичей компонента |
| `get_feature({component, feature})` | доки+API одной фичи (без тел примеров) |
| `get_feature_examples({component, feature, title?})` | примеры кода конкретной фичи |
| `list_categories()` | категории с разбивкой по типам |
| `get_installation_guide()` | гайд по установке из `guides.installation` |

`shared.ts` — общие хелперы резолва (`findComponent`, `findFeature` — регистронезависимо, с поддержкой вложенных путей вроде `CanvasElements/CanvasText`).

### 4.1 Бюджет ответа (`truncate.ts`)

Замер: сырая запись `TableCanvas` в старом `components-meta.json` — 682 511 символов (~170k токенов), при медиане ~11k. Поэтому:

- `get_component` возвращает только компактные поля (имена пропсов в одну строку, заголовки примеров, список фичей) — детали через `get_component_props`/`get_component_examples`/`list_features`. У широких API `ownProps` — не полный список: только required-пропсы плюс до 10 необязательных с описанием (не deprecated); реальное число собственных пропсов — в `ownPropsCount`, а `nextSteps` явно называет, сколько показано из скольких. Текст типа в `ownProps` клипается до 80 символов — длинные union-литералы карточке не нужны. Замер после этой правки: медиана карточки ~500 символов, максимум (`FormDatePickerRange`) — 2637 (было — вся строка пропсов без отбора, до ~20k у самых широких компонентов);
- фичи не инлайнятся в карточку компонента вообще — отдельные инструменты;
- списочные ответы (сейчас — `list_components`) бюджетируются **поэлементно** через `truncateList(items, budget)`: сериализует кандидатов один за другим и добирает элементы, пока итоговый JSON помещается в бюджет, возвращая `{items, shown, total, truncationNotice?}` — никогда не режет элемент пополам. Раньше `truncateForResponse` резал уже сериализованную строку по символу, из-за чего `list_components({})` отдавал синтаксически битый JSON (терялось до 20 из 243 компонентов без предупреждения);
- `truncateForResponse` остался последним рубежом для остальных (нелистовых) payload'ов: если конкретный ответ всё равно превышает ~25k символов, оборачивает в `{truncated, totalChars, notice, raw}` и обрезает бинарным поиском **значение поля `raw`**, а не готовую JSON-строку, — экранирование спецсимволов внутри `raw` может раздуть длину сильнее одного вычитания overhead, поэтому размер результата подбирается, а не считается заранее. Итог всегда валиден и укладывается в бюджет.
- **T2 (заполнение description/category у 100% каталога) заметно подняло давление на этот бюджет.** До T2 `list_components({})` укладывал почти весь отфильтрованный список в один ответ (у большинства компонентов `description`/`category` были пустыми). После T2 (все 177 `primary`-записей несут непустые `description`+`category`) полный список весит ~36k символов при бюджете 25k — `truncateList` показывает ~120 из 177 за один вызов без фильтров, честно сообщая `total`/`hasMore`/`truncationNotice`. Это ожидаемое поведение спроектированного в T1 механизма деградации, не регрессия: `keywords` в `ComponentSummary` намеренно НЕ включены (в отличие от `get_component`/`search_components`) именно чтобы не давить на бюджет ещё сильнее — они не несут дополнительной пользы для беглого просмотра списка (description уже человекочитаемо описывает то же самое), а нужны только скорингу `search_components`.

### 4.2 Поиск (`searchComponents.ts`)

Простой substring-скоринг (без embeddings/NLP), но с двумя нетривиальными поправками, найденными вживую при тестировании:

- **Мультипликативный, а не аддитивный legacy-штраф** (`score *= 0.6`, не `score -= 12`) — иначе единственное совпадение по редкому термину (`"react-data-grid"` встречается только у `Table`) гасилось штрафом до нуля, и legacy-компонент, который единственно верный ответ, исчезал из выдачи целиком. Тот же приём и с тем же коэффициентом — для `role: "internal"` (см. §1.4a): по роли не фильтруем (агент может целенаправленно искать `ModalDFHeader`), но `CanvasRect` не должен обгонять реальные кандидаты при равном текстовом совпадении.
- **Negation-aware матчинг** для `hint`/`description` — курированные тексты иногда пишутся как явное опровержение (`AnalyticalWidget.hint`: "Это layout, **не** фильтрация"). Наивное совпадение подстроки засчитало бы запрос "фильтрация" как позитивный сигнал ровно наоборот. Проверяется, не стоит ли "не " непосредственно перед совпадением.
- Точное совпадение слова с именем компонента даёт +100 (перевешивает legacy-штраф) — поэтому `"Table сортировка"` всё равно ставит `Table` выше `TableCanvas`, несмотря на то, что оба имени содержат подстроку "table".
- **`keywords`** (T2, 2-4 синонима задачи на компонент) скорятся тем же `includesPositively` весом, что и `hint` (+20) — они и покрывают именно тот разрыв, из-за которого до T2 поиск по русским словам-заменителям имени работал плохо (`"тултип"` для `Tooltip`, `"автокомплит"` для `Autocomplete`, `"пагинация"` для `Pagination` — ни разу не встречались в самом имени компонента латиницей). Даже с `keywords` совпадение по точному имени (+100) может перевешивать: запрос `"date range"` ставит атом `Range` (числовой диапазон "от-до", точное совпадение слова "range") выше `DatePickerRange` (только частичное совпадение имени + keywords) — оба в топ-3, но не в ожидаемом порядке; это ограничение модели скоринга, не контента, и не within T2 scope чинить веса.

## 5. Известные ограничения (см. также README.md)

- Иконки/токены/миксины/утилиты не проиндексированы — сознательная граница v1.
- `get_installation_guide` содержит устаревшее имя пакета (`@sber-digital-finance-ui/ui-kit`) — проблема в самом курированном `_docs/meta/components-meta.json`, не в индексере.
- Три пары внутренних sub-компонентов с одинаковым именем в разных папках таблиц (`TableFilterSelectListItem`, `ContainerStyled`, `Canvas`) — при коллизии в индекс попадает только последняя обработанная запись.
- Поиск слабее на общих словах, которые встречаются во многих фичах одновременно (например "ячеек").
- `atomicDataMissing: true` — часть compound-частей атомарных компонентов не имеет отдельной записи в вендоренном снэпшоте (их доки организованы по родительской странице, не по каждому именованному экспорту).
- У 3 compound-частей (`DrawerDF.Header.badge`, `DrawerDF.DotsIconButton.dropdownProps`, `FiltersActions.DotsIconButton.dropdownProps`) текст типа — нечитаемый вложенный `Omit<Omit<PropsType<...`. Это не провал резолва (`resolveCompoundPart` находит декларацию штатно, `tryExtractViaComponentProps`-фолбэк из T13 тут не участвует) — сам исходный тип поля (`badge?: (BadgeCompProps & { text: string }) | undefined`) генуинно сложный, и принтер TypeScript теряет имя вложенного алиаса при печати вычисленного типа intersection. Требует отдельной правки печати типа (например `type.getText(node, ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope)`), не относится к T13.
- `src/validate/validateIndex.ts` на текущем индексе **не проходит начисто** и до T11–T14 (baseline: 1 import-missing + 226 prop-not-found + 195 required-mismatch, не считая generic best-effort) — большинство расхождений сосредоточено в нескольких компонентах со сложными полиморфными типами (`Box`, `ModalDFConfirmationFooter`, `Spinner`, `TooltipList`, семья `FiltersActions.*`), где `required`-флаг, вычисленный при разборе объявленного типа, расходится с тем, что вычисляет тайпчекер для `ComponentProps<typeof X>` реального экспорта. T14 сократил REQUIRED-MISMATCH на 19 (195→176); T12 (синхронизация compound-part дублей) распространяет уже существующую неточность `resolveCompoundPart`-пути на 1 дополнительную пару (`FiltersActionsTabs`/`FiltersActionsTabItem`, +20) — сознательный компромисс: пропсы стали полнее и консистентнее между обоими путями резолва, а `required`-неточность для этой конкретной пары была в индексе и раньше (просто непроверяемой на top-level имени). Устранение самой неточности — отдельная задача, не T11–T14. T2 (description/category/keywords) props не трогает — baseline после T2 не изменился по существу (196 required-mismatch, разница в 1 от естественного дрейфа исходников ui-kit между прогонами).
- **`list_components({})` без фильтров показывает ~120 из 177 `primary`-компонентов, не все** — прямое следствие T2 (см. §4.1): с непустыми `description`+`category` у 100% каталога полный список не помещается в бюджет ответа за один вызов. Не баг — `truncationNotice`/`hasMore` явно сообщают остаток и путь пагинации (`limit`/`offset`), это тот самый механизм, который T1 спроектировал для этого случая.
- **`usage`-примеры (T3) сами по себе ограничены составом чекаута** — `collectUsageExamples.ts` (§1.8a) находит реальные JSX-вхождения только в `packages/storybook` и `packages/vite-project`; `webpack-finportal-platform`/`webpack-project-finalheader` из CLAUDE.md сюда не выкачаны. В одиночку этот источник даёт 56.0% (136/243) — ниже целевых 60% из TASKS.md T3. Итоговая доля после подключения вендорных источников (`vendorExamples.ts` + `vendorUsageExamples.ts`, §1.8b) — **86.0% (209/243)**, выше цели; ограничение осталось только у `usage` как источника самого по себе, не у T3 в целом.

## 6. Как обновлять

```bash
npm run meta                 # regenerate _docs/meta/components-meta.json из meta-config.json (только если правили meta-config.json)
npm run mcp:build-index      # пересобрать индекс из текущего исходника ui-kit
npm run mcp:vendor-atomic -- --source <путь-к-их-mcpData>   # обновить снэпшот атомарных пропсов
npm run mcp:start            # запустить сервер локально (stdio)
```

`mcp:build-index` автоматически входит в корневой `postbuild` (после `npm run build`). `npm run meta` — отдельный шаг, руками, только когда менялся `generators/meta-info/config/meta-config.json` (правки в `packages/mcp-server/vendor/atomic-curated-meta.json`, наоборот, читаются напрямую и `npm run meta` не касаются).
