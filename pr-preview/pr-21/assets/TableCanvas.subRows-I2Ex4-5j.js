import{j as e}from"./react-D2T61mpp.js";import{c2 as s,c3 as i,bY as l}from"./vendor-DAeWXVFZ.js";import{T as c}from"./TableCanvas.subRows.stories-6Z6C5dMW.js";import"./react-is-Clcustum.js";import"./styled-components-Dv4eU0M2.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-B5vw54Tl.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DTTC4f-L.js";import"./FiltersActions-BAO4f8xk.js";import"./IconButton-DwHugSoI.js";import"./@salutejs/plasma-icons-DT_ZNXTc.js";import"./@salutejs/sdds-finai-BgKKvavs.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-BKj8eomO.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Cnr41X_W.js";import"./TextField-Cy2yQ6kB.js";import"./sharedUtilsInputs-DwXaRU5M.js";import"./AnalyticalWidget-DSQoVeSt.js";import"./Collapse-Cm7v2G0B.js";import"./Table-1Tfpc0dH.js";import"./react-data-grid-BsdX0Dj6.js";import"./TableTabs-Bhx9_QRR.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-_JgDoTdO.js";import"./ListOfFilters-LYTZ3V_l.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-ktP3G9r6.js";import"./EmptyState-9NF6aOUa.js";import"./MassActions-fQFLXngd.js";import"./Autocomplete-DEpORJTX.js";import"./TableGlide-BsbvuxRZ.js";import"./@glideappsfinal/glide-data-grid-Bsd0xK58.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-Bs4XOpDv.js";function r(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c,name:"Docs"}),`
`,e.jsx(n.h1,{id:"subrows-tablecanvas",children:"SubRows (TableCanvas)"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"tableConfig.subRows + columnConfig.subRow"})}),`
`,e.jsx(n.p,{children:"Иерархичное отображение данных с вложенными строками. Поддерживает произвольную глубину вложенности."}),`
`,e.jsx(n.p,{children:"Конфигурация состоит из двух частей:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"tableConfig.subRows"})})," — дерево данных: функция получения дочерних строк, ключ строки, состояние раскрытия"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"columnConfig[].subRow"})})," — отображение на уровне колонки: маппинг ключей, рендер ячеек, стрелка раскрытия"]}),`
`]}),`
`,e.jsx(n.h2,{id:"tableconfigsubrows",children:"tableConfig.subRows"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"getSubRows"})})," ",e.jsx(n.code,{children:"(row) => RowType[] | undefined"})," — функция получения дочерних строк"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"rowKeyGetter"})})," ",e.jsx(n.code,{children:"(row) => RowIdType"})," — уникальный ключ строки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"expandedIdsState"})})," ",e.jsx(n.code,{children:"[Set, setter]"})," — внешний стейт развёрнутых строк (опционально, иначе внутренний useState)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"columnconfigsubrow",children:"columnConfig.subRow"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"isColumnWithArrow"})})," ",e.jsx(n.code,{children:"boolean | ((props) => boolean)"})," — стрелка раскрытия в этой колонке (default: ",e.jsx(n.code,{children:"false"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"hideHeaderExpandAllArrow"})})," ",e.jsx(n.code,{children:"boolean"})," — скрыть кнопку «развернуть все» в header (default: ",e.jsx(n.code,{children:"false"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"parentKeyAsDefault"})})," ",e.jsx(n.code,{children:"boolean"})," — использовать ключ родителя как fallback (default: ",e.jsx(n.code,{children:"false"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"keyOfColumnInSubRow"})})," ",e.jsx(n.code,{children:"string | number | ((lvl) => string | number)"})," — маппинг ключей колонок для каждого уровня"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"contentFormat"})})," ",e.jsx(n.code,{children:"ContentFormat"})," — формат содержимого подстрок"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"renderSubRowCell"})})," ",e.jsx(n.code,{children:"RenderSubRowCell"})," — кастомный рендер ячеек подстрок"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Подробнее о типах — ",e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-subrows-api--docs",children:"SubRows API"})]}),`
`]}),`
`,e.jsx(l,{})]})}function z(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{z as default};
