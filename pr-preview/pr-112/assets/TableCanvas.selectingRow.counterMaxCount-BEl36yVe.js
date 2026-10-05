import{j as n}from"./react-D2T61mpp.js";import{cg as e,ch as i,ca as s}from"./vendor-D5ksoKVH.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-DZ1z6651.js";import"./react-is-Clcustum.js";import"./styled-components-D25eSAdU.js";import"./@tanstack/react-virtual-CcsrX5aI.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CULZMprL.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BgmZGpeA.js";import"./FiltersActions-CiLziyST.js";import"./IconButton-DCipKgzy.js";import"./@salutejs/plasma-icons-BRkukb6y.js";import"./@salutejs/sdds-finai-G2aVpXbv.js";import"./@salutejs/sdds-themes-BWS17lsS.js";import"./utils-DY9d88UX.js";import"./constants-BEafpjqR.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-hGH9Ev5B.js";import"./TextField-Zdhnrw9a.js";import"./sharedUtilsInputs-CyrAJ58I.js";import"./AnalyticalWidget-B93Ec9oI.js";import"./Collapse-BbCxqkVZ.js";import"./Table-DBrSESem.js";import"./react-data-grid-jPm4j1rq.js";import"./TableTabs-Bfy9HsUo.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DqNGPxPU.js";import"./ListOfFilters-Be1Y1HD9.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BUGjpCZS.js";import"./EmptyState-DhJ9FPgN.js";import"./MassActions-D_W-S-Ep.js";import"./Autocomplete-B8q4vCvI.js";import"./TableGlide-CzV1iRzU.js";import"./@glideappsfinal/glide-data-grid-g-u0ZH_x.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DaKZunQK.js";function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
`,n.jsx(s,{})]})}function Q(t={}){const{wrapper:o}={...e(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(r,{...t})}):r(t)}export{Q as default};
