import{j as e}from"./react-D2T61mpp.js";import{cf as n,cg as t,c9 as s}from"./vendor-BBRwy0t2.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-BYGbyeoW.js";import"./react-is-Clcustum.js";import"./styled-components-CfSii9H4.js";import"./@tanstack/react-virtual-BGPVwFH0.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-0wZYW6u5.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BCa1FVUv.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BOrhfGN8.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CFzxfIrR.js";import"./@salutejs/plasma-icons-BOHkKNG4.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BP_YQJ3j.js";import"./IconButton-CzRzITs0.js";import"./Box-n-WFuYAo.js";import"./TextField-C73SGu0h.js";import"./sharedUtilsInputs-CxMeDo3K.js";import"./AiAgentPopup-CRP7YTKI.js";import"./TextArea-K5M1FeNO.js";import"./sharedUtilsResizable-CJPklFyL.js";import"./Table-CbnQP3AE.js";import"./Collapse-vFTRrVGh.js";import"./react-data-grid-B3Kmg-0Y.js";import"./TableTabs-CJUqjSUo.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BFp-k6ER.js";import"./@glideappsfinal/glide-data-grid-BugNyQcG.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-C_HzZGn7.js";import"./ListOfFilters-BsrJFRy3.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bn0Kk5k4.js";import"./EmptyState-xrMnq09n.js";import"./MassActions-istHT2l1.js";import"./Autocomplete-giTViuxQ.js";import"./ErrorPage-C793OGXz.js";function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
