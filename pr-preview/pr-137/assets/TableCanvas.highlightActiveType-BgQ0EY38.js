import{j as i}from"./react-CAOzMBF_.js";import{cf as l,cg as o,c9 as t}from"./vendor-COUnKIk6.js";import{T as c}from"./TableCanvas.highlightActiveType.stories-CFNVPGha.js";import"./react-is-vVGXX3JE.js";import"./styled-components-C1B15yVD.js";import"./@tanstack/react-virtual-B1itPQWL.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C1pHB4bf.js";import"./StoryHint-AurwRlnz.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BwymtG6y.js";import"./@salutejs/sdds-themes-BhHTXq_6.js";import"./utils-CyEBHczw.js";import"./constants-BTEQz0S6.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BQpWD0T8.js";import"./@salutejs/plasma-icons-BtDXuAzo.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BC8BYxSQ.js";import"./IconButton-cRL0IAtx.js";import"./Box-XTw4vK77.js";import"./TextField-CrPunC8v.js";import"./sharedUtilsInputs-Du34ehWd.js";import"./AiAgentPopup-DR_B1Obh.js";import"./TextArea-CqL1mOTI.js";import"./sharedUtilsResizable-CkVuP6HL.js";import"./Table-DzjWun1G.js";import"./Collapse-Dj6imdg8.js";import"./react-data-grid-BQEIwlEM.js";import"./TableTabs-XTpYqiJK.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Z66gDIhg.js";import"./@glideappsfinal/glide-data-grid-wboW74Q1.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-_XLPlX4C.js";import"./ListOfFilters-CrNgZJBY.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-DNQiAvzm.js";import"./EmptyState-D8Y0_SYG.js";import"./MassActions-OOnnrfFA.js";import"./Autocomplete-zsB5S45X.js";import"./ErrorPage-Co6vvMO1.js";function r(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(o,{of:c,name:"Docs"}),`
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
