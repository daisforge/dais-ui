import{j as e}from"./react-DYHuXpTF.js";import{dd as n}from"./vendor-BpmB3NYD.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-D-_6HSfR.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-CdEPIu_R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-BADHLMuD.js";import"./@tanstack/react-virtual-uAYy1xUY.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BUhspFdO.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CN0PPLJ2.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DfFJC-Eb.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./utils-Cdl8HW_v.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DJh4O7Qc.js";import"./@salutejs/plasma-icons-CbqEe6UO.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-yg_3Nt0z.js";import"./Box-Juih1CKQ.js";import"./Collapse-Cm4Vf7gU.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-yAwhXllS.js";import"./@daisforge/glide-data-grid-Y_60-FtF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-CmYboMCL.js";import"./sharedUiSearch-DOQDSS1t.js";import"./TextField-CNv1rZv2.js";import"./sharedUtilsInputs-BcOwa6yM.js";import"./TypographyWithAutoTooltip-DoRVGUsc.js";import"./Typography-DrjV5Wmt.js";import"./ListOfFilters-DBouarlG.js";import"./FiltersActions-BfFXA-oM.js";import"./IconButton-D0PB5P2c.js";import"./TooltipList-CSPnrynf.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Ds_J4bAC.js";import"./NumberFormat-M1V5HNNz.js";import"./EmptyState-B787XssQ.js";import"./unidentified@3x-iHLYaSSf.js";import"./ErrorPage-BL_-6djw.js";import"./Autocomplete-DCmEDwiz.js";function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function re(o={}){const{wrapper:i}={...n(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{re as default};
