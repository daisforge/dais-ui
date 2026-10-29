# feature-canvas-dropdown

Выпадающий список по левому клику или наведению (`trigger`) на элементы,
отрисованные на canvas: Canvas-примитивы внутри ячеек, шапок и шапок групп
(проп `dropdown`). Пункты те же, что у контекстного меню таблицы
(`feature-context-menu`), подгрузка пунктов может быть асинхронной.

Открытие, якорь и закрытие общие с поповером: событие с canvas уходит на
контейнер таблицы, `feature-canvas-popover/CanvasPopoverListener` собирает из
него конфиг (`resolveCanvasOverlay`) и открывает через общий
`TablePopoverContext`. Здесь живёт только то, что отличает дропдаун: публичные
дефолты, нормализация, загрузка пунктов и переходник на атомарный Dropdown.

## Структура

```
feature-canvas-dropdown/
├── index.ts                         — API фичи для TableCanvas (не публичный)
├── constants.ts                     — DROPDOWN_DEFAULTS, значения пунктов-заглушек
├── types.ts                         — ResolvedCanvasDropdownConfig
├── components/
│   ├── CanvasDropdown.tsx           — переходник на Dropdown (единственное место, где таблица знает атомарку)
│   └── styled.ts                    — DropdownRoot, DropdownAnchor, DropdownPortal
├── hooks/
│   └── useDropdownItems.ts          — items / getItems, статусы loading и error, retry
└── utils/
    └── normalizeDropdownConfig.ts   — конфиг + tableConfig.dropdown + дефолты
```

Рядом:
- `TableGlide/lib/canvas/utils/dropdownConfig.ts` — публичные типы конфига
  (сквозные поля `Pick`-ом из атомарного Dropdown, остальное своё, как у
  тултипа; пункт списка — `DropdownItemOption`, как у контекстного меню);
- `TableGlide/lib/canvas/core/popoverTarget.ts` — поиск ноды с поповером или
  дропдауном по клику (`hasClickOverlay`);
- `feature-canvas-popover` — слушатель, открытие по наведению, Esc, уход
  курсора, ключ источника, обрезка якоря. Хуки оттуда импортируются по прямым
  путям, а не через barrel: barrel тянет слушатель, который сам рендерит
  `CanvasDropdown`.

## Открытие

Нода с `dropdown` обрабатывается в `TableGlide` так же, как нода с `popover`:
`trigger: 'hover'` даёт `portalHoverEnabled`, клик даёт
`interaction: { selection: 'keep' }` и курсор `pointer`. События клика и
наведения несут `dropdownFromNode`. Если на ноде заданы оба пропа, открывается
поповер (`resolveCanvasOverlay`).

`ResolvedCanvasOverlay` в `feature-canvas-popover/types.ts` различает виды:
`{ kind: 'popover' | 'dropdown', config }`. Общий код читает из `config`
только общие поля: `trigger`, `mouseEnterDelay`, `closeOnScroll`, `onOpen`,
`onClose`.

## Переходник CanvasDropdown

Атомарный Dropdown неуправляемый, открывает его клик по trigger-ребёнку.
Здесь он получает `alwaysOpened`: открыт, пока смонтирован, то есть пока
дропдаун есть в `TablePopoverState`. Закрытие делаем сами:

- клик мимо — `pointerdown` в capture-фазе на документе, если цель не внутри
  портала списка. Штатный `mousedown`-слушатель атомарки не годится: Glide
  отменяет `pointerdown` на canvas и совместимостный `mousedown` не приходит
  (та же причина, что у `TableDropdown`). Закрытие помечается `outsidePress`,
  защёлка в `useTablePopoverState` гасит догоняющий `open()` того же источника
  (toggle повторным кликом);
- выбор пункта с `closeOnSelect`, Esc и Tab внутри списка — атомарка зовёт
  `onToggle(false)`; Esc при `closeOnEsc: false` отбрасывается по `event.key`;
- Esc из таблицы — `useEscapeClose` (общий с поповером);
- уход курсора при `trigger: 'hover'` — `useHoverLeaveClose` по общему
  прямоугольнику якоря и списка.

Список рисуется в портал внутри якоря (`DropdownPortal`), а не в body: так
клик по пункту для таблицы остаётся кликом внутри её контейнера, и позиция
считается от якоря, как у контекстного меню (`MenuContainer`). Якорь лежит в
контейнере с `pointer-events: none`, портал возвращает себе `pointer-events:
auto`. Атомарка читает элемент портала при первом рендере, поэтому сам
Dropdown монтируется после того, как портал попал в DOM (`portalReady`).

Фокус атомарка при `alwaysOpened` не трогает, перехват фокуса как у поповера
не нужен. Клавиатурная навигация по пунктам не работает: она висит на
обёртке trigger-элемента, а фокус остаётся в гриде.

`listWidth` и `size` по умолчанию берутся из размера строк таблицы
(`LIST_WIDTH`, `SIZES` по `rowSize`), как в `TableDropdown`.

## Пункты и асинхронная подгрузка

`useDropdownItems`:
- `items` — статус `ready` сразу;
- `getItems` вызывается при монтировании (то есть при каждом открытии) и по
  `retry`. Синхронный результат даёт `ready`, промис — `loading`, потом `ready`
  или `error`; исключение из `getItems` тоже `error`;
- ответ, пришедший после размонтирования или после нового запроса, игнорируется
  (счётчик запросов).

В состоянии `loading` список показывает `loadingItems` (по умолчанию один
неактивный пункт «Загрузка...»), в `error` — `renderError({ error, retry,
close })` через `beforeList` с пустым списком, без `renderError` — неактивный
пункт «Не удалось загрузить».

Отличие от контекстного меню: там запросом владеет потребитель и
`getDropdownItems` перечитывается из `tableConfig` на каждом рендере, пока
меню открыто. Конфиг canvas-элемента — снимок на момент открытия (замыкание
в `renderCell`), перечитать его нельзя, поэтому дропдаун получает промис и
держит состояние загрузки сам.

## Где что менять

- Дефолты — `constants.ts`, `utils/normalizeDropdownConfig.ts`,
  `TableConfigDropdown` в `types/table-config.type.ts`.
- Публичные пропсы конфига — `TableGlide/lib/canvas/utils/dropdownConfig.ts`.
- Другой атомарный компонент под капотом — `components/CanvasDropdown.tsx`.
- Открытие, ключ источника, правила закрытия по скроллу и смене строки —
  `feature-canvas-popover`.

## Решения и ограничения

- Открывать дропдаун с клавиатуры и ходить по пунктам стрелками пока нельзя.
- Пункты только мышью; `onItemSelect` вызывается и для пункта с вложенными
  пунктами (так устроена атомарка), список при этом не закрывается.
- `trigger: 'hover'` с вложенными пунктами: подменю атомарки раскрывается
  своим наведением, зона удержания считается по общему прямоугольнику якоря
  и портала, куда попадают и подменю.
