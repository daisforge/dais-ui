import{j as i}from"./react-B60MRyL7.js";import{ck as t}from"./vendor-ABAm7dM9.js";import{M as n,S as s}from"./WithTooltip-KJL26V4Q-DVjM17Xc.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-D03iEfQ4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-JDoewyqD.js";import"./@tanstack/react-virtual-aXadwhme.js";import"./preload-helper-Bmf6XQY_.js";import"./index-Cu4lwwaE.js";import"./index-OE46t0bk.js";import"./@salutejs/plasma-icons-BjqIpdkS.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-D6aow9No.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BYM9F2cJ.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./utils-CWW6sPYd.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-D8wK5fGe.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-DtotkDJi.js";import"./Box-bkXdsxp1.js";import"./Collapse-BC9SztdT.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BEGSzIOP.js";import"./@glideappsfinal/glide-data-grid-CC2fJ8Kz.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-OQAgfOXP.js";import"./TableTabs-BBnsWNxR.js";import"./sharedUiSearch-BTGm-BQU.js";import"./TextField-Bk21xWxf.js";import"./sharedUtilsInputs-DX1n1p66.js";import"./TypographyWithAutoTooltip-D5mVbAIF.js";import"./Typography-DnOGykbx.js";import"./ListOfFilters-Bm_cdHcX.js";import"./Table-Vzg6nvOG.js";import"./react-data-grid-a6lPhyw4.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BgS9GVK7.js";import"./NumberFormat-D7THTU7Y.js";import"./EmptyState-ClfQAY0j.js";import"./unidentified@3x-DeqHr2sH.js";import"./MassActions-xI-YnWfo.js";import"./Autocomplete-D4Dg924L.js";import"./FiltersActions-BbYrJGvd.js";import"./IconButton-CWgrxfM1.js";import"./TooltipList-CdTlGXww.js";import"./ErrorPage-C-8swpRG.js";function r(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(n,{of:c,name:"Docs"}),`
`,i.jsx(e.h1,{id:"selecting-row",children:"Selecting Row"}),`
`,i.jsx(e.p,{children:i.jsx(e.strong,{children:"tableConfig.selecting"})}),`
`,i.jsx(e.p,{children:"Выбор строк таблицы с помощью чекбоксов."}),`
`,i.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Управляемое состояние через ",i.jsx(e.code,{children:"ReadonlySet<string | number>"})]}),`
`,i.jsxs(e.li,{children:["Кнопка переключения видимости в control block (",i.jsx(e.code,{children:"showInControl: true"}),")"]}),`
`,i.jsxs(e.li,{children:["Контроль на уровне строк: ",i.jsx(e.code,{children:"rowCheckboxDisabled"}),", ",i.jsx(e.code,{children:"rowShowCheckbox"})]}),`
`,i.jsxs(e.li,{children:["Поддержка иерархических таблиц через ",i.jsx(e.code,{children:"selectingRules.levels"})]}),`
`,i.jsxs(e.li,{children:["Кастомизация summary-чекбокса через ",i.jsx(e.code,{children:"summaryChecked"})]}),`
`,i.jsxs(e.li,{children:["Ограничение числа в счётчике выбранных — ",i.jsx(e.code,{children:"summaryCounterMaxCount"})," (при превышении показывает «N+», например ",i.jsx(e.code,{children:"99+"}),"). См. ",i.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-selectingrow-countermaxcount--docs",children:"Ограничение счётчика (99+)"})]}),`
`]}),`
`,i.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"rowKeyGetter"})," должен возвращать уникальный идентификатор строки"]}),`
`,i.jsxs(e.li,{children:["В иерархических таблицах ",i.jsx(e.code,{children:"selectingRules.levels"})," определяет, на каких уровнях доступен выбор"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"rowGetStates"})," позволяет полностью переопределить логику чекбоксов (checked, indeterminate, disabled)"]}),`
`,i.jsx(e.li,{children:"Accent-кнопки в mass action panel всегда видимы при компрессии"}),`
`]}),`
`,i.jsxs(e.blockquote,{children:[`
`,i.jsxs(e.p,{children:["Подробнее о типах и пропсах — ",i.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-selecting-api--docs",children:"Selecting API"})]}),`
`]}),`
`,i.jsx(s,{})]})}function ci(o={}){const{wrapper:e}={...t(),...o.components};return e?i.jsx(e,{...o,children:i.jsx(r,{...o})}):r(o)}export{ci as default};
