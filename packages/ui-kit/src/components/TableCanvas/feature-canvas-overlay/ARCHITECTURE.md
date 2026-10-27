# feature-canvas-overlay

Общая часть Popover и Dropdown на canvas-элементах: слушатель кликов и
наведения, выбор, что открыть, ключ источника, обрезка якоря, Esc, уход
курсора. Событие с canvas уходит на контейнер таблицы, здесь из него
собирается конфиг, показ идёт через общий `TablePopoverContext`
(`feature-popover-table`).

## Зависимости

- `feature-canvas-popover` и `feature-canvas-dropdown` друг друга не знают.
  Из этой папки они берут только общие хуки, утилиты и константы
  (`hooks/useEscapeClose`, `hooks/useHoverLeaveClose`, `utils/*`,
  `constants.ts`) по прямым путям. Эти файлы ни Popover, ни Dropdown не
  импортируют.
- Про оба окна знают только сборочные файлы этой папки: `types.ts`
  (`ResolvedCanvasOverlay`), `utils/resolveCanvasOverlay.ts`,
  `hooks/useHoverOverlayOpen.ts` и `components/CanvasOverlayListener.tsx`.
  Они берут Popover и Dropdown через `index.ts` их папок. Сами фичи эти файлы
  не импортируют, поэтому циклов нет.
- Снаружи (`widgets/table-or-card-UI.tsx`) нужен только `CanvasOverlayListener`.

## Структура

```
feature-canvas-overlay/
├── index.ts                         CanvasOverlayListener
├── constants.ts                     HOVER_ANCHOR_GAP
├── types.ts                         ResolvedCanvasOverlay, CanvasOverlayDefaults, CanvasOverlayContentData, getOpenCanvasOverlay, getOpenHoverOverlay
├── components/
│   └── CanvasOverlayListener.tsx    клики, открытие Popover или Dropdown, закрытие при смене строки, onOpen и onClose, уборка при размонтировании
├── hooks/
│   ├── useHoverOverlayOpen.ts       открытие по наведению
│   ├── useHoverLeaveClose.ts        закрытие по уходу курсора
│   └── useEscapeClose.ts            Esc для Popover и Dropdown, стек открытых окон
└── utils/
    ├── resolveCanvasOverlay.ts      событие с canvas в Popover или Dropdown с дефолтами
    ├── anchor.ts                    ключ источника, обрезка якоря краем таблицы
    ├── floatingContainer.ts         контейнер floating-ui, поле ввода
    ├── geometry.ts                  точка в прямоугольнике, общий прямоугольник
    └── pointerPosition.ts           последняя позиция курсора (общий слушатель)
```

Рядом:

- `TableGlide/lib/canvas/utils/portalClickEvents.ts`: публичные типы конфига
  Popover, шина клика, `CANVAS_PORTAL_PRIORITY`;
- `TableGlide/lib/canvas/utils/dropdownConfig.ts`: публичные типы конфига
  Dropdown;
- `TableGlide/lib/canvas/utils/portalHoverEvents.ts`: шина наведения (общая с
  тултипами), блокировка `lockPortalHover`, сброс `dispatchCanvasPortalReset`;
- `TableGlide/lib/canvas/core/popoverTarget.ts`: поиск ноды с Popover или
  Dropdown по клику (`findPopoverTarget`, `hasClickOverlay`);
- `TableGlide/hooks/useColumnPortalReset.ts`: сброс и блокировка при ресайзе
  и перестановке колонок;
- `TableGlide/utils/groupHeaderClick.ts`: клик по шапке группы колонок.

Задать на одном элементе и `popover`, и `dropdown` не дают типы
(`CanvasOverlayProps`). Если это всё же случилось (например, через `any`),
в режиме разработки в консоль пишется предупреждение и открывается Popover.
Общий код читает из `config` только общие поля: `trigger`, `mouseEnterDelay`,
`closeOnScroll`, `onOpen`, `onClose`.

## Общий контекст

`feature-popover-table` ничего не знает про canvas. Открывший передаёт в
`open()`:

- `sourceKey`: ключ источника (повторный клик закрывает, клик по другому
  элементу переключает);
- `behavior`: когда закрывать (`closeOnScroll: 'x' | 'xy' | false`,
  `closeOnTableResize`);
- `render`: что рисовать внутри якоря (`CanvasPopover` или `CanvasDropdown`
  с `key={sourceKey}`, поэтому смена источника создаёт окно заново);
- `contentData`: данные открывшего (`CanvasOverlayContentData`: вид окна с
  конфигом и строка под якорем).

На таблице открыто одно окно: фильтр шапки, Popover и Dropdown закрывают друг
друга.

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
     `closeOnOutsideClick: false`);
   - иначе `openOverlay`: якорь обрезается видимой областью грида.

Нода с окном по клику получает `interaction: { selection: 'keep' }` и курсор
`pointer`, если их не задали. Корни canvas шапок групп лежат в
`columnsGroupHeaderCanvasRootInstanceMap` по имени группы: две группы с
одним именем делят один корень (так же, как их отрисовка).

Каждая таблица слушает только свой контейнер, поэтому клик в одной таблице не
открывает окно в другой.

## Наведение

Нода с `trigger: 'hover'` получает `portalHoverEnabled`, и
`CanvasHoverController` шлёт show с `popoverFromNode` или `dropdownFromNode`.

`useHoverOverlayOpen`:

- открывает через `mouseEnterDelay`, если в этот момент курсор над якорем
  (по `pointerPosition`, а не по событию: Glide перерисовывает ячейки со своей
  сохранённой позицией курсора и может прислать show без движения мыши);
- не открывает, пока открыто окно по клику или фильтр (проверка и при show,
  и при срабатывании таймера), и пока пользователь печатает в своей таблице
  (`isEditingInTable`: поле ввода внутри контейнера или редактор ячейки Glide в
  портале `#gdg-overlay-N`);
- ожидание отменяют: скрытие того же источника (только если курсор ушёл с его
  прямоугольника: id ноды одинаковый во всех строках, и hide прошлой строки
  приходит после show новой), прокрутка таблицы, блокировка наведения в этой
  таблице, сброс якорей;
- последнее подходящее наведение запоминается и пересматривается, когда
  мешавшее окно закрылось (нода шлёт show один раз при входе курсора);
- окно, закрытое, пока курсор над якорем (Esc, кнопка внутри, смена данных),
  не открывается заново, пока курсор не уйдёт с элемента;
- смена `rows` сбрасывает запомненное наведение;
- за курсором следит, только если в таблице встретилось окно по наведению.

`useHoverLeaveClose` держит окно, пока курсор внутри общего прямоугольника
якоря и окна (плюс `HOVER_ANCHOR_GAP`), закрывает через `mouseLeaveDelay`
после выхода и сразу по нажатию вне этой зоны (касание на сенсорном экране).
Hide-события шины для этого не годятся: шина откладывает скрытие и отменяет
его при показе соседнего элемента. Клик мимо окно по наведению не закрывает
(`outsideClick: false`): клик по самому якорю для floating-ui тоже клик мимо.

`trigger` берётся только с элемента: нода решает, участвовать ли в наведении,
при построении дерева и про `tableConfig` не знает.

Окно по наведению нельзя открыть с клавиатуры и на сенсорном экране. Так и
задумано: наведение для дополнительной информации, действия, нужные всем,
вешаются на клик. Это написано в описании `trigger` и в mdx.

## Закрытие

- клик мимо: floating-ui `onToggle(false)`, затем `close({ outsidePress })`.
  Защёлка в `useTablePopoverState` гасит догоняющий `open()` того же
  источника, так повторный клик по элементу закрывает окно;
- Esc: только `useEscapeClose` (раздел «Esc»);
- скролл таблицы: `useClosePopoverOnRegionChange` по `behavior.closeOnScroll`.
  Сдвиг считается по первой видимой ячейке и смещению внутри неё, иначе
  прокрутка ровно на N строк не закрывала бы окно;
- ресайз таблицы: `PopoverInTable` по `behavior.closeOnTableResize`;
- ресайз или перестановка колонки: `TableGlide` (`useColumnPortalReset`)
  шлёт `dispatchCanvasPortalReset` на контейнер своей таблицы, слушатель
  закрывает окно, тултип прячется. На время ресайза ещё берётся
  `lockPortalHover(контейнер)`: тултипы и открытие по наведению в этой таблице
  выключены, другие таблицы работают. Блокировка снимается через
  `RESIZE_LOCK_RELEASE_MS` после последнего шага ресайза или при
  размонтировании. Перестановке блокировка не нужна, хватает сброса;
- на месте строки под якорем другая строка (сортировка, новые данные):
  слушатель сравнивает `rows[rowInd]` со строкой на момент открытия по
  `rowKeyGetter` (`editing`, `selecting`, `subRows`, `mergeCells`), без него по
  ссылке;
- размонтирование таблицы (смена вида, оверлей загрузки): слушатель закрывает
  окно и вызывает `onClose`.

`onOpen` и `onClose` вызываются ровно по одному разу на каждое открытие.

Содержимое снимается в момент открытия: `render` замыкает собранный конфиг,
`content`, `renderContent` и `items` при перерисовке таблицы не
пересчитываются. Изменяемое состояние живёт внутри компонента содержимого.

## Esc

Popover и Dropdown закрываются по Esc одинаково: только через
`useEscapeClose`. Он слушает `keydown` на документе в capture-фазе и
закрывает окно, если Esc нажат:

- внутри окна;
- в своей таблице, но не в поле ввода и не во всплывающем элементе со своим
  Esc (меню, список, диалог). Всплытие останавливается, чтобы первый Esc
  закрыл только окно, а не выделение Glide или модалку вокруг таблицы;
- без фокуса (body), и это окно открыто последним на странице. Открытые окна
  всех таблиц лежат в общем стеке модуля, иначе такой Esc закрыл бы окна во
  всех таблицах сразу.

Esc в другом месте страницы и Esc при `closeOnEsc: false` окно не закрывают.

Атомарки слушают Esc сами, и отключить это пропом нельзя:

- PopoverBeta: `useDismiss` floating-ui ловит Esc на всём документе и зовёт
  `onToggle(false)` без события;
- Dropdown: Esc ловит только обёртка trigger-ребёнка (`onKeyDown`), на
  документ не подписан. Фокуса на якоре не бывает, но переходник
  защищён так же.

Поэтому `onToggle(false)` во время обработки Esc переходники пропускают:
`isEscapeInProgress()` проверяет, что Esc ещё идёт по документу (у события
`eventPhase` не `NONE`). Таймеров нет.

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
  `feature-popover-table/hooks/useClosePopoverOnRegionchange.ts`.
