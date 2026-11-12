import{j as o}from"./react-D2T61mpp.js";import{cg as e,ch as i,ca as s}from"./vendor-DEnmvFjy.js";import{T as m}from"./TableCanvas.selectingRow.counterMaxCount.stories-_KX_NEr5.js";import"./react-is-Clcustum.js";import"./styled-components-DldTWSFz.js";import"./@tanstack/react-virtual-D3zFBQki.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CtDXjnoY.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DjwcEHD5.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-BgMYkZVs.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-C2nSo9ZF.js";import"./@salutejs/plasma-icons-B_9bJsfG.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-xvgmZCri.js";import"./IconButton-DRI4VSmJ.js";import"./Box-B9JbqPS8.js";import"./TextField-DgPaIDCQ.js";import"./sharedUtilsInputs-B5WE-YkK.js";import"./AiAgentPopup-DfNbinHF.js";import"./TextArea-q3jTH-k_.js";import"./sharedUtilsResizable-kirulsbM.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-BZZLu_Wb.js";import"./Collapse-DPbYvhfL.js";import"./react-data-grid-q0eEcsXm.js";import"./TableTabs-SoiJtRGl.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BWh11llH.js";import"./@glideappsfinal/glide-data-grid-DyCN0Ui8.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-MuKV54Ye.js";import"./ListOfFilters-aoR5D-rr.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C_9_ZZbe.js";import"./EmptyState-CsbytIUe.js";import"./MassActions-ButHqY0O.js";import"./Autocomplete-B5mT052q.js";import"./ErrorPage-8XC1D-bd.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
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
