import{j as r}from"./react-B60MRyL7.js";import{ck as e}from"./vendor-OPtbd1lp.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-D2QxBZA4.js";import{T as p}from"./TableCanvas.rowMarkers.stories-DuSKIIE2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-BRw6YPBr.js";import"./@tanstack/react-virtual-EFiood7F.js";import"./preload-helper-BnDtJV8M.js";import"./index-Cu4lwwaE.js";import"./index-B1pIjx6t.js";import"./@salutejs/plasma-icons-ByrhRzX2.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-9ZvOS3J-.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-i_zHUc1M.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./utils-CYK0V5oQ.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-K3Gf3X3y.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-B7Wr7FLp.js";import"./Box-CbEpyrne.js";import"./Collapse-B4Pt_8zE.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BCFvwvMl.js";import"./@glideappsfinal/glide-data-grid-CK8QPVqj.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-BNIyHIhR.js";import"./sharedUiSearch-B9tld89l.js";import"./TextField-Bp7ffrmf.js";import"./sharedUtilsInputs-wVAiPvsc.js";import"./TypographyWithAutoTooltip-CVRx3Ji6.js";import"./Typography-CkVSDpr_.js";import"./ListOfFilters-PkVmd9qw.js";import"./Table-B87AmCdC.js";import"./react-data-grid-CajG19ED.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cf4MX0VM.js";import"./NumberFormat-BNkvGrJn.js";import"./EmptyState-CFVMNuoE.js";import"./unidentified@3x-DTMrHY6B.js";import"./MassActions-CCL9cJtX.js";import"./Autocomplete-pcaxmLXN.js";import"./FiltersActions-DmLL2joa.js";import"./IconButton-C1QgcvzB.js";import"./TooltipList-C_-CLRgD.js";import"./ErrorPage-BrDBiR7U.js";function n(i){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:p,name:"Docs"}),`
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
`,r.jsx(s,{})]})}function sr(i={}){const{wrapper:o}={...e(),...i.components};return o?r.jsx(o,{...i,children:r.jsx(n,{...i})}):n(i)}export{sr as default};
