# @daisforge/ui-mcp

MCP-сервер для `@daisforge/ui` — даёт кодовому агенту точные пропсы, типы, категории (wrapper/composition/standalone/form) и примеры для 260+ компонентов библиотеки, а не только для ~40 задокументированных в Storybook. `description`/`category`/`keywords` для выбора компонента под задачу заполнены у всех 243 неошибочных записей индекса (T2), не только у тех, что описаны в Storybook.

## Быстрый старт

Внутри монорепо dais/ui сервер уже зарегистрирован в корневом `.mcp.json` — ничего дополнительно делать не нужно.

Для потребителей (`npm install @daisforge/ui @daisforge/ui-mcp`):

```json
{
  "mcpServers": {
    "daisforge-ui": {
      "command": "node",
      "args": ["node_modules/@daisforge/ui-mcp/dist/server.js"]
    }
  }
}
```

## Инструменты

- `list_components({ type?, category?, scope?, role?, limit?, offset? })` — ответ `{ items, shown, total, hasMore?, truncationNotice? }`. По умолчанию отдаёт только `role: "primary"` (~177 из 243 компонентов) — слоты вроде `DrawerDFHeader` и служебные примитивы вроде `CanvasRect` скрыты; `role: "all"` снимает фильтр. Каждый элемент несёт `description`/`category` (100% покрытие, см. T2 в `TASKS.MD`); `keywords` в этом компактном списке **не** дублируются — они участвуют в скоринге `search_components`, а не в беглом обзоре. Без `limit` список сам бюджетируется под лимит ответа: с полными description/category у всех 177 primary-компонентов за один вызов без фильтров помещается ~120 из них — это ожидаемо (не баг), `truncationNotice` объясняет, чем добрать остаток (фильтры или `limit`/`offset`)
- `search_components({ query })` — ищет и по компонентам, и по фичам (TableCanvas/Filtering и т.п.); скорит `hint`, `keywords` (2-4 синонима задачи на ru/en на компонент) и `description` — `keywords` весят наравне с `hint` (+20); `role: "internal"` понижается штрафом, но не исключается. Результаты по компонентам несут `supersededBy`/`chooseWhen`, если заполнены — выбор между конкурирующими компонентами происходит именно здесь (T9)
- `get_component({ name })` — компактная карточка, несёт `description`/`category`/`keywords`. У `part`/`internal`-записей — `parentComponent` (куда идти за деталями); у владельца папки — `relatedExports` (какие части/внутренние примитивы у него есть, раз их не видно в `list_components` по умолчанию); у записей, дублирующих compound-часть родителя (`compoundPartOf`), пропсы не повторяются — карточка сразу отсылает к `get_component_props({ name: parent, part })`. `minimalUsage` — синтетический `<Component requiredProp={...} />` из обязательных пропсов, есть у 100% записей всегда; `exampleTitles` — заголовки настоящих примеров (может быть `[]`, это честное «примеров нет», не повод звать `get_component_examples`). У `legacy: true` — `supersededBy` (что брать вместо); у компонентов из конкурирующих групп (`Table`/`TableCanvas`, `Select`/`FormSelect`, `Popover`/`PopoverBeta` и т.п., 34 компонента) — `chooseWhen`, одна строка, при каких условиях брать именно этот (T9)
- `get_component_props({ name, part? })` — полные пропсы (собственные + унаследованные от атома). Пропсы отсортированы: `required` → с описанием → без описания → `deprecated` в конец, по алфавиту внутри яруса (T7) — при обрезке по бюджету теряется наименее нужное, а не случайное подмножество. Описания, дословно совпадающие с JSDoc React DOM-типизации того же имени, не попадают в индекс (T7). У части пропсов есть `default` — значение по умолчанию, извлечённое из деструктуризации параметра render-функции или тега `@default` в JSDoc (T6); поле опционально, отсутствует, если дефолт не резолвлен
- `get_component_examples({ name, title? })` — только настоящие примеры, до 4 суммарно, из трёх источников: `full-code`/`args-only` из curated Storybook-стори, `usage` — реальное JSX-вхождение, найденное грепом по остальным пакетам монорепо, `vendor` — curated-пример из вендоренного снэпшота `@salutejs/sdds-finai` с переписанным на `@daisforge/ui` импортом, в том числе из "чужого" файла снэпшота — например, примеры `AccordionItem` находятся внутри `Accordion.json` (T3); отсортированы `full-code → usage → vendor → args-only`. У `usage` есть `sourceFile` (путь относительно корня монорепо)
- `list_features({ component })`, `get_feature({ component, feature })`, `get_feature_examples({ component, feature, title? })`

Девять тулов — `list_categories` и `get_installation_guide` были тулами без аргументов, отдающими статический контент, не зависящий от вызова (T8); переведены в MCP-ресурсы (см. ниже), чтобы не занимать слот в списке тулов, который агент читает при каждом запросе. Значения `category`, которые раньше приходилось узнавать через `list_categories()`, теперь прямо в описании `list_components`.

## Ресурсы

- `daisforge-ui://catalog/categories` — категории каталога с количеством компонентов по типам (то же содержимое, что раньше отдавал тул `list_categories`)
- `daisforge-ui://catalog/installation-guide` — гайд по установке и подключению `@daisforge/ui` (то же содержимое, что раньше отдавал тул `get_installation_guide`)

Оба читаются через `resources/read` (`resources/list` — для обнаружения), контент — тот же JSON-формат, что и у тулов (`{ type: 'text', text: '<json>' }` → `{ uri, mimeType: 'application/json', text: '<json>' }`).

## Ручное тестирование тулов (MCP Inspector)

Чтобы точечно повызывать любой тул (`get_component`, `search_components` и т.д.) через UI, без настройки клиента:

```bash
npm run mcp:inspect
```

Команда собирает сервер (`tsc`) и поднимает [`@modelcontextprotocol/inspector`](https://github.com/modelcontextprotocol/inspector) (через `npx`, ничего не ставится в зависимости проекта) — откроется браузер со списком тулов, формой аргументов под каждый и живым JSON-ответом. Сервер запускается как stdio-процесс (`node ./dist/server.js`), сеть наружу не используется.

Тот же скрипт есть и в корне монорепо: `npm run mcp:inspect` (пересобирает индекс перед запуском).

## Разработка

```bash
npx nx typecheck @daisforge/ui-mcp   # tsc --noEmit
npx nx lint @daisforge/ui-mcp        # eslint (тот же конфиг, что и у остальных пакетов монорепо)
npx nx build @daisforge/ui-mcp       # tsc -p tsconfig.lib.json → dist/
```

`ts-morph` — devDependency (нужна только индексеру на этапе сборки индекса, не публикуется в рантайме MCP-сервера); соответствующее исключение для `import/no-extraneous-dependencies` настроено в `.eslintrc.json` только для `src/indexer/**`.

## Сборка индекса

```bash
npm run mcp:build-index
```

Пишет `packages/mcp-server/data/component-index.json` (запасной индекс, вшивается в публикуемый `@daisforge/ui-mcp`) и, если уже собран `dist/packages/ui-kit` — также `dist/packages/ui-kit/mcp-data/component-index.json` (уезжает вместе с публикацией `@daisforge/ui`). Автоматически запускается после `npm run build` (см. корневой `postbuild`).

### Курированная мета — обязательный вход, а не опция

`_docs/meta/components-meta.json` лежит в `.gitignore` (это build-артефакт `npm run meta`), поэтому на свежем клоне и в CI его нет. Без него из индекса молча исчезает всё, что приходит только оттуда: **features** (77 записей, 46 из них у одного `TableCanvas`), **guides.installation**, curated-описания/`keywords`/`chooseWhen` ui-kit компонентов и все примеры типа **full-code**. Ровно такой выпотрошенный индекс уехал в npm `0.1.1` — у потребителя `list_features` отвечал `0`, а поиск по фичам не находил ничего.

Поэтому:

- `mcp:build-index` и корневой `postbuild` сами вызывают `npm run meta` перед сборкой индекса;
- индексер падает на старте, если меты всё-таки нет (`assertMetaAvailable` в `src/indexer/loadMeta.ts`); осознанно собрать неполный индекс — `MCP_INDEX_ALLOW_MISSING_META=1`;
- перед записью индекс проходит проверку наполненности (`src/validate/checkCompleteness.ts`): при обвале любого источника (features, full-code примеры, curated-доки, типы, compound-части, гайд по установке) файл **не записывается**, прогон падает. Та же проверка идёт первым шагом в `mcp:validate-index`.

## Резолв индекса — три уровня

1. **workspace** — если рядом физически лежит `packages/ui-kit` (мы внутри монорепо), сервер читает свежесобранный локальный индекс.
2. **installed** — версия `@daisforge/ui`, установленная у потребителя, уже содержит `mcp-data/component-index.json`. Побеждает, **только если этот индекс не деградировал**: пустой `features` или отсутствие `guides.installation` означают, что при сборке не сгенерировали курированную мету, — тогда сервер откатывается на `bundled` и объясняет это в `dataVersionNotice`. Так вышло с `@daisforge/ui@1.14.0` — первой версией, куда индекс вообще начал класться: релизный шаг собирал его мимо `npm run meta`, и обновление библиотеки до неё **ухудшало** данные MCP (до 1.14.0 работал полноценный `bundled`, с 1.14.0 включался заведомо худший `installed`).
3. **bundled** — запасной индекс, вшитый в сам `@daisforge/ui-mcp`. Нужен для версий `@daisforge/ui`, опубликованных до появления mcp-data, для деградировавшего `installed` (см. выше) и для случая, когда библиотека вообще не установлена. В этом случае в ответах присутствует `dataVersionNotice`/`libNotInstalled`.

Всё работает полностью оффлайн — сервер никогда не обращается по сети.

## Атомарный слой (`@salutejs/sdds-finai`)

Пропсы атомарных компонентов подмешиваются в `inheritedProps[]` из **закоммиченного статического снэпшота** (`vendor/atomic-mcp-data/`), а не через живой MCP атомарной команды — так наш сервер не зависит от установленного `@salutejs/sdds-mcp` и работает полностью оффлайн.

Обновление снэпшота (вручную, при значимых апдейтах `@salutejs/sdds-finai`):

```bash
# в репозитории plasma, внутри website/sdds-finai-docs
npm run generate-mcp-data

# в dais/ui
npm run mcp:vendor-atomic -- --source /путь/к/plasma/website/sdds-finai-docs/mcpData
```

Перед обновлением стоит знать две особенности снэпшота (подробно — `ARCHITECTURE.md` §1.6b):

- **`generate-mcp-data` даёт один файл на СТРАНИЦУ доков, не на атом**, и берёт со страницы только первую таблицу пропсов. В доках 87 таблиц `<PropsTable>` на 74 страницы — 14 таблиц (`AccordionItem`, `CalendarBase`, `Col`, `DatePickerRange`, `ListItem`, `NotificationsProvider`, `SegmentItem`, `RectSkeleton`/`TextSkeleton`, `TabItem`/`TabsController` и др.) в снэпшот не попадают вовсе. Прирост от перевендоринга будет заметным только вместе с исправлением их `extractProps`.
- **Проверяйте версию**: `vendor/atomic-mcp-data/manifest.json` содержит версию `@salutejs/sdds-finai`, из которой собран текущий снэпшот (сейчас `0.355.0`, установленный в монорепо пакет — `0.351.0`). Прогон на более старом чекауте plasma перезапишет снэпшот более бедным — `vendorAtomicData.ts` сносит папку целиком и не сверяет версии.

## Курированные данные каталога (description/category/keywords)

Индексер сам находит компоненты, пропсы и типы из исходников, но `description`/`category`/`keywords` — курированный контент, у которого два независимых редактируемых источника (оба читаются на этапе `mcp:build-index`, сами по себе НЕ индексер):

1. **`generators/meta-info/config/meta-config.json`** (поле `components`) — для компонентов с собственным кодом в `ui-kit` (wrapper/composition/standalone с реальной логикой поверх атома или самостоятельной реализацией). Этот файл — вход генератора `npm run meta` (`generators/meta-info/generate-meta.js`), который пишет `_docs/meta/components-meta.json`. **`_docs/meta/components-meta.json` — build-артефакт, полностью перезаписывается при каждом `npm run meta` — редактировать его руками нельзя**, правки делаются только в `meta-config.json`. `mergeMeta.ts` читает уже сгенерированный `_docs/meta/components-meta.json`.
2. **`packages/mcp-server/vendor/atomic-curated-meta.json`** — для компонентов без единой строчки собственного кода: чистых реэкспортов атомов `@salutejs/sdds-finai` (`export { X } from '@salutejs/sdds-finai'`). У них нет ни JSDoc, ни своей Storybook-страницы, поэтому `generators/meta-info` их не видит в принципе (резолвит по папке в `packages/storybook/src/stories/<Name>/`, которой у реэкспортов нет). Читается напрямую через `mergeAtomicCuratedMeta.ts`, идёт сразу за `mergeMeta` в пайплайне `buildIndex.ts` — независимый источник, не проходит через генератор `npm run meta`.

Оба источника — "curated wins": непустое значение перекрывает то, что нашёл индексер сам (JSDoc-описание, эвристику `category`).

## A/B-замер: помогает ли индекс

`npm run mcp:validate-index` проверяет, что индекс не врёт. Проверка того, что он **помогает**, живёт в `ab/` — одни и те же 20 задач на генерацию кода решаются агентом с MCP и без, в обстановке настоящего потребителя (песочница вне репозитория с опубликованным `@daisforge/ui` из npm, без исходников библиотеки).

```bash
npm run mcp:ab:consumer   # собрать стенд потребителя
npm run mcp:ab:drift      # карта расхождений «индекс ↔ установленный пакет»
npm run mcp:ab            # прогон + метрики (.probe/ab/report.md)
npm run mcp:ab:app        # собрать из ответов работающее приложение + vite build
npm run mcp:ab:selfcheck  # поверка самого скорера, без запуска агента
```

Последний замер (20 задач × 3 руки, sonnet): вызовов инструментов до первой строчки кода — **24.3 без MCP против 7.1 с MCP**, доля ответов, проходящих `tsc`, — **60% против 85%**. Разбор, оговорки и разрез по сложности задач — `ARCHITECTURE.md` §7, подробности харнесса — `ab/README.md`.

## Публикация

`@daisforge/ui-mcp` версионируется и публикуется **независимо** от `@daisforge/ui` — не через Lerna (пакет не входит в npm workspaces и не виден `lerna version`), а через отдельный workflow `.github/workflows/publish-mcp-server.yml`.

Запуск — вручную, из Actions UI или через `gh`:

```bash
gh workflow run publish-mcp-server.yml -f bump=patch -f dry_run=true   # проверочный прогон, ничего не публикует
gh workflow run publish-mcp-server.yml -f bump=patch -f dry_run=false  # реальный релиз
```

`bump` — `patch`/`minor`/`major`. Workflow сам поднимает версию в `package.json` (`npm version`), коммитит и тегирует (`ui-mcp-vX.Y.Z` — отдельный неймспейс от тегов `ui-kit`, `vX.Y.Z`), затем публикует в тот же `registry.npmjs.org`, что и `@daisforge/ui`.

Workflow объявлен и как `workflow_call` — задел на будущее, если релиз `ui-mcp` решат триггерить автоматически из `publish-npm.yml` вместо ручного запуска.

### Зеркальный (white-label) пакет

Тем же прогоном публикуется второй, зеркальный пакет: тот же собранный `dist/` и тот же индекс, но под другим именем и с другим именем связанной библиотеки. Отдельного репозитория и отдельной ветки для этого нет — **исходники в `src/` про зеркало ничего не знают**.

Работает это так: `scripts/build-alias-package.mjs` копирует `dist/` и `data/component-index.json` в `packages/mcp-server/.alias-package/` (в `.gitignore`, не коммитится), прогоняет по ним таблицу текстовых замен, собирает свои `package.json` и `README.md`, и `npm publish` делается уже оттуда. Основной пакет при этом не меняется ни на байт.

Имена берутся из секретов репозитория — в коде их нет:

| Секрет | Что это |
| --- | --- |
| `ALT_MCP_PACKAGE_NAME` | имя зеркального npm-пакета |
| `ALT_LIB_PACKAGE_NAME` | имя связанной библиотеки — подставляется вместо `@daisforge/ui` |
| `ALT_NPM_TOKEN` | токен с правами publish в новый scope |

Локально зеркало собирается той же командой, что и в CI:

```bash
npm run build --prefix packages/mcp-server   # dist/ должен быть свежим
ALT_MCP_PACKAGE_NAME=@acme/ds-mcp ALT_LIB_PACKAGE_NAME=@acme/ds \
  npm run mcp:alias:stage --prefix packages/mcp-server
```

Что стоит знать, если придётся это чинить:

- **Порядок замен в `REPLACEMENTS` значим**: длинные токены идут первыми, иначе `@daisforge/ui-mcp` превратится в `<ALT_LIB>-mcp`. Список закрытый, но в конце сборки работает гард — рекурсивный греп staging на `/dais/i`. Появится в артефактах новая форма бренда (новое имя стори-папки, новая ссылка в комментарии) — сборка зеркала упадёт с указанием файла и строки, и в таблицу нужно добавить правило. Молча бренд не утечёт.
- **Зеркало публикуется первым, основной пакет вторым.** Если падает зеркало (новый scope, отдельный токен, своя история версий), job обрывается до публикации `@daisforge/ui-mcp` и до `git push` — ничего не опубликовано, ничего не запушено, повтор чистый.
- **Версия у зеркала та же**, что у основного пакета (лок-степ). Если истории версий в двух scope разойдутся, `npm publish` упадёт с `EPUBLISHCONFLICT`.
- **`dist/indexer` и `dist/validate` в зеркало не едут**: они нужны только внутри монорепо и тянут `ts-morph` (devDependency) — из тарбола запуститься не могут в принципе. Из `dist` также вычищаются `.map` (ссылаются на `../src/*`, которого в тарболе нет).
- **`@salutejs/*` не переименовывается** — это реальные импорты атомов в vendor-примерах, потребителю они нужны рабочими.
- Если секреты не заданы или `publish_alias=false`, шаги зеркала пропускаются с warning — обычный релиз `@daisforge/ui-mcp` от этого не страдает.

## Известные ограничения v1

- **Иконки, токены, миксины, утилиты не проиндексированы** — сознательная граница v1 (см. план). Следующий шаг.
- **Три пары внутренних sub-компонентов с одинаковым именем** в разных папках (`TableFilterSelectListItem`, `ContainerStyled`, `Canvas` — есть и в `Table`/`TableCanvas`/`TableGlide`) — при коллизии имён в индекс попадает только последняя обработанная запись. Не влияет на публичные компоненты, только на внутренние helper-подкомпоненты таблиц.
- **Поиск (`search_components`) — простой substring-скоринг**, без embeddings/NLP. Хорошо работает на прямых терминах и на курированных `hint`, слабее — на общих словах, которые встречаются во многих фичах одновременно (например "ячеек" — общее слово почти для всех табличных фич).
- **`atomicDataMissing: true` у 35 записей из 243** — вендорных пропсов нет по двум причинам: у 11 таблица в доках атомарной команды есть, но не первая на своей странице, и снэпшот её теряет (`CalendarBase*`, `DatePickerRange`, `NotificationsProvider`, `SegmentItem`, `TextSkeleton`, `TabItem`, `TabsController`); у 24 таблицы нет в доках вовсе (`Divider` и его обёртки, compound-части `DrawerHeader`/`DrawerContent`/`DrawerFooter`, `Rating`, `SegmentIconItem`, `IconTabItem`, `ToastProvider`, `Typography` + 13 атомов типографики). Пропсы у всех 35 есть — из собственного резолва ts-morph, причём с описаниями и `required`, которых вендор не несёт вовсе. Сборка не падает, диагностика индексера помечает каждую дыру её причиной. Подробности — `ARCHITECTURE.md` §1.6b.
