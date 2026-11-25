import{j as e}from"./react-UEdzNlUe.js";import{dd as s}from"./vendor-D2r4jgZf.js";import{M as i,S as r}from"./WithTooltip-KJL26V4Q-BRGrnt4v.js";import{C as o}from"./TableCanvas.cellsSelection.stories-T7picnv5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-C6Uw7ovB.js";import"./@tanstack/react-virtual-CK8aghAq.js";import"./preload-helper-ByAByWgw.js";import"./index-Cu4lwwaE.js";import"./index-Bo2kqA7A.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-DfMfxqA4.js";import"./StoryHint-BUaqSKKR.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BJ5dOzj4.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-DSJLiokB.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-mlEHigyJ.js";import"./@salutejs/plasma-icons-CWYH4jgn.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-DNoHAM3Q.js";import"./Box-Dwqy9xB3.js";import"./Collapse-CfxT3MfK.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DzGLLotI.js";import"./@daisforge/glide-data-grid-BxeGd1ye.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./lodash.isequal-mFNAsUE8.js";import"./TableTabs-sXTgrZFv.js";import"./sharedUiSearch-CslEffuB.js";import"./TextField-D1vs_4gQ.js";import"./sharedUtilsInputs-vGW80U8K.js";import"./TypographyWithAutoTooltip-C6LiYAcO.js";import"./Typography-BcqUTUcc.js";import"./ListOfFilters-B7DZihLq.js";import"./Table-DOwlBo5I.js";import"./react-data-grid-CAmlt0FZ.js";import"./Combobox-DpIc9uqy.js";import"./NumberFormat--slBuKRg.js";import"./EmptyState-0vCaYrOx.js";import"./unidentified@3x-Dft7iYeR.js";import"./MassActions-r2D6mFkK.js";import"./Autocomplete-BQvgClIG.js";import"./FiltersActions-D1vLMpAf.js";import"./IconButton-Dl3DqcX6.js";import"./TooltipList-CeWvqtLg.js";import"./ErrorPage-Zf_P8D2p.js";function c(l){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o,name:"Docs"}),`
`,e.jsx(n.h1,{id:"cellsselection",children:"CellsSelection"}),`
`,e.jsxs(n.p,{children:["Выделение в таблице задаётся пропом ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"tableConfig.cellsSelection.mode"})}),` — это
фактическое нативное выделение ячеек. По нему работают copy/paste, рамка
выделения, fill-handle и затемнение шапки/нумерации.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Это ",e.jsx(n.strong,{children:"отдельная ось"})," от ",e.jsx(n.code,{children:"highlightActiveType"}),` (визуальная подсветка строки) и
от `,e.jsx(n.code,{children:"selecting"})," (выбор строк чекбоксами)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"значения-cellsselectionmode",children:"Значения cellsSelection.mode"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'range-cell'"})," — выделение диапазона ячеек (по умолчанию). Тянем мышкой."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'multi-range-cell'"})," — как ",e.jsx(n.code,{children:"range-cell"}),", но ",e.jsx(n.strong,{children:"Ctrl/Cmd"}),` докидывает несколько
диапазонов (см. ниже).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'cell'"})," — выделение одной ячейки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'disabled'"})," — выделение ячеек отключено."]}),`
`]}),`
`,e.jsx(n.h2,{id:"что-происходит-при-смене-данных",children:"Что происходит при смене данных"}),`
`,e.jsxs(n.p,{children:[`При сортировке, поиске, фильтрации и группировке таблица снимает диапазон.
Чтобы сохранить активную ячейку той же записи, укажите постоянный ключ строки.
Если `,e.jsx(n.code,{children:"cellsSelection.rowKeyGetter"})," отсутствует, таблица ищет ключ в ",e.jsx(n.code,{children:"editing"}),", ",e.jsx(n.code,{children:"selecting"}),`,
`,e.jsx(n.code,{children:"subRows"}),", ",e.jsx(n.code,{children:"mergeCells"}),", затем в ",e.jsx(n.code,{children:"rowsGrouping"}),". Без ключа обновление ",e.jsx(n.code,{children:"rows"}),` новыми объектами
сохраняет прежние координаты, пока они существуют. Явная смена критерия снимает выбор ячейки.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TableCanvas
  rows={rows}
  columnConfig={columns}
  tableConfig={{
    cellsSelection: { rowKeyGetter: row => row.id },
  }}
/>
`})}),`
`,e.jsxs(n.p,{children:[`Если сервер отвечает на сортировку позже, ячейка переместится при получении строк.
При смене `,e.jsx(n.code,{children:"pagination.value"})," или ",e.jsx(n.code,{children:"pagination.perPage"}),` сбрасывается и активная ячейка.
Строки, отмеченные чекбоксами, остаются в состоянии `,e.jsx(n.code,{children:"selecting"}),`.
При сортировке и фильтрации выбор целой колонки, нескольких колонок через Ctrl/Cmd
или всей таблицы сохраняется по колонкам и охватывает новое число строк.
`,e.jsx(n.code,{children:"cellsSelection.onChange"}),` сообщает также об автоматическом переносе и сбросе.
Если активная строка исчезла при сворачивании дерева или группы, выделение очищается.
Активная итоговая строка сохраняет свой номер внутри блока итогов.`]}),`
`,e.jsxs(n.p,{children:[`При редактировании или дозагрузке в конец диапазон сохраняется, пока на выбранных
позициях остаются те же записи. Для фонового обновления серверных данных можно
передать `,e.jsx(n.code,{children:"cellsSelection.dataRevision"}),`. Меняйте версию вместе с результатом запроса,
при изменении порядка или состава данных, затрагивающем выделение. При той же версии
таблица проверяет ключ активной записи и доверяет порядку остальных строк диапазона.`]}),`
`,e.jsxs(n.p,{children:["Внешние фильтры и пагинация, которыми продукт управляет вне ",e.jsx(n.code,{children:"tableConfig"}),`, требуют явного
сигнала. Измените `,e.jsx(n.code,{children:"dataRevision"}),`, если активная запись по-прежнему определяется тем же ID.
Если на другой вкладке или у другого родителя ID начинаются заново, используйте составной
ключ записи (например, `,e.jsx(n.code,{children:"JSON.stringify([parentId, row.id])"}),`) или перемонтируйте таблицу через
React `,e.jsx(n.code,{children:"key={parentId}"}),". Смена версии сама по себе не различает две записи с одинаковым ID."]}),`
`,e.jsxs(n.p,{children:["Смена режима на ",e.jsx(n.code,{children:"cell"})," оставляет активную ячейку, переход на ",e.jsx(n.code,{children:"range-cell"}),` снимает
дополнительные диапазоны, а `,e.jsx(n.code,{children:"disabled"}),` очищает выделение. Если во время ввода или
протяжки координаты начинают указывать на другие данные, операция отменяется.`]}),`
`,e.jsx(n.p,{children:`При перестановке или закреплении колонок таблица сама переносит диапазон по ключам.
Если основной диапазон потерял колонку или перестал быть смежным, останется только
активная ячейка, пока её колонка видима. В режиме мультивыбора каждый дополнительный
диапазон переносится отдельно. Если разорвался только он, остальные сохраняются.`}),`
`,e.jsx(n.h3,{id:"где-посмотреть-примеры-и-код",children:"Где посмотреть примеры и код"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#anchor--%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsselection--server-sort",children:"Серверная сортировка"})," показывает, как сохранить активную запись до и после ответа сервера."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#anchor--%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsselection--projection-reset-demo",children:"Смена страницы и обновление данных"})," показывает, когда менять ",e.jsx(n.code,{children:"dataRevision"})," и как сохранить выбор при фоновом обновлении."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#anchor--%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsselection--column-break-diagnostic",children:"Скрытие и перестановка колонок"})," показывает, что происходит с рамкой при изменении видимых колонок."]}),`
`]}),`
`,e.jsx(n.h2,{id:"мультивыбор-диапазонов-multi-range-cell",children:"Мультивыбор диапазонов (multi-range-cell)"}),`
`,e.jsxs(n.p,{children:["При ",e.jsx(n.code,{children:"cellsSelection: { mode: 'multi-range-cell' }"}),` можно выделить несколько прямоугольных
диапазонов: тянем мышкой первый, затем `,e.jsx(n.strong,{children:"Ctrl/Cmd + клик/драг"}),` докидываем
остальные. Заливка — у всех выделенных, рамка — только у последнего диапазона.
Рамку у каждого диапазона включает `,e.jsx(n.code,{children:"cellsSelection.outlineEachRange"}),` (как в Google
Sheets): диапазон, целиком поглощённый более поздним, не обводится, у соседних
диапазонов на стыке остаётся общая линия.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Copy (Ctrl+C)"})," работает для разрозненного выбора, если все ячейки лежат:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["в пределах ",e.jsx(n.strong,{children:"одной колонки"}),` — значения копируются подряд, пустые промежутки
между ними схлопываются;`]}),`
`,e.jsxs(n.li,{children:["либо в пределах ",e.jsx(n.strong,{children:"одной строки"})," — аналогично по горизонтали;"]}),`
`,e.jsxs(n.li,{children:["либо куски складываются в ",e.jsx(n.strong,{children:"сплошной прямоугольник"}),` без дыр — тогда он
копируется как обычный диапазон.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Разброс сразу ",e.jsx(n.strong,{children:"по строкам и колонкам"}),` (2D) не переносится — copy/paste для него
не срабатывают. Об этом таблица сообщает через модуль
`,e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-notifications--docs",children:"Notifications"}),`
(`,e.jsx(n.code,{children:"copy"})," / ",e.jsx(n.code,{children:"paste"}),", code ",e.jsx(n.code,{children:"multi-range-scattered"}),`). Сама таблица тост не рисует:
подключите `,e.jsx(n.code,{children:"notifications.onNotification"}),` и покажите ошибку пользователю — иначе
отказ копирования выглядит как молчаливая поломка.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Paste (Ctrl+V)"}),` зеркально: вставка идёт в выбранные ячейки подряд, схлопывая
промежутки. Полный интерактивный пример copy/paste — в разделе
`,e.jsx(n.strong,{children:"Copy-Paste-Fill"}),"."]}),`
`,e.jsx(n.h2,{id:"оси-выделения",children:"Оси выделения"}),`
`,e.jsxs(n.p,{children:[`Выделение работает по трём независимым осям. Любая из них поддерживает
copy/paste (`,e.jsx(n.strong,{children:"Ctrl+C / Ctrl+V"}),") по текущему выделению."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ячейки / диапазон"})," — мышью по области данных, зависит от ",e.jsx(n.code,{children:"cellsSelection.mode"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Колонки"})," — клик по шапке колонки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Строки"})," — клик/драг по колонке нумерации (",e.jsx(n.code,{children:"rowMarkers"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"выделение-колонок",children:"Выделение колонок"}),`
`,e.jsx(n.p,{children:"Клик по шапке выделяет колонку целиком:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Клик"})," — одна колонка."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shift + клик"})," — смежный диапазон колонок (рисуется нативно, с fill-handle)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ctrl/Cmd + клик"})," — несмежный выбор: добавить/убрать колонку."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Клик по иконкам сортировки/фильтрации в шапке выделение ",e.jsx(n.strong,{children:"не"}),` вызывает.
Управляется флагом `,e.jsx(n.code,{children:"cellsSelection.enableColumnSelection"})," (по умолчанию ",e.jsx(n.code,{children:"true"}),")."]}),`
`,e.jsx(n.h3,{id:"выделение-строк",children:"Выделение строк"}),`
`,e.jsx(n.p,{children:"Клик/драг по колонке нумерации выделяет строку(и):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Клик / драг"})," — смежный диапазон строк (рисуется нативно, с fill-handle)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ctrl/Cmd + клик"})," — несмежный выбор отдельных строк."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Требует включённой колонки нумерации (",e.jsx(n.code,{children:"rowMarkers"}),`). Управляется флагом
`,e.jsx(n.code,{children:"cellsSelection.enableRowSelection"})," (по умолчанию ",e.jsx(n.code,{children:"true"}),")."]}),`
`,e.jsx(n.h2,{id:"включение--выключение-осей",children:"Включение / выключение осей"}),`
`,e.jsxs(n.p,{children:["Выделение колонок и строк можно выключать независимо через ",e.jsx(n.code,{children:"tableConfig.cellsSelection"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`<TableCanvas
  tableConfig={{
    rowMarkers: { startIndex: 1 },
    cellsSelection: {
      enableColumnSelection: false, // клик по шапке не выделяет колонку
      enableRowSelection: false, // клик по нумерации не выделяет строку
    },
  }}
/>
`})}),`
`,e.jsxs(n.p,{children:["Оба флага по умолчанию ",e.jsx(n.code,{children:"true"}),`. Выделение ячеек/диапазона при этом продолжает
работать — оно управляется отдельным `,e.jsx(n.code,{children:"cellsSelection.mode"}),"."]}),`
`,e.jsx(n.h2,{id:"controlled-режим",children:"Controlled-режим"}),`
`,e.jsxs(n.p,{children:["Выделением можно управлять снаружи через ",e.jsx(n.code,{children:"state"}),"-кортеж:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const gridSelectionState = useState<GridSelection>(EMPTY_SELECTION);

<TableCanvas
  tableConfig={{
    cellsSelection: { mode: 'range-cell', state: gridSelectionState }, // [value, setter]
  }}
/>;
`})}),`
`,e.jsxs(n.p,{children:["Сброс: ",e.jsx(n.code,{children:"setter({ current: undefined, rows: CompactSelection.empty(), columns: CompactSelection.empty() })"}),`.
Контролируется нативное выделение (ячейки/диапазон/смежные строки и колонки);
несмежный Ctrl-выбор колонок/строк — внутренний (own-state), снаружи не задаётся.`]}),`
`,e.jsxs(n.p,{children:["Итоговое выделение, включая несмежный Ctrl-выбор, приходит в ",e.jsx(n.code,{children:"cellsSelection.onChange"}),`
(с `,e.jsx(n.code,{children:"state"}),` и без него). Индексы колонок в нём — в координатах грида: служебные колонки
слева (нумерация `,e.jsx(n.code,{children:"rowMarkers"}),", чекбоксы ",e.jsx(n.code,{children:"selecting"}),`) входят в счёт, поэтому колонка,
`,e.jsx(n.code,{children:"i"}),"-я по порядку на экране, имеет индекс ",e.jsx(n.code,{children:"i"})," + число служебных колонок."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CompactSelection"})," и тип ",e.jsx(n.code,{children:"GridSelection"}),` реэкспортируются из
`,e.jsx(n.code,{children:"@daisforge/ui/components/TableCanvas"}),"."]}),`
`,e.jsx(n.h3,{id:"быстрое-выделение-на-больших-таблицах",children:"Быстрое выделение на больших таблицах"}),`
`,e.jsx(n.p,{children:`При смене выделения (клик, стрелки, протяжка диапазона) таблица перерисовывает только
прежнюю и новую область выделения, а при наведении мыши только строки под курсором, а не
весь экран. Так работает и controlled-режим, и любая перерисовка вашего компонента, если
данные и настройки таблицы при этом остались прежними, то есть теми же объектами.`}),`
`,e.jsxs(n.p,{children:[`Если на каждый рендер передавать новый массив, объект или функцию в перечисленное ниже,
таблица заново собирает колонки или содержимое ячеек и рисует весь экран. На нескольких
сотнях колонок это заметно: клики и стрелки отстают. Держите эти значения стабильными:
константа вне компонента, `,e.jsx(n.code,{children:"useMemo"})," или ",e.jsx(n.code,{children:"useCallback"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rows"}),", ",e.jsx(n.code,{children:"bottomSummaryRows"}),", ",e.jsx(n.code,{children:"columnConfig"}),", ",e.jsx(n.code,{children:"headerContextValue"}),", ",e.jsx(n.code,{children:"rowContextValue"}),";"]}),`
`,e.jsxs(n.li,{children:["в ",e.jsx(n.code,{children:"tableConfig"}),": ",e.jsx(n.code,{children:"selecting"}),", ",e.jsx(n.code,{children:"filtering"}),", ",e.jsx(n.code,{children:"borders"}),", ",e.jsx(n.code,{children:"stickyRows"}),", ",e.jsx(n.code,{children:"stickyColumns"}),`,
`,e.jsx(n.code,{children:"rowHeight"})," (если это функция), ",e.jsx(n.code,{children:"rowSize.onRowSizeChange"}),", ",e.jsx(n.code,{children:"mergeCells"}),`,
`,e.jsx(n.code,{children:"subRows.mergedColumns"}),", ",e.jsx(n.code,{children:"editing.rowErrors"}),", ",e.jsx(n.code,{children:"columnsControl.disablePinning"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Сам объект ",e.jsx(n.code,{children:"tableConfig"}),` можно собирать прямо в разметке: таблица смотрит на его поля.
Исключение: слияние строк вместе с отметкой строк чекбоксами, тогда весь `,e.jsx(n.code,{children:"tableConfig"}),`
передавайте через `,e.jsx(n.code,{children:"useMemo"}),". Обработчики событий (",e.jsx(n.code,{children:"cellsSelection.onChange"}),`,
`,e.jsx(n.code,{children:"onCellClicked"})," и другие) и функции ",e.jsx(n.code,{children:"subRows"})," (",e.jsx(n.code,{children:"getSubRows"}),", ",e.jsx(n.code,{children:"rowKeyGetter"}),`) на скорость
не влияют, их можно передавать как есть.`]}),`
`,e.jsxs(n.p,{children:[`Если выделение нужно только для действий (кнопки, экспорт), читайте его в
`,e.jsx(n.code,{children:"cellsSelection.onChange"})," и храните в ",e.jsx(n.code,{children:"useRef"}),`: так ваш компонент не будет
перерисовываться на каждый клик.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsselection-api--docs",children:"CellsSelection API"})]}),`
`]}),`
`,e.jsx(r,{})]})}function oe(l={}){const{wrapper:n}={...s(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(c,{...l})}):c(l)}export{oe as default};
