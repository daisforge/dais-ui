import{j as o}from"./react-D2T61mpp.js";import{cg as e,ch as i,ca as s}from"./vendor-D9yMgLPo.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-BEWkv996.js";import"./react-is-Clcustum.js";import"./styled-components-OgUQMZXz.js";import"./@tanstack/react-virtual-BM_5ionr.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Bm_Oj0z3.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-soDGgzbZ.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-Cl6WWoGX.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BcE3eyQF.js";import"./@salutejs/plasma-icons-SFTiOUvf.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-DxiicKfY.js";import"./IconButton-BXb68VkC.js";import"./Box-CosW2s3A.js";import"./TextField-DraMCjNX.js";import"./sharedUtilsInputs-Ck5yP1gC.js";import"./AiAgentPopup-ZzlEkTA_.js";import"./TextArea-DyWT7sVd.js";import"./sharedUtilsResizable-BKQ41wCi.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-DmuAstj5.js";import"./Collapse-aXaFMJf0.js";import"./react-data-grid-uqI5kvQq.js";import"./TableTabs-RrUeWZbs.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CEu6kBhT.js";import"./@glideappsfinal/glide-data-grid-j2h7MKwi.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-ChUxs4OT.js";import"./ListOfFilters-CLNHVD0N.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Ca_D337R.js";import"./EmptyState-DHOkVsTD.js";import"./MassActions-B_L53EAf.js";import"./Autocomplete-CJfd2ggv.js";import"./ErrorPage-B2MKX5N_.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
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
