# feature-canvas-popover

Popover по клику или наведению (`trigger`) на элементы, отрисованные на
canvas: Canvas-примитивы внутри ячеек, шапок и шапок групп (проп `popover`).
Popover на ячейку или шапку целиком (`cellPopover` / `headerCellPopover`)
отложен: см. «Решения и ограничения».

Открытие, якорь и закрытие общие с Dropdown и живут в `feature-canvas-overlay`
(там же описаны клик, наведение и закрытие). Здесь только то, что отличает
Popover: дефолты, нормализация, переходник на PopoverBeta и удержание фокуса.
Папка не импортирует ни `feature-canvas-dropdown`, ни слушатель из
`feature-canvas-overlay`, только общие хуки и утилиты оттуда.

## Структура

```
feature-canvas-popover/
├── index.ts                         — CanvasPopover, normalizePopoverConfig, ResolvedCanvasPopoverConfig (для feature-canvas-overlay)
├── constants.ts                     — POPOVER_DEFAULTS
├── types.ts                         — ResolvedCanvasPopoverConfig
├── components/
│   ├── CanvasPopover.tsx            — переходник на PopoverBeta (единственное место, где таблица знает атомарку)
│   └── styled.ts                    — CanvasAnchor (target для PopoverBeta)
├── hooks/
│   └── usePopoverFocusGuard.ts      — фокус остаётся в таблице
└── utils/
    └── normalizePopoverConfig.ts    — конфиг + tableConfig.popover + дефолты
```

## Где что менять

- Дефолты: `constants.ts`, `utils/normalizePopoverConfig.ts`.
- Публичные пропсы конфига: `TableGlide/lib/canvas/utils/portalClickEvents.ts`.
- Другой атомарный компонент под капотом: `components/CanvasPopover.tsx`.

## Фокус и Esc

FloatingFocusManager внутри PopoverBeta при открытии ставит фокус на контейнер
поповера. В таблице это даёт фокус-рамку (Glide отменяет pointerdown, браузер
считает фокус клавиатурным) и уводит фокус из грида.

- `usePopoverFocusGuard` ловит `focusin` на контейнере (capture, синхронно, до
  кадра) и возвращает фокус туда, где он был. Только в начальном окне: до
  первого перехвата или нажатия внутри поповера, иначе клик по тексту в
  поповере возвращал бы фокус в таблицу (Ctrl+C копировал бы ячейку). При
  закрытии с фокусом внутри фокус возвращается на место. Тот же приём, что у
  поповера фильтра (`feature-filtering/use-focus-search-input`).
- Esc закрывает только `useEscapeClose` (`feature-canvas-overlay`, раздел
  «Esc» в его ARCHITECTURE.md). PopoverBeta тоже слышит Esc на всём документе
  и зовёт `onToggle(false)`, отключить это нельзя: такое закрытие переходник
  пропускает по `isEscapeInProgress()`.
- `usePopoverFocusGuard` при возврате фокуса предпочитает `relatedTarget`
  события (откуда фокус пришёл): при переключении поповера A на B фокус до
  открытия B был внутри уже удалённого A.

Контейнер ищем по `[data-floating-ui-focusable], [role="dialog"]`
(`feature-canvas-overlay/utils/floatingContainer.ts`). Тест `feature-canvas-overlay/__tests__/floatingContainer.test.tsx` рендерит настоящий
PopoverBeta и упадёт, если разметка атомарки изменится.

## Решения и ограничения

- Под капотом PopoverBeta (дизайн-система). Свой поповер на floating-ui
  обошёлся бы без перехвата фокуса, но разошёлся бы с атомаркой.
- Шина клика отдельная от шины наведения тултипов. Общая шина «событий якоря»
  (тултипы, поповер, будущий popup, подсветка онбординга) — отдельная задача:
  она меняет тултипы.
- Поповер на ячейку или шапку целиком (`cellPopover` / `headerCellPopover` в
  `columnConfig`, включатель `tableConfig.popover.enabled`) был реализован и
  вырезан до первого релиза: основной сценарий — иконка или кнопка в ячейке,
  а колоночный вариант удваивал API без запроса. Имена зарезервированы.
  Для возврата понадобятся: клик по ячейке и шапке в `TableGlide` (как
  `useItemHoveredHandler` для тултипов), якорь объединённой ячейки по `span` /
  `spanRows`, обрезка якоря под шапкой и закреплёнными колонками, show от
  `useItemHoveredHandler` для колонок с конфигом, приоритет «нода выше колонки»
  в `useHoverOverlayOpen`.
- Открыть поповер с клавиатуры или программно пока нельзя.
- `popup` / `cellPopup` / `headerCellPopup` зарезервированы: тот же клик и
  резолвер, рендер через PopupDF без якоря. Popup модальный, поэтому в общем
  контексте ему понадобится отдельный слот, а не замена текущего поповера.
- Якорь (`StyledPopoverContainer` + `CanvasAnchor`) — DOM-элемент на месте
  canvas-элемента; тот же приём подходит для подсветки элементов таблицы
  внешними библиотеками онбординга.
