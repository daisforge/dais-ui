import{j as o}from"./react-UEdzNlUe.js";import{df as i}from"./vendor-BZ4xHhIu.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-DgAzV8qv.js";import{T as m}from"./Table.summaryRows.stories-BUfdFYKf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CS9xW8RS.js";import"./@tanstack/react-virtual-Cg_9pkjG.js";import"./preload-helper-AhSnpiqA.js";import"./index-Cu4lwwaE.js";import"./index-DbUEVzLn.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-Igcbn0Jb.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-Dgmteq0e.js";import"./index-BFB8ouFt.js";import"./Table-CrycrOhe.js";import"./Switch-BLwU7d6k.js";import"./@sddsjs/sdds_finai-rO2iU-Jd.js";import"./@salutejs/sdds-finai-Z0nbsN1t.js";import"./Box-1ilqKMuH.js";import"./Collapse-BumLdPOr.js";import"./utils-Dxt9aEaB.js";import"./constants-Brx3fuKM.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-BxPMDQ8m.js";import"./react-data-grid-B2lTycfS.js";import"./TableTabs-DK3E2Tjx.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-DfMFGjDK.js";import"./TextField-zS5TeN3S.js";import"./sharedUtilsInputs-CU9inT7Z.js";import"./Typography-LZqKnjkf.js";import"./ListOfFilters-BwM87NcY.js";import"./FiltersActions-BKFvIl-i.js";import"./IconButton-DGP6Lkn6.js";import"./Tooltip-EuRIJkYt.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Q8JqGQSC.js";import"./NumberFormat-DGNiwVXJ.js";import"./EmptyState-m9Bn6vD9.js";import"./unidentified@3x-_wSsvM7E.js";import"./MassActions-Bsnp-_01.js";import"./Autocomplete-fJfjzeXV.js";function e(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(t,{of:m,name:"Docs"}),`
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
`,o.jsx(s,{})]})}function ro(n={}){const{wrapper:r}={...i(),...n.components};return r?o.jsx(r,{...n,children:o.jsx(e,{...n})}):e(n)}export{ro as default};
