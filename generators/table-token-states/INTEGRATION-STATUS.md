# Статус интеграции «токен × состояние» (ветка feature/table-theme-states)

Дата: 01.10.2026. Рабочие ветки: dais-ui `feature/table-theme-states` (от develop),
форк glide `feature/table-theme-states` (от main, репо C:/dev/glide).

## Что сделано

- **Генератор дизайнера** внесён 1-в-1 в `generators/table-token-states` (код, доки, демо).
  Слой интеграции — `emit-table-colors.ts` (`npm run emit`): палитра 53 ключа × 6 тем →
  `packages/ui-kit/src/components/TableGlide/theming/table-colors.generated.ts`;
  38 временных значений (дыры тем) помечены комментариями, их состояния посчитаны
  той же формулой `fillStates`, не руками.
- **Генератор токенов тем** (`generators/theme-tokens/generate-theme-tokens.js`):
  парсит CSS/JS тем атомарки из node_modules (light/dark, beta core, high contrast —
  у HC в npm есть и dark) → `theme-tokens.generated.ts`, 100 ключей × 6 тем.
  У «чернил» впервые настоящая тёмная тема. Семантические алиасы data*-ключей
  (наш `dataPositive` = CSS `data-green-minor` и т.п.) — таблица `MAPPING` в скрипте,
  спорные пины — `generators/theme-tokens/report.md`.
- **Обёртка**: `ActiveTheme` расширен до 6 тем, `getActiveTheme` детектит все 6
  (починен Beta Dark); `glide-colors` / `custom-colors` / `tokens.ts` /
  `TableCanvas/styles/customColors.ts` — только из сгенерированных палитр, ручных hex нет.
- **Состояния ячеек со своим цветом** (редактируемые, статусные, потребительские):
  `theming/fill-states.ts` — рантайм-копия формулы с кэшем по hex (тест эквивалентности
  с палитрой — бит-в-бит); `theming/cell-fill-override.ts` — подстановка
  bgCell=rest/hover + accentLight=active/hoverActive в per-cell тему.
  Hover внутри выделения — через accentLight row-темы.
- **Патч форка** (~30 строк, 662 теста зелёные):
  - `Highlight.style: 'accent'` — заливка региона берёт accentLight из per-cell темы
    (Ctrl-мультивыбор колонок и строки по нумерации красятся как нативное выделение);
  - `Highlight.drawAboveSelection` — кольца второй фазой поверх нативной рамки
    (красные рамки ошибок больше не перекрываются синим); поле пробрасывается
    через ремап highlightRegions в data-editor.
- **Стенд**: `Локальные компоненты/TableCanvas/ColoringStates` — hover, выделения
  всех видов, чекбоксы, нумерация, редактируемые, ошибки, статусные цвета; контролы.

## ⚠ Техдолг перед пушем

- В корневом `package.json` dais-ui форк подключён как `file:../glide/.../*.tgz`
  (локальная сборка). Перед пушем: закоммичено в форке → опубликовать (6.5.2) →
  вернуть версию в package.json + lock.
- Остановка `npm run storybook` на Windows оставляет зомби-процессы node,
  держащие порт 4400 — при «не обновляется» сначала убить все node с dais-ui в
  командной строке и вычистить `node_modules/.cache/storybook` (там vite-пребандл,
  который не инвалидируется при переустановке file:-зависимости той же версии).

## Не закрыто у нас (по приоритету)

1. **`highlightActiveType='row'`** — главный узел. Подсветка строки активной ячейки
   рисуется непрозрачными регионами (`selectionCheckboxBg` / `selectionActiveCheckboxBg`)
   поверх всего: цветные ячейки перекрываются, hover не взаимодействует.
   В прототипе дизайнера это состояние ведёт себя как «выделение»: цветные ячейки
   показывают наложение, hover затемняет. Путь решения известен (row-тема +
   accentLight, как у checkbox-строк), но нужен ответ дизайнера по токенам (вопрос 1).
2. **Выделенная шапка под курсором**: ключи `bgHeaderSelectedHovered` и
   `selectionServiceActiveHoveredBg` есть в теме, но не потребляются
   (README дизайнера, «Как подключить», п. 5 — и для групповой шапки).
3. **Сохранённая ячейка** (`editedSuccessfully*`): на канвасе не реализована,
   только CSS-слой TableCanvas (rest/hover). 4 ключа палитры ждут применения.
4. **Merged-ячейки**: hover-вариант цвета блока срабатывает только при курсоре на
   origin-строке (делегирование ячеек блока к origin). active-цвета работают.
5. **Итоговая строка**: красится bgHeader, попадает под accent выделенной колонки;
   поведение не специфицировано (вопрос дизайнера № 6 из её README).
6. `fadeWhite` / `fadeGray` — в теме есть, не потреблены.
7. «Чернила» (текст/обводки по состояниям) — по плану дизайнера отложено
   до «правила для чернил»; у нас честно rest-only.

## Вопросы дизайнеру

1. **Подсветка строки активной ячейки** (у нас `highlightActiveType='row'`,
   в прототипе — строка подсвечивается при выборе ячейки). Нужна спецификация
   как для остальных состояний: какой токен × состояние у заливки строки; как
   красятся ячейки со своим цветом внутри неё (наложение как active?); что при
   hover по ней (в прототипе видно затемнение — это hoverActive или отдельный шаг?);
   как взаимодействует с чекбокс-отметкой строки. Сейчас ключей для этого состояния
   в TABLE_COLORS нет.
2. **Выделенная шапка под курсором**: подтвердить пары из README п.5
   (`bgHeader=selectionServiceActiveBg` + `bgHeaderHovered=bgHeaderSelectedHovered`),
   включая групповую шапку.
3. **Merged-ячейки** (объединённые): в модели отсутствуют. Правила для блока:
   hover части блока красит весь блок? частичное попадание блока в выделение
   (у нас — полосами по пересечению)?
4. **Временные токены**: статус запросов мастер-бренду — `data-yellow-light` в light
   (amber-100 vs amber-150) и beta-токены `data-yellow-light` / `data-blue-light`
   (временно Amber/100 #FFF5E7, Blue/100 #EFF8FF, Amber/950 #211607, Blue/950 #0C1A24).
5. **Контрастная тема**: множитель шага «подобрать на стенде» — стенд готов
   (story ColoringStates), можно подбирать; там же нет `surface-solid-primary` и
   `background-primary` — статус у владельцев темы.
6. **Правило «чернил»** (текст/обводки) — когда ждать; нужно для hover/active
   текста ячеек и шапки.
7. Открытые из её README: близость `surface-info-minor` к `surface-accent-minor`
   в light (п. 5); hover итоговой строки и disabled-строки (п. 6).
8. **data-палитра чернил**: подтвердить алиасы из `generators/theme-tokens/report.md` —
   особенно `dataViolet` (#AD42F5, ближайший в теме data-orchid #C46BFF) и
   `dataTeal` (#14CC98, ближайший data-arctic #00AC7B), `textTertiaryBase/Variant`,
   `onDarkTextPrimary96/56/28`, `disabled` — в CSS тем аналогов нет.

## План (после ответов дизайнера)

1. `highlightActiveType` → row-тема + accentLight (механизм готов, нужны токены из вопроса 1).
2. Hover выделенной шапки (вопрос 2) — columnsForRender + getGroupDetails.
3. Канвас-состояния сохранённой ячейки.
4. Рефакторинг (слить общие места генераторов, прибраться в слоях регионов).
5. Скриншот-тесты: ~25–30 кадров — матрица «категория ячейки × состояние» × light/dark
   (+ выборочно beta/HC): hover, range/колонки/строки/Ctrl-мультивыбор, чекбоксы,
   пересечения, ошибки, merged, редактируемые.
6. Публикация форка, возврат версии в package.json, PR.
