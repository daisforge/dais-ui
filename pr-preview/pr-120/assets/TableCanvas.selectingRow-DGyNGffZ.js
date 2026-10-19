import{j as e}from"./react-D2T61mpp.js";import{cf as n,cg as t,c9 as s}from"./vendor-COwMm0za.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-DyMQNMf4.js";import"./react-is-Clcustum.js";import"./styled-components-CE-uo-6d.js";import"./@tanstack/react-virtual-Djp4Fi96.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CwPMLG6P.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-B3UXNUIT.js";import"./@salutejs/sdds-themes-Vr3JnkPl.js";import"./utils-DNQYxIkO.js";import"./constants-v5_v1I5t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-IQg76LzD.js";import"./@salutejs/plasma-icons-DTttYHJN.js";import"./sharedUtilsCopy-KuBTwnut.js";import"./FiltersActions-B4rd6DQ1.js";import"./IconButton-CcBBhSiV.js";import"./Box-KrQX0bHg.js";import"./TextField-DUu2W4KW.js";import"./sharedUtilsInputs-r7eF8f6G.js";import"./AiAgentPopup-B3AOKj3I.js";import"./TextArea-7Ax-7Aal.js";import"./sharedUtilsResizable-CfYaji3Z.js";import"./Table-LoiBTAsH.js";import"./Collapse-DgjnN8dP.js";import"./react-data-grid-Bohr1s08.js";import"./TableTabs-DG-QM4lW.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BTq0wMOr.js";import"./@glideappsfinal/glide-data-grid-oedSHeBc.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CVlK0W18.js";import"./ListOfFilters-Ddwho-dO.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DLKtafj0.js";import"./EmptyState-8hYOoc-8.js";import"./MassActions-CsK1iZLD.js";import"./Autocomplete-aE86xpUc.js";import"./ErrorPage-Dta04c5I.js";function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function W(o={}){const{wrapper:i}={...n(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{W as default};
