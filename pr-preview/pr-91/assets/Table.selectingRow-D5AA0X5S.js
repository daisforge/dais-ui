import{j as e}from"./react-D2T61mpp.js";import{cg as n,ch as s,ca as c}from"./vendor-C4kmGUJR.js";import{S as t}from"./Table.selectingRow.simple.stories-QRBlW0RP.js";import"./react-is-Clcustum.js";import"./styled-components-igVELayG.js";import"./@tanstack/react-virtual-tAdAmKr0.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-esiRsg12.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-B_NO3wa_.js";import"./FiltersActions-C_evAAdS.js";import"./IconButton-D8PVEJQe.js";import"./@salutejs/plasma-icons-BG9F5Vsk.js";import"./@salutejs/sdds-finai-Cxh_KERn.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-BaEbit5C.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BwA95D7K.js";import"./TextField-D671LMS4.js";import"./sharedUtilsInputs-CBKMiSSI.js";import"./AnalyticalWidget-CINlP-vL.js";import"./Collapse-CBcJKqhO.js";import"./react-data-grid-DWBn58W3.js";import"./TableTabs-fBjSvvm5.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CVp-9zib.js";import"./ListOfFilters-DnTP6NK4.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BauwXdbL.js";import"./EmptyState-B2DNV60C.js";import"./MassActions-aIR-BycS.js";import"./Autocomplete-B057UQHf.js";function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
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
`,e.jsx(c,{})]})}function H(o={}){const{wrapper:i}={...n(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{H as default};
