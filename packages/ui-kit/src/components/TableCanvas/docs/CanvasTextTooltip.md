# CanvasText: тултипы (`tooltip` / `autoTooltip`)

Внутренняя дока для разработчиков ui-kit. Пользовательская — в storybook
(`CanvasElements/CanvasText`, `TableCanvas/Tooltip`).

## Два механизма

| Проп          | Когда показывается                          | portalHoverEnabled |
| ------------- | ------------------------------------------- | ------------------ |
| `tooltip`     | всегда при hover (база `CanvasNode`)        | нужен явно         |
| `autoTooltip` | только при реальной обрезке в многоточие    | включается неявно  |

Заданы оба → показывается `tooltip`. `autoTooltip`: `boolean` или объект
`{ enabled?, text?: string | (full) => string | null, placement?, view?,
minWidth?, maxWidth?, mouseEnterDelay?, mouseLeaveDelay? }`
(тип `CanvasTextAutoTooltip`).

## Как работает детект обрезки

Ключевой факт жизненного цикла: **инстанс `CanvasText` живёт один кадр** —
canvas tree пересоздаётся на каждый draw ячейки (`cellRenderer`, кэш дерева
выключен). Стабилен только `nodeId`. При этом `CellCanvasRoot.render` диспатчит
hover **до** paint (hover-стили должны попасть в тот же кадр), а portal-hover
событие уходит **один раз на nodeId** (`CanvasHoverController.updatePortalHover`,
ранний return).

Следствие: флаг «обрезан», выставляемый в paint, в `getTooltip()` всегда был бы
`false` (читали бы свежий, ещё не рисовавшийся инстанс). Поэтому обрезанность
вычисляется **лениво** в момент hover — `computeIsTruncated()`:

- layout уже прошёл → `rect.width` финальный, `cachedLines` заполнены `measure`;
- одиночная строка → `resolveOverflowText(...).didTruncate`;
- wrapped-строки → `resolveWrappedOverflowText(...).didClamp`;
- измерения идут через module-level offscreen ctx (`getMeasureContext()`) и
  бьют в кэши `textOverflow`, прогретые paint-ом тем же ключом
  `font|text|width` → фактически Map-lookup, не `measureText`.

## Подводные камни

1. **Dispatch-once на nodeId**: пока курсор стоит на ноде, тултип не обновится
   «на лету» (resize колонки под курсором) — только после ухода/возврата
   курсора. Свойство hover-тракта, не детекта.
2. **`rect.width === 0`** считается обрезкой (непустой текст полностью скрыт) —
   тултип покажется. Считаем фичей.
3. **Multiline — только вертикальный clamp** (`didClamp` = есть скрытые
   строки); горизонтальная обрезка отдельной wrapped-строки не учитывается.
4. **Наследники** (`CanvasLink`) работают без доп. кода — детект не зависит от
   их paint. Но если наследник меняет семантику `text`/`rect`, переопределяйте
   и `computeIsTruncated`.
5. **Не хранить обрезанность в состоянии**: поле инстанса умирает с кадром,
   static-мапа по nodeId течёт (ключи с `rowInd` на больших таблицах) и
   коллидирует между таблицами (у групп-хедеров ключ — `groupName`). Обе
   схемы уже пробовали и убрали.
6. **Покрытие**: только `Canvas.Text` в canvas-разметке (`renderCell` /
   `renderHeaderCell`, хедеры, групп-хедеры). Примитивные text-ячейки рисует
   встроенный рендерер glide — их авто-тултип (`tableConfig.tooltip.
   autoOnOverflow`) — отдельная задача (Level 2/3).
