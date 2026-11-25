import{j as i}from"./react-UEdzNlUe.js";import{dd as t}from"./vendor-D2r4jgZf.js";import{M as n,S as l}from"./WithTooltip-KJL26V4Q-CSI5vC6-.js";import{T as c}from"./TableCanvas.highlightActiveType.stories-BvOjLiPg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-C6Uw7ovB.js";import"./@tanstack/react-virtual-CK8aghAq.js";import"./preload-helper-Doppxqo6.js";import"./index-Cu4lwwaE.js";import"./index-Bo2kqA7A.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-B_pkELl7.js";import"./StoryHint-BUaqSKKR.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Dq-7WAqd.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-DSJLiokB.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-mlEHigyJ.js";import"./@salutejs/plasma-icons-CWYH4jgn.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-DNoHAM3Q.js";import"./Box-Dwqy9xB3.js";import"./Collapse-CfxT3MfK.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C4R1mLZO.js";import"./@daisforge/glide-data-grid-D8q77OPN.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-sXTgrZFv.js";import"./sharedUiSearch-Cr_gUfR_.js";import"./TextField-4V3YLGgk.js";import"./sharedUtilsInputs-vGW80U8K.js";import"./TypographyWithAutoTooltip-DZuGy65L.js";import"./Typography-BcqUTUcc.js";import"./ListOfFilters-C-adOZD3.js";import"./Table-DEqzLSiQ.js";import"./react-data-grid-CAmlt0FZ.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-DpIc9uqy.js";import"./NumberFormat-B4xbipQv.js";import"./EmptyState-7JX8zfVV.js";import"./unidentified@3x-DUKLuGF8.js";import"./MassActions-BZCuJ_Ms.js";import"./Autocomplete-BqnsEzCH.js";import"./FiltersActions-Bo-o4Jwa.js";import"./IconButton-Dl3DqcX6.js";import"./TooltipList-CeWvqtLg.js";import"./ErrorPage-A4fAWqrF.js";function o(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return i.jsxs(i.Fragment,{children:[i.jsx(n,{of:c,name:"Docs"}),`
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
`,i.jsx(l,{})]})}function ci(r={}){const{wrapper:e}={...t(),...r.components};return e?i.jsx(e,{...r,children:i.jsx(o,{...r})}):o(r)}export{ci as default};
