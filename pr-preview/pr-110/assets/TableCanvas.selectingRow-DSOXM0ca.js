import{j as e}from"./react-D2T61mpp.js";import{cg as r,ch as t,ca as s}from"./vendor-DhFPxNwt.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-x1rVJyO6.js";import"./react-is-Clcustum.js";import"./styled-components-Blj1VwHW.js";import"./@tanstack/react-virtual-B2fq6_N4.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DKXq1eHG.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BNYLw0v4.js";import"./FiltersActions-DVTYmI38.js";import"./IconButton-DvQ1tldX.js";import"./@salutejs/plasma-icons-X_a4seaX.js";import"./@salutejs/sdds-finai-BzdTW8G7.js";import"./@salutejs/sdds-themes-BWS17lsS.js";import"./utils-BHm0P9eG.js";import"./constants-BEafpjqR.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CBhtoSJW.js";import"./TextField-CVxIFh2K.js";import"./sharedUtilsInputs-dD6uJww1.js";import"./AnalyticalWidget-BHS-n0MU.js";import"./Collapse-hiCfDbw-.js";import"./Table-D3Mvk2h2.js";import"./react-data-grid-BvfDth-i.js";import"./TableTabs-DqQe8YNO.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Yueak2A-.js";import"./ListOfFilters-BmsHOSeI.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C0a4gEQD.js";import"./EmptyState-Ype29n1-.js";import"./MassActions-CCyAAyfy.js";import"./Autocomplete-XU7YwDDC.js";import"./TableGlide-UFtt0wX6.js";import"./@glideappsfinal/glide-data-grid-B-vY1KbY.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DXUKIqwe.js";function o(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
