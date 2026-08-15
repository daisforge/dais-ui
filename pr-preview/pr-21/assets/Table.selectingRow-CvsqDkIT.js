import{j as e}from"./react-D2T61mpp.js";import{c2 as r,c3 as s,bY as c}from"./vendor-C4RvRB9Y.js";import{S as t}from"./Table.selectingRow.simple.stories-Dj_R-_Oy.js";import"./react-is-Clcustum.js";import"./styled-components-DRZWVImu.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-Cj9EyiOP.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-CcVd51Ex.js";import"./FiltersActions-CeAliSyJ.js";import"./IconButton-DUuS8DE3.js";import"./@salutejs/plasma-icons-CVXIcC6c.js";import"./@salutejs/sdds-finai-DEWlHYGQ.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-BZKe53yj.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Vq8Q3-WK.js";import"./TextField-OOvhELJT.js";import"./sharedUtilsInputs-_J_Qe5za.js";import"./AnalyticalWidget-CEnZM3OP.js";import"./Collapse-CXHRqKRE.js";import"./react-data-grid-dZcAYnhL.js";import"./TableTabs-DP2cFwdJ.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-qKKeuHem.js";import"./ListOfFilters-CVgvyuFB.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BAo9Apt7.js";import"./EmptyState-Jej8pens.js";import"./MassActions-_PtZmAgO.js";import"./Autocomplete-BzEdXM5d.js";function n(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
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
`,e.jsxs(i.li,{children:["Полное переопределение логики через ",e.jsx(i.code,{children:"rowGetStates"})]}),`
`]}),`
`,e.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"rowKeyGetter"})," должен возвращать уникальный идентификатор строки"]}),`
`,e.jsxs(i.li,{children:["В иерархических таблицах ",e.jsx(i.code,{children:"selectingRules.levels"})," определяет, на каких уровнях доступен выбор"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"summaryChecked"})," позволяет кастомизировать логику «Выбрать все»"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"rowGetStates"})," переопределяет ",e.jsx(i.code,{children:"checked"}),", ",e.jsx(i.code,{children:"indeterminate"}),", ",e.jsx(i.code,{children:"showCheckbox"}),", ",e.jsx(i.code,{children:"checkboxDisabled"})," для каждой строки"]}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Подробнее о типах и пропсах — ",e.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-selectingrow-api--docs",children:"Selecting Row API"})]}),`
`]}),`
`,e.jsx(c,{})]})}function Y(o={}){const{wrapper:i}={...r(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(n,{...o})}):n(o)}export{Y as default};
