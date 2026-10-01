# Состояния цветов Table Canvas из семантических токенов темы

Генератор для TableGlide / TableCanvas (dais-ui). На вход — семантический токен темы (имя + hex в шести темах). На выходе — четыре состояния этого токена в каждой теме: **rest**, **hover**, **active** (выделение) и **hoverActive** (выделение под курсором). Все выходные цвета — непрозрачные hex: канвас ничего не накладывает в рантайме, наложение просчитано заранее. Внутри всё считается в OKLCH, результат детерминирован и проверен тестами.

Дата сборки: 18.09.2026. Автор модели и правил — Вероника Малышева (дизайн-система). Архив подготовлен для команды разработки таблицы.

## Что в архиве

| Файл | Что это |
|---|---|
| `code/table-token-states.ts` | **Источник истины.** Формулы, преобразования hex ↔ OKLCH, функции состояний. Без зависимостей, TypeScript strict. |
| `code/table-token-sources.ts` | Данные: шесть тем и их настройки (`THEME_SETTINGS`), семантические токены с hex по темам (`SEMANTIC`), токены фона ячейки (`CELL`), карта «ключ цвета таблицы → токен + состояние» (`TABLE_COLORS`, 53 ключа). |
| `code/table-token-states.test.ts` | 17 тестов vitest: значения макета «Выделение ячеек», ΔE шага, шесть тем, группы токенов, произвольные цвета, охват sRGB. |
| `code/table-state-colors.ts` | Эталон спеки 15.09 (предыдущая версия расчёта). Нужен только тесту «неизменённые ключи совпадают»; в таблицу не подключать. |
| `code/generate.ts` | Скрипт: считает всё и пишет JSON, markdown и два CSV. |
| `code/table-token-states.output.json` | Готовый результат: состояния каждого токена и hex каждого ключа таблицы по шести темам. |
| `docs/table-token-sources.md` | То же в читаемом виде: 1) входные токены × темы, 2) карта ключ → токен + состояние, 3) результат по ключам, 4) состояния по токенам. |
| `docs/table-semantic-tokens.csv`, `docs/table-token-map.csv` | Вход и карта с результатом в CSV. |
| `demo/table-states-prototype.html` | Интерактивный прототип: таблица со всеми состояниями в каждой теме, матрица значений, исходные токены, экспорт. Открывается локально, без сервера. |

Запуск: `npm install`, затем `npm test`, `npm run typecheck`, `npm run generate`.

## Модель

Каждый цвет таблицы = **семантический токен темы × состояние**. Никаких ручных hex, смещений и «тинтов» в коде таблицы: если меняется тема, меняются входные токены, и все состояния пересчитываются.

**Шаг 1. Группа токена** — по префиксу имени: `surface`, `data` (заливки), `text`, `outline`, `background`. Из группы следует использование: `fill` для surface и data, `text`, `outline`, `static` для background (затухание при скролле, состояний нет).

**Шаг 2. Правило группы.**

- Заливки (`fill`): состояния считает формула «шаг по лучу» от опоры темы. У фона ячейки `surface-solid-card` нет хромы, луч не определён — направление берётся у `surface-solid-primary` той же темы. Для произвольного hex, который приходит из `themeOverride` потребителя, то же правило даёт функция `fillStates`.
- Текст и обводки (`text`, `outline`): пока без формулы — берутся собственные `-hover` / `-active` токена из темы, иначе токен как есть. Правило для «чернил» будет отдельным.
- `static`: цвет как есть.

**Шаг 3. Состояния заливки.**

| Состояние | Как считается |
|---|---|
| `rest` | токен как есть (альфа токена, если есть, сплющена на фон ячейки) |
| `hover` | +1δ по лучу от `rest`; δ = 0,025 × множитель темы (light 1, dark 1,2, контрастная — подобрать на стенде) |
| `active` | выделение: `surface-transparent-accent` темы наложен на `rest` по каналам sRGB с его альфой (12 % в светлых темах, 20 % в тёмных) — так работает компонент Selection Area в макете; наложение работает поверх любой подложки |
| `hoverActive` | +1δ по лучу от цвета выделения. Hover на выделенных ячейках показывается (решение 18.09; в макете «Выделение ячеек» сказано обратное — это ошибка макета, она правится) |

Свойство, ради которого всё сделано: **ΔEok(rest, hover) = 100·δ** ровно, во всех темах и для любого цвета, включая цвета потребителя. То же для пары active → hoverActive.

## Формула «шаг по лучу»

Пространство — OKLCH (матрицы Ottosson, sRGB ↔ линейный ↔ LMS ↔ OKLab). Опора A — белый (L = 1) в светлых темах, чёрный (L = 0) в тёмных. Направляющий B — сам токен; для фона без хромы — `surface-solid-primary`. Точка P — цвет, от которого делается шаг (rest для hover, цвет выделения для hoverActive).

```
σ  = C_B / |L_B − L_A|              относительная хрома луча
ΔL = d / √(1 + σ²)                  шаг по светлоте при шаге d вдоль луча
L′ = L_P − ΔL  (светлые)            от опоры, то есть темнее
L′ = L_P + ΔL  (тёмные)             светлее
C′ = σ · |L′ − L_A|                 хрома растёт пропорционально удалению от опоры
h′ = h_B                            тон не меняется
d  = 0,025 × stepFactor темы
```

Точка P располагается на луче по своей светлоте; её собственная хрома в шаге не участвует. Отсюда ΔEok(P, P′) = 100·d до округления (после округления до 8 бит на канал отклонение ≤ 0,2). Если C′ выходит за sRGB (только у насыщенных цветов), хрома уменьшается при тех же L′ и h′.

Наложение выделения — не шаг, а композит по каналам sRGB:

```
c′ = α·c_sel + (1 − α)·c_cell       для R, G, B
surface-transparent-accent: light/dark #118CDF, beta #0090DA, контрастная #0076D2
α = 0,12 (0x1F) в светлых темах, 0,20 (0x33) в тёмных
```

Эта формула воспроизводит все двенадцать пар «подложка + выделение = результат» из макета с точностью до единицы канала (проверено тестом). Расстояние от подложки до выделения от подложки зависит — это свойство наложения; для hover поверх выделения снова используется шаг d от полученного цвета (луч у него свой: в нём есть акцентная хрома; если наложение на тёплую подложку погасило хрому, как у warning, направление берётся у `surface-solid-primary`).

Порог различимости ΔEok ≈ 2; шаг 2,5 (тёмные 3,0) выбран как минимально надёжный.

## Темы

| Тема | Откуда hex | Замечание |
|---|---|---|
| `light`, `dark` | `@salutejs/sdds-themes` 0.79.1, `sdds_finai__light.css` / `__dark.css` | при обновлении пакета сверить значения токенов из `SEMANTIC` |
| `betaCoreLight`, `betaCoreDark` | `@salutejs-ds/sdds_finai_beta_core` 0.1.0 | в beta нет токенов `data-yellow-light` и `data-blue-light` → у ключей редактирования `null`, см. «Открытые вопросы» |
| `highContrastLight` | `TableGlide/tokens.ts` dais-ui | нет `surface-solid-primary` и `background-primary` → `null` у hover фона и затухания; множитель шага подобрать на стенде |
| `highContrastDark` | заглушка, копия `dark` | темы нет и не планируется |

`null` в результате всегда означает «в теме нет данных», а не ошибку расчёта. В `light` и `dark` null нет.

## API (`code/table-token-states.ts`)

```ts
type SourceToken = {
  name: string;                       // имя CSS-токена темы, например 'surface-accent-minor'
  values: ThemeValues;                // { light: '#…', dark: '#…', betaCoreLight, betaCoreDark, highContrastLight, highContrastDark }
  hover?: ThemeValues; active?: ThemeValues; hoverActive?: ThemeValues;  // только для text / outline: собственные состояния темы
};
type CellTokens = { card: SourceToken; primary: SourceToken; selection: SourceToken };
// card = surface-solid-card, primary = surface-solid-primary, selection = surface-transparent-accent (с альфой)
type States = { rest: string; hover: string | null; active: string | null; hoverActive: string | null };

deriveStates(source, THEME_SETTINGS, CELL, usage?)      // → { light: States|null, dark: …, … } для одного токена
deriveAllStates(SEMANTIC, THEME_SETTINGS, CELL)         // → { tokenKey: { theme: States|null } }
buildTableColors(TABLE_COLORS, SEMANTIC, THEME_SETTINGS, CELL)
                                                        // → { bgHeaderHovered: { light: '#…', dark: '#…', … }, … } — форма GLIDE_COLORS / CUSTOM_COLORS
fillStates(hex, mode, { stepFactor?, cardHex?, primaryHex?, selectionHex?, achromatic? })
                                                        // → States для произвольного цвета (themeOverride потребителя); mode 'light' | 'dark'
selectedHex(cellHex, selectionHex)                      // → цвет ячейки под выделением
stepHex(baseHex, d, mode, slopeHex?)                    // → один шаг по лучу; deltaE(a, b) — ΔEok × 100 для проверок
```

Карта `TABLE_COLORS`: `{ ключ: { source: 'surfaceAccentMinor', state: 'hover', usage?: 'fill' | 'text' | 'outline' | 'static', paints: 'что красит' } }`. Ключи — те, что сейчас в `glide-colors.ts` / `custom-colors.ts`, плюс новые для состояний, которых в коде не было (например `selectionActiveHoveredBg`, `bgEditableCellActive`, `bgCellPositive…`). Полный список с описанием — `docs/table-token-sources.md`, раздел 2.

Результат `code/table-token-states.output.json`: `{ generated, themes, note, bySemanticToken: { tokenKey: { theme: States } }, byTableKey: { key: { theme: hex } } }`.

## Как подключить в таблице

1. **Темы собирать из CSS-токенов**, а не из `tokens.ts`: в генератор передаются имена и значения CSS-переменных темы (`--surface-solid-card` и т. д.). В `tokens.ts` сейчас нет `surface-solid-primary`, `background-primary`, `data-yellow`, `data-yellow-light`, `data-blue-light`; блок light расходится с CSS 0.79.1 в 8 токенах, `TOKENS_DARK` — копия light. `ActiveTheme` нужно расширить до шести тем (`betaCoreDark`, `highContrastDark`).
2. **Цвета темы таблицы** — из `buildTableColors(...)`, вручную ничего не поддерживается. Пока темы не пересобраны, можно брать готовый `output.json`.
3. **Hover поверх выделения.** В Glide `highlightRegions` непрозрачные: для строки под курсором класть поверх них копии с hover-цветами (`selectionActiveHoveredBg`, `selectionActiveCheckboxHoveredBg`, `selectionServiceActiveHoveredBg`, `bgHeaderSelectedHovered`) плюс отдельную область на нативную заливку диапазона. У ячеек со своим цветом — их `…ActiveHovered`.
4. **Цвета потребителя** (`themeOverride.bgCell` статусных ячеек и любые другие): считать `fillStates(hex, mode, { stepFactor, cardHex, primaryHex, selectionHex })` в рантайме и кэшировать по hex — функция чистая, без зависимостей. Параметры берутся из темы: `cardHex = surface-solid-card`, `primaryHex = surface-solid-primary`, `selectionHex = surface-transparent-accent` с альфой, `stepFactor` из `THEME_SETTINGS`. Ячейка со своим цветом остаётся в нём во всех состояниях: hover — её собственный шаг, выделение — наложение на её цвет.
5. **Выделенная шапка:** вместе с `bgHeader = selectionServiceActiveBg` ставить `bgHeaderHovered = bgHeaderSelectedHovered`; для группы — то же в `getGroupDetails`.
6. **Текст и обводки** пока приходят из темы как есть (или их `-hover` / `-active`); когда появится правило для «чернил», оно встанет в `deriveThemeStates` в ветку `usage !== 'fill'`, остальное не меняется.

## Проверка

`npm test` — 17 тестов: неизменённые ключи совпадают со спекой 15.09; двенадцать пар «подложка + выделение» из макета воспроизводятся ±1 канал; `selectionActiveBg` на белом `#E2F1FB`, в отмеченной строке `#D1E9F8` (как в коде сейчас); hover на выделении отстоит от выделения ровно на δ; у каждого ключа шесть тем; `highContrastDark` = `dark`; в `highContrastLight` null только там, где нет данных; группы по имени; text без формулы; `fillStates` даёт то же, что состояния токена с тем же hex; насыщенные цвета не выходят за sRGB. `npm run typecheck` — strict без ошибок.

Формула независимо проверена на Python и в браузере (`oklch()` CSS-движка): расхождение ≤ 1 единицы канала из-за округления. Для канваса использовать hex из TS, не CSS-вычисления.

## Открытые вопросы (состояние на 18.09.2026)

1. **`data-yellow-light` в светлой теме.** В `@salutejs/sdds-themes` 0.78.0 токен переведён с amber-100 `#FFF6E5` на amber-150 `#FFE4AE`; запрос владельцам темы вернуть amber-100 отправлен. Генератор берёт то, что даёт тема: сейчас в `SEMANTIC` стоит `#FFE4AE`, после исправления темы поменять одно значение и перегенерировать. Правильный по решению дизайнера цвет — amber-100 `#FFF6E5`: в демо светлая редактируемая ячейка показана с ним (помечено «временно»), и пока тема не исправлена, таблица может использовать его как временное значение.
2. **Beta Core:** нет `data-yellow-light` и `data-blue-light` (редактируемая и сохранённая ячейка) → ключи редактирования в beta = `null`. Запрошены у владельцев темы (Amber/100 `#FFF5E7`, Blue/100 `#EFF8FF`; тёмные Amber/950 `#211607`, Blue/950 `#0C1A24`). В демо стоят именно эти значения как временные, помечены «временно».
3. **Контрастная тема:** нет `surface-solid-primary`, `background-primary`; множитель шага подобрать на стенде. Второй приоритет.
4. **Текст и обводки:** правило для «чернил» — отдельно, после цветов ячеек.
5. В light `surface-info-minor` (статус info) близок к `surface-accent-minor` (отмеченная строка) — проверить на прототипе, панель «пары».
6. Нужен ли hover итоговой строке; есть ли disabled-строки, которым нужен фон и состояния.

## Демо

`demo/table-states-prototype.html` — открыть в браузере. Переключатель тем (light, dark, Beta Core light/dark, контрастная light), виды: **таблица** (все ячейки живые: hover, выделение колонки/строки/диапазона, отмеченные строки, редактируемые, сохранённые и статусные ячейки), **матрица** значений по ключам и темам, **исходные токены** (вход и карта). Экспорт в TS, JSON и CSV — те же значения, что в `output.json`. Внизу — панель формулы для текущей темы и проверка совпадения с модулем (`code/table-token-states.ts` собран в страницу как есть).
