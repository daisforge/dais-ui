# feature-overlays/canvas/popover

Popover по клику или наведению (`trigger`) на элементы, отрисованные на
canvas: Canvas-примитивы внутри ячеек, шапок и шапок групп (проп `popover`).
Popover на ячейку или шапку целиком (`cellPopover` и `headerCellPopover`)
отложен, см. «Решения и ограничения».

Открытие, якорь и закрытие общие с Dropdown и живут в `../core` (там описаны
клик, наведение с задержкой, блокировка при ресайзе, Esc со стеком и якорь).
Здесь только то, что отличает Popover: дефолты, нормализация, переходник на
PopoverBeta и удержание фокуса. Папка не импортирует ни `../dropdown`, ни
слушатель из `../core`, только общие хуки, утилиты и константы оттуда.

## Структура

```
canvas/popover/
├── index.ts                         CanvasPopover, normalizePopoverConfig, ResolvedCanvasPopoverConfig (для ../core)
├── constants.ts                     POPOVER_DEFAULTS
├── types.ts                         ResolvedCanvasPopoverConfig
├── components/
│   ├── CanvasPopover.tsx            переходник на PopoverBeta (единственное место, где таблица знает атомарку)
│   └── styled.ts                    CanvasAnchor (target для PopoverBeta)
├── hooks/
│   └── usePopoverFocusGuard.ts      фокус остаётся в таблице
├── utils/
│   └── normalizePopoverConfig.ts    конфиг элемента, tableConfig.popover и дефолты
└── __tests__/
```

Рядом:

- `TableGlide/lib/canvas/utils/portalClickEvents.ts`: публичные типы конфига
  (`CanvasNodePopoverProps`, `CanvasNodePopoverConfig`,
  `CanvasPopoverRenderApi`);
- `../core`: слушатель, открытие по наведению, Esc, уход курсора, ключ
  источника, обрезка якоря.

## Поток данных

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ../core                                                                    │
│                                                                             │
│  resolveCanvasOverlay(detail, defaults)                                     │
│    popoverFromNode есть →                                                   │
│      normalizePopoverConfig(popoverFromNode, tableConfig.popover)           │
│        utils/normalizePopoverConfig.ts                                      │
│        элемент → tableConfig.popover → POPOVER_DEFAULTS (constants.ts)      │
│        trigger только с элемента                                            │
│      → { kind: 'popover', config: ResolvedCanvasPopoverConfig }             │
│                                                                             │
│  CanvasOverlayListener.openOverlay → TablePopoverContext.open({             │
│    contentType: 'custom',                                                   │
│    render: ({ close }) =>                                                   │
│      <CanvasPopover key={sourceKey} config close tableContainer />          │
│  })                                                                         │
└─────────────────────────────────────────────┬───────────────────────────────┘
                                              │
                        PopoverInTable рисует якорь и вызывает render
                                              │
                                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  CanvasPopover                            components/CanvasPopover.tsx      │
│                                                                             │
│  <PopoverBeta opened trigger="click" target={<CanvasAnchor />}              │
│     placement offset hasTail flip shift zIndex resizable                   │
│     outsideClick={isHover ? false : config.closeOnOutsideClick}             │
│     onToggle={handleToggle}>                                                │
│    {config.renderContent ? renderContent({ close }) : config.content}       │
│  </PopoverBeta>                                                             │
│                                                                             │
│  Открыт, пока записан в TablePopoverState: opened всегда true.              │
│                                                                             │
│  Хуки:                                                                      │
│    usePopoverFocusGuard(popoverRef)      hooks/usePopoverFocusGuard.ts      │
│      фокус не уходит из таблицы при открытии                                │
│    useEscapeClose({ enabled: closeOnEsc, tableContainer,                    │
│                     getOverlayElement: контейнер floating-ui })             │
│      ../core/hooks/useEscapeClose.ts                                        │
│    useHoverLeaveClose({ enabled: isHover, anchorRef, popoverRef,            │
│                         expand: HOVER_ANCHOR_GAP, delay: mouseLeaveDelay }) │
│      ../core/hooks/useHoverLeaveClose.ts                                    │
│                                                                             │
│  handleToggle(opened):                                                      │
│    opened === true → ничего                                                 │
│    isEscapeInProgress() → ничего (Esc решает useEscapeClose)                │
│    иначе клик мимо:                                                         │
│      click  → close({ outsidePress: true })  защёлка от переоткрытия        │
│      hover  → close()                                                       │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Конфиг и дефолты

`normalizePopoverConfig(config, defaults)` берёт каждое поле сначала с
элемента, затем из `tableConfig.popover`, затем из `POPOVER_DEFAULTS`:
`placement: 'bottom-start'`, `offset: 4`, `hasTail: false`, `flip`, `shift`,
`zIndex: POPOVER_Z_INDEX`, `closeOnScroll`, `closeOnOutsideClick`,
`closeOnEsc`, `trigger: 'click'`, `mouseEnterDelay: 300`,
`mouseLeaveDelay: 200`. `trigger` берётся только с элемента: нода решает,
ловить ли наведение, ещё до того, как известен `tableConfig`.

Поля без дефолта проходят как есть: `content`, `renderContent`, `resizable`,
`ariaLabel`, `onOpen`, `onClose`. `renderContent` получает
`CanvasPopoverRenderApi` с `close()`.

## Клик мимо и повторный клик

Якорь `CanvasAnchor` лежит в контейнере с `pointer-events: none`, поэтому
клик по самому canvas-элементу для floating-ui тоже клик мимо: PopoverBeta
зовёт `onToggle(false)` на pointerdown, окно закрывается с
`outsidePress: true`, а догоняющий `open()` того же источника на mouseup гасит
защёлка в `useTablePopoverState`. Так повторный клик по элементу закрывает
Popover, а не открывает заново.

При `trigger: 'hover'` `outsideClick` выключен: окно закрывает только уход
курсора (`useHoverLeaveClose`) или Esc.

## Фокус

FloatingFocusManager внутри PopoverBeta при открытии ставит фокус на контейнер
Popover. В таблице это даёт рамку фокуса (Glide отменяет pointerdown, браузер
считает фокус клавиатурным) и уводит фокус из грида.

- `usePopoverFocusGuard` слушает `focusin` на документе (capture, синхронно,
  до кадра) и, если фокус пришёл на контейнер Popover, возвращает его туда, где
  он был. Только в начальном окне: до первого перехвата или нажатия внутри
  Popover, иначе клик по тексту в Popover возвращал бы фокус в таблицу (Ctrl+C
  копировал бы ячейку). При закрытии с фокусом внутри фокус возвращается на
  место. Тот же приём, что у Popover фильтра
  (`feature-filtering/use-focus-search-input`).
- При возврате фокуса предпочитается `relatedTarget` события (откуда фокус
  пришёл): при переключении Popover A на B фокус до открытия B был внутри уже
  удалённого A.

Контейнер ищем по `[data-floating-ui-focusable], [role="dialog"]`
(`../core/utils/floatingContainer.ts`). Тест
`../core/__tests__/floatingContainer.test.tsx` рендерит настоящий PopoverBeta
и упадёт, если разметка атомарки изменится.

## Esc

Esc закрывает только `useEscapeClose` (`../core`, раздел «Esc со стеком» в его
ARCHITECTURE.md). PopoverBeta тоже слышит Esc на всём документе и зовёт
`onToggle(false)`, отключить это нельзя: такое закрытие переходник пропускает
по `isEscapeInProgress()`.

## Где что менять

- Дефолты: `constants.ts`, `utils/normalizePopoverConfig.ts`.
- Публичные пропсы конфига: `TableGlide/lib/canvas/utils/portalClickEvents.ts`.
- Другой атомарный компонент под капотом: `components/CanvasPopover.tsx`.
- Открытие, ключ источника, правила закрытия: `../core`.

## Решения и ограничения

- Под капотом PopoverBeta (дизайн-система). Свой Popover на floating-ui
  обошёлся бы без перехвата фокуса, но разошёлся бы с атомаркой.
- Шина клика отдельная от шины наведения тултипов. Общая шина событий якоря
  (тултипы, Popover, будущий popup, подсветка онбординга) это отдельная
  задача: она меняет тултипы.
- Popover на ячейку или шапку целиком (`cellPopover` и `headerCellPopover` в
  `columnConfig`, включатель `tableConfig.popover.enabled`) не реализован:
  основной сценарий это иконка или кнопка в ячейке, а колоночный вариант
  удваивал API без запроса. Имена зарезервированы. Для реализации
  понадобятся: клик по ячейке и шапке в `TableGlide` (как
  `useItemHoveredHandler` для тултипов), якорь объединённой ячейки по `span` и
  `spanRows`, обрезка якоря под шапкой и закреплёнными колонками, show от
  `useItemHoveredHandler` для колонок с конфигом, приоритет ноды над колонкой
  в `useHoverOverlayOpen`.
- Открыть Popover с клавиатуры или программно пока нельзя. Popover с
  `trigger: 'hover'` не открыть и на сенсорном экране, поэтому действия,
  нужные всем, вешаются на клик.
- `popup`, `cellPopup` и `headerCellPopup` зарезервированы: тот же клик и
  резолвер, рендер через PopupDF без якоря. Popup модальный, поэтому в общем
  контексте ему понадобится отдельный слот, а не замена текущего окна.
- Якорь (`StyledPopoverContainer` и `CanvasAnchor`) это DOM-элемент на месте
  canvas-элемента. Тот же приём подходит для подсветки элементов таблицы
  внешними библиотеками онбординга.
