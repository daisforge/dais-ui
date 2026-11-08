import{j as e}from"./react-D2T61mpp.js";import{cg as n,ch as t,ca as s}from"./vendor-5YaLwWPx.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-BLDtyjHq.js";import"./react-is-Clcustum.js";import"./styled-components-QSCCnPb-.js";import"./@tanstack/react-virtual-CREzRtDS.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-D389G43V.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-B5Q_-u20.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-CCp0jqya.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DrGBnohr.js";import"./@salutejs/plasma-icons-BYipvGmh.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-Qfy3GXbo.js";import"./IconButton-CGz2G3MV.js";import"./Box-0w5iF82H.js";import"./TextField-Bbr_jKSK.js";import"./sharedUtilsInputs-dLL-lvGs.js";import"./AiAgentPopup-BH4xzIuU.js";import"./TextArea-DtH8rOhl.js";import"./sharedUtilsResizable-D53rhKQ-.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-CAZxcjUH.js";import"./Collapse-BnMkZyds.js";import"./react-data-grid-YkKxh9rN.js";import"./TableTabs-DbcL05bF.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CikRTc-C.js";import"./@glideappsfinal/glide-data-grid-CTHkzdYi.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-C5EfhfmM.js";import"./ListOfFilters-FTBog0Lh.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CZFZbKLZ.js";import"./EmptyState-RQQaYTen.js";import"./MassActions-CXD81bQz.js";import"./Autocomplete-BT5J3Bi_.js";import"./ErrorPage-BMZ90zch.js";function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function Y(o={}){const{wrapper:i}={...n(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{Y as default};
