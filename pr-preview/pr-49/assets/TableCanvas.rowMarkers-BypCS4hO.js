import{j as r}from"./react-D2T61mpp.js";import{c6 as i,c7 as s,c0 as t}from"./vendor-DT8K_viV.js";import{T as c}from"./TableCanvas.rowMarkers.stories-BuxrS_Pb.js";import"./react-is-Clcustum.js";import"./styled-components-DEDUmVg1.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-DUyg7UYc.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CayT_SxA.js";import"./FiltersActions-c6icdUJZ.js";import"./IconButton-DIIP0vcQ.js";import"./@salutejs/plasma-icons-Cu-rfY0-.js";import"./@salutejs/sdds-finai-CYXfGDBj.js";import"./@salutejs/sdds-themes-CUTvIVmO.js";import"./utils-Bwg3Gt1v.js";import"./constants-BudGGuoE.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Du2rMdpX.js";import"./TextField-Bn345EpI.js";import"./sharedUtilsInputs-Deg7Qajn.js";import"./AnalyticalWidget-CkX_Td5z.js";import"./Collapse-DrbR_3vO.js";import"./Table-BS8OBk7t.js";import"./react-data-grid-B_KJC-8i.js";import"./TableTabs-DJ7tk115.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CYnqANGM.js";import"./ListOfFilters-ChIAHktu.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D7WoUcIS.js";import"./EmptyState-B4iyeMnk.js";import"./MassActions-CG92uQ-g.js";import"./Autocomplete-LYuGcFS4.js";import"./TableGlide-Br2D1hj3.js";import"./@glideappsfinal/glide-data-grid-COl_EnJb.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DQtFoRKx.js";function e(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
