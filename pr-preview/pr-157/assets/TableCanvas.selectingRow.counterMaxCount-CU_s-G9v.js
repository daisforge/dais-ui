import{j as o}from"./react-D2T61mpp.js";import{cg as e,ch as i,ca as s}from"./vendor-8LkLf-EW.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-BQVtU-qV.js";import"./react-is-Clcustum.js";import"./styled-components-977JO8e_.js";import"./@tanstack/react-virtual-DFitcOyT.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DC97wo5K.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Mbw1YkT2.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-Bz10k1I6.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B1oBtYhP.js";import"./@salutejs/plasma-icons-BdpyX49f.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-C8zJtQCS.js";import"./IconButton-F7tjg1RO.js";import"./Box-kyMLzOlr.js";import"./TextField-CqanmeIn.js";import"./sharedUtilsInputs-Dhx-TaFa.js";import"./AiAgentPopup-DI4jXySu.js";import"./TextArea-B9dO1dvT.js";import"./sharedUtilsResizable-0LtnTkr-.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-ILp9g_js.js";import"./Collapse-sIF2WGK9.js";import"./react-data-grid-DeoNXEWJ.js";import"./TableTabs-BTy1FtUr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-B09rarZh.js";import"./@glideappsfinal/glide-data-grid-DyEz4IEh.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DSpqG_CO.js";import"./ListOfFilters-LyTm63hj.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-G9s9w3SE.js";import"./EmptyState-DB9rzJCX.js";import"./MassActions-CkFKx0e4.js";import"./Autocomplete-K1up5yCj.js";import"./ErrorPage-cEwVQA9v.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
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
