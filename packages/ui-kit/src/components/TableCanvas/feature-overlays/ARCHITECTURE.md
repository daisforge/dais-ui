# feature-overlays

Всплывающие окна таблицы, привязанные к месту на canvas: фильтр в шапке
колонки и окна canvas-элементов (Popover и Dropdown на иконках, кнопках,
чипах внутри ячеек и шапок). Все они проходят через один
`TablePopoverContext`: в таблице открыто не больше одного такого окна, новое
закрывает предыдущее. Контекстное меню живёт отдельно
(`feature-context-menu`), но на открытое окно оглядывается, см. раздел
«Контекстное меню».

Папка делится на два уровня:

- корень: общий контекст, его состояние, место отрисовки (`PopoverInTable`)
  и правила закрытия, одинаковые для всех окон (скролл, ресайз таблицы);
- `canvas/`: окна canvas-элементов. `canvas/core` слушает события с canvas и
  открывает окно через общий контекст, `canvas/popover` и `canvas/dropdown`
  рисуют содержимое. У каждой подпапки свой ARCHITECTURE.md.

## Структура

```
feature-overlays/
├── index.ts                          публичный API: PopoverInTable, контекст, хуки, CanvasOverlayListener
├── constants.ts                      DATA_POPOVER_TRIGGER, POPOVER_OFFSET, POPOVER_Z_INDEX, отступы содержимого
├── context/
│   ├── index.ts
│   └── TablePopoverContext.tsx       TablePopoverState, TablePopoverBehavior, DEFAULT_POPOVER_BEHAVIOR, getPopoverBehavior, useTablePopover
├── hooks/
│   ├── useTablePopoverState.ts       состояние окна, open и close, защёлка переоткрытия
│   ├── useClosePopoverOnRegionchange.ts  закрытие по скроллу таблицы
│   └── usePopoverRiszeHandler.ts     сдвиг окна при ресайзе колонки (сейчас не подключён)
├── components/
│   ├── PopoverContainer.tsx          PopoverInTable: якорь на месте элемента, фильтр через PopoverBeta, custom через render
│   └── styled.ts                     StyledPopoverContainer, PopoverContent, HiddenTriggerButton
├── utils/
│   └── calculatePositionClick.ts     точка якоря фильтра по событию клика в шапке
├── __tests__/
└── canvas/
    ├── core/                         слушатель кликов и наведения, выбор окна, Esc, уход курсора, якорь
    ├── popover/                      CanvasPopover: переходник на PopoverBeta, дефолты, фокус
    └── dropdown/                     CanvasDropdown: переходник на Dropdown, дефолты, загрузка пунктов
```

Подробно про `canvas/`: `canvas/core/ARCHITECTURE.md`,
`canvas/popover/ARCHITECTURE.md`, `canvas/dropdown/ARCHITECTURE.md`.

## Поток данных

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  КТО ОТКРЫВАЕТ (вызывает open() контекста)                                  │
│                                                                             │
│  Фильтр шапки                              table-hooks/useColumns.tsx       │
│    клик по иконке фильтра в шапке колонки (onOpenFilter)                   │
│    open({                                                                   │
│      position: точка под иконкой (calculatePositionClick.ts),              │
│      contentType: 'filter',                                                 │
│      contentData: { columnConfig },                                         │
│      sourceKey: columnConfig.key,                                           │
│    })                                                                       │
│    behavior не задан, берётся DEFAULT_POPOVER_BEHAVIOR.filter               │
│                                                                             │
│  Canvas-элемент             canvas/core/components/CanvasOverlayListener.tsx│
│    клик или наведение на элемент с пропом popover или dropdown             │
│    open({                                                                   │
│      position и anchorSize: прямоугольник элемента, обрезанный краем грида,│
│      contentType: 'custom',                                                 │
│      contentData: { kind: 'canvas-overlay', overlay, anchorRow },          │
│      sourceKey: id элемента + колонка + строка,                             │
│      behavior: { closeOnScroll по конфигу, closeOnTableResize: true },     │
│      render: ({ close }) => <CanvasPopover> или <CanvasDropdown>,           │
│    })                                                                       │
└─────────────────────────────────────────────┬───────────────────────────────┘
                                              │
                                        open(params)
                                              │
                                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  useTablePopoverState                        hooks/useTablePopoverState.ts  │
│  Вызывается в TableCanvas.tsx, значение уходит в TablePopoverProvider.      │
│                                                                             │
│  open(params)                                                               │
│    │                                                                        │
│    ├── защёлка взведена и sourceKey тот же, что только что закрыли?        │
│    │     → ничего не делаем (повторный клик по элементу закрыл окно)       │
│    │                                                                        │
│    └── иначе                                                               │
│          setState({ isOpen: true, position, anchorSize, contentType,       │
│                     contentData, render, behavior, sourceKey })            │
│          прежнее окно при этом заменяется: одно окно на таблицу            │
│                                                                             │
│  close({ outsidePress? })                                                   │
│    isOpen: false                                                            │
│    outsidePress: true → запоминаем sourceKey и взводим защёлку на           │
│    REOPEN_GUARD_MS (300 мс). Нужна, потому что floating-ui закрывает окно  │
│    на pointerdown мимо, а клик по той же иконке на canvas приходит позже,   │
│    на mouseup, и без защёлки открыл бы окно заново                          │
│                                                                             │
│  updatePosition(position): только сдвиг якоря                               │
│                                                                             │
│  Результат: TablePopoverState                                               │
│    { isOpen, position, anchorSize, contentType, contentData, render,       │
│      behavior, sourceKey }                                                  │
└─────────────────────────────────────────────┬───────────────────────────────┘
                                              │
                                 state через TablePopoverProvider
                                              │
              ┌───────────────────────────────┼─────────────────────────────┐
              ▼                               ▼                             ▼
┌───────────────────────────┐ ┌───────────────────────────┐ ┌───────────────────────────┐
│ PopoverInTable            │ │ Кто закрывает             │ │ Кто читает состояние      │
│ components/               │ │                           │ │                           │
│ PopoverContainer.tsx      │ │ useClosePopoverOn         │ │ CanvasOverlayListener:    │
│                           │ │ RegionChange: скролл      │ │ повторный клик, смена     │
│ рендерится в контейнер    │ │ таблицы по behavior       │ │ строки, onOpen и onClose  │
│ таблицы                   │ │                           │ │                           │
│ (widgets/table-or-card-UI)│ │ PopoverInTable: ресайз    │ │ useHoverOverlayOpen: не   │
│                           │ │ таблицы по behavior       │ │ открывать по наведению,   │
│ position из viewport      │ │                           │ │ пока открыто окно по      │
│ переводится в координаты  │ │ CanvasOverlayListener:    │ │ клику или фильтр          │
│ контейнера                │ │ сброс якорей, смена       │ │                           │
│ (viewportToContainer      │ │ строки, размонтирование   │ │ CanvasTooltipOverlay:     │
│ Position)                 │ │                           │ │ тултипы не показываются,  │
│                           │ │ Содержимое окна: клик     │ │ пока открыто окно         │
│ 'filter' →                │ │ мимо, Esc, кнопка внутри, │ │ canvas-элемента           │
│   StyledPopoverBeta с     │ │ уход курсора              │ │                           │
│   FilterComponentIn       │ │                           │ │ useContextMenuValues:     │
│   Popover                 │ │                           │ │ контекстное меню не       │
│                           │ │                           │ │ открывается, пока открыто │
│ 'custom' →                │ │                           │ │ окно и два кадра после    │
│   якорь размером с        │ │                           │ │                           │
│   элемент, внутри         │ │                           │ │                           │
│   render({ close })       │ │                           │ │                           │
└───────────────────────────┘ └───────────────────────────┘ └───────────────────────────┘
```

## Состояние: одно окно на таблицу

`TablePopoverState` описывает единственное открытое окно таблицы. Поля:

- `isOpen`;
- `position`: координаты якоря во viewport. Для фильтра это точка под
  иконкой, для canvas-элемента левый верхний угол его прямоугольника.
  `PopoverInTable` переводит их в координаты контейнера таблицы, потому что
  якорь лежит внутри него с `position: absolute`;
- `anchorSize`: размер якоря. Фильтр открывается от точки 1 на 1 px, окно
  canvas-элемента от прямоугольника элемента, чтобы placement считался от
  реальных границ;
- `contentType`: вид содержимого, см. ниже;
- `contentData`: данные открывшего. Общий код их не разбирает, только хранит;
- `render`: отрисовка содержимого для `custom`;
- `behavior`: правила закрытия, если открывший их задал;
- `sourceKey`: ключ источника. По нему работает закрытие повторным кликом и
  защёлка переоткрытия.

Открытие второго окна не требует закрывать первое: `open()` просто заменяет
состояние, так фильтр шапки, Popover и Dropdown закрывают друг друга.

## Виды содержимого

`PopoverContentType` в `context/TablePopoverContext.tsx`:

- `filter`: фильтр колонки из шапки. `contentData` это `{ columnConfig }`.
  `PopoverInTable` сам рисует `StyledPopoverBeta` со скрытой кнопкой-триггером
  (`HiddenTriggerButton` с атрибутом `DATA_POPOVER_TRIGGER`) и после монтирования
  программно кликает по ней через два `requestAnimationFrame`: PopoverBeta
  подписывается на клик по своему target не сразу. Внутри
  `FilterComponentInPopover` из `feature-filtering`;
- `custom`: произвольное содержимое, его рисует открывший через `render`.
  `PopoverInTable` ставит только якорь (`StyledPopoverContainer` размером с
  `anchorSize` и `pointer-events: none`, чтобы клики проходили на canvas) и
  вызывает `render({ close })`. Так открыты Popover и Dropdown на
  canvas-элементах: в `contentData` лежит `CanvasOverlayContentData` с
  видом окна, собранным конфигом и строкой под якорем.

Новый вид окна со своим компонентом добавляется либо новым значением
`PopoverContentType` и ветвью в `PopoverInTable`, либо через `custom` с
собственным `render`, как у canvas-окон.

## Правила закрытия

Правила описывает `TablePopoverBehavior`:

- `closeOnScroll`: `'x'` только при горизонтальном скролле, `'xy'` при любом,
  `false` не закрывать;
- `closeOnTableResize`: при изменении размеров таблицы.

Если открывший `behavior` не передал, берутся
`DEFAULT_POPOVER_BEHAVIOR[contentType]`: фильтр `{ 'x', true }`, custom
`{ 'xy', true }`. Действующие правила открытого окна даёт
`getPopoverBehavior(state)`. Открыватель canvas-окон передаёт `behavior` явно:
`closeOnScroll` из конфига элемента превращается в `'xy'` или `false`.

Кто и как закрывает:

- скролл таблицы: `useClosePopoverOnRegionChange` (`hooks/`). TableCanvas
  подключает его к `onVisibleRegionChanged` грида. Сдвиг считается по первой
  видимой ячейке (`range.x`, `range.y`) и смещению внутри неё (`tx`, `ty`) с
  порогом 3 px: одно смещение не меняется, если прокрутили ровно на целое
  число строк. Последнее положение хранится всегда, а не только при открытом
  окне, чтобы первый сдвиг после открытия сравнивался с реальным положением.
  Состояние читается через ref, обработчик уходит в Glide один раз и
  срабатывает на каждый кадр без троттлинга, иначе запомненное положение
  отстаёт и окно закрывается зря;
- ресайз таблицы (окно браузера, полный экран): `PopoverInTable` через
  `useTableResizeObserver`, если `closeOnTableResize`;
- ресайз и перестановка колонки: сброс приходит из `TableGlide`
  (`dispatchCanvasPortalReset`), его слушает `CanvasOverlayListener` и
  закрывает только окна canvas-элементов. Для фильтра шапки есть
  `usePopoverResizeHandler` (сдвиг окна вслед за иконкой), но сейчас он никуда
  не подключён;
- клик мимо: floating-ui внутри PopoverBeta зовёт `onToggle(false)`, окно
  закрывается с `outsidePress: true`, см. защёлку в `useTablePopoverState`;
- Esc, уход курсора, смена строки под якорем, размонтирование таблицы: для
  canvas-окон, описано в `canvas/core/ARCHITECTURE.md`. Фильтр по Esc
  закрывает сам PopoverBeta.

## Контекстное меню

Контекстное меню (`feature-context-menu`, состояние в
`table-hooks/useContextMenuValues.ts`) через `TablePopoverContext` не
открывается: у него своё состояние и своё закрытие по скроллу
(`useCloseContextMenuOnRegionChange`). Связь одна: пока окно контекста открыто
и ещё два кадра после его закрытия, правый клик не открывает меню
(`blockContextMenuRef`). Иначе правый клик закрывал бы окно и тут же открывал
меню поверх.

## Где что менять

- Новый источник окна (ещё одна кнопка в шапке, окно по клику в ячейке):
  вызвать `open()` из `useTablePopover()` с `contentType: 'custom'` и своим
  `render`, задать `sourceKey` и при необходимости `behavior`.
- Новый вид содержимого с общим компонентом: `PopoverContentType` и ветка в
  `components/PopoverContainer.tsx`, дефолтный `behavior` в
  `DEFAULT_POPOVER_BEHAVIOR`.
- Правила закрытия по скроллу: `hooks/useClosePopoverOnRegionchange.ts`; по
  ресайзу таблицы: `components/PopoverContainer.tsx`.
- Внешний вид фильтра в окне: `components/styled.ts`, `constants.ts`.
- Всё про canvas-элементы: `canvas/core`, `canvas/popover`,
  `canvas/dropdown`.
