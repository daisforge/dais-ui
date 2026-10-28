import{j as n}from"./react-D2T61mpp.js";import{cf as s,cg as i,c9 as t}from"./vendor-BotQo-m5.js";import{T as m}from"./Table.summaryRows.stories-BWVEPQhm.js";import"./react-is-Clcustum.js";import"./styled-components-CA2CAEjL.js";import"./@tanstack/react-virtual-Cn23thnX.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CjcIKVa0.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-DVcPkNAG.js";import"./FiltersActions-BrOqDQXK.js";import"./IconButton-BLPpYxfQ.js";import"./@salutejs/plasma-icons-BBqnx34S.js";import"./@salutejs/sdds-finai-BtdE48Lf.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BIQM_xtj.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-jWxNdqW7.js";import"./TextField-Dd9lYuZ2.js";import"./sharedUtilsInputs-v-GJdVCM.js";import"./AiAgentPopup-CHrWBtUf.js";import"./TextArea-hWn3946V.js";import"./sharedUtilsResizable-PvK4CQUI.js";import"./Collapse-BJMU9AEU.js";import"./react-data-grid-Dh_hmPqE.js";import"./TableTabs-B4MPujqJ.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BM6g4kVu.js";import"./@glideappsfinal/glide-data-grid-DbAheAp7.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DRWFcFum.js";import"./ListOfFilters-CUe1YjKA.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DHVvTJRQ.js";import"./EmptyState-D2lYNppY.js";import"./MassActions-BL9KuBG8.js";import"./Autocomplete-Ch9XmMC9.js";function e(r){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
