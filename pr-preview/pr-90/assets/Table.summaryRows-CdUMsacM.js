import{j as n}from"./react-D2T61mpp.js";import{cg as s,ch as i,ca as t}from"./vendor-DnKKx4bH.js";import{T as c}from"./Table.summaryRows.stories-CTJr3nWy.js";import"./react-is-Clcustum.js";import"./styled-components-C073gJi0.js";import"./@tanstack/react-virtual-B5-u2qiU.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DFXuHZSX.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-C-eKP1Ax.js";import"./FiltersActions-DBXrn3j3.js";import"./IconButton-oJL-bVR-.js";import"./@salutejs/plasma-icons-Rw5fh_oL.js";import"./@salutejs/sdds-finai-C-BS5BDf.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-DRSpp9Bp.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-b0oKlQLU.js";import"./TextField-CgsMQ_fz.js";import"./sharedUtilsInputs-CjipMgcW.js";import"./AnalyticalWidget-DINBEyFe.js";import"./Collapse-C6pDB8Nq.js";import"./react-data-grid-CCvc9oWK.js";import"./TableTabs-C_1qx54X.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-D8_fgEYR.js";import"./ListOfFilters-BHZnh67Q.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C1N2i35g.js";import"./EmptyState-Br3rrfw-.js";import"./MassActions-DZVwPVpR.js";import"./Autocomplete-Xo0gWHsM.js";function e(r){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:c,name:"Docs"}),`
`,n.jsx(o.h1,{id:"summary-rows",children:"Summary Rows"}),`
`,n.jsx(o.p,{children:n.jsx(o.strong,{children:"tableConfig.summaryRows"})}),`
`,n.jsx(o.p,{children:"Итоговые строки в верхней и/или нижней части таблицы."}),`
`,n.jsx(o.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["Отображение итогов через ",n.jsx(o.code,{children:"topSummaryRows"})," и ",n.jsx(o.code,{children:"bottomSummaryRows"})," пропсы"]}),`
`,n.jsxs(o.li,{children:["Кнопка переключения видимости в control block (",n.jsx(o.code,{children:"showInControl: true"}),")"]}),`
`,n.jsxs(o.li,{children:["Кастомный рендер через ",n.jsx(o.code,{children:"renderSummaryCell"})," в ",n.jsx(o.code,{children:"columnConfig"})]}),`
`,n.jsxs(o.li,{children:["Колбэк ",n.jsx(o.code,{children:"onChange(checked)"}),": вызывается, когда пользователь переключает тогл «Итоговые строки» в настройках таблицы. Не вызывается при монтировании"]}),`
`]}),`
`,n.jsx(o.h2,{id:"сохранение-выбора-пользователя",children:"Сохранение выбора пользователя"}),`
`,n.jsxs(o.p,{children:["Сохраните значение в ",n.jsx(o.code,{children:"onChange"})," и передайте его обратно в ",n.jsx(o.code,{children:"showDefault"}),":"]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`const STORAGE_KEY = 'my-table:summary-rows';

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
`,n.jsxs(o.blockquote,{children:[`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"showDefault"})," читается только при монтировании таблицы. Если поменять его позже, текущее состояние тогла не изменится."]}),`
`]}),`
`,n.jsx(o.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"Количество элементов массива = количество итоговых строк"}),`
`,n.jsx(o.li,{children:"Пустой массив — итоговые строки не отображаются"}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"renderSummaryCell"})," получает ",n.jsx(o.code,{children:"RenderSummaryCellProps"})," с данными итоговой строки"]}),`
`]}),`
`,n.jsxs(o.blockquote,{children:[`
`,n.jsxs(o.p,{children:["Подробнее о типах и пропсах — ",n.jsx(o.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-summaryrows-api--docs",children:"Summary Rows API"})]}),`
`]}),`
`,n.jsx(t,{})]})}function L(r={}){const{wrapper:o}={...s(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(e,{...r})}):e(r)}export{L as default};
