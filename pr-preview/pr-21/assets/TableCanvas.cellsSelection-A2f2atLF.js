import{j as e}from"./react-D2T61mpp.js";import{c2 as i,c3 as c,bY as r}from"./vendor-C4RvRB9Y.js";import{C as o}from"./TableCanvas.cellsSelection.stories-CPpvcD70.js";import"./react-is-Clcustum.js";import"./styled-components-DRZWVImu.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-Cj9EyiOP.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Dm4TLh_W.js";import"./FiltersActions-CeAliSyJ.js";import"./IconButton-DUuS8DE3.js";import"./@salutejs/plasma-icons-CVXIcC6c.js";import"./@salutejs/sdds-finai-DEWlHYGQ.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-BZKe53yj.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Vq8Q3-WK.js";import"./TextField-OOvhELJT.js";import"./sharedUtilsInputs-_J_Qe5za.js";import"./AnalyticalWidget-CEnZM3OP.js";import"./Collapse-CXHRqKRE.js";import"./Table-CcVd51Ex.js";import"./react-data-grid-dZcAYnhL.js";import"./TableTabs-DP2cFwdJ.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-qKKeuHem.js";import"./ListOfFilters-CVgvyuFB.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BAo9Apt7.js";import"./EmptyState-Jej8pens.js";import"./MassActions-_PtZmAgO.js";import"./Autocomplete-BzEdXM5d.js";import"./TableGlide-CRNi9qT2.js";import"./@glideappsfinal/glide-data-grid-Y0XOACEz.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-Cqawd0as.js";function s(l){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o,name:"Docs"}),`
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
остальные. Заливка и рамка — у всех выделенных.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Copy (Ctrl+C)"})," работает для разрозненного выбора, если все ячейки лежат:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["в пределах ",e.jsx(n.strong,{children:"одной колонки"}),` — значения копируются подряд, пустые промежутки
между ними схлопываются;`]}),`
`,e.jsxs(n.li,{children:["либо в пределах ",e.jsx(n.strong,{children:"одной строки"})," — аналогично по горизонтали."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Разброс сразу ",e.jsx(n.strong,{children:"по строкам и колонкам"}),` (2D) не переносится — copy/paste для него
не срабатывают. Об этом таблица сообщает через модуль
`,e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-notifications--docs",children:"Notifications"}),`
(`,e.jsx(n.code,{children:"copy"})," / ",e.jsx(n.code,{children:"paste"}),", code ",e.jsx(n.code,{children:"multi-range-scattered"}),")."]}),`
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
/>;
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
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CompactSelection"})," и тип ",e.jsx(n.code,{children:"GridSelection"}),` реэкспортируются из
`,e.jsx(n.code,{children:"@daisforge/ui/components/TableCanvas"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsselection-api--docs",children:"CellsSelection API"})]}),`
`]}),`
`,e.jsx(r,{})]})}function H(l={}){const{wrapper:n}={...i(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(s,{...l})}):s(l)}export{H as default};
