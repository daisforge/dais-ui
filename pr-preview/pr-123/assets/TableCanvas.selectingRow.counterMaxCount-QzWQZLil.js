import{j as n}from"./react-D2T61mpp.js";import{cf as e,cg as i,c9 as s}from"./vendor-B-F5BwiT.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-CiLmTNLr.js";import"./react-is-Clcustum.js";import"./styled-components-DDYI5_us.js";import"./@tanstack/react-virtual-DxyRpwGh.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Gan0qpY_.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BOgVEhnO.js";import"./FiltersActions-CjrDmxSG.js";import"./IconButton-Dq7gJENj.js";import"./@salutejs/plasma-icons-D7D3QVQt.js";import"./@salutejs/sdds-finai-Dz54xmeF.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-qATeXBvn.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BojFrSdk.js";import"./TextField-DsdfbVm4.js";import"./sharedUtilsInputs-fAnuP3eT.js";import"./AiAgentPopup-DcxLtyCU.js";import"./TextArea-Dy8zIiNX.js";import"./sharedUtilsResizable-Drv80g_5.js";import"./Table-B9jLVYK9.js";import"./Collapse-CZ6vypm_.js";import"./react-data-grid-Ls6B6PvU.js";import"./TableTabs-B3UmUk-1.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BtsU5Rvy.js";import"./@glideappsfinal/glide-data-grid-B3gjTRnf.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-GtpT6NhR.js";import"./ListOfFilters-isImdyL1.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CLBLjy-0.js";import"./EmptyState-BCU1Cxr2.js";import"./MassActions-s0PrGFgF.js";import"./Autocomplete-BrtNEdWP.js";import"./ErrorPage-B0nGL0qR.js";function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
`,n.jsx(s,{})]})}function V(t={}){const{wrapper:o}={...e(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(r,{...t})}):r(t)}export{V as default};
