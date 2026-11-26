import{j as o}from"./react-DYHuXpTF.js";import{dd as i}from"./vendor-BpmB3NYD.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-D-_6HSfR.js";import{T as m}from"./Table.summaryRows.stories-BDAvWfeq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-BADHLMuD.js";import"./@tanstack/react-virtual-uAYy1xUY.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BUhspFdO.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CN0PPLJ2.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-BmaccWcy.js";import"./index-BFB8ouFt.js";import"./Table-Da0nMm5b.js";import"./Switch-yg_3Nt0z.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/sdds-finai-DJh4O7Qc.js";import"./Box-Juih1CKQ.js";import"./Collapse-Cm4Vf7gU.js";import"./utils-Cdl8HW_v.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-CbqEe6UO.js";import"./react-data-grid-BzGHn5KJ.js";import"./TableTabs-CmYboMCL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-yAwhXllS.js";import"./@daisforge/glide-data-grid-Y_60-FtF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DOQDSS1t.js";import"./TextField-CNv1rZv2.js";import"./sharedUtilsInputs-BcOwa6yM.js";import"./TypographyWithAutoTooltip-DoRVGUsc.js";import"./Typography-DrjV5Wmt.js";import"./ListOfFilters-DBouarlG.js";import"./FiltersActions-BfFXA-oM.js";import"./IconButton-D0PB5P2c.js";import"./TooltipList-CSPnrynf.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Ds_J4bAC.js";import"./NumberFormat-M1V5HNNz.js";import"./EmptyState-B787XssQ.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-BKOQQDDW.js";import"./Autocomplete-DCmEDwiz.js";function e(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(t,{of:m,name:"Docs"}),`
`,o.jsx(r.h1,{id:"summary-rows",children:"Summary Rows"}),`
`,o.jsx(r.p,{children:o.jsx(r.strong,{children:"tableConfig.summaryRows"})}),`
`,o.jsx(r.p,{children:"Итоговые строки в верхней и/или нижней части таблицы."}),`
`,o.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsxs(r.li,{children:["Отображение итогов через ",o.jsx(r.code,{children:"topSummaryRows"})," и ",o.jsx(r.code,{children:"bottomSummaryRows"})," пропсы"]}),`
`,o.jsxs(r.li,{children:["Кнопка переключения видимости в control block (",o.jsx(r.code,{children:"showInControl: true"}),")"]}),`
`,o.jsxs(r.li,{children:["Кастомный рендер через ",o.jsx(r.code,{children:"renderSummaryCell"})," в ",o.jsx(r.code,{children:"columnConfig"})]}),`
`,o.jsxs(r.li,{children:["Колбэк ",o.jsx(r.code,{children:"onChange(checked)"}),": вызывается, когда пользователь переключает тогл «Итоговые строки» в настройках таблицы. Не вызывается при монтировании"]}),`
`]}),`
`,o.jsx(r.h2,{id:"сохранение-выбора-пользователя",children:"Сохранение выбора пользователя"}),`
`,o.jsxs(r.p,{children:["Сохраните значение в ",o.jsx(r.code,{children:"onChange"})," и передайте его обратно в ",o.jsx(r.code,{children:"showDefault"}),":"]}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-tsx",children:`const STORAGE_KEY = 'my-table:summary-rows';

const [showSummary] = useState(
  () => localStorage.getItem(STORAGE_KEY) !== 'false',
);

<Table
  tableConfig={{
    summaryRows: {
      showDefault: showSummary,
      showInControl: true,
      onChange: (checked) =>
        localStorage.setItem(STORAGE_KEY, String(checked)),
    },
  }}
  ...
/>;
`})}),`
`,o.jsxs(r.blockquote,{children:[`
`,o.jsxs(r.p,{children:[o.jsx(r.code,{children:"showDefault"})," читается только при монтировании таблицы. Если поменять его позже, текущее состояние тогла не изменится."]}),`
`]}),`
`,o.jsx(r.h2,{id:"особенности",children:"Особенности"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsx(r.li,{children:"Количество элементов массива = количество итоговых строк"}),`
`,o.jsx(r.li,{children:"Пустой массив — итоговые строки не отображаются"}),`
`,o.jsxs(r.li,{children:[o.jsx(r.code,{children:"renderSummaryCell"})," получает ",o.jsx(r.code,{children:"RenderSummaryCellProps"})," с данными итоговой строки"]}),`
`]}),`
`,o.jsxs(r.blockquote,{children:[`
`,o.jsxs(r.p,{children:["Подробнее о типах и пропсах — ",o.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-summaryrows-api--docs",children:"Summary Rows API"})]}),`
`]}),`
`,o.jsx(s,{})]})}function to(n={}){const{wrapper:r}={...i(),...n.components};return r?o.jsx(r,{...n,children:o.jsx(e,{...n})}):e(n)}export{to as default};
