import{j as e}from"./react-D2T61mpp.js";import{cg as r,ch as t,ca as s}from"./vendor-YHRYeQna.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-CLyyiz9v.js";import"./react-is-Clcustum.js";import"./styled-components-egl4WZWx.js";import"./@tanstack/react-virtual-DiLt45p2.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BCTeHdf-.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DDMms3QU.js";import"./FiltersActions-CXox7-R9.js";import"./IconButton-D1tbsOLX.js";import"./@salutejs/plasma-icons-BuYXq1qK.js";import"./@salutejs/sdds-finai-DNMRn4Q7.js";import"./@salutejs/sdds-themes-BWS17lsS.js";import"./utils-BE2UrxrW.js";import"./constants-BEafpjqR.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CIjdXmm7.js";import"./TextField-B3OkzgZj.js";import"./sharedUtilsInputs-Q6RYrUIJ.js";import"./AnalyticalWidget-CuzASnfj.js";import"./Collapse-ClewjDaJ.js";import"./Table-KrR7PcJr.js";import"./react-data-grid-CMFZnrfx.js";import"./TableTabs-Cw637UQ4.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-jPIV2kYM.js";import"./ListOfFilters-DI6XjqBD.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Dc-ong2v.js";import"./EmptyState-DYaqjN5q.js";import"./MassActions-B97BZiv5.js";import"./Autocomplete-CABHmnkJ.js";import"./TableGlide-CJ1p2X0u.js";import"./@glideappsfinal/glide-data-grid-BAWWeQRn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DZG3cmmE.js";function o(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function T(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{T as default};
