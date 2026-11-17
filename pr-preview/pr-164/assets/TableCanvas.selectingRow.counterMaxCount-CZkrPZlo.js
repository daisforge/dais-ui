import{j as n}from"./react-D2T61mpp.js";import{cg as e,ch as i,ca as s}from"./vendor-CYVD37V9.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-CmjdZRzb.js";import"./react-is-Clcustum.js";import"./styled-components-C94YjM-8.js";import"./@tanstack/react-virtual-DYxCMooD.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DvUM61Pg.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CHuwNZWq.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-OTWlClTX.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BT4-yN4n.js";import"./@salutejs/plasma-icons-Di_vIjuB.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-B0S9lToY.js";import"./IconButton-Bl9eVzQ1.js";import"./Box-BDjyaOfr.js";import"./TextField-DJ8wqApr.js";import"./sharedUtilsInputs-O8EZTBuY.js";import"./AiAgentPopup-CS0gDDq9.js";import"./TextArea-Er2Rljvl.js";import"./sharedUtilsResizable-CQuiSWfk.js";import"./Table-lyC942h-.js";import"./Collapse-CXaAgnpP.js";import"./react-data-grid-9BbtrEpY.js";import"./TableTabs-Bc0SII-y.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DpiyFBdU.js";import"./@glideappsfinal/glide-data-grid-Pr7m0T0T.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BE-fJFxc.js";import"./ListOfFilters-C94OnlYQ.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DQK6oHzg.js";import"./EmptyState-DN6TMa0i.js";import"./MassActions-CJNv5QLV.js";import"./Autocomplete-C-gIuhgS.js";import"./ErrorPage-DtTks04o.js";function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
