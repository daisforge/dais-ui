import{j as r}from"./react-DYHuXpTF.js";import{dd as e}from"./vendor-Dy04e7eT.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-Dieti3TI.js";import{T as d}from"./TableCanvas.rowMarkers.stories-cJ51eNX7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-D3uL8AgQ.js";import"./@tanstack/react-virtual-DpbU78q1.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BkX6kR9J.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-C-m25YlE.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Ce8EJXt2.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-C324mS39.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CW-5BJnR.js";import"./@salutejs/plasma-icons-D-o9abDl.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-Cg1cr4lG.js";import"./Box-C_lQk7q2.js";import"./Collapse-zZc0zAuA.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BA8pOji2.js";import"./@glideappsfinal/glide-data-grid-D3ux9yp-.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-aQ644jDa.js";import"./sharedUiSearch-DepFlUD_.js";import"./TextField-DKmO_cMT.js";import"./sharedUtilsInputs-CoiSiHAi.js";import"./TypographyWithAutoTooltip-CmTNIxSr.js";import"./Typography-AqY240Xv.js";import"./ListOfFilters-BIpCPfRe.js";import"./Table-Dnkey4HO.js";import"./react-data-grid-iaz8oMts.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Cre-Xff_.js";import"./NumberFormat-ByzSbtjI.js";import"./EmptyState-B8Imm43w.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-CS-gDAi9.js";import"./Autocomplete-CBzySec7.js";import"./FiltersActions-BBodDsCN.js";import"./IconButton-0ysLJmxH.js";import"./TooltipList-DjKz0BcB.js";import"./ErrorPage-BA9S9M68.js";function n(i){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:d,name:"Docs"}),`
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
