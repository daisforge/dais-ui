import{j as o}from"./react-UEdzNlUe.js";import{df as e}from"./vendor-BjJ6Dniq.js";import{M as i,S as m}from"./WithTooltip-KJL26V4Q-EsghDtie.js";import{T as s}from"./TableCanvas.selectingRow.counterMaxCount.stories-DEy1nBR_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./preload-helper-Cro6n4mv.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-B1u7dqTk.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-e-kICASA.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-JpoKTq_4.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CrHyedOo.js";import"./@salutejs/plasma-icons-BvdYvZ49.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-qQzmLoyi.js";import"./Box-CnSr-EOZ.js";import"./Collapse-dO_AAhkR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-2ryMzJhz.js";import"./@daisforge/glide-data-grid-C4IsfJNb.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-D8Dn7Hjz.js";import"./sharedUiSearch-ciLugbIZ.js";import"./TextField-D7c24dZh.js";import"./sharedUtilsInputs-C44yd4VS.js";import"./Typography-CbUXrNRB.js";import"./ListOfFilters-BAMQEU-g.js";import"./FiltersActions-DfAicICl.js";import"./IconButton-CK254hgH.js";import"./Tooltip-s8-CWCyN.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B8bYU2ET.js";import"./NumberFormat-kE1ol754.js";import"./EmptyState-B43KQCqF.js";import"./unidentified@3x-B3LEnvq5.js";import"./ErrorPage-CHRrmhnn.js";import"./Autocomplete-2PUvk-Tm.js";function r(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:s,name:"Docs"}),`
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
`,o.jsx(m,{})]})}function ro(n={}){const{wrapper:t}={...e(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{ro as default};
