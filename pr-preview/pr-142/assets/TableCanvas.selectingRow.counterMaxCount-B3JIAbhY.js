import{j as n}from"./react-D2T61mpp.js";import{cf as e,cg as i,c9 as s}from"./vendor-BA2uJqm3.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-Dj8nFpTK.js";import"./react-is-Clcustum.js";import"./styled-components-DI0RiSri.js";import"./@tanstack/react-virtual-DMW_htbC.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BZYLyq8m.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Cnk4HLGu.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BjrMZFsU.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-HGBzAa3l.js";import"./@salutejs/plasma-icons-DwAv7YrD.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CqtjD7fq.js";import"./IconButton-BybKUD7Y.js";import"./Box-ZOkrcsKi.js";import"./TextField-DZKR2GVq.js";import"./sharedUtilsInputs-CnW24mU9.js";import"./AiAgentPopup-ByfmyI4w.js";import"./TextArea-BI7NPZWg.js";import"./sharedUtilsResizable-B9o-tffI.js";import"./Table-C6ylUQN9.js";import"./Collapse-CKc8B8rW.js";import"./react-data-grid-6LdYXpuk.js";import"./TableTabs-EpzcYvI8.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DKhcFH5P.js";import"./@glideappsfinal/glide-data-grid-3eF0LrAd.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DC9JYQJ1.js";import"./ListOfFilters-BaD6Bsow.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B0gQLxCm.js";import"./EmptyState-BKK3EFcw.js";import"./MassActions-CHP0YYiG.js";import"./Autocomplete-CeKUjrvz.js";import"./ErrorPage-4f41r735.js";function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
