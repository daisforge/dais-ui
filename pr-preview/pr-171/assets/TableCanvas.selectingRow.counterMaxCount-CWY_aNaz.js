import{j as o}from"./react-D2T61mpp.js";import{cg as e,ch as i,ca as s}from"./vendor-BmL46prH.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-dmfCqpjK.js";import"./react-is-Clcustum.js";import"./styled-components-CyOceNjt.js";import"./@tanstack/react-virtual-CEJoHVNI.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BYIkUkCL.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D5Zi7e2U.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-6kvC9zOe.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B4e86Xc-.js";import"./@salutejs/plasma-icons-DbUQJRbT.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-B423Xt4W.js";import"./IconButton-DnjPgYWr.js";import"./Box-HfshwQ72.js";import"./TextField-D4EQU3D4.js";import"./sharedUtilsInputs-C8sO4urP.js";import"./AiAgentPopup-BC81awZJ.js";import"./TextArea-BqRvnq3h.js";import"./sharedUtilsResizable-ClSuuCqy.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-mTQ85T_a.js";import"./Collapse-BiF_WNR3.js";import"./react-data-grid-DB-YTYp0.js";import"./TableTabs-U-NZ5xBR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-ftJ7ps6J.js";import"./@glideappsfinal/glide-data-grid-RJ57Hb16.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-gPdmbVPM.js";import"./ListOfFilters-DZepwfBB.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-cHgA1Txf.js";import"./EmptyState-CdAMnbo3.js";import"./MassActions-pOIXUe8R.js";import"./Autocomplete-D74rpNF3.js";import"./ErrorPage-7lZFk0qk.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
`,o.jsx(n.h1,{id:"selectingrow--ограничение-счётчика-99",children:"SelectingRow — ограничение счётчика (99+)"}),`
`,o.jsx(n.p,{children:o.jsx(n.strong,{children:"tableConfig.selecting.summaryCounterMaxCount"})}),`
`,o.jsx(n.p,{children:`Ограничивает максимальное отображаемое число в счётчике выбранных строк — и в шапке
таблицы, и в панели массовых действий. Если выбрано больше — счётчик показывает «N+».`}),`
`,o.jsx(n.p,{children:`Не ограничивает само выделение (выбрать можно сколько угодно), влияет только на
отображение числа.`}),`
`,o.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`<TableCanvas
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
`,o.jsx(n.h2,{id:"поведение",children:"Поведение"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsxs(n.li,{children:[o.jsx(n.code,{children:"selectedCount <= summaryCounterMaxCount"})," — показывается точное число."]}),`
`,o.jsxs(n.li,{children:[o.jsx(n.code,{children:"selectedCount > summaryCounterMaxCount"})," — показывается ",o.jsx(n.code,{children:"«summaryCounterMaxCount+»"}),`
(например, `,o.jsx(n.code,{children:"99+"}),")."]}),`
`,o.jsx(n.li,{children:"Поле опционально: без него счётчик показывает точное число без ограничения."}),`
`]}),`
`,o.jsxs(n.blockquote,{children:[`
`,o.jsxs(n.p,{children:["Типы SelectingRow — ",o.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-selectingrow-api--docs",children:"SelectingRow API"})]}),`
`]}),`
`,o.jsx(s,{})]})}function Y(t={}){const{wrapper:n}={...e(),...t.components};return n?o.jsx(n,{...t,children:o.jsx(r,{...t})}):r(t)}export{Y as default};
