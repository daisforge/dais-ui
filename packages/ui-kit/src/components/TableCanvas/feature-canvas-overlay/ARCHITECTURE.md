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
├── index.ts                         — CanvasOverlayListener
├── constants.ts                     — HOVER_ANCHOR_GAP
├── types.ts                         — ResolvedCanvasOverlay, CanvasOverlayDefaults, CanvasOverlayContentData, getOpenCanvasOverlay / getOpenHoverOverlay
├── components/
│   └── CanvasOverlayListener.tsx    — клики, открытие Popover или Dropdown, закрытие при смене строки, onOpen/onClose, уборка при размонтировании
├── hooks/
│   ├── useHoverOverlayOpen.ts       — открытие по наведению
│   ├── useHoverLeaveClose.ts        — закрытие по уходу курсора
│   └── useEscapeClose.ts            — Esc из таблицы
└── utils/
    ├── resolveCanvasOverlay.ts      — событие в Popover или Dropdown с дефолтами
    ├── anchor.ts                    — ключ источника, обрезка якоря краем таблицы
    ├── floatingContainer.ts         — контейнер floating-ui, поле ввода
    ├── geometry.ts                  — точка в прямоугольнике, общий прямоугольник
    └── pointerPosition.ts           — последняя позиция курсора (общий слушатель)
```

Рядом:
- `TableGlide/lib/canvas/utils/portalClickEvents.ts` — публичные типы конфига
  Popover, шина клика, `CANVAS_PORTAL_PRIORITY`;
- `TableGlide/lib/canvas/utils/portalHoverEvents.ts` — шина наведения (общая с
  тултипами), блокировка `lockPortalHover`, сброс `dispatchCanvasPortalReset`.

Если на ноде заданы оба пропа, открывается Popover (`resolveCanvasOverlay`).
Общий код читает из `config` только общие поля: `trigger`, `mouseEnterDelay`,
`closeOnScroll`, `onOpen`, `onClose`.

## Общий контекст

`feature-popover-table` ничего не знает про canvas. Открывший передаёт в
`open()`:
- `sourceKey` — ключ источника (toggle повторным кликом, переключение);
- `behavior` — когда закрывать: `closeOnScroll: 'x' | 'xy' | false`,
  `closeOnTableResize`;
- `render` — что рисовать внутри якоря (`CanvasPopover` с `key={sourceKey}`:
  смена источника пересоздаёт поповер);
- `contentData` — данные открывшего (`CanvasOverlayContentData`: оверлей с
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

dispatchCanvasPortalClick → CanvasOverlayListener
  resolveCanvasOverlay (поповер или дропдаун с дефолтами) → trigger 'hover' пропускаем
  тот же источник уже открыт → close() (toggle при closeOnOutsideClick: false)
  иначе openOverlay: якорь обрезается прямоугольником грида
```

Нода с поповером по клику получает `interaction: { selection: 'keep' }` и
курсор `pointer`, если их не задали. Корни canvas шапок групп лежат в
`columnsGroupHeaderCanvasRootInstanceMap` по имени группы: две группы с
одним именем делят один корень (так же, как их отрисовка).

## Наведение

Нода с `popover={{ trigger: 'hover' }}` получает `portalHoverEnabled`, и
`CanvasHoverController` шлёт show с `popoverFromNode`.

`useHoverOverlayOpen`:
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

## Тултипы

Пока открыт canvas-поповер, `CanvasTooltipOverlay` тултипы не показывает.
Колоночный тултип не показывается от события ноды, у которой есть поповер
(`popoverFromNode` в `resolveTooltipData`).

## Где что менять

- Новый источник конфига (например, колоночный) или новый вид окна:
  `utils/resolveCanvasOverlay.ts`, `ResolvedCanvasOverlay` в `types.ts`, ветка
  рендера в `components/CanvasOverlayListener.tsx`.
- Правила закрытия: `behavior` в `CanvasOverlayListener.tsx`, хуки `hooks/`,
  `feature-popover-table/hooks/useClosePopoverOnRegionchange.ts`.
