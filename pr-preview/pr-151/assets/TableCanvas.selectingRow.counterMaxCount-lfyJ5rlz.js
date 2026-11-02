import{j as n}from"./react-D2T61mpp.js";import{cf as e,cg as i,c9 as s}from"./vendor-CKkZ-t_g.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-B6AHwtA8.js";import"./react-is-Clcustum.js";import"./styled-components-CrBN_RvZ.js";import"./@tanstack/react-virtual-BloiM2g3.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Jo2cEHjF.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-INhtuV9E.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-CU-JHpYX.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DQw3oYuX.js";import"./@salutejs/plasma-icons-DjKwx_w6.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-VHGDZv6G.js";import"./IconButton-B8QlM1qp.js";import"./Box-Cwvb02Al.js";import"./TextField-B6gJbNNO.js";import"./sharedUtilsInputs-CWJ6Gepf.js";import"./AiAgentPopup-CE4Wcyt9.js";import"./TextArea-DYBF1Att.js";import"./sharedUtilsResizable-CrssgjcX.js";import"./Table-DsbRZAdH.js";import"./Collapse-C8_k6HmE.js";import"./react-data-grid-D4lRd-q3.js";import"./TableTabs-gSV4vu5u.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-mR3wY0N9.js";import"./@glideappsfinal/glide-data-grid-DL53d1uD.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-B7ho-1kI.js";import"./ListOfFilters-MGzF1gX5.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CrrIJDKM.js";import"./EmptyState-BYnQ-Vwo.js";import"./MassActions-BvMvKPpX.js";import"./Autocomplete-D8RxP6EW.js";import"./ErrorPage-egSgBjIO.js";function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
