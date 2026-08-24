import{j as e}from"./react-D2T61mpp.js";import{c4 as r,c5 as o,b_ as c}from"./vendor-4DQodAhx.js";import{T as t}from"./TableCanvas.highlightActiveType.stories-CX50zhXO.js";import"./react-is-Clcustum.js";import"./styled-components-rNTPyvwi.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-C9DOTREh.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BV-bKig7.js";import"./FiltersActions-BfyjoJr4.js";import"./IconButton-BW1UuVlC.js";import"./@salutejs/plasma-icons-D6Arjyth.js";import"./@salutejs/sdds-finai-BCLo0Wa_.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-CssElEth.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D1D-Fewz.js";import"./TextField-Cy-EMYiz.js";import"./sharedUtilsInputs-BZ_MSaS9.js";import"./AnalyticalWidget-OnDsIgBw.js";import"./Collapse-DpDeoG2B.js";import"./Table-D-SEH3EB.js";import"./react-data-grid-tKl_XS4t.js";import"./TableTabs-DeLIsUYk.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DxW1YHBS.js";import"./ListOfFilters-BythAXSj.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-HePYtvMi.js";import"./EmptyState-dceGeKnG.js";import"./MassActions-BkwwCjao.js";import"./Autocomplete-BlRSEoSY.js";import"./TableGlide-Bwi6--BY.js";import"./@glideappsfinal/glide-data-grid-CGXCGDqe.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DIdNc71u.js";function l(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t,name:"Docs"}),`
`,e.jsx(i.h1,{id:"highlight-active-type",children:"Highlight Active Type"}),`
`,e.jsx(i.p,{children:"Две независимые оси:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"tableConfig.cellsSelection.mode"})}),` — режим фактического выделения ячеек. По нему
работают copy/paste, рамка, fill-handle, затемнение шапки/нумерации.`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"tableConfig.highlightActiveType"})})," — чисто визуальная подсветка строки."]}),`
`]}),`
`,e.jsx(i.h2,{id:"cellsselectionmode",children:"cellsSelection.mode"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"'range-cell'"})," — выделение диапазона ячеек (по умолчанию)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"'cell'"})," — выделение одной ячейки"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"'disabled'"})," — выделение ячеек отключено"]}),`
`]}),`
`,e.jsx(i.h2,{id:"highlightactivetype",children:"highlightActiveType"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"'row'"}),` — подсветка строки активной ячейки (залипает на строке клика; стрелки
двигают выделение, подсветка остаётся; перекрывается выделением на активной
ячейке)`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"'disabled'"})," — без подсветки строки (по умолчанию)"]}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Deprecated:"})," значения ",e.jsx(i.code,{children:"highlightActiveType"})," ",e.jsx(i.code,{children:"'cell'"})," и ",e.jsx(i.code,{children:"'range-cell'"}),`
устарели — режим выделения теперь задаётся через `,e.jsx(i.code,{children:"cellsSelection.mode"}),`. Для
`,e.jsx(i.code,{children:"highlightActiveType"})," используйте только ",e.jsx(i.code,{children:"'row'"})," / ",e.jsx(i.code,{children:"'disabled'"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Оси независимы: можно ",e.jsx(i.code,{children:"cellsSelection.mode='range-cell'"})," + ",e.jsx(i.code,{children:"highlightActiveType='row'"}),"."]}),`
`,e.jsx(i.li,{children:"Работает совместно с row markers и различными размерами строк."}),`
`,e.jsx(i.li,{children:"Режимы переключаются динамически."}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Подробнее о типах и пропсах — ",e.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-highlightactivetype-api--docs",children:"HighlightActiveType API"})]}),`
`]}),`
`,e.jsx(c,{})]})}function O(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}export{O as default};
