import{j as r}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as t}from"./vendor-D8axKApy.js";import{T as c}from"./TableCanvas.rowMarkers.stories-B3V1tgYw.js";import"./react-is-Clcustum.js";import"./styled-components-CDkh0cjP.js";import"./@tanstack/react-virtual-BDT2t9w4.js";import"./tslib-DoU9Jm1N.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-BUFbTFdr.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BTwe4lCZ.js";import"./FiltersActions-DTW5R9wI.js";import"./IconButton-BX8dZI69.js";import"./@salutejs/plasma-icons-GRwPCCo0.js";import"./@salutejs/sdds-finai-Bv-Eaybg.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-BeI9VzST.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DSqHbASV.js";import"./TextField-Chbwohps.js";import"./sharedUtilsInputs-DRhaRPvX.js";import"./AnalyticalWidget-D29v7G0l.js";import"./Collapse-hp3Aui0A.js";import"./Table-litFdua_.js";import"./react-data-grid-BSvFyJ0C.js";import"./TableTabs-d-4NtJbS.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-D1S_ANAk.js";import"./ListOfFilters-wFVCzrTK.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DxFJooeu.js";import"./EmptyState-sk2eh5Cu.js";import"./MassActions-D5TDIhpF.js";import"./Autocomplete-BrnEEZFv.js";import"./TableGlide-Xw0Girvf.js";import"./@glideappsfinal/glide-data-grid-HwFEUlX6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-Cfbd0EIw.js";function e(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
`,r.jsx(n.h1,{id:"rowmarkers-tablecanvas",children:"RowMarkers (TableCanvas)"}),`
`,r.jsx(n.p,{children:r.jsx(n.strong,{children:"tableConfig.rowMarkers"})}),`
`,r.jsxs(n.p,{children:["Сервисный столбец с нумерацией строк. Frozen, вставляется первым, исключён из reorder/pin/hide/sort/grouping. Поддерживает плоский и древовидный (",r.jsx(n.code,{children:"subRows"}),") режимы любой глубины вложенности."]}),`
`,r.jsx(n.h2,{id:"быстрый-старт",children:"Быстрый старт"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    rowMarkers: {
      startIndex: 1,
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`})}),`
`,r.jsxs(n.h2,{id:"flatindex-vs-rowindex",children:[r.jsx(n.code,{children:"flatIndex"})," vs ",r.jsx(n.code,{children:"rowIndex"})]}),`
`,r.jsxs(n.p,{children:["Если ветка свернута, но нужно сохранить «сквозные» номера — используйте ",r.jsx(n.code,{children:"flatIndex"}),"."]}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["полностью раскрыто: ",r.jsx(n.code,{children:"1, 2, 3, 4, 5"})]}),`
`,r.jsxs(n.li,{children:["после сворачивания середины: ",r.jsx(n.code,{children:"1, 2, 5"})," (а не ",r.jsx(n.code,{children:"1, 2, 3"}),")"]}),`
`]}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"rowIndex"})," зависит только от видимых строк — номера будут «прыгать»."]}),`
`,r.jsx(n.h2,{id:"частичная-перерисовка",children:"Частичная перерисовка"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"getRowMarker"})," должна быть чистой функцией. Вызывается не только при полной отрисовке таблицы, но и при ховере/скролле — для одной ячейки. Не используйте внешние переменные-счётчики — используйте аргументы (",r.jsx(n.code,{children:"siblingPath"}),", ",r.jsx(n.code,{children:"flatIndex"}),", ",r.jsx(n.code,{children:"siblingIndex"}),", ",r.jsx(n.code,{children:"parentKey"}),"), они всегда актуальны."]}),`
`,r.jsxs(n.blockquote,{children:[`
`,r.jsxs(n.p,{children:["Подробнее о типах — ",r.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowmarkers-api--docs",children:"RowMarkers API"})]}),`
`]}),`
`,r.jsx(t,{})]})}function Q(o={}){const{wrapper:n}={...i(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(e,{...o})}):e(o)}export{Q as default};
