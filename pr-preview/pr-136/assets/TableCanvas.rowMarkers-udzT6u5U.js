import{j as r}from"./react-D2T61mpp.js";import{cf as i,cg as s,c9 as t}from"./vendor-DmlXfB6n.js";import{T as c}from"./TableCanvas.rowMarkers.stories-puQ2zWdP.js";import"./react-is-Clcustum.js";import"./styled-components-D3BTJ4t7.js";import"./@tanstack/react-virtual-DB5Ptt1B.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Da-hjSuj.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Vc3FnHQT.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DhqjlIh0.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DZvjLWsU.js";import"./@salutejs/plasma-icons-DxvG4K4R.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-D7ulEwmq.js";import"./IconButton-DLyedcFD.js";import"./Box-D80y1dEe.js";import"./TextField-vxl-Jjhw.js";import"./sharedUtilsInputs-CwM3__75.js";import"./AiAgentPopup-Bl4KtSk9.js";import"./TextArea-Y8LnrVXd.js";import"./sharedUtilsResizable-xdFtCAfj.js";import"./Table-h0-D2Tt9.js";import"./Collapse-C3r8kOlu.js";import"./react-data-grid-BYgM0Lfk.js";import"./TableTabs-CN2ZERsM.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CA7NyeH4.js";import"./@glideappsfinal/glide-data-grid-i1CjBqYe.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-8EfaFzx1.js";import"./ListOfFilters-CppFxg79.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bldzj9z3.js";import"./EmptyState-BOgLPoJ0.js";import"./MassActions-GCYny9Rg.js";import"./Autocomplete-DuBrk1uu.js";import"./ErrorPage-BMCHDMzQ.js";function e(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
`,r.jsx(o.h1,{id:"rowmarkers-tablecanvas",children:"RowMarkers (TableCanvas)"}),`
`,r.jsx(o.p,{children:r.jsx(o.strong,{children:"tableConfig.rowMarkers"})}),`
`,r.jsxs(o.p,{children:["Сервисный столбец с нумерацией строк. Frozen, вставляется первым, исключён из reorder/pin/hide/sort/grouping. Поддерживает плоский и древовидный (",r.jsx(o.code,{children:"subRows"}),") режимы любой глубины вложенности."]}),`
`,r.jsx(o.h2,{id:"быстрый-старт",children:"Быстрый старт"}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    rowMarkers: {
      startIndex: 1,
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`})}),`
`,r.jsxs(o.h2,{id:"flatindex-vs-rowindex",children:[r.jsx(o.code,{children:"flatIndex"})," vs ",r.jsx(o.code,{children:"rowIndex"})]}),`
`,r.jsxs(o.p,{children:["Если ветка свернута, но нужно сохранить «сквозные» номера — используйте ",r.jsx(o.code,{children:"flatIndex"}),"."]}),`
`,r.jsxs(o.ul,{children:[`
`,r.jsxs(o.li,{children:["полностью раскрыто: ",r.jsx(o.code,{children:"1, 2, 3, 4, 5"})]}),`
`,r.jsxs(o.li,{children:["после сворачивания середины: ",r.jsx(o.code,{children:"1, 2, 5"})," (а не ",r.jsx(o.code,{children:"1, 2, 3"}),")"]}),`
`]}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"rowIndex"})," зависит только от видимых строк — номера будут «прыгать»."]}),`
`,r.jsx(o.h2,{id:"частичная-перерисовка",children:"Частичная перерисовка"}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"getRowMarker"})," должна быть чистой функцией. Вызывается не только при полной отрисовке таблицы, но и при ховере/скролле — для одной ячейки. Не используйте внешние переменные-счётчики — используйте аргументы (",r.jsx(o.code,{children:"siblingPath"}),", ",r.jsx(o.code,{children:"flatIndex"}),", ",r.jsx(o.code,{children:"siblingIndex"}),", ",r.jsx(o.code,{children:"parentKey"}),"), они всегда актуальны."]}),`
`,r.jsxs(o.blockquote,{children:[`
`,r.jsxs(o.p,{children:["Подробнее о типах — ",r.jsx(o.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowmarkers-api--docs",children:"RowMarkers API"})]}),`
`]}),`
`,r.jsx(t,{})]})}function W(n={}){const{wrapper:o}={...i(),...n.components};return o?r.jsx(o,{...n,children:r.jsx(e,{...n})}):e(n)}export{W as default};
