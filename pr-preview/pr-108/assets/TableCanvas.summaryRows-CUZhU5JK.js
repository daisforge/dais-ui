import{j as o}from"./react-D2T61mpp.js";import{cg as s,ch as i,ca as c}from"./vendor-C74eaGLO.js";import{T as t}from"./TableCanvas.summaryRows.stories-BGcrRStU.js";import"./react-is-Clcustum.js";import"./styled-components-vfWU01ke.js";import"./@tanstack/react-virtual-BfDjj76N.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-MXTAgMiH.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CAtMVZtW.js";import"./FiltersActions-COOm2Qtv.js";import"./IconButton-Bcfriuun.js";import"./@salutejs/plasma-icons-D9bHVpKa.js";import"./@salutejs/sdds-finai-CYK2r0VN.js";import"./@salutejs/sdds-themes-BWS17lsS.js";import"./utils-BDbpb8lB.js";import"./constants-BEafpjqR.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CMaLvIs7.js";import"./TextField-DseygNYW.js";import"./sharedUtilsInputs-bGi1k2Lb.js";import"./AnalyticalWidget-B5j7pduc.js";import"./Collapse-Ba8iaZJT.js";import"./Table-PCFygDK0.js";import"./react-data-grid-DMGwh7II.js";import"./TableTabs-DUBZSJVA.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CCKktuRu.js";import"./ListOfFilters-B2UwsBXL.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DpzJs0QU.js";import"./EmptyState-S-9I0k7E.js";import"./MassActions-ChpIaf65.js";import"./Autocomplete-D4zo3O0u.js";import"./TableGlide-DFk83DAT.js";import"./@glideappsfinal/glide-data-grid-IO8kT-Uc.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BnCI7x9U.js";function e(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:t,name:"Docs"}),`
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
`,o.jsx(c,{})]})}function J(r={}){const{wrapper:n}={...s(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(e,{...r})}):e(r)}export{J as default};
