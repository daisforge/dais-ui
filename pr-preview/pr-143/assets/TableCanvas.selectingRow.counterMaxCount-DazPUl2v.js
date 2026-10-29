import{j as n}from"./react-D2T61mpp.js";import{cf as e,cg as i,c9 as s}from"./vendor-Dov7lcnd.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-DUZv41SZ.js";import"./react-is-Clcustum.js";import"./styled-components-Ke_BiRQi.js";import"./@tanstack/react-virtual-CfZrfYDd.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CXSs-ref.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CcfJrYlm.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-Dfe4gMUl.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DSVjdAOr.js";import"./@salutejs/plasma-icons-pFROsTm3.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-DwPPbWBC.js";import"./IconButton-BTx9fPoE.js";import"./Box-B948mfxh.js";import"./TextField-CssRTeIq.js";import"./sharedUtilsInputs-DZU7ieGU.js";import"./AiAgentPopup-7Q7ThSgj.js";import"./TextArea-DkBAWUR6.js";import"./sharedUtilsResizable-fsLemrg8.js";import"./Table-yApPOcan.js";import"./Collapse-CVQHosTk.js";import"./react-data-grid-DGggzB1_.js";import"./TableTabs-CrSfltDJ.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Df11Itmg.js";import"./@glideappsfinal/glide-data-grid-CFj9HtB2.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DQWQsuV4.js";import"./ListOfFilters-Yo2fQzXD.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CYyuS_kw.js";import"./EmptyState-DU6VmXOw.js";import"./MassActions-Bhn6it7T.js";import"./Autocomplete-Bpp8FTQD.js";import"./ErrorPage-Dxl3k5LP.js";function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
`,n.jsx(o.h1,{id:"selectingrow--ограничение-счётчика-99",children:"SelectingRow — ограничение счётчика (99+)"}),`
`,n.jsx(o.p,{children:n.jsx(o.strong,{children:"tableConfig.selecting.summaryCounterMaxCount"})}),`
`,n.jsx(o.p,{children:`Ограничивает максимальное отображаемое число в счётчике выбранных строк — и в шапке
таблицы, и в панели массовых действий. Если выбрано больше — счётчик показывает «N+».`}),`
`,n.jsx(o.p,{children:`Не ограничивает само выделение (выбрать можно сколько угодно), влияет только на
отображение числа.`}),`
`,n.jsx(o.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`<TableCanvas
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
`,n.jsx(o.h2,{id:"поведение",children:"Поведение"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"selectedCount <= summaryCounterMaxCount"})," — показывается точное число."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"selectedCount > summaryCounterMaxCount"})," — показывается ",n.jsx(o.code,{children:"«summaryCounterMaxCount+»"}),`
(например, `,n.jsx(o.code,{children:"99+"}),")."]}),`
`,n.jsx(o.li,{children:"Поле опционально: без него счётчик показывает точное число без ограничения."}),`
`]}),`
`,n.jsxs(o.blockquote,{children:[`
`,n.jsxs(o.p,{children:["Типы SelectingRow — ",n.jsx(o.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-selectingrow-api--docs",children:"SelectingRow API"})]}),`
`]}),`
`,n.jsx(s,{})]})}function W(t={}){const{wrapper:o}={...e(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(r,{...t})}):r(t)}export{W as default};
