# @daisforge/ui-mcp

MCP-сервер для `@daisforge/ui` — даёт кодовому агенту точные пропсы, типы, категории (wrapper/composition/standalone/form) и примеры для 260+ компонентов библиотеки, а не только для 36 задокументированных в Storybook.

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

- `list_components({ type?, category?, scope?, role?, limit?, offset? })` — ответ `{ items, shown, total, hasMore?, truncationNotice? }`. По умолчанию отдаёт только `role: "primary"` (~177 из 243 компонентов) — слоты вроде `DrawerDFHeader` и служебные примитивы вроде `CanvasRect` скрыты; `role: "all"` снимает фильтр. Без `limit` список сам бюджетируется под лимит ответа: если не влезли все компоненты, `truncationNotice` объясняет, чем добрать остаток (фильтры или `limit`/`offset`)
- `search_components({ query })` — ищет и по компонентам, и по фичам (TableCanvas/Filtering и т.п.); `role: "internal"` понижается штрафом, но не исключается
- `get_component({ name })` — компактная карточка. У `part`/`internal`-записей — `parentComponent` (куда идти за деталями); у владельца папки — `relatedExports` (какие части/внутренние примитивы у него есть, раз их не видно в `list_components` по умолчанию); у записей, дублирующих compound-часть родителя (`compoundPartOf`), пропсы не повторяются — карточка сразу отсылает к `get_component_props({ name: parent, part })`
- `get_component_props({ name, part? })` — полные пропсы (собственные + унаследованные от атома)
- `get_component_examples({ name, title? })`
- `list_features({ component })`, `get_feature({ component, feature })`, `get_feature_examples({ component, feature, title? })`
- `list_categories()`
- `get_installation_guide()`

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

## Резолв индекса — три уровня

1. **workspace** — если рядом физически лежит `packages/ui-kit` (мы внутри монорепо), сервер читает свежесобранный локальный индекс.
2. **installed** — версия `@daisforge/ui`, установленная у потребителя, уже содержит `mcp-data/component-index.json`.
3. **bundled** — запасной индекс, вшитый в сам `@daisforge/ui-mcp`. Нужен для версий `@daisforge/ui`, опубликованных до появления mcp-data (то есть всех текущих!), и для случая, когда библиотека вообще не установлена. В этом случае в ответах присутствует `dataVersionNotice`/`libNotInstalled`.

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

## Известные ограничения v1

- **Иконки, токены, миксины, утилиты не проиндексированы** — сознательная граница v1 (см. план). Следующий шаг.
- **`get_installation_guide` содержит устаревшее имя пакета** (`@sber-digital-finance-ui/ui-kit` вместо `@daisforge/ui`) — это старый контент из `_docs/meta/components-meta.json` (curated-источник, который индексер переиспользует как есть, не редактируя). Нужно поправить в самом `_docs/meta/components-meta.json` / meta-info пайплайне, а не здесь.
- **Три пары внутренних sub-компонентов с одинаковым именем** в разных папках (`TableFilterSelectListItem`, `ContainerStyled`, `Canvas` — есть и в `Table`/`TableCanvas`/`TableGlide`) — при коллизии имён в индекс попадает только последняя обработанная запись. Не влияет на публичные компоненты, только на внутренние helper-подкомпоненты таблиц.
- **Поиск (`search_components`) — простой substring-скоринг**, без embeddings/NLP. Хорошо работает на прямых терминах и на курированных `hint`, слабее — на общих словах, которые встречаются во многих фичах одновременно (например "ячеек" — общее слово почти для всех табличных фич).
- **`atomicDataMissing: true`** — у части compound-частей атомарных компонентов (`DrawerHeader`/`DrawerFooter`/`DrawerContent`, `Divider` и т.п.) нет отдельной записи в вендоренном снэпшоте атомарной команды — их API организовано в исходной документации как часть родительской страницы (`Drawer`), а не отдельными файлами. Обнажается прозрачно, сборка не падает.
