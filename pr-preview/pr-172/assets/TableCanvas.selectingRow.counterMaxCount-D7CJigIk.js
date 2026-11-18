import{j as o}from"./react-Ch9mc9Aq.js";import{da as e,db as i,d4 as s}from"./vendor-cmvNg_xr.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-mq_kU7A2.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-D5MvBPh5.js";import"./@tanstack/react-virtual-CWj59MZE.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-D5L1KJCt.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-C9UnQ2KY.js";import"./@sddsjs/sdds_finai-BSDEmCin.js";import"./utils-DqvTlrYy.js";import"./constants-l0ilsueG.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CEPim1an.js";import"./@salutejs/plasma-icons-CXjNGeWd.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-kUc7uIEk.js";import"./IconButton-Ci8npbZD.js";import"./Box-CuZNjBju.js";import"./TextField-C9YSau6k.js";import"./sharedUtilsInputs-Dc_ZEKpI.js";import"./AiAgentPopup-CBRZHYTN.js";import"./TextArea-CZ-SJBPH.js";import"./sharedUtilsResizable-ADoD9nRJ.js";import"./Table-BBFvPWgJ.js";import"./Collapse-B646xElm.js";import"./react-data-grid-DmYcaFlw.js";import"./TableTabs-BDRUMUlr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C8rFrP_I.js";import"./@glideappsfinal/glide-data-grid-CDZjoQw8.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-3anirXXN.js";import"./ListOfFilters-DzjjBcWt.js";import"./lodash.isequal-DQmZHUWu.js";import"./NumberFormat-BE3whBbA.js";import"./EmptyState-Ch15w3Sj.js";import"./MassActions-B7plPpId.js";import"./Autocomplete-D2V0L8mw.js";import"./ErrorPage-Bh17asus.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
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
