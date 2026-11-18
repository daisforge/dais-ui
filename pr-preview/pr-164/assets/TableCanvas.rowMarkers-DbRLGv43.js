import{j as r}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as t}from"./vendor-Ci1ldQR2.js";import{T as c}from"./TableCanvas.rowMarkers.stories-DTg2E1_d.js";import"./react-is-Clcustum.js";import"./styled-components-BU37qrha.js";import"./@tanstack/react-virtual-utuXu4t3.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BzaxFq0y.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DqtNHueW.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-D7tYxEgh.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CXYSUkRi.js";import"./@salutejs/plasma-icons-CQ-FAqMV.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-Di__ViVO.js";import"./IconButton-CaWIHj0Y.js";import"./Box-DKKGEblt.js";import"./TextField-CXPyp1rR.js";import"./sharedUtilsInputs-CWWejG6P.js";import"./AiAgentPopup-W07jgKqV.js";import"./TextArea-CmETqR2f.js";import"./sharedUtilsResizable-DiQrb_UO.js";import"./Table-BtnTzkLd.js";import"./Collapse-Cqan_abS.js";import"./react-data-grid-CojFSrsc.js";import"./TableTabs-Dz6myNgn.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DFLl6LOk.js";import"./@glideappsfinal/glide-data-grid-DHgHT1Ps.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CjvhB-Og.js";import"./ListOfFilters-grr3fRqN.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DXR-GX2o.js";import"./EmptyState-D-jx5DrG.js";import"./MassActions-BAlvFGq_.js";import"./Autocomplete-BHAGO1qQ.js";import"./ErrorPage-CifzUIr3.js";function e(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
