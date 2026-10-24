import{j as e}from"./react-D2T61mpp.js";import{cf as n,cg as s,c9 as t}from"./vendor-DnDSWXZp.js";import{S as c}from"./Table.selectingRow.simple.stories-CNxI4-QC.js";import"./react-is-Clcustum.js";import"./styled-components-BHCrftsO.js";import"./@tanstack/react-virtual-D2eulUeh.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DZWWj7kc.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-DQi9V3hW.js";import"./FiltersActions-REkYA2X1.js";import"./IconButton-IeBG6-BU.js";import"./@salutejs/plasma-icons-CxpsFhG7.js";import"./@salutejs/sdds-finai-DhU84HZ-.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-0yALu2Tm.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-GRnm6o6Z.js";import"./TextField-DWqheSud.js";import"./sharedUtilsInputs-DLvuv6GE.js";import"./AiAgentPopup-CENykg0E.js";import"./TextArea-BZ0Lh9Wx.js";import"./sharedUtilsResizable-CxEzh5su.js";import"./Collapse-BgrMiXmx.js";import"./react-data-grid-DPj_9NHZ.js";import"./TableTabs-gHvccYP8.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-bitWKrrg.js";import"./@glideappsfinal/glide-data-grid-BCMtefMT.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-pESxmKP0.js";import"./ListOfFilters-Bt_OuXmu.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DnrBFkRy.js";import"./EmptyState-Gd05DZwY.js";import"./MassActions-B2tdg_cN.js";import"./Autocomplete-Babm0b9U.js";function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,name:"Docs"}),`
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
`,e.jsx(t,{})]})}function T(o={}){const{wrapper:i}={...n(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{T as default};
