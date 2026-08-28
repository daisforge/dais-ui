import{j as e}from"./react-D2T61mpp.js";import{c6 as r,c7 as c,c0 as o}from"./vendor-DT8K_viV.js";import{T as t}from"./TableCanvas.highlightActiveType.stories-Bd1z7N6h.js";import"./react-is-Clcustum.js";import"./styled-components-DEDUmVg1.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-DUyg7UYc.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CayT_SxA.js";import"./FiltersActions-c6icdUJZ.js";import"./IconButton-DIIP0vcQ.js";import"./@salutejs/plasma-icons-Cu-rfY0-.js";import"./@salutejs/sdds-finai-CYXfGDBj.js";import"./@salutejs/sdds-themes-CUTvIVmO.js";import"./utils-Bwg3Gt1v.js";import"./constants-BudGGuoE.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Du2rMdpX.js";import"./TextField-Bn345EpI.js";import"./sharedUtilsInputs-Deg7Qajn.js";import"./AnalyticalWidget-CkX_Td5z.js";import"./Collapse-DrbR_3vO.js";import"./Table-BS8OBk7t.js";import"./react-data-grid-B_KJC-8i.js";import"./TableTabs-DJ7tk115.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CYnqANGM.js";import"./ListOfFilters-ChIAHktu.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D7WoUcIS.js";import"./EmptyState-B4iyeMnk.js";import"./MassActions-CG92uQ-g.js";import"./Autocomplete-LYuGcFS4.js";import"./TableGlide-Br2D1hj3.js";import"./@glideappsfinal/glide-data-grid-COl_EnJb.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DQtFoRKx.js";function l(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:t,name:"Docs"}),`
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
`,e.jsx(o,{})]})}function O(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}export{O as default};
