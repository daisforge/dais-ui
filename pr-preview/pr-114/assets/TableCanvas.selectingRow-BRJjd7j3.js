import{j as e}from"./react-D2T61mpp.js";import{cg as r,ch as t,ca as s}from"./vendor-BGzzYN-b.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-8PPxA_PW.js";import"./react-is-Clcustum.js";import"./styled-components-CD4KFY2h.js";import"./@tanstack/react-virtual-7i3ITNa_.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-fMZZ290W.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-wkKiHt_9.js";import"./FiltersActions-a7bIw2Fz.js";import"./IconButton-BsuSMrKD.js";import"./@salutejs/plasma-icons-DoqG1pWM.js";import"./@salutejs/sdds-finai-DvhCM2Xz.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-BopI5f_-.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B5Lk0A0c.js";import"./TextField-1s64aVQu.js";import"./sharedUtilsInputs-D8S3qiky.js";import"./AiAgentPopup-BjpWl_pW.js";import"./TextArea-Dx3aHTDW.js";import"./sharedUtilsResizable-CdV8UiPe.js";import"./Table-CA6ZUQ5N.js";import"./Collapse-CWsg-GsF.js";import"./react-data-grid-BIBmSmvS.js";import"./TableTabs-BxgxHb0J.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-tcONULjm.js";import"./@glideappsfinal/glide-data-grid-BU--_Fv5.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-y7IwLXgM.js";import"./ListOfFilters-BuQDevqY.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D8XT1I-j.js";import"./EmptyState-DMkiJ__L.js";import"./MassActions-C5VaWbKf.js";import"./Autocomplete-BFrIC_iF.js";import"./ErrorPage-D7Xw8vJ0.js";function o(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
