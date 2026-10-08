import{j as e}from"./react-D2T61mpp.js";import{cg as r,ch as t,ca as s}from"./vendor-DeTnNj4Y.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-BoBgeiyq.js";import"./react-is-Clcustum.js";import"./styled-components-DdokC5aN.js";import"./@tanstack/react-virtual-De5X9U1Y.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Dn3tfWr8.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-jn5O-zoQ.js";import"./FiltersActions-BOhkYRWC.js";import"./IconButton-CiN1tqM5.js";import"./@salutejs/plasma-icons-DO39JMB0.js";import"./@salutejs/sdds-finai-CR2jG7gG.js";import"./@salutejs/sdds-themes-qyCoD_pW.js";import"./utils-CnqbZkiM.js";import"./constants-DI5pidOH.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DX5ST7G7.js";import"./TextField-Dr5BOjh4.js";import"./sharedUtilsInputs-DMjRfQ_3.js";import"./AnalyticalWidget-_Usa-H1c.js";import"./Collapse-CfczhZGb.js";import"./Table-DdyMGdwT.js";import"./react-data-grid-hjNugmjj.js";import"./TableTabs-B8A6oUgt.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DxWLNWqW.js";import"./ListOfFilters-B36bCL_T.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-dFRrOuxH.js";import"./EmptyState-DWWHkzJG.js";import"./MassActions-CfwEqYJq.js";import"./Autocomplete-1PW07WU4.js";import"./TableGlide-qhhQfs6u.js";import"./@glideappsfinal/glide-data-grid-CAo2RqHF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CDm9rAI0.js";function o(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function T(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{T as default};
