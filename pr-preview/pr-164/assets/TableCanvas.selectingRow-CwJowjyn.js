import{j as e}from"./react-D2T61mpp.js";import{cg as n,ch as t,ca as s}from"./vendor-DeJLDLpI.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-k2AcYC0F.js";import"./react-is-Clcustum.js";import"./styled-components-Dk50_reo.js";import"./@tanstack/react-virtual-R2Y3giEb.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-koMU_8fG.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DX9syi3I.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-KF4aT_9e.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DA9CWr9W.js";import"./@salutejs/plasma-icons-zWvvayCa.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-pcu2ILcE.js";import"./IconButton-BJbUR_O5.js";import"./Box-DQw8sL1c.js";import"./TextField-DgZBo79-.js";import"./sharedUtilsInputs-B0UumBSH.js";import"./AiAgentPopup-CCB3HuGW.js";import"./TextArea-CJZBRqEK.js";import"./sharedUtilsResizable-B5rzIJUb.js";import"./Table-DWwGSlgB.js";import"./Collapse-BYKzEpcd.js";import"./react-data-grid-D_il26Se.js";import"./TableTabs-CGBNm4pI.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CiF1kpzB.js";import"./@glideappsfinal/glide-data-grid-D451MRqO.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-QfwbiFJn.js";import"./ListOfFilters-CZyGXKMT.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CFOx7ut3.js";import"./EmptyState-BoglVMQ1.js";import"./MassActions-DUQYkSY-.js";import"./Autocomplete-lTM2MhNu.js";import"./ErrorPage-DE5c_5Tz.js";function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
