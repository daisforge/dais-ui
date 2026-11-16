import{j as r}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as t}from"./vendor-DwW8LqKs.js";import{T as c}from"./TableCanvas.rowMarkers.stories-DLeIu-bG.js";import"./react-is-Clcustum.js";import"./styled-components-1frum_Yc.js";import"./@tanstack/react-virtual-CthE9Oqn.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DuWZhT7s.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D7QRUhKc.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-C5maJ9G-.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BwFSsjRU.js";import"./@salutejs/plasma-icons-DWunODz3.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-SGZYFAOX.js";import"./IconButton-Dmz8Yv99.js";import"./Box-B3cJI3Bx.js";import"./TextField-CaI32qtw.js";import"./sharedUtilsInputs-4zeFszBE.js";import"./AiAgentPopup-B22-q1kn.js";import"./TextArea-DnUBSOiL.js";import"./sharedUtilsResizable-CCQdmhhl.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-DfxjG4uH.js";import"./Collapse-CIjdbheU.js";import"./react-data-grid-SqQm33Cs.js";import"./TableTabs-BOG9ojUr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DMHF3_fQ.js";import"./@glideappsfinal/glide-data-grid-CflI70pl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CvXKm-7P.js";import"./ListOfFilters-mvmBUHke.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CZ94oSen.js";import"./EmptyState-B3kzHRdp.js";import"./MassActions-CcFLK7st.js";import"./Autocomplete-CblrzfQ7.js";import"./ErrorPage-OzNFkeR6.js";function e(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
