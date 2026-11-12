import{j as o}from"./react-D2T61mpp.js";import{cg as s,ch as i,ca as t}from"./vendor-Bj2v5t-1.js";import{T as c}from"./TableCanvas.summaryRows.stories-BwfiwTHz.js";import"./react-is-Clcustum.js";import"./styled-components-BEgCOoGB.js";import"./@tanstack/react-virtual-yw1-e5aS.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DAm853Tp.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Rq1O-F5f.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-DFbuG0jD.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B-p3Wrf5.js";import"./@salutejs/plasma-icons-BuZssI3i.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-B1-KfjyU.js";import"./IconButton-DWk4OQ99.js";import"./Box-C9EwcKwe.js";import"./TextField-DnwOLnGX.js";import"./sharedUtilsInputs-CkoGZrw1.js";import"./AiAgentPopup-Bhi3oPd5.js";import"./TextArea-BmM4XOV0.js";import"./sharedUtilsResizable-BQnAsbRf.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-DqL3ZX5a.js";import"./Collapse-DlAIrW7d.js";import"./react-data-grid-BZL5sWps.js";import"./TableTabs-PIOj-Q1-.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BnGvs3Pt.js";import"./@glideappsfinal/glide-data-grid-DWF6JhMs.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CgwtTRVe.js";import"./ListOfFilters-MUVqCEoo.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CyMh_gjQ.js";import"./EmptyState-ACl1wB-h.js";import"./MassActions-D0l9arEw.js";import"./Autocomplete-CSua9LHj.js";import"./ErrorPage-CuT1LV-e.js";function e(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:c,name:"Docs"}),`
`,o.jsx(n.h1,{id:"summary-rows",children:"Summary Rows"}),`
`,o.jsx(n.p,{children:o.jsx(n.strong,{children:"tableConfig.summaryRows + пропс bottomSummaryRows"})}),`
`,o.jsx(n.p,{children:"Итоговые строки в нижней части таблицы."}),`
`,o.jsx(n.p,{children:"Конфигурация состоит из двух частей:"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsxs(n.li,{children:[o.jsx(n.strong,{children:o.jsx(n.code,{children:"tableConfig.summaryRows"})})," (",o.jsx(n.code,{children:"SummaryRowsConfig"}),") — настройка видимости и кнопки в control block"]}),`
`,o.jsxs(n.li,{children:[o.jsxs(n.strong,{children:["Пропс ",o.jsx(n.code,{children:"bottomSummaryRows"})]})," (",o.jsx(n.code,{children:"SummaryRowType[]"}),") — массив данных для итоговых строк"]}),`
`]}),`
`,o.jsx(n.h2,{id:"tableconfigsummaryrows-summaryrowsconfig",children:"tableConfig.summaryRows (SummaryRowsConfig)"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsxs(n.li,{children:[o.jsx(n.strong,{children:o.jsx(n.code,{children:"showDefault"})})," ",o.jsx(n.code,{children:"boolean"})," — показывать итоговые строки по умолчанию"]}),`
`,o.jsxs(n.li,{children:[o.jsx(n.strong,{children:o.jsx(n.code,{children:"showInControl"})})," ",o.jsx(n.code,{children:"boolean"})," — кнопка переключения видимости в control block"]}),`
`,o.jsxs(n.li,{children:[o.jsx(n.strong,{children:o.jsx(n.code,{children:"onChange"})})," ",o.jsx(n.code,{children:"(checked: boolean) => void"})," — вызывается, когда пользователь переключает тогл «Итоговые строки» в настройках таблицы. Не вызывается при монтировании"]}),`
`]}),`
`,o.jsx(n.h3,{id:"сохранение-выбора-пользователя",children:"Сохранение выбора пользователя"}),`
`,o.jsxs(n.p,{children:["Сохраните значение в ",o.jsx(n.code,{children:"onChange"})," и передайте его обратно в ",o.jsx(n.code,{children:"showDefault"}),":"]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`const STORAGE_KEY = 'my-table:summary-rows';

const [showSummary] = useState(
  () => localStorage.getItem(STORAGE_KEY) !== 'false',
);

<TableCanvas
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
`,o.jsx(n.h2,{id:"пропс-bottomsummaryrows",children:"Пропс bottomSummaryRows"}),`
`,o.jsxs(n.p,{children:["Массив объектов ",o.jsx(n.code,{children:"SummaryRowType[]"}),", передаётся напрямую в компонент ",o.jsx(n.code,{children:"TableCanvas"}),". Количество элементов массива = количество итоговых строк. Пустой массив — итоговые строки не отображаются."]}),`
`,o.jsx(n.h2,{id:"рендер-в-columnconfig",children:"Рендер в columnConfig"}),`
`,o.jsxs(n.p,{children:["Кастомный рендер через ",o.jsx(n.code,{children:"renderSummaryCell"})," в конфигурации колонки. Данные итоговой строки доступны через ",o.jsx(n.code,{children:"row"}),"."]}),`
`,o.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsxs(n.li,{children:["Необходимо соблюдать отступы ячеек через ",o.jsx(n.code,{children:"theme.cellHorizontalPadding"})]}),`
`]}),`
`,o.jsxs(n.blockquote,{children:[`
`,o.jsxs(n.p,{children:["Подробнее о типах — ",o.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-summaryrows-api--docs",children:"Summary Rows API"})]}),`
`]}),`
`,o.jsx(t,{})]})}function W(r={}){const{wrapper:n}={...s(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(e,{...r})}):e(r)}export{W as default};
