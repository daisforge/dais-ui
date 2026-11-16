import{j as e}from"./react-B60MRyL7.js";import{ck as s}from"./vendor-ABAm7dM9.js";import{M as r,S as c}from"./WithTooltip-KJL26V4Q-DVjM17Xc.js";import{C as o}from"./TableCanvas.cellsSelection.stories--OsoSxJE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-JDoewyqD.js";import"./@tanstack/react-virtual-aXadwhme.js";import"./preload-helper-Bmf6XQY_.js";import"./index-Cu4lwwaE.js";import"./index-OE46t0bk.js";import"./@salutejs/plasma-icons-BjqIpdkS.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-D6aow9No.js";import"./StoryHint-DpfMqrTN.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BYM9F2cJ.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./utils-CWW6sPYd.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-D8wK5fGe.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-DtotkDJi.js";import"./Box-bkXdsxp1.js";import"./Collapse-BC9SztdT.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BEGSzIOP.js";import"./@glideappsfinal/glide-data-grid-CC2fJ8Kz.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-OQAgfOXP.js";import"./TableTabs-BBnsWNxR.js";import"./sharedUiSearch-BTGm-BQU.js";import"./TextField-Bk21xWxf.js";import"./sharedUtilsInputs-DX1n1p66.js";import"./TypographyWithAutoTooltip-D5mVbAIF.js";import"./Typography-DnOGykbx.js";import"./ListOfFilters-Bm_cdHcX.js";import"./Table-Vzg6nvOG.js";import"./react-data-grid-a6lPhyw4.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BgS9GVK7.js";import"./NumberFormat-D7THTU7Y.js";import"./EmptyState-ClfQAY0j.js";import"./unidentified@3x-DeqHr2sH.js";import"./MassActions-xI-YnWfo.js";import"./Autocomplete-D4Dg924L.js";import"./FiltersActions-BbYrJGvd.js";import"./IconButton-CWgrxfM1.js";import"./TooltipList-CdTlGXww.js";import"./ErrorPage-C-8swpRG.js";function i(l){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o,name:"Docs"}),`
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
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-cellsselection-api--docs",children:"CellsSelection API"})]}),`
`]}),`
`,e.jsx(c,{})]})}function te(l={}){const{wrapper:n}={...s(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(i,{...l})}):i(l)}export{te as default};
