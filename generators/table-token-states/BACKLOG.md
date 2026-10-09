# Отдельные задачи после интеграции палитры

Что сознательно НЕ вошло в интеграцию палитры. Каждый пункт — кандидат на
свою задачу; здесь — суть, мотивация и точки в коде. Статус интеграции
самой палитры — INTEGRATION-STATUS.md.

## 1. Миграция canvas-примитивов со старого API

Старый API (`variant: 'primary' | 'secondary' | 'danger'`, `size: number`,
без передачи `theme`) падает на захардкоженные light-цвета: `BUTTON_THEME`
(`#1e88e5`), статичный `VIEW_COLORS` — в dark/HC такие контролы остаются
светлыми. Новый API (`view`, `buttonSize`, `theme` в опциях) темизирован
правильно через `buildButtonViewColors(theme.tokens)`.

Что делать: прогнать потребителей примитивов на новый API, затем либо
удалить старый (мажор, BREAKING CHANGE), либо научить fallback читать
токены. Точки: `TableGlide/lib/canvas/primitives/*` (deprecated-поля),
`cells/buttons/constants.ts` (`VIEW_COLORS` @deprecated),
`cells/buttons/colorResolvers.ts`.

## 2. Disabled-состояния canvas-контролов (нужен дизайнер)

Disabled-кнопки (`#E8EEF2`/`#8A959D`) и unchecked-чекбокс (белый фон,
`#485056B0` рамка) захардкожены light-значениями и не адаптируются к
dark/HC. Токен `disabled` удалён из контракта как неподтверждённый. Нужны
пары «токен × состояние» от дизайн-системы (вопрос поставлен в
INTEGRATION-STATUS, «Открытые вопросы», п. 6). Точка:
`cells/buttons/colorResolvers.ts`.

## 3. Canvas-состояние сохранённой ячейки (editedSuccessfully)

Ключи `editedSuccessfullyCell{Color,HoverColor,RowActiveHoverColor,
ActiveColor,ActiveHoverColor}` есть в палитре по всем темам, но
canvas-реализации нет: сохранённая ячейка красится только CSS-слоем
TableCanvas (`styles/cellStyle.ts`, класс `rdg-edited-successfully-cell`).
Перенести на per-cell тему тем же механизмом, что редактируемая ячейка
(`cell-fill-override`).

## 4. CI-проверка актуальности generated-файлов

Генераторы запускаются руками; забытый `npm run table-colors:palette` после правки `code/`
или обновления CSS-пакетов CI не поймает. Добавить шаг:
`emit` + `node generators/table-content-tokens/generate-content-tokens.js` +
`git diff --exit-code` по двум generated-файлам.

## 5. Снапшот-тест генератора цветов содержимого ячеек

`generators/table-content-tokens` не покрыт тестами: смена значений при обновлении
пакетов атомарной команды (SDDS) проходит незаметно. Минимум — снапшот `report.md`/пинов и
проверка «все ключи KEYS получили значения» (сейчас это только throw в
рантайме генератора).

## 6. Мёртвые/неподтверждённые ключи токенов

Не используются в коде: `dataTeal`, `onDarkTextPrimary96/56/28`,
`textTertiaryBase/Variant` (алиасы text-tertiary), `fadeWhite`/`fadeGray`
(палитра). Либо подтвердить у дизайнера и подключить, либо удалить из
контрактов. Список происхождений — `generators/table-content-tokens/report.md`.

## 7. Симметрия раскладки токенов

`table-colors.generated.ts` лежит в `TableGlide/theming/`, а
`content-tokens.generated.ts` + `tokens.ts` — в корне `TableGlide/`.
Перенести вторую пару в `theming/` (churn импортов, делать отдельно).

## 8. Артефакты при дробном масштабе экрана (DPR 1.25 / 1.5 / 2.5)

Линии сетки разной светлости, заливка «наезжает» на соседнюю колонку, зазор
1px у крайней колонки шапки — всё при масштабе ОС или зуме браузера с
дробным DPR. Отдельная задача в репозитории форка Glide Data Grid:
`plans/fractional-dpr.md` (симптомы, причина, попытка исправления,
открытые вопросы). В интеграцию палитры сознательно не вошло: исправление
меняло масштаб отрисовки и висело на уже используемом флаге
`enableLowDprHairline`.

## 9. Удаление deprecated-пропа checkboxVisibleRowIndexes

На цвет больше не влияет (@deprecated в types.ts). Удалить проп по всей
цепочке TableCanvas → TableGlide в следующем мажоре.

## 10. Скелетон загрузки в ячейках не следует теме

Градиент и запасной цвет скелетона заданы как тёмная полупрозрачность
`rgba(8, 8, 8, …)` под светлый фон, поэтому в тёмной и контрастной темах
скелетон почти не виден. Что делать: брать цвета из токенов темы, как у
бейджей (`buildBadgeViewColors(tokens)`), — передавать `theme` в опции
примитива. Скорее всего хватит прозрачных `surface-transparent-*` из
тем; если нет — вопрос дизайнеру. Точка:
`TableGlide/lib/canvas/primitives/CanvasSkeleton.ts`
(`DEFAULT_FALLBACK_COLOR`, `DEFAULT_GRADIENT`, `DEFAULT_GRADIENT_LIGHTER`).
