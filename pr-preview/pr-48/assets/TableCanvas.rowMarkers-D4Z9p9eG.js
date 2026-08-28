import{j as r}from"./react-D2T61mpp.js";import{c6 as i,c7 as s,c0 as t}from"./vendor-BCtyWDpp.js";import{T as c}from"./TableCanvas.rowMarkers.stories-DXNogB9a.js";import"./react-is-Clcustum.js";import"./styled-components-DX8vlra3.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-BCVoxXef.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CUwNeYa8.js";import"./FiltersActions-CAcs8-fI.js";import"./IconButton-tXGbBwdv.js";import"./@salutejs/plasma-icons-CT3auX7M.js";import"./@salutejs/sdds-finai-CtB5qeOi.js";import"./@salutejs/sdds-themes-CUTvIVmO.js";import"./utils-CHCHZ6kC.js";import"./constants-BudGGuoE.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BRgSb72-.js";import"./TextField-BT0br7pC.js";import"./sharedUtilsInputs-E3hguDnU.js";import"./AnalyticalWidget-CRwLcQHW.js";import"./Collapse-Hqsw_Qk2.js";import"./Table-HqrONhn0.js";import"./react-data-grid-DVnoNyqM.js";import"./TableTabs-D7jLgkKo.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-cSTo0M2f.js";import"./ListOfFilters-DOe2tHhf.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-TOeAMrkU.js";import"./EmptyState-CLM_-0Gi.js";import"./MassActions-Czk_6hpW.js";import"./Autocomplete-QU_N67Il.js";import"./TableGlide-CrT4EX5A.js";import"./@glideappsfinal/glide-data-grid-BPbG-oNI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-dbEkQXep.js";function e(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c,name:"Docs"}),`
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
`,r.jsx(t,{})]})}function O(o={}){const{wrapper:n}={...i(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(e,{...o})}):e(o)}export{O as default};
