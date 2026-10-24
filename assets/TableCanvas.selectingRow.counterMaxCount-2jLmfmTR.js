import{j as n}from"./react-D2T61mpp.js";import{cf as e,cg as i,c9 as s}from"./vendor-DKgVyX2L.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-Oxtb3ash.js";import"./react-is-Clcustum.js";import"./styled-components-QcKq8yyO.js";import"./@tanstack/react-virtual-DeJ2XhRM.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CDRG2fMx.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CdtoQqC-.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BaaPIBp8.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-MgJxvWJH.js";import"./@salutejs/plasma-icons-B-uWCUvG.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-yJ24-sMA.js";import"./IconButton-DzGtIrYh.js";import"./Box-Chi_dMtZ.js";import"./TextField-C6dAK4iF.js";import"./sharedUtilsInputs-CTCmk_Eq.js";import"./AiAgentPopup-bCdyYi9W.js";import"./TextArea-DKagOhFu.js";import"./sharedUtilsResizable-_GDHoPjT.js";import"./Table-YzRJBPMf.js";import"./Collapse-IBBAdzJy.js";import"./react-data-grid-Dag3u3m7.js";import"./TableTabs-hoMdNnWG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DRRkL-9u.js";import"./@glideappsfinal/glide-data-grid-DYI0fUTl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-SCYYfULM.js";import"./ListOfFilters-ASzZ-zYH.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CAG3C_Yq.js";import"./EmptyState-isgyqG0r.js";import"./MassActions-cfj1yS0P.js";import"./Autocomplete-DIS1VcM6.js";import"./ErrorPage-B7CIZUqt.js";function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,name:"Docs"}),`
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
