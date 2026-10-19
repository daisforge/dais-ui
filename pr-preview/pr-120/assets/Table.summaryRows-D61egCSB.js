import{j as n}from"./react-D2T61mpp.js";import{cf as s,cg as i,c9 as t}from"./vendor-COwMm0za.js";import{T as m}from"./Table.summaryRows.stories-t8VuX1XK.js";import"./react-is-Clcustum.js";import"./styled-components-CE-uo-6d.js";import"./@tanstack/react-virtual-Djp4Fi96.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CwPMLG6P.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-LoiBTAsH.js";import"./FiltersActions-B4rd6DQ1.js";import"./IconButton-CcBBhSiV.js";import"./@salutejs/plasma-icons-DTttYHJN.js";import"./@salutejs/sdds-finai-IQg76LzD.js";import"./@salutejs/sdds-themes-Vr3JnkPl.js";import"./utils-DNQYxIkO.js";import"./constants-v5_v1I5t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-KrQX0bHg.js";import"./TextField-DUu2W4KW.js";import"./sharedUtilsInputs-r7eF8f6G.js";import"./AiAgentPopup-B3AOKj3I.js";import"./TextArea-7Ax-7Aal.js";import"./sharedUtilsResizable-CfYaji3Z.js";import"./Collapse-DgjnN8dP.js";import"./react-data-grid-Bohr1s08.js";import"./TableTabs-DG-QM4lW.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BTq0wMOr.js";import"./@glideappsfinal/glide-data-grid-oedSHeBc.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CVlK0W18.js";import"./ListOfFilters-Ddwho-dO.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DLKtafj0.js";import"./EmptyState-8hYOoc-8.js";import"./MassActions-CsK1iZLD.js";import"./Autocomplete-aE86xpUc.js";function e(r){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
