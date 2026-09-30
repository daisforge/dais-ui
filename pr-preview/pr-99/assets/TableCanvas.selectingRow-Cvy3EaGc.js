import{j as e}from"./react-D2T61mpp.js";import{cg as o,ch as s,ca as l}from"./vendor-UFIhjNPk.js";import{S as r}from"./TableCanvas.selectingRow.simple.stories-CC7z-U1X.js";import"./react-is-Clcustum.js";import"./styled-components-vJ5gF4dv.js";import"./@tanstack/react-virtual-CflRcPU8.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DMJIpEmh.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-xjZ2J5tT.js";import"./FiltersActions-m0G4p300.js";import"./IconButton-DDMC6EAF.js";import"./@salutejs/plasma-icons-B7nkY3-R.js";import"./@salutejs/sdds-finai-Dfshpr1a.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-C8O2K0LF.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Vd46RZiz.js";import"./TextField-D1TMsBSe.js";import"./sharedUtilsInputs-B_G63hni.js";import"./AnalyticalWidget-D2OyqWVD.js";import"./Collapse-BP0DHnDC.js";import"./Table-BNxqISqq.js";import"./react-data-grid-DQyPhxFA.js";import"./TableTabs-BUGlZDFV.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DsB7mngZ.js";import"./ListOfFilters-CvruXlRn.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CHRsLV0g.js";import"./EmptyState-CZu6aIJN.js";import"./MassActions-CTyl32S0.js";import"./Autocomplete-MMmmtVKM.js";import"./TableGlide-B-BBfNaF.js";import"./@glideappsfinal/glide-data-grid-9gK3tEdd.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DiVyJQW9.js";function c(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r,name:"Docs"}),`
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
