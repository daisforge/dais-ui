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
- **Compound-части** — ищутся в файле, где компонент объявлен, через AST, по двум реально живущим в ui-kit паттернам: (1) статическое присваивание `Component.Sub = LocalName;` (`BinaryExpression` + `PropertyAccessExpression`) — `DrawerDF`/`AnalyticalWidget`/`LeftPanel`/`MassActions`/`TableTabs`/`Stories`/`FiltersActions`; (2) `export const Component = Object.assign(ComponentWithRef, { Sub: Local, … })` (`CallExpression` с `Object.assign`, чей результат присваивается переменной с именем компонента; разбираются и обычные, и сокращённые свойства) — `ModalDF`, `PopoverDF`, `PopupDF`, `ModalDFConfirmation`, `Widget`, `TourWidget`, `GridDND`. **До поддержки второго паттерна** эти семь записей отдавали агенту `compoundParts: []` и `minimalUsage: "<ModalDF />"` — то есть ровно те флагманские compound-обёртки, которые CLAUDE.md приводит как эталон паттерна, выглядели в индексе как компоненты без частей (что и подтвердил лог реального прогона агента на потребительском проекте: части `ModalDF.Left/Main/Content` он восстанавливал из `relatedExports` и текста примера). Локальное имя части резолвится не только среди экспортов barrel'а, но и напрямую от идентификатора (`resolveIdentifierDeclaration`, со снятием алиаса импорта) — barrel часто экспортирует часть под ДРУГИМ именем (`StyledLeft` → `ModalDFLeft`), и без этого фолбэка часть осталась бы без пропсов. `resolveCompoundPart` — та же цепочка фолбэков, что и у top-level компонента (`findPropsDeclaration` → `findLocalTypeDeclaration` → `findPropsDeclFromSignature`), плюс тот же финальный `tryExtractViaComponentProps(localDecl)` последним звеном: без него часть compound-подкомпонентов (реэкспорты из `@salutejs/sdds-finai` без инициализатора, откуда неоткуда взять параметр render-функции) откатывались на сырой текст типа — до 400 символов нечитаемого `((((Omit<Omit<...` вместо разобранных полей.
- **JSDoc** — описание, `@deprecated`/причина — с самой декларации компонента.
- **Дефолты (`default`, T6)** — два источника, own-пропс получает первое найденное: (1) деструктуризация первого параметра render-функции самого компонента (`collectDestructuringDefaults` — `({ size = 'm', ...rest }: Props) => …`, включая `forwardRef`/`memo`-обёртки через тот же `unwrapToRenderFunction`, что и у `findPropsDeclFromSignature`; ключ — имя ПРОПСА, т.е. `propertyName`, если есть переименование `{ size: sizeProp = 'm' }`, а не локальное имя переменной); (2) тег `@default` в JSDoc самого пропса (`getJsDocDefault`), как фолбэк. Для compound-частей дефолты читаются из render-функции ЭТОЙ части (`localDecl`), не родителя. Замер: 8.3% own-пропсов (279/3358) — заметно ниже изначально предполагавшихся 25%; структурная причина — оба источника требуют, чтобы компонент либо деструктурировал пропс в самом параметре (не в теле функции — такой паттерн, `const { x } = props` внутри тела, встречается в кодовой базе редко, ~6 файлов, и не покрывается намеренно, задача называла именно деструктуризацию параметра основным источником), либо нёс JSDoc `@default` (207 вхождений по всей `ui-kit/src`, но заметная часть — на полях ВЛОЖЕННЫХ inline-объектных типов вроде `SplitViewProps.sidebar.isOpened`, которые `extractPropsFromType` не разворачивает — это осознанное ограничение, то же самое, что не разворачивает описания вложенных типов вообще). Пустая строка не сохраняется никогда — `default` либо отсутствует, либо содержит непустой текст (клип до 60 символов).
- **Сортировка own props[] (T7)** — при сборке (`sortProps`, вызывается из `extractPropsFromType`) пропсы упорядочены в 4 яруса: `required` → с описанием → без описания → `deprecated` (последний ярус переопределяет `required` — устаревший обязательный пропс всё равно уходит в хвост). Внутри яруса: сначала объявленные в том же файле, что и сам тип пропсов (own-file, см. `isOwnFileDeclaration` — сохраняет более раннее решение проблемы `DrawerDF.Header`, где CSS/layout-пропсы `BoxProps` иначе съедали лимит раньше `title`/`subTitle`), затем по алфавиту. Та же сортировка (без яруса `deprecated`, которого нет у `AtomicPropRecord`) применяется к `inheritedProps[]` в `mergeAtomicData.ts` (`sortInheritedProps`).
- **Фильтр описаний-шума (T7)** — `isReactDomDescription` (в `htmlAttributeDenylist.ts`, тот же probe-файл `AllHTMLAttributes & AriaAttributes & DOMAttributes`, что и `isNoiseProp`, но собирает JSDoc-описания вместо текста типа) обнуляет `description`, если она дословно совпадает с React DOM-документацией того же имени. Нужен отдельно от `isNoiseProp`: пропсы вроде `role`/`tabIndex`/`color` дизайн-система переопределяет по ТИПУ и проходят фильтр шума, но их описание иногда остаётся нетронутым унаследованным React-текстом ("Indicates the current…").

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

Читает `_docs/meta/components-meta.json`. Там, где компонент присутствует, поля `category`/`type`/`description`/`hint`/`keywords`/`scope`/`docs`/`apiDocs`/`stories`/`supersededBy`/`chooseWhen`/`gotchas` (T9) **перекрывают** эвристику индексера (curated wins over heuristic). Также:

- переносит `pages["Установка и использование"]` как есть в `guides.installation` (без нового парсинга — переиспользование уже сгенерированного контента);
- детектит `legacy: true` по вхождению "устаревш" в hint/description curated-текста — принципиальная проверка по смыслу, а не хардкод конкретного имени компонента (сейчас единственный кейс — `Table`).

**`_docs/meta/components-meta.json` — build-артефакт, не редактируемый файл.** Он полностью перезаписывается скриптом `generators/meta-info/generate-meta.js` (`npm run meta`) из конфига `generators/meta-info/config/meta-config.json` (поле `components`). Ручные правки в `_docs/meta/components-meta.json` теряются при следующем `npm run meta` — это едва не привело к порче T11-оверрайдов `role` (см. §1.4a); правки нужно вносить **только** в `meta-config.json`.

До T2 `meta-config.json` покрывал 36 из 265+ компонентов — только те, у кого есть собственный код в `ui-kit` и (в целевом сценарии) страница в Storybook. T2 расширил покрытие до 126 (все компоненты с собственной реализацией, включая ~85 без Storybook-страницы) и добавил в схему `keywords`/`role`. Резолвер `resolveComponent.js` до T2 требовал папку `packages/storybook/src/stories/<Name>/` — при её отсутствии компонент тихо выпадал из вывода (скрытый баг: `resolveSimpleComponent`/`resolveComplexComponent` возвращали `null`, но `{type: 'simple', ...null}` в `resolveComponent()` даёт truthy `{type: 'simple'}`, `processSimpleComponent` падал на `for (const mdxPath of resolved.docsMdx)` — TypeError гасился try/catch в главном цикле генератора). T2 поменял `null` на минимальную запись с пустыми `docsMdx/apiMdx/storyFiles` — компонент без Storybook-страницы теперь получает `category`/`description`/`keywords` из конфига, но пустой `docs`/`api`/`stories` (только `console.warn`, не потеря записи).

### 1.5a `mergeAtomicCuratedMeta.ts` — второй curated-источник (T2)

117 из 243 компонентов — чистые реэкспорты атомов `@salutejs/sdds-finai` (`export { X } from '@salutejs/sdds-finai'`), без единой строчки собственного кода и без Storybook-страницы. `meta-config.json`/`generate-meta.js` для них принципиально бесполезны — резолвятся по папке в `ui-kit`/Storybook, которой у чистых реэкспортов просто нет что описывать помимо самого факта реэкспорта.

Для этих 117 — отдельный курируемый файл **`packages/mcp-server/vendor/atomic-curated-meta.json`** (`{ components: { <Name>: { description, category, keywords, supersededBy?, chooseWhen?, gotchas? } } }`), НЕ проходящий через `generators/meta-info` вообще. `mergeAtomicCuratedMeta.ts` читает его напрямую (аналогично `mergeMeta.ts`, тот же паттерн `curated wins`) и выполняется в `buildIndex.ts` сразу после `mergeMeta`, до `linkFolderRoles`.

Единственный практический источник контента при курировании этого файла — вендоренный снэпшот атомарки (`vendor/atomic-mcp-data/**/*.json`, поле `summary`) и `inheritedProps`; сам `summary` неровный (то голое имя компонента без содержания — `"Switch"`, `"Tooltip"` — то избыточный технический текст за 100-символьный лимит) и не годится как автоматический фолбэк в коде — описания в `atomic-curated-meta.json` написаны вручную по этому материалу, не скопированы напрямую.

Название файла (`atomic-curated-meta.json`) намеренно похоже на `atomic-mcp-data/` — оба про атомарные компоненты — но это два независимых по происхождению файла: `atomic-mcp-data/` — вендоренный (внешний) снэпшот пропсов, обновляется через `mcp:vendor-atomic --source`; `atomic-curated-meta.json` — наш собственный курированный текст, правится вручную и не перезаписывается никаким внешним генератором.

### 1.5b `supersededBy`/`chooseWhen`/`gotchas` — правила выбора между конкурирующими компонентами (T9)

Библиотека держит несколько компонентов на одну задачу одновременно (legacy vs актуальный, wrapper vs form-обвязка, stable vs beta) — `legacy: true` (T2, `detectLegacy`) говорит только «этот не бери», не говорит «а бери вот этот». `supersededBy?: string` и `chooseWhen?: string` добавлены в `ComponentMeta`/`AtomicCuratedMetaEntry`/`ComponentRecord` (курируются точно так же, как `hint`/`keywords` — в `meta-config.json` для компонентов с собственным кодом, в `atomic-curated-meta.json` для чистых реэкспортов) и отдаются в `get_component` и `search_components` — именно там агент выбирает.

Заполнено для трёх реальных конкурирующих групп (34 компонента), проверенных на факте импорта из `packages/ui-kit/src/index.ts`, а не по названию/описанию:

- **`Table` (legacy) → `TableCanvas`** — `supersededBy` у `Table`, `chooseWhen` у обоих.
- **14 form-пар** (`Autocomplete`/`FormAutocomplete`, `Select`/`FormSelect` и т.д., 28 компонентов) — `chooseWhen` формулирует единый для всех пар критерий: вне react-hook-form (value/onChange) vs внутри формы на react-hook-form (name/control/rules), см. CLAUDE.md §5.
- **2 stable/beta-пары** (`Popover`/`PopoverBeta`, `Tooltip`/`TooltipBeta`) — `chooseWhen` разводит по конкретной возможности (ресайз/портал/явный триггер), а не просто «beta новее».

**Важная поправка, обнаруженная при исполнении**: изначальный список кандидатов из постановки задачи (`Table`, `TableCanvas`, `TableGlide`, `TableGlideInstance`, `DataEditor`) — неполный и частично неверный. Проверка `packages/ui-kit/src/index.ts` показала: `DataEditor` не экспортируется из ui-kit вообще (это тип из `@glideappsfinal/glide-data-grid`, используется только для тайпинга рефов внутри `TableGlide`/`TableCanvas` — то, что индекс до этой находки показывал ему `importPath: '@daisforge/ui'`, оказалось ложным срабатыванием `resolveImportPath` на несуществующем экспорте, отдельный баг индексера, не входящий в T9); `TableGlideInstance` — тоже не экспортируется из корня, только глубоко внутри `TableCanvas` как адаптер/тип рефа; `TableGlide` технически достижим глубоким импортом (`@daisforge/ui/components/TableGlide`), но не из корневого barrel. `TableContract` и `TableSDDS` из корня реально экспортируются, но по итоговому решению не включены в группу выбора — не целевые для типового выбора агента компоненты. В группу остались только `Table`/`TableCanvas` — оба фигурируют в CLAUDE.md как явная рекомендация команды.

**`gotchas?: string[]`** (T9, п.4) в схему добавлен (типы/мёрдж/выдача готовы), но контентом сознательно не заполнен в этом заходе — это самый нестрогий пункт постановки («не для всех, а только там, где ошибка реально частая», не входит в критерий приёмки), и после находки про `DataEditor`/`TableGlideInstance` каждое утверждение здесь требует такой же проверки по коду, что кратно дороже `chooseWhen`. Задел для будущего заполнения.

### 1.6 Атомарные данные — вендоринг (`vendorAtomicData.ts` + `mergeAtomicData.ts`)

Их MCP (`@salutejs/sdds-mcp`) сам работает поверх статического JSON-бандла, который генерирует скрипт `generate-mcp-data` в репозитории `plasma/website/sdds-finai-docs` (схема на компонент: `{name, package, category, summary, api:{props}, examples}`). Вместо подключения к их MCP как к живому процессу — **разово вендорим тот же JSON** к себе:

- `vendorAtomicData.ts --source <путь-к-их-mcpData>` копирует `manifest.json` + `components/*.json` в `packages/mcp-server/vendor/atomic-mcp-data/` (закоммиченный снэпшот, обновляется вручную).
- `mergeAtomicData.ts` — для каждого компонента с `atomicBase` ищет соответствующий файл в снэпшоте, кладёт его `api.props` как `inheritedProps[]` (с `inheritedFrom`/`inheritedPackage`), и убирает из собственных `props[]` те поля, что уже есть в `inheritedProps` (дедуп — иначе у чистых реэкспортов типа `Button`/`Accordion` весь список пропсов дублировался бы дважды). Если снэпшота для конкретного атома нет — `atomicDataMissing: true`, без падения сборки (часть compound-частей вроде `DrawerHeader`/`DrawerFooter` не имеет отдельной страницы в их доках — API организовано внутри родительской `Drawer`).

**Вендор — источник списка пропсов и чистых текстов типов, не источник описаний.** Замер на снэпшоте: `description`/`default` заполнены пустой строкой у 100% вендоренных пропсов, `required: true` не встречается вовсе — их `PropsTable`-генератор кладёт в текст только `{name, type}` (см. `generateIndexFiles.mjs` в `plasma/website/sdds-finai-docs`). Собственный резолв через ts-morph (own `props[]`, до дедупа) при этом часто ЗНАЕТ описание и настоящий `required` — тот же тип уже резолвился при разборе wrapper-компонента. Поэтому дедуп при совпадении имени — не "own проигрывает и выкидывается", а пополевой мёрдж (`mergeWithOwn`): `description`/`required` берёт own (непустое значение побеждает), список пропсов и текст типа — вендор. Пустые `description: ""`/`default: ""` из вендора не сохраняются вовсе (`dropEmptyStrings`) — оба поля в `AtomicPropRecord`/`InheritedPropRecord` опциональны именно из-за этого: отсутствие поля ≠ пустая строка, которую агент читал бы как содержательный (пустой) дефолт.

### 1.6a `linkCompoundPartDuplicates` (дедуп compound-частей)

10 записей в индексе присутствуют одновременно и как top-level компонент, и как элемент `compoundParts` родителя: `DrawerDF/{Content,Header,Footer}`, `MassActions/Counter`, `Stories/Preview`, `FiltersActions/{FiltersButton,DotsIconButton,ListOfFilters,Tabs,TabItem}`. Это два независимых пути резолва одного и того же типа (`parseComponent` для top-level записи, `resolveCompoundPart` для части родителя) — до этой правки они могли дать разный результат и вдвое расходовали бюджет ответа.

`linkCompoundPartDuplicates` (в `buildIndex.ts`, выполняется после `mergeAtomicData` — сравнивать полноту нужно по уже обогащённому top-level пути) для каждой пары `${parent.name}${part.name}`, совпадающей с top-level именем: проставляет top-level записи `compoundPartOf: {component, part}` и синхронизирует `props` в обе стороны — источником истины становится тот путь резолва, что дал больше пропсов (обычно top-level, он полнее проходит цепочку фолбэков, но не всегда — сравнение по факту, не предположение). `get_component` для такой записи не повторяет пропсы — карточка отсылает к `get_component_props({name: parent, part})`; сам `get_component_props` по top-level имени по-прежнему работает и возвращает те же (синхронизированные) данные, плюс `own`/`inherited` разделение, которого нет у compound-part пути.

### 1.6b Снэпшот — один файл на СТРАНИЦУ доков, не на атом (T15)

`mergeAtomicData` ищет файл `vendor/atomic-mcp-data/components/<atomicBase>.json`, то есть предполагает «один файл на атом». Снэпшот устроен иначе — **один файл на страницу документации**, и в `api.props` попадает только ПЕРВАЯ таблица пропсов этой страницы (`extractProps` в их `generateMcpData/index.ts` берёт первый JSON-массив после первого вхождения слова `Props` в тексте страницы). Замер по исходным докам (`plasma/website/sdds-finai-docs/docs/**`): **87 таблиц `<PropsTable name="…">` на 72 страницы `components/` + 2 `beta/`**. Отсюда два следствия.

**1. 14 таблиц в снэпшот не попадают вовсе** — те, что на своей странице не первые: `AccordionItem` (страница `Accordion`), `CalendarBase`/`CalendarDouble`/`CalendarBaseRange`/`CalendarDoubleRange` (`Calendar`), `Col` (`Grid`), `DatePickerRange` (`DatePicker`), `ListItem` (`List`), `NotificationsProvider` (`Notification`), `SegmentItem` (`Segment`), `RectSkeleton`/`TextSkeleton` (`Skeleton`), `TabItem`/`TabsController` (`Tabs`). Подмешать их нашим кодом невозможно — в вендоренном JSON этих данных физически нет; закроется только перегенерацией снэпшота с исправленным `extractProps` (разбирать ВСЕ таблицы страницы, раскладывая их по именам из `PropsTable name="…"`, которые уже присутствуют в тексте `index.json`: `Props (свойства) для компонента <Name>: [...]`). Список зафиксирован в коде — `ATOMIC_TABLE_ON_PARENT_PAGE` (`mergeAtomicData.ts`), диагностика сборки помечает такие дыры как ожидаемые, чтобы новая дыра после очередного перевендоринга не потерялась среди известных.

**2. Файл назван по странице, а не по атому первой таблицы** — у двух страниц это разные имена, и файл несёт пропсы НЕ одноимённого с ним атома:

| Файл снэпшота | Чьи пропсы на самом деле | Проверка |
|---|---|---|
| `components/Segment.json` | `SegmentGroup` (таблицы `Segment` на странице нет вовсе) | 9 из 10 пропсов совпадают с own-резолвом `SegmentGroup`; десятый, `disabled`, — реальная вариация `SegmentGroup` в установленном `@salutejs/sdds-finai` (подтверждено тайпчекером: `validateIndex` не дал новой диагностики) |
| `components/Skeleton.json` | `LineSkeleton` | 8 из 8 пропсов совпадают с own-резолвом `LineSkeleton` |

Это единственная часть T15, которую можно было закрыть на нашей стороне: `ATOMIC_PAGE_FILE_BY_BASE` (`SegmentGroup → Segment`, `LineSkeleton → Skeleton`) плюс обратный запрет `PAGE_FILES_OF_OTHER_ATOM` — резолвить `Segment.json`/`Skeleton.json` по совпадению с `atomicBase` нельзя. Сейчас ui-kit ни `Segment`, ни `Skeleton` не экспортирует, но если начнёт — эти записи молча получили бы пропсы чужого атома как свои; отсутствие вендорных данных честнее подмешанных чужих. В `beta/` разметка не нужна: там первая таблица страницы (`PopoverBeta`/`TooltipBeta` в терминах docgen) документирует ровно тот атом, что beta-пакет экспортирует под именем страницы.

Итог правки: `atomicDataMissing` — **37 → 35** записей, `inheritedProps` — 77 → 79, ни один компонент не потерял ни пропса, ни описания (сверено пофамильно с индексом из предыдущего коммита), `validateIndex` — те же 555/432 диагностики.

**Почему сами вендорные списки пропсов уже́е собственного резолва** (и почему это не потеря): их `PropsTable` безусловно выкидывает `forwardedAs`/`as`/`theme`/`ref` и всё, чей `parent.fileName` из `@types/react`, плюс постранично снимает лишнее атрибутом (`<PropsTable name="SegmentItem" exclude={['css','filledBackground','disabled']} />`). Own-пропсы, которых нет в вендорном списке, остаются в `props[]` как есть — дедуп идёт только по совпадению имён (см. §1.6).

**Перегенерация снэпшота (основной пункт T15) — сделана.** Раньше шаг был заблокирован: `generate-mcp-data` двухступенчатый (читает `index.json` от `generate-index`, а тот берёт каждую `<PropsTable name="X">` из `.docusaurus/docusaurus-plugin-react-docgen-typescript/default/X.json` — артефакта сборки docusaurus), а в доступных локально чекаутах доков не было ни `node_modules`, ни `.docusaurus`, и сам plasma стоял на `sdds-finai@0.336.0-dev.0` — прогон по тому, что есть, дал бы снэпшот беднее текущего.

В `plasma/website/sdds-finai-docs/mcpData` появился свежесобранный бандл под `sdds-finai@0.355.0`, и снэпшот перевендорен с него: **`0.349.0 → 0.355.0`**, 74 компонента + 4 beta (новая страница — `Rating`), `atomicDataMissing` 35 → 34, суммарно `inheritedProps` 1745 → 1766, `validateIndex` — ни одной новой диагностики.

Осталась открытой только первая часть T15 (`extractProps` берёт со страницы одну таблицу — 14 таблиц не попадают в снэпшот в принципе): она чинится на стороне атомарной команды, перевендоринг сам по себе её не закрывает. Отдельно держим в голове перекос версий: снэпшот теперь `0.355.0`, а установленный в монорепо атом — `0.351.0`; пропсы, появившиеся между этими версиями, индекс покажет раньше, чем они реально приедут потребителю.

### 1.7 `resolveImportPath.ts`

`packages/ui-kit/src/index.ts` реэкспортирует ВСЁ (components/formComponents/layouts) единым плоским барелем — проверено напрямую по файлу. Для v1-скоупа путь импорта всегда `@daisforge/ui`, независимо от группы. Сабпасы (`/icons`, `/tokens`) понадобятся только в v1.1.

`resolveTypeImport` — отдельная ветка для ТИПОВ, и разница принципиальная. У компонента фолбэк на сабпас (`@daisforge/ui/components/TableCanvas`) всегда попадает в цель: компонент на то и компонент, что экспортирован. Среди типов же — особенно после транзитивного раскрытия (§1.7a) — полно внутренних (`ColumnDefaultOmitted`, `KeyText`, 184 записи из 426): для них тот же фолбэк синтезировал бы `import`, который не соберётся. Поэтому экспорт проверяется по факту — сначала у корневого барреля, затем у барреля папки компонента, оба раза со сверкой файла декларации (тёзок в TableCanvas хватает) — и, если тип не экспортирован ниоткуда, запись получает `internal: true` и `importNotice` вместо выдуманного `importStatement`.

### 1.7a Транзитивное раскрытие типов (`expandCollectedTypeRefs`)

Изначально индексировались только типы, прямо названные в пропсах, без рекурсии в их тело — 51 запись. На практике агент упирался в первый же переход вглубь: `get_component_props(TableCanvas)` → `ColumnConfig` (есть) → `ContentFormat`/`CellInfo`/`CellContent`/`ColumnDefaultOmitted` (нет ни одного). В реальном логе это дало шесть промахов `get_type` подряд, после чего агент ушёл читать `node_modules` руками — то есть перестал считать MCP источником правды.

`expandCollectedTypeRefs(depth)` идёт по AST деклараций (`TypeReference`), а не по вычисленным типам: ссылки на именованные типы видны в тексте объявления как есть, без разворачивания структуры, которое для типов масштаба `ColumnConfig` стоит секунды на каждый. Фронтир двигается только по ВПЕРВЫЕ записанным декларациям — иначе взаимно ссылающиеся типы (в TableCanvas таких достаточно) зациклят обход.

Вторая точка старта — декларации типов пропсов (`TableCanvasProps`). Сам такой тип в индекс типов не идёт (он развёрнут в `props[]`), но именно в его тексте написаны ссылки, которые тайпчекер к моменту печати пропса уже потерял: `tableConfig` печатается развёрнутой структурой, потому что `TableConfig<Row, SummRow>` — инстанцированный дженерик без alias-символа. Без этой точки старта `TableConfig`/`ColumnsGroupingConfig`/`CellsSelectionConfig` — публичные экспортированные типы, без которых `tableConfig` не сконфигурировать — в индекс не попадали вовсе.

Глубина 3 подобрана замером: 51 → 175 (глубина 2 без props-деклараций) → 356 (с ними) → **426** записей, размер индекса 4.42 → 4.71 МБ. Все шесть типов, промазавших в реальном логе, резолвятся; следующий шаг вглубь даёт уже в основном внутренние типы внутренних типов.

Раскрытие вглубь делает вторую половину задачи — ответ `get_type` при промахе — обязательной, а не косметической: чем больше типов в индексе, тем чаще запрос попадает "рядом", а не мимо. Поэтому промах теперь не тупик:

- **опечатка** (`ColumnConfg`) ловится расстоянием Левенштейна ≤ 2 — подстрочный поиск на неё принципиально не работает, а именно так чаще всего промахиваются мимо длинного составного имени;
- **тип пропсов** (`TableCanvasProps`) распознаётся по `propsTypeName` компонента и отсылает в `get_component_props` — в индексе типов его нет по устройству, он развёрнут в `props[]`;
- **неоднозначность** показывает не только ключи, но и чем варианты отличаются: `Table.ContentFormat (@daisforge/ui)` против `TableCanvas.ContentFormat (@daisforge/ui/components/TableCanvas)`, а внутренние помечены явно — по ним второй вызов делать незачем. Без этого агент выбирает вслепую и вполне может уйти в легаси-ветку `Table`.

### 1.8 `synthesizeExample.ts` — `minimalUsage` (T3)

`synthesizeMinimalUsage` генерирует `<Component requiredProp={placeholder} />` из обязательных пропсов — для КАЖДОГО компонента, независимо от того, есть ли у него настоящие примеры. У компонента с `compoundParts` самозакрывающийся тег — не минимальный пример, а неработающий (весь контент живёт в частях), поэтому там генерируется парный тег с перечислением реально найденных частей в комментарии; вложенность частей друг в друга НЕ выдумывается — её показывает только настоящий пример из `get_component_examples`. Результат кладётся в отдельное поле записи `minimalUsage`, а не в `examples[]` (до T3 это был единственный "пример" внутри `examples[]` с `type: "synthesized"`). Вынесено намеренно: `exampleTitles: []` в ответе `get_component` теперь честно означает «настоящих примеров нет», а не тратит вызов `get_component_examples` на строку, и так выводимую из `importStatement`.

### 1.8a `collectUsageExamples.ts` — реальные примеры из монорепо (T3)

`ExampleKind` — `'full-code' | 'usage' | 'vendor' | 'args-only'`. `'full-code'`/`'args-only'` приходят из curated Storybook-стори (`mergeMeta.curatedStories`, покрывают часть каталога — Storybook пишут не для всех компонентов). `'usage'` — второй источник: однопроходный грep по остальным пакетам монорепо за реальными JSX-вхождениями, хорош именно потому, что это код, который заведомо компилируется и отражает то, как компонент используют на практике, а не синтетическая заглушка и не изолированная демонстрация. `'vendor'` — третий источник (свои и кросс-файловые сниппеты вендорного снэпшота), см. §1.8b.

**Потолки длины кода примера** подобраны замером, а не на глаз. Исходные 700 (usage) и 900 (vendor) символов резали 34 из 206 и 58 из 215 примеров — и резали по самому ценному: у `TableCanvas` обрыв приходился ровно на `columnConfig`, единственную часть примера, которую агент не может додумать (в реальном логе это и дало единственную ошибку компиляции — `renderCell` был написан наугад). Curated-стори, наоборот, не обрезались вовсе, и самая длинная (24 445 символов) одна перекрывала весь бюджет ответа — такой пример всё равно обрезался, но уже последним рубежом `truncateForResponse`, который сворачивает ВЕСЬ ответ в строку `raw` и ломает структуру JSON. Сейчас: usage/vendor — 2400, curated — 8000 (покрывает 96% стори целиком, p95 = 6649). Итог: обрезано 5 usage, 10 vendor, 3 curated из 543 примеров.

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

**Два барьера против выпотрошенного индекса.** Сводка `diagnostics.ts` — только печать: прогон с `Фичей: 0` завершался кодом 0, файл записывался, и именно такой индекс уехал в npm `0.1.1` (у потребителя `list_features` → `0`, поиск по фичам пуст, curated-описания и `full-code` примеры отсутствуют). Причина — `_docs/meta/components-meta.json` в `.gitignore`: на свежем клоне и в CI его просто нет, а оба его читателя (`mergeMeta.ts`, `indexFeatures.ts`) молча возвращали пустоту. Теперь:

1. `loadMeta.ts` — единственная точка чтения меты (раньше два независимых кэша) + `assertMetaAvailable()`, который валит прогон **до** долгого разбора компонентов. Escape hatch — `MCP_INDEX_ALLOW_MISSING_META=1`. Сами скрипты (`mcp:build-index`, корневой `postbuild`, `ab/prepare-consumer.mjs`) вызывают `npm run meta` перед сборкой индекса, так что нормальный путь до этой проверки не доходит.
2. `validate/checkCompleteness.ts` — пороги наполненности по каждому источнику (`features`, `fullCodeExamples`, `curatedDocsComponents`, `types`, `compoundComponents`, `components`, `guides.installation`). При провале `buildIndex` **не записывает файл** и падает; та же проверка идёт первым шагом `mcp:validate-index` — раньше tsc-пробник на пустом индексе честно рапортовал «ошибок нет», потому что проверять было нечего. Метрика курирования — именно `docs`, а не `hasCuratedMeta`: второй флаг ставит и вендоренная atomic-мета, поэтому он равен общему числу компонентов всегда и обвал `_docs/meta` не ловит.

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

Все пути в файле — **относительно корня монорепо** (`packages/ui-kit/src/…`, `node_modules/@salutejs/…`), абсолютных нет ни одного. По ходу сборки `sourceFile` нужен абсолютным (его разбирают `resolveImportPath` и `deriveGroupAndFolder`), поэтому нормализация — один проход по всем строкам прямо перед сериализацией (`relativizePaths` в `buildIndex.ts`). Проход по всем строкам, а не по известным полям, специально: новое поле с путём не протащит абсолютный путь мимо. Иначе путь машины сборщика шумел бы в диффе закоммиченного `data/component-index.json` и уезжал бы к потребителю внутри пакета, ничего для него не значая.

Файл целиком (~МБ, наравне со старым `components-meta.json`) читается один раз при старте сервера — размер на диске не проблема, проблема только в том, что реально уходит в ответ агенту. Этим занимается уровень инструментов (см. ниже).

## 3. Распространение индекса и рантайм-резолв (`resolveIndex.ts`)

Сервер обязан работать у любого потребителя, включая тех, кто сидит на версии `@daisforge/ui`, опубликованной **до** появления mcp-data (то есть сейчас — все версии). Три уровня, от точного к запасному:

1. **workspace** — если физически рядом (`../ui-kit/package.json` относительно самого `resolveIndex.ts`) лежит `packages/ui-kit` → мы внутри монорепо dais/ui, читаем свежесобранный локальный индекс.
2. **installed** — `require.resolve('@daisforge/ui/mcp-data/component-index.json')` относительно `process.cwd()` потребителя (не относительно нашего пакета!). Сработает только для версий `@daisforge/ui`, уже содержащих `mcp-data`, **и только если найденный индекс не деградировал** — см. ниже.
3. **bundled** — запасной индекс, вшитый в сам `@daisforge/ui-mcp` (`data/component-index.json`, тот же файл, что и workspace-режим, но семантически означает "библиотека либо старая, либо не установлена"). Сравнивает `libVersion` из индекса с реально установленной версией `@daisforge/ui` (если есть) — при несовпадении или отсутствии добавляет `dataVersionNotice`/`libNotInstalled` в каждый ответ инструмента.

**Почему `installed` больше не выигрывает безусловно.** Раньше проверялось только «файл нашёлся и распарсился». `@daisforge/ui@1.14.0` — первая версия, куда индекс вообще начал класться, — уехала с индексом, собранным мимо `npm run meta`: `features: 0`, без `guides`, 51 тип вместо 426, 0 full-code примеров. Проверено скачиванием тарбола из npm. Итог был обратный задуманному: до 1.14.0 у потребителя работал полноценный `bundled`, а обновление библиотеки **ухудшало** данные MCP, потому что включался заведомо худший `installed`. Никакой публикацией `@daisforge/ui-mcp` это не лечится — установленная библиотека всё равно перебивает.

Поэтому `isDegradedIndex` — пустой `features` или отсутствие `guides.installation`. Оба поля приходят ТОЛЬКО из курированной меты, то есть их отсутствие означает обвал источника, а не «старая беднее». Пороги из `checkCompleteness` здесь не годятся: они откалиброваны под текущий каталог, а установленная версия может быть легитимно старее и беднее. При деградации откатываемся на `bundled` — но лишь если он сам не деградировал, иначе меняли бы шило на мыло, теряя совпадение по версии, — и объясняем это в `dataVersionNotice`.

Поведение проверено на копии окружения потребителя (распакованные тарболы `@daisforge/ui@1.14.0` и `@daisforge/ui-mcp@0.2.0` в реальном `node_modules`): битый `installed` → `bundled` с уведомлением; здоровый `installed` → `installed` без уведомления; отсутствующий `mcp-data` → `bundled`.

Все три уровня протестированы вживую (см. историю сессии): реальный сценарий "`@daisforge/ui` не установлен вовсе" — сервер не падает, отдаёт `bundled`-индекс и корректно предупреждает агента, что стоит прочитать ресурс `daisforge-ui://catalog/installation-guide` (T8: раньше это был тул `get_installation_guide`, см. §4).

## 4. MCP-сервер, инструменты и ресурсы (`server.ts` + `src/tools/`)

Транспорт — stdio (`@modelcontextprotocol/sdk`). Каждый инструмент — чистая функция `(index, args) → payload`, сервер оборачивает результат через `truncate.ts` перед отправкой.

| Инструмент | Назначение |
|---|---|
| `list_components({type?, category?, scope?, role?, limit?, offset?})` | список с фильтрами; по умолчанию `role: "primary"` (~177 из 243, см. §1.4a), `role: "all"` снимает фильтр; ответ `{items, shown, total, hasMore?, truncationNotice?}` |
| `search_components({query, limit?})` | скоринг по компонентам, фичам И типам (в т.ч. по тексту определения), legacy- и internal-демоушен, negation-aware матчинг, отсечка шума и `notice` при пустой выдаче (см. §4.2) |
| `get_component({name})` | **компактная** карточка — без полных доков, без тел примеров; у `part`/`internal` — `parentComponent`; у владельца папки — `relatedExports`; у compound-part дубликатов (§1.6a) — `compoundPartOf` вместо повторных пропсов |
| `get_component_props({name, part?})` | полные пропсы: own + inheritedProps; `part` — для compound-частей |
| `get_component_examples({name, title?})` | примеры кода |
| `list_features({component})` | список фичей компонента |
| `get_feature({component, feature})` | доки+API одной фичи (без тел примеров) |
| `get_feature_examples({component, feature, title?})` | примеры кода конкретной фичи |

Девять инструментов (T8, было 11) — `list_categories`/`get_installation_guide` не принимали аргументов и отдавали контент, не зависящий от вызова: типовой признак MCP-ресурса, а не тула-с-параметрами. Переведены в ресурсы, чтобы не занимать слот в списке тулов, который агент читает при каждом запросе:

| Ресурс | Назначение |
|---|---|
| `daisforge-ui://catalog/categories` | категории с разбивкой по типам (бывший `list_categories()`) |
| `daisforge-ui://catalog/installation-guide` | гайд по установке из `guides.installation` (бывший `get_installation_guide()`) |

Значения `category` (три: `"Локальные компоненты"`/`"Композиции"`/`"Формы"`), которые раньше приходилось узнавать вызовом `list_categories`, теперь прямо в описании тула `list_components` — агенту не нужен отдельный вызов ради значений параметра фильтра. Читаются оба ресурса через `resources/read`; `toResourceResult` в `server.ts` оборачивает тот же `truncateForResponse`, что и тулы, — формат контента `{ uri, mimeType: 'application/json', text }` вместо `{ type: 'text', text }` у тулов (диктуется схемой `ReadResourceResult` SDK), сам JSON внутри `text` не меняется.

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

**Поиск по типам и восстановление после промаха.** Раньше поиск знал только компоненты и фичи. Запрос вида "как отрисовать свою ячейку" или "GridCellKind renderCell CellContent" отвечать было нечем: нужное имя типа агент заранее не знает, а компонентам это слово ниоткуда не сопоставлено. Теперь третий источник хитов — **типы**, скорятся и по имени, и по тексту определения (вес по определению низкий, 3 против 15 за имя: определения до 6000 символов, и одно совпадение слова не должно обгонять компонент с этим словом в имени). Внутренние типы понижаются тем же множителем, что legacy/internal-роль — читать их полезно, ответом на "что импортировать" они быть не могут. На запросе из реального лога `CellContent` теперь первый результат.

Плюс два ограждения от тупика:

- **отсечка шума** — хиты ниже 15% от лучшего результата отбрасываются. В логе на запрос с очевидным ответом (TableCanvas, 100 очков) следом шли пять компонентов с 6-30 очками, поймавших одно общее слово в описании (`Counter`, `ToastProvider`, `TextSkeleton`). Порог относительный, не абсолютный: у редких терминов очки низкие у ВСЕХ хитов, и фиксированный порог убил бы единственный верный ответ;
- **`notice` при пустой выдаче** — куда идти дальше (`list_components`, `list_features`, `get_component_props`). Пустой ответ без продолжения — ровно та развилка, на которой агент уходит читать `node_modules`.

**Замер вместо ощущений (`ab/search-eval.mjs`, `npm run mcp:search-eval`).** Скоринг — набор подобранных руками весов, и любая правка на глаз выглядит улучшением. 12 запросов, каждый с несколькими допустимыми ответами в топ-3, секунда на прогон, без модели и песочницы (это НЕ `ab/run.mjs`). Текущий результат — **8 из 12**. Так был отклонён дешёвый стемминг для русских словоформ (отрезать окончание, засчитывать основу с меньшим весом): те же 8 из 12, но на "конфигурация группировки колонок" фичи таблицы вытеснялись `Container`/`Layout`/`Col`, поймавшими основу "колон" в общих доках. Русскую морфологию стоит закрывать нормальным стеммером — это отдельная задача, и замер уже готов её принять.

## 5. Известные ограничения (см. также README.md)

- Иконки/токены/миксины/утилиты не проиндексированы — сознательная граница v1.
- Поиск не знает русской морфологии: `search-eval` устойчиво промахивается там, где запрос и текст расходятся словоформой ("даты" против "дата" — `FormDatePicker`; "группировки" против "группировка" — `ColumnsGrouping`). Четыре промаха из двенадцати — все этой природы.
- Три пары внутренних sub-компонентов с одинаковым именем в разных папках таблиц (`TableFilterSelectListItem`, `ContainerStyled`, `Canvas`) — при коллизии в индекс попадает только последняя обработанная запись.
- **`resolveImportPath` даёт ложный `importPath` для `DataEditor`** (`@daisforge/ui`) и, вероятно, для других находок `discoverComponents`, которые технически резолвятся тайпчекером, но не реально не экспортируются ни одним публичным barrel-файлом ui-kit (обнаружено при T9 — см. §1.5b). `DataEditor` — тип из `@glideappsfinal/glide-data-grid`, используется только для тайпинга рефов внутри `TableGlide`/`TableCanvas`, значением из `@daisforge/ui` никогда не был. Требует отдельной проверки: сверять найденный `importPath` с реальным содержимым `packages/ui-kit/src/index.ts`/папочного barrel, а не доверять резолву тайпчекера вслепую. Не входит в T9 — предмет отдельной задачи.
- Поиск слабее на общих словах, которые встречаются во многих фичах одновременно (например "ячеек").
- **`atomicDataMissing: true` у 34 записей** (37 до T15 → 35 после разметки страниц → 34 после перевендоринга снэпшота на `0.355.0`, где появилась страница `Rating`; см. §1.6b) — вендорных пропсов нет по двум разным причинам, и обе не лечатся на нашей стороне: у 11 записей таблица пропсов в доках атомарной команды ЕСТЬ, но не первая на своей странице, и снэпшот её теряет (`CalendarBase`/`CalendarBaseRange`/`CalendarDouble`/`CalendarDoubleRange`, `DatePickerRange`, `NotificationsProvider`, `SegmentItem`, `TextSkeleton`, `TabItem`, `TabsController`, `FiltersActionsTabItem`) — закроется только перегенерацией снэпшота с исправленным `extractProps`; у остальных 23 таблицы нет в доках вовсе (`Divider` и три его обёртки `ModalDFDivider`/`ToolbarDivider`/`WidgetDivider`, compound-части `DrawerHeader`/`DrawerContent`/`DrawerFooter`, `SegmentIconItem`, `IconTabItem`, `ToastProvider`, `Typography` и 13 атомов типографики — страница `Typography.mdx` документирует семью прозой и примерами, ни одной `<PropsTable>` на ней нет). Пропсы у всех 34 при этом есть — из собственного резолва ts-morph, с настоящими русскими описаниями и корректным `required`, чего вендор не даёт вовсе (см. §1.6).
- **Перегенерация вендоренного снэпшота (основной пункт T15) не выполнена** — требует прогона docusaurus-сборки в репозитории доков атомарной команды; в доступных локально чекаутах нет ни `node_modules`, ни `.docusaurus`, а сам plasma там на версии старше текущего снэпшота, так что прогон дал бы регресс. Разбор причин и что именно нужно исправить у них в `extractProps` — §1.6b.
- У 3 compound-частей (`DrawerDF.Header.badge`, `DrawerDF.DotsIconButton.dropdownProps`, `FiltersActions.DotsIconButton.dropdownProps`) текст типа — нечитаемый вложенный `Omit<Omit<PropsType<...`. Это не провал резолва (`resolveCompoundPart` находит декларацию штатно, `tryExtractViaComponentProps`-фолбэк из T13 тут не участвует) — сам исходный тип поля (`badge?: (BadgeCompProps & { text: string }) | undefined`) генуинно сложный, и принтер TypeScript теряет имя вложенного алиаса при печати вычисленного типа intersection. Требует отдельной правки печати типа (например `type.getText(node, ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope)`), не относится к T13.
- `src/validate/validateIndex.ts` на текущем индексе **не проходит начисто** и до T11–T14 (baseline: 1 import-missing + 226 prop-not-found + 195 required-mismatch, не считая generic best-effort) — большинство расхождений сосредоточено в нескольких компонентах со сложными полиморфными типами (`Box`, `ModalDFConfirmationFooter`, `Spinner`, `TooltipList`, семья `FiltersActions.*`), где `required`-флаг, вычисленный при разборе объявленного типа, расходится с тем, что вычисляет тайпчекер для `ComponentProps<typeof X>` реального экспорта. T14 сократил REQUIRED-MISMATCH на 19 (195→176); T12 (синхронизация compound-part дублей) распространяет уже существующую неточность `resolveCompoundPart`-пути на 1 дополнительную пару (`FiltersActionsTabs`/`FiltersActionsTabItem`, +20) — сознательный компромисс: пропсы стали полнее и консистентнее между обоими путями резолва, а `required`-неточность для этой конкретной пары была в индексе и раньше (просто непроверяемой на top-level имени). Устранение самой неточности — отдельная задача, не T11–T14. T2 (description/category/keywords) props не трогает — baseline после T2 не изменился по существу (196 required-mismatch, разница в 1 от естественного дрейфа исходников ui-kit между прогонами).
- **`list_components({})` без фильтров показывает ~120 из 177 `primary`-компонентов, не все** — прямое следствие T2 (см. §4.1): с непустыми `description`+`category` у 100% каталога полный список не помещается в бюджет ответа за один вызов. Не баг — `truncationNotice`/`hasMore` явно сообщают остаток и путь пагинации (`limit`/`offset`), это тот самый механизм, который T1 спроектировал для этого случая.
- **`usage`-примеры (T3) сами по себе ограничены составом чекаута** — `collectUsageExamples.ts` (§1.8a) находит реальные JSX-вхождения только в `packages/storybook` и `packages/vite-project`; `webpack-finportal-platform`/`webpack-project-finalheader` из CLAUDE.md сюда не выкачаны. В одиночку этот источник даёт 56.0% (136/243) — ниже целевых 60% из TASKS.md T3. Итоговая доля после подключения вендорных источников (`vendorExamples.ts` + `vendorUsageExamples.ts`, §1.8b) — **86.0% (209/243)**, выше цели; ограничение осталось только у `usage` как источника самого по себе, не у T3 в целом.
- **T6: доля own-пропсов с `default` — 8.3% (279/3358), ниже цели ≥25% из TASKS.md.** Оба источника (деструктуризация параметра render-функции, `@default` в JSDoc) реализованы и работают корректно (проверено вживую: `BlockTitle.titleSize`, `SplitView.disableMediaAdaptive` и т.д.) — цифра ниже целевой не из-за бага, а из-за реального состава кодовой базы: (1) деструктуризация значений по умолчанию внутри ТЕЛА функции (`const { x = 1 } = props`), а не в самом параметре, встречается редко (~6 файлов из 130+ own-компонентов) и намеренно не резолвится — T6 называет деструктуризацию параметра основным источником; (2) `@default` в JSDoc есть у 207 полей по всей `ui-kit/src`, но заметная часть — на полях ВЛОЖЕННЫХ инлайн-объектных типов (`SplitViewProps.sidebar.isOpened` и подобные), которые `extractPropsFromType` принципиально не разворачивает (то же ограничение, что и для описаний вложенных типов). Комбинированная доля (own + inheritedProps, куда часть own default'ов уходит при мёрдже с вендором — см. T14/`mergeWithOwn`) — 9.9% (502/5085). Расширение эвристики (разбор тела функции, разворот вложенных объектных пропсов) — не входило в T6, отдельная задача.
- **T7: TextField — 2 из 5 own-пропсов (`autoComplete`, `enterKeyHint`) выглядят DOM-подобными даже после сортировки.** Не регрессия сортировки — у TextField ровно 5 own-пропсов (см. T14: `size`/`value`/`disabled`/`view` и другие атомарные поля ушли в `inheritedProps` при мёрдже с вендором, они там отсортированы тем же приёмом), и оба поля намеренно НЕ считаются шумом в T4 (денылист явно исключает `autoComplete`/`enterKeyHint` из безусловного списка — design-система сужает их тип: `enterKeyHint` — литеральный union, отсутствующий в этой версии типов React вовсе; `autoComplete` — алиас `HTMLInputAutoCompleteAttribute`, более узкий, чем HTML `string`). У `Select`/`Button`/`DrawerDF` первые пропсы (`hintPortal`/`appearance`/`type`, `as`/`type`, `borderRadius`/`customBackgroundColor`/…) — осмысленные, критерий выполнен полностью для 3 из 4 контрольных компонентов.

## 6. Как обновлять

```bash
npm run meta                 # regenerate _docs/meta/components-meta.json из meta-config.json (только если правили meta-config.json)
npm run mcp:build-index      # пересобрать индекс из текущего исходника ui-kit
npm run mcp:vendor-atomic -- --source <путь-к-их-mcpData>   # обновить снэпшот атомарных пропсов (см. §1.6b: перед этим у них нужен npm run generate-index + generate-mcp-data на свежем чекауте plasma, иначе снэпшот окажется беднее текущего)
npm run mcp:start            # запустить сервер локально (stdio)
```

`mcp:build-index` автоматически входит в корневой `postbuild` (после `npm run build`). `npm run meta` — отдельный шаг, руками, только когда менялся `generators/meta-info/config/meta-config.json` (правки в `packages/mcp-server/vendor/atomic-curated-meta.json`, наоборот, читаются напрямую и `npm run meta` не касаются).

## 7. A/B-замер: помогает ли индекс (T10)

`validateIndex` (§ выше) проверяет, что индекс **не врёт**. Этот замер проверяет, что он **помогает**. Харнесс — `ab/` (исходники, в git), артефакты — `.probe/ab/` (в `.gitignore`); подробное описание и ключи — `ab/README.md`.

### 7.1 Стенд — потребительский, а не репозиторный

Первая версия замера сравнивала MCP с грепом по `packages/ui-kit/src` и мерила не то: **у потребителя библиотеки исходников нет**, а в `.d.ts` установленного пакета у чистых реэкспортов написано ровно `export { Button } from '@salutejs/sdds-finai'` — то есть описаний пропсов нет вообще.

`ab/prepare-consumer.mjs` собирает песочницу **вне репозитория** (`~/.claude-ab-consumer`): скелет приложения из `packages/vite-project` (но без его `src/pages` — там 20 готовых страниц, пересекающихся с задачами замера), настоящий опубликованный `@daisforge/ui@1.12.2` из npm, `@daisforge/ui-mcp` из локального пака. Агент физически не может ни подняться в исходники, ни подхватить `CLAUDE.md` библиотеки — проверено по транскриптам: путей монорепо в руке без MCP нет ни одного.

Побочный результат: стенд впервые прогоняет вживую **потребительский путь `resolveIndex`** — ветку `bundled` (в опубликованном пакете `mcp-data` ещё нет, индекс ни разу не выпускался) вместе с `dataVersionNotice` о расхождении версий. До этого всегда срабатывала первая ветка, `workspace`.

Каркас `App` в песочнице подхватывает любые страницы из `src/pages` через `import.meta.glob`, поэтому ответ агента попадает в **работающее** приложение без правок App: `ab/assemble-app.mjs` собирает страницы выбранной руки и прогоняет `vite build`.

### 7.2 Руки и метрики

Руки различаются только доступом к инструментам: `pkg` (только `node_modules`, без MCP), `pkg-mcp` (только MCP), `pkg-both` (и то и другое). Модель, задачи, промпт, обстановка — одинаковы.

Отдельно от «выдумок» агента считается **`index-drift`** — проп или экспорт, который индекс обещает, а в установленном пакете его нет. Карта дрейфа снимается заранее настоящим тайпчекером по всем 5086 пропсам индекса (`ab/drift.mjs`) и вычитается: агент не выдумывал, он поверил индексу. В карту, в частности, попал `DataEditor` — известный дефект `resolveImportPath` (§5).

### 7.3 Результат (20 задач × 3 руки, sonnet, 60 прогонов, $9.99)

| Рука | `tsc` проходит | Выдумано на задачу | Профильный компонент | Вызовов тулов до первой строчки кода | $/задача | сек/задача |
|---|---|---|---|---|---|---|
| `pkg` — только `node_modules` | 60% | 0.1 | 95% | **24.3** | 0.271 | 97 |
| `pkg-mcp` — только MCP | **85%** | 0.0 | 100% | **7.1** | 0.111 | 45 |
| `pkg-both` — MCP + `node_modules` | 75% | 0.0 | 100% | 7.2 | 0.118 | 43 |

Разрез по сложности показывает, где именно польза, а где её нет:

| Уровень задач | `pkg` | `pkg-mcp` | `pkg-both` |
|---|---|---|---|
| `single` (12) | 10/12 | 10/12 | 10/12 |
| `form` (3) | 1/3 | 3/3 | 1/3 |
| `table` (2) | 0/2 | 1/2 | 1/2 |
| `composition` (3) | 1/3 | 3/3 | 3/3 |

Состав вызовов за весь замер: `pkg` — **486 файловых операций** (243 `Read`, 191 `Glob`, 52 `Grep`) и 0 MCP; `pkg-mcp` — 142 вызова MCP и 0 файловых; `pkg-both`, где доступно и то и другое, — 137 MCP и всего **6** файловых, то есть, имея индекс, агент в `node_modules` практически не заглядывает.

Качественно разрыв виднее, чем в процентах. Задача «боковая панель с таблицей платежей»: без MCP агент берёт `Drawer`/`DrawerHeader` — сырой атом Plasma, реэкспортнутый библиотекой, — и верстает таблицу руками; с MCP берёт `DrawerDF` + `TableCanvas` с типизированным `ColumnConfig`, то есть собственные composite библиотеки, ради которых она и существует. Тот же эффект в `tabs-sections`: без MCP выбран `TableTabs` (вкладки НАД таблицей) вместо `Tabs`.

### 7.4 Что замер не показывает

- **Простые задачи MCP не улучшает** — 10/12 во всех трёх руках. Выигрыш там только в цене и времени (втрое меньше вызовов).
- **Разница между `pkg-mcp` и `pkg-both` (85% против 75%) — в пределах шума**: это 2 задачи из 20, по одному прогону на задачу, без усреднения по повторам. Устойчивы только разрывы «с MCP / без MCP»: тулы до кода (7.1 против 24.3) и выбор профильного компонента.
- **`table-filters-mass` не прошла ни в одной руке** — самая тяжёлая композиция (`TableCanvas` + фильтры + массовые действия), и индекс её не спасает: это указатель, куда смотреть дальше (примеры уровня композиции, а не отдельного компонента).
- Замер сделан на одной модели (`sonnet`) и одном прогоне на задачу; `pkg-mcp-before` (базовая линия с сервером из коммита до T1) не гонялась — харнесс для неё готов (`ab/prepare-before.mjs`).
- В первом заходе прогон упёрся в лимит аккаунта, и 41 прогон вернул ошибку за 5 секунд. Раннер теперь распознаёт такие обрывы, **не сохраняет** их транскрипты (иначе резюмируемость засчитала бы пустые ответы в метрики) и останавливает очередь целиком.
