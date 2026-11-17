import{j as i}from"./react-D2T61mpp.js";import{cg as o,ch as l,ca as t}from"./vendor-CocJggtX.js";import{T as c}from"./TableCanvas.highlightActiveType.stories-BI5qJAep.js";import"./react-is-Clcustum.js";import"./styled-components-Cg2KlPrd.js";import"./@tanstack/react-virtual-Bq-iPTXI.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DwPQ1_R5.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CNxJalcA.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-Br05kVjW.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CzGgK8Zs.js";import"./@salutejs/plasma-icons-tAku5dyV.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BiyFi1qO.js";import"./IconButton-jMbvLm1_.js";import"./Box-UFQZoXI4.js";import"./TextField-C6-TwsWA.js";import"./sharedUtilsInputs-B2ABuoF7.js";import"./AiAgentPopup-YP_5irvd.js";import"./TextArea-R50vDyS4.js";import"./sharedUtilsResizable-Bl9ntqZk.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-Dezf9Fg-.js";import"./Collapse-DIpt75M9.js";import"./react-data-grid-BiSDOfT-.js";import"./TableTabs-BNCV-94Y.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DruMf0I-.js";import"./@glideappsfinal/glide-data-grid-Cv6hlZfW.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DHAG2JL6.js";import"./ListOfFilters-D1F-noDQ.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cpehu6qL.js";import"./EmptyState-BSDbItQe.js";import"./MassActions-CxNRWOTQ.js";import"./Autocomplete-yescDXXM.js";import"./ErrorPage-DSU7zdEt.js";function r(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(l,{of:c,name:"Docs"}),`
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
`,i.jsx(t,{})]})}function Z(n={}){const{wrapper:e}={...o(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(r,{...n})}):r(n)}export{Z as default};
