# Интеграция модели «токен × состояние» в таблицу: статус, проблемы, вопросы

Дата: 07.10.2026 (обновлено после палитры v1.2). Ветки: dais-ui
`feature/table-theme-states` (от develop), форк glide
`feature/table-theme-states` (репо RamK-16/glide).

Документ в двух частях: **часть 1 — для дизайнера** (без кода, с объяснением
терминов), **часть 2 — для Claude-агента дизайнера** (карта кода и механики).

---

# Часть 1. Для дизайнера

## Коротко: что уже работает

Интегрирована палитра **v1.2 целиком** (60 ключей, включая hover2). Все
цвета таблицы берутся из модели «семантический токен × состояние», по всем
шести темам, включая настоящую тёмную. Работает по твоей модели:

- **покой / hover / выделение / hover-внутри-выделения** для обычных ячеек;
- **ячейки со своим цветом** (жёлтые редактируемые, статусные
  positive/negative/warning/info, произвольные цвета потребителя) во всех
  состояниях, включая hover2;
- все способы выделения: диапазон мышью, колонка кликом по шапке
  (включая Ctrl-мультивыбор), строка кликом по нумерации;
- отмеченные чекбоксом строки и их пересечения с выделением и hover;
- **выбранная строка** (`highlightActiveType='row'`) — по твоему правилу
  v1.2, см. ниже;
- **выделенная шапка под курсором** — на ступень глубже
  (`bgHeaderSelectedHovered`), листовая и групповая;
- красная рамка ошибки поверх любого выделения;
- шесть тем; временные значения для дыр подставлены и помечены.

Стенд для проверки: Storybook → Локальные компоненты → TableCanvas →
ColoringStates (переключатели всех режимов, темы — глобальным тулбаром).

## Закрыто по твоим ответам v1.2 (05–07.10)

**Выбранная строка** реализована ровно по правилу из README «Как
подключить» п. 3 — сверено пиксельно со значениями палитры (light):

- обычная ячейка = `surface-accent-minor` × rest (#ECF6FC), под курсором
  × hover (#DEF0FA); нажатый чекбокс добавляет ступень (под курсором
  × hover2 #D0EAF8);
- наличие (ненажатого) чекбокса на цвет не влияет — старое правило
  «есть чекбокс → темнее» убрано;
- цветные ячейки — свой hover, под курсором свой hover2, **без наложения
  выделения**;
- пересечение с реальным выделением = выделение; сервисная зона строки
  затемняется как при выделении;
- активная (кликнутая) ячейка — фон своей строки + рамка, без тонирования.

**Выделенная шапка под курсором** — пары из п. 6 подключены
(лист `bgHeaderHovered = bgHeaderSelectedHovered`, группа — то же).

**Имена data-палитры** — по решению v1.2 применено: `dataViolet` → алиас
`data-orchid` (по-темные значения), `textTertiaryBase`/`textTertiaryVariant`
→ алиас `text-tertiary`, токен `disabled` удалён (по твоему решению: disabled —
не цвет, а правило «непрозрачность 40 %»; в коде он не использовался),
`dataTeal` оставлен временным значением arctic-300 `#14CC98` до появления
`data-arctic-minor` в теме.

**Merged-ячейки** — как договорились, поведение не меняли (hover по
origin-строке, выделение полосами по пересечению); ждём отдельного решения.

## Остаётся открытым

1. **Временные токены** — следим за запросами владельцам темы:
   `data-yellow-light` в light (ждём amber-100 вместо amber-150), beta
   `data-yellow-light`/`data-blue-light`; у HC-light нет
   `surface-solid-primary` (нет hover у серых потребительских ячеек),
   `background-primary` и минорных статусных токенов.
2. **Контрастная тема**: «множитель шага подобрать на стенде» — стенд готов,
   можно подбирать вместе.
3. **Правило «чернил»** (текст и обводки по состояниям) — когда появится,
   встанет в `deriveThemeStates` (ветка `usage !== 'fill'`), остальное не
   меняется. Остаются без решения `onDarkTextPrimary96/56/28` — почти
   белый текст с непрозрачностью 96/56/28 %, оттенок `#F7F9FB` не совпадает
   с `--on-dark-text-primary` (`#F2F5F8`); в коде таблицы не используются —
   подтвердить замену или убрать (таблица — generators/table-ink-tokens/report.md).
4. Сохранённая ячейка (`editedSuccessfullyCell*`) — ключи в палитре есть,
   canvas-состояния у нас пока нет (красится CSS-слоем); сделаем отдельно.
5. **Disabled-состояния canvas-контролов** (кнопки, чекбокс внутри ячеек):
   сейчас захардкожены light-цвета (`#E8EEF2`/`#8A959D`, белый фон
   unchecked-чекбокса) — в dark/HC не адаптируются. Токен `disabled` мы
   удалили как неподтверждённый. Нужны пары «токен × состояние» для
   disabled-контролов — либо подтверждение ближайших
   (`surface-solid-tertiary` / `text-tertiary`?). Отдельная задача, не
   блокирует релиз палитры.

---

# Часть 2. Для Claude-агента дизайнера (карта кода и механики)

Контекст: dais-ui — библиотека React-компонентов; таблица TableCanvas →
обёртка TableGlide → форк Glide Data Grid (canvas-рендер,
`@glideappsfinal/glide-data-grid`, репо RamK-16/glide). Все пути ниже — от
корня dais-ui, пути форка — от корня репо glide.

## Как устроена интеграция палитры

- `generators/table-token-states/` — пакет дизайнера v1.2 1-в-1 (code/,
  docs/, demo/). Источник истины не правится.
- `generators/table-token-states/emit-table-colors.ts` — слой интеграции:
  `buildTableColors()` → + временные значения для null-дыр (их состояния
  считаются той же `fillStates`, не руками) → эмитит
  `packages/ui-kit/src/components/TableGlide/theming/table-colors.generated.ts`
  (60 ключей × 6 тем, непрозрачные hex + `TABLE_FILL_PARAMS` — параметры
  формулы по темам для рантайма).
- `theming/fill-states.ts` — контролируемая копия fill-пути формулы
  (OKLCH, шаг по лучу, hover2, наложение выделения) + кэш по `${тема}/${hex}`.
  Эквивалентность генератору закреплена тестом `fill-states.test.ts`
  (бит-в-бит против палитры).
- `TableGlide/ink-tokens.generated.ts` + `generators/table-ink-tokens/` — отдельный
  генератор «чернил» (текст/бейджи/кнопки в ячейках): парсит CSS-переменные
  тем атомарки прямо из node_modules (6 тем); список нужных цветов и где их
  искать — `lib/token-map.js`; цвета, взятые не напрямую из своей темы, и
  изменения у атомарки с прошлого запуска — `report.md`.

## Ключевая механика состояний (форк + обёртка)

Форк: заливка ячейки — конвейер в
`packages/core/src/internal/data-grid/render/data-grid-render.cells.ts`:
bgCell из смерженной per-cell темы → при `accentCount > 0` (ячейка в
выделении) блендится `theme.accentLight` → highlightRegions. `blend()` для
непрозрачного hex возвращает цвет как есть — предвычисленные цвета не
смешиваются, а подставляются.

Механизм состояний в обёртке:

- **Ячейка со своим цветом**: `TableGlide.tsx`, `getCellContentGlide`:
  `theming/cell-fill-override.ts` кладёт в per-cell `themeOverride`
  `bgCell` = rest|hover (в выбранной строке hover|hover2) и `accentLight` =
  active|hoverActive. Для потребительских цветов (`columnThemeOverride →
bgCell`) состояния считает `getCellFillStates(hex, theme)` с кэшем.
- **Выбранная строка** (`highlightActiveType='row'`): фон строки отдаёт
  row-тема (`getRowThemeOverride`, лестница — `resolveActiveRowBg` в
  `cell-fill-override.ts`), регионами не красится. Активная ячейка при
  одиночном выделении не тонируется: per-cell `accentLight = bgCell`
  (`soloActiveCellOverride` в `getCellContentGlide`) — остаётся рамка.
  Одиночная заливка базового слоя в `cell`-режиме тоже гасится
  (`highlightActiveRow` в `useBaseHighlightRegions`).
- **Hover внутри выделения** (обычные ячейки): `getRowThemeOverride` —
  hovered-строка отдаёт `accentLight: selectionActiveHoveredBg`;
  чекбокс-строки — свои active/hoverActive-варианты.
- **Выделение колонок (Ctrl-мультивыбор) и строк по нумерации** — собственные
  оси обёртки (не glide-selection), рисуются регионами
  (`hooks/selection/useColumnRowHighlightRegions.ts`) со стилем
  **`style: 'accent'`** (патч форка): заливка берёт `accentLight` из
  per-cell темы — тот же механизм, что натив.
- **Выделенная шапка**: `columnsForRender` — `bgHeader/bgHeaderHasFocus =
selectionServiceActiveBg`, `bgHeaderHovered = bgHeaderSelectedHovered`;
  группа — `getGroupDetails` (`bgGroupHeaderHovered`).
- **Патч форка** (ветка feature/table-theme-states в RamK-16/glide, коммиты
  f58b344 + 7bd3e4c): `Highlight.style 'accent'` + `drawAboveSelection`
  (обводка второй фазой поверх нативной рамки, включая overlay-канву шапки).
  Рамки ошибок помечены `drawAboveSelection: true`
  (`useBaseHighlightRegions.ts`) — рисуются поверх любого выделения.

Карта слоёв окраски целиком — комментарий в
`hooks/selection/useColoringLayers.ts`; карта подсистемы выделения —
`hooks/selection/README.md`.

## Не подключено / known issues (код)

- `editedSuccessfullyCell*` (4 ключа) — canvas-реализации нет; сохранённая
  ячейка красится только CSS-слоем TableCanvas
  (`TableCanvas/styles/cellStyle.ts`, класс `rdg-edited-successfully-cell`).
- Merged-ячейки: hover-вариант только при курсоре на origin-строке — ячейки
  блока делегируются к origin (`getCellContentGlide`, `findBlockOrigin`).
  По ответу дизайнера v1.2 — пока не менять.
- `fadeWhite`/`fadeGray` — в палитре есть, не потребляются.
- `checkboxVisibleRowIndexes` — @deprecated (на цвет больше не влияет).
- HC-light: `TABLE_FILL_PARAMS.primaryHex = null` → у ахроматических
  потребительских цветов нет hover в этой теме (ждём токен у владельцев).

## Техдолг перед пушем

- В корневом `package.json` dais-ui форк временно подключён как
  `file:../glide/packages/core/*.tgz`. Перед пушем: опубликовать форк
  (6.5.2) → вернуть версию + lock.
- Windows: остановка `npm run storybook` оставляет зомби-node на порту 4400;
  vite-пребандл в `node_modules/.cache/storybook` не инвалидируется при
  переустановке file:-зависимости той же версии — чистить вручную.

## План до PR

1. Скриншот-тесты: матрица «тип ячейки × состояние» × light/dark
   (+выборочно beta/HC), ~25–30 сторис.
2. Canvas-состояния сохранённой ячейки (отдельной задачей, можно после PR).
3. Публикация форка 6.5.2, возврат версии, PR.
