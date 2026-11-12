import{j as o}from"./react-D2T61mpp.js";import{cg as s,ch as i,ca as t}from"./vendor-Bj2v5t-1.js";import{T as m}from"./Table.summaryRows.stories-BasfU0Qj.js";import"./react-is-Clcustum.js";import"./styled-components-BEgCOoGB.js";import"./@tanstack/react-virtual-yw1-e5aS.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DAm853Tp.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-DqL3ZX5a.js";import"./FiltersActions-B1-KfjyU.js";import"./IconButton-DWk4OQ99.js";import"./@salutejs/plasma-icons-BuZssI3i.js";import"./@salutejs/sdds-finai-B-p3Wrf5.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-DFbuG0jD.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C9EwcKwe.js";import"./TextField-DnwOLnGX.js";import"./sharedUtilsInputs-CkoGZrw1.js";import"./AiAgentPopup-Bhi3oPd5.js";import"./TextArea-BmM4XOV0.js";import"./sharedUtilsResizable-BQnAsbRf.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-DlAIrW7d.js";import"./react-data-grid-BZL5sWps.js";import"./TableTabs-PIOj-Q1-.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BnGvs3Pt.js";import"./@glideappsfinal/glide-data-grid-DWF6JhMs.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CgwtTRVe.js";import"./ListOfFilters-MUVqCEoo.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CyMh_gjQ.js";import"./EmptyState-ACl1wB-h.js";import"./MassActions-D0l9arEw.js";import"./Autocomplete-CSua9LHj.js";function e(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
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
