import{j as i}from"./react-D2T61mpp.js";import{cf as l,cg as o,c9 as t}from"./vendor-BA2uJqm3.js";import{T as c}from"./TableCanvas.highlightActiveType.stories-DdYVXx6S.js";import"./react-is-Clcustum.js";import"./styled-components-DI0RiSri.js";import"./@tanstack/react-virtual-DMW_htbC.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BZYLyq8m.js";import"./StoryHint-D7Z2UPWM.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Cnk4HLGu.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BjrMZFsU.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-HGBzAa3l.js";import"./@salutejs/plasma-icons-DwAv7YrD.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CqtjD7fq.js";import"./IconButton-BybKUD7Y.js";import"./Box-ZOkrcsKi.js";import"./TextField-DZKR2GVq.js";import"./sharedUtilsInputs-CnW24mU9.js";import"./AiAgentPopup-ByfmyI4w.js";import"./TextArea-BI7NPZWg.js";import"./sharedUtilsResizable-B9o-tffI.js";import"./Table-C6ylUQN9.js";import"./Collapse-CKc8B8rW.js";import"./react-data-grid-6LdYXpuk.js";import"./TableTabs-EpzcYvI8.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DKhcFH5P.js";import"./@glideappsfinal/glide-data-grid-3eF0LrAd.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DC9JYQJ1.js";import"./ListOfFilters-BaD6Bsow.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B0gQLxCm.js";import"./EmptyState-BKK3EFcw.js";import"./MassActions-CHP0YYiG.js";import"./Autocomplete-CeKUjrvz.js";import"./ErrorPage-4f41r735.js";function r(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(o,{of:c,name:"Docs"}),`
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
`,i.jsx(t,{})]})}function Y(n={}){const{wrapper:e}={...l(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(r,{...n})}):r(n)}export{Y as default};
