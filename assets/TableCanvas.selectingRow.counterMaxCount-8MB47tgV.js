import{j as o}from"./react-DYHuXpTF.js";import{dd as e}from"./vendor-BpmB3NYD.js";import{M as i,S as m}from"./WithTooltip-KJL26V4Q-D-_6HSfR.js";import{T as s}from"./TableCanvas.selectingRow.counterMaxCount.stories-DvUCSEt8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-BADHLMuD.js";import"./@tanstack/react-virtual-uAYy1xUY.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BUhspFdO.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CN0PPLJ2.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DfFJC-Eb.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./utils-Cdl8HW_v.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DJh4O7Qc.js";import"./@salutejs/plasma-icons-CbqEe6UO.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-yg_3Nt0z.js";import"./Box-Juih1CKQ.js";import"./Collapse-Cm4Vf7gU.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-yAwhXllS.js";import"./@daisforge/glide-data-grid-Y_60-FtF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-CmYboMCL.js";import"./sharedUiSearch-DOQDSS1t.js";import"./TextField-CNv1rZv2.js";import"./sharedUtilsInputs-BcOwa6yM.js";import"./TypographyWithAutoTooltip-DoRVGUsc.js";import"./Typography-DrjV5Wmt.js";import"./ListOfFilters-DBouarlG.js";import"./FiltersActions-BfFXA-oM.js";import"./IconButton-D0PB5P2c.js";import"./TooltipList-CSPnrynf.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Ds_J4bAC.js";import"./NumberFormat-M1V5HNNz.js";import"./EmptyState-B787XssQ.js";import"./unidentified@3x-iHLYaSSf.js";import"./ErrorPage-BL_-6djw.js";import"./Autocomplete-DCmEDwiz.js";function r(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:s,name:"Docs"}),`
`,o.jsx(t.h1,{id:"selectingrow--ограничение-счётчика-99",children:"SelectingRow — ограничение счётчика (99+)"}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"tableConfig.selecting.summaryCounterMaxCount"})}),`
`,o.jsx(t.p,{children:`Ограничивает максимальное отображаемое число в счётчике выбранных строк — и в шапке
таблицы, и в панели массовых действий. Если выбрано больше — счётчик показывает «N+».`}),`
`,o.jsx(t.p,{children:`Не ограничивает само выделение (выбрать можно сколько угодно), влияет только на
отображение числа.`}),`
`,o.jsx(t.h2,{id:"использование",children:"Использование"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`<TableCanvas
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
`,o.jsx(t.h2,{id:"поведение",children:"Поведение"}),`
`,o.jsxs(t.ul,{children:[`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"selectedCount <= summaryCounterMaxCount"})," — показывается точное число."]}),`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"selectedCount > summaryCounterMaxCount"})," — показывается ",o.jsx(t.code,{children:"«summaryCounterMaxCount+»"}),`
(например, `,o.jsx(t.code,{children:"99+"}),")."]}),`
`,o.jsx(t.li,{children:"Поле опционально: без него счётчик показывает точное число без ограничения."}),`
`]}),`
`,o.jsxs(t.blockquote,{children:[`
`,o.jsxs(t.p,{children:["Типы SelectingRow — ",o.jsx(t.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-selectingrow-api--docs",children:"SelectingRow API"})]}),`
`]}),`
`,o.jsx(m,{})]})}function ro(n={}){const{wrapper:t}={...e(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{ro as default};
