import{j as o}from"./react-DNGZQ4GM.js";import{ck as i}from"./vendor-BbbJ9Z83.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-ZJQwZcgM.js";import{T as m}from"./Table.summaryRows.stories-B9NGRA61.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-vVGXX3JE.js";import"./styled-components-D_Edv4_h.js";import"./@tanstack/react-virtual-CcNjsb-5.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-CuyfXGnQ.js";import"./@salutejs/plasma-icons-BJIYJCV4.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-D8gcSeh5.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-BmaccWcy.js";import"./index-BFB8ouFt.js";import"./Table-BDqwvkNH.js";import"./index-L9H5tuHV.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./@salutejs/sdds-finai-BuI7JyX1.js";import"./Box-1lujwMH2.js";import"./Collapse-CCWmnco9.js";import"./utils-DoXDRJ4u.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./react-data-grid-CiWOk-dj.js";import"./TableTabs-DsUIER9h.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-PAsMjfPb.js";import"./@glideappsfinal/glide-data-grid-BCJEzwn8.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-DTtAc4Ys.js";import"./sharedUiSearch-DtK2Kt5u.js";import"./TextField-dI5Q6Mwb.js";import"./sharedUtilsInputs-BcRl6j87.js";import"./TypographyWithAutoTooltip-C3PM-cpw.js";import"./Typography-CIXQr6Yl.js";import"./ListOfFilters-NwMG4Gt8.js";import"./FiltersActions-CwpBf5qJ.js";import"./IconButton-DFBxeTV9.js";import"./TooltipList-C8NjZIWl.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Deh6I-nV.js";import"./NumberFormat-Ja5qKQtO.js";import"./EmptyState-KjA_X5Eh.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-CIAtDoD6.js";import"./Autocomplete-CDywWsDe.js";function e(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(t,{of:m,name:"Docs"}),`
`,o.jsx(r.h1,{id:"summary-rows",children:"Summary Rows"}),`
`,o.jsx(r.p,{children:o.jsx(r.strong,{children:"tableConfig.summaryRows"})}),`
`,o.jsx(r.p,{children:"Итоговые строки в верхней и/или нижней части таблицы."}),`
`,o.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsxs(r.li,{children:["Отображение итогов через ",o.jsx(r.code,{children:"topSummaryRows"})," и ",o.jsx(r.code,{children:"bottomSummaryRows"})," пропсы"]}),`
`,o.jsxs(r.li,{children:["Кнопка переключения видимости в control block (",o.jsx(r.code,{children:"showInControl: true"}),")"]}),`
`,o.jsxs(r.li,{children:["Кастомный рендер через ",o.jsx(r.code,{children:"renderSummaryCell"})," в ",o.jsx(r.code,{children:"columnConfig"})]}),`
`,o.jsxs(r.li,{children:["Колбэк ",o.jsx(r.code,{children:"onChange(checked)"}),": вызывается, когда пользователь переключает тогл «Итоговые строки» в настройках таблицы. Не вызывается при монтировании"]}),`
`]}),`
`,o.jsx(r.h2,{id:"сохранение-выбора-пользователя",children:"Сохранение выбора пользователя"}),`
`,o.jsxs(r.p,{children:["Сохраните значение в ",o.jsx(r.code,{children:"onChange"})," и передайте его обратно в ",o.jsx(r.code,{children:"showDefault"}),":"]}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-tsx",children:`const STORAGE_KEY = 'my-table:summary-rows';

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
`,o.jsxs(r.blockquote,{children:[`
`,o.jsxs(r.p,{children:[o.jsx(r.code,{children:"showDefault"})," читается только при монтировании таблицы. Если поменять его позже, текущее состояние тогла не изменится."]}),`
`]}),`
`,o.jsx(r.h2,{id:"особенности",children:"Особенности"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsx(r.li,{children:"Количество элементов массива = количество итоговых строк"}),`
`,o.jsx(r.li,{children:"Пустой массив — итоговые строки не отображаются"}),`
`,o.jsxs(r.li,{children:[o.jsx(r.code,{children:"renderSummaryCell"})," получает ",o.jsx(r.code,{children:"RenderSummaryCellProps"})," с данными итоговой строки"]}),`
`]}),`
`,o.jsxs(r.blockquote,{children:[`
`,o.jsxs(r.p,{children:["Подробнее о типах и пропсах — ",o.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-summaryrows-api--docs",children:"Summary Rows API"})]}),`
`]}),`
`,o.jsx(s,{})]})}function so(n={}){const{wrapper:r}={...i(),...n.components};return r?o.jsx(r,{...n,children:o.jsx(e,{...n})}):e(n)}export{so as default};
