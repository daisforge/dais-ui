import{j as r}from"./react-UEdzNlUe.js";import{df as i}from"./vendor-BS4HA21f.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-DGSPfzzr.js";import{T as d}from"./TableCanvas.rowMarkers.stories-CmZbico3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-i6nmInMm.js";import"./@tanstack/react-virtual-Do9j7-rI.js";import"./preload-helper-Cro6n4mv.js";import"./index-Cu4lwwaE.js";import"./index-Dp_h01wN.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-dlps2y2w.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-za7fZn21.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-BHv61rGQ.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CQUafN5B.js";import"./@salutejs/plasma-icons-CXvNxvo1.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-BuolD6i3.js";import"./Box-BL0rBjAw.js";import"./Collapse-CC7IlkPv.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-Bf8CaiU-.js";import"./@daisforge/glide-data-grid-BO6IHgky.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-xSJydO6T.js";import"./sharedUiSearch-D3tdf9Ln.js";import"./TextField-kUI-NAJ6.js";import"./sharedUtilsInputs-BnPXibK3.js";import"./Typography-COUeQAIi.js";import"./ListOfFilters-X2JO-7Cv.js";import"./FiltersActions-BFYsTofB.js";import"./IconButton-CfYF5BDV.js";import"./Tooltip-Cv5b2n02.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CX_cVg0L.js";import"./NumberFormat-DoznmbgT.js";import"./EmptyState-BQvIQUz-.js";import"./unidentified@3x-B3LEnvq5.js";import"./ErrorPage-CkAVwNCu.js";import"./Autocomplete-DXJoRD1w.js";function e(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:d,name:"Docs"}),`
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
`,r.jsx(s,{})]})}function er(n={}){const{wrapper:o}={...i(),...n.components};return o?r.jsx(o,{...n,children:r.jsx(e,{...n})}):e(n)}export{er as default};
