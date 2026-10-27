# Отдельные задачи после интеграции палитры

Что сознательно НЕ вошло в интеграцию палитры. Каждый пункт — кандидат на
свою задачу; здесь — суть, мотивация и точки в коде. Статус интеграции
самой палитры — INTEGRATION-STATUS.md.

## 1. Удаление старого API canvas-примитивов

Старый API (`variant: 'primary' | 'secondary' | 'danger'`, `size: number`)
теперь красится теми же видами из токенов темы, что новый (`view`), поэтому
в тёмной и контрастной темах выглядит правильно. Остаётся сам дубль API:
прогнать потребителей примитивов на `view`/`buttonSize` и удалить
deprecated-поля (мажор, BREAKING CHANGE). Точки:
`TableGlide/lib/canvas/primitives/*`, `cells/buttons/constants.ts`
(`LEGACY_VARIANT_VIEW`, deprecated `VIEW_COLORS`).

## 2. Нажатое состояние контролов в ячейках

Дизайнер дал токены `-active` для всех видов (ответ от 19.10.2026), но canvas-
ноды не отслеживают нажатие (есть только hover). Если понадобится — добавить
состояние pressed в `CanvasLeaf` и поля `bgColorActive`/`textColorActive` в
`ViewColors`.

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

Не используются в коде: `dataTeal` (ждёт `data-arctic-minor` в темах SDDS),
`onDarkTextPrimary96/56/28` (теперь токены темы по роли, оставлены для
потребителей `theme.tokens`), `textTertiaryBase/Variant` (алиасы
text-tertiary), `fadeWhite`/`fadeGray` (палитра). Либо подключить, либо
удалить из контрактов в мажоре. Список происхождений —
`generators/table-content-tokens/report.md`.

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

## 10. Зебра внутри объединённого блока

Блок красится целиком только в состояниях (hover, выбранная или отмеченная
строка); в покое строки зебры внутри блока по-прежнему рисуются полосами
(`computeSpanRowBgFills` в форке). Поведение не специфицировано — уточнить у
дизайнера и либо красить блок цветом его origin-строки, либо оставить.

## 11. Направление списка Select в объединённой ячейке

Список редактора Select раскрывается вверх, только если выравнивание по низу
задано на колонке (`mergedCellsAlign` колонки). Выравнивание по низу из общей
настройки (`mergeCells.mergedCellsAlign`, `rowsGrouping.mergedCellsAlign`) и из
региона редактор не видит, и список раскрывается вниз. Было и до прилипания.
Точка: `TableCanvas/feature-edit/CellEditorCombobox.tsx` (`placement`): брать
итоговое выравнивание блока, а не только колоночное.
