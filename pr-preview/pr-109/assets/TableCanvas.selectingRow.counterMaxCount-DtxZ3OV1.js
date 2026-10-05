import{j as n}from"./react-D2T61mpp.js";import{cg as e,ch as i,ca as s}from"./vendor-B1FACA_r.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-BNP5UDB3.js";import"./react-is-Clcustum.js";import"./styled-components-Czlu6qqr.js";import"./@tanstack/react-virtual-DrX0EFe1.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-gjBC_cpo.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BQQc98Qg.js";import"./FiltersActions-CH8xaauD.js";import"./IconButton-C-n7bJYM.js";import"./@salutejs/plasma-icons-CjbHVl0P.js";import"./@salutejs/sdds-finai--PuHMRoP.js";import"./@salutejs/sdds-themes-BWS17lsS.js";import"./utils-CKv0bhEo.js";import"./constants-BEafpjqR.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BmI589K5.js";import"./TextField-CahOn8UN.js";import"./sharedUtilsInputs-CiVsvasY.js";import"./AnalyticalWidget-DvMXWrwT.js";import"./Collapse-DXoZuUZL.js";import"./Table-DFX6z6A1.js";import"./react-data-grid-DX8YTic5.js";import"./TableTabs-C8VF7wqq.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CljnP9UF.js";import"./ListOfFilters-DRScLidy.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BqQnF-7W.js";import"./EmptyState-C7Z_QCow.js";import"./MassActions-CqJY4Osk.js";import"./Autocomplete-Baz1F-1u.js";import"./TableGlide-C3gO1FBv.js";import"./@glideappsfinal/glide-data-grid-zNjaZ7hp.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DSvUkLix.js";function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
