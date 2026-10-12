import{j as o}from"./react-D2T61mpp.js";import{cf as s,cg as i,c9 as t}from"./vendor-9B2hbkG6.js";import{T as c}from"./TableCanvas.summaryRows.stories-BUYdZ3A2.js";import"./react-is-Clcustum.js";import"./styled-components-ez3N8xZd.js";import"./@tanstack/react-virtual-CUqgBIE3.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CdHHDC6W.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-r4y9aj8Y.js";import"./FiltersActions-DtarGT3y.js";import"./IconButton-hGj94ADB.js";import"./@salutejs/plasma-icons--VRxTmky.js";import"./@salutejs/sdds-finai-DAeykpwI.js";import"./@salutejs/sdds-themes-DvXSb3wc.js";import"./utils-C6Rp7Mm0.js";import"./constants-ZywluL5g.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-COYwCtIH.js";import"./TextField-3j84s4wg.js";import"./sharedUtilsInputs-nH3zTuRf.js";import"./AiAgentPopup-BJQ1tlEF.js";import"./TextArea-BschVoDn.js";import"./sharedUtilsResizable-C0T1tyTQ.js";import"./Table-BMOR8dF2.js";import"./Collapse-Qqh3QbJP.js";import"./react-data-grid-DQ4yailp.js";import"./TableTabs-CuSt3HAP.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BHezZ6sf.js";import"./@glideappsfinal/glide-data-grid-DCYnKkBB.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-1YCK01iC.js";import"./ListOfFilters-w_sVVQMO.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DUL2cq19.js";import"./EmptyState-KiLHs88G.js";import"./MassActions-EHhyZfxe.js";import"./Autocomplete-Ba-s2Y4S.js";import"./ErrorPage-B8UOrt2y.js";function e(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:c,name:"Docs"}),`
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
