# feature-canvas-popover

Поповер по клику или наведению (`trigger`) на элементы, отрисованные на canvas:
Canvas-примитивы внутри ячеек, шапок и шапок групп (проп `popover`).
Поповер на ячейку или шапку целиком (`cellPopover` / `headerCellPopover`)
отложен: см. «Решения и ограничения».
Устроен так же, как `feature-tooltip`: событие с canvas уходит на контейнер
таблицы, здесь из него собирается конфиг, показ идёт через общий
`TablePopoverContext` (`feature-popover-table`).

Та же инфраструктура открывает дропдаун на canvas-элементе (проп `dropdown`,
`feature-canvas-dropdown`): слушатель, открытие по наведению, ключ источника,
обрезка якоря, Esc и уход курсора общие. `resolveCanvasOverlay` отдаёт
`ResolvedCanvasOverlay` вида `{ kind: 'popover' | 'dropdown', config }`, и
слушатель рендерит `CanvasPopover` или `CanvasDropdown`. Если на ноде заданы
оба пропа, открывается поповер.

## Структура

```
feature-canvas-popover/
├── index.ts                         — API фичи для TableCanvas (не публичный)
├── constants.ts                     — POPOVER_DEFAULTS, HOVER_ANCHOR_GAP
├── types.ts                         — ResolvedCanvasPopoverConfig, ResolvedCanvasOverlay, CanvasPopoverContentData, getOpenCanvasPopover / getOpenHoverPopover
├── components/
│   ├── CanvasPopoverListener.tsx    — клики, общий путь открытия поповера и дропдауна, закрытие при смене строки, onOpen/onClose, уборка при размонтировании
│   ├── CanvasPopover.tsx            — переходник на PopoverBeta (единственное место, где таблица знает атомарку)
│   └── styled.ts                    — CanvasAnchor (target для PopoverBeta)
├── hooks/
│   ├── useHoverPopoverOpen.ts       — открытие по наведению
│   ├── useHoverLeaveClose.ts        — закрытие по уходу курсора
│   ├── usePopoverFocusGuard.ts      — фокус остаётся в таблице
│   └── useEscapeClose.ts            — Esc из таблицы
└── utils/
    ├── resolvePopoverData.ts        — resolveCanvasOverlay: событие → поповер или дропдаун с дефолтами
    ├── normalizePopoverConfig.ts    — конфиг + tableConfig.popover + дефолты
    ├── anchor.ts                    — ключ источника, обрезка якоря краем таблицы
    ├── floatingContainer.ts         — контейнер floating-ui, поле ввода
    ├── geometry.ts                  — точка в прямоугольнике, общий прямоугольник
    └── pointerPosition.ts           — последняя позиция курсора (общий слушатель)
```

Рядом:
- `TableGlide/lib/canvas/utils/portalClickEvents.ts` — публичные типы конфига
  (сквозные поля `Pick`-ом из PopoverBeta, остальное своё, как у тултипа),
  шина клика, `CANVAS_PORTAL_PRIORITY`;
- `TableGlide/lib/canvas/utils/portalHoverEvents.ts` — шина наведения (общая с
  тултипами), блокировка `lockPortalHover`, сброс `dispatchCanvasPortalReset`.

## Общий контекст

`feature-popover-table` ничего не знает про canvas. Открывший передаёт в
`open()`:
- `sourceKey` — ключ источника (toggle повторным кликом, переключение);
- `behavior` — когда закрывать: `closeOnScroll: 'x' | 'xy' | false`,
  `closeOnTableResize`;
- `render` — что рисовать внутри якоря (`CanvasPopover` с `key={sourceKey}`:
  смена источника пересоздаёт поповер);
- `contentData` — данные открывшего (`CanvasPopoverContentData`: оверлей с
  видом и конфигом, строка под якорем).

На таблицу один поповер: фильтр шапки и canvas-поповер закрывают друг друга.

## Клик

```
CellCanvasRoot.dispatchPointerEvent('click', x, y, native, { button, cellBounds })
  · только левая кнопка
  · нода с поповером по клику: ближайшая к точке, до которой дошёл клик
    (stopPropagation ребёнка не открывает поповер родителя)
  · якорь = cellBounds клика (свежие) + getAnchorRect() ноды, priority NODE
    (нарисованный прямоугольник: кнопка в растянутом контейнере рисует себя
    меньше своего layout-rect, якорь и placement считаются по нарисованному)
  · результат: portalClickDispatched — во всех ветках performCanvasClick
onGroupHeaderClicked — клик уходит в canvas-корень шапки группы, как у шапки колонки

dispatchCanvasPortalClick → CanvasPopoverListener
  resolveCanvasOverlay (поповер или дропдаун с дефолтами) → trigger 'hover' пропускаем
  тот же источник уже открыт → close() (toggle при closeOnOutsideClick: false)
  иначе openPopover: якорь обрезается прямоугольником грида
```

Нода с поповером по клику получает `interaction: { selection: 'keep' }` и
курсор `pointer`, если их не задали. Корни canvas шапок групп лежат в
`columnsGroupHeaderCanvasRootInstanceMap` по имени группы: две группы с
одним именем делят один корень (так же, как их отрисовка).

## Наведение

Нода с `popover={{ trigger: 'hover' }}` получает `portalHoverEnabled`, и
`CanvasHoverController` шлёт show с `popoverFromNode`.

`useHoverPopoverOpen`:
- открывает через `mouseEnterDelay`, если в этот момент курсор над якорем
  (по `pointerPosition`, а не по событию: Glide перерисовывает ячейки со своей
  сохранённой позицией курсора и может прислать show без движения мыши);
- не открывает, пока открыт поповер по клику или фильтр (проверка и при show,
  и при срабатывании таймера), пока пользователь печатает в своей таблице
  (`isEditingInTable`: поле ввода внутри контейнера или редактор ячейки Glide в
  портале `#gdg-overlay-N`);
- ожидание отменяют скрытие того же источника (только если курсор ушёл с его
  прямоугольника: id ноды одинаковый во всех строках, и hide прошлой строки
  приходит после show новой), прокрутка таблицы, блокировка, сброс якорей;
- последнее подходящее наведение запоминается и пересматривается, когда
  мешавший поповер закрылся (нода шлёт show один раз при входе курсора);
- поповер, закрытый, пока курсор над якорем (Esc, кнопка внутри, смена данных),
  не переоткрывается, пока курсор не уйдёт с элемента;
- смена `rows` сбрасывает запомненное наведение;
- за курсором следит, только если в таблице встретился поповер по наведению.

`useHoverLeaveClose` держит поповер, пока курсор внутри общего прямоугольника
якоря и поповера (+ `HOVER_ANCHOR_GAP`), закрывает через `mouseLeaveDelay`
после выхода, сразу — по нажатию вне зоны (касание на сенсорном экране).
Hide-события шины для этого не годятся: шина откладывает скрытие и отменяет
его при показе соседнего элемента. Клик мимо поповер по наведению не закрывает
(`outsideClick: false`): клик по самому якорю для floating-ui тоже клик мимо.

`trigger` берётся только с элемента: нода решает, участвовать ли в наведении,
при построении дерева и про `tableConfig` не знает.

## Закрытие

- клик мимо — floating-ui `onToggle(false)` → `close({ outsidePress })`
  (защёлка гасит догоняющий open() того же источника: toggle);
- Esc — `useEscapeClose` (см. «Фокус и Esc»);
- скролл таблицы — `useClosePopoverOnRegionChange` по `behavior.closeOnScroll`;
  сдвиг считается по первой видимой ячейке и смещению внутри неё, иначе
  прокрутка ровно на N строк не закрывала бы;
- ресайз таблицы — `PopoverInTable` по `behavior.closeOnTableResize`;
- ресайз или перестановка колонки — `TableGlide` шлёт
  `dispatchCanvasPortalReset` на контейнер своей таблицы, listener закрывает
  поповер. Глобальный `lockPortalHover()` при этом тоже берётся (на время
  ресайза и коротко при перестановке): он прячет тултипы и останавливает
  открытие по наведению, но закрывать поповер по нему нельзя: он общий на все
  таблицы страницы;
- на месте строки под якорем другая строка (сортировка, новые данные) —
  listener сравнивает `rows[rowInd]` со строкой на момент открытия: по
  `rowKeyGetter` (`editing`, `selecting`, `subRows`, `mergeCells`), без него по
  ссылке;
- размонтирование таблицы (смена вида, оверлей загрузки) — listener закрывает
  поповер и вызывает `onClose`.

`onOpen` / `onClose` вызываются ровно по одному на каждое открытие.

Содержимое — снимок на момент открытия: `render` замыкает `resolved` конфиг,
`content` и `renderContent` при перерисовке таблицы не пересчитываются.
Изменяемое состояние живёт внутри компонента содержимого.

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
- `useEscapeClose` ловит Esc в capture-фазе, только если он пришёл из своей
  таблицы (или с body) и не из поля ввода или элемента со своим Esc (меню,
  список, диалог). Из таблицы — закрывает и останавливает всплытие, с body —
  закрывает без остановки. Esc внутри поповера обрабатывают содержимое и
  PopoverBeta. Хук возвращает `lastEscapeRef` (время и решение `closes`):
  по нему переходник разбирает `onToggle(false)` от floating-ui, который
  слушает Esc на всём документе. Esc из чужого элемента страницы и Esc при
  `closeOnEsc: false` закрытие не дают.
- `usePopoverFocusGuard` при возврате фокуса предпочитает `relatedTarget`
  события (откуда фокус пришёл): при переключении поповера A на B фокус до
  открытия B был внутри уже удалённого A.

Контейнер ищем по `[data-floating-ui-focusable], [role="dialog"]`
(`floatingContainer.ts`). Тест `floatingContainer.test.tsx` рендерит настоящий
PopoverBeta и упадёт, если разметка атомарки изменится.

## Тултипы

Пока открыт canvas-поповер, `CanvasTooltipOverlay` тултипы не показывает.
Колоночный тултип не показывается от события ноды, у которой есть поповер
(`popoverFromNode` в `resolveTooltipData`).

## Где что менять

- Новый источник конфига (например, колоночный) или новый вид оверлея —
  `utils/resolvePopoverData.ts`, `ResolvedCanvasOverlay` в `types.ts`, ветка
  рендера в `CanvasPopoverListener.tsx`.
- Дефолты — `constants.ts`, `utils/normalizePopoverConfig.ts`.
- Публичные пропсы конфига — `TableGlide/lib/canvas/utils/portalClickEvents.ts`.
- Другой атомарный компонент под капотом — `components/CanvasPopover.tsx`.
- Правила закрытия — `behavior` в `CanvasPopoverListener.tsx`, хуки `hooks/`,
  `feature-popover-table/hooks/useClosePopoverOnRegionchange.ts`.

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
  в `useHoverPopoverOpen`.
- Открыть поповер с клавиатуры или программно пока нельзя.
- `popup` / `cellPopup` / `headerCellPopup` зарезервированы: тот же клик и
  резолвер, рендер через PopupDF без якоря. Popup модальный, поэтому в общем
  контексте ему понадобится отдельный слот, а не замена текущего поповера.
- Якорь (`StyledPopoverContainer` + `CanvasAnchor`) — DOM-элемент на месте
  canvas-элемента; тот же приём подходит для подсветки элементов таблицы
  внешними библиотеками онбординга.
