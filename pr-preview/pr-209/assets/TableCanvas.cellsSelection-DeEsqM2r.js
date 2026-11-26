import{j as e}from"./react-UEdzNlUe.js";import{df as c}from"./vendor-DTHFTCxs.js";import{M as i,S as r}from"./WithTooltip-KJL26V4Q-BXoGQxXq.js";import{C as o}from"./TableCanvas.cellsSelection.stories-CtEU2C93.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BDqbx52B.js";import"./@tanstack/react-virtual-Cc6cMCGC.js";import"./preload-helper-DjLIBw6y.js";import"./index-Cu4lwwaE.js";import"./index-D2sVbA6U.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-C4ZQkz7b.js";import"./StoryHint-BUaqSKKR.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BGZk-FTG.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-7MphdwvM.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B8Iabp4m.js";import"./@salutejs/plasma-icons-BF2rNVOT.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-Cpse2u-_.js";import"./Box-CAVr5OBu.js";import"./Collapse-C9SIU-FL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-CTGBfVd9.js";import"./@daisforge/glide-data-grid-D97_453q.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-qleR1gEq.js";import"./sharedUiSearch-CJDRPGoT.js";import"./TextField-1F9j25NL.js";import"./sharedUtilsInputs-BX82Dwrc.js";import"./Typography-CXQH0VfO.js";import"./ListOfFilters-hkoNcwhI.js";import"./FiltersActions-DfnVy1lY.js";import"./IconButton-De4CLxay.js";import"./Tooltip-B481aNNP.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B3DTr_Ly.js";import"./NumberFormat-DolH7SCh.js";import"./EmptyState-DUp-5WGM.js";import"./unidentified@3x-BWP3gjky.js";import"./ErrorPage-3JT73K9u.js";import"./Autocomplete-C6r0ozmF.js";function s(l){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o,name:"Docs"}),`
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
`,e.jsx(r,{})]})}function ce(l={}){const{wrapper:n}={...c(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(s,{...l})}):s(l)}export{ce as default};
