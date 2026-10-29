import{j as n}from"./react-D2T61mpp.js";import{cf as e,cg as i,c9 as s}from"./vendor-BTgOIwj0.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-Cvvnf2ci.js";import"./react-is-Clcustum.js";import"./styled-components-PB4DoqG2.js";import"./@tanstack/react-virtual-B3EvV2UQ.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C4a7uvc5.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D5Pb-Cj8.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-B84KHSWA.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CsahcQ0V.js";import"./@salutejs/plasma-icons-IcEIFYts.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-C1nZhs7l.js";import"./IconButton-BCM0YFM1.js";import"./Box-DRjMmnr9.js";import"./TextField--v3J_G2n.js";import"./sharedUtilsInputs-CFlPlIWZ.js";import"./AiAgentPopup-D6JdqjAn.js";import"./TextArea-DlhM1poH.js";import"./sharedUtilsResizable-CyABPlSh.js";import"./Table-Deb9Du_S.js";import"./Collapse-BUJKQXnc.js";import"./react-data-grid-DpCuKNZS.js";import"./TableTabs-DvrS0MvP.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BDLt1zMA.js";import"./@glideappsfinal/glide-data-grid-COOgAVL8.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DuLvsSde.js";import"./ListOfFilters-CYjThT3P.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-AFwXkphx.js";import"./EmptyState-BubZ3CIh.js";import"./MassActions-Bb4P7pOw.js";import"./Autocomplete-BFYniy2H.js";import"./ErrorPage-CAAKLkMU.js";function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
