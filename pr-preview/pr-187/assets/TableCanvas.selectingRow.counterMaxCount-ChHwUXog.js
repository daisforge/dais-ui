import{j as o}from"./react-UEdzNlUe.js";import{dd as i}from"./vendor-DKFmtNka.js";import{M as e,S as m}from"./WithTooltip-KJL26V4Q-CVmGuB3u.js";import{T as s}from"./TableCanvas.selectingRow.counterMaxCount.stories-Cqkgs8fX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CDfPITHT.js";import"./@tanstack/react-virtual-0hY7ij6n.js";import"./preload-helper-CHPV05wa.js";import"./index-Cu4lwwaE.js";import"./index-CLqcrFDJ.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-tCKymj0E.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DfdD8W_p.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-Booj3GAg.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CkM2RoIx.js";import"./@salutejs/plasma-icons-BPl9HMYM.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-By_8dfga.js";import"./Box-CZ_ZQ2uM.js";import"./Collapse-je_wNoe6.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DUg_1q6e.js";import"./@daisforge/glide-data-grid-BtJJvIJ4.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-HvjNq9qy.js";import"./sharedUiSearch-DYvRq6Y1.js";import"./TextField-U5vj9Sk3.js";import"./sharedUtilsInputs-DKhoD9kx.js";import"./TypographyWithAutoTooltip-DQtPK5Qj.js";import"./Typography-BA5qaSRD.js";import"./ListOfFilters-BkbSjmce.js";import"./Table-CXoTHuP-.js";import"./react-data-grid-zJbN7yQ-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-C6JBaB8n.js";import"./NumberFormat-zDalxEv_.js";import"./EmptyState-DEGzzhQB.js";import"./unidentified@3x-CUWiMa7e.js";import"./MassActions-DeD9Ol3k.js";import"./Autocomplete-BZdAUz1o.js";import"./FiltersActions-Bz6QsW1-.js";import"./IconButton-DE-9S934.js";import"./TooltipList--BueJEoS.js";import"./ErrorPage-CRJQ8R-o.js";function n(r){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:s,name:"Docs"}),`
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
`,o.jsx(m,{})]})}function mo(r={}){const{wrapper:t}={...i(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(n,{...r})}):n(r)}export{mo as default};
