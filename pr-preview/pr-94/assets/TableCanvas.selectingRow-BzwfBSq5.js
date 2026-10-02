import{j as e}from"./react-D2T61mpp.js";import{cg as r,ch as t,ca as s}from"./vendor-9g8l4WhJ.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-DroGn_rC.js";import"./react-is-Clcustum.js";import"./styled-components-5_LCUbRt.js";import"./@tanstack/react-virtual-DUbrwqLU.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DbolCT1d.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BPb6aGiT.js";import"./FiltersActions-OhjgOaQE.js";import"./IconButton-CjjdXsHW.js";import"./@salutejs/plasma-icons-CsO0Zluk.js";import"./@salutejs/sdds-finai-DGclA7qp.js";import"./@salutejs/sdds-themes-fAtV8uGh.js";import"./utils-qLOjzm3a.js";import"./constants-BPUyiI8r.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D4caT0cR.js";import"./TextField-CXEKdY4_.js";import"./sharedUtilsInputs-Apa70Kd8.js";import"./AiAgentPopup-DiO3EcTT.js";import"./TextArea-D0nS5Pa8.js";import"./sharedUtilsResizable-IZRdYnaY.js";import"./Table-BprcWVG0.js";import"./Collapse-Bl3cgujD.js";import"./react-data-grid-DMDMtxY8.js";import"./TableTabs-E4wEsguE.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Tv7MIVte.js";import"./ListOfFilters-MtpkxgTe.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DcDEUhsz.js";import"./EmptyState-5jNbQ3Mz.js";import"./MassActions-74nVTl5z.js";import"./Autocomplete-DTtKA_4Z.js";import"./TableGlide-CWG6HOaO.js";import"./@glideappsfinal/glide-data-grid-IzI_d_pL.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DO5-N1oS.js";function o(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
