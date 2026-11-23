import{j as i}from"./react-UEdzNlUe.js";import{dd as t}from"./vendor-BJXHd15o.js";import{M as n,S as l}from"./WithTooltip-KJL26V4Q-DPY0jro6.js";import{T as c}from"./TableCanvas.highlightActiveType.stories-Bw7dHhNy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BQ6ZyzFq.js";import"./@tanstack/react-virtual-BtAgCELQ.js";import"./preload-helper-AhSnpiqA.js";import"./index-Cu4lwwaE.js";import"./index-CztTgQbP.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CVr_HXfF.js";import"./StoryHint-BUaqSKKR.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DUqtHKc3.js";import"./@sddsjs/sdds_finai-DqiyF2lT.js";import"./utils-1evaXQ7G.js";import"./constants-D9pWgtfS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CCc2M82T.js";import"./@salutejs/plasma-icons-D87bzLqR.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-CMCAxAlJ.js";import"./Box-yVZ__wCm.js";import"./Collapse-BpJhvNyY.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dyw7_8zY.js";import"./@daisforge/glide-data-grid-Ddyz9bvl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-Dl3ybQ3A.js";import"./sharedUiSearch-ttz439TP.js";import"./TextField-Bq_jSxbf.js";import"./sharedUtilsInputs-Z9Z1qut3.js";import"./TypographyWithAutoTooltip-BJOp4WMr.js";import"./Typography-wwPE7Tkw.js";import"./ListOfFilters-CVo-52s9.js";import"./Table-C71uzYkk.js";import"./react-data-grid-CTo1laTQ.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BNkFaJsn.js";import"./NumberFormat-CCkEtS_t.js";import"./EmptyState-BVPgIYqR.js";import"./unidentified@3x-_wSsvM7E.js";import"./MassActions-3P44Uq7b.js";import"./Autocomplete-BfJ_x4IL.js";import"./FiltersActions-Cas8V8u-.js";import"./IconButton-BhVPULzs.js";import"./TooltipList-C3e9_bOk.js";import"./ErrorPage-DR90XNEr.js";function o(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return i.jsxs(i.Fragment,{children:[i.jsx(n,{of:c,name:"Docs"}),`
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
