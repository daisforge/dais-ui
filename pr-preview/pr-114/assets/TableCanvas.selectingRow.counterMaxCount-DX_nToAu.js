import{j as n}from"./react-D2T61mpp.js";import{cg as e,ch as i,ca as s}from"./vendor-BGzzYN-b.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-2tpDSVhF.js";import"./react-is-Clcustum.js";import"./styled-components-CD4KFY2h.js";import"./@tanstack/react-virtual-7i3ITNa_.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-fMZZ290W.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-wkKiHt_9.js";import"./FiltersActions-a7bIw2Fz.js";import"./IconButton-BsuSMrKD.js";import"./@salutejs/plasma-icons-DoqG1pWM.js";import"./@salutejs/sdds-finai-DvhCM2Xz.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-BopI5f_-.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B5Lk0A0c.js";import"./TextField-1s64aVQu.js";import"./sharedUtilsInputs-D8S3qiky.js";import"./AiAgentPopup-BjpWl_pW.js";import"./TextArea-Dx3aHTDW.js";import"./sharedUtilsResizable-CdV8UiPe.js";import"./Table-CA6ZUQ5N.js";import"./Collapse-CWsg-GsF.js";import"./react-data-grid-BIBmSmvS.js";import"./TableTabs-BxgxHb0J.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-tcONULjm.js";import"./@glideappsfinal/glide-data-grid-BU--_Fv5.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-y7IwLXgM.js";import"./ListOfFilters-BuQDevqY.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D8XT1I-j.js";import"./EmptyState-DMkiJ__L.js";import"./MassActions-C5VaWbKf.js";import"./Autocomplete-BFrIC_iF.js";import"./ErrorPage-D7Xw8vJ0.js";function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
