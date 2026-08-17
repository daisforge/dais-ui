import{j as r}from"./react-D2T61mpp.js";import{c2 as i,c3 as s,bY as t}from"./vendor-CiLFOTMj.js";import{T as c}from"./TableCanvas.rowMarkers.stories-BWTYrqQi.js";import"./react-is-Clcustum.js";import"./styled-components-BkMlLbXT.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-DwKiq8z4.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CHLg5Bcc.js";import"./FiltersActions-CMi2y40B.js";import"./IconButton-BQnj4hIh.js";import"./@salutejs/plasma-icons-B9bLUA95.js";import"./@salutejs/sdds-finai-DFCsnlGS.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-e9PhU-mi.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BQOKPHGZ.js";import"./TextField-D0P64OE3.js";import"./sharedUtilsInputs-Dw0YzDEv.js";import"./AnalyticalWidget-Ca41LREg.js";import"./Collapse-CCEpHUe-.js";import"./Table-DYmpBnqh.js";import"./react-data-grid-nfJfsrYQ.js";import"./TableTabs-DaXqU_0-.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-Chimk8Qi.js";import"./ListOfFilters-Ca_z2Xzw.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BVbCfykI.js";import"./EmptyState-u3E8vfy9.js";import"./MassActions-EIj-63_e.js";import"./Autocomplete-CDUDoH19.js";import"./TableGlide-BhECARep.js";import"./@glideappsfinal/glide-data-grid-BgrWNZKz.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-ChfemuuN.js";function e(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
`,r.jsx(t,{})]})}function J(o={}){const{wrapper:n}={...i(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(e,{...o})}):e(o)}export{J as default};
