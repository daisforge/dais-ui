import{j as e}from"./react-D2T61mpp.js";import{cf as n,cg as t,c9 as s}from"./vendor-DKgVyX2L.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-NAyVZQSb.js";import"./react-is-Clcustum.js";import"./styled-components-QcKq8yyO.js";import"./@tanstack/react-virtual-DeJ2XhRM.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CDRG2fMx.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CdtoQqC-.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BaaPIBp8.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-MgJxvWJH.js";import"./@salutejs/plasma-icons-B-uWCUvG.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-yJ24-sMA.js";import"./IconButton-DzGtIrYh.js";import"./Box-Chi_dMtZ.js";import"./TextField-C6dAK4iF.js";import"./sharedUtilsInputs-CTCmk_Eq.js";import"./AiAgentPopup-bCdyYi9W.js";import"./TextArea-DKagOhFu.js";import"./sharedUtilsResizable-_GDHoPjT.js";import"./Table-YzRJBPMf.js";import"./Collapse-IBBAdzJy.js";import"./react-data-grid-Dag3u3m7.js";import"./TableTabs-hoMdNnWG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DRRkL-9u.js";import"./@glideappsfinal/glide-data-grid-DYI0fUTl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-SCYYfULM.js";import"./ListOfFilters-ASzZ-zYH.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CAG3C_Yq.js";import"./EmptyState-isgyqG0r.js";import"./MassActions-cfj1yS0P.js";import"./Autocomplete-DIS1VcM6.js";import"./ErrorPage-B7CIZUqt.js";function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
