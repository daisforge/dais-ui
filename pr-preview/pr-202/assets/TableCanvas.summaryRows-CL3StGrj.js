import{j as o}from"./react-UEdzNlUe.js";import{dd as s}from"./vendor-2C5_55Sm.js";import{M as i,S as t}from"./WithTooltip-KJL26V4Q-ChrN_QIK.js";import{T as m}from"./TableCanvas.summaryRows.stories-C25XCqIX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-1kmEus0U.js";import"./@tanstack/react-virtual-BrFVuQDq.js";import"./preload-helper-KkJ3rXAN.js";import"./index-Cu4lwwaE.js";import"./index-BnZ2fnE9.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CC1Z5T16.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-Dgmteq0e.js";import"./index-BFB8ouFt.js";import"./TableCanvas-DW8An_EM.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./utils-C_hbAdEU.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DfKFI7EK.js";import"./@salutejs/plasma-icons-BrITifw3.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-DFPex1Sn.js";import"./Box-BOi9y4XS.js";import"./Collapse-x0oUGUsB.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DXsIXB4v.js";import"./@daisforge/glide-data-grid-CUklyPbR.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-D50d6bjv.js";import"./sharedUiSearch-BY0jf7jH.js";import"./TextField-BwkA6Skl.js";import"./sharedUtilsInputs-D5L343fc.js";import"./TypographyWithAutoTooltip-RZm0REWU.js";import"./Typography-CREaMJR1.js";import"./ListOfFilters-CTWZO35N.js";import"./FiltersActions-d1LIcgZD.js";import"./IconButton-DV8DLcRq.js";import"./TooltipList-BobQEzUM.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BrgB7_nv.js";import"./NumberFormat-B3Y-Udvb.js";import"./EmptyState-ChZrHtcO.js";import"./unidentified@3x-DnyuMWBO.js";import"./ErrorPage-Bif7_oQm.js";import"./Autocomplete-MySOQhA2.js";function e(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
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
`,o.jsx(t,{})]})}function io(r={}){const{wrapper:n}={...s(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(e,{...r})}):e(r)}export{io as default};
