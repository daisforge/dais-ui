import{j as r}from"./react-D2T61mpp.js";import{c6 as i,c7 as s,c0 as t}from"./vendor-H482Df_i.js";import{T as c}from"./TableCanvas.rowMarkers.stories-CFdYlOPj.js";import"./react-is-Clcustum.js";import"./styled-components-kNohFqZo.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-CI6eoUuG.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D12y3FZC.js";import"./FiltersActions-BH8Bz5dZ.js";import"./IconButton-CBqUwvzX.js";import"./@salutejs/plasma-icons-Co7qeio2.js";import"./@salutejs/sdds-finai-DYlz9lC4.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-Dx_gyAyt.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DsNuXb8L.js";import"./TextField-_OxNzaYn.js";import"./sharedUtilsInputs-BAiE5TGs.js";import"./AnalyticalWidget-CGAcmAx3.js";import"./Collapse-DEjLV26v.js";import"./Table-pZ-P46uo.js";import"./react-data-grid-DCPnnyYy.js";import"./TableTabs-BpoRGRTe.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CjkDyEE9.js";import"./ListOfFilters-DmDjG3Af.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DfB0VoBs.js";import"./EmptyState-DsR_TrlS.js";import"./MassActions-BpFRykTe.js";import"./Autocomplete-D-ES8Cxj.js";import"./TableGlide-CW4Oc9xL.js";import"./@glideappsfinal/glide-data-grid-D0Xvk0sU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-KHwpBlAN.js";function e(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
`,r.jsx(t,{})]})}function O(o={}){const{wrapper:n}={...i(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(e,{...o})}):e(o)}export{O as default};
