import{j as e}from"./react-D2T61mpp.js";import{c4 as o,c5 as s,b_ as l}from"./vendor-DrvHogBM.js";import{S as r}from"./TableCanvas.selectingRow.simple.stories-DOGcgRop.js";import"./react-is-Clcustum.js";import"./styled-components-C32trI5d.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-Dyp-m10i.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BzdQHG7o.js";import"./FiltersActions-4RoHiAyT.js";import"./IconButton-D60xgR-Q.js";import"./@salutejs/plasma-icons-BnddfUBU.js";import"./@salutejs/sdds-finai-CDRzBbTc.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./utils-D_Y70ijK.js";import"./constants-OzzdGdGS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-ChBl0Qym.js";import"./TextField-by6ErzMv.js";import"./sharedUtilsInputs-dD0rNwly.js";import"./AnalyticalWidget-Wj7S5_Z8.js";import"./Collapse-CZI72KSB.js";import"./Table-Dq1UNsZq.js";import"./react-data-grid-DJzz0yCj.js";import"./TableTabs-Chg9VzPh.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CtjQMxnt.js";import"./ListOfFilters-DGvhrxSe.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-ByFlNk9E.js";import"./EmptyState-Ct79dYmy.js";import"./MassActions-C5T09h45.js";import"./Autocomplete-CxPSUBup.js";import"./TableGlide-Ddggh5pi.js";import"./@glideappsfinal/glide-data-grid-BhHsP7bE.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BIkVbSCJ.js";function c(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r,name:"Docs"}),`
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
`,e.jsx(l,{})]})}function O(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}export{O as default};
