import{j as o}from"./react-D2T61mpp.js";import{cg as s,ch as i,ca as t}from"./vendor-9g8l4WhJ.js";import{T as c}from"./TableCanvas.summaryRows.stories-Cb-Wxar-.js";import"./react-is-Clcustum.js";import"./styled-components-5_LCUbRt.js";import"./@tanstack/react-virtual-DUbrwqLU.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DbolCT1d.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BPb6aGiT.js";import"./FiltersActions-OhjgOaQE.js";import"./IconButton-CjjdXsHW.js";import"./@salutejs/plasma-icons-CsO0Zluk.js";import"./@salutejs/sdds-finai-DGclA7qp.js";import"./@salutejs/sdds-themes-fAtV8uGh.js";import"./utils-qLOjzm3a.js";import"./constants-BPUyiI8r.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D4caT0cR.js";import"./TextField-CXEKdY4_.js";import"./sharedUtilsInputs-Apa70Kd8.js";import"./AiAgentPopup-DiO3EcTT.js";import"./TextArea-D0nS5Pa8.js";import"./sharedUtilsResizable-IZRdYnaY.js";import"./Table-BprcWVG0.js";import"./Collapse-Bl3cgujD.js";import"./react-data-grid-DMDMtxY8.js";import"./TableTabs-E4wEsguE.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Tv7MIVte.js";import"./ListOfFilters-MtpkxgTe.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DcDEUhsz.js";import"./EmptyState-5jNbQ3Mz.js";import"./MassActions-74nVTl5z.js";import"./Autocomplete-DTtKA_4Z.js";import"./TableGlide-CWG6HOaO.js";import"./@glideappsfinal/glide-data-grid-IzI_d_pL.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DO5-N1oS.js";function e(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:c,name:"Docs"}),`
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
`,o.jsx(t,{})]})}function U(r={}){const{wrapper:n}={...s(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(e,{...r})}):e(r)}export{U as default};
