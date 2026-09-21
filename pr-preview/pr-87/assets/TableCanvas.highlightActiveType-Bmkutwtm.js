import{j as i}from"./react-D2T61mpp.js";import{cg as r,ch as o,ca as c}from"./vendor-D5oPH3BX.js";import{T as t}from"./TableCanvas.highlightActiveType.stories-DmbRWnDs.js";import"./react-is-Clcustum.js";import"./styled-components-PgjJSJpA.js";import"./@tanstack/react-virtual-BeN0wEDh.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CdMBh71I.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas--430oz65.js";import"./FiltersActions-CVe5SO_k.js";import"./IconButton-MUImkC04.js";import"./@salutejs/plasma-icons-Cs9sImtB.js";import"./@salutejs/sdds-finai-Dlxy1h5S.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CotpbP-M.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-De9MX9Q7.js";import"./TextField-DMbIRtkW.js";import"./sharedUtilsInputs-CuSwYetx.js";import"./AnalyticalWidget-B0Mw9UcY.js";import"./Collapse-DHQlduwv.js";import"./Table-CjUG2Av1.js";import"./react-data-grid-BAtqug44.js";import"./TableTabs-Cd3Z5gJO.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-J4lOI0-g.js";import"./ListOfFilters-B4NIq99x.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BD87J8Px.js";import"./EmptyState-D_ExiAVr.js";import"./MassActions-DPT1VO7w.js";import"./Autocomplete-BwrRpsxY.js";import"./TableGlide-m9dqU8ZY.js";import"./@glideappsfinal/glide-data-grid-q7kZxXjj.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CZaeQWVv.js";function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(o,{of:t,name:"Docs"}),`
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
