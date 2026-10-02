import{j as n}from"./react-D2T61mpp.js";import{cg as e,ch as i,ca as s}from"./vendor-DWj-TKO5.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-BnfSX0Pm.js";import"./react-is-Clcustum.js";import"./styled-components-B0IEQUpD.js";import"./@tanstack/react-virtual-B0dXp-LB.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BvjsuRLP.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-2-4VuYfH.js";import"./FiltersActions-DtTzyBmn.js";import"./IconButton-1gOssj5s.js";import"./@salutejs/plasma-icons-LNSm6cYu.js";import"./@salutejs/sdds-finai-DUjmE73T.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CSDXMeGs.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-hmQcRD2u.js";import"./TextField-DGX7Sa0o.js";import"./sharedUtilsInputs-DzG4FOO7.js";import"./AnalyticalWidget-CGDbPkcb.js";import"./Collapse-DETPqTA2.js";import"./Table-CrQi45bh.js";import"./react-data-grid-CEeDAoVs.js";import"./TableTabs-Di9wtFJ3.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DK9El475.js";import"./ListOfFilters-M75mojE2.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-hJofMHHz.js";import"./EmptyState-B0MXEbXG.js";import"./MassActions-Bp4E7vbp.js";import"./Autocomplete-DSFH7iyv.js";import"./TableGlide-B1cgQFV9.js";import"./@glideappsfinal/glide-data-grid-BYHX9OEW.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-B_Y5Hkoz.js";function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
