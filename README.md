## Библиотека компонентов dais-ui/ui-kit

**Название**: @daisforge/ui
**Тип**: Моно-репозиторий (Monorepo) на базе Lerna + Nx

---

#### Цели

Единая библиотека компонентов в которой будет большинство необходимых компонентов и утилит для создания веб-приложений в рамках Блока финансов. В которой абсолютно все компоненты будут соответствовать дизайн-системе. Кроме этого сами компоненты будут максимально удобны для использования.
​

#### Структура

Библиотека пользовательских компонентов состоит из 2-х пакетов: ui-kit, storybook.

- ui-kit - основной проект из которого собирается npm-пакет. В данной директории находятся переиспользуемые компоненты, утилиты, иконки, и др., которые в последствии предоставляются пользователям.
- storybook - пакет, в котором размещаются story для компонентов. Для визуального тестирования компонентов и для ознакомления пользователей с ними. Данный пакет выкладывается на [стенд библиотеки][stend-storybook]
  ​

#### Установка и использование подробно описана на [отдельной странице][introStorybookSite] или в [файле][introStorybook].

##### С информацией по контрибьюту - можете ознакомиться в файле [Contributing.md](./Contributing.md)

[stend-storybook]: http://df-storybook.sh5.dev-gen1-ds.dddddd.ru/?path=/docs/%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--docs
[introStorybookSite]: http://df-storybook.sh5.dev-gen1-ds.dddddd.ru/?path=/docs/%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--docs
[introStorybook]: ./packages/storybook/src/storybook-intro/intro.mdx

## 📋 Детальный обзор проекта

## 🏗️ Архитектура

### Структура моно-репозитория

```
@daisforge/ui/
├── packages/
│   ├── ui-kit/           # Основной npm-пакет с компонентами
│   ├── storybook/        # Storybook для документации и тестирования
│   ├── vite-project/     # Тестовый проект на Vite
│   ├── webpack-finportal-platform/  # Тестовый проект на Webpack (Finportal)
│   └── webpack-project-finalheader/ # Тестовый проект на Webpack (Finalheader)
└── generators/           # Скрипты генерации кода
```

### Инструменты и технологии

| Категория        | Технология                                         |
| ---------------- | -------------------------------------------------- |
| **Моно-репо**    | Lerna + Nx (v19.0.2)                               |
| **Сборка**       | Vite (v5.0.0) с плагинами                          |
| **Язык**         | TypeScript 5.4.2                                   |
| **React**        | 18.3.1                                             |
| **Стили**        | styled-components 5.3.1                            |
| **UI-фреймворк** | @salutejs/sdds-finai (Plasma Design System)        |
| **Тестирование** | Vitest + @storybook/test-runner (screenshot tests) |
| **Линтинг**      | ESLint + Prettier + Husky                          |
| **State 管理**   | SWR, react-hook-form, Zod                          |

---

## 📦 Структура ui-kit

### Основные разделы компонентов

| Директория        | Кол-во | Описание                                  |
| ----------------- | ------ | ----------------------------------------- |
| `components/`     | 103+   | Базовые UI-компоненты                     |
| `formComponents/` | 14+    | Компоненты для react-hook-form            |
| `layouts/`        | 5+     | Макеты страниц и секций                   |
| `tokens/`         | 7+     | Дизайн-токены (цвета, типографика и т.д.) |
| `utils/`          | 24+    | Утилиты и хуки                            |
| `mixins/`         | 2+     | CSS-миксины                               |
| `styles/`         | 4+     | Глобальные стили и классы                 |

### Типы компонентов (по классификации в мета-данных)

1. **Обёртки (wrapper)** — поверх атомарных компонентов @salutejs/sdds-finai

   - `DrawerDF`, `ModalDF`, `PopoverDF` — с compound-компонентами
   - `TextField`, `TextArea`, `Autocomplete` — с дополнительной логикой
   - `Notification`, `Switch` — обёртки над атомарными

2. **Композиции (composition)** — сборные компоненты

   - `FiltersActions` — панель фильтров
   - `Layout` — разметка страницы
   - `PageLayout` — layout с header/sidebar/content
   - `Container`, `BlockTitle`, `Widget`

3. **Самостоятельные (standalone)** — собственная реализация

   - `TableCanvas` — основная канвасная таблица (Glide Data Grid)
   - `Table` — устаревшая HTML-таблица (react-table)
   - `TableTabs`, `Box`, `BlockGradientScroll`

4. **Form Components** — интеграция с react-hook-form
   - `FormTextField`, `FormTextArea`, `FormSelect`, `FormAutocomplete` и др.

---

## 🎨 Стили и дизайн-токены

### Токены

```bash
tokens/
├── color/        # Цвета (primary, secondary, background и т.д.)
├── typography/   # Типографика (шрифты, размеры, веса)
├── gradient/     # Градиенты
├── border/       # Границы (radius, width)
├── shadow/       # Тени
└── spacing/      # Отступы (padding, margin)
```

**Автогенерация**: Токены генерируются автоматически из `@salutejs/sdds-themes` через скрипт `generate-ui-kit-tokens-named-exports.js`.

### Стилизация

- **Основной CSS-in-JS**: `styled-components`
- **Плагин**: `babel-plugin-styled-components` (displayName: true)
- **Целевые библиотеки**: `@salutejs/plasma-typo`, `@salutejs/sdds-finai`, `@salutejs/sdds-themes`

---

## 🔧 Паттерны и соглашения

### 1. Модульная архитектура (index.ts)

Каждая директория имеет `index.ts` для экспорта:

```bash
components/Button/index.ts
components/Table/index.ts
utils/hooks/index.ts
utils/eventBus/index.ts
```

**Глобальный экспорт**: `packages/ui-kit/src/index.ts` содержит все экспорты.

### 2. mergeRefs

```typescript
// utils/mergeRefs.ts
<div ref={mergeRefs(ref1, ref2, ref3)} />
```

Слияние React refs (поддержка function + object refs).

### 3. bubble() — Custom Events

```typescript
// utils/bubble.ts
bubble(element, 'event-name', data, { bubbles: true, composed: true });
```

Создание кастомных событий с всплытием и crossing Shadow DOM границ.

### 4. clickStream & eventBus

- **clickStream** — провайдер событий кликов для аналитики
- **eventBus** — pub/sub система для коммуникации между компонентами

### 5. contextStoreWithSelectors

```typescript
export const createStore = <T>(state: T) => {
  // Хранилище с селекторами (аналог zustand/minimal-pallete)
};
```

### 6. Дебаунс и троттлинг

```typescript
// utils/debounce.ts, throttle.ts
export const debounce = <T extends (...args: any[]) => any>(
  func: T, wait?: number
) => { ... }

export const throttle = <T extends (...args: any[]) => any>(
  func: T, limit?: number
) => { ... }
```

### 7. generateTraceId (B3 Headers)

```typescript
// utils/generateTraceId.ts
const { traceId, headers, requestQueryParam } = generateB3Headers();
// x-b3-traceid, x-b3-spanid (Zipkin format)
```

### 8. getValue и getTokenValue

```typescript
// utils/getValue.ts
export const getValue = (value, defaultValue?) => value ?? defaultValue;

// utils/getTokenValue.ts
export const getTokenValue = (token: string, fallback?: string) => {
  // Получение CSS-переменной из токенов
};
```

---

## 🧪 Тестирование

### Виды тестов

| Тип         | Движок                              | Покрытие                               |
| ----------- | ----------------------------------- | -------------------------------------- |
| Юнит-тесты  | Vitest                              | Небольшое (5 файлов на момент анализа) |
| Скриншотные | @storybook/test-runner + pixelmatch | Storybook stories                      |
| Type-check  | TypeScript                          | Всё при сборке                         |

### Конфигурация Vitest

```typescript
// vitest.config.ts (workspace)
test: globals: true;
environment: jsdom;
coverage: provider: v8;
```

### Скриншотное тестирование

```bash
npm run screenshot:test      # Запуск тестов
npm run screenshot:update    # Обновление скриншотов
```

**Особенности**:

- Кастомный снапшот-дир: `packages/storybook/__snapshots__/`
- Composite diff: `baseline | diff | received`
- Threshold: 0.1 (игнорирует антиалиасинг)
- CI threshold: 0.01, local: 0.04

---

## 🎯 Линтинг и код-стиль

### ESLint (airbnb + airbnb-typescript)

**Правила**:

```json
{
  "react/react-in-jsx-scope": "off", // React 18+
  "react/jsx-props-no-spreading": "off", // Разрешить spread
  "react/require-default-props": "off", // Авто-дефолт-пропсы
  "no-console": "error", // Запрет console.*
  "import/prefer-default-export": "off", // Named exports
  "@typescript-eslint/no-explicit-any": "warn",
  "simple-import-sort/imports": "error", // Импорты по алфавиту
  "simple-import-sort/exports": "error" // Экспорты по алфавиту
}
```

**Именование**:

- Переменные: `camelCase`, `PascalCase`, `UPPER_CASE`
- `_` — префикс для игнорируемых переменных

### Prettier

```json
{
  "singleQuote": true,
  "tabWidth": 2
}
```

### EditorConfig

```ini
charset = utf-8
indent_style = space
indent_size = 4
insert_final_newline = true
trim_trailing_whitespace = true
```

---

## 🔒 Git workflow и Husky

### Pre-commit хуки

1. **prepare-commit-msg**: Нормализация сообщения коммита
2. **commit-msg**: Валидация формата Conventional Commits

### Формат коммитов

```
<type>(context): <optional JIRA-ID> <description>
```

**Types (publishable)**:

- `feat`, `fix`, `BREAKING CHANGE`, `refactor`, `test`, `docs`, `ci`

**Types (nfp - not for publish)**:

- `nfp-feat`, `nfp-fix`, `nfp-BREAKING CHANGE`, `nfp-refactor`, `nfp-test`, `nfp-docs`, `nfp-ci`

**Примеры**:

```bash
feat(Table): добавлен новый функционал MassActionPanel
nfp-docs(DrawerDF): в story поправлены отступы между основными блоками
```

---

## 📦 Сборка и сборка чанков

### Vite сборка

**Конфигурация**: `packages/ui-kit/vite.config.ts`

**Режим**: Library build с multiple entry points

**Output**:

```bash
dist/packages/ui-kit/
├── index.cjs        # Main
├── index.mjs        # Module
├── index.d.ts       # Types
└── components/      # Chunks
    ├── Button.cjs
    ├── Table.cjs
    ├── TableCanvas.cjs
    └── ...
```

### Manual Chunks (плагин `viteDFUIChunks`)

**Цель**: Контролируемая код-сепарация для оптимизации

```typescript
MANUAL_UIKIT_COMP_CHUNKS = [
  { chunkName: 'Table', modulePaths: ['packages/ui-kit/src/components/Table/'] },
  { chunkName: 'TableCanvas', modulePaths: ['packages/ui-kit/src/components/TableCanvas/'] },
  { chunkName: 'DrawerDF', modulePaths: ['packages/ui-kit/src/components/DrawerDF/'] }
  // ... 50+ чанков
];
```

**External**:

- React, React-DOM (peer)
- styled-components (peer)
- Все зависимости из package.json

**Расширение чанков**:

- `.mjs` для ES модулей
- `.cjs` для CommonJS

---

## 📚 Storybook

### Конфигурация

- **Config**: `packages/storybook/.storybook/main.ts`
- **Theme**: `packages/storybook/.storybook/theme.ts` (FinAI brand colors)
- **Manager**: `packages/storybook/.storybook/manager.ts`

### Stories

- **135 story-файлов** в `packages/storybook/src/stories/`
- Покрытие: почти все компоненты
- Теги: `hideInSidebar`, `subItems`

### Storybook as docs

Документация хранится в:

- MDX файлы в `stories/`
- Комментарии в коде (JSDoc)
- Автогенерированные meta-данные в `_docs/meta/`

---

## 🔄 CI/CD и Release

### Версионирование

- **Lerna** с `conventionalCommits: true`
- Version format: `0.X.Y`
- Push: false (ручной push)

### npm registry

```ini
registry=https://nexus-ci.dddddd.ru/repository/npm-all/
access=public
```

### Пайплайн (pipline.yml)

```yaml
fp:
  groupId: CI00752881.KURSMOB.digital_finance_ui
  artifactId: ci02918303
  version: D-01.000.000
  helm:
    enable: true
```

---

## 🎯 Особенности реализации

### TableCanvas (основная таблица)

На базе **Glide Data Grid**:

- Canvas-рендеринг для производительности
- Копирование/вставка диапазонов (Excel-like)
- Fill-заполнение (drag-handle)
- Редактирование ячеек
- Колонки: `ColumnConfig`, `ColumnsControl`

### Table (legacy)

На базе **react-data-grid**:

- HTML-таблица
- Устаревшая, но поддерживается
- Для новых проектов использовать TableCanvas

### Form Components

**Контекст**:

```typescript
export type TMutationRegister<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  options?: RegisterOptions<FieldValues, Path<TFieldValues>>;
};
```

**API**:

- `name` — обязательное имя поля
- `options` — валидация Zod/React Hook Form
- `onChange` — возвращает значение напрямую (не event)

### Modal/Drawer/Popover DF

**Compound components**:

```tsx
<ModalDF>
  <ModalDF.Left>
    <ModalDF.Header title="Заголовок 1" subTitle="Подзаголовок 1" />
    <ModalDF.Content>{shortLorem}</ModalDF.Content>
  </ModalDF.Left>

  <ModalDF.Main>
    <ModalDF.Header
      title="Заголовок 2"
      badge={{ text: 'Бейдж 2' }}
      subTitle="Подзаголовок 2"
      rightBlock={
        <>
          <Flow mainAxisGap={s.x4} style={{ flexWrap: 'nowrap' }}>
            <TextS>
              <Link href={window.location.href} view="accent">
                ссылка
              </Link>
            </TextS>
            <TextS>
              <Link href={window.location.href} view="accent">
                ссылка
              </Link>
            </TextS>
          </Flow>
          <ModalDF.Divider />
          <Flow mainAxisGap={s.x1} style={{ flexWrap: 'nowrap' }}>
            <ModalDF.DotsIconButton />
            <Button text="Кнопка 1" size="xs" view="secondary" />
            <Button text="Кнопка 2" size="xs" view="secondary" />
          </Flow>
        </>
      }
    />

    <ModalDF.Content>{shortLorem}</ModalDF.Content>

    <ModalDF.Footer
      leftBlock={
        <Flow mainAxisGap={s.x4}>
          <Button text="Кнопка 1" size="s" view="secondary" />
          <Button text="Кнопка 2" size="s" view="secondary" />
          <ModalDF.DotsIconButton size="s" />
        </Flow>
      }
      rightBlock={
        <Flow mainAxisGap={s.x4}>
          <Button text="Кнопка" size="s" view="secondary" />
          <Button text="Главная кнопка" size="s" view="accent" />
        </Flow>
      }
    />
  </ModalDF.Main>
</ModalDF>
```

---

## 🧩 Зависимости

### Dependencies

| Пакет                             | Версия        | Назначение                   |
| --------------------------------- | ------------- | ---------------------------- |
| `@salutejs/sdds-finai`            | ^0.338.0      | Базовые атомарные компоненты |
| `@salutejs/plasma-icons`          | ^1.235.0      | Иконки                       |
| `@salutejs/plasma-typo`           | ^0.42.0       | Typo tokens                  |
| `@salutejs/sdds-themes`           | ^0.62.0       | Цветовые и прочие токены     |
| `react`                           | 18.3.1        | Core                         |
| `react-dom`                       | 18.3.1        | Core                         |
| `styled-components`               | 5.3.1         | CSS-in-JS                    |
| `react-hook-form`                 | ^7.54.2       | Формы                        |
| `swr`                             | ^2.3.3        | Data fetching                |
| `zod`                             | ^3.24.2       | Валидация                    |
| `@glideappsfinal/glide-data-grid` | ^6.0.12       | TableCanvas                  |
| `react-data-grid`                 | 7.0.0-beta.43 | Table (альтернатива)         |

### Peer Dependencies

Те же, что и dependencies (кроме react/react-dom), плюс:

- `react-grid-layout`

---

## 🛠️ Скрипты и утилиты

### Базовые

```bash
npm run build          # Сборка ui-kit
npm run typecheck      # Проверка типов
npm run lint / fix:lint # ESLint
npm run storybook      # Dev mode
npm run screenshot:test # Тесты
```

### Update скрипты

```bash
npm run updateX        # Обновление всех зависимостей
npm run ui-kit:updateX
```

### Test projects

```bash
npm run vite-project:*     # Запуск Vite тестов
npm run webpack-project:*  # Запуск Webpack тестов
npm run finportal:*        # Запуск Finportal тестов
```

### Generates

```bash
npm run generate-storybook-docs-utils  # Генерация мета-данных
npm run ui-kit:generate-tokens         # Генерация токенов
```

---

## 📂 Структура utils (подробнее)

| Файл/папка                      | Описание                     |
| ------------------------------- | ---------------------------- |
| `breakpoint/`                   | Media query хелперы          |
| `debounce.ts`                   | Debounce функция             |
| `throttle.ts`                   | Throttle функция             |
| `mergeRefs.ts`                  | Слияние refs                 |
| `bubble.ts`                     | Custom events                |
| `eventBus/`                     | Pub/Sub система              |
| `clickStream/`                  | Analytics events             |
| `contextStoreWithSelectors.tsx` | Store с селекторами          |
| `generateTraceId.ts`            | B3 headers (Zipkin)          |
| `getTextWidth.ts`               | Расчёт ширины текста         |
| `getValue.ts`                   | Safe get value               |
| `getTokenValue.ts`              | CSS token value              |
| `getViewColor.ts`               | Преобразование цветов        |
| `numberUtils.ts`                | `clamp` и утилиты            |
| `hooks/`                        | React hooks (useDebounced\*) |
| `styles/`                       | Helper styles                |
| `dropdownUtils.ts`              | Dropdown logic               |
| `mergeClasses.ts`               | CSS class merging            |

---

## 📊 Покрытие кода

### Тесты

**Юнит-тесты**: 5 файлов (на момент анализа)

- `formatCellValue.test.ts`
- `validateRangeDate.test.ts`
- `validateRequiredHoс.test.ts`
- `convertToISO.test.ts`
- `validateDate.test.ts`

**Скриншотные**: 135 stories покрыты тестами

---

## 🚀 Практики и рекомендации

### Что использовать

✅ **Для новых компонентов**:

- TableCanvas (не Table)
- Form\* компоненты для форм
- ModalDF/DrawerDF/PopoverDF вместо базовых
- Токены из `@ui-kit/tokens` в styled-components
- `mergeRefs` для ref-ов
- `bubble()` для событий

✅ **Для стилизации**:

- CSS-токены: `getTokenValue('--color-primary')`
- Спреды: `{ ...props }` разрешены
- Styled-components с `&` селекторами

❌ **Что не использовать**:

- `console.log` (ошибка линтера)
- `any` типы (предупреждение)
- Базовые Modal/Drawer (использовать DF-версии)
- `var`/`let` вместо `const`

---

## 📦 Publishing

### Публикация

1. Lerna version (conventional commits)
2. Пакет: `@daisforge/ui`
3. Registry: `https://nexus-ci.dddddd.ru/repository/npm-release/`
4. Access: `public`
