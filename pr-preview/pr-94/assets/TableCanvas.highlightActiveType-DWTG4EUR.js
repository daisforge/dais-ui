import{j as i}from"./react-D2T61mpp.js";import{cg as l,ch as o,ca as t}from"./vendor-DXdfnwad.js";import{T as c}from"./TableCanvas.highlightActiveType.stories-B8PwMIsz.js";import"./react-is-Clcustum.js";import"./styled-components-C8QokrFs.js";import"./@tanstack/react-virtual-cZI7JMKe.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-fXm3C628.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-fyPLPpHP.js";import"./FiltersActions-jXEqRCBG.js";import"./IconButton-Bl2UBdAa.js";import"./@salutejs/plasma-icons-EjQFeqZJ.js";import"./@salutejs/sdds-finai-DV8XcQV0.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-DPjVldhU.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CA0XSL2K.js";import"./TextField-Byn-1p2P.js";import"./sharedUtilsInputs-Tg1DZyOR.js";import"./AiAgentPopup-DP28yMpZ.js";import"./TextArea-CbAiDzf6.js";import"./sharedUtilsResizable-CAZWAHxi.js";import"./Table-328rtSEd.js";import"./Collapse-fFVUKsg0.js";import"./react-data-grid-B52RWvTe.js";import"./TableTabs-BqSymkyG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DH3LssWL.js";import"./ListOfFilters-BMS1vsdE.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D-wPgtiZ.js";import"./EmptyState-DfxP_Lxo.js";import"./MassActions-BBmAPmfF.js";import"./Autocomplete-BQ-hG6GN.js";import"./TableGlide-DCbKfYqj.js";import"./@glideappsfinal/glide-data-grid-YheYrnEY.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DfBl-5Zu.js";function r(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(o,{of:c,name:"Docs"}),`
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
`,i.jsx(t,{})]})}function W(n={}){const{wrapper:e}={...l(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(r,{...n})}):r(n)}export{W as default};
