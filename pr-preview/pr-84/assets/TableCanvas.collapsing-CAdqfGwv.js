import{j as e}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as r}from"./vendor-jA4wuS4s.js";import{T as c}from"./TableCanvas.collapsing.stories-DUH5-u1B.js";import"./react-is-Clcustum.js";import"./styled-components-K_UgxV0U.js";import"./@tanstack/react-virtual-BkKf7fTG.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DmqDt2jy.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CsCx5Dnu.js";import"./FiltersActions-BN621ce1.js";import"./IconButton-fZdGCHmq.js";import"./@salutejs/plasma-icons-Cned1VwB.js";import"./@salutejs/sdds-finai-DPJwR7J7.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-DgtL12YF.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BmA-nIg5.js";import"./TextField-CFeD0ht5.js";import"./sharedUtilsInputs-By7d6npK.js";import"./AnalyticalWidget-z1rOdXgG.js";import"./Collapse-DEom9F6t.js";import"./Table-DIb9Fj_W.js";import"./react-data-grid-DIlgrhGG.js";import"./TableTabs-BLFKHoHr.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DGcMk-if.js";import"./ListOfFilters-DPu4cOcj.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DGQ0sxs8.js";import"./EmptyState-CHoXNkbO.js";import"./MassActions-DBde5Nms.js";import"./Autocomplete-DgZ0N99k.js";import"./TableGlide-B36FEZ0z.js";import"./@glideappsfinal/glide-data-grid-C8318ZtL.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-CvoTosEQ.js";function l(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,name:"Docs"}),`
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
