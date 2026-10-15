import{j as e}from"./react-D2T61mpp.js";import{cf as r,cg as t,c9 as s}from"./vendor-C8VuHz3V.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-B29tNyUw.js";import"./react-is-Clcustum.js";import"./styled-components-BpVVkBzC.js";import"./@tanstack/react-virtual-CcbeDy_e.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-B-riaFPz.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CdW5lLpC.js";import"./FiltersActions-BBJtG2uO.js";import"./IconButton-Cyh6jX5Y.js";import"./@salutejs/plasma-icons-98834dYt.js";import"./@salutejs/sdds-finai-Cz7rM39w.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-DPKiBQxU.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CcNAFjSN.js";import"./TextField-xGwV4-46.js";import"./sharedUtilsInputs-DulBkLnq.js";import"./AiAgentPopup-BOwjLeH4.js";import"./TextArea-DkKRutyA.js";import"./sharedUtilsResizable-k1DpAbyC.js";import"./Table-Cm1TIcJV.js";import"./Collapse-BFOVUS3J.js";import"./react-data-grid-B83SeY1o.js";import"./TableTabs-BQl_O17u.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BxObiBTx.js";import"./@glideappsfinal/glide-data-grid-DwMYPKa3.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CHikPvVh.js";import"./ListOfFilters-DVcNOz0_.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cn72JuoI.js";import"./EmptyState-BvkbGYoG.js";import"./MassActions-CuunVsGn.js";import"./Autocomplete-BLX4iX7d.js";import"./ErrorPage-B0chJuzn.js";function o(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
`,e.jsx(i.h1,{id:"selecting-row",children:"Selecting Row"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"tableConfig.selecting"})}),`
`,e.jsx(i.p,{children:"Выбор строк таблицы с помощью чекбоксов."}),`
`,e.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Управляемое состояние через ",e.jsx(i.code,{children:"ReadonlySet<string | number>"})]}),`
`,e.jsxs(i.li,{children:["Кнопка переключения видимости в control block (",e.jsx(i.code,{children:"showInControl: true"}),")"]}),`
`,e.jsxs(i.li,{children:["Контроль на уровне строк: ",e.jsx(i.code,{children:"rowCheckboxDisabled"}),", ",e.jsx(i.code,{children:"rowShowCheckbox"})]}),`
`,e.jsxs(i.li,{children:["Поддержка иерархических таблиц через ",e.jsx(i.code,{children:"selectingRules.levels"})]}),`
`,e.jsxs(i.li,{children:["Кастомизация summary-чекбокса через ",e.jsx(i.code,{children:"summaryChecked"})]}),`
`,e.jsxs(i.li,{children:["Ограничение числа в счётчике выбранных — ",e.jsx(i.code,{children:"summaryCounterMaxCount"})," (при превышении показывает «N+», например ",e.jsx(i.code,{children:"99+"}),"). См. ",e.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-selectingrow-countermaxcount--docs",children:"Ограничение счётчика (99+)"})]}),`
`]}),`
`,e.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"rowKeyGetter"})," должен возвращать уникальный идентификатор строки"]}),`
`,e.jsxs(i.li,{children:["В иерархических таблицах ",e.jsx(i.code,{children:"selectingRules.levels"})," определяет, на каких уровнях доступен выбор"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"rowGetStates"})," позволяет полностью переопределить логику чекбоксов (checked, indeterminate, disabled)"]}),`
`,e.jsx(i.li,{children:"Accent-кнопки в mass action panel всегда видимы при компрессии"}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Подробнее о типах и пропсах — ",e.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-selecting-api--docs",children:"Selecting API"})]}),`
`]}),`
`,e.jsx(s,{})]})}function V(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{V as default};
