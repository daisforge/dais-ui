import{j as e}from"./react-D2T61mpp.js";import{cg as r,ch as t,ca as s}from"./vendor-DhPQnvNP.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-M8RnWuHP.js";import"./react-is-Clcustum.js";import"./styled-components-D2iYy2uM.js";import"./@tanstack/react-virtual-DonijgCh.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C8MKfFxP.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CvOPfgOa.js";import"./FiltersActions-DibAv--v.js";import"./IconButton-DbjMdgRP.js";import"./@salutejs/plasma-icons-Duq7ysyN.js";import"./@salutejs/sdds-finai-BD5fhF9i.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-CEczJKOt.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C5xCp2yD.js";import"./TextField-BW41bTBW.js";import"./sharedUtilsInputs-CS9oGklk.js";import"./AiAgentPopup-C39Gte9X.js";import"./TextArea-CLiSpBcI.js";import"./sharedUtilsResizable-4btFEOm_.js";import"./Table-CzOHdY6d.js";import"./Collapse-CeSlpnVB.js";import"./react-data-grid-CrmilZIk.js";import"./TableTabs-DJtpo5Ax.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-BCLB3Kaa.js";import"./ListOfFilters-6Ux0eegx.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Dnm7XiTX.js";import"./EmptyState-BqJbQCXL.js";import"./MassActions-DYvPAm57.js";import"./Autocomplete-CnntNRmV.js";import"./TableGlide-D_bsjbOq.js";import"./@glideappsfinal/glide-data-grid-DawffSjL.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-C8fgFy1y.js";function o(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
