import{j as r}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as t}from"./vendor-CNADM64k.js";import{T as c}from"./TableCanvas.rowMarkers.stories-wLzkQ56y.js";import"./react-is-Clcustum.js";import"./styled-components-BgHfMvxH.js";import"./@tanstack/react-virtual-BSHnyjh7.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C8-atugo.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BE_lK6KB.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-CKn6Yuqm.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BEm6Z2Pr.js";import"./@salutejs/plasma-icons-CNxBuWJ1.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BiKzT8rz.js";import"./IconButton-xwYe75ww.js";import"./Box-CNu36ura.js";import"./TextField-DBpK6G19.js";import"./sharedUtilsInputs-rprt-bQ0.js";import"./AiAgentPopup-nd5JpRDn.js";import"./TextArea-BvBISU5C.js";import"./sharedUtilsResizable-CT3CPyAy.js";import"./Table-Dp9VDEh7.js";import"./Collapse-BCNOa_3J.js";import"./react-data-grid-Cp9Ct-OV.js";import"./TableTabs-D4j17SEq.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CLIv2zZ-.js";import"./@glideappsfinal/glide-data-grid-D0QSDvg1.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BJ4l-5wL.js";import"./ListOfFilters-D6A52LDg.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B0gh1Gph.js";import"./EmptyState-BPfWoJpy.js";import"./MassActions-BxRUHtUx.js";import"./Autocomplete-Dq1woIgD.js";import"./ErrorPage-B0DpjF-9.js";function e(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
