import{j as o}from"./react-UEdzNlUe.js";import{dd as i}from"./vendor-mKquPocI.js";import{M as e,S as m}from"./WithTooltip-KJL26V4Q-C9snA44b.js";import{T as s}from"./TableCanvas.selectingRow.counterMaxCount.stories-CpYJhgWE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-ChsoKbNC.js";import"./@tanstack/react-virtual-QRzx54Th.js";import"./preload-helper-C_zUFXUY.js";import"./index-Cu4lwwaE.js";import"./index-Bq810BSt.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CB_7t9Cx.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CRx_kDPA.js";import"./@sddsjs/sdds_finai-D-rO1ecf.js";import"./utils-BKJAJHmZ.js";import"./constants-Dyz8I1EV.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-VaULiTXd.js";import"./@salutejs/plasma-icons-CDOReZb2.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-awb76Wuo.js";import"./Box-tzqS-Nh4.js";import"./Collapse-Dk4xyTvf.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DgsIxXVT.js";import"./@daisforge/glide-data-grid-CoDMDuM0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-X5QbWM5x.js";import"./sharedUiSearch-BNtxvxkI.js";import"./TextField-BH-nuXGv.js";import"./sharedUtilsInputs-xaz4bJTm.js";import"./TypographyWithAutoTooltip-DO5Wyg6d.js";import"./Typography-BsQ2VcTJ.js";import"./ListOfFilters-5mX5dD9s.js";import"./Table-DuR0Uj1s.js";import"./react-data-grid-CYj7lJMP.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Vk_4eWtq.js";import"./NumberFormat-C8SB7VXR.js";import"./EmptyState-CTTWUA7X.js";import"./unidentified@3x-B3KotUFa.js";import"./MassActions-B98MzVUU.js";import"./Autocomplete-B0NP7NUX.js";import"./FiltersActions-DMBf9g3f.js";import"./IconButton-JRgxWTmA.js";import"./TooltipList-CUZXP-B-.js";import"./ErrorPage-C-06bH62.js";function n(r){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:s,name:"Docs"}),`
`,o.jsx(t.h1,{id:"selectingrow--ограничение-счётчика-99",children:"SelectingRow — ограничение счётчика (99+)"}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"tableConfig.selecting.summaryCounterMaxCount"})}),`
`,o.jsx(t.p,{children:`Ограничивает максимальное отображаемое число в счётчике выбранных строк — и в шапке
таблицы, и в панели массовых действий. Если выбрано больше — счётчик показывает «N+».`}),`
`,o.jsx(t.p,{children:`Не ограничивает само выделение (выбрать можно сколько угодно), влияет только на
отображение числа.`}),`
`,o.jsx(t.h2,{id:"использование",children:"Использование"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    selecting: {
      state: selectingRowState,
      rowKeyGetter: (r) => r.id,
      // при > 99 выбранных счётчик покажет «99+»
      summaryCounterMaxCount: 99,
    },
  }}
  columnConfig={columns}
  rows={rows}
/>
`})}),`
`,o.jsx(t.h2,{id:"поведение",children:"Поведение"}),`
`,o.jsxs(t.ul,{children:[`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"selectedCount <= summaryCounterMaxCount"})," — показывается точное число."]}),`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"selectedCount > summaryCounterMaxCount"})," — показывается ",o.jsx(t.code,{children:"«summaryCounterMaxCount+»"}),`
(например, `,o.jsx(t.code,{children:"99+"}),")."]}),`
`,o.jsx(t.li,{children:"Поле опционально: без него счётчик показывает точное число без ограничения."}),`
`]}),`
`,o.jsxs(t.blockquote,{children:[`
`,o.jsxs(t.p,{children:["Типы SelectingRow — ",o.jsx(t.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-selectingrow-api--docs",children:"SelectingRow API"})]}),`
`]}),`
`,o.jsx(m,{})]})}function mo(r={}){const{wrapper:t}={...i(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(n,{...r})}):n(r)}export{mo as default};
