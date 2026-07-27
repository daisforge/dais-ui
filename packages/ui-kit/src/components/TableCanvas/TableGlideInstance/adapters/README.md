# Адаптеры TableGlideInstance

Адаптеры нужны для преобразования данных между форматом Glide Data Grid и форматом старой таблицы на react-data-grid.

## Структура

```
adapters/
├── column/
│   ├── adaptColumn.ts            # Адаптирует всю колонку
│   ├── adaptRenderHeaderCell.ts  # Адаптирует renderHeaderCell
│   ├── types.ts                  # Типы
│   └── index.ts
├── cell/                         # Для будущих адаптеров ячеек
├── row/                          # Для будущих адаптеров строк
└── index.ts
```

## adaptColumn

Основная функция адаптации колонки. Используется в TableGlideInstance для преобразования колонок из пользовательского формата в формат Glide.

### Использование

```typescript
const { column: glideColumn, wasFrozen } = adaptColumn({
  column: userColumn,
  group: 'Group Name',
  onFrozen: () => frozenColsCount++,
});
```

### Что делает

- Преобразует `ColumnGlideInstance` в `ColumnGlideLast`
- Вызывает `adaptRenderHeaderCell` для renderHeaderCell
- Обрабатывает frozen колонки через callback
- Маппит поля: `key` → `id`, `name` → `title`

### Пример из кода

До рефакторинга было ~40 строк деструктуризации и создания объекта:

```typescript
const {
  key,
  name,
  nameAsString,
  width,
  renderCell,
  renderHeaderCell,
  frozen,
  colSpan,
  minWidth,
} = column;
const group = colAndTheirGroup.get(key);
const isHaveWidth = typeof width === 'number';

if (frozen) frozenColsCount++;

const adaptedRenderHeaderCell = renderHeaderCell
  ? adaptRenderHeaderCell({ renderHeaderCell, name, nameAsString })
  : undefined;

const obj: ColumnGlideLast<R> = {
  id: key,
  title: typeof name === 'string' ? name : key,
  ...(group && { group }),
  ...(isHaveWidth && { width }),
  grow: isHaveWidth ? 0 : 1,
  colSpan: colSpan as ColumnGlideLast<R>['colSpan'],
  renderHeaderCell: adaptedRenderHeaderCell,
  renderCell: renderCell as ColumnGlideLast<R>['renderCell'],
};

acc.push(obj);
```

Теперь:

```typescript
const group = colAndTheirGroup.get(column.key);
const { column: glideColumn } = adaptColumn({
  column,
  group,
  onFrozen: () => frozenColsCount++,
});
acc.push(glideColumn);
```

## adaptRenderHeaderCell

Адаптирует пользовательскую функцию `renderHeaderCell` для работы с Glide.

### Проблема

Glide использует `id` и `title`, старая таблица использует `key` и `name`. Нужно преобразовать данные.

### Решение

Функция создает обертку:

1. Принимает `HeaderCellInfo<R>` от Glide (базовый тип)
2. Внутри приводит к `HeaderCellInfoGlideInstance<R, SR>` (расширенный тип)
3. Преобразует `column.key` и `column.name` для пользовательской функции
4. Вызывает renderHeaderCell с адаптированными данными

### Использование

```typescript
const adaptedRenderHeaderCell = adaptRenderHeaderCell({
  renderHeaderCell: userFunction,
  name: 'Column Name' | <JSXElement />,
  nameAsString: 'Column Name String',
});
```

### Приоритет имени

Для получения строкового `name`:

1. `name` - если это строка
2. `nameAsString` - если `name` это JSX (для отображения в настройках колонок, фильтрах)
3. `column.name` - текущее значение из колонки
4. `column.key` - последний фоллбэк

## getColumnName

Утилита для получения строкового имени колонки с правильным приоритетом.

```typescript
const nameString = getColumnName({
  name: columnConfig.name, // может быть string или JSX
  nameAsString: columnConfig.nameAsString, // опционально
  fallback: 'default-name', // если все остальное не подходит
});
```

## Типы

### AdaptedHeaderCellInfo

Тип данных, которые получает пользовательская функция renderHeaderCell:

```typescript
type AdaptedHeaderCellInfo<R, SR> = {
  column: {
    key: string;     // вместо id
    name: string;    // вместо title (всегда строка)
    // + все остальные поля из ColumnGlideInstance
  };
  drawArgs: { ... };
  ctxs: { ... };
};
```

### UserRenderHeaderCell

Тип пользовательской функции renderHeaderCell:

```typescript
type UserRenderHeaderCell<R, SR> = (
  cellInfo: AdaptedHeaderCellInfo<R, SR>
) => CanvasEl;
```

## Технические детали

### Приведение типов

В `adaptRenderHeaderCell` используется type assertion:

```typescript
const typedHeaderCellInfo =
  glideHeaderCellInfo as unknown as HeaderCellInfoGlideInstance<R, SR>;
```

Это безопасно, потому что:

- Функция вызывается только из `TableGlideInstance`
- Там всегда передается `HeaderCellInfoGlideInstance`
- Но сигнатура должна соответствовать базовому типу `ColumnGlideLast`

### Почему нужны адаптеры

Glide Data Grid и react-data-grid используют разные структуры данных. Вместо того чтобы менять все места использования, адаптеры делают преобразование в одном месте. Старый код работает без изменений.
