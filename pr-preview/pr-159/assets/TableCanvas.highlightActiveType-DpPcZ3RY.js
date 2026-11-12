import{j as i}from"./react-D2T61mpp.js";import{cg as o,ch as l,ca as t}from"./vendor-qc-3jPn0.js";import{T as c}from"./TableCanvas.highlightActiveType.stories-B8WBuYRw.js";import"./react-is-Clcustum.js";import"./styled-components-fZZISu-E.js";import"./@tanstack/react-virtual-cDSTPgpS.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-lj8yVKf5.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CwsHaJmw.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-BZEVkRCf.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-D1xekEXv.js";import"./@salutejs/plasma-icons-CfT1Hno-.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BnZbuhdn.js";import"./IconButton-C7vIwJL1.js";import"./Box-CTzYqpSx.js";import"./TextField-COil20QB.js";import"./sharedUtilsInputs-CqBI3x81.js";import"./AiAgentPopup-DMxRNqnm.js";import"./TextArea-CKpv2CXk.js";import"./sharedUtilsResizable-BZiwV9dn.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-C280hpp2.js";import"./Collapse-CkUrJuHd.js";import"./react-data-grid-CNbViKFW.js";import"./TableTabs-D79cyaX_.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-n_rkjHnk.js";import"./@glideappsfinal/glide-data-grid-B-1CjMCn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Cqbiwema.js";import"./ListOfFilters-BhzbP0P2.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-S5rrm-jj.js";import"./EmptyState-BLWKmdtS.js";import"./MassActions-CXeHQUg5.js";import"./Autocomplete-DR4dqk8a.js";import"./ErrorPage-B_e2_Jo1.js";function r(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(l,{of:c,name:"Docs"}),`
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
