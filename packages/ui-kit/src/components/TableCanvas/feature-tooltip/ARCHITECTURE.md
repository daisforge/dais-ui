# feature-tooltip

Тултипы для canvas-элементов таблицы. Работает поверх канваса через React-портал.

## Структура

```
feature-tooltip/
├── index.ts                        — публичный API фичи (фасад)
├── constants.ts                    — HEADER_TOOLTIP_DRAG_ID, DEFAULT_MOUSE_ENTER_DELAY
├── types.ts                        — TooltipData, CanvasTooltipOverlayProps, TooltipConfigResult
├── components/
│   ├── CanvasTooltipOverlay.tsx     — React-компонент, рендерит <Tooltip> через портал
│   └── styled.ts                   — StyledContainer
├── hooks/
│   └── usePortalHover.tsx          — подписка на EventBus, управление таймерами и анимацией
└── utils/
    ├── index.ts                    — реэкспорты утилит
    ├── resolveTooltipData.ts       — резолвер: detail → TooltipData (все as-касты тут)
    ├── normalizeTooltipConfig.ts   — строка/объект → TooltipData
    ├── typeGuards.ts               — isTooltipConfigFromNode
    └── tooltipByNodeId.ts          — nodeId → текст (встроенный маппинг TOOLTIP_TEXTS)
```

## Поток данных

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ИСТОЧНИК СОБЫТИЯ (за пределами feature-tooltip)                           │
│                                                                             │
│  Hover по canvas-ячейке / заголовку                                        │
│                                                                             │
│  Кто диспатчит:                                                            │
│    · CellCanvasRoot.ts        — hover по кастомной canvas-ноде внутри      │
│                                  ячейки (иконки, чипы и т.д.)              │
│    · useItemHoveredHandler.ts — hover по заголовку или ячейке целиком       │
│                                  (onItemHovered от Glide Data Grid)        │
│                                                                             │
│  Что происходит:                                                           │
│    dispatchCanvasPortalHover(detail, containerRef)                          │
│      → создаёт CustomEvent('canvas-portal-hover', { detail })              │
│      → диспатчит на containerRef (DOM-элемент контейнера таблицы)          │
│      → detail содержит: visible, x, y, width, height, nodeId, source,     │
│        tooltipFromNode, tooltipContext (column, row, ctxs...)              │
│                                                                             │
│  Файлы:                                                                    │
│    TableGlide/lib/canvas/utils/portalHoverEvents.ts                        │
│    TableGlide/lib/canvas/cells/CellCanvasRoot.ts                           │
│    TableGlide/hooks/useItemHoveredHandler.ts                               │
└─────────────────────────────────────────────┬───────────────────────────────┘
                                              │
                              CustomEvent на containerRef
                                              │
                                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  usePortalHover                                    hooks/usePortalHover.tsx │
│                                                                             │
│  Подписка:                                                                 │
│    subscribeToCanvasPortalHover(callback, containerRef)                     │
│    subscribeToPortalHoverLock(callback)  — блокировка при скролле и т.п.   │
│                                                                             │
│  При получении события проверяет detail.visible:                           │
│                                                                             │
│  visible === false (курсор ушёл)                                           │
│    │                                                                        │
│    ├── showTimeout ещё тикает?                                             │
│    │     → отменяем его, тултип так и не появится                          │
│    │                                                                        │
│    ├── leaveDelay > 0?  (из getDelays → data.mouseLeaveDelay)             │
│    │     → ждём leaveDelay мс, затем startLeaveAnimation                  │
│    │                                                                        │
│    └── иначе                                                               │
│          → startLeaveAnimation сразу                                       │
│              setState({ leaving: true })                                    │
│              через LEAVE_ANIMATION_DURATION мс → setState(initial)         │
│                                                                             │
│  visible === true (курсор наведён)                                         │
│    │                                                                        │
│    ├── filter(detail) → TooltipData | null                                 │
│    │     (это resolveTooltipData — см. ниже)                               │
│    │     null → игнорируем, тултип не нужен                                │
│    │                                                                        │
│    ├── enterDelay > 0?  (из getDelays → data.mouseEnterDelay)             │
│    │     → ждём enterDelay мс, затем показываем                            │
│    │                                                                        │
│    └── иначе                                                               │
│          → setState({ visible: true, x, y, width, height, data })         │
│                                                                             │
│  Результат: PortalHoverState<TooltipData>                                  │
│    { visible, leaving, x, y, width, height, nodeId, data }                 │
└─────────────────────────────────────────────┬───────────────────────────────┘
                                              │
                                     filter(detail) вызывает
                                              │
                                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  resolveTooltipData                           utils/resolveTooltipData.ts   │
│                                                                             │
│  Принимает: CanvasPortalHoverDetail + customEnabled: boolean               │
│  Возвращает: TooltipData | null                                            │
│                                                                             │
│  customEnabled управляет доступностью колоночных/кастомных тултипов.       │
│  Внутренние тултипы (проп tooltip и маппинг TOOLTIP_TEXTS) работают всегда.│
│                                                                             │
│  Три приоритета (первый непустой результат побеждает):                      │
│                                                                             │
│  1. Маппинг nodeId → текст (TOOLTIP_TEXTS)                      [ВСЕГДА]  │
│     │  getTooltipDataByNodeId(detail)                                      │
│     │  Внутренние тултипы UI таблицы (drag-иконка и т.д.).                │
│     │  Наивысший приоритет — колоночный конфиг не может их перебить.       │
│     └─ tooltipByNodeId.ts                                                  │
│                                                                             │
│  2. tooltipFromNode                                              [ВСЕГДА]  │
│     │  Проп tooltip, заданный прямо на canvas-ноде.                        │
│     │  Строка или { text, mouseEnterDelay?, ... }.                         │
│     │                                                                       │
│     │  isTooltipConfigFromNode(value)  →  typeGuards.ts                    │
│     └─ normalizeTooltipConfig(value)   →  normalizeTooltipConfig.ts        │
│                                                                             │
│  3. Колоночный конфиг (resolveColumnTooltipConfig)       [customEnabled]   │
│     │  Работает только при customEnabled === true.                         │
│     │  Достаём из detail.tooltipContext.column.                            │
│     │  Ключ зависит от source:                                             │
│     │    source === 'header' → column.headerCellTooltip                    │
│     │    иначе               → column.cellTooltip                          │
│     │                                                                       │
│     │  Конфиг может быть:                                                  │
│     │    · функция(ctx) → вызываем с { row, column, ctxs, ... }           │
│     │    · строка / объект → передаём в normalizeTooltipConfig             │
│     │                                                                       │
│     │  ⚠ Все as-касты EventBus-границы сосредоточены здесь.               │
│     └─ normalizeTooltipConfig(result)                                      │
└─────────────────────────────────────────────┬───────────────────────────────┘
                                              │
                                    TooltipData попадает в state
                                              │
                                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  CanvasTooltipOverlay              components/CanvasTooltipOverlay.tsx      │
│                                                                             │
│  state.visible === false → return null (ничего не рендерим)                │
│                                                                             │
│  state.visible === true:                                                   │
│    1. viewportToContainerPosition(x, y, containerEl)                       │
│         Пересчитывает viewport-координаты в координаты контейнера          │
│                                                                             │
│    2. createPortal(                                                        │
│         <StyledContainer style={{ position, left, top, width, height }}>   │
│           <Tooltip                                                         │
│             opened={visible && !leaving}   ← leaving = fade-out анимация   │
│             text={data.tooltipText}                                        │
│             {...data.tooltipProps}          ← произвольные пропсы тултипа  │
│           />                                                               │
│         </StyledContainer>,                                                │
│         containerEl                        ← портал в контейнер таблицы    │
│       )                                                                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Где что менять

| Задача                        | Файл                                                       |
| ----------------------------- | ---------------------------------------------------------- |
| Новый источник tooltip-данных | `utils/resolveTooltipData.ts` — добавить приоритет         |
| Новый текст по nodeId         | `utils/tooltipByNodeId.ts` — добавить в `TOOLTIP_TEXTS`    |
| Задержки показа/скрытия       | `hooks/usePortalHover.tsx` — логика таймеров               |
| Внешний вид тултипа           | `components/CanvasTooltipOverlay.tsx` — пропсы `<Tooltip>` |
| Формат конфига → TooltipData  | `utils/normalizeTooltipConfig.ts`                          |

## EventBus и as-касты

`CustomEvent` стирает дженерики при `window.dispatchEvent`. Поля `tooltipContext.column`, `colInd`, `rowInd`, `theme` приходят как `unknown`. Все приведения типов (`as`) сосредоточены в одном файле — `utils/resolveTooltipData.ts` (`resolveColumnTooltipConfig`). Остальные файлы фичи от кастов свободны.

## customEnabled и enabled

`tableConfig.tooltip.enabled` (по умолчанию `false`) управляет **только** колоночными/кастомными тултипами (`cellTooltip`, `headerCellTooltip`). Внутренние тултипы — проп `tooltip` на Canvas-элементе и встроенный маппинг `TOOLTIP_TEXTS` по `nodeId` — работают **всегда**, независимо от `enabled`.

`CanvasTooltipOverlay` рендерится безусловно. Значение `enabled` передаётся в `resolveTooltipData` как параметр `customEnabled`, который включает/выключает приоритет 2 (колоночный конфиг).
