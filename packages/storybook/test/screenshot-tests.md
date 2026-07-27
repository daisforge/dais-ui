# Скриншот-тесты

## Стек

**@storybook/test-runner** + **pngjs** + **pixelmatch** + **Playwright (SberBrowser)**.

Test-runner открывает каждую story в браузере, делает скриншот и сравнивает с эталоном. Если расхождение превышает порог — тест падает.

## Установка

> Storybook должен быть запущен на `localhost:4400` перед запуском тестов.

## Команды

| Команда                                          | Описание                                                   |
| ------------------------------------------------ | ---------------------------------------------------------- |
| `npm run screenshot:test`                        | Прогнать все тесты                                         |
| `npm run screenshot:test:one -- ComponentName`   | Прогнать один компонент                                    |
| `npm run screenshot:clean`                       | Удалить все эталонные скриншоты                            |
| `npm run screenshot:update`                      | Удалить старые эталоны + создать новые для всех stories    |
| `npm run screenshot:update:one -- ComponentName` | Обновить эталон одного компонента (без удаления остальных) |

> `screenshot:update` сначала удаляет все PNG, затем создаёт заново только для актуальных stories. Скрины от удалённых, переименованных или пропущенных (`skip: true`) stories не останутся.
>
> `screenshot:update:one` перезаписывает скрин по имени — старый заменяется новым. Используйте для точечного обновления без пересоздания всех эталонов.

## Процесс работы

### Локально

```
Изменил компонент
│
├─ npm run screenshot:test
│
│   ├─ Всё зелёное → коммит
│   │
│   └─ Тест упал → смотри diff в __snapshots__/__diff_output__/
│         │
│         ├─ Изменение ожидаемое → npm run screenshot:update:one -- ComponentName
│         │                      → git add __snapshots__/ && git commit
│         │
│         └─ Изменение неожиданное → чини баг, тесты заново
```

**Правило:** снапшоты коммитятся вместе с кодом в том же PR. Ревьюер видит и изменения кода, и изменения скриншотов.

### CI/CD (план)

В CI тесты запускаются в Docker — одинаковое окружение, одинаковые шрифты, воспроизводимые скриншоты.

```
PR → CI pipeline
│
├─ docker compose -f docker-compose.screenshots.yml up
│   ├─ Поднимает Storybook (build + serve)
│   └─ Запускает screenshot:test с CI=true (порог 1%)
│
├─ Тесты прошли → PR готов к ревью
│
└─ Тесты упали → CI публикует diff-картинки как артефакты
                → Разработчик смотрит диффы, решает: баг или ожидаемое изменение
```

Переменная `CI=true` переключает порог расхождения: **4% локально** (различия рендеринга между запусками) → **1% в Docker** (одинаковое окружение).

### Пороги сравнения

| Параметр                      | Значение | Назначение                                                         |
| ----------------------------- | -------- | ------------------------------------------------------------------ |
| `pixelmatch threshold`        | `0.1`    | Чувствительность на уровне пикселя. Игнорирует антиалиасинг текста |
| `failureThreshold` (локально) | `4%`     | Допустимый процент отличающихся пикселей                           |
| `failureThreshold` (CI)       | `1%`     | Строже, т.к. окружение одинаковое                                  |

## Снапшоты и диффы

| Путь                                                | В git? | Что содержит             |
| --------------------------------------------------- | ------ | ------------------------ |
| `packages/storybook/__snapshots__/*.png`            | Да     | Эталонные скриншоты      |
| `packages/storybook/__snapshots__/__diff_output__/` | Нет    | Диффы при падении тестов |

При падении теста в `__diff_output__/` появляется композитное изображение: **эталон | diff (красные пиксели) | текущий скриншот**.

### Когда обновлять

| Ситуация                                | Команда                                  |
| --------------------------------------- | ---------------------------------------- |
| Изменил стили одного компонента         | `screenshot:update:one -- ComponentName` |
| Обновил дизайн-токены / тему            | `screenshot:update`                      |
| Добавил новую story                     | `screenshot:update:one -- NewComponent`  |
| Обновил зависимость (sdds-finai и т.п.) | `screenshot:update`                      |

## Параметры screenshot в stories

### `screenshot.skip` — пропустить скриншот

Для нестабильных stories (анимации, лоадеры, динамический контент):

```tsx
// Одна story
export const LoadingState: Story = {
  parameters: {
    screenshot: { skip: true },
  },
};

// Все stories в файле
const meta: Meta = {
  title: 'Компоненты/MyComponent',
  parameters: {
    screenshot: { skip: true },
  },
};
```

### `screenshot.keepState` — сохранить состояние после play-функции

По умолчанию перед скриншотом курсор убирается из компонента, чтобы не триггерить hover-стили. `keepState: true` отключает это — нужно для stories, где play-функция открывает меню, показывает тост и т.д.

```tsx
export const ContextOnCellAndOnHeaderMenuStory: StoryObj = {
  parameters: {
    screenshot: { keepState: true },
  },
  render: ExampleAllFeatures,
  play: async ({ canvasElement }) => {
    // ... правый клик → открытие контекстного меню
    // Скриншот зафиксирует открытое меню
  },
};
```

| Параметр               | Тип       | По умолчанию | Описание                                 |
| ---------------------- | --------- | ------------ | ---------------------------------------- |
| `screenshot.skip`      | `boolean` | `false`      | Пропустить скриншот                      |
| `screenshot.keepState` | `boolean` | `false`      | Не сбрасывать состояние перед скриншотом |

## Как писать стабильные stories для скриншот-тестов

### Детерминированные данные

Не используйте `Math.random()`, `Date.now()`, `new Date()` в stories. Данные должны быть одинаковыми при каждом рендере.

```tsx
// Плохо — разные данные при каждом запуске
const rows = Array.from({ length: 10 }, () => ({
  value: Math.random(),
  date: new Date().toLocaleDateString(),
}));

// Хорошо — детерминированный генератор из tableData.ts
import { createRows, createSeededRandom, FIXED_DATE_TIMESTAMP } from '@df-storybook/data/tableData';
const rows = createRows(1, 10);
```

`createSeededRandom(seed)` — псевдослучайный генератор с фиксированным seed. Даёт одинаковые "случайные" числа при каждом запуске. `FIXED_DATE_TIMESTAMP` — фиксированная дата для stories с датами.

### Фиксированные размеры контейнеров

Не используйте относительные единицы (`vh`, `vw`, `%`) для контейнеров таблиц. Viewport может отличаться между машинами — `80vh` от 900px и от 1080px даст разное количество видимых строк.

```tsx
// Плохо — зависит от viewport
containerStyle: {
  height: '80vh';
}

// Хорошо — всегда одинаковый размер
containerStyle: {
  height: 700;
}
```

Для stories где layout чувствителен к ширине, оберните компонент в фиксированный контейнер:

```tsx
// Хорошо — полностью фиксированный layout
return (
  <div style={{ width: 1200, height: 700 }}>
    <Table tableConfig={{ containerStyle: { height: 700 } }} columnConfig={columnConfig} rows={rows} />
  </div>
);
```

### Отсутствие анимаций и таймеров

Stories с анимациями, лоадерами, скелетонами, таймерами обратного отсчёта — нестабильны по определению. Пропускайте их:

```tsx
const meta: Meta = {
  title: 'Компоненты/Loader',
  parameters: {
    screenshot: { skip: true },
  },
};
```

### Стабильные play-функции

Если story использует `play` для взаимодействия, используйте `waitFor` для ожидания результата, а не фиксированные таймауты:

```tsx
// Плохо — может не успеть или ждать лишнее
play: async ({ canvasElement }) => {
  fireEvent.click(button);
  await new Promise((resolve) => setTimeout(resolve, 2000));
};

// Хорошо — ждёт конкретный результат
play: async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await waitFor(() => {
    canvas.getByText('Меню открыто');
  });
};
```

## Как работает test-runner

```
test-runner открывает story в браузере
│
├─ 1. Story рендерится (React)
│
├─ 2. play() выполняется (если есть)
│      → клики, ввод, waitFor на появление меню
│      → play ЗАВЕРШАЕТСЯ
│
├─ 3. postVisit() вызывается
│      → setViewportSize(1440x900)
│      → waitForPageReady (шрифты, ассеты)
│      → document.fonts.ready
│      → waitForFunction (картинки)
│      → waitForTimeout(1500) (layout, canvas-анимации)
│      → убирает hover (если не keepState)
│      → screenshot #storybook-root
│      → сравнение с эталоном через pixelmatch
```
