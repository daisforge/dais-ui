# Selection subsystem — техническая карта хуков

Код-уровневая карта подсистемы выделения/подсветки: за что отвечает каждый файл
в этой папке, что хранит и что отдаёт.

Про **поведение и «почему так»** (Ctrl/не-Ctrl, своё состояние vs нативный glide,
кто рисует) — см. функциональную доку:
`../../../TableCanvas/docs/SelectionAndHighlighting.md`.

## Конвейер

```
useNativeGridSelection ──selection──┬─► useSelectionGeometry ──geometry──┐
       handlers                     │                                     │
       └──► useTableSelectionSystem ┘  (композит 3 осей: колонки/строки/    │
                    │                    активная строка)                   │
                    │ indexes, drawFocusRing                                │
                    ▼                                                       ▼
        useBaseHighlightRegions ──────────► useColumnRowHighlightRegions
                                                     │
                                                     ▼
                              DataEditor.highlightRegions (в TableGlide.tsx)
```

Роли делятся на четыре группы: **состояние**, **оркестратор**, **геометрия**,
**отрисовка**.

## Состояние (владеют своим стейтом)

### `useNativeGridSelection`
Стор нативного glide-выделения ячеек. Держит `GridSelection` (internal в
uncontrolled или отдаёт наружу в controlled) и всегда дублирует изменение в
`onSelectionEmit` (канал copy/paste). Выводит режим `rangeSelect` из `selectionMode`.
Возвращает: `selection`, `handleGridSelectionChange`, `handleSelectionCleared`,
`rangeSelect`.

### `useColumnAxisSelection`
Ось выделения колонок (по шапке). Хранит `selectedColumns` (`CompactSelection`),
флаг `isNativeColumnSelection` (текущее выделение — синтетический вертикальный range
колонки → гасим focus-ring на якоре), `lastSelectedColumnRef` (якорь Shift-диапазона).
Возвращает производные `selectedColumnIndexes` / `selectedColumnSet`, сеттеры и
`clearColumnSelection`. Логики клика тут нет — она в оркестраторе.

### `useRowAxisSelection`
Ось выделения строк (по нумерации). Хранит `selectedRows` (`CompactSelection`) и
жестовые ref'ы: `ctrlGestureRef`, `ctrlBaseRowsRef`, `pointerGestureRef` (снимаются
на pointerdown ДО изменения glide-выделения — чтобы драг сужался корректно).
Владеет window-listener на pointerdown/up. Возвращает `headerSelectedRowIndexes`,
сеттеры, `clearRowSelection`.

### `useActiveRowHighlight`
Ось «липкой» подсветки активной строки (`highlightActiveType='row'`), отвязана от
селектинга. Хранит индекс (internal или controlled по `highlightActiveRow`).
Возвращает `activeRow` и `commitActiveRow` (зовёт `onChange` всегда — работает и как
подписка). «Залипание» реализует оркестратор.

## Оркестратор

### `useTableSelectionSystem`
Единственное место, где сходятся все оси. Композит трёх осей выше + хендлеров
`useNativeGridSelection`. Содержит всю логику клика/драга:
- `handleGridSelectionWithColumnReset` — разбирает каждое изменение выделения (клик
  по нумерации → строки в свою ось; иначе обычные ячейки + сброс осей);
- `selectColumnFromHeader` — клик по шапке (одиночный / Shift / Ctrl / select-all по
  углу);
- `handleSelectionClearedWithColumns`, `numberingColumnIndex`, `drawFocusRing`.

Здесь же держится **инвариант взаимоисключения** (выбор одной оси чистит остальные)
— в одном месте, а не размазан.

## Геометрия (чистые вычисления)

### `useSelectionGeometry`
Из `selection` считает «геометрию рендера»: `firstDataColumnIndex`, `activeDataRange`
(клампится к data-area), `activeRows` / `activeColumns`, `outlineRange`, и предикаты
`isActiveDataCell`, `isActiveHeaderColumn`, `isServiceColumn`, `isCheckboxSelectedRow`.
Без состояния — один `useMemo`.

### `rectGeometry.ts`
Чистые примитивы над прямоугольником (без React): `rectContainsCell`,
`clampRectToDataColumns`, `findFirstDataColumnIndex`. Единый источник этих расчётов.

## Отрисовка (highlightRegions)

### `useBaseHighlightRegions`
Базовый слой прямоугольников: затемнение сервис-зоны под активным диапазоном, своя
заливка+обводка **одиночной** ячейки (в `cell`), outline ошибок (cell-level, `1×1`),
внешние регионы. Диапазоны range-cell обводит сам glide — не дублируем.
Error-outline добавляется в конец (чтобы active-fill его не перекрыл).

### `useColumnRowHighlightRegions`
Надстройка над базой: заливка + **слитая** обводка выбранных колонок/строк
(`pushMergedOutlines`), затемнение шапки/нумерации, подсветка активной строки (bg с
вырезом под текущий селектинг), затемнение нумерации под ячейками `rangeStack`.
Свою обводку `rangeStack` **не рисует** (см. функциональную доку, раздел про
multi-range).

## Барьель

### `index.ts`
Экспортит наружу (в `TableGlide.tsx`) то, что нужно движку: `useNativeGridSelection`,
`useSelectionGeometry`, `useBaseHighlightRegions`, `useColumnRowHighlightRegions`,
`useTableSelectionSystem`, `rectContainsCell`. Оси и `rectGeometry` — внутренние.

## Словарь

**Selection** = состояние выбора · **Highlight** = подсветка активной строки ·
**Geometry** = вычисления · **Region** = прямоугольник отрисовки ·
**Checkbox…** = внешний чекбокс-выбор строк (домен TableCanvas).
