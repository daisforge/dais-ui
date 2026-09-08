import{j as e}from"./react-D2T61mpp.js";import{cc as s,cd as i,c6 as l}from"./vendor-C-w11k8S.js";import{T as c}from"./TableCanvas.subRows.stories-JExpNoRM.js";import"./react-is-Clcustum.js";import"./styled-components-Dp3rHGA3.js";import"./@tanstack/react-virtual-BuSs1H_i.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-Dr38O55U.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BDqwuld2.js";import"./FiltersActions-23YjNE8B.js";import"./IconButton-DdFXwzF4.js";import"./@salutejs/plasma-icons-CCz65j_O.js";import"./@salutejs/sdds-finai-DAnJwbl_.js";import"./@salutejs/sdds-themes-BbT5gGEE.js";import"./utils-D9qeEgje.js";import"./constants-DqXCEMDa.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BvxEXmQ2.js";import"./TextField-Dk61XNU8.js";import"./sharedUtilsInputs-XRH2KB9F.js";import"./AnalyticalWidget-bRAxxm2b.js";import"./Collapse-7thSAqRT.js";import"./Table-vGY0gQI5.js";import"./react-data-grid-CCr1SSii.js";import"./TableTabs-C6D4wdps.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-BvY6XpyS.js";import"./ListOfFilters-pUJgBkfF.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C_ZwncIq.js";import"./EmptyState-BUqTI7YQ.js";import"./MassActions-D_5k9PZo.js";import"./Autocomplete-ELvjw64L.js";import"./TableGlide-CYLfS4uF.js";import"./@glideappsfinal/glide-data-grid-DLhBeAA-.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CABAOhVX.js";function r(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c,name:"Docs"}),`
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
`,e.jsx(l,{})]})}function N(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{N as default};
