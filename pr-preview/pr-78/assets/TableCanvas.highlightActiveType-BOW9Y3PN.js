import{j as i}from"./react-D2T61mpp.js";import{cg as r,ch as o,ca as c}from"./vendor-BtziVR4v.js";import{T as t}from"./TableCanvas.highlightActiveType.stories-DAz32PXP.js";import"./react-is-Clcustum.js";import"./styled-components-byOYC4tb.js";import"./@tanstack/react-virtual-x43uhTOO.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CCkxvwAF.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-2aUGrnOA.js";import"./FiltersActions--njN6ry5.js";import"./IconButton-DXDSlFV0.js";import"./@salutejs/plasma-icons-UtnMyKqn.js";import"./@salutejs/sdds-finai-CxtkL_--.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-DvpS1rlL.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DQ_LG4PT.js";import"./TextField-By4HlBEL.js";import"./sharedUtilsInputs-B79COWw_.js";import"./AnalyticalWidget-B1ziqDPt.js";import"./Collapse-kRyJ1-Es.js";import"./Table-DDYG72Xv.js";import"./react-data-grid-vIuex-A1.js";import"./TableTabs-BxRHXbZX.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CBt23W-Y.js";import"./ListOfFilters-Bc1V2GjD.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B9wd3wWT.js";import"./EmptyState-Bygf3EJV.js";import"./MassActions-BimJqiCz.js";import"./Autocomplete-BBaPFRUW.js";import"./TableGlide-De9Q7RNT.js";import"./@glideappsfinal/glide-data-grid-RcY2hH6x.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DdK-xS9V.js";function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(o,{of:t,name:"Docs"}),`
`,i.jsx(e.h1,{id:"highlight-active-type",children:"Highlight Active Type"}),`
`,i.jsx(e.p,{children:"Две независимые оси:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"tableConfig.cellsSelection.mode"})}),` — режим фактического выделения ячеек. По нему
работают copy/paste, рамка, fill-handle, затемнение шапки/нумерации.`]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"tableConfig.highlightActiveType"})})," — чисто визуальная подсветка строки."]}),`
`]}),`
`,i.jsx(e.h2,{id:"cellsselectionmode",children:"cellsSelection.mode"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"'range-cell'"})," — выделение диапазона ячеек (по умолчанию)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"'cell'"})," — выделение одной ячейки"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"'disabled'"})," — выделение ячеек отключено"]}),`
`]}),`
`,i.jsx(e.h2,{id:"highlightactivetype",children:"highlightActiveType"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"'row'"}),` — подсветка строки активной ячейки (залипает на строке клика; стрелки
двигают выделение, подсветка остаётся; перекрывается выделением на активной
ячейке)`]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"'disabled'"})," — без подсветки строки (по умолчанию)"]}),`
`]}),`
`,i.jsxs(e.blockquote,{children:[`
`,i.jsxs(e.p,{children:[i.jsx(e.strong,{children:"Deprecated:"})," значения ",i.jsx(e.code,{children:"highlightActiveType"})," ",i.jsx(e.code,{children:"'cell'"})," и ",i.jsx(e.code,{children:"'range-cell'"}),`
устарели — режим выделения теперь задаётся через `,i.jsx(e.code,{children:"cellsSelection.mode"}),`. Для
`,i.jsx(e.code,{children:"highlightActiveType"})," используйте только ",i.jsx(e.code,{children:"'row'"})," / ",i.jsx(e.code,{children:"'disabled'"}),"."]}),`
`]}),`
`,i.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Оси независимы: можно ",i.jsx(e.code,{children:"cellsSelection.mode='range-cell'"})," + ",i.jsx(e.code,{children:"highlightActiveType='row'"}),"."]}),`
`,i.jsx(e.li,{children:"Работает совместно с row markers и различными размерами строк."}),`
`,i.jsx(e.li,{children:"Режимы переключаются динамически."}),`
`]}),`
`,i.jsxs(e.blockquote,{children:[`
`,i.jsxs(e.p,{children:["Подробнее о типах и пропсах — ",i.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-highlightactivetype-api--docs",children:"HighlightActiveType API"})]}),`
`]}),`
`,i.jsx(c,{})]})}function U(n={}){const{wrapper:e}={...r(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(l,{...n})}):l(n)}export{U as default};
