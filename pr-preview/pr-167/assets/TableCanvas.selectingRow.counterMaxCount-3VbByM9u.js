import{j as o}from"./react-D2T61mpp.js";import{cg as e,ch as i,ca as s}from"./vendor-DwW8LqKs.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-DipTOQFv.js";import"./react-is-Clcustum.js";import"./styled-components-1frum_Yc.js";import"./@tanstack/react-virtual-CthE9Oqn.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DuWZhT7s.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D7QRUhKc.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-C5maJ9G-.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BwFSsjRU.js";import"./@salutejs/plasma-icons-DWunODz3.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-SGZYFAOX.js";import"./IconButton-Dmz8Yv99.js";import"./Box-B3cJI3Bx.js";import"./TextField-CaI32qtw.js";import"./sharedUtilsInputs-4zeFszBE.js";import"./AiAgentPopup-B22-q1kn.js";import"./TextArea-DnUBSOiL.js";import"./sharedUtilsResizable-CCQdmhhl.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-DfxjG4uH.js";import"./Collapse-CIjdbheU.js";import"./react-data-grid-SqQm33Cs.js";import"./TableTabs-BOG9ojUr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DMHF3_fQ.js";import"./@glideappsfinal/glide-data-grid-CflI70pl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CvXKm-7P.js";import"./ListOfFilters-mvmBUHke.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CZ94oSen.js";import"./EmptyState-B3kzHRdp.js";import"./MassActions-CcFLK7st.js";import"./Autocomplete-CblrzfQ7.js";import"./ErrorPage-OzNFkeR6.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
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
