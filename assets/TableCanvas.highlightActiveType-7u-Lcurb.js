import{j as e}from"./react-D2T61mpp.js";import{c2 as r,c3 as o,bY as c}from"./vendor-Q_a-vZxa.js";import{T as t}from"./TableCanvas.highlightActiveType.stories-zHEX2OW0.js";import"./react-is-Clcustum.js";import"./styled-components-BEUoKpTk.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-BrdyFHCL.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CSYw4X1n.js";import"./FiltersActions-Bchg31Hk.js";import"./IconButton-CAd1yL2a.js";import"./@salutejs/plasma-icons-CyB4sZm3.js";import"./@salutejs/sdds-finai-DlWkRcaV.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-CVuocYtt.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DPpgRiC8.js";import"./TextField-DnCCqDPb.js";import"./sharedUtilsInputs-Cb9Dqfue.js";import"./AnalyticalWidget-CFaIt6MZ.js";import"./Collapse-hikrfMQ3.js";import"./Table-D8HUedaB.js";import"./react-data-grid-Di3Gdpz3.js";import"./TableTabs-DE_IuWyO.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-C6ZDRcIM.js";import"./ListOfFilters-C5Apgwx-.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CE0F4EJa.js";import"./EmptyState-C_R0nxfe.js";import"./MassActions-CFD3HnUh.js";import"./Autocomplete-BanrLP6T.js";import"./TableGlide-CRvjHqB0.js";import"./@glideappsfinal/glide-data-grid-Cq3uVkfu.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-vISWMkkh.js";function l(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t,name:"Docs"}),`
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
`,e.jsx(c,{})]})}function N(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}export{N as default};
