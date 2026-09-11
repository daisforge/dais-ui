import{j as e}from"./react-D2T61mpp.js";import{cc as o,cd as s,c6 as l}from"./vendor-BSh-q9Ou.js";import{S as r}from"./TableCanvas.selectingRow.simple.stories-Bd3ggKU1.js";import"./react-is-Clcustum.js";import"./styled-components-CbgoXU45.js";import"./@tanstack/react-virtual-D4DYTxIh.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-CavNiRmo.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D9NWFDEQ.js";import"./FiltersActions-DWCdugaM.js";import"./IconButton-CJw7yEkJ.js";import"./@salutejs/plasma-icons-BrsFlXba.js";import"./@salutejs/sdds-finai-BkbdvS5g.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CnArmH7g.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Bg7shm0b.js";import"./TextField-VB4WAPL1.js";import"./sharedUtilsInputs-COjFvFwZ.js";import"./AnalyticalWidget-BTQ0VNFn.js";import"./Collapse-DJBsDA9p.js";import"./Table-rHnSGp-o.js";import"./react-data-grid-CC8ALFI1.js";import"./TableTabs-RalHP3o0.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-Col2MVTv.js";import"./ListOfFilters-D8GazY7Y.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-v4lYr5cP.js";import"./EmptyState-G7_pvWiP.js";import"./MassActions-DJUm5kFh.js";import"./Autocomplete-C0nsjXn5.js";import"./TableGlide-BcKEiC_p.js";import"./@glideappsfinal/glide-data-grid-XDUil1-6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DWE_MJAa.js";function c(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r,name:"Docs"}),`
`,e.jsx(n.h1,{id:"selecting-row",children:"Selecting Row"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"tableConfig.selecting"})}),`
`,e.jsx(n.p,{children:"Выбор строк таблицы с помощью чекбоксов."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Управляемое состояние через ",e.jsx(n.code,{children:"ReadonlySet<string | number>"})]}),`
`,e.jsxs(n.li,{children:["Кнопка переключения видимости в control block (",e.jsx(n.code,{children:"showInControl: true"}),")"]}),`
`,e.jsxs(n.li,{children:["Контроль на уровне строк: ",e.jsx(n.code,{children:"rowCheckboxDisabled"}),", ",e.jsx(n.code,{children:"rowShowCheckbox"})]}),`
`,e.jsxs(n.li,{children:["Поддержка иерархических таблиц через ",e.jsx(n.code,{children:"selectingRules.levels"})]}),`
`,e.jsxs(n.li,{children:["Кастомизация summary-чекбокса через ",e.jsx(n.code,{children:"summaryChecked"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rowKeyGetter"})," должен возвращать уникальный идентификатор строки"]}),`
`,e.jsxs(n.li,{children:["В иерархических таблицах ",e.jsx(n.code,{children:"selectingRules.levels"})," определяет, на каких уровнях доступен выбор"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rowGetStates"})," позволяет полностью переопределить логику чекбоксов (checked, indeterminate, disabled)"]}),`
`,e.jsx(n.li,{children:"Accent-кнопки в mass action panel всегда видимы при компрессии"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах и пропсах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-selecting-api--docs",children:"Selecting API"})]}),`
`]}),`
`,e.jsxs(n.h2,{id:"выделение-колонок--tableconfigcellsselection",children:["Выделение колонок — ",e.jsx(n.code,{children:"tableConfig.cellsSelection"})]}),`
`,e.jsxs(n.p,{children:["Отдельный от чекбоксов механизм: выделение ",e.jsx(n.strong,{children:"колонок"}),` кликом по шапке. Не зависит
от `,e.jsx(n.code,{children:"highlightActiveType"})," — самостоятельная ось взаимодействия. По умолчанию включено."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"enableColumnSelection"})}),` — клик по шапке выделяет колонку. Ctrl/Cmd —
добавить/убрать колонку, Shift — диапазон. Клик по иконкам сортировки/фильтрации
в шапке выделение не вызывает. Поддерживается copy/paste по выделенным колонкам.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"enableSelectAll"})}),` — клик по «нулевой» ячейке (шапка колонки нумерации, левый
верхний угол) выделяет всю таблицу целиком: все строки данных по всем колонкам.
Поддерживает copy/paste. Требует включённой нумерации (`,e.jsx(n.code,{children:"rowMarkers"}),`) и активного
`,e.jsx(n.code,{children:"cellsSelection.mode"}),". По умолчанию включено."]}),`
`]}),`
`,e.jsx(n.h3,{id:"как-читать-состояние-выделения",children:"Как читать состояние выделения"}),`
`,e.jsxs(n.p,{children:[`Выделенные колонки приходят в обычный коллбэк
`,e.jsx(n.code,{children:"tableConfig.onGridSelectionChange(selection)"})," в поле ",e.jsx(n.code,{children:"selection.columns"}),`
(`,e.jsx(n.code,{children:"CompactSelection"}),`, индексы колонок). Ячейки/диапазоны — там же в
`,e.jsx(n.code,{children:"selection.current"}),"."]}),`
`,e.jsxs(n.p,{children:["Чекбоксный выбор строк (",e.jsx(n.code,{children:"tableConfig.selecting"}),`) — независимый механизм со своим
состоянием и коллбэками, с этим API не пересекается.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Типы — раздел ",e.jsx(n.code,{children:"CellsSelectionConfig"})," в ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-selecting-api--docs",children:"Selecting API"})]}),`
`]}),`
`,e.jsx(l,{})]})}function Q(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}export{Q as default};
