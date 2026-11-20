import{j as o}from"./react-B60MRyL7.js";import{ck as s}from"./vendor-OPtbd1lp.js";import{M as i,S as t}from"./WithTooltip-KJL26V4Q-D2QxBZA4.js";import{T as m}from"./TableCanvas.summaryRows.stories-Bx9SeYql.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-BRw6YPBr.js";import"./@tanstack/react-virtual-EFiood7F.js";import"./preload-helper-BnDtJV8M.js";import"./index-Cu4lwwaE.js";import"./index-B1pIjx6t.js";import"./@salutejs/plasma-icons-ByrhRzX2.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-9ZvOS3J-.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-BdcmQ601.js";import"./index-BFB8ouFt.js";import"./TableCanvas-i_zHUc1M.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./utils-CYK0V5oQ.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-K3Gf3X3y.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-B7Wr7FLp.js";import"./Box-CbEpyrne.js";import"./Collapse-B4Pt_8zE.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BCFvwvMl.js";import"./@glideappsfinal/glide-data-grid-CK8QPVqj.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-BNIyHIhR.js";import"./sharedUiSearch-B9tld89l.js";import"./TextField-Bp7ffrmf.js";import"./sharedUtilsInputs-wVAiPvsc.js";import"./TypographyWithAutoTooltip-CVRx3Ji6.js";import"./Typography-CkVSDpr_.js";import"./ListOfFilters-PkVmd9qw.js";import"./Table-B87AmCdC.js";import"./react-data-grid-CajG19ED.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cf4MX0VM.js";import"./NumberFormat-BNkvGrJn.js";import"./EmptyState-CFVMNuoE.js";import"./unidentified@3x-DTMrHY6B.js";import"./MassActions-CCL9cJtX.js";import"./Autocomplete-pcaxmLXN.js";import"./FiltersActions-DmLL2joa.js";import"./IconButton-C1QgcvzB.js";import"./TooltipList-C_-CLRgD.js";import"./ErrorPage-BrDBiR7U.js";function e(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
`,o.jsx(r.h1,{id:"summary-rows",children:"Summary Rows"}),`
`,o.jsx(r.p,{children:o.jsx(r.strong,{children:"tableConfig.summaryRows + пропс bottomSummaryRows"})}),`
`,o.jsx(r.p,{children:"Итоговые строки в нижней части таблицы."}),`
`,o.jsx(r.p,{children:"Конфигурация состоит из двух частей:"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsxs(r.li,{children:[o.jsx(r.strong,{children:o.jsx(r.code,{children:"tableConfig.summaryRows"})})," (",o.jsx(r.code,{children:"SummaryRowsConfig"}),") — настройка видимости и кнопки в control block"]}),`
`,o.jsxs(r.li,{children:[o.jsxs(r.strong,{children:["Пропс ",o.jsx(r.code,{children:"bottomSummaryRows"})]})," (",o.jsx(r.code,{children:"SummaryRowType[]"}),") — массив данных для итоговых строк"]}),`
`]}),`
`,o.jsx(r.h2,{id:"tableconfigsummaryrows-summaryrowsconfig",children:"tableConfig.summaryRows (SummaryRowsConfig)"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsxs(r.li,{children:[o.jsx(r.strong,{children:o.jsx(r.code,{children:"showDefault"})})," ",o.jsx(r.code,{children:"boolean"})," — показывать итоговые строки по умолчанию"]}),`
`,o.jsxs(r.li,{children:[o.jsx(r.strong,{children:o.jsx(r.code,{children:"showInControl"})})," ",o.jsx(r.code,{children:"boolean"})," — кнопка переключения видимости в control block"]}),`
`,o.jsxs(r.li,{children:[o.jsx(r.strong,{children:o.jsx(r.code,{children:"onChange"})})," ",o.jsx(r.code,{children:"(checked: boolean) => void"})," — вызывается, когда пользователь переключает тогл «Итоговые строки» в настройках таблицы. Не вызывается при монтировании"]}),`
`]}),`
`,o.jsx(r.h3,{id:"сохранение-выбора-пользователя",children:"Сохранение выбора пользователя"}),`
`,o.jsxs(r.p,{children:["Сохраните значение в ",o.jsx(r.code,{children:"onChange"})," и передайте его обратно в ",o.jsx(r.code,{children:"showDefault"}),":"]}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-tsx",children:`const STORAGE_KEY = 'my-table:summary-rows';

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
`,o.jsxs(r.blockquote,{children:[`
`,o.jsxs(r.p,{children:[o.jsx(r.code,{children:"showDefault"})," читается только при монтировании таблицы. Если поменять его позже, текущее состояние тогла не изменится."]}),`
`]}),`
`,o.jsx(r.h2,{id:"пропс-bottomsummaryrows",children:"Пропс bottomSummaryRows"}),`
`,o.jsxs(r.p,{children:["Массив объектов ",o.jsx(r.code,{children:"SummaryRowType[]"}),", передаётся напрямую в компонент ",o.jsx(r.code,{children:"TableCanvas"}),". Количество элементов массива = количество итоговых строк. Пустой массив — итоговые строки не отображаются."]}),`
`,o.jsx(r.h2,{id:"рендер-в-columnconfig",children:"Рендер в columnConfig"}),`
`,o.jsxs(r.p,{children:["Кастомный рендер через ",o.jsx(r.code,{children:"renderSummaryCell"})," в конфигурации колонки. Данные итоговой строки доступны через ",o.jsx(r.code,{children:"row"}),"."]}),`
`,o.jsx(r.h2,{id:"особенности",children:"Особенности"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsxs(r.li,{children:["Необходимо соблюдать отступы ячеек через ",o.jsx(r.code,{children:"theme.cellHorizontalPadding"})]}),`
`]}),`
`,o.jsxs(r.blockquote,{children:[`
`,o.jsxs(r.p,{children:["Подробнее о типах — ",o.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-summaryrows-api--docs",children:"Summary Rows API"})]}),`
`]}),`
`,o.jsx(t,{})]})}function co(n={}){const{wrapper:r}={...s(),...n.components};return r?o.jsx(r,{...n,children:o.jsx(e,{...n})}):e(n)}export{co as default};
