import{j as r}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as t}from"./vendor-CFc4-7Jd.js";import{T as c}from"./TableCanvas.rowMarkers.stories-BfhdiY4Z.js";import"./react-is-Clcustum.js";import"./styled-components-DovKJdjj.js";import"./@tanstack/react-virtual-DWoDfeV2.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DTkyiz2F.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CeBttP4k.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-3l8ykBQF.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CnvN9Ub_.js";import"./@salutejs/plasma-icons-Djzn6CKf.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CeVBMsH2.js";import"./IconButton-DE9Sh8zI.js";import"./Box-BLVowlXD.js";import"./TextField-C5Tl7ypA.js";import"./sharedUtilsInputs-cFXSU-6k.js";import"./AiAgentPopup-BEpt9dNu.js";import"./TextArea-BceZCdLD.js";import"./sharedUtilsResizable-CFfwexD1.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-aZX8yLyR.js";import"./Collapse-CcEfL7lO.js";import"./react-data-grid-jVs33wBT.js";import"./TableTabs-Dbt4U854.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BTNKI3-N.js";import"./@glideappsfinal/glide-data-grid-CFO_0xaS.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DIKPpMft.js";import"./ListOfFilters-Dm4Pda3y.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-FNYxGGLD.js";import"./EmptyState-CfctcnUG.js";import"./MassActions-gkg95n9N.js";import"./Autocomplete-BknfDEPG.js";import"./ErrorPage-BsFbBpU0.js";function e(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
