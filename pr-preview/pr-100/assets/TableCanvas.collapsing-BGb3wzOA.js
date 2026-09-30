import{j as e}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as r}from"./vendor-BNFW_pYF.js";import{T as c}from"./TableCanvas.collapsing.stories-DEj4DzTE.js";import"./react-is-Clcustum.js";import"./styled-components-BvZa5gud.js";import"./@tanstack/react-virtual-DKYL8UD-.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BXZ65Ax0.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BjaSoXYj.js";import"./FiltersActions-ddlEvNUS.js";import"./IconButton-CIJJ8kvO.js";import"./@salutejs/plasma-icons-pPDQz5yu.js";import"./@salutejs/sdds-finai-D2UnOIcJ.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-B9uvKYxl.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CZvtUCcX.js";import"./TextField-B46wpGhS.js";import"./sharedUtilsInputs-B-HPaeVW.js";import"./AnalyticalWidget-aB2E1sUn.js";import"./Collapse-B1Ev0kqR.js";import"./Table-BrEVYgwj.js";import"./react-data-grid-CLyVD8kp.js";import"./TableTabs-ATBxTKMj.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Dp-uH6xx.js";import"./ListOfFilters-BIHhEWIq.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BoT5_js5.js";import"./EmptyState-DePu3zBJ.js";import"./MassActions-DWDnpNRw.js";import"./Autocomplete-ni_qdj3J.js";import"./TableGlide-D5e0xukL.js";import"./@glideappsfinal/glide-data-grid-DemkcDcG.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BXj_XHtI.js";function l(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,name:"Docs"}),`
`,e.jsx(o.h1,{id:"collapsing-tablecanvas",children:"Collapsing (TableCanvas)"}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"tableConfig.collapsing"})}),`
`,e.jsx(o.p,{children:"Сворачивание/разворачивание тела таблицы. Кнопка управления отображается в controlBlock."}),`
`,e.jsx(o.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Активация через ",e.jsx(o.code,{children:"enableCollapse: true"})]}),`
`,e.jsxs(o.li,{children:["Внешнее управление состоянием через ",e.jsx(o.code,{children:"collapsedState"})]}),`
`,e.jsxs(o.li,{children:["Два варианта размещения кнопки: ",e.jsx(o.code,{children:"'inside'"})," (в controlBlock, участвует в компрессии) и ",e.jsx(o.code,{children:"'above'"})," (отдельный блок сверху)"]}),`
`,e.jsxs(o.li,{children:["Кастомный слот справа от кнопки при ",e.jsx(o.code,{children:"collapseButtonPlacement: 'above'"})]}),`
`]}),`
`,e.jsx(o.h2,{id:"конфигурация",children:"Конфигурация"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"enableCollapse"})})," ",e.jsx(o.code,{children:"boolean"})," — активация фичи (default: ",e.jsx(o.code,{children:"false"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"defaultCollapsed"})})," ",e.jsx(o.code,{children:"boolean"})," — начальное состояние (default: ",e.jsx(o.code,{children:"false"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"collapseText"})})," ",e.jsx(o.code,{children:"string"})," — текст кнопки при раскрытом состоянии (default: ",e.jsx(o.code,{children:"'Свернуть'"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"expandText"})})," ",e.jsx(o.code,{children:"string"})," — текст кнопки при закрытом состоянии (default: ",e.jsx(o.code,{children:"'Развернуть'"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"onToggleCollapse"})})," ",e.jsx(o.code,{children:"(isCollapsed: boolean) => void"})," — callback при изменении состояния"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"collapsedState"})})," ",e.jsx(o.code,{children:"[boolean, setState]"})," — внешний стейт"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"collapseButtonPlacement"})})," ",e.jsx(o.code,{children:"'inside' | 'above'"})," — размещение кнопки (default: ",e.jsx(o.code,{children:"'inside'"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"collapseButtonAboveRightSlot"})})," ",e.jsx(o.code,{children:"ReactNode"})," — кастомный слот справа (только при ",e.jsx(o.code,{children:"'above'"}),")"]}),`
`]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["Подробнее о типах — ",e.jsx(o.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-collapsing-api--docs",children:"Collapsing API"})]}),`
`]}),`
`,e.jsx(r,{})]})}function Q(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(l,{...n})}):l(n)}export{Q as default};
