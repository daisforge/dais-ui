import{j as r}from"./react-D2T61mpp.js";import{c2 as i,c3 as s,bY as t}from"./vendor-CJM8PqzG.js";import{T as c}from"./TableCanvas.rowMarkers.stories-D0TcQMfY.js";import"./react-is-Clcustum.js";import"./styled-components-0ntxfV3u.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-B8VI3ilq.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DcfFEyoW.js";import"./FiltersActions-C0hpo6t3.js";import"./IconButton-D04bOkZM.js";import"./@salutejs/plasma-icons-D_nZvWxn.js";import"./@salutejs/sdds-finai-C2SF6wx_.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-D6duxx9X.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-g-29Fp6U.js";import"./TextField-CIeZApxu.js";import"./sharedUtilsInputs-CojTWdX8.js";import"./AnalyticalWidget-BXUFEgYP.js";import"./Collapse-DgHLzh1O.js";import"./Table-CaYPMHMA.js";import"./react-data-grid-CgL2C-mC.js";import"./TableTabs-CUuS4ufy.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CfoUV52p.js";import"./ListOfFilters-C8knBadW.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-VAhkL-GL.js";import"./EmptyState-J8tR5xPF.js";import"./MassActions-DRAdNuq_.js";import"./Autocomplete-Beudl581.js";import"./TableGlide-B_f_tJLn.js";import"./@glideappsfinal/glide-data-grid-BN5Hmod4.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-HsOivQht.js";function e(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
