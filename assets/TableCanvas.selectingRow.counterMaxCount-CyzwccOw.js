import{j as n}from"./react-D2T61mpp.js";import{cg as e,ch as i,ca as s}from"./vendor-DhPQnvNP.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-CjjCSXR2.js";import"./react-is-Clcustum.js";import"./styled-components-D2iYy2uM.js";import"./@tanstack/react-virtual-DonijgCh.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C8MKfFxP.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CtDXR6sM.js";import"./FiltersActions-CLe33RcG.js";import"./IconButton-DbjMdgRP.js";import"./@salutejs/plasma-icons-Duq7ysyN.js";import"./@salutejs/sdds-finai-BD5fhF9i.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-CEczJKOt.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C5xCp2yD.js";import"./TextField-CsSlqUbx.js";import"./sharedUtilsInputs-5r9tslRT.js";import"./AiAgentPopup-C62dlwE-.js";import"./TextArea-CB5TA1ke.js";import"./sharedUtilsResizable-4btFEOm_.js";import"./Table-DSX9J23j.js";import"./Collapse-CeSlpnVB.js";import"./react-data-grid-CrmilZIk.js";import"./TableTabs-DJtpo5Ax.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CpRVk69d.js";import"./ListOfFilters-Bk0Z2nOk.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Capqp8AZ.js";import"./EmptyState-DwNB7vmB.js";import"./MassActions-CyL5s2MM.js";import"./Autocomplete-DvLjjVr2.js";import"./TableGlide-B9U6X1Yz.js";import"./@glideappsfinal/glide-data-grid-DawffSjL.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-Dw7x_35p.js";function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
