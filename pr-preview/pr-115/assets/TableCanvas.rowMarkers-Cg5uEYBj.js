import{j as r}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as t}from"./vendor-noKLAXN_.js";import{T as c}from"./TableCanvas.rowMarkers.stories-D1O07RgX.js";import"./react-is-Clcustum.js";import"./styled-components-DsU3CkJN.js";import"./@tanstack/react-virtual-ig-F83uS.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CDaExnrR.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-qmwDAGV3.js";import"./FiltersActions-DYZGbHuA.js";import"./IconButton-C85mx186.js";import"./@salutejs/plasma-icons-QFvtg1-5.js";import"./@salutejs/sdds-finai-Clok5FAG.js";import"./@salutejs/sdds-themes-Cf5iJiw2.js";import"./utils-DLtG-Te-.js";import"./constants-BMyuY-FV.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CN128sBO.js";import"./TextField-C3fWSe6C.js";import"./sharedUtilsInputs-C_Cv9hqb.js";import"./AiAgentPopup-CYN8WGkp.js";import"./TextArea-pBQSvsEG.js";import"./sharedUtilsResizable-D10n0Xmq.js";import"./Table-Dd0lYFQC.js";import"./Collapse-H2XGdmeX.js";import"./react-data-grid-CmKMVQyO.js";import"./TableTabs-CLaHsbx8.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-D7XH6J8Z.js";import"./@glideappsfinal/glide-data-grid-DMPhaI5m.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-hs83Lol-.js";import"./ListOfFilters-DMj5O6Fm.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-GhC7b36o.js";import"./EmptyState-CraKoVrH.js";import"./MassActions-Cybk3zsC.js";import"./Autocomplete-DKHt-6T2.js";import"./ErrorPage-BLLO5pKv.js";function e(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
`,r.jsx(t,{})]})}function V(n={}){const{wrapper:o}={...i(),...n.components};return o?r.jsx(o,{...n,children:r.jsx(e,{...n})}):e(n)}export{V as default};
