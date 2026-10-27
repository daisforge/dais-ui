# feature-canvas-popover

Popover по клику или наведению (`trigger`) на элементы, отрисованные на
canvas: Canvas-примитивы внутри ячеек, шапок и шапок групп (проп `popover`).
Popover на ячейку или шапку целиком (`cellPopover` и `headerCellPopover`)
отложен, см. «Решения и ограничения».

Открытие, якорь и закрытие общие с Dropdown и живут в `feature-canvas-overlay`
(там же описаны клик, наведение, закрытие и Esc). Здесь только то, что
отличает Popover: дефолты, нормализация, переходник на PopoverBeta и
удержание фокуса. Папка не импортирует ни `feature-canvas-dropdown`, ни
слушатель из `feature-canvas-overlay`, только общие хуки и утилиты оттуда.

## Структура

```
feature-canvas-popover/
├── index.ts                         CanvasPopover, normalizePopoverConfig, ResolvedCanvasPopoverConfig (для feature-canvas-overlay)
├── constants.ts                     POPOVER_DEFAULTS
├── types.ts                         ResolvedCanvasPopoverConfig
├── components/
│   ├── CanvasPopover.tsx            переходник на PopoverBeta (единственное место, где таблица знает атомарку)
│   └── styled.ts                    CanvasAnchor (target для PopoverBeta)
├── hooks/
│   └── usePopoverFocusGuard.ts      фокус остаётся в таблице
└── utils/
    └── normalizePopoverConfig.ts    конфиг элемента, tableConfig.popover и дефолты
```

## Где что менять

- Дефолты: `constants.ts`, `utils/normalizePopoverConfig.ts`.
- Публичные пропсы конфига: `TableGlide/lib/canvas/utils/portalClickEvents.ts`.
- Другой атомарный компонент под капотом: `components/CanvasPopover.tsx`.
- Открытие, ключ источника, правила закрытия: `feature-canvas-overlay`.

## Фокус и Esc

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
- Esc закрывает только `useEscapeClose` (`feature-canvas-overlay`, раздел
  «Esc» в его ARCHITECTURE.md). PopoverBeta тоже слышит Esc на всём документе
  и зовёт `onToggle(false)`, отключить это нельзя: такое закрытие переходник
  пропускает по `isEscapeInProgress()`.

Контейнер ищем по `[data-floating-ui-focusable], [role="dialog"]`
(`feature-canvas-overlay/utils/floatingContainer.ts`). Тест
`feature-canvas-overlay/__tests__/floatingContainer.test.tsx` рендерит
настоящий PopoverBeta и упадёт, если разметка атомарки изменится.

## Решения и ограничения

- Под капотом PopoverBeta (дизайн-система). Свой Popover на floating-ui
  обошёлся бы без перехвата фокуса, но разошёлся бы с атомаркой.
- Шина клика отдельная от шины наведения тултипов. Общая шина событий якоря
  (тултипы, Popover, будущий popup, подсветка онбординга) это отдельная
  задача: она меняет тултипы.
- Popover на ячейку или шапку целиком (`cellPopover` и `headerCellPopover` в
  `columnConfig`, включатель `tableConfig.popover.enabled`) был реализован и
  вырезан до первого релиза: основной сценарий это иконка или кнопка в ячейке,
  а колоночный вариант удваивал API без запроса. Имена зарезервированы.
  Для возврата понадобятся: клик по ячейке и шапке в `TableGlide` (как
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
