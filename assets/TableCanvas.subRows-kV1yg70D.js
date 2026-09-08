import{j as e}from"./react-D2T61mpp.js";import{cc as s,cd as i,c6 as l}from"./vendor-CSAr92if.js";import{T as c}from"./TableCanvas.subRows.stories-CTMgV_fg.js";import"./react-is-Clcustum.js";import"./styled-components-ZBTAG_Yl.js";import"./@tanstack/react-virtual-B8iA4ZKy.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-Cfhok6MY.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-3emtYoGw.js";import"./FiltersActions-BKFtPxyb.js";import"./IconButton-b3a_3ixI.js";import"./@salutejs/plasma-icons-okGG1xc8.js";import"./@salutejs/sdds-finai-DjVIg8A-.js";import"./@salutejs/sdds-themes-BbT5gGEE.js";import"./utils-CYEse6yn.js";import"./constants-DqXCEMDa.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-jB8XDFU9.js";import"./TextField-DBFBb3W8.js";import"./sharedUtilsInputs-B-me6R4C.js";import"./AnalyticalWidget-CLSSgCQw.js";import"./Collapse-H8U_Ale8.js";import"./Table-Di2fEJCk.js";import"./react-data-grid-B6EFrvhw.js";import"./TableTabs-BXVZBURa.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CS_ICbFc.js";import"./ListOfFilters-cpcetn1F.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DoOkwcp3.js";import"./EmptyState-CKBYiGrU.js";import"./MassActions-CFvZieSq.js";import"./Autocomplete-CJ0yZAju.js";import"./TableGlide-hALIsnon.js";import"./@glideappsfinal/glide-data-grid-DXWAK0Fv.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DfYmp1nP.js";function r(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c,name:"Docs"}),`
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
