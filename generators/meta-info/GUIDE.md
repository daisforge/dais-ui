# Гайд: как оформлять документацию компонентов в Storybook

Краткое руководство для разработчиков. Цель — унифицировать stories и MDX так, чтобы meta-info парсер корректно собирал данные для AI-агента.

---

## Структура файлов компонента в Storybook

```
stories/MyComponent/
├── MyComponent.mdx              ← документация (Docs)
├── MyComponentAPI.mdx           ← описание типов (API)
└── MyComponent.stories.tsx      ← примеры
```

Для сложных компонентов с фичами — каждая фича в подпапке:

```
stories/TableCanvas/
├── TableCanvas.Docs.mdx         ← корневая документация
├── API/                         ← корневой API (ArgTypes)
├── TableCanvas.Filtering/
│   ├── TableCanvas.filtering.mdx
│   ├── TableCanvas.filteringAPI.mdx
│   └── TableCanvas.filtering.stories.tsx
└── ...
```

---

## 1. Docs MDX — документация компонента

```mdx
import { Meta, Stories } from '@storybook/blocks';
import * as MyStories from './MyComponent.stories';

<Meta of={MyStories} name="Docs" />

# MyComponent

Краткое описание компонента (1-2 предложения).

## Ключевые особенности

- Фича 1
- Фича 2
- Фича 3

## Compound-компоненты

_(если есть)_

## Особенности

_(детали реализации, важные нюансы, ограничения)_

Описание типов — в разделе [API](?path=/docs/категория-mycomponent-api--docs).

<Stories />
```

### Обязательные секции

| Секция                    | Когда нужна                           |
| ------------------------- | ------------------------------------- |
| `# Название` + описание   | Всегда                                |
| `## Ключевые особенности` | Всегда                                |
| `## Особенности`          | Если есть нюансы реализации           |
| Ссылка на API             | Всегда (в конце, перед `<Stories />`) |
| `<Stories />`             | Всегда (последний элемент)            |

### Опциональные секции

- `## Compound-компоненты` — список подкомпонентов
- `## Использование` — примеры импортов
- `## Базовый пример` — код-сниппет
- `## CSS-переменные` — кастомизация через CSS custom properties
- `## Типичные композиции` — сочетания с другими компонентами

---

## 2. API MDX — описание типов

```mdx
import { Meta } from '@storybook/blocks';
import { TypeSourceViewer } from '@df-storybook/utils/TypeSourceViewer';

<Meta title="Категория/MyComponent/API" />

# MyComponent API

## MyComponentProps

<TypeSourceViewer language="ts" filePath="packages/ui-kit/src/components/MyComponent/MyComponent.types.ts" typeName="MyComponentProps" />
```

### Правила

- **Один `<TypeSourceViewer>` на каждый тип** — парсер резолвит каждый по отдельности
- **`filePath`** — путь относительно корня монорепо
- **`typeName`** — точное имя типа/интерфейса как в файле
- Порядок атрибутов `filePath`/`typeName` — любой
- Для compound-компонентов — отдельный `<TypeSourceViewer>` для каждого подкомпонента

---

## 3. Stories — примеры

### Обязательные настройки meta

```tsx
const meta: Meta<typeof MyComponent> = {
  title: 'Категория/MyComponent',
  component: MyComponent,
  tags: ['!autodocs'], // ← ОБЯЗАТЕЛЬНО — отключаем авто-генерацию
};
```

**`tags: ['!autodocs']`** — без этого Storybook генерирует свою Docs-страницу, которая конфликтует с нашим MDX.

### Никакого JSDoc в stories!

```tsx
// ❌ НЕПРАВИЛЬНО — JSDoc комментарии НЕ парсятся, засоряют код
/**
 * ##### Базовый пример
 *
 * Показывает компонент с минимальными пропсами.
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const Basic: Story = { ... };

// ✅ ПРАВИЛЬНО — описание story через name
export const Basic: Story = {
  name: 'Базовый пример',
  ...storySourceDoc({ previewSource: 'shown' }),
  render: () => <MyComponent />,
};
```

JSDoc над export const **не попадает в meta-info JSON** — парсер его не читает. Вся документация пишется в MDX-файле.

### Паттерн с storySourceDoc

`storySourceDoc` управляет тем, что показывается в кнопке "Show code":

```tsx
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';

// Вариант 1: preCode + render (самый частый)
const preCode = `import { MyComponent } from '@daisforge/ui';`;

export const Basic: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => <MyComponent prop="value" />,
};

// Вариант 2: полный code через getFuncAsString (для сложных примеров)
function ComplexExample() {
  const [state, setState] = useState(false);
  return <MyComponent open={state} onToggle={() => setState(!state)} />;
}

const complexCode = `
import { MyComponent } from '@daisforge/ui';
import { useState } from 'react';

${getFuncAsString('packages/storybook/src/stories/MyComponent/MyComponent.stories.tsx', 'ComplexExample')}
`;

export const Complex: Story = {
  ...storySourceDoc({ code: complexCode, previewSource: 'shown' }),
  render: ComplexExample,
};
```

### Опции storySourceDoc

| Опция           | Значение                          | Что делает                                 |
| --------------- | --------------------------------- | ------------------------------------------ |
| `preCode`       | строка                            | Импорты, добавляемые перед кодом render    |
| `code`          | строка                            | Полный код примера (переопределяет render) |
| `previewSource` | `'shown'` / `'hidden'` / `'none'` | Видимость кода по умолчанию                |

### Импорты в preCode

В preCode пишем импорты **из пакета** (не из `@ui-kit/`):

```tsx
// ✅
const preCode = `import { Button, DrawerDF } from '@daisforge/ui';`;

// ❌
const preCode = `import { Button } from '@ui-kit/components/Button';`;
```

---

## Чеклист перед коммитом

- [ ] `tags: ['!autodocs']` в meta
- [ ] Нет JSDoc комментариев над `export const ... : Story`
- [ ] Есть `MyComponent.mdx` с секциями: заголовок, ключевые особенности, ссылка на API, `<Stories />`
- [ ] Есть `MyComponentAPI.mdx` с `<TypeSourceViewer>` для каждого публичного типа
- [ ] `storySourceDoc` с `preCode` или `code` во всех stories с render
- [ ] Импорты в preCode из `@daisforge/ui`, а не из `@ui-kit/`

---

## Эталонные компоненты

- **DrawerDF** — compound-компонент с getFuncAsString, без JSDoc
- **PageLayout** — простой компонент с типичными композициями
- **TableCanvas** — сложный компонент с features, подпапками, argTypesMapping

---

## Проблемные места — что нужно исправить

### JSDoc комментарии над story exports (удалить)

Парсер meta-info **не читает JSDoc** над `export const`. Эти комментарии не попадают в JSON для AI-агента, но засоряют код и создают иллюзию документированности.

Затронутые компоненты (~25 файлов):

| Компонент           | Файл                                                  |
| ------------------- | ----------------------------------------------------- |
| PageLayout          | `PageLayout/PageLayout.stories.tsx`                   |
| ModalDF             | `ModalDF/ModalDF.stories.tsx`                         |
| ModalDFConfirmation | `ModalDFConfirmation/ModalDFConfirmation.stories.tsx` |
| EmptyState          | `EmptyState/EmptyState.stories.tsx`                   |
| ErrorPage           | `ErrorPage/ErrorPage.stories.tsx`                     |
| Collapse            | `Collapse/Collapse.stories.tsx`                       |
| MassActions         | `MassActions/MassActions.stories.tsx`                 |
| FiltersActions      | `FiltersActions/FiltersActions.stories.tsx`           |
| AnalyticalWidget    | `AnalyticalWidget/AnalyticalWidget.stories.tsx`       |
| Widget              | `Widget/Widget.stories.tsx`                           |
| PopupDF             | `PopupDF/PopupDF.stories.tsx`                         |
| PopoverDF           | `PopoverDF/PopoverDF.stories.tsx`                     |
| BlockGradientScroll | `BlockGradientScroll/BlockGradientScroll.stories.tsx` |
| SplitView           | `SplitView/SplitView.stories.tsx`                     |
| PageTitle           | `PageTitle/PageTitle.stories.tsx`                     |
| Box                 | `Box/Box.stories.tsx`                                 |
| TextField           | `TextField/TextField.stories.tsx`                     |
| TextFieldSearch     | `TextFieldSearch/TextFieldSearch.stories.tsx`         |
| TextArea            | `TextArea/TextArea.stories.tsx`                       |
| Autocomplete        | `Autocomplete/Autocomplete.stories.tsx`               |
| AutoCompleteSearch  | `AutoCompleteSearch/AutoCompleteSearch.stories.tsx`   |
| TableTabs           | `TableTabs/TableTabs.stories.tsx`                     |
| Notification        | `Notification/Notification.stories.tsx`               |

**Что делать:** удалить все `/** ... */` блоки, стоящие непосредственно перед `export const ... : Story`. Если в JSDoc было полезное описание — перенести его в `.mdx` файл документации.

### Нет `storySourceDoc` (добавить preCode/code)

Без `storySourceDoc` парсер пытается извлечь код автоматически по паттерну (args-only, inline-render). Это работает, но результат хуже: нет импортов, нет контекста для разработчика.

| Компонент           | Текущий паттерн           | Что нужно                                    |
| ------------------- | ------------------------- | -------------------------------------------- |
| EmptyState          | args-only                 | Добавить `preCode` с импортом                |
| ErrorPage           | args-only                 | Добавить `preCode` с импортом                |
| BlockGradientScroll | args-only                 | Добавить `preCode` с импортом                |
| Layout              | args-only                 | Добавить `preCode` с импортом                |
| Collapse            | inline code в docs params | Перевести на `storySourceDoc`                |
| Container           | inline code в docs params | Перевести на `storySourceDoc`                |
| TableTabs           | render без storySourceDoc | Добавить `storySourceDoc` с `code`/`preCode` |

**Что делать:** добавить `...storySourceDoc({ preCode })` в каждую story. Для args-only stories достаточно:

```tsx
const preCode = `import { EmptyState } from '@daisforge/ui';`;

export const Default: Story = {
  ...storySourceDoc({ preCode }),
  args: { ... },
};
```

### TableContract — оставить как есть

TableContract имеет нестандартную структуру (Docs.frontend.mdx, Docs.backend.mdx, CustomArgTypes, StoryCard). Рефакторинг не планируется.
