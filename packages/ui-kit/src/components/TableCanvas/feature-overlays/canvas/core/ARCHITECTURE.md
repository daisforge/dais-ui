# feature-overlays/canvas/core

Общая часть Popover и Dropdown на canvas-элементах: слушатель кликов и
наведения, выбор, что открыть, ключ источника, обрезка якоря, Esc, уход
курсора. Событие с canvas уходит на контейнер таблицы, здесь из него
собирается конфиг, показ идёт через общий `TablePopoverContext` из корня
`feature-overlays` (там описано состояние «одно окно на таблицу» и общие
правила закрытия).

## Зависимости

- `../popover` и `../dropdown` друг друга не знают. Из `core` они берут
  только общие хуки, утилиты и константы (`hooks/useEscapeClose`,
  `hooks/useHoverLeaveClose`, `utils/*`, `constants.ts`) по прямым путям. Эти
  файлы ни Popover, ни Dropdown не импортируют.
- Про оба окна знают только сборочные файлы `core`: `types.ts`
  (`ResolvedCanvasOverlay`), `utils/resolveCanvasOverlay.ts`,
  `hooks/useHoverOverlayOpen.ts` и `components/CanvasOverlayListener.tsx`.
  Они берут Popover и Dropdown через `index.ts` их папок, циклов нет.
- Снаружи (`widgets/table-or-card-UI.tsx`) нужен только
  `CanvasOverlayListener`, он реэкспортируется из `feature-overlays/index.ts`.
- `feature-tooltip` берёт из `canvas/core/index.ts` ещё `getOpenCanvasOverlay`
  (`utils/overlayState.ts`), чтобы не показывать тултип поверх открытого окна.

## Структура

```
canvas/core/
├── index.ts                         CanvasOverlayListener, CanvasOverlayListenerProps
├── constants.ts                     HOVER_ANCHOR_GAP
├── types.ts                         ResolvedCanvasOverlay, CanvasOverlayDefaults, CanvasOverlayContentData (только типы)
├── components/
│   └── CanvasOverlayListener.tsx    клики, открытие Popover или Dropdown, закрытие при смене строки, onOpen и onClose, уборка при размонтировании
├── hooks/
│   ├── useHoverOverlayOpen.ts       открытие по наведению с задержкой
│   ├── useHoverLeaveClose.ts        закрытие по уходу курсора
│   └── useEscapeClose.ts            Esc для Popover и Dropdown, стек открытых окон
├── utils/
│   ├── resolveCanvasOverlay.ts      событие с canvas в Popover или Dropdown с дефолтами
│   ├── anchor.ts                    ключ источника, обрезка якоря краем таблицы
│   ├── floatingContainer.ts         контейнер floating-ui, поле ввода, редактор ячейки
│   ├── geometry.ts                  точка в прямоугольнике, общий прямоугольник
│   ├── overlayState.ts              CANVAS_OVERLAY_CONTENT_KIND, getOpenCanvasOverlay, getOpenHoverOverlay
│   └── pointerPosition.ts           последняя позиция курсора (общий слушатель)
└── __tests__/
```

Рядом, в `TableGlide`:

- `lib/canvas/utils/portalClickEvents.ts`: публичные типы конфига Popover,
  шина клика, `CANVAS_PORTAL_PRIORITY`;
- `lib/canvas/utils/dropdownConfig.ts`: публичные типы конфига Dropdown;
- `lib/canvas/utils/portalHoverEvents.ts`: шина наведения (общая с
  тултипами), блокировка `lockPortalHover`, сброс `dispatchCanvasPortalReset`;
- `lib/canvas/core/popoverTarget.ts`: поиск ноды с Popover или Dropdown по
  клику (`findPopoverTarget`, `hasClickOverlay`);
- `lib/canvas/cells/CellCanvasRoot.ts`: отправка клика на контейнер таблицы;
- `hooks/useColumnPortalReset.ts`: сброс и блокировка при ресайзе и
  перестановке колонок;
- `utils/groupHeaderClick.ts`: клик по шапке группы колонок.

## Поток данных

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ИСТОЧНИК СОБЫТИЯ (TableGlide)                                              │
│                                                                             │
│  Клик                                                                       │
│    CellCanvasRoot.dispatchPointerEvent('click', ...)                        │
│      · только левая кнопка                                                  │
│      · ближайшая к точке нода с popover или dropdown, до которой дошёл клик │
│      · якорь: cellBounds клика + getAnchorRect() ноды                       │
│      → dispatchCanvasPortalClick(detail, container)                         │
│        detail: x, y, width, height, nodeId, originId, tooltipContext,       │
│                popoverFromNode или dropdownFromNode                         │
│    Шапка колонки и шапка группы отдают клик своему canvas-корню так же      │
│    (для группы это handleGroupHeaderClick)                                  │
│                                                                             │
│  Наведение                                                                  │
│    нода с trigger: 'hover' получает portalHoverEnabled,                     │
│    CanvasHoverController шлёт show и hide по шине portalHoverEvents         │
│    (та же шина, что у тултипов)                                             │
│                                                                             │
│  Сброс и блокировка                                                         │
│    useColumnPortalReset при ресайзе и перестановке колонки:                 │
│    dispatchCanvasPortalReset(container), lockPortalHover(container)         │
│                                                                             │
│  Файлы:                                                                     │
│    TableGlide/lib/canvas/cells/CellCanvasRoot.ts                            │
│    TableGlide/lib/canvas/utils/portalClickEvents.ts                         │
│    TableGlide/lib/canvas/utils/portalHoverEvents.ts                         │
│    TableGlide/hooks/useColumnPortalReset.ts                                 │
└──────────────┬─────────────────────────────┬────────────────────────────────┘
               │ клик                        │ show / hide
               ▼                             ▼
┌──────────────────────────────┐ ┌──────────────────────────────────────────────┐
│ CanvasOverlayListener        │ │ useHoverOverlayOpen                          │
│ components/                  │ │ hooks/useHoverOverlayOpen.ts                 │
│ CanvasOverlayListener.tsx    │ │                                              │
│                              │ │ show:                                        │
│ resolveCanvasOverlay(detail) │ │   sourceKey = getOverlaySourceKey(detail)    │
│   null или trigger: 'hover'  │ │   resolveCanvasOverlay(detail)               │
│   → ничего                   │ │   не hover → ничего                          │
│ sourceKey =                  │ │   запомнить candidate                        │
│   getOverlaySourceKey(detail)│ │   canOpen? → таймер mouseEnterDelay          │
│ уже открыт этот sourceKey    │ │                                              │
│   → close()                  │ │ по таймеру:                                  │
│ иначе → openOverlay          │ │   курсор всё ещё над элементом               │
│                              │ │   (pointerPosition) и canOpen                │
│ сброс якорей → close()       │ │   → openOverlay                              │
│ смена строки под якорем      │ │                                              │
│   → close()                  │ │ hide того же элемента, курсор ушёл с его     │
│ размонтирование → close(),   │ │ прямоугольника → отменить ожидание           │
│   onClose                    │ │                                              │
│                              │ │ скролл, сброс, блокировка → reset            │
│ onOpen и onClose конфига:    │ │ окно закрылось → пересмотреть candidate      │
│ по одному на открытие        │ │                                              │
└──────────────┬───────────────┘ └──────────────────────┬───────────────────────┘
               │                                        │
               └──────────────────┬─────────────────────┘
                                  │ openOverlay(detail, overlay, sourceKey)
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  openOverlay (внутри CanvasOverlayListener)                                 │
│                                                                             │
│  rect = clipAnchorRect(detail, видимая область грида)      utils/anchor.ts  │
│  contentData = { kind: 'canvas-overlay', overlay, anchorRow }               │
│                                                    utils/overlayState.ts    │
│                                                                             │
│  useTablePopover().open({                                                   │
│    position: { rect.x, rect.y }, anchorSize: { rect.width, rect.height },  │
│    contentType: 'custom', contentData, sourceKey,                           │
│    behavior: { closeOnScroll: config.closeOnScroll ? 'xy' : false,          │
│                closeOnTableResize: true },                                  │
│    render: ({ close }) =>                                                   │
│      overlay.kind === 'dropdown'                                            │
│        ? <CanvasDropdown key={sourceKey} config close tableContainer />     │
│        : <CanvasPopover  key={sourceKey} config close tableContainer />     │
│  })                                                                         │
│  key={sourceKey}: другой элемент создаёт окно заново со своей позицией     │
└─────────────────────────────────────────────┬───────────────────────────────┘
                                              │
                                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  PopoverInTable                    feature-overlays/components/             │
│                                    PopoverContainer.tsx                     │
│  якорь StyledPopoverContainer размером с элемент, pointer-events: none,     │
│  внутри render({ close }): CanvasPopover или CanvasDropdown                 │
│  (их устройство в ../popover и ../dropdown)                                 │
│                                                                             │
│  Внутри окна общие хуки core:                                               │
│    useEscapeClose      Esc, стек открытых окон страницы                     │
│    useHoverLeaveClose  уход курсора при trigger: 'hover'                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Выбор окна: resolveCanvasOverlay

`resolveCanvasOverlay(detail, defaults)` смотрит на `popoverFromNode` и
`dropdownFromNode` в событии и возвращает `{ kind: 'popover', config }` или
`{ kind: 'dropdown', config }` с дефолтами из `tableConfig.popover` и
`tableConfig.dropdown` (`normalizePopoverConfig`, `normalizeDropdownConfig`).
Если заданы оба, открывается Popover, а `buildNode` в `TableGlide` один раз на
процесс пишет предупреждение в консоль (`console.warn`). Без них `null`.

Общий код читает из `config` только общие поля: `trigger`, `mouseEnterDelay`,
`closeOnScroll`, `onOpen`, `onClose`. Остальное отдаётся компоненту окна.

## Клик

1. `CellCanvasRoot.dispatchPointerEvent('click', x, y, native, { button, cellBounds })`:
   - учитывается только левая кнопка;
   - берётся ближайшая к точке нода с Popover или Dropdown по клику, до
     которой дошёл клик (если ребёнок остановил всплытие, окно родителя не
     открывается);
   - якорь: свежие `cellBounds` клика плюс `getAnchorRect()` ноды, приоритет
     `CANVAS_PORTAL_PRIORITY.NODE`. Якорь считается по нарисованному
     прямоугольнику: кнопка в растянутом контейнере рисует себя меньше своей
     области в раскладке;
   - в результате `portalClickDispatched` во всех ветках `performCanvasClick`.
2. Шапка колонки и шапка группы отдают клик своему canvas-корню так же, как
   ячейка. Для шапки группы это `handleGroupHeaderClick`
   (`TableGlide/utils/groupHeaderClick.ts`): если под точкой интерактивный
   элемент, группа не выделяется, но внешний `onGroupHeaderClicked` всё равно
   вызывается.
3. `dispatchCanvasPortalClick` на контейнере своей таблицы, его слушает
   `CanvasOverlayListener`:
   - `resolveCanvasOverlay` собирает Popover или Dropdown с дефолтами, окна с
     `trigger: 'hover'` клик пропускает;
   - если этот источник уже открыт, окно закрывается (повторный клик при
     `closeOnOutsideClick: false`; при включённом окно уже закрылось на
     pointerdown, а догоняющий `open()` гасит защёлка в
     `useTablePopoverState`);
   - иначе `openOverlay`: якорь обрезается видимой областью грида.

Нода с окном по клику получает `interaction: { selection: 'keep' }` и курсор
`pointer`, если их не задали. Корни canvas шапок групп лежат в
`columnsGroupHeaderCanvasRootInstanceMap` по имени группы: две группы с
одним именем делят один корень (так же, как их отрисовка).

Каждая таблица слушает только свой контейнер, поэтому клик в одной таблице не
открывает окно в другой.

## Якорь: getAnchorRect и clipAnchorRect

Якорь окна это невидимый DOM-элемент на месте canvas-элемента. Его
прямоугольник собирает `TableGlide`: `cellBounds` ячейки на момент клика плюс
`getAnchorRect()` ноды, то есть прямоугольник, который нода реально
нарисовала, а не её область в раскладке. `getAnchorRect` и `containsHitPoint`
живут в примитивах canvas и здесь не меняются.

`clipAnchorRect(rect, viewport)` (`utils/anchor.ts`) обрезает прямоугольник
по видимой области грида (`.tableAndTableScroller`), чтобы окно у частично
скрытой ячейки не заходило за край. Если пересечения нет, прямоугольник
остаётся как есть.

`getOverlaySourceKey(detail)` собирает ключ источника из `originId` (или
`nodeId`), id колонки (или индекса) и индекса строки (или `header`). Id
элемента одинаковый во всех строках, без колонки и строки кнопки разных
строк считались бы одним источником.

## Наведение с задержкой

Нода с `trigger: 'hover'` получает `portalHoverEnabled`, и
`CanvasHoverController` шлёт show с `popoverFromNode` или `dropdownFromNode`.

`useHoverOverlayOpen`:

- открывает через `mouseEnterDelay`, если в этот момент курсор над якорем
  (по `pointerPosition`, а не по событию: Glide перерисовывает ячейки со своей
  сохранённой позицией курсора и может прислать show без движения мыши);
- не открывает, пока открыто окно по клику или фильтр (проверка и при show,
  и при срабатывании таймера), и пока пользователь печатает в своей таблице
  (`isEditingInTable`: поле ввода внутри контейнера или редактор ячейки Glide в
  портале `#gdg-overlay-N`). Открытое окно по наведению сменяется наведением
  на другой элемент;
- ожидание отменяют: скрытие того же источника (только если курсор ушёл с его
  прямоугольника: id ноды одинаковый во всех строках, и hide прошлой строки
  приходит после show новой), прокрутка таблицы (сброс сразу, без троттлинга:
  нода шлёт show один раз, и отложенный сброс стёр бы наведение после
  последнего кадра прокрутки), блокировка наведения в этой таблице, сброс
  якорей;
- последнее подходящее наведение запоминается и пересматривается, когда
  мешавшее окно закрылось (нода шлёт show один раз при входе курсора);
- окно, закрытое, пока курсор над якорем (Esc, кнопка внутри, смена данных),
  не открывается заново, пока курсор не уйдёт с элемента (`dismissed`);
- смена `rows` сбрасывает запомненное наведение;
- за курсором следит, только если в таблице встретилось окно по наведению.

`useHoverLeaveClose` держит окно, пока курсор внутри общего прямоугольника
якоря и окна (плюс `HOVER_ANCHOR_GAP`), закрывает через `mouseLeaveDelay`
после выхода и сразу по нажатию вне этой зоны (касание на сенсорном экране).
Курсор над любым элементом внутри окна тоже держит его открытым, даже вне
прямоугольника: так вложенный список Dropdown, который стоит сбоку от
основного, не закрывает меню.
Hide-события шины для этого не годятся: шина откладывает скрытие и отменяет
его при показе соседнего элемента. Если окно открылось, когда курсор уже
ушёл, закрытие назначается сразу. Клик мимо окно по наведению не закрывает
(`outsideClick: false`): клик по самому якорю для floating-ui тоже клик мимо.

`trigger` берётся только с элемента: нода решает, участвовать ли в наведении,
при построении дерева и про `tableConfig` не знает.

Окно по наведению нельзя открыть с клавиатуры и на сенсорном экране. Так и
задумано: наведение для дополнительной информации, действия, нужные всем,
вешаются на клик. Это написано в описании `trigger` и в mdx.

## Блокировка наведения при ресайзе

Ресайз или перестановка колонки: `TableGlide` (`useColumnPortalReset`) шлёт
`dispatchCanvasPortalReset` на контейнер своей таблицы. `CanvasOverlayListener`
закрывает открытое окно canvas-элемента, `useHoverOverlayOpen` сбрасывает
запомненное наведение, тултип прячется.

На время ресайза ещё берётся `lockPortalHover(контейнер)`: тултипы и открытие
по наведению в этой таблице выключены, другие таблицы работают. Блокировка
снимается через `RESIZE_LOCK_RELEASE_MS` (300 мс) после последнего шага
ресайза или при размонтировании. Перестановке блокировка не нужна, хватает
сброса.

## Esc со стеком

Popover и Dropdown закрываются по Esc одинаково: только через
`useEscapeClose`. Он слушает `keydown` на документе в capture-фазе (раньше
Glide и атомарки) и закрывает окно, если Esc нажат:

- внутри окна, но не в поле ввода и не во вложенном элементе со своим Esc
  (`[role="menu"]`, `[role="listbox"]`, `[role="dialog"]` внутри окна): их Esc
  сворачивает только их;
- в своей таблице, но не в поле ввода и не во всплывающем элементе со своим
  Esc внутри таблицы;
- без фокуса (body), и это окно открыто последним на странице. Открытые окна
  всех таблиц лежат в общем стеке модуля (`openWindows`), иначе такой Esc
  закрыл бы окна во всех таблицах сразу. Окно с `closeOnEsc: false` в стек не
  попадает и Esc для остальных не заслоняет.

В первых двух случаях всплытие останавливается, чтобы первый Esc закрыл только
окно, а не выделение Glide или модалку вокруг таблицы.

Окно задаётся функцией `getOverlayElement`: у Popover это контейнер floating-ui
(`getFloatingContainer`), у Dropdown сам список (`listRef`). Вверх от него хук
не поднимается: портал Dropdown лежит в таблице, и `closest('[role="dialog"]')`
нашёл бы модалку вокруг таблицы, тогда Esc в любом её поле закрывал бы список.

Esc в другом месте страницы и Esc при `closeOnEsc: false` окно не закрывают.

Атомарки слушают Esc сами, и отключить это пропом нельзя:

- PopoverBeta: `useDismiss` floating-ui ловит Esc на всём документе и зовёт
  `onToggle(false)` без события;
- Dropdown: Esc ловит только обёртка trigger-ребёнка (`onKeyDown`), на
  документ не подписан. Фокуса на якоре не бывает, но переходник защищён так
  же.

Поэтому `onToggle(false)` во время обработки Esc переходники пропускают:
`isEscapeInProgress()` проверяет, что Esc ещё идёт по документу (у события
`eventPhase` не `NONE`). Решение от таймеров не зависит: `setTimeout(0)` в
`useEscapeClose` только отпускает ссылку на событие после обработки.

## Закрытие

Сводка, кто закрывает окно canvas-элемента:

- клик мимо: floating-ui `onToggle(false)` у Popover или `pointerdown` в
  capture-фазе у Dropdown, затем `close({ outsidePress: true })`. Защёлка в
  `useTablePopoverState` гасит догоняющий `open()` того же источника, так
  повторный клик по элементу закрывает окно;
- Esc: только `useEscapeClose`;
- скролл таблицы: `useClosePopoverOnRegionChange` из корня `feature-overlays`
  по `behavior.closeOnScroll`;
- ресайз таблицы: `PopoverInTable` по `behavior.closeOnTableResize`;
- ресайз или перестановка колонки: сброс из `TableGlide`, см. выше;
- на месте строки под якорем другая строка (сортировка, новые данные):
  слушатель сравнивает `rows[rowInd]` со строкой на момент открытия по
  ключу: `rowKeyGetter` из `tableConfig.popover` или `tableConfig.dropdown`
  (по типу открытого окна), иначе из `editing`, `selecting`, `subRows`,
  `mergeCells`, без него по ссылке;
- уход курсора при `trigger: 'hover'`: `useHoverLeaveClose`;
- размонтирование таблицы (смена вида, оверлей загрузки): слушатель закрывает
  окно и вызывает `onClose`.

`onOpen` и `onClose` вызываются ровно по одному разу на каждое открытие.

Содержимое снимается в момент открытия: `render` замыкает собранный конфиг,
`content`, `renderContent` и `items` при перерисовке таблицы не
пересчитываются. Изменяемое состояние живёт внутри компонента содержимого.

## Тултипы

Пока открыт Popover или Dropdown с canvas-элемента, `CanvasTooltipOverlay`
тултипы не показывает (`getOpenCanvasOverlay`). Колоночный тултип не
показывается от события ноды, у которой есть Popover или Dropdown
(`popoverFromNode`, `dropdownFromNode` в `resolveTooltipData`).

## Где что менять

- Новый источник конфига (например, колоночный) или новый вид окна:
  `utils/resolveCanvasOverlay.ts`, `ResolvedCanvasOverlay` в `types.ts`, ветка
  рендера в `components/CanvasOverlayListener.tsx`.
- Правила закрытия: `behavior` в `CanvasOverlayListener.tsx`, хуки `hooks/`,
  `feature-overlays/hooks/useClosePopoverOnRegionchange.ts`.
- Задержки наведения по умолчанию: `../popover/constants.ts`,
  `../dropdown/constants.ts`; зона удержания: `constants.ts`
  (`HOVER_ANCHOR_GAP`).
