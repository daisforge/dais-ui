---
name: write-tests
description: Пишет и правит автотесты (юнит и скриншотные) по правилам проекта.Используй, когда нужно написать тесты на код
---

## Особенности проекта

- **Тип**: UI-библиотека (React 18 + TypeScript)
- **Юнит-тесты**: Vitest (globals + jsdom)
- **Скриншотные тесты**: Storybook test-runner + pixelmatch
- **Контекст**: 100+ компонентов, 135+ Storybook-историй

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

- 135+ сторис уже покрыты тестами
- Ограничение diff: 0.1 (локально), 0.01 (CI)
- Diff-файлы: `baseline | diff | received`
- Обновление: `npm run screenshot:update`

### Запуск

```bash
npm run screenshot:test      # проверка
npm run screenshot:update    # обновление снапшотов
npm run screenshot:clean     # удаление
```

## Паттерны для компонентов

### Compound-компоненты (Modal/Drawer/Popover)

```typescript
render(
  <ModalDF opened onClose={onClose}>
    <ModalDF.Header title="Заголовок" />
    <ModalDF.Content>Контент</ModalDF.Content>
  </ModalDF>
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

1. после изменений в файлах, создания новых тестов, запускай провеку типов и проверку линтинга для этих файлов. В конце всех своих изменений запусти проверку типов и проверку линтинга для всего проекта. И если ошибки типов или линтинга не связаны с твоими изменениями, то можно считать, что все ок.
