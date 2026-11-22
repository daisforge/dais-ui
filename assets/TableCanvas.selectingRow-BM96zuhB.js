import{j as e}from"./react-DYHuXpTF.js";import{dd as t}from"./vendor-Dy04e7eT.js";import{M as n,S as s}from"./WithTooltip-KJL26V4Q-Dieti3TI.js";import{S as c}from"./TableCanvas.selectingRow.simple.stories-BLQET216.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-D3uL8AgQ.js";import"./@tanstack/react-virtual-DpbU78q1.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BkX6kR9J.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-C-m25YlE.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DHDxV09A.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-C324mS39.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CW-5BJnR.js";import"./@salutejs/plasma-icons-D-o9abDl.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-Cg1cr4lG.js";import"./Box-C_lQk7q2.js";import"./Collapse-zZc0zAuA.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-ToAvIx_t.js";import"./@daisforge/glide-data-grid-CnQtltGt.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-BAGPZAp9.js";import"./sharedUiSearch-4U0N3jZJ.js";import"./TextField-CFa4HRNu.js";import"./sharedUtilsInputs-CeMKsmp0.js";import"./TypographyWithAutoTooltip-CF39c5mC.js";import"./Typography-BcsDSGcH.js";import"./ListOfFilters-DLYLJh9T.js";import"./Table-CeDu5QUM.js";import"./react-data-grid-iaz8oMts.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cre-Xff_.js";import"./NumberFormat-C4Ct0-d_.js";import"./EmptyState-F2FGmJQ7.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-C7XUfjux.js";import"./Autocomplete-BVrZ8DxV.js";import"./FiltersActions-2bw8sE3F.js";import"./IconButton-0ysLJmxH.js";import"./TooltipList-DjKz0BcB.js";import"./ErrorPage-Nv6oq4i7.js";function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{of:c,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function se(o={}){const{wrapper:i}={...t(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{se as default};
