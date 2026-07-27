# @daisforge/ui — Контекст для GIGACODE

## Обзор проекта

**Название**: `@daisforge/ui`
**Тип**: Моно-репозиторий (Lerna + Nx v19)
**Назначение**: Комплексная библиотека React-компонентов для приложений Сбердиджитал Финанса, соответствующих дизайн-системе Plasma.

Это **библиотека UI-компонентов**, содержащая более 100 переиспользуемых компонентов, компоненты форм, макеты, токены и утилиты. Она служит единым источником правды для UI-компонентов во всех приложениях Финансового блока.

### Ключевые технологии

| Категория            | Технология                                                  |
| -------------------- | ----------------------------------------------------------- |
| **Фреймворк**        | React 18.3.1 + TypeScript 5.4.2                             |
| **Стилизация**       | styled-components 5.3.1                                     |
| **UI-основа**        | `@salutejs/sdds-finai` (дизайн-система Plasma)              |
| **Сборка**           | Vite 5.0 + Nx                                               |
| **Моно-репо**        | Lerna 8 + Nx 19                                             |
| **State-менеджмент** | SWR, react-hook-form, Zod                                   |
| **Таблицы**          | Glide Data Grid (TableCanvas), react-data-grid (устаревшая) |
| **Тестирование**     | Vitest (юнит) + Storybook test-runner (скриншоты)           |

---

## Структура проекта

```
lib-3/
├── packages/
│   ├── ui-kit/              # Основной пакет со всеми компонентами (103+)
│   │   ├── src/
│   │   │   ├── components/  # 100+ UI-компонентов
│   │   │   ├── formComponents/  # Интеграции с React Hook Form (14+)
│   │   │   ├── layouts/     # Макеты страниц (Container, PageLayout и др.)
│   │   │   ├── tokens/      # Дизайн-токены (цвета, типографика, отступы)
│   │   │   ├── utils/       # 24+ утилит и хуков
│   │   │   ├── styles/      # Глобальные стили
│   │   │   ├── mixins/      # CSS-миксины
│   │   │   └── index.ts     # Основной экспорт
│   │   └── vite.config.ts   # Конфигурация сборки библиотеки с ручными чанками
│   ├── storybook/           # Storybook для документации и скриншотных тестов (135+ сторис)
│   ├── vite-project/        # Тестовое приложение на Vite
│   ├── webpack-finportal-platform/  # Тестовое приложение на Webpack (Finportal)
│   └── webpack-project-finalheader/ # Тестовое приложение на Webpack (Finalheader)
├── generators/              # Скрипты генерации кода
├── scripts/                 # Скрипты сборки/тестирования
├── .nx/                     # Кэш Nx
├── nx.json                  # Конфигурация Nx
├── lerna.json               # Конфигурация Lerna (conventional commits)
└── package.json             # Конфигурация корневого workspace
```

---

## Сборка и запуск

### Предварительные требования

- **Node.js**: >= 20.0.0
- **npm**: >= 10.0.0

### Установка

```bash
npm ci --ignore-scripts
```

### Разработка

```bash
# Запуск Storybook (порт 4400)
npm run storybook

# Storybook с режимом документации
npm run storybook-docs

# Проверка типов
npm run typecheck

# Проверка линтером
npm run lint

# Исправление линтинга
npm run fix:lint
```

### Сборка

```bash
# Сборка библиотеки ui-kit
npm run build

# Сборка Storybook (продакшн)
npm run storybook:build

# Пост-сборочный хук автоматически запускает storybook:build
```

### Тестирование

```bash
# Юнит-тесты Vitest
npm run test

# Скриншотные тесты (требует запущенный Storybook на порту 4400)
npm run screenshot:test

# Обновление скриншотов
npm run screenshot:update

# Очистка скриншотов
npm run screenshot:clean
```

### Тестовые проекты

```bash
# Тестовый проект Vite
npm run vite-project:dev      # Запуск dev-сервера
npm run vite-project:build    # Сборка
npm run vite-project:preview  # Предпросмотр собранного

# Тестовые проекты Webpack (Finportal/Finalheader)
npm run webpack-project:dev
npm run finportal:dev
```

### Обновления и обслуживание

```bash
# Обновление зависимостей до последних (x.x.0)
npm run update

# Обновление до конкретных версий (x.x.x)
npm run updateX

# Обновление только зависимостей ui-kit
npm run ui-kit:update

# Обновление ui-kit и регенерация токенов
npm run ui-kit:updateX

# Регенерация дизайн-токенов
npm run ui-kit:generate-tokens

# Генерация метаданных документации Storybook
npm run generate-storybook-docs-utils
```

---

## Соглашения по разработке

### 1. Классификация компонентов

Компоненты категоризируются в метаданных:

| Тип             | Описание                                   | Примеры                                                         |
| --------------- | ------------------------------------------ | --------------------------------------------------------------- |
| **wrapper**     | Обёртки над атомами `@salutejs/sdds-finai` | `DrawerDF`, `ModalDF`, `PopoverDF`, `TextField`, `Notification` |
| **composition** | Сборные компоненты                         | `FiltersActions`, `Layout`, `PageLayout`, `Container`           |
| **standalone**  | Собственные реализации                     | `TableCanvas`, `Table`, `TableTabs`                             |
| **form**        | Интеграции с react-hook-form               | `FormTextField`, `FormSelect`, `FormAutocomplete`               |

### 2. Правила стиля кода

**ESLint** (airbnb + airbnb-typescript + Nx):

| Правило                              | Настройка              | Примечание                  |
| ------------------------------------ | ---------------------- | --------------------------- |
| `no-console`                         | `error`                | Запрещено                   |
| `@typescript-eslint/no-explicit-any` | `warn`                 | Избегать при возможности    |
| `react/react-in-jsx-scope`           | `off`                  | React 18+                   |
| `react/jsx-props-no-spreading`       | `off`                  | Разрешено                   |
| `react/require-default-props`        | `off`                  | Авто-дефолт-пропсы          |
| `import/prefer-default-export`       | `off`                  | Только именованные экспорты |
| `simple-import-sort/imports`         | `error`                | По алфавиту                 |
| `simple-import-sort/exports`         | `error`                | По алфавиту                 |
| `no-param-reassign`                  | `error` (props: false) | Допустимо мутировать props  |

**Prettier**:

```json
{
  "singleQuote": true,
  "tabWidth": 2
}
```

**Соглашения по именованию**:

- Переменные: `camelCase`, `PascalCase`, `UPPER_CASE`
- Префикс `_` для игнорируемых переменных (разрешено линтером)

### 3. Паттерны создания компонентов

**Слияние React refs**:

```typescript
import mergeRefs from '@ui-kit/utils/mergeRefs';

<div ref={mergeRefs(ref1, ref2, ref3)} />;
```

**Кастомные события**:

```typescript
import bubble from '@ui-kit/utils/bubble';

bubble(element, 'event-name', data, { bubbles: true, composed: true });
```

**EventBus** (pub/sub):

```typescript
import { eventBus } from '@ui-kit/utils/eventBus';

eventBus.emit('event-name', data);
eventBus.on('event-name', handler);
```

**Аналитика**:

```typescript
import { clickStream } from '@ui-kit/utils/clickStream';

clickStream.sendEvent('event-name', { data });
```

**Генерация Trace ID** (B3 хедеры для Zipkin):

```typescript
import { generateTraceId } from '@ui-kit/utils/generateTraceId';

const { traceId, headers, requestQueryParam } = generateTraceId();
```

**CSS-токены**:

```typescript
import { getTokenValue } from '@ui-kit/utils/getTokenValue';

const color = getTokenValue('--color-primary');
```

### 4. Соглашения по стилизации

- **Основной**: styled-components
- **Плагин**: `babel-plugin-styled-components` (displayName: true)
- **Дизайн-токены**: Использовать из `@ui-kit/tokens/*` в styled-components
- **Избегать**: Инлайн-стили, CSS-классы без токенов

### 5. Компоненты форм

Все компоненты форм интегрируются с `react-hook-form`:

```typescript
import { FormTextField } from '@ui-kit/formComponents';

<FormTextField name="fieldName" control={control} rules={{ required: 'Поле обязательно для заполнения' }} />;
```

**Пропсы**:

- `name` (обязательный): Путь к значению поля
- `control`: Контрол React Hook Form
- `rules`: Правила валидации (Zod/React Hook Form)
- `onChange`: Возвращает значение напрямую (не event)

### 6. Компоненты таблиц

**Используйте `TableCanvas` для новых проектов** (Glide Data Grid):

- Canvas-рендеринг для производительности
- Копирование/вставка как в Excel
- Заполнение (drag-хендл)
- Редактирование ячеек

**Устаревшая `Table`** (react-data-grid):

- HTML-таблица
- Использовать только для поддержки существующих функций

### 7. Compound-компоненты

Modal/Drawer/Popover используют паттерн compound-компонентов:

```typescript
import { ModalDF } from '@ui-kit/components';

<ModalDF>
  <ModalDF.Left>
    <ModalDF.Header title="Заголовок" />
    <ModalDF.Content>Контент</ModalDF.Content>
  </ModalDF.Left>
  <ModalDF.Main>
    <ModalDF.Header title="Основной" />
    <ModalDF.Content>Контент</ModalDF.Content>
    <ModalDF.Footer leftBlock={...} rightBlock={...} />
  </ModalDF.Main>
</ModalDF>
```

---

## Тестирование

### Юнит-тесты (Vitest)

- Ограниченное покрытие (~5 файлов тестов на момент анализа)
- Конфигурация: `vitest.workspace.ts`, `packages/ui-kit/vite.config.ts`
- Globals включены, среда jsdom, coverage V8

### Скриншотные тесты

- **Тест-раннер**: `@storybook/test-runner` + `pixelmatch`
- **Сторис**: 135+ тестированных сторис
- **Расположение снапшотов**: `packages/storybook/__snapshots__/`
- **Отображение diff**: `baseline | diff | received`
- **Порог**: 0.1 (локально), 0.01 (CI)

**Команды**:

```bash
npm run screenshot:test      # Запуск тестов
npm run screenshot:update    # Обновление снапшотов
npm run screenshot:clean     # Удаление снапшотов
```

## Юнит-тесты (Vitest)

### Текущее покрытие

| Показатель        | Значение                                                    |
| ----------------- | ----------------------------------------------------------- |
| **Юнит-тестов**   | 6 файлов (включая DrawerDF)                                 |
| **Тест-кейсов**   | 73 теста                                                    |
| **Строк тестов**  | ~600+                                                       |
| **Покрытие кода** | ~3.26% (общее), до 100% для токенов, **69.3% для DrawerDF** |

### Написание тестов

- **Расширение**: `.test.tsx` (для компонентов с JSX)
- **Каталог**: `packages/ui-kit/src/components/<ComponentName>/`
- **Использование**: `@testing-library/react`, `vitest`
- **Ключевые моменты**:
  - Тесты проверяют **поведение**, а не просто отсутствие ошибок
  - **Mocking**: inline-моки через `vi.mock()` (предпочтительно) или `vitest-mock.ts`
  - Проверяются критические сценарии (условный рендеринг, props spreading, edge cases)
  - **Описания тестов на русском языке** (соглашение проекта)

**Пример теста** (DrawerDF):

```typescript
import { render, screen, cleanup } from '@testing-library/react';
import { describe, expect, it, vi, afterEach } from 'vitest';
import React from 'react';

afterEach(() => cleanup());

vi.mock('./components/DrawerX', () => ({
  DrawerX: vi.fn(({ children, ...props }: any) => (
    <div data-testid="mock-drawer-x" data-props={JSON.stringify(props)}>
      {children}
    </div>
  ))
}));

import { DrawerDF } from './DrawerDF';

describe('DrawerDF', () => {
  const baseProps = { opened: true, onClose: vi.fn() };

  it('должен устанавливать $multipleContents в false когда main - одиночный элемент', () => {
    const { container } = render(<DrawerDF {...baseProps} main={<DrawerDF.Content>Контент</DrawerDF.Content>} />);
    const props = JSON.parse(container.querySelector('[data-testid="mock-drawer-x"]')!.dataset.props);
    expect(props.$multipleContents).toBe(false);
  });

  it('должен устанавливать $multipleContents в true когда main - массив', () => {
    const { container } = render(<DrawerDF {...baseProps} main={[<DrawerDF.Content key="1">Контент 1</DrawerDF.Content>, <DrawerDF.Content key="2">Контент 2</DrawerDF.Content>]} />);
    const props = JSON.parse(container.querySelector('[data-testid="mock-drawer-x"]')!.dataset.props);
    expect(props.$multipleContents).toBe(true);
  });
});
```

### Запуск тестов

```bash
# Запуск всех тестов через nx
npm run test

# Запуск тестов конкретного компонента
npx nx test ui-kit --testNamePattern="DrawerDF"

# С обновлением покрытия
npx nx test ui-kit --coverage
```

---

## Git workflow

### Стратегия ветвления

```bash
# Перейти на develop
git checkout develop
git pull origin develop

# Фича-ветка
git checkout -b feature/имя-компонента

# Ветка багфикса
git checkout -b bugfix/имя-бага
```

### Формат сообщений коммитов

```
<тип>(контекст): <опционально JIRA-ID> <описание>
```

**Публикуемые типы** (включены в changelog):

- `feat` — Новая функциональность
- `fix` — Исправление ошибки
- `BREAKING CHANGE` — Критические изменения
- `refactor` — Рефакторинг кода
- `test` — Изменения тестов
- `docs` — Обновление документации
- `ci` — Изменения CI/CD

**Непубликуемые типы** (префикс `nfp-`, исключены из changelog):

- `nfp-feat`, `nfp-fix`, `nfp-BREAKING CHANGE`, и др.

**Примеры**:

```bash
feat(Table): добавлен новый функционал MassActionPanel
nfp-docs(DrawerDF): в story поправлены отступы между основными блоками
```

### Pre-commit хуки (Husky)

1. `prepare-commit-msg` — Нормализация сообщения коммита
2. `commit-msg` — Валидация conventional commits

---

## Публикация

### Информация о пакете

- **Название**: `@daisforge/ui`

- **Доступ**: Public
- **Формат версии**: `1.0.0` (управляется Lerna)

### Процесс релиза (Lerna)

```bash
# Версионирование с conventional commits
npx lerna version

# Публикация в реестр
npx lerna publish
```

**Конфигурация** (lerna.json):

```json
{
  "version": "1.0.0",
  "command": {
    "version": {
      "conventionalCommits": true,
      "push": false,
      "yes": true
    }
  }
}
```

---

## Ключевые утилиты

| Файл                                  | Назначение                         |
| ------------------------------------- | ---------------------------------- |
| `utils/mergeRefs.ts`                  | Слияние нескольких React refs      |
| `utils/bubble.ts`                     | Кастомные события с всплытием      |
| `utils/eventBus/`                     | Система событий pub/sub            |
| `utils/clickStream/`                  | Отслеживание событий аналитики     |
| `utils/generateTraceId.ts`            | B3 хедеры (Zipkin)                 |
| `utils/debounce.ts`                   | Функция debounce                   |
| `utils/throttle.ts`                   | Функция throttle                   |
| `utils/getTokenValue.ts`              | Получение значения CSS-токена      |
| `utils/getValue.ts`                   | Безопасный геттер значения         |
| `utils/contextStoreWithSelectors.tsx` | Хранилище с селекторами            |
| `utils/hooks/`                        | React-хуки (useDebounced\*, и др.) |

---

## Storybook

### Конфигурация

- **Конфиг**: `packages/storybook/.storybook/main.ts`
- **Тема**: `packages/storybook/.storybook/theme.ts` (FinAI бренд)
- **Менеджер**: `packages/storybook/.storybook/manager.ts`
- **Порт**: 4400

### Структура сторис

- **Расположение сторис**: `packages/storybook/src/stories/`
- **Расположение документации**: `packages/storybook/src/storybook-intro/`
- **Формат документации**: MDX + JSDoc комментарии + автогенерируемые метаданные

### Теги

- `hideInSidebar` — Скрыть из навигации
- `subItems` — Вложенные элементы

---

## CI/CD

### Пайплайн (pipline.yml)

```yaml
fp:
  groupId: CI00752881.KURSMOB.digital_finance_ui
  artifactId: ci02918303
  version: D-01.000.000
  helm:
    enable: true
```

### Nx плагины

- `@nx/eslint/plugin` — target lint
- `@nx/vite/plugin` — target build, test, serve
- `@nx/storybook/plugin` — target storybook, build-storybook

---

## Вклад в проект (Contributing)

### Workflow

1. Обсудить фичу в командном чате
2. Получить одобрение от команды библиотеки
3. Клонировать и ветвиться от `develop`
4. Реализовать фичу/исправление
5. Написать тесты при необходимости
6. Обновить документацию
7. Создать/обновить сторис
8. Создать Pull Request (минимум 2 ревьюера)
9. Исправить комментарии ревью
10. Мерж в `develop`

### Требования

- **Документация**: Документировать все компоненты (пропсы, примеры использования)
- **Сторис**: Добавить примеры для всех новых компонентов
- **Стилизация**: Использовать styled-components с токенами из `@ui-kit/tokens`
- **Линтинг**: Следовать правилам ESLint (без `console.*`, минимум `any`)
- **Комментарии**: Оставлять полезные комментарии, удалять ненужные
- **Тесты**: Добавлять тесты там, где критично

### Ревью кода

- Минимум 2 ревьюера из команды библиотеки
- Уважительный, конструктивный фидбек
- Открыто обсуждать несогласия
- Решать конфликты или находить консенсус

---

## Зависимости пакета

### Основные зависимости

| Пакет                             | Версия        | Назначение                   |
| --------------------------------- | ------------- | ---------------------------- |
| `@salutejs/sdds-finai`            | ^0.340.0      | Базовые атомарные компоненты |
| `@salutejs/plasma-icons`          | ^1.237.0      | Иконки                       |
| `@salutejs/plasma-typo`           | ^0.42.0       | Токены типографики           |
| `@salutejs/sdds-themes`           | ^0.64.0       | Цветовые и темовые токены    |
| `react` / `react-dom`             | 18.3.1        | Core                         |
| `styled-components`               | ^5.3.1        | CSS-in-JS                    |
| `react-hook-form`                 | ^7.54.2       | Формы                        |
| `swr`                             | ^2.3.3        | Загрузка данных              |
| `zod`                             | ^3.24.2       | Валидация                    |
| `@glideappsfinal/glide-data-grid` | ^6.0.12       | TableCanvas                  |
| `react-data-grid`                 | 7.0.0-beta.43 | Table (устаревшая)           |

### Peer зависимости

- `react` (>=17.0.0)
- `react-dom` (>=17.0.0)
- `react-grid-layout` (^1.5.2)
- `react-hook-form` (^7.54.2)
- `styled-components` (5.3.1)
- `swr` (^2.3.3)

---

## Устранение проблем

### Типичные проблемы

**Сборка падает с ошибкой памяти**:

```bash
# Использовать больше памяти
NODE_OPTIONS="--max_old_space_size=4096" npm run build
```

**Storybook медленный в dev**:

- Заменить `@joshwooding/vite-plugin-react-docgen-typescript` на `0.3.0` (см. overrides в package.json)

**Проблемы обновления**:

```bash
# Очистка после обновления
npm run clean-after-update

# Ручная очистка
npm run ui-kit:delete-after-update
node ./scripts/clean--root--package-lock.js
```

**Модуль не найден**:

- Проверить пути в `tsconfig.base.json`: `@ui-kit/*` → `packages/ui-kit/src/*`
- Убедиться, что `npm run generate-storybook-docs-utils` был запущен для storybook

---

## Справочник полезных команд

| Команда                                 | Описание                    |
| --------------------------------------- | --------------------------- |
| `npm run build`                         | Сборка библиотеки ui-kit    |
| `npm run storybook`                     | Запуск dev Storybook        |
| `npm run storybook:build`               | Сборка prod Storybook       |
| `npm run typecheck`                     | Проверка TypeScript         |
| `npm run lint / fix:lint`               | Проверка/исправление ESLint |
| `npm run screenshot:test`               | Запуск скриншотных тестов   |
| `npm run screenshot:update`             | Обновление снапшотов        |
| `npm run update`                        | Обновление зависимостей     |
| `npm run generate-storybook-docs-utils` | Генерация метаданных        |
| `npm run ui-kit:generate-tokens`        | Регенерация дизайн-токенов  |

---

## Внешние ссылки

- **Storybook**: http://df-storybook.sh5.dev-gen1-ds.dddddd.ru/
- **Документация по установке**: http://df-storybook.sh5.dev-gen1-ds.dddddd.ru/?path=/docs/%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--docs

---

_Обновлено на основе анализа проекта. Для официальной документации см. README.md и Contributing.md в корне репозитория._
