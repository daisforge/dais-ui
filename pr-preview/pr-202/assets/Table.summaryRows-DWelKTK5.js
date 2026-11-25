import{j as o}from"./react-UEdzNlUe.js";import{dd as i}from"./vendor-DKFmtNka.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-mcHqMig3.js";import{T as m}from"./Table.summaryRows.stories-BzNX6ZFH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CDfPITHT.js";import"./@tanstack/react-virtual-0hY7ij6n.js";import"./preload-helper-KkJ3rXAN.js";import"./index-Cu4lwwaE.js";import"./index-CLqcrFDJ.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-BFTIsucg.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-Dgmteq0e.js";import"./index-BFB8ouFt.js";import"./Table-XtziPUZ1.js";import"./index-By_8dfga.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./@salutejs/sdds-finai-CkM2RoIx.js";import"./Box-CZ_ZQ2uM.js";import"./Collapse-je_wNoe6.js";import"./utils-Booj3GAg.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BPl9HMYM.js";import"./react-data-grid-zJbN7yQ-.js";import"./TableTabs-HvjNq9qy.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-9pGS80-9.js";import"./@daisforge/glide-data-grid-DAsmNUnq.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-S6VmH8Up.js";import"./TextField-_kp-5o4i.js";import"./sharedUtilsInputs-DKhoD9kx.js";import"./TypographyWithAutoTooltip-DQtPK5Qj.js";import"./Typography-BA5qaSRD.js";import"./ListOfFilters-c3v_yIQj.js";import"./FiltersActions-HZMp5NsN.js";import"./IconButton-DE-9S934.js";import"./TooltipList--BueJEoS.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-C6JBaB8n.js";import"./NumberFormat-DkWjZssr.js";import"./EmptyState-CJBToD3S.js";import"./unidentified@3x-DnyuMWBO.js";import"./MassActions-D9w9KKFY.js";import"./Autocomplete-BbyjSCwg.js";function e(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(t,{of:m,name:"Docs"}),`
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
