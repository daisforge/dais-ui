# feature-overlays/canvas/dropdown

Выпадающий список по левому клику или наведению (`trigger`) на элементы,
отрисованные на canvas: Canvas-примитивы внутри ячеек, шапок и шапок групп
(проп `dropdown`). Пункты те же, что у контекстного меню таблицы
(`feature-context-menu`), пункты можно загружать асинхронно.

Открытие, якорь и закрытие общие с Popover и живут в `../core` (там описаны
клик, наведение с задержкой, блокировка при ресайзе, Esc со стеком и якорь).
Здесь только то, что отличает Dropdown: дефолты, нормализация, загрузка
пунктов и переходник на атомарный Dropdown. Папка не импортирует ни
`../popover`, ни слушатель из `../core`, только общие хуки, утилиты и
константы оттуда.

## Структура

```
canvas/dropdown/
├── index.ts                         CanvasDropdown, normalizeDropdownConfig, ResolvedCanvasDropdownConfig (для ../core)
├── constants.ts                     DROPDOWN_DEFAULTS, значения пунктов-заглушек
├── types.ts                         ResolvedCanvasDropdownConfig
├── components/
│   ├── CanvasDropdown.tsx           переходник на Dropdown (единственное место, где таблица знает атомарку)
│   └── styled.ts                    DropdownRoot, DropdownAnchor, DropdownPortal
├── hooks/
│   └── useDropdownItems.ts          items или getItems, статусы loading и error, retry, отмена запроса
├── utils/
│   └── normalizeDropdownConfig.ts   конфиг элемента, tableConfig.dropdown и дефолты
└── __tests__/
```

Рядом:

- `TableGlide/lib/canvas/utils/dropdownConfig.ts`: публичные типы конфига
  (сквозные поля берутся `Pick` из атомарного Dropdown, остальное своё, как у
  тултипа; пункт списка `DropdownItemOption`, как у контекстного меню);
- `TableGlide/lib/canvas/core/popoverTarget.ts`: поиск ноды с Popover или
  Dropdown по клику (`hasClickOverlay`);
- `../core`: слушатель, открытие по наведению, Esc, уход курсора, ключ
  источника, обрезка якоря. Хуки и константы оттуда берём по прямым путям, а
  не через `index.ts`: там слушатель, который сам рендерит `CanvasDropdown`.

## Поток данных

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ../core                                                                    │
│                                                                             │
│  resolveCanvasOverlay(detail, defaults)                                     │
│    popoverFromNode нет, dropdownFromNode есть →                             │
│      normalizeDropdownConfig(dropdownFromNode, tableConfig.dropdown)        │
│        utils/normalizeDropdownConfig.ts                                     │
│        элемент → tableConfig.dropdown → DROPDOWN_DEFAULTS (constants.ts)    │
│        trigger только с элемента                                            │
│      → { kind: 'dropdown', config: ResolvedCanvasDropdownConfig }           │
│                                                                             │
│  CanvasOverlayListener.openOverlay → TablePopoverContext.open({             │
│    contentType: 'custom',                                                   │
│    render: ({ close }) =>                                                   │
│      <CanvasDropdown key={sourceKey} config close tableContainer />         │
│  })                                                                         │
└─────────────────────────────────────────────┬───────────────────────────────┘
                                              │
                        PopoverInTable рисует якорь и вызывает render
                                              │
                                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  CanvasDropdown                           components/CanvasDropdown.tsx     │
│                                                                             │
│  <DropdownRoot ref={anchorRef}>              обёртка размером с якорь       │
│    <DropdownPortal ref={setPortal} />        портал для списка              │
│    {portalReady && (                                                        │
│      <Dropdown ref={listRef} alwaysOpened portal={portalRef}                │
│         items={shownItems} placement offset listWidth listMaxHeight size   │
│         variant zIndex closeOnSelect closeOnOverlayClick={false}            │
│         renderItem beforeList afterList                                     │
│         onToggle={handleToggle} onItemSelect={handleItemSelect}>            │
│        <DropdownAnchor aria-hidden />                                       │
│      </Dropdown>                                                            │
│    )}                                                                       │
│  </DropdownRoot>                                                            │
│                                                                             │
│  Пункты: useDropdownItems(config)          hooks/useDropdownItems.ts        │
│    { status: 'ready' | 'loading' | 'error', items, error, retry }           │
│    shownItems: loading → loadingItems                                       │
│                error   → renderError ? [] : пункт «Не удалось загрузить»    │
│                ready   → items                                              │
│    beforeList при error с renderError: renderError({ error, retry, close }) │
│                                                                             │
│  Хуки закрытия:                                                             │
│    useEscapeClose({ enabled: closeOnEsc, tableContainer,                    │
│                     getOverlayElement: () => listRef.current })             │
│      ../core/hooks/useEscapeClose.ts                                        │
│    pointerdown на документе (capture), цель вне портала                     │
│      → close({ outsidePress: true })   только click и closeOnOutsideClick   │
│    useHoverLeaveClose({ enabled: isHover, anchorRef, popoverRef: listRef,   │
│                         expand: HOVER_ANCHOR_GAP, delay: mouseLeaveDelay }) │
│      ../core/hooks/useHoverLeaveClose.ts                                    │
│                                                                             │
│  handleToggle(opened):                                                      │
│    opened === true или isEscapeInProgress() → ничего                        │
│    иначе (выбор пункта с closeOnSelect) → close()                           │
│                                                                             │
│  handleItemSelect(item) → config.onItemSelect(item, { close })              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Конфиг и дефолты

`normalizeDropdownConfig(config, defaults)` берёт каждое поле сначала с
элемента, затем из `tableConfig.dropdown`, затем из `DROPDOWN_DEFAULTS`:
`trigger: 'click'`, `mouseEnterDelay: 300`, `mouseLeaveDelay: 200`,
`placement: 'bottom'`, `offset: [0, 4]`, `variant: 'normal'`,
`zIndex: POPOVER_Z_INDEX`, `closeOnSelect`, `closeOnScroll`,
`closeOnOutsideClick`, `closeOnEsc`, `loadingItems` (один неактивный пункт
«Загрузка...»). `trigger` берётся только с элемента: нода решает, ловить ли
наведение, ещё до того, как известен `tableConfig`.

Без дефолта: `items`, `getItems`, `listWidth`, `listMaxHeight`, `size`,
`renderItem`, `beforeList`, `afterList`, `renderError`, `onItemSelect`,
`ariaLabel`, `onOpen`, `onClose`. `listWidth` и `size` по умолчанию берутся
уже в компоненте из размера строк таблицы (`LIST_WIDTH`, `SIZES` по
`rowSize`), как в `TableDropdown`.

`ResolvedCanvasOverlay` в `../core/types.ts` различает виды:
`{ kind: 'popover' | 'dropdown', config }`. Общий код читает из `config`
только общие поля: `trigger`, `mouseEnterDelay`, `closeOnScroll`, `onOpen`,
`onClose`.

## Открытие

Нода с `dropdown` обрабатывается в `TableGlide` так же, как нода с `popover`:
`trigger: 'hover'` даёт `portalHoverEnabled`, клик даёт
`interaction: { selection: 'keep' }` и курсор `pointer`. События клика и
наведения несут `dropdownFromNode`. Если на одном элементе заданы и
`popover`, и `dropdown`, `resolveCanvasOverlay` открывает Popover, а `buildNode`
один раз на процесс пишет предупреждение в консоль.

## Переходник CanvasDropdown

Атомарный Dropdown неуправляемый, открывает его клик по trigger-ребёнку.
Здесь он получает `alwaysOpened`: открыт, пока смонтирован, то есть пока
Dropdown есть в `TablePopoverState`. Закрытие делаем сами:

- клик мимо: `pointerdown` в capture-фазе на документе, если цель не внутри
  портала списка. Штатный `mousedown`-слушатель атомарки не годится: Glide
  отменяет `pointerdown` на canvas и совместимый `mousedown` не приходит
  (та же причина, что у `TableDropdown`). Закрытие помечается `outsidePress`,
  защёлка в `useTablePopoverState` гасит догоняющий `open()` того же
  источника, так повторный клик по элементу закрывает список;
- выбор пункта с `closeOnSelect`: атомарка зовёт `onToggle(false)`;
- Esc: только `useEscapeClose` (общий с Popover, раздел «Esc со стеком» в
  `../core/ARCHITECTURE.md`). Атомарка ловит Esc лишь на обёртке якоря, на
  документ не подписана. Её `onToggle(false)` во время Esc переходник всё
  равно пропускает (`isEscapeInProgress()`), как у Popover;
- уход курсора при `trigger: 'hover'`: `useHoverLeaveClose` по общему
  прямоугольнику якоря и списка. Зона считается по самому списку (`listRef`),
  потому что портал размера не имеет.

Список рисуется в портал внутри якоря (`DropdownPortal`), а не в body: так
клик по пункту для таблицы остаётся кликом внутри её контейнера, и позиция
считается от якоря, как у контекстного меню (`MenuContainer`). Якорь лежит в
контейнере с `pointer-events: none`, портал возвращает себе `pointer-events:
auto`. Атомарка читает элемент портала при первом рендере, поэтому сам
Dropdown монтируется после того, как портал попал в DOM (`portalReady`).

Фокус атомарка при `alwaysOpened` не трогает, перехват фокуса как у Popover
не нужен. Клавиатурная навигация по пунктам не работает: она висит на
обёртке trigger-элемента, а фокус остаётся в гриде.

## Пункты и асинхронная загрузка

`useDropdownItems`:

- `items`: статус `ready` сразу;
- `getItems` вызывается при монтировании (то есть при каждом открытии) и по
  `retry`, получает `{ signal }`. Синхронный результат даёт `ready`, промис
  даёт `loading`, потом `ready` или `error`. Исключение из `getItems` тоже
  `error`;
- при закрытии, размонтировании и новом запросе прежний запрос отменяется
  через `AbortSignal`, его ответ отбрасывается;
- эффект зависит только от `getItems`, а не от всего конфига.

В состоянии `loading` список показывает `loadingItems`, в `error` показывает
`renderError({ error, retry, close })` через `beforeList` с пустым списком, а
без `renderError` неактивный пункт «Не удалось загрузить».

Отличие от контекстного меню: там запросом владеет потребитель и
`getDropdownItems` перечитывается из `tableConfig` на каждом рендере, пока
меню открыто. Конфиг canvas-элемента снимается в момент открытия (замыкание
в `renderCell`), перечитать его нельзя, поэтому Dropdown получает промис и
держит состояние загрузки сам.

## Где что менять

- Дефолты: `constants.ts`, `utils/normalizeDropdownConfig.ts`,
  `TableConfigDropdown` в `types/table-config.type.ts`.
- Публичные пропсы конфига: `TableGlide/lib/canvas/utils/dropdownConfig.ts`.
- Другой атомарный компонент под капотом: `components/CanvasDropdown.tsx`.
- Открытие, ключ источника, правила закрытия по скроллу и смене строки:
  `../core`.

## Решения и ограничения

- Открывать Dropdown с клавиатуры и ходить по пунктам стрелками пока нельзя.
  Dropdown с `trigger: 'hover'` не открыть и на сенсорном экране, поэтому
  действия, нужные всем, вешаются на клик.
- Пункты выбираются только мышью. `onItemSelect` вызывается и для пункта с
  вложенными пунктами (так устроена атомарка), список при этом не
  закрывается.
- `trigger: 'hover'` с вложенными пунктами: подменю атомарки раскрывается
  своим наведением, зона удержания считается по общему прямоугольнику якоря
  и списка.
