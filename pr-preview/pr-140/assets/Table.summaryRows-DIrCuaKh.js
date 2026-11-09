import{j as o}from"./react-D2T61mpp.js";import{cg as s,ch as i,ca as t}from"./vendor-D9yMgLPo.js";import{T as m}from"./Table.summaryRows.stories-DwFd---J.js";import"./react-is-Clcustum.js";import"./styled-components-OgUQMZXz.js";import"./@tanstack/react-virtual-BM_5ionr.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Bm_Oj0z3.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-DmuAstj5.js";import"./FiltersActions-DxiicKfY.js";import"./IconButton-BXb68VkC.js";import"./@salutejs/plasma-icons-SFTiOUvf.js";import"./@salutejs/sdds-finai-BcE3eyQF.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-Cl6WWoGX.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CosW2s3A.js";import"./TextField-DraMCjNX.js";import"./sharedUtilsInputs-Ck5yP1gC.js";import"./AiAgentPopup-ZzlEkTA_.js";import"./TextArea-DyWT7sVd.js";import"./sharedUtilsResizable-BKQ41wCi.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-aXaFMJf0.js";import"./react-data-grid-uqI5kvQq.js";import"./TableTabs-RrUeWZbs.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CEu6kBhT.js";import"./@glideappsfinal/glide-data-grid-j2h7MKwi.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-ChUxs4OT.js";import"./ListOfFilters-CLNHVD0N.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Ca_D337R.js";import"./EmptyState-DHOkVsTD.js";import"./MassActions-B_L53EAf.js";import"./Autocomplete-CJfd2ggv.js";function e(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
`,o.jsx(n.h1,{id:"summary-rows",children:"Summary Rows"}),`
`,o.jsx(n.p,{children:o.jsx(n.strong,{children:"tableConfig.summaryRows"})}),`
`,o.jsx(n.p,{children:"Итоговые строки в верхней и/или нижней части таблицы."}),`
`,o.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsxs(n.li,{children:["Отображение итогов через ",o.jsx(n.code,{children:"topSummaryRows"})," и ",o.jsx(n.code,{children:"bottomSummaryRows"})," пропсы"]}),`
`,o.jsxs(n.li,{children:["Кнопка переключения видимости в control block (",o.jsx(n.code,{children:"showInControl: true"}),")"]}),`
`,o.jsxs(n.li,{children:["Кастомный рендер через ",o.jsx(n.code,{children:"renderSummaryCell"})," в ",o.jsx(n.code,{children:"columnConfig"})]}),`
`,o.jsxs(n.li,{children:["Колбэк ",o.jsx(n.code,{children:"onChange(checked)"}),": вызывается, когда пользователь переключает тогл «Итоговые строки» в настройках таблицы. Не вызывается при монтировании"]}),`
`]}),`
`,o.jsx(n.h2,{id:"сохранение-выбора-пользователя",children:"Сохранение выбора пользователя"}),`
`,o.jsxs(n.p,{children:["Сохраните значение в ",o.jsx(n.code,{children:"onChange"})," и передайте его обратно в ",o.jsx(n.code,{children:"showDefault"}),":"]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`const STORAGE_KEY = 'my-table:summary-rows';

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
`,o.jsxs(n.blockquote,{children:[`
`,o.jsxs(n.p,{children:[o.jsx(n.code,{children:"showDefault"})," читается только при монтировании таблицы. Если поменять его позже, текущее состояние тогла не изменится."]}),`
`]}),`
`,o.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsx(n.li,{children:"Количество элементов массива = количество итоговых строк"}),`
`,o.jsx(n.li,{children:"Пустой массив — итоговые строки не отображаются"}),`
`,o.jsxs(n.li,{children:[o.jsx(n.code,{children:"renderSummaryCell"})," получает ",o.jsx(n.code,{children:"RenderSummaryCellProps"})," с данными итоговой строки"]}),`
`]}),`
`,o.jsxs(n.blockquote,{children:[`
`,o.jsxs(n.p,{children:["Подробнее о типах и пропсах — ",o.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-summaryrows-api--docs",children:"Summary Rows API"})]}),`
`]}),`
`,o.jsx(t,{})]})}function Q(r={}){const{wrapper:n}={...s(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(e,{...r})}):e(r)}export{Q as default};
