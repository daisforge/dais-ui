# meta-info — генератор мета-информации для AI-агента

Скрипт, который читает Storybook-файлы (MDX-документация + stories-примеры) и собирает всё в один большой JSON. Этот JSON потом использует AI-чат-бот другой команды Сбера, чтобы отвечать разработчикам на вопросы про компоненты нашей UI-библиотеки.

## Быстрый старт

Через npm-скрипты из корня проекта (удобно, не надо помнить путь):

```bash
npm run meta          # один общий файл (режим по умолчанию)
npm run meta:split    # по файлу на компонент
npm run meta:both     # и то, и другое сразу
```

Либо напрямую через node с флагом:

```bash
node generators/meta-info/generate-meta.js            # single (по умолчанию)
node generators/meta-info/generate-meta.js --split    # по файлу на компонент
node generators/meta-info/generate-meta.js --both      # оба режима
```

### Режимы вывода

| Режим              | Флаг      | Результат                                                            |
| ------------------ | --------- | -------------------------------------------------------------------- |
| single (умолчание) | —         | `_docs/meta/components-meta.json` — весь JSON одним файлом           |
| split              | `--split` | `_docs/meta/components/<ComponentName>.json` — по файлу на компонент |
| both               | `--both`  | и общий файл, и по-файловый вывод                                    |

В режиме **split** имя файла = имя компонента (`TableCanvas.json`, `ModalDF.json`, …),
а внутри — только его конфигурация (объект компонента). Дополнительно рядом
пишется `_manifest.json` с мета-инфо (`generatedAt`, `version`, `instructions`,
`pages`) и списком имён компонентов.

> Папка `components/` при `--split` полностью пересоздаётся — удалённые
> компоненты не остаются «висеть» старыми файлами.

Имена файла/папки настраиваются в `config/meta-config.json` через
`outputFile` (single) и `componentsDir` (split).

---

## Структура папки

```
generators/meta-info/
├── README.md                         ← этот файл
├── generate-meta.js                  ← точка входа (оркестратор)
├── config/
│   ├── meta-config.json              ← какие компоненты собирать и как
│   ├── meta-config.types.ts          ← TypeScript-типы конфига
│   └── instructions.md               ← инструкция для AI-агента (вшивается в JSON)
└── parsers/
    ├── resolveComponent.js           ← поиск файлов компонента на диске
    ├── parseMdx.js                   ← MDX → чистый Markdown
    ├── parseStories.js               ← .stories.tsx → массив примеров с кодом
    └── extractRender.js              ← низкоуровневый парсер текста (скобки, render, args)
```

---

## Общая картина: как данные текут от файлов до JSON

```
┌─────────────────────────────────────────────────────────────────────┐
│                        generate-meta.js                             │
│                                                                     │
│  1. Регенерирует lookup-таблицы (types.string.json, functions.      │
│     string.json) — чтобы данные были свежими                        │
│                                                                     │
│  2. Читает meta-config.json — список компонентов                    │
│                                                                     │
│  3. Для каждого компонента:                                         │
│     ┌──────────────────────────────────────────────────────────┐    │
│     │ resolveComponent()                                       │    │
│     │   Находит файлы на диске: *.mdx, *.stories.tsx           │    │
│     └─────────────────────┬────────────────────────────────────┘    │
│                           │                                         │
│              ┌────────────┴────────────┐                            │
│              ▼                         ▼                            │
│     ┌────────────────┐       ┌──────────────────┐                  │
│     │  parseMdx()    │       │ parseStories()   │                  │
│     │  MDX → Markdown│       │ stories → код    │                  │
│     │  + типы из     │       │ примеров         │                  │
│     │  typesMap       │       │                  │                  │
│     └────────────────┘       └──────────────────┘                  │
│                                                                     │
│  4. Собирает всё в JSON, записывает в _docs/meta/                  │
│                                                                     │
│  5. Выводит диагностику: ошибки, предупреждения, статистику        │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Шаг за шагом: что происходит при запуске

### Шаг 0. Регенерация lookup-таблиц

Перед началом скрипт запускает два внешних генератора:

```
generate-storybook-types-as-string-json.js  →  types.string.json
generate-storybook-func-as-string-json.js   →  functions.string.json
```

Эти JSON-файлы — словари. Ключ — строка вида `"путь/к/файлу.ts$$$ИмяТипа"`, значение — текст типа или функции.

**types.string.json** заполняется так: генератор сканирует MDX-файлы Storybook, находит вызовы `<TypeSourceViewer filePath="..." typeName="..." />` и `getTypeAsString('путь', 'имя')`, извлекает исходный код типов из `.ts` файлов и записывает в словарь.

**functions.string.json** — аналогично, но для функций: сканирует вызовы `getFuncAsString('путь', 'имя')` и записывает исходный код функций.

### Шаг 1. Загрузка данных

Скрипт читает в память:

- `meta-config.json` — список компонентов (что собирать)
- `types.string.json` — словарь типов (для подстановки в MDX)
- `functions.string.json` — словарь функций (для подстановки в stories)

### Шаг 2. Обработка каждого компонента

Для каждого компонента из конфига вызывается цепочка: `resolveComponent` → `parseMdx` + `parseStories`.

Подробнее про каждый шаг — ниже.

### Шаг 3. Запись JSON

Собирает всё в объект:

```json
{
  "generatedAt": "2026-04-29T...",
  "version": "1.0.0",
  "instructions": "текст из instructions.md",
  "components": { ... }
}
```

Записывает в `_docs/meta/components-meta.json`.

### Шаг 4. Диагностика

Выводит в терминал цветную таблицу с ошибками и предупреждениями:

- Ошибки (красные): пустой код стори, нерезолвленные функции `[meta-info]`
- Предупреждения (жёлтые): нет документации, нет API, нет примеров
- Статистика: сколько компонентов, stories, features

---

## Конфигурация (meta-config.json)

Конфиг определяет **что** попадает в мету. Компонент не перечислен — не попадёт.

### Простой компонент — строка

```json
"DrawerDF"
```

Скрипт ищет папку `packages/storybook/src/stories/DrawerDF/`, находит в ней все `*.mdx` и `*.stories.tsx` автоматически. MDX-файлы с "api" в имени идут в `apiDocs`, остальные — в `docs`.

### Сложный компонент — объект

```json
{
  "name": "TableCanvas",
  "category": "Локальные компоненты",
  "description": "Канвасная таблица на базе HTML Canvas.",
  "hint": "Основная таблица. Если спрашивают 'таблицу' — скорее всего это.",

  "rootDocs": "TableCanvas/TableCanvas.Docs.mdx",

  "api": {
    "dir": "TableCanvas/API",
    "argTypesMapping": {
      "TableCanvas": {
        "filePath": "packages/ui-kit/src/components/TableCanvas/TableCanvas.tsx",
        "typeName": "TableProps"
      }
    }
  },

  "features": ["TableCanvas.Filtering", "TableCanvas.Sorting"],
  "exclude": ["TableCanvas.SimpleTable"]
}
```

| Поле                  | Что делает                                                                              |
| --------------------- | --------------------------------------------------------------------------------------- |
| `rootDocs`            | Путь к MDX с основной документацией                                                     |
| `api.dir`             | Папка с MDX-файлами API (TypeSourceViewer, CustomArgTypes)                              |
| `api.argTypesMapping` | Маппинг `<CustomArgTypes of={X} />` → путь к типу (см. раздел про CustomArgTypes)       |
| `features[]`          | Подпапки-фичи, каждая обрабатывается как мини-компонент со своими docs/api/stories      |
| `exclude[]`           | Подпапки, которые нужно пропустить                                                      |
| `hint`                | Подсказка AI-агенту для разрешения неоднозначностей (TableCanvas vs Table vs TableTabs) |
| `category`            | Категория: "Локальные компоненты", "Композиции", "Формы"                                |
| `scope`               | `"internal"` — компонент для конкретной команды; `"general"` — для всех                 |

### Откуда берётся category

Приоритет:

1. Поле `category` в конфиге (для сложных компонентов)
2. `<Meta title="Категория/Компонент" />` из MDX-файла
3. `title: 'Категория/Компонент'` из meta в stories-файле

Пример: `<Meta title="Композиции/EmptyState" />` → category = `"Композиции"`

---

## Парсинг MDX (parseMdx.js)

MDX — это Markdown с JSX-компонентами. В Storybook-е MDX используется для документации: описание компонента, его пропсы, примеры.

Наша задача — превратить MDX в чистый Markdown, попутно подставив реальные типы вместо JSX-компонентов.

### Что parseMdx делает по шагам

1. **Убирает import-строки** — они нужны только Storybook-у
2. **Убирает `<Meta />`, `<Stories />`** — служебные теги Storybook
3. **Заменяет `<TypeSourceViewer />`** — подставляет реальный TypeScript-тип
4. **Заменяет `<CustomArgTypes />`** — подставляет пропсы компонента
5. **Убирает лишние пустые строки**

### Как работает TypeSourceViewer

В MDX-файле встречается:

```jsx
<TypeSourceViewer filePath="packages/ui-kit/src/components/EmptyState/EmptyState.types.ts" typeName="EmptyStateProps" />
```

Парсер:

1. Достаёт `filePath` и `typeName` из атрибутов
2. Формирует ключ: `"packages/ui-kit/.../EmptyState.types.ts$$$EmptyStateProps"`
3. Ищет этот ключ в `typesMap` (загруженном из `types.string.json`)
4. Если нашёл — вставляет блок ` ```typescript ... ``` `
5. Если не нашёл — оставляет HTML-комментарий: `<!-- TypeSourceViewer: EmptyStateProps (не найден) -->`

**Важно**: порядок атрибутов `filePath` и `typeName` может быть любым — парсер обрабатывает оба варианта.

**Откуда берётся types.string.json?** Его генерирует `generate-storybook-types-as-string-json.js`. Этот скрипт сканирует все MDX-файлы Storybook, находит все `<TypeSourceViewer>` и вызовы `getTypeAsString()`, парсит указанные .ts файлы и записывает результат в JSON. То есть в types.string.json попадают только те типы, на которые уже есть ссылки в MDX.

### Как работает CustomArgTypes

В MDX-файле встречается:

```jsx
<CustomArgTypes of={TableCanvas} />
```

Это Storybook-компонент, который показывает таблицу пропсов компонента. Наш парсер подставляет вместо него реальный TypeScript-тип.

Цепочка резолвинга:

````
MDX: <CustomArgTypes of={TableCanvas} />
         │
         ▼
meta-config.json → api.argTypesMapping:
  "TableCanvas": {
    "filePath": ".../TableCanvas.tsx",
    "typeName": "TableProps"
  }
         │
         ▼
Ключ: ".../TableCanvas.tsx$$$TableProps"
         │
         ▼
typesMap[ключ] → текст типа из types.string.json
         │
         ▼
Результат в Markdown:
  ### TableProps
  ```typescript
  export type TableProps = { ... }
````

```

**Если маппинг не задан** (компонента нет в `argTypesMapping`):
→ `<!-- CustomArgTypes: TableCanvas (нет маппинга в конфиге) -->`

**Если маппинг есть, но типа нет в typesMap**:
→ `<!-- CustomArgTypes: TableCanvas -> TableProps (не найден в types.string.json) -->`

### Фолбек для типов (copyTypeAsStringSync)

Бывает ситуация: `argTypesMapping` задан, но типа нет в `types.string.json` (потому что на него нет ссылки через `<TypeSourceViewer>` нигде в MDX). Тогда включается фолбек:

```

1. typesMap[ключ] — ищем в types.string.json
   │
   не нашли
   │
   ▼
2. copyTypeAsStringSync(filePath, typeName)
   — читает .ts файл напрямую
   — парсит тип с помощью подсчёта скобок
   — обрабатывает дженерики <>, пересечения &, объединения |,
   стрелочные функции =>, условные типы, as const
   — возвращает полный текст типа

```

Этот фолбек применяется в `generate-meta.js` при обработке сложных компонентов: если после парсинга MDX массив `api[]` остался пустым — скрипт проходит по `argTypesMapping` и достаёт типы напрямую.

---

## Парсинг stories (parseStories.js)

Stories — это файлы `*.stories.tsx`, где каждый `export const` — отдельный пример использования компонента. Наша задача — извлечь из каждой стори код, который можно показать разработчику.

### Общая логика

```

.stories.tsx файл
│
▼
extractStoryExports() — находит все export const ... : Story = { ... }
│
▼
Для каждой стори:

1. Проверяем storySourceDoc({ code: varName }) — явно указанный код (приоритет 1)
2. detectStoryPattern() — определяем паттерн
3. По паттерну извлекаем код (приоритет 2)
   │
   ▼
   Массив: [{ exportName, displayName, type, code }]

````

### Приоритет 1: storySourceDoc

Автор стори может явно указать переменную с готовым кодом:

```tsx
export const MyStory: Story = {
  render: MyComponent,
  parameters: {
    storySourceDoc({ code: myCode })
  }
};

const myCode = `import { Button } from '...';\n\n${getFuncAsString('path', 'MyComponent')}`;
````

Парсер находит `storySourceDoc({ code: myCode })`, затем ищет `const myCode = \`...\`` в файле и резолвит интерполяции (см. раздел "Резолвинг интерполяций").

### Приоритет 2: автоопределение по паттерну

Если `storySourceDoc` не указан, парсер смотрит на структуру объекта стори и определяет один из 4 паттернов:

#### Паттерн 1: args-only

```tsx
export const Default: Story = {
  args: {
    label: 'Click me',
    size: 's',
    disabled: false,
  },
};
```

**Признак**: нет ни `render:`, ни `render()` — только `args`.

**Что извлекает**: объект `args: { ... }` как текст.

**type в JSON**: `"args-only"` — это не полный код, а набор пропсов. Storybook сам рендерит `<ComponentName {...args} />`. AI-агент должен знать имя компонента из поля `title`.

#### Паттерн 2: inline-render (самый частый, ~114 файлов)

```tsx
export const WithIcon: Story = {
  render: (args) => (
    <Button {...args} contentLeft={<IconSearch />}>
      Найти
    </Button>
  ),
};
```

**Признак**: есть `render:` и после него `(` (стрелочная функция) или `function`.

**Что извлекает**: тело render-функции. Но есть три подслучая:

**Подслучай 2а — render вызывает локальную функцию:**

```tsx
render: (args) => <StoryRender {...args} />;
```

Парсер видит паттерн `<StoryRender {...args} />`, ищет определение `function StoryRender` или `const StoryRender: FC<...> = ...` в файле и показывает его код вместо однострочного render.

**Подслучай 2б — render использует ...args:**

```tsx
render: (args) => <TextField {...args} onChange={handleChange} />;
```

Парсер добавляет блок `args` к render-у, чтобы было видно какие пропсы передаются.

**Подслучай 2в — обычный render:**

```tsx
render: () => <MyComponent prop="value" />;
```

Показывает render как есть.

Во всех подслучаях, если у стори есть `preCode` — он добавляется перед render. preCode — это обычно импорты, типы и вспомогательные переменные, нужные для понимания примера.

**type в JSON**: `"full-code"`

#### Паттерн 3: named-function (~15 файлов)

```tsx
export const DrawerExample: Story = {
  render: DrawerWithOneMainContent,
};

const drawerCode = `import { DrawerDF } from '...';\n\n${getFuncAsString('path', 'DrawerWithOneMainContent')}`;
```

**Признак**: `render: ИмяФункции` (идентификатор с заглавной буквы, не стрелка).

**Как ищет код** (3 места, от надёжного к фолбеку):

1. **Шаблонная строка с getFuncAsString**: ищет `const xxxCode = \`...\``в файле, где внутри есть`getFuncAsString('path', 'DrawerWithOneMainContent')`. Подставляет реальный код функции из `funcsMap` (functions.string.json).

2. **Прямой поиск в functions.string.json**: ищет ключ `"...$$$DrawerWithOneMainContent"` в funcsMap.

3. **Определение функции в файле**: ищет `function DrawerWithOneMainContent() { ... }` прямо в stories-файле.

**type в JSON**: `"full-code"`

#### Паттерн 4: render-method

```tsx
export const Example: Story = {
  render() {
    const [open, setOpen] = useState(false);
    return <Modal open={open} />;
  },
};
```

**Признак**: `render()` — метод объекта (без двоеточия после render, в отличие от `render: `).

**Что извлекает**: тело метода + preCode если есть.

**type в JSON**: `"full-code"`

### Как работает preCode

preCode — дополнительный код, который показывается ПЕРЕД render-ом. Обычно это импорты, типы, хелперы.

В stories preCode задаётся через `storySourceDoc`:

```tsx
parameters: {
  storySourceDoc({
    preCode: `import { useState } from 'react';\nimport { Button } from '@dais-ui/ui-kit';`,
  });
}
```

Парсер ищет preCode в 4 форматах:

1. `preCode: \`шаблонная строка\`` — прямо в объекте стори
2. `preCode: 'обычная строка'` — в одинарных кавычках
3. `preCode: someVar` — ссылка на переменную → ищет `const someVar = \`...\`` в файле
4. `preCode` (shorthand) — `{ preCode }` → ищет `const preCode = \`...\`` в файле

### Резолвинг интерполяций

Шаблонные строки в preCode и code-переменных могут содержать интерполяции:

```tsx
const myCode = `import { Button } from '...';\n\n${getFuncAsString('path/to/file', 'MyFunction')}`;
```

Функция `resolveInterpolations()` заменяет два типа интерполяций:

1. **`${getFuncAsString('filePath', 'funcName')}`** → реальный код функции из `funcsMap`:
   - Формирует ключ `"filePath$$$funcName"`
   - Ищет в `funcsMap` (из functions.string.json)
   - Если не нашёл → `// [meta-info] funcName не найдена (ключ: ...)`

2. **`${varName}`** → содержимое переменной:
   - Ищет `const varName = \`...\`` в файле
   - Подставляет содержимое шаблонной строки
   - Если не нашёл → оставляет `${varName}` как есть (может быть код типа `${i + 1}`)

Пример — PageLayout, где preCode используется в нескольких стори:

```tsx
const preCode = `import { PageLayout } from '@dais-ui/ui-kit';`;
const pageLayoutCode = `${preCode}\n\n${getFuncAsString('path', 'PageLayoutExample')}`;
```

Парсер сначала заменит `${getFuncAsString(...)}` на реальный код, потом `${preCode}` на содержимое переменной.

---

## Низкоуровневый парсер (extractRender.js)

Этот файл — «ножницы» для текста. Он не знает про логику стори, а просто умеет вырезать куски кода по скобкам и паттернам.

### extractBalancedBlock — ядро парсера

Все функции извлечения построены на одной базовой: `extractBalancedBlock(text, startIndex, openChar, closeChar)`.

Она находит парную закрывающую скобку для открывающей, считая глубину вложенности. Но просто считать скобки нельзя — код содержит скобки внутри строк, шаблонов и комментариев, которые не являются настоящими скобками.

Пример проблемы — JSX-комментарий:

```tsx
render: () => (
  <div>
    {/* это комментарий */}
    <Button />
  </div>
);
```

Здесь `{` от `{/*` — это НЕ открывающая фигурная скобка объекта. Без пропуска комментариев парсер думает, что это настоящая `{`, ищет для неё парную `}`, и весь подсчёт ломается.

Поэтому `extractBalancedBlock` пропускает:

- **Строки** `'...'` и `"..."` — через `skipString()`, учитывает экранирование `\'`
- **Шаблонные строки** `` `...${...}...` `` — через `skipTemplateLiteral()`, рекурсивно обрабатывает вложенные шаблоны `` `${`nested`}` ``
- **Однострочные комментарии** `// ...` — через `skipLineComment()`, до конца строки
- **Блочные комментарии** `/* ... */` — через `skipBlockComment()`, до `*/`

### Формат render-функций

`extractRenderBody()` поддерживает 4 формата записи render:

```
render: (args) => { return <Comp /> }     — стрелочная с блоком {}
render: () => (<Comp />)                   — стрелочная с круглыми скобками ()
render: () => <Comp />                     — стрелочная без скобок (голый JSX)
render: function Name() { ... }            — обычная функция
```

Для голого JSX (без скобок-обёрток) используется `extractUntilCommaOrEnd()` — специальная функция, которая читает до запятой или закрывающей скобки на нулевой глубине. Нужна потому что у такого JSX нет чёткого закрывающего символа.

---

## Что попадает в выходной JSON

### Простой компонент

````json
{
  "EmptyState": {
    "title": "EmptyState",
    "category": "Композиции",
    "docs": "# EmptyState\n\nОписание из MDX...",
    "apiDocs": "### EmptyStateProps\n\n```typescript\nexport type...\n```",
    "api": [
      {
        "typeName": "EmptyStateProps",
        "source": "export type EmptyStateProps = { ... }"
      }
    ],
    "stories": [
      {
        "exportName": "SizeS",
        "displayName": "Size S",
        "type": "args-only",
        "code": "{ label: 'Пусто', size: 's' }"
      },
      {
        "exportName": "WithActions",
        "displayName": "With Actions",
        "type": "full-code",
        "code": "() => (\n  <EmptyState>\n    <Button>Добавить</Button>\n  </EmptyState>\n)"
      }
    ]
  }
}
````

### Сложный компонент (с features)

```json
{
  "TableCanvas": {
    "title": "TableCanvas",
    "category": "Локальные компоненты",
    "hint": "Основная канвасная таблица...",
    "docs": "Описание из rootDocs MDX...",
    "apiDocs": "...",
    "api": [
      { "typeName": "TableProps", "source": "export type TableProps = { ... }" },
      { "typeName": "ColumnConfig", "source": "export type ColumnConfig<...> = { ... }" }
    ],
    "stories": [],
    "features": {
      "Filtering": {
        "docs": "Описание фильтрации...",
        "apiDocs": "...",
        "api": [{ "typeName": "FilteringConfig", "source": "..." }],
        "stories": [{ "exportName": "BasicFiltering", "type": "full-code", "code": "..." }]
      },
      "Sorting": { ... }
    }
  }
}
```

### Поля компонента

| Поле          | Что это                            | Откуда берётся                                                       |
| ------------- | ---------------------------------- | -------------------------------------------------------------------- |
| `title`       | Имя компонента                     | Из конфига                                                           |
| `category`    | Категория                          | Конфиг → MDX Meta → stories meta (в порядке приоритета)              |
| `type`        | wrapper / composition / standalone | Из конфига                                                           |
| `scope`       | internal / general                 | Из конфига                                                           |
| `hint`        | Подсказка для AI                   | Из конфига                                                           |
| `description` | Описание                           | Из конфига                                                           |
| `docs`        | Основная документация              | parseMdx из docs-MDX файлов                                          |
| `apiDocs`     | Текстовое описание API             | parseMdx из api-MDX файлов                                           |
| `api[]`       | TypeScript типы                    | TypeSourceViewer/CustomArgTypes из MDX → фолбек copyTypeAsStringSync |
| `stories[]`   | Примеры кода                       | parseStories из .stories.tsx                                         |
| `features{}`  | Подфичи (у сложных компонентов)    | Каждая подпапка → свои docs/api/stories                              |

---

## Зависимости от внешних модулей

```
generators/meta-info/
    ├── uses → generators/storybook/copy-types-as-string.js
    │           (copyTypeAsStringSync — фолбек для парсинга типов)
    │
    ├── uses → generators/helpers.js
    │           (getStrWithReplacedNewLineSymbols — нормализация \r\n → \n)
    │
    ├── reads → packages/storybook/src/types.string.json
    │           (словарь типов, генерируется generate-storybook-types-as-string-json.js)
    │
    └── reads → packages/storybook/src/functions.string.json
                (словарь функций, генерируется generate-storybook-func-as-string-json.js)
```

---

## Диагностика

После генерации скрипт выводит цветную панель:

```
╔══════════════════════════════════════════════════════╗
║  Диагностика meta-info                               ║
╠══════════════════════════════════════════════════════╣
║  Компонентов:  34  |  Stories: 253  |  Features:  47  ║
╠══════════════════════════════════════════════════════╣
║  ПРЕДУПРЕЖДЕНИЯ (1)                                   ║
║  ⚠ Table: нет корневой документации                   ║
╚══════════════════════════════════════════════════════╝
```

**Ошибки** (красные) — что-то точно сломано:

- Пустой код у стори
- Маркер `[meta-info]` в коде — функция не найдена, тип не резолвлен

**Предупреждения** (жёлтые) — может быть ок, но стоит проверить:

- Нет документации (docs)
- Нет описания API
- Нет примеров (stories)

---

## Как добавить новый компонент

### Простой компонент

1. Убедись, что в Storybook есть папка `packages/storybook/src/stories/MyComponent/` с MDX и stories-файлами
2. Добавь строку `"MyComponent"` в массив `components` в `config/meta-config.json`
3. Запусти `node generators/meta-info/generate-meta.js`
4. Проверь диагностику — нет ли ошибок

### Сложный компонент (с подфичами или нестандартной структурой)

1. Добавь объект в `config/meta-config.json`:

```json
{
  "name": "MyComponent",
  "category": "Локальные компоненты",
  "rootDocs": "MyComponent/MyComponent.Docs.mdx",
  "api": {
    "dir": "MyComponent/API",
    "argTypesMapping": {
      "MyComponent": {
        "filePath": "packages/ui-kit/src/components/MyComponent/MyComponent.types.ts",
        "typeName": "MyComponentProps"
      }
    }
  },
  "features": ["MyComponent.FeatureA", "MyComponent.FeatureB"]
}
```

2. Запусти генерацию и проверь результат

---

## Частые проблемы и решения

### Тип обрезается или пустой

Скорее всего тип содержит сложные дженерики (например `type X<T = {}> = ...`), а в `types.string.json` его нет. Фолбек `copyTypeAsStringSync` должен справиться, но проверь:

- Есть ли `argTypesMapping` в конфиге для этого компонента
- Правильный ли путь к файлу и имя типа

### Код стори содержит `[meta-info] Функция X не найдена`

Функция не найдена ни в `functions.string.json`, ни в самом файле stories. Проверь:

- Правильно ли записан `getFuncAsString` в stories-файле
- Запустился ли `generate-storybook-func-as-string-json.js` без ошибок

### Код стори содержит `${getFuncAsString(...)}`

Интерполяция не резолвилась. Проверь:

- preCode содержит `${getFuncAsString(...)}` — `extractInlineRenderCode` должен вызывать `resolveInterpolations`
- Формат вызова: `getFuncAsString('путь', 'имя')` — одинарные кавычки, два аргумента

### Нет типов в api[] у сложного компонента

Порядок поиска типов для сложных компонентов:

1. `<TypeSourceViewer>` и `<CustomArgTypes>` в MDX → `typesMap`
2. Если после MDX api[] пустой → `argTypesMapping` → `typesMap` → `copyTypeAsStringSync`

Если ничего не сработало — проверь, что `argTypesMapping` задан в конфиге и пути корректны.
