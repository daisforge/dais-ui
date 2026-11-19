import{j as i}from"./react-UEdzNlUe.js";import{dd as t}from"./vendor-DnY5x8t2.js";import{M as n,S as s}from"./WithTooltip-KJL26V4Q-Cluo7wsc.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-CMX60xDV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-C2sulCCv.js";import"./@tanstack/react-virtual-BA3RmMS7.js";import"./preload-helper-j-yXN3k7.js";import"./index-Cu4lwwaE.js";import"./index-BS0iAW2I.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-BT387RgP.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BZjvDSGS.js";import"./@sddsjs/sdds_finai-D-xd8Ig6.js";import"./utils-NDBGknB_.js";import"./constants-DTh3jAtl.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-2QW4XiOx.js";import"./@salutejs/plasma-icons-67FHeKcG.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-BX5D65Tl.js";import"./Box-CmkBCCp8.js";import"./Collapse-cxu7l_pA.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dc6dleod.js";import"./@glideappsfinal/glide-data-grid-2J2Wx1jC.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-D5RtHXQZ.js";import"./TableTabs-CfJtCWr8.js";import"./sharedUiSearch-CoeTfsOr.js";import"./TextField-DXOe7TwE.js";import"./sharedUtilsInputs-BEEVjYrl.js";import"./TypographyWithAutoTooltip-DyfRXyRD.js";import"./Typography-CTBLgXaA.js";import"./ListOfFilters-CClYEnvR.js";import"./Table-BppiMsXu.js";import"./react-data-grid-gn-LnSw-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-DkYs5ioR.js";import"./NumberFormat-KGmYOFb9.js";import"./EmptyState-Clcxu70W.js";import"./unidentified@3x-DP8hWoDe.js";import"./MassActions-BUdib6KL.js";import"./Autocomplete-BHfvRrfM.js";import"./FiltersActions-41lXv-ok.js";import"./IconButton-pD4wRJBG.js";import"./TooltipList-DyLslyRz.js";import"./ErrorPage-D21qdhdu.js";function r(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(n,{of:c,name:"Docs"}),`
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
