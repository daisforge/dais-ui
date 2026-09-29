import{j as e}from"./react-D2T61mpp.js";import{cg as n,ch as s,ca as c}from"./vendor-9g8l4WhJ.js";import{S as t}from"./Table.selectingRow.simple.stories-BR8IMD4o.js";import"./react-is-Clcustum.js";import"./styled-components-5_LCUbRt.js";import"./@tanstack/react-virtual-DUbrwqLU.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DbolCT1d.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-CihN_Ugy.js";import"./FiltersActions-6Myt7UCq.js";import"./IconButton-4wcAmT5V.js";import"./@salutejs/plasma-icons-CsO0Zluk.js";import"./@salutejs/sdds-finai-DjrWBgCD.js";import"./@salutejs/sdds-themes-fAtV8uGh.js";import"./utils-CkhYkXt4.js";import"./constants-BPUyiI8r.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D4caT0cR.js";import"./TextField-BAclILVo.js";import"./sharedUtilsInputs-Dp3WFMli.js";import"./AnalyticalWidget-CJ71wkdw.js";import"./Collapse-C-rm69mB.js";import"./react-data-grid-DMDMtxY8.js";import"./TableTabs-BdyZZUUd.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-AOL6wSfo.js";import"./ListOfFilters-CSQmP3aD.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DJlG0jQy.js";import"./EmptyState-DFd5iowr.js";import"./MassActions-nIP7XP2J.js";import"./Autocomplete-IQSUzsnU.js";function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
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
