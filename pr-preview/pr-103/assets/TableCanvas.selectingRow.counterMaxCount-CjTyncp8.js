import{j as n}from"./react-D2T61mpp.js";import{cg as e,ch as i,ca as s}from"./vendor-DsFeUL09.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-BdME_LeI.js";import"./react-is-Clcustum.js";import"./styled-components-O_krvvCX.js";import"./@tanstack/react-virtual-BCPwVVnJ.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-D6BIwH0_.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DoKdUQfq.js";import"./FiltersActions-B1Mo3v7r.js";import"./IconButton-DdpmtIjN.js";import"./@salutejs/plasma-icons-DqmcfyVz.js";import"./@salutejs/sdds-finai-BjfIx4sN.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-hwhXma_H.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BawNPcfc.js";import"./TextField-DIWp19Iz.js";import"./sharedUtilsInputs-D1iFx1DV.js";import"./AnalyticalWidget-BPcIBn5Y.js";import"./Collapse-DUZilFg9.js";import"./Table-DyvQOGzQ.js";import"./react-data-grid-CPpM2y8F.js";import"./TableTabs-CC2-oyMN.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch--7XL765-.js";import"./ListOfFilters-kvbylHP-.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Ctn-acn9.js";import"./EmptyState-B_3-NYcL.js";import"./MassActions-DIewT0fP.js";import"./Autocomplete-BBgll0MU.js";import"./TableGlide-MpCtJcaJ.js";import"./@glideappsfinal/glide-data-grid-B-TU-a0Z.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-D29nfpXj.js";function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
