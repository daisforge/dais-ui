import{j as e}from"./react-D2T61mpp.js";import{c4 as r,c5 as o,b_ as c}from"./vendor-DrvHogBM.js";import{T as t}from"./TableCanvas.highlightActiveType.stories-kEtOmDWy.js";import"./react-is-Clcustum.js";import"./styled-components-C32trI5d.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-Dyp-m10i.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-gD3gRJLV.js";import"./FiltersActions-dSzXNi-R.js";import"./IconButton-BPoioxom.js";import"./@salutejs/plasma-icons-CWtohmdG.js";import"./@salutejs/sdds-finai-RFE0ZUZz.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-Dj5yYuxA.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-ChBl0Qym.js";import"./TextField-OLkgzKqu.js";import"./sharedUtilsInputs-C0iE4dT7.js";import"./AnalyticalWidget-D2_M22M6.js";import"./Collapse-94ilkYlK.js";import"./Table-DQ2bXklW.js";import"./react-data-grid-DJzz0yCj.js";import"./TableTabs-Ckshv5kp.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DOOdKP5k.js";import"./ListOfFilters-C19Ypyak.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DgiZO50V.js";import"./EmptyState-DwM2vIwD.js";import"./MassActions-Bi4xiFmH.js";import"./Autocomplete-CxjAUI5o.js";import"./TableGlide-Cw3D5ySP.js";import"./@glideappsfinal/glide-data-grid-BhHsP7bE.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CbMQtdAy.js";function l(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t,name:"Docs"}),`
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
