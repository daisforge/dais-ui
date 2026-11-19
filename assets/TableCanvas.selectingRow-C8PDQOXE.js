import{j as i}from"./react-DNGZQ4GM.js";import{ck as t}from"./vendor-YLKf7ca7.js";import{M as n,S as s}from"./WithTooltip-KJL26V4Q-tULGdEQj.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-BdJdC8E9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-DgpxuAGO.js";import"./@tanstack/react-virtual-BaHWhgvr.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-j2gYCLme.js";import"./@salutejs/plasma-icons-BuaDVQIV.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CihOLcJg.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BER_NFGF.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./utils-CJ5VTLFt.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-ChtfndFI.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-DkTc4jy4.js";import"./Box-Ba6bD7xl.js";import"./Collapse-DMgzmH3O.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-COUNZWup.js";import"./@glideappsfinal/glide-data-grid-D4rqseF0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-Dw3sne4q.js";import"./TableTabs-Cc5VYl1P.js";import"./sharedUiSearch-DR_G9VuT.js";import"./TextField-B2826P74.js";import"./sharedUtilsInputs-DgLMi5in.js";import"./TypographyWithAutoTooltip--uskoFla.js";import"./Typography-CitaFUXa.js";import"./ListOfFilters-DjxDso1q.js";import"./Table-C5cJymDf.js";import"./react-data-grid-B7bWZIAA.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-LvNMf9h6.js";import"./NumberFormat-BMoxsDYG.js";import"./EmptyState-Dg8069Uy.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-DvFz2b-k.js";import"./Autocomplete-DIZ6r3L2.js";import"./FiltersActions-4YYO6LZu.js";import"./IconButton-B7DLCuSp.js";import"./TooltipList-Dx9BjgjZ.js";import"./ErrorPage-Td3oaxhf.js";function r(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(n,{of:c,name:"Docs"}),`
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
