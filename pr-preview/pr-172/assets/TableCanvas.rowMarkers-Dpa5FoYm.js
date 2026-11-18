import{j as r}from"./react-Ch9mc9Aq.js";import{da as i,db as s,d4 as t}from"./vendor-cmvNg_xr.js";import{T as d}from"./TableCanvas.rowMarkers.stories-DZ_rNgDn.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-D5MvBPh5.js";import"./@tanstack/react-virtual-CWj59MZE.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-D5L1KJCt.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-C9UnQ2KY.js";import"./@sddsjs/sdds_finai-BSDEmCin.js";import"./utils-DqvTlrYy.js";import"./constants-l0ilsueG.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CEPim1an.js";import"./@salutejs/plasma-icons-CXjNGeWd.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-kUc7uIEk.js";import"./IconButton-Ci8npbZD.js";import"./Box-CuZNjBju.js";import"./TextField-C9YSau6k.js";import"./sharedUtilsInputs-Dc_ZEKpI.js";import"./AiAgentPopup-CBRZHYTN.js";import"./TextArea-CZ-SJBPH.js";import"./sharedUtilsResizable-ADoD9nRJ.js";import"./Table-BBFvPWgJ.js";import"./Collapse-B646xElm.js";import"./react-data-grid-DmYcaFlw.js";import"./TableTabs-BDRUMUlr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-C8rFrP_I.js";import"./@glideappsfinal/glide-data-grid-CDZjoQw8.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-3anirXXN.js";import"./ListOfFilters-DzjjBcWt.js";import"./lodash.isequal-DQmZHUWu.js";import"./NumberFormat-BE3whBbA.js";import"./EmptyState-Ch15w3Sj.js";import"./MassActions-B7plPpId.js";import"./Autocomplete-D2V0L8mw.js";import"./ErrorPage-Bh17asus.js";function e(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:d,name:"Docs"}),`
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
