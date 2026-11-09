import{j as r}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as t}from"./vendor-Dw3RoERu.js";import{T as c}from"./TableCanvas.rowMarkers.stories-1cwzrpgF.js";import"./react-is-Clcustum.js";import"./styled-components-yCGo3NLT.js";import"./@tanstack/react-virtual-D9XON0H5.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Cq0URnfA.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CS65dCr7.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-CvKs378z.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BwLjIrVs.js";import"./@salutejs/plasma-icons-csdiAsVf.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-B2do7p5z.js";import"./IconButton-7G3QMa-M.js";import"./Box-pKfo_5SH.js";import"./TextField-D0cma8Pk.js";import"./sharedUtilsInputs-K5XWsIIx.js";import"./AiAgentPopup-19Sdk0Hg.js";import"./TextArea-DpHbgdWk.js";import"./sharedUtilsResizable-CGP1YXom.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-mG3k-225.js";import"./Collapse-WN5XY11d.js";import"./react-data-grid-BqUSvkpE.js";import"./TableTabs-qGJFbX_q.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CyHq5c-x.js";import"./@glideappsfinal/glide-data-grid-BY1rLNm4.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BrYhnLxc.js";import"./ListOfFilters-Dksuh2tY.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-n6lstDVu.js";import"./EmptyState-Dz_3J04E.js";import"./MassActions-DM8jlcvy.js";import"./Autocomplete-oB3Igr2b.js";import"./ErrorPage-CgSm-Jh1.js";function e(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
`,r.jsx(t,{})]})}function Y(n={}){const{wrapper:o}={...i(),...n.components};return o?r.jsx(o,{...n,children:r.jsx(e,{...n})}):e(n)}export{Y as default};
