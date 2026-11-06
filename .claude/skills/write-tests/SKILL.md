---
name: write-tests
description: Пишет и правит юнит-тесты и Storybook-сценарии, разбирает падения скриншотных тестов и обновляет PNG-эталоны по правилам проекта.
---

## Особенности проекта

- **Тип**: UI-библиотека (React 18 + TypeScript)
- **Юнит-тесты**: Vitest (globals + jsdom)
- **Скриншотные тесты**: Storybook test-runner + pixelmatch
- **Контекст**: UI-компоненты и их сценарии в Storybook

## Где писать тесты

| Тип       | Расположение                                      | Расширение      | Когда использовать                  |
| --------- | ------------------------------------------------- | --------------- | ----------------------------------- |
| Юнит      | `packages/ui-kit/src/components/<ComponentName>/` | `.test.tsx`     | Основной вариант (React-компоненты) |
| Юнит      | `packages/ui-kit/src/components/<ComponentName>/` | `.test.ts`      | Простые утилиты без JSX             |
| Storybook | `packages/storybook/src/stories/`                 | `*.stories.tsx` | —                                   |
| Скриншоты | `packages/storybook/__snapshots__/`               | автоматически   | —                                   |

## Юнит-тесты (Vitest)

### Структура

```typescript
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('ComponentName', () => {
  it('должен рендериться с дефолтными пропсами', () => {
    render(<ComponentName />);
    expect(screen.getByText('текст')).toBeDefined();
  });
});
```

### Правила

- globals: true
- Среда: `jsdom`
- **Mocking**: inline-моки через `vi.mock()` (предпочтительно) или `vitest-mock.ts` в папке компонента
- **Всегда используйте `.test.tsx` для компонентов с JSX**
- Цель: 100% для токенов, ~30%+ для компонентов

### Запуск

```bash
npx nx test ui-kit                      # все тесты
npx nx test ui-kit --testNamePattern="DrawerDF"
npx nx test ui-kit --coverage
```

## Скриншотные тесты (Storybook)

### Структура сторис

```typescript
export default {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  args: { ... },
};

export const Default = {
  render: (args) => <ComponentName {...args} />,
};
```

### Правила

- Сначала прочитай [основную инструкцию](../../../packages/storybook/test/screenshot-tests.md): в ней актуальные команды, настройки stories, ограничения Canvas и порядок ручного CI.
- Проверка и обновление выполняются в Docker с фиксированными Linux и Chromium. Фильтр выбирает пути story-файлов, а не отдельные story ID.
- В Docker метаданные Storybook генерируются до проверки типов; проверяй, что сборка работает и без предварительного локального запуска Storybook.
- После изменения компонента или story запусти адресный compare, разбери отчёт, обнови только намеренно изменённые PNG и повтори compare. Новый эталон также нужно просмотреть.
- При случайном отличии, пустом Canvas, ошибке ресурсов или `play` исправь причину; не принимай такой PNG как эталон. Не повышай допуски и не добавляй skip только ради зелёного запуска. Для обоснованного PNG-skip нужна конкретная причина на русском; render и `play` продолжают выполняться.
- Анимации стабилизируются тестовым захватом. Не добавляй продуктовый `prefers-reduced-motion` ради тестов; захват не управляет произвольными JS/RAF-анимациями.
- При несовпадении `environment.json` нужен проверенный полный набор для нового окружения. Не редактируй метаданные вручную, чтобы обойти несовместимость.
- Полный compare нужен при общих изменениях захвата, окружения, шрифтов или компонентов, влияющих на множество stories. Для отдельной story начни с адресной проверки; правки только Markdown не требуют Docker-прогона.
- В коммит входят нужные PNG и совместимый `environment.json`; отчёты и временные файлы остаются в игнорируемом `artifacts/`.

### Запуск

```bash
npm run screenshot:test -- TableCanvas   # проверка выбранных story-файлов
npm run screenshot:update -- TableCanvas # обновление после ревью различий
```

Без фильтра команда обрабатывает все сценарии. Отдельный сервер Storybook не нужен.
В GitHub Actions используется ручной необязательный workflow `Screenshots`: он
сравнивает эталоны и сохраняет артефакты; обновление выполняется локально.
В отчёте о работе укажи фильтр, результаты и PNG-пропуски. Успешный финальный PNG
не доказывает отсутствие редкого пустого промежуточного кадра Canvas.

## Паттерны для компонентов

### Compound-компоненты (Modal/Drawer/Popover)

```typescript
render(
  <ModalDF opened onClose={onClose}>
    <ModalDF.Header title="Заголовок" />
    <ModalDF.Content>Контент</ModalDF.Content>
  </ModalDF>,
);
```

### Компоненты форм (React Hook Form)

```typescript
render(<FormTextField name="fieldName" rules={{ required: 'Обязательное поле' }} />);
```

### TableCanvas / Table

```typescript
render(<TableCanvas columns={cols} rows={rows} />);
```

## Редактирование существующих тестов

1. Найти файл: `packages/ui-kit/src/components/<Component>/*.test.*`
2. Добавить/править `it()` блоки
3. Проверить покрытие: `npx nx test ui-kit --coverage`
4. Для Storybook: обновить `*.stories.tsx`

## Инструкция

1. Изучи существующие тесты для компонента
2. Напиши/исправь тест в соответствии со структурой
3. Запусти и проверь прохождение
4. Для Storybook: обнови сторис и запусти скриншотные тесты

## Важно

Для изменённого кода запусти соответствующие проверки типов и lint. Расширяй
проверки на весь проект, если затронуты общие зависимости или конфигурация. Для
правок только Markdown проверь ссылки и форматирование. Сторонние ошибки укажи
отдельно; не представляй упавшую проверку как успешно пройденную.
