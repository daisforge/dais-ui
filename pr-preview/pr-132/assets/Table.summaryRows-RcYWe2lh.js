import{j as n}from"./react-D2T61mpp.js";import{cf as s,cg as i,c9 as t}from"./vendor-CYEt32i_.js";import{T as m}from"./Table.summaryRows.stories-B0jFLvEV.js";import"./react-is-Clcustum.js";import"./styled-components-IqzAKK_s.js";import"./@tanstack/react-virtual-DRRuFJr3.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BYdnpZCY.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-kya4Xv3o.js";import"./FiltersActions-BR16IwQj.js";import"./IconButton-Dl8SMmMk.js";import"./@salutejs/plasma-icons-pfD28j8D.js";import"./@salutejs/sdds-finai-32zwYo9C.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-CFRnpb77.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DrYQVeV7.js";import"./TextField-BSD0wz2P.js";import"./sharedUtilsInputs-BJDRWV8U.js";import"./AiAgentPopup-Do25XZz-.js";import"./TextArea-B9d14RRB.js";import"./sharedUtilsResizable-CPQ8HWoD.js";import"./Collapse-_6Pq7MeZ.js";import"./react-data-grid-Bx1mSA4W.js";import"./TableTabs-BMjqrlPg.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BjF36j5z.js";import"./@glideappsfinal/glide-data-grid-HMBxXGeW.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BqRjtV6A.js";import"./ListOfFilters-Cis1z3PW.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bu7o2kss.js";import"./EmptyState-IqPSeUL3.js";import"./MassActions-DPpZGZqq.js";import"./Autocomplete-C8FwLa6a.js";function e(r){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
`,n.jsx(t,{})]})}function J(r={}){const{wrapper:o}={...s(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(e,{...r})}):e(r)}export{J as default};
