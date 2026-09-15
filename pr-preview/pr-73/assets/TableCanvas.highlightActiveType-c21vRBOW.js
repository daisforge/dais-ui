import{j as i}from"./react-D2T61mpp.js";import{cg as r,ch as o,ca as c}from"./vendor-BKzBKp-G.js";import{T as t}from"./TableCanvas.highlightActiveType.stories-Dehhx79H.js";import"./react-is-Clcustum.js";import"./styled-components-B0QSSFGC.js";import"./@tanstack/react-virtual-yxDq1gd0.js";import"./tslib-DoU9Jm1N.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-DBkZldVw.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D9DtTkJK.js";import"./FiltersActions-D8H2yrCS.js";import"./IconButton-D7rFhGwi.js";import"./@salutejs/plasma-icons-CASXnT9E.js";import"./@salutejs/sdds-finai-Dt-uBSnb.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-DryTuyeA.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-cM6oiJLU.js";import"./TextField-DLx88NRH.js";import"./sharedUtilsInputs-CydhYski.js";import"./AnalyticalWidget-D639izQ-.js";import"./Collapse-VP6s-DVe.js";import"./Table-Dc-6FW5x.js";import"./react-data-grid-at35Z1Ou.js";import"./TableTabs-CnwRaqs5.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-C6t7MqEJ.js";import"./ListOfFilters-BKVXVFhf.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BTyZAsLJ.js";import"./EmptyState-BIS3MJyj.js";import"./MassActions-B5B7bNv0.js";import"./Autocomplete-BccisocP.js";import"./TableGlide-Co5jR8u9.js";import"./@glideappsfinal/glide-data-grid-KFwAmo6D.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-D1gpeagH.js";function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(o,{of:t,name:"Docs"}),`
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
