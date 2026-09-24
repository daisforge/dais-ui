import{j as e}from"./react-D2T61mpp.js";import{cg as n,ch as s,ca as c}from"./vendor-D08MglVR.js";import{S as t}from"./Table.selectingRow.simple.stories-DxvYI0PW.js";import"./react-is-Clcustum.js";import"./styled-components-CTFzLbM-.js";import"./@tanstack/react-virtual-CgIZ_wAz.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-UtH-duXE.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-Bz0VcykR.js";import"./FiltersActions-BglMhrgl.js";import"./IconButton-BsCV_e20.js";import"./@salutejs/plasma-icons-DyPj0Iee.js";import"./@salutejs/sdds-finai-DrIvEhSi.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-qtAWTuNG.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-K7Il2EkS.js";import"./TextField-B_DM-I_-.js";import"./sharedUtilsInputs-DWsZbv9S.js";import"./AnalyticalWidget-DAbx8ngp.js";import"./Collapse-PAHPVrsS.js";import"./react-data-grid-dIiI_upv.js";import"./TableTabs-zWNlykrc.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DRx_v0tk.js";import"./ListOfFilters-5o34Jur6.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CCa9xaNQ.js";import"./EmptyState-Cu5UyX-U.js";import"./MassActions-2bd3DErz.js";import"./Autocomplete-DEZhwBZw.js";function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t,name:"Docs"}),`
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
