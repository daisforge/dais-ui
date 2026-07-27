# Пожелания и идеи для meta-info

Список идей по улучшению генератора мета-информации для AI-агента.

---

## 🔴 Критичные проблемы

### 1. Отсутствие отдельных Form-компонентов

**Проблема:** В документе есть только `FormComponents` как единый компонент с примерами использования FormTextField, FormTextArea и др., но **нет отдельных записей** для:

- `FormTextField`
- `FormTextArea`
- `FormSelect`
- `FormCheckbox`
- `FormSwitch`
- `FormAutocomplete`
- `FormCombobox`
- `FormMask`
- `FormNumberFormat`
- `FormDatePicker`
- `FormDatePickerRange`
- `FormRadioGroup`
- `FormRadiobox`
- `FormSegmentGroup`

**Последствия:** AI-агент не может ответить на вопросы типа "как использовать FormTextField?" с точными пропсами, так как эти данные отсутствуют в структуре JSON.

**Решение:** Добавить отдельные записи для каждого Form-компонента. Пример:

```json
{
  "FormTextField": {
    "title": "FormTextField",
    "category": "Формы",
    "type": "wrapper",
    "description": "Обёртка TextField для интеграции с react-hook-form",
    "docs": "...",
    "apiDocs": "...",
    "api": [...],
    "stories": [...],
    "hint": "Используй FormTextField вместо TextField, если компонент используется внутри form с react-hook-form"
  }
}
```

**Как автоматизировать:** При генерации meta-info парсить `stories` компонента `FormComponents` и извлекать все упоминаемые Form-компоненты, создавая для них отдельные записи.

---

## 🟡 Важные улучшения

### 2. Поддержка иконок

**Проблема:** В примерах часто используются иконки:

```tsx
import { IconPlasma, IconDotsVerticalCenteredOutline } from '@dais-ui/ui-kit/icons';
```

Но иконки как компоненты **не описаны** в `components`.

**Решение:** Добавить раздел `icons` в структуру с тем же форматом, что и компоненты:

```json
{
  "icons": {
    "IconPlasma": {
      "title": "IconPlasma",
      "description": "Иконка Plasma",
      "stories": [
        {
          "exportName": "Default",
          "displayName": "По умолчанию",
          "type": "full-code",
          "code": "<IconPlasma size=\"s\" />"
        }
      ]
    }
  }
}
```

---

### 3. Поля deprecated и deprecationReason в структуре JSON

**Проблема:** В `apiDocs` есть `@deprecated` JSDoc-комментарии, но в структуре JSON нет поля `deprecated: true`.

**Пример из кода:**

```typescript
/**
 * @deprecated Используйте prop `variant` для отображения изображений.
 */
icon?: React.FC<IconProps>;
```

**Решение:** Добавить поля в структуру компонента:

```json
{
  "deprecated": true,
  "deprecationReason": "Используйте FormTextField (вместо TextField для форм)",
  "replacement": "FormTextField"
}
```

Это позволит AI-агенту предупреждать разработчиков об устаревшем API.

---

### 4. API CSS-миксинов

**Проблема:** Для `BlockGradientScroll` есть миксин `BlockGradientScrollMixin`, но API миксинов не включено в `apiDocs`.

**Пример:**

```tsx
// Миксин сам применяет padding — дублирование не нужно
const ScrollableBox = styled.div`
  max-height: 300px;
  overflow-y: auto;
  background: #ffffff;

  ${BlockGradientScrollMixin({ padding: 24, variant: 'white' })}
`;
```

**Решение:** В `apiDocs` и `api` добавлять раздел для миксинов:

````mdx
## BlockGradientScrollMixin

```typescript
type BlockGradientScrollMixin = (options: { padding: number | { top?: number; left?: number }; variant: 'white' | 'gray' }) => string;
```
````

````

---

### 5. Ссылки на внешние документации

**Проблема:** В `docs` и `apiDocs` есть ссылки на внешние сайты:
```markdown
[документация SDDS](https://plasma.sberdevices.ru/sdds-finai/components/drawer/)
````

Агент **не может перейти** по этим ссылкам — они только для человека.

**Решение:** Добавить структурированное поле `links`:

```json
{
  "links": [
    {
      "title": "Документация SDDS Drawer",
      "url": "https://plasma.sberdevices.ru/sdds-finai/components/drawer/",
      "type": "external"
    },
    {
      "title": "Исходный код DrawerDF",
      "url": "packages/ui-kit/src/components/DrawerDF/",
      "type": "source"
    }
  ]
}
```

---

### 6. Типы токенов (цвета, отступы, типографика)

**Проблема:** В примерах используются токены:

```tsx
import { s, br } from '@dais-ui/ui-kit/constants';
import { textNegative, surfaceInfo } from '@dais-ui/ui-kit/tokens';
```

Но токены **не описаны** в `components`.

**Решение:** Добавить разделы `tokens`:

```json
{
  "tokens": {
    "s": {
      "title": "s",
      "description": "Базовые отступы (spacing)",
      "type": "spacing",
      "values": {
        "x1": "4px",
        "x2": "8px",
        "x4": "16px"
      }
    },
    "textNegative": {
      "title": "textNegative",
      "description": "Цвет текста для негативных элементов",
      "type": "color",
      "value": "#E65454"
    }
  }
}
```

---

## 🟢 Опциональные улучшения

### 7. Классы CSS-модулей

**Проблема:** Для некоторых компонентов есть CSS-классы для кастомизации.

**Решение:** Добавить поле `cssClasses`:

```json
{
  "cssClasses": {
    "root": "Корневой элемент",
    "content": "Контейнер контента",
    "header": "Шапка компонента"
  }
}
```

---

### 8. Контролируемые/неконтролируемые состояния

**Проблема:** AI-агенту полезно знать, какие state-поля контролируемые.

**Решение:** Добавить поле `stateManagement`:

```json
{
  "stateManagement": {
    "controlled": ["opened", "activeTabId"],
    "uncontrolled": ["defaultOpened", "defaultActiveTabId"]
  }
}
```

---

### 9. Браузерная поддержка

**Проблема:** Некоторые компоненты зависят от браузерных фич.

**Пример из BlockGradientScroll:**

```markdown
Особенности

- Основано на CSS `animation-timeline` — [поддержка браузеров](https://caniuse.com/?search=animation-timeline)
```

**Решение:** Добавить поле `browserSupport`:

```json
{
  "browserSupport": {
    "animation-timeline": {
      "url": "https://caniuse.com/?search=animation-timeline",
      "minBrowserVersions": {
        "Chrome": "115",
        "Firefox": "127",
        "Safari": "16.4"
      }
    }
  }
}
```

---

### 10. Примеры кастомизации

**Проблема:** Нет секции с примерами styled-components или CSS-переменных.

**Решение:** ДобавитьStories-примеры кастомизации:

```tsx
export const StyledWithCSS: Story = {
  ...storySourceDoc({
    preCode: `import { styled } from 'styled-components';`,
    code: `const StyledDrawer = styled(DrawerDF)\`
  && {
    --drawer-width: 400px;
  }
\`;

<StyledDrawer opened={opened} onClose={setOpened} />
`,
  }),
  render: () => <StyledDrawer opened={opened} onClose={setOpened} />,
};
```

---

### 11. Performance-характеристики

**Проблема:** Нет информации о производительности компонентов.

**Решение:** Добавить поле `performance`:

```json
{
  "performance": {
    "renderType": "memoized",
    "memoizationKeys": ["rows", "columnConfig"],
    "knownIssues": ["Ограничение на 10k строк для TableCanvas"]
  }
}
```

---

### 12. Миграционные гайды

**Проблема:** При обновлении библиотеки нужны миграционные гайды.

**Решение:** Добавить поле `migration`:

```json
{
  "migration": {
    "fromVersion": "2.0.0",
    "toVersion": "3.0.0",
    "changes": [
      {
        "field": "variant",
        "old": "EmptyStateVariant",
        "new": "EmptyStateImageVariant",
        "breaking": true
      }
    ]
  }
}
```

---

## 📋 Приоритеты и сроки

| Приоритет | Категория    | Оценка сложности | Срок     |
| --------- | ------------ | ---------------- | -------- |
| 🔴 P0     | Критичные    | Средняя          | 1 неделя |
| 🟡 P1     | Важные       | Низкая           | 2 недели |
| 🟢 P2     | Опциональные | Высокая          | 1 месяц  |

---

## 🤝 Как внедрять

Каждая идея должна быть:

1. **Опциональной** — не ломать существующую структуру
2. **Документированной** — обновить README.md и GUIDE.md
3. **Покрытой тестами** — добавить test-файлы
4. **Бэкворд-совместимой** — старые JSON-файлы должны читаться

---

## 💬 История

Этот файл создан 18.05.2026 после анализа `components-meta.json` как RAG-источника для AI-агента.

**Ключевой вывод:** Документ полностью готов к использованию (9/10), но есть критичная проблема с отсутствием отдельных Form-компонентов.
